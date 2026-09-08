/**
 * Fails the build when public routes and public/sitemap.xml drift apart.
 * The sitemap remains hand-authored so priority and change frequency can be
 * reviewed, while route coverage is enforced automatically.
 */
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const BASE_URL = "https://brandscast.com";
const IGNORE = new Set(["/cookies/", "/legal/", "/privacy/"]);
const errors = [];

const pageFiles = execFileSync("rg", ["--files", "src/app", "-g", "page.tsx"])
  .toString()
  .trim()
  .split("\n")
  .filter(Boolean);

const routes = pageFiles
  .map((file) => file.replace(/^src\/app\//, "").replace(/\/?page\.tsx$/, ""))
  .map((segment) => (segment === "" ? "/" : `/${segment}/`))
  .filter((route) => !IGNORE.has(route));

const sitemap = fs.readFileSync("public/sitemap.xml", "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  ([, url]) => url,
);
const invalidUrls = sitemapUrls.filter(
  (url) => !url.startsWith(`${BASE_URL}/`) && url !== `${BASE_URL}/`,
);
const sitemapRoutes = sitemapUrls.map((url) => url.replace(BASE_URL, ""));
const routeSet = new Set(routes);
const sitemapRouteSet = new Set(sitemapRoutes);

const missing = routes.filter((route) => !sitemapRouteSet.has(route));
const extra = sitemapRoutes.filter((route) => !routeSet.has(route));
const duplicates = sitemapRoutes.filter(
  (route, index) => sitemapRoutes.indexOf(route) !== index,
);

if (missing.length) {
  errors.push(
    `Missing routes:\n${missing.map((route) => `   - ${route}`).join("\n")}`,
  );
}

if (extra.length) {
  errors.push(
    `Unknown routes:\n${extra.map((route) => `   - ${route}`).join("\n")}`,
  );
}

if (duplicates.length) {
  errors.push(
    `Duplicate routes:\n${[...new Set(duplicates)]
      .map((route) => `   - ${route}`)
      .join("\n")}`,
  );
}

if (invalidUrls.length) {
  errors.push(
    `Invalid canonical hosts:\n${invalidUrls.map((url) => `   - ${url}`).join("\n")}`,
  );
}

if (errors.length) {
  console.error("\n✖ sitemap.xml is out of sync:\n");
  errors.forEach((error) => console.error(`• ${error}\n`));
  process.exit(1);
}

console.log(`✓ sitemap.xml covers all ${routes.length} indexable routes`);
