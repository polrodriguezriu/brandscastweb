/**
 * Verifies that the reviewed report release assets have not drifted.
 * Update the manifest deliberately whenever an asset is regenerated.
 */
import { createHash } from "node:crypto";
import { listCheckFiles } from "./list-check-files.mjs";
import fs from "node:fs";
import path from "node:path";

const REPORT_DIR = "public/report";
const MANIFEST_PATH = path.join(REPORT_DIR, "asset-manifest.json");
const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
const errors = [];
const seen = new Set();
const releaseFiles = listCheckFiles(REPORT_DIR)
  .map((file) => path.relative(REPORT_DIR, file))
  .filter(
    (file) =>
      file !== path.basename(MANIFEST_PATH) && !file.startsWith("social-src/"),
  );

if (manifest.version !== 1 || !Array.isArray(manifest.assets)) {
  errors.push("asset-manifest.json has an unsupported shape");
} else {
  for (const asset of manifest.assets) {
    if (
      !asset ||
      typeof asset.role !== "string" ||
      asset.role.length === 0 ||
      typeof asset.path !== "string" ||
      !Number.isSafeInteger(asset.bytes) ||
      asset.bytes < 0 ||
      typeof asset.sha256 !== "string" ||
      !/^[a-f0-9]{64}$/.test(asset.sha256)
    ) {
      errors.push("manifest contains an invalid asset record");
      continue;
    }

    if (seen.has(asset.path)) {
      errors.push(`duplicate manifest path: ${asset.path}`);
      continue;
    }
    seen.add(asset.path);

    if (path.isAbsolute(asset.path) || asset.path.split("/").includes("..")) {
      errors.push(`unsafe manifest path: ${asset.path}`);
      continue;
    }

    const file = path.join(REPORT_DIR, asset.path);
    if (!fs.existsSync(file)) {
      errors.push(`missing report asset: ${asset.path}`);
      continue;
    }

    const contents = fs.readFileSync(file);
    const hash = createHash("sha256").update(contents).digest("hex");
    if (contents.byteLength !== asset.bytes) {
      errors.push(
        `${asset.path} size changed: expected ${asset.bytes}, found ${contents.byteLength}`,
      );
    }
    if (hash !== asset.sha256) {
      errors.push(`${asset.path} SHA-256 changed`);
    }
  }
}

const unlisted = releaseFiles.filter((file) => !seen.has(file));
const stale = [...seen].filter((file) => !releaseFiles.includes(file));

if (unlisted.length) {
  errors.push(`unlisted release assets: ${unlisted.join(", ")}`);
}

if (stale.length) {
  errors.push(`manifest entries outside the release set: ${stale.join(", ")}`);
}

if (errors.length) {
  console.error(
    "\n✖ Report release assets do not match the reviewed manifest:\n",
  );
  errors.forEach((error) => console.error(`• ${error}`));
  console.error();
  process.exit(1);
}

console.log(`✓ ${seen.size} reviewed report assets match the release manifest`);
