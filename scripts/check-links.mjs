/**
 * Checks literal internal links in TSX files against App Router pages and
 * public assets. Dynamic links remain the responsibility of their caller.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const files = execFileSync("rg", ["--files", "src", "-g", "*.tsx"])
  .toString()
  .trim()
  .split("\n")
  .filter(Boolean);
const pageFiles = files.filter((file) => file.endsWith("/page.tsx"));
const routes = new Set(
  pageFiles.map((file) => {
    const segment = file
      .replace(/^src\/app\//, "")
      .replace(/\/?page\.tsx$/, "");
    return segment === "" ? "/" : `/${segment}/`;
  }),
);

const errors = [];
const globalIds = new Set(
  files.flatMap((file) => {
    const source = fs.readFileSync(file, "utf8");
    return [...source.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map(
      ([, id]) => id,
    );
  }),
);

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
}

function normaliseRoute(href) {
  const pathname = href.split(/[?#]/, 1)[0];
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const ids = new Set(
    [...source.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map(([, id]) => id),
  );

  for (const match of source.matchAll(/\bhref\s*=\s*["']([^"']+)["']/g)) {
    const href = match[1];
    const line = lineNumber(source, match.index);

    if (href.startsWith("#")) {
      const id = href.slice(1);
      if (id && !ids.has(id) && !globalIds.has(id)) {
        errors.push(`${file}:${line} missing local anchor ${href}`);
      }
      continue;
    }

    if (!href.startsWith("/") || href.startsWith("//")) continue;

    const pathname = href.split(/[?#]/, 1)[0];
    const extension = path.posix.extname(pathname);

    if (extension) {
      const publicFile = path.join("public", pathname.slice(1));
      if (!fs.existsSync(publicFile)) {
        errors.push(`${file}:${line} missing public asset ${pathname}`);
      }
      continue;
    }

    const route = normaliseRoute(href);
    if (!routes.has(route)) {
      errors.push(`${file}:${line} missing internal route ${route}`);
    }
  }

  const checkedAssets = new Set();
  for (const match of source.matchAll(
    /["'](\/[^"'?#]+\.(?:avif|gif|jpe?g|pdf|png|svg|webp))["']/gi,
  )) {
    const pathname = match[1];
    if (checkedAssets.has(pathname)) continue;
    checkedAssets.add(pathname);

    const publicFile = path.join("public", pathname.slice(1));
    if (!fs.existsSync(publicFile)) {
      errors.push(
        `${file}:${lineNumber(source, match.index)} missing public asset ${pathname}`,
      );
    }
  }
}

if (errors.length) {
  console.error("\n✖ Literal internal links are invalid:\n");
  errors.forEach((error) => console.error(`• ${error}`));
  console.error();
  process.exit(1);
}

console.log(`✓ literal internal links pass across ${files.length} TSX files`);
