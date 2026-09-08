/**
 * Keeps the report's visible citations and Schema.org isBasedOn list aligned
 * with the approved evidence register.
 */
import fs from "node:fs";

const REPORT_PAGE = "src/app/state-of-internal-communication-2026/page.tsx";
const EXPECTED_SOURCES = [
  "https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx",
  "https://www.gallup.com/workplace/697850/state-of-the-global-workplace-regional-data.aspx",
  "https://staffbase.com/blog/employee-communication-impact-study-2025",
  "https://politemail.com/internal-email-benchmarks-for-communicators/",
  "https://www.edisonresearch.com/the-infinite-dial-2026/",
  "https://www.westwoodone.com/blog/2026/03/09/edisons-q4-2025-share-of-ear-in-car-listening-grows-in-importance-for-am-fm-radio-as-it-dominates-the-path-to-purchase/",
  "https://revistascientificas.us.es/index.php/Ambitos/article/view/29187",
  "https://www.emcap.com/technology-for-the-deskless-workforce-2020",
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
