/**
 * Protect the selected teaser highlights and related guides, not retired
 * chapter text. The PDF's full evidence remains protected by its asset hash.
 */
import fs from "node:fs";

const surfaces = new Map([
  [
    "report",
    fs.readFileSync(
      "src/app/state-of-internal-communication-2026/page.tsx",
      "utf8",
    ),
  ],
  ["homepage", fs.readFileSync("src/app/page.tsx", "utf8")],
  [
    "deskless guide",
    fs.readFileSync(
      "src/app/resources/deskless-internal-communication/page.tsx",
      "utf8",
    ),
  ],
  [
    "metrics guide",
    fs.readFileSync(
      "src/app/resources/internal-communication-metrics/page.tsx",
      "utf8",
    ),
  ],
]);
const requirements = [
  [
    "report",
    /66\.2% recorded unique open rate/,
    "open rate remains a recorded metric",
  ],
  [
    "report",
    /Recorded opens do not confirm attentive human reading, understanding or workforce coverage/,
    "open-rate limits remain adjacent to the highlight",
  ],
  [
    "report",
    /45% of surveyed non-desk employees said they were not really, or not at all, informed about why their company makes changes/,
    "45 percent remains qualified by sample and question",
  ],
  [
    "report",
    /self-reported perception, not a measure of delivery or a causal finding/,
    "survey is not causal or delivery evidence",
  ],
  [
    "report",
    /Only 9% of surveyed non-desk employees were very satisfied/,
    "9 percent remains tied to surveyed non-desk employees",
  ],
  [
    "report",
    /Staffbase and YouGov surveyed 3,574 employees across Australia, Austria, Germany, Switzerland, the UK and the US/,
    "sample and six countries remain explicit",
  ],
  [
    "report",
    /percentages above refer to the non-desk subgroup, not the full sample/,
    "denominator is the subgroup",
  ],
  [
    "report",
    /Audio still requires auditory attention and a safe, appropriate context/,
    "audio suitability remains bounded",
  ],
  [
    "report",
    /No original survey was conducted by Brandscast/,
    "research synthesis is not original data",
  ],
  [
    "report",
    /complete bibliography and methodological limitations/,
    "full evidence remains in the PDF",
  ],
  [
    "report",
    /href="\/report\/the-state-of-internal-communication-2026\.pdf" download/,
    "PDF remains a direct ungated download",
  ],
  ["report", /No email required/, "ungated download is explicit"],
  [
    "homepage",
    /Internal email can perform well for the people it reaches/,
    "homepage distinguishes performance from coverage",
  ],
  [
    "homepage",
    /Our report brings together published research/,
    "homepage identifies a synthesis",
  ],
  [
    "homepage",
    /src="\/report\/final-cover\.png"/,
    "homepage uses the final cover",
  ],
  [
    "deskless guide",
    /surveyed 3,574 employees in six countries in 2025/,
    "deskless guide keeps sample context",
  ],
  [
    "deskless guide",
    /These are self-reported perceptions\. They do not identify a single cause/,
    "deskless guide retains causality limitation",
  ],
  [
    "metrics guide",
    /83\.7% of opens met its attention rate threshold under the provider&apos;s methodology/,
    "metrics guide uses the provider threshold",
  ],
];
const errors = [];
for (const [surface, pattern, description] of requirements) {
  const source = surfaces.get(surface).replace(/\s+/g, " ");
  if (!pattern.test(source)) errors.push(`${surface}: ${description}`);
}
if (errors.length) {
  console.error("\nReport evidence-copy checks failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(
  `[evidence-copy] ${requirements.length} qualifiers pass across ${surfaces.size} surfaces`,
);
