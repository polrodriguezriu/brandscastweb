import fs from "node:fs";
import path from "node:path";

// Only the basename filters used by the build guards are supported.
export function listCheckFiles(directory, pattern) {
  const matches = {
    "*": () => true,
    "page.tsx": (name) => name === "page.tsx",
    "*.tsx": (name) => name.endsWith(".tsx"),
    "*.svg": (name) => name.endsWith(".svg"),
  }[pattern ?? "*"];
  if (!matches) throw new Error(`Unsupported build-check filter: ${pattern}`);

  function walk(current) {
    return fs.readdirSync(current, { withFileTypes: true }).flatMap((entry) => {
      if (entry.isSymbolicLink()) return [];
      // An explicit matching -g basename also includes a hidden entry in rg.
      if (entry.name.startsWith(".") && !(pattern && matches(entry.name))) {
        return [];
      }
      const file = path.join(current, entry.name);
      if (entry.isDirectory()) return walk(file);
      return entry.isFile() && matches(entry.name)
        ? [file.split(path.sep).join("/")]
        : [];
    });
  }

  return walk(directory).sort();
}
