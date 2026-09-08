/**
 * Ensures static page canonicals match their route and that Open Graph URLs,
 * when present, do not point to legacy or non-canonical paths.
 */
import fs from "node:fs";
import { listCheckFiles } from "./list-check-files.mjs";

const BASE_URL = "https://brandscast.com";
const IGNORE = new Set([
  // Permanent redirect to /tracks/; it must not declare itself canonical.
  "src/app/audiocourses/page.tsx",
]);
const errors = [];

const pageFiles = listCheckFiles("src/app", "page.tsx").filter(
  (file) => !IGNORE.has(file),
);

for (const file of pageFiles) {
  const source = fs.readFileSync(file, "utf8");
  const segment = file.replace(/^src\/app\//, "").replace(/\/?page\.tsx$/, "");
  const expected = `${BASE_URL}${segment ? `/${segment}/` : "/"}`;
  const canonical = source.match(/canonical:\s*["']([^"']+)["']/)?.[1];
  const openGraphUrl = source.match(
    /openGraph:\s*\{[\s\S]*?url:\s*["']([^"']+)["']/,
  )?.[1];

  if (canonical !== expected) {
    errors.push(
      `${file}: canonical must be ${expected}; found ${canonical || "none"}`,
    );
  }

  if (openGraphUrl && openGraphUrl !== expected) {
    errors.push(
      `${file}: Open Graph URL must be ${expected}; found ${openGraphUrl}`,
    );
  }
}

if (errors.length) {
  console.error("\n✖ Public metadata is inconsistent:\n");
  errors.forEach((error) => console.error(`• ${error}`));
  console.error();
  process.exit(1);
}

console.log(`✓ canonicals are aligned across ${pageFiles.length} public pages`);
