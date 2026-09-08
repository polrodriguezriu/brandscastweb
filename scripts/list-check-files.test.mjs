import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { listCheckFiles } from "./list-check-files.mjs";

test("guard basename filters recurse and preserve case and exact filenames", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "check-files-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const names = [
    "page.tsx",
    "nested/page.tsx",
    "nested/Component.tsx",
    "nested/not-page.tsx",
    "nested/page.tsx.bak",
    "nested/Page.tsx",
    "nested/icon.svg",
    "nested/icon.SVG",
    "nested/.hidden.tsx",
    ".hidden/page.tsx",
    "asset.webp",
  ];
  for (const name of names) {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, "fixture");
  }
  fs.mkdirSync(path.join(root, "empty"));
  fs.symlinkSync(path.join(root, "page.tsx"), path.join(root, "linked.tsx"));
  fs.symlinkSync(root, path.join(root, "loop"), "dir");

  const relative = (pattern) =>
    listCheckFiles(root, pattern).map((file) =>
      path.relative(root, file).split(path.sep).join("/"),
    );

  assert.deepEqual(relative("page.tsx"), ["nested/page.tsx", "page.tsx"]);
  assert.deepEqual(relative("*.tsx"), [
    "nested/.hidden.tsx",
    "nested/Component.tsx",
    "nested/Page.tsx",
    "nested/not-page.tsx",
    "nested/page.tsx",
    "page.tsx",
  ]);
  assert.deepEqual(relative("*.svg"), ["nested/icon.svg"]);
  assert.deepEqual(
    relative(),
    names
      .filter((name) => !name.split("/").some((part) => part.startsWith(".")))
      .sort(),
  );
  assert.deepEqual(listCheckFiles(path.join(root, "empty")), []);
  assert.throws(() => listCheckFiles(path.join(root, "missing")), /ENOENT/);
  assert.throws(() => listCheckFiles(root, "**/*.tsx"), /Unsupported/);
});
