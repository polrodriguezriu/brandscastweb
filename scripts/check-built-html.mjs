/**
 * Verifies semantic structure in the HTML emitted by the production build.
 * Run after `next build`; React flight payloads are removed before checking
 * element nesting so serialized markup cannot create false positives.
 */
import fs from "node:fs";
import path from "node:path";

const APP_OUTPUT = ".next/server/app";
const IGNORE = new Set([
  "_global-error.html",
  "_not-found.html",
  // Permanent redirect to /tracks/.
  "audiocourses.html",
]);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function count(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

if (!fs.existsSync(APP_OUTPUT)) {
  console.error("\n✖ No production build found. Run `pnpm build` first.\n");
  process.exit(1);
}

const files = walk(APP_OUTPUT).filter((file) => {
  const relativePath = path.relative(APP_OUTPUT, file);
  return file.endsWith(".html") && !IGNORE.has(relativePath);
});
const errors = [];

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const relativePath = path.relative(APP_OUTPUT, file);

  if (source.includes("googletagmanager.com/gtag/js")) {
    errors.push(`${relativePath}: prerenders the Google Analytics loader`);
  }

  const visibleMarkup = source
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "");
  const requiredElements = [
    ["h1", /<h1(?:\s|>)/gi],
    ["main", /<main(?:\s|>)/gi],
    ["title", /<title(?:\s|>)/gi],
    ["description", /<meta\s+name=["']description["']/gi],
    ["canonical", /<link\s+rel=["']canonical["']/gi],
  ];

  for (const [name, pattern] of requiredElements) {
    const occurrences = count(visibleMarkup, pattern);
    if (occurrences !== 1) {
      errors.push(
        `${relativePath}: expected one ${name}; found ${occurrences}`,
      );
    }
  }

  if (/<p\b[^>]*>(?:(?!<\/p>)[\s\S])*<p(?:\s|>)/i.test(visibleMarkup)) {
    errors.push(`${relativePath}: nested paragraph element`);
  }

  if (/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<a(?:\s|>)/i.test(visibleMarkup)) {
    errors.push(`${relativePath}: nested anchor element`);
  }

  for (const image of visibleMarkup.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt=["'][^"']*["']/i.test(image[0])) {
      errors.push(`${relativePath}: image without an alt attribute`);
    }
  }

  const ids = [...visibleMarkup.matchAll(/\sid=["']([^"']+)["']/gi)].map(
    ([, id]) => id,
  );
  const duplicateIds = [
    ...new Set(ids.filter((id, index) => ids.indexOf(id) !== index)),
  ];
  duplicateIds.forEach((id) => {
    errors.push(`${relativePath}: duplicate id ${id}`);
  });
}

if (errors.length) {
  console.error("\n✖ Built HTML structure is invalid:\n");
  errors.forEach((error) => console.error(`• ${error}`));
  console.error();
  process.exit(1);
}

console.log(
  `✓ ${files.length} public HTML pages pass structure and analytics-loader checks`,
);
