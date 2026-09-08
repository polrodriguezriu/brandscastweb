/**
 * Keeps the teaser's selected citations and Schema.org isBasedOn aligned.
 * The unchanged PDF retains the complete report bibliography. Only sources
 * supporting the three visible highlights belong in this page's source list.
 */
import fs from "node:fs";

const REPORT_PAGE = "src/app/state-of-internal-communication-2026/page.tsx";
const EXPECTED_SOURCES = [
  "https://staffbase.com/blog/employee-communication-impact-study-2025",
  "https://politemail.com/internal-email-benchmarks-for-communicators/",
];
const source = fs.readFileSync(REPORT_PAGE, "utf8");
const schemaBlock = source.match(/isBasedOn:\s*\[([\s\S]*?)\]/)?.[1] || "";
const visibleBlock =
  source.match(/<h3>Sources<\/h3>([\s\S]*?)<\/ul>/)?.[1] || "";
const extractUrls = (block) =>
  [...block.matchAll(/["'](https:\/\/[^"']+)["']/g)].map(([, url]) => url);
const schemaSources = extractUrls(schemaBlock);
const visibleSources = extractUrls(visibleBlock);
const errors = [];

function compare(label, actual) {
  const missing = EXPECTED_SOURCES.filter((url) => !actual.includes(url));
  const extra = actual.filter((url) => !EXPECTED_SOURCES.includes(url));
  const duplicates = actual.filter(
    (url, index) => actual.indexOf(url) !== index,
  );

  if (missing.length) errors.push(`${label} missing: ${missing.join(", ")}`);
  if (extra.length) errors.push(`${label} unexpected: ${extra.join(", ")}`);
  if (duplicates.length) {
    errors.push(`${label} duplicates: ${[...new Set(duplicates)].join(", ")}`);
  }
}

compare("Schema.org isBasedOn", schemaSources);
compare("Visible source list", visibleSources);

if (errors.length) {
  console.error("\n✖ Report sources are out of sync:\n");
  errors.forEach((error) => console.error(`• ${error}`));
  console.error();
  process.exit(1);
}

console.log(
  `✓ ${EXPECTED_SOURCES.length} report evidence links match visible citations and Schema.org`,
);
