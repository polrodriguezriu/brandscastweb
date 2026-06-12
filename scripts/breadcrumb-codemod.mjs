import fs from "node:fs";
import { execSync } from "node:child_process";

const files = execSync(
  "ls src/app/industries/*/page.tsx src/app/resources/*/page.tsx",
)
  .toString()
  .trim()
  .split("\n");

const report = [];

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  if (/from "@\/components\/BreadcrumbSchema"/.test(s)) {
    report.push(`${file} (already has breadcrumbs)`);
    continue;
  }

  // page path: src/app/industries/healthcare/page.tsx -> /industries/healthcare/
  const seg = file.replace(/^src\/app\//, "").replace(/\/page\.tsx$/, "");
  const url = `https://brandscast.com/${seg}/`;

  // derive a readable title from the metadata title
  const tMatch = s.match(/title:\s*"([^"]+)"/);
  let title = tMatch ? tMatch[1] : seg.split("/").pop();
  title = title.split("|")[0].split("—")[0].trim();

  // No /industries or /resources index pages exist, so keep the trail truthful:
  // Home -> page (both real URLs), no broken intermediate node.
  const items = [
    { name: "Home", url: "https://brandscast.com/" },
    { name: title, url },
  ];
  const itemsLiteral = items
    .map(
      (it) =>
        `        { name: ${JSON.stringify(it.name)}, url: ${JSON.stringify(it.url)} },`,
    )
    .join("\n");

  // insert the component right before the first <Header
  const headerIdx = s.indexOf("<Header");
  if (headerIdx === -1) {
    report.push(`${file} (no <Header, skipped)`);
    continue;
  }
  // find the start of the line containing <Header to preserve indentation
  const lineStart = s.lastIndexOf("\n", headerIdx) + 1;
  const indent = s.slice(lineStart, headerIdx);
  const snippet = `${indent}<BreadcrumbSchema\n${indent}  items={[\n${itemsLiteral}\n${indent}  ]}\n${indent}/>\n`;
  s = s.slice(0, lineStart) + snippet + s.slice(lineStart);

  // add import after last import line
  const importRe = /^import .*;$/gm;
  let last;
  let m;
  while ((m = importRe.exec(s))) last = m;
  const insertAt = last.index + last[0].length;
  s =
    s.slice(0, insertAt) +
    '\nimport BreadcrumbSchema from "@/components/BreadcrumbSchema";' +
    s.slice(insertAt);

  fs.writeFileSync(file, s);
  report.push(`${file} -> ${title}`);
}

console.log(report.join("\n"));
console.log(`\nTotal: ${files.length}`);
