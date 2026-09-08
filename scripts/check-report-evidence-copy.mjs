/**
 * Protects the evidence qualifiers that must travel with report statistics.
 * This is a copy-integrity guard, not a substitute for opening primary sources.
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
const errors = [];

const requirements = [
  [
    "report",
    /A 2018 Emergence Capital estimate placed around 2\.7 billion/,
    "deskless estimate is dated in its opening sentence",
  ],
  [
    "report",
    /not a current census or a\s+measure of email access/,
    "deskless estimate is not a current census or email-access measure",
  ],
  [
    "report",
    /Staffbase and YouGov surveyed 3,574 employees\s+across Australia, Austria, Germany, Switzerland, the UK and the\s+US/,
    "Staffbase sample and six countries remain explicit",
  ],
  [
    "report",
    /Only 9% of surveyed non-desk employees were very satisfied/,
    "9 percent remains tied to surveyed non-desk employees",
  ],
  [
    "report",
    /45% of surveyed non-desk employees said they were not/,
    "45 percent remains tied to surveyed non-desk employees",
  ],
  [
    "report",
    /of surveyed non-desk employees said they never receive any\s+communication from senior leadership/,
    "12 percent leadership finding remains tied to the surveyed group",
  ],
  [
    "report",
    /63% of surveyed employees who were considering leaving their job/,
    "retention association remains tied to surveyed employees",
  ],
  [
    "report",
    /Majorities in the survey reported that internal\s+communication has some or a great impact/,
    "self-reported impact figures remain tied to the survey",
  ],
  [
    "report",
    /automated security scans, outdated distribution lists and\s+passive opens all register as opens/,
    "PoliteMail open-rate inflation caveat remains visible",
  ],
  [
    "report",
    /the recorded unique open rate is 66\.2%,\s+and 83\.7% of recorded opens meet its attention-rate threshold/,
    "PoliteMail summary remains framed as recorded provider metrics",
  ],
  [
    "report",
    /83\.7% of recorded\s+opens met its provider-defined threshold of more than three\s+seconds without immediate deletion/,
    "PoliteMail attention threshold remains defined",
  ],
  [
    "report",
    /global employee engagement at <strong>20%<\/strong>/,
    "Gallup engagement figure remains labelled as engagement",
  ],
  [
    "report",
    /cost of low <em>engagement<\/em> broadly, not a\s+cost attributed to poor communication specifically/,
    "Gallup cost is not attributed to internal communication",
  ],
  [
    "report",
    /<em>Infinite Dial 2026<\/em> \(n=2,050,\s+fielded January 2026 on a probability-based SSRS panel\)/,
    "Infinite Dial sample and method remain visible",
  ],
  [
    "report",
    /figures track people who have <strong>listened to or watched<\/strong>/,
    "Edison podcast measure retains its listen-or-watch definition",
  ],
  [
    "report",
    /<em>Share of Ear<\/em> is a subscription study; we\s+have not read the underlying data/,
    "Share of Ear remains identified as secondary reporting",
  ],
  [
    "report",
    /not as a cross-company performance benchmark/,
    "academic case study is not presented as a benchmark",
  ],
  [
    "homepage",
    /Staffbase\/YouGov 2025 \(n=3,574, six countries\)/,
    "homepage Staffbase statistics keep sample context",
  ],
  [
    "homepage",
    /not a current\s+census or a measure of email access/,
    "homepage deskless estimate keeps both limitations",
  ],
  [
    "deskless guide",
    /surveyed 3,574 employees in six countries\s+in 2025/,
    "deskless guide keeps Staffbase sample context",
  ],
  [
    "deskless guide",
    /These are self-reported perceptions\. They do\s+not identify a single cause/,
    "deskless guide keeps the causality limitation",
  ],
  [
    "metrics guide",
    /83\.7% of opens met its attention\s+rate threshold under the provider&apos;s methodology/,
    "metrics guide uses the provider attention threshold",
  ],
];

for (const [surface, pattern, description] of requirements) {
  // Formatting can wrap prose at any word without changing its qualifiers.
  const source = surfaces.get(surface).replace(/\s+/g, " ");
  if (!pattern.test(source)) {
    errors.push(`${surface}: ${description}`);
  }
}

if (errors.length) {
  console.error("\nReport evidence-copy checks failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  console.error();
  process.exit(1);
}

console.log(
  `[evidence-copy] ${requirements.length} statistical qualifiers pass across ${surfaces.size} surfaces`,
);
