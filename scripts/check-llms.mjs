/**
 * Guardrail: fails the build when public/llms.txt drifts from the source of
 * truth. Keeps the file hand-authored (so the prose stays good) while
 * guaranteeing it never ships stale.
 *
 * Checks:
 *  1. Every public page route (src/app/**\/page.tsx) is linked in llms.txt.
 *  2. Every pricing plan in src/lib/pricing.ts (price + member cap) appears in
 *     the llms.txt pricing section.
 *
 * Routes that should intentionally NOT be in llms.txt go in IGNORE below.
 * Run directly with: node scripts/check-llms.mjs
 */
import fs from "node:fs";
import { execSync } from "node:child_process";

const IGNORE = new Set([
  // routes deliberately excluded from llms.txt (none right now)
]);

const llms = fs.readFileSync("public/llms.txt", "utf8");
const errors = [];

// 1) route coverage ---------------------------------------------------------
const pageFiles = execSync("find src/app -name page.tsx")
  .toString()
  .trim()
  .split("\n");

const routes = pageFiles
  .map((f) =>
    f.replace(/^src\/app\//, "").replace(/\/?page\.tsx$/, ""),
  )
  .map((seg) => (seg === "" ? "/" : `/${seg}/`))
  .filter((r) => !IGNORE.has(r));

const llmsUrls = new Set(
  (llms.match(/https:\/\/brandscast\.com[^\s)]*/g) || []).map((u) =>
    u.replace(/^https:\/\/brandscast\.com/, "") || "/",
  ),
);

const missing = routes.filter((r) => !llmsUrls.has(r));
if (missing.length) {
  errors.push(
    `llms.txt is missing ${missing.length} page(s):\n` +
      missing.map((r) => `   - https://brandscast.com${r}`).join("\n"),
  );
}

// 2) pricing accuracy -------------------------------------------------------
const pricingSrc = fs.readFileSync("src/lib/pricing.ts", "utf8");
const arrMatch = pricingSrc.match(
  /export const PRICING_PLANS\s*=\s*(\[[\s\S]*?\])\s*as const;/,
);
if (!arrMatch) {
  errors.push("Could not parse PRICING_PLANS from src/lib/pricing.ts");
} else {
  // eslint-disable-next-line no-new-func
  const plans = new Function(`return ${arrMatch[1]}`)();
  const pricingSection = (llms.split("## Pricing")[1] || "").split("\n## ")[0];
  for (const p of plans) {
    const checks = [
      [`name "${p.name}"`, new RegExp(`\\*\\*${p.name}\\*\\*`)],
      [`monthly price ${p.monthlyPrice}`, new RegExp(`${p.monthlyPrice}`)],
      [`yearly price ${p.yearlyPrice}`, new RegExp(`${p.yearlyPrice}`)],
      [`member cap ${p.members}`, new RegExp(`${p.members}`)],
    ];
    for (const [label, re] of checks) {
      if (!re.test(pricingSection)) {
        errors.push(`Pricing section missing ${p.name} ${label}`);
      }
    }
  }
}

// report --------------------------------------------------------------------
if (errors.length) {
  console.error("\n✖ llms.txt is out of date:\n");
  errors.forEach((e) => console.error("• " + e + "\n"));
  console.error("Update public/llms.txt and rebuild.\n");
  process.exit(1);
}
console.log("✓ llms.txt is in sync with routes and pricing");
