import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

const baseUrl = "http://127.0.0.1:3000";
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const widths = [360, 390, 768, 1024, 1440];
const locales = ["en", "bn"];
const themes = ["light", "dark", "system"];
const failures = [];
const results = [];

const assert = (condition, message) => { if (!condition) failures.push(message); };
await mkdir("test-results/preferences", { recursive: true });
const browser = await chromium.launch({ executablePath: chrome, headless: true });

for (const locale of locales) {
  for (const theme of themes) {
    for (const width of widths) {
      const context = await browser.newContext({
        viewport: { width, height: width < 768 ? 844 : 900 },
        colorScheme: theme === "light" ? "light" : "dark",
      });
      await context.addInitScript((savedTheme) => localStorage.setItem("fazley-theme", savedTheme), theme);
      const page = await context.newPage();
      const consoleErrors = [];
      page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
      page.on("pageerror", (error) => consoleErrors.push(error.message));
      await page.goto(`${baseUrl}${locale === "bn" ? "/bn" : "/"}`, { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight * 0.8) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 180));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(850);

      const expectedResolvedTheme = theme === "light" ? "light" : "dark";
      const metrics = await page.evaluate(() => ({
        lang: document.documentElement.lang,
        setting: document.documentElement.dataset.themeSetting,
        resolvedTheme: document.documentElement.dataset.theme,
        selectValue: document.querySelector(".theme-selector select")?.value,
        width: document.documentElement.scrollWidth,
        viewport: window.innerWidth,
        brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).length,
        sections: document.querySelectorAll("main section").length,
        h1: document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim(),
        cvHrefs: [...document.querySelectorAll(".cv-button")].map((link) => ({ href: link.getAttribute("href"), download: link.getAttribute("download") })),
      }));
      const id = `${locale}-${theme}-${width}`;
      assert(metrics.lang === locale, `${id}: document language was ${metrics.lang}`);
      assert(metrics.setting === theme, `${id}: saved theme setting was ${metrics.setting}`);
      assert(metrics.selectValue === theme, `${id}: selector showed ${metrics.selectValue}`);
      assert(metrics.resolvedTheme === expectedResolvedTheme, `${id}: resolved theme was ${metrics.resolvedTheme}`);
      assert(metrics.width === metrics.viewport, `${id}: horizontal overflow ${metrics.width}/${metrics.viewport}`);
      assert(metrics.brokenImages === 0, `${id}: ${metrics.brokenImages} broken images`);
      assert(metrics.sections === 11, `${id}: expected 11 sections, saw ${metrics.sections}`);
      assert(locale === "bn" ? metrics.h1?.includes("প্রকৌশল") : metrics.h1?.includes("Engineering"), `${id}: hero was not localized`);
      assert(consoleErrors.length === 0, `${id}: console errors: ${consoleErrors.join(" | ")}`);
      assert(metrics.cvHrefs.length === 2 && metrics.cvHrefs.every((item) => item.download !== null), `${id}: CV download attributes missing`);
      assert(metrics.cvHrefs[0]?.href?.includes(locale === "bn" ? "Bangla" : "English"), `${id}: primary CV did not match locale`);

      if (width <= 390) {
        await page.locator(".menu-toggle").click();
        assert(await page.locator("#mobile-navigation").isVisible(), `${id}: mobile navigation did not open`);
        assert(await page.locator("#mobile-navigation .language-toggle").isVisible(), `${id}: mobile language control missing`);
        assert(await page.locator("#mobile-navigation .theme-selector").isVisible(), `${id}: mobile theme control missing`);
        await page.keyboard.press("Escape");
        await page.locator("#mobile-navigation").waitFor({ state: "detached", timeout: 2000 }).catch(() => {});
        assert(!(await page.locator("#mobile-navigation").isVisible().catch(() => false)), `${id}: Escape did not close mobile navigation`);
      }

      if (width === 1024 && theme === "light") {
        await page.locator(".gallery-card").first().click();
        assert(await page.getByRole("dialog").isVisible(), `${id}: lightbox did not open`);
        await page.keyboard.press("ArrowRight");
        await page.keyboard.press("Escape");
        await page.getByRole("dialog").waitFor({ state: "detached", timeout: 2000 }).catch(() => {});
        assert(!(await page.getByRole("dialog").isVisible().catch(() => false)), `${id}: lightbox did not close with Escape`);
      }

      if (width === 1440) {
        const axe = await new AxeBuilder({ page }).analyze();
        const severe = axe.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
        assert(severe.length === 0, `${id}: serious accessibility violations: ${severe.map((item) => item.id).join(", ")}`);
        if ((locale === "en" && theme === "light") || (locale === "bn" && theme === "dark")) {
          await page.screenshot({ path: `test-results/preferences/${id}.png`, fullPage: true });
        }
      }
      if (locale === "bn" && theme === "light" && width === 390) {
        await page.screenshot({ path: `test-results/preferences/${id}.png`, fullPage: true });
      }

      if (width === 768) {
        await page.reload({ waitUntil: "networkidle" });
        assert(await page.locator(".theme-selector select").first().inputValue() === theme, `${id}: theme did not survive reload`);
        assert(await page.locator("html").getAttribute("lang") === locale, `${id}: language did not survive reload`);
      }

      results.push({ id, lang: metrics.lang, theme: metrics.setting, resolved: metrics.resolvedTheme, consoleErrors: consoleErrors.length });
      await context.close();
    }
  }
}

{
  const context = await browser.newContext({ viewport: { width: 1024, height: 900 }, colorScheme: "light" });
  await context.addInitScript(() => localStorage.setItem("fazley-theme", "system"));
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  assert(await page.locator("html").getAttribute("data-theme") === "light", "System theme did not begin in light mode");
  await page.emulateMedia({ colorScheme: "dark" });
  await page.waitForTimeout(100);
  assert(await page.locator("html").getAttribute("data-theme") === "dark", "System theme did not respond to OS appearance change");
  await page.locator("#about").scrollIntoViewIfNeeded();
  await page.locator('.language-toggle button:has-text("বাংলা")').first().click();
  await page.waitForURL(/\/bn.*#about/);
  assert(await page.locator("html").getAttribute("lang") === "bn", "Language switch did not load Bangla");
  assert((await page.url()).endsWith("/bn#about"), "Language switch did not preserve the current section");
  assert(await page.evaluate(() => localStorage.getItem("fazley-locale")) === "bn", "Language selection was not persisted");
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  assert(new URL(page.url()).pathname === "/bn", "Saved Bangla preference did not redirect a later root visit");
  await context.close();
}

{
  const context = await browser.newContext();
  const expected = [
    ["/documents/Fazley_Alam_CV_English.pdf", 111156],
    ["/documents/Fazley_Alam_CV_Bangla.pdf", 131858],
  ];
  for (const [path, bytes] of expected) {
    const response = await context.request.get(`${baseUrl}${path}`);
    assert(response.ok(), `${path}: HTTP ${response.status()}`);
    assert((response.headers()["content-type"] || "").includes("application/pdf"), `${path}: incorrect content type`);
    assert((await response.body()).byteLength === bytes, `${path}: supplied PDF bytes changed`);
  }
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const links = await page.locator(".contact__methods a").evaluateAll((items) => items.map((item) => item.getAttribute("href")));
  for (const required of ["https://wa.me/8801730357226", "https://www.linkedin.com/in/fazley-alam-ba1aa3325", "https://fazley-portfolio.vercel.app/"]) {
    assert(links.includes(required), `Missing or incorrect contact link: ${required}`);
  }
  await context.close();
}

await browser.close();
console.log(JSON.stringify({ combinations: results.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
