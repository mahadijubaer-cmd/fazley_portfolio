import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await page.evaluate(async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight * 0.8) {
    window.scrollTo(0, y);
    await new Promise((resolve) => setTimeout(resolve, 180));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(800);
const results = await new AxeBuilder({ page }).analyze();
console.log(JSON.stringify(results.violations.map((violation) => ({
  id: violation.id,
  impact: violation.impact,
  help: violation.help,
  nodes: violation.nodes.map((node) => ({ target: node.target, summary: node.failureSummary })),
})), null, 2));
await browser.close();
if (results.violations.some((violation) => violation.impact === "serious" || violation.impact === "critical")) process.exitCode = 1;
