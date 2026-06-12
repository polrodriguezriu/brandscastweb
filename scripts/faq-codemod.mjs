import fs from "node:fs";
import { execSync } from "node:child_process";

const files = execSync("grep -rl 'className=\"faq\"' src/app")
  .toString()
  .trim()
  .split("\n");

const ENTITIES = {
  "&amp;": "&",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&copy;": "©",
  "&mdash;": "—",
  "&ndash;": "–",
  "&lt;": "<",
  "&gt;": ">",
};

function clean(text) {
  let t = text.replace(/\s+/g, " ").trim();
  for (const [ent, ch] of Object.entries(ENTITIES)) t = t.split(ent).join(ch);
  return t;
}

// find the index of the </div> that matches the <div> opening at `start`
function matchDivClose(s, start) {
  const re = /<div\b|<\/div>/g;
  re.lastIndex = start;
  let depth = 0;
  let m;
  while ((m = re.exec(s))) {
    if (m[0] === "</div>") {
      depth--;
      if (depth === 0) return m.index + m[0].length;
    } else depth++;
  }
  return -1;
}

const report = { migrated: [], skipped: [] };

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const faqIdx = s.indexOf('<div className="faq">');
  if (faqIdx === -1) {
    report.skipped.push(`${file} (no faq div)`);
    continue;
  }
  const faqEnd = matchDivClose(s, faqIdx);
  if (faqEnd === -1) {
    report.skipped.push(`${file} (unbalanced faq div)`);
    continue;
  }
  const faqInner = s.slice(faqIdx, faqEnd);

  // complexity guard: links, lists, strong, or multiple <p> per details
  const detailsBlocks = faqInner.match(/<details>[\s\S]*?<\/details>/g) || [];
  let complex = false;
  const items = [];
  for (const d of detailsBlocks) {
    if (/<a\b|<ul\b|<ol\b|<strong>|<em>/.test(d)) complex = true;
    const ps = d.match(/<p>/g) || [];
    if (ps.length !== 1) complex = true;
    const q = d.match(/<summary>([\s\S]*?)<\/summary>/);
    const a = d.match(/<p>([\s\S]*?)<\/p>/);
    if (!q || !a) {
      complex = true;
      break;
    }
    items.push({ q: clean(q[1]), a: clean(a[1]) });
  }
  if (complex || items.length === 0) {
    report.skipped.push(
      `${file} (complex/manual, ${detailsBlocks.length} items)`,
    );
    continue;
  }

  // find the <h2> immediately before the faq div
  const h2Open = s.lastIndexOf("<h2", faqIdx);
  const h2CloseTag = s.indexOf("</h2>", h2Open);
  if (h2Open === -1 || h2CloseTag === -1 || h2CloseTag > faqIdx) {
    report.skipped.push(`${file} (no preceding h2)`);
    continue;
  }
  const heading = clean(s.slice(s.indexOf(">", h2Open) + 1, h2CloseTag));

  const itemsLiteral = items
    .map(
      (it) => `    { q: ${JSON.stringify(it.q)}, a: ${JSON.stringify(it.a)} },`,
    )
    .join("\n");
  const replacement = `<Faq\n  heading={${JSON.stringify(heading)}}\n  items={[\n${itemsLiteral}\n  ]}\n/>`;

  s = s.slice(0, h2Open) + replacement + s.slice(faqEnd);

  // add import if missing
  if (!/from "@\/components\/Faq"/.test(s)) {
    // insert after the last existing import line
    const importRe = /^import .*;$/gm;
    let last;
    let m;
    while ((m = importRe.exec(s))) last = m;
    const insertAt = last.index + last[0].length;
    s =
      s.slice(0, insertAt) +
      '\nimport Faq from "@/components/Faq";' +
      s.slice(insertAt);
  }

  fs.writeFileSync(file, s);
  report.migrated.push(`${file} (${items.length} items)`);
}

console.log("MIGRATED:", report.migrated.length);
report.migrated.forEach((x) => console.log("  +", x));
console.log("SKIPPED:", report.skipped.length);
report.skipped.forEach((x) => console.log("  -", x));
