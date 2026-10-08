import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const widths = [360, 390, 768, 1024, 1440, 1920];
const browser = await chromium.launch({ executablePath: chrome, headless: true });
const findings = [];

await mkdir("test-results", { recursive: true });

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: width < 768 ? 844 : 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight * 0.8) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 180));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);

  const metrics = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    sections: document.querySelectorAll("main section").length,
    headings: document.querySelectorAll("h1, h2, h3").length,
    incompleteImages: Array.from(document.images).filter((image) => !image.complete || image.naturalWidth === 0).length,
    mainVisible: Boolean(document.querySelector("main")),
    overflowElements: Array.from(document.querySelectorAll("body *"))
      .map((element) => ({ selector: element.className || element.tagName, right: Math.round(element.getBoundingClientRect().right), left: Math.round(element.getBoundingClientRect().left) }))
      .filter((element) => element.right > window.innerWidth + 1 || element.left < -1)
      .slice(0, 8),
  }));

  await page.screenshot({ path: `test-results/page-${width}.png`, fullPage: true });

  if (width === 360) {
    for (const [name, selector] of [
      ["contributions", "#contributions"],
      ["development", ".development"],
      ["gallery", "#gallery"],
      ["contact", "#contact"],
    ]) {
      await page.locator(selector).screenshot({ path: `test-results/mobile-${name}.png` });
    }
  }

  if (width === 1440) {
    const accessibility = await new AxeBuilder({ page }).analyze();
    const seriousViolations = accessibility.violations
      .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
      .map((violation) => ({ id: violation.id, impact: violation.impact, nodes: violation.nodes.length }));
    findings.push({ width, accessibility: { seriousViolations } });
  }

  if (width <= 390) {
    await page.locator(".menu-toggle").click();
    await page.waitForTimeout(450);
    const expanded = await page.locator(".menu-toggle").getAttribute("aria-expanded");
    const menuVisible = await page.locator("#mobile-navigation").isVisible();
    await page.screenshot({ path: `test-results/menu-${width}.png` });
    await page.locator(".menu-toggle").click();
    findings.push({ width, mobileMenu: { expanded, menuVisible } });
  }

  if (width === 1024) {
    await page.locator("#gallery").scrollIntoViewIfNeeded();
    await page.locator(".gallery-card").first().click();
    const dialogVisible = await page.getByRole("dialog").isVisible();
    await page.keyboard.press("Escape");
    await page.waitForTimeout(450);
    const dialogClosed = !(await page.getByRole("dialog").isVisible().catch(() => false));
    findings.push({ width, lightbox: { dialogVisible, dialogClosed } });
  }

  findings.push({ width, metrics, consoleErrors });
  await context.close();
}

await browser.close();
console.log(JSON.stringify(findings, null, 2));

if (findings.some((item) =>
  (item.metrics && (item.metrics.documentWidth > item.metrics.viewportWidth || item.metrics.incompleteImages > 0 || item.consoleErrors.length)) ||
  (item.accessibility && item.accessibility.seriousViolations.length)
)) {
  process.exitCode = 1;
}
