import { XMLValidator } from "fast-xml-parser";

export function validateSitemapEntries(
  sitemap,
  today = new Date().toISOString().slice(0, 10),
) {
  const errors = [];
  const xmlValidation = XMLValidator.validate(sitemap);
  if (xmlValidation !== true) {
    errors.push(`malformed XML: ${xmlValidation.err.msg}`);
    return errors;
  }

  const rootMatch = sitemap.match(
    /^\s*(?:<\?xml[^>]*>\s*)?<urlset\b[^>]*>([\s\S]*)<\/urlset>\s*$/,
  );
  if (!rootMatch) {
    errors.push("expected one complete <urlset> root element");
  }

  const openingUrlTags = sitemap.match(/<url>/g) ?? [];
  const closingUrlTags = sitemap.match(/<\/url>/g) ?? [];

  if (openingUrlTags.length !== closingUrlTags.length) {
    errors.push(
      `unbalanced <url> tags: ${openingUrlTags.length} opening and ${closingUrlTags.length} closing`,
    );
  }

  const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
    ([, block]) => block,
  );

  if (rootMatch) {
    const unmatchedRootContent = rootMatch[1]
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<url>[\s\S]*?<\/url>/g, "")
      .trim();
    if (unmatchedRootContent) {
      errors.push("unexpected or malformed content inside <urlset>");
    }
  }

  for (const block of urlBlocks) {
    if (/<\/?url>/.test(block)) {
      errors.push("nested <url> elements are not allowed");
      continue;
    }
    const locations = [...block.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      ([, value]) => value,
    );
    const loc = locations[0] ?? "unknown URL";
    if (locations.length !== 1) {
      errors.push(`${loc}: expected one <loc>, found ${locations.length}`);
    }

    const lastmods = [...block.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map(
      ([, value]) => value,
    );
    if (lastmods.length !== 1) {
      errors.push(`${loc}: expected one <lastmod>, found ${lastmods.length}`);
      continue;
    }

    const [lastmod] = lastmods;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
      errors.push(`${loc}: invalid <lastmod> date ${lastmod}`);
      continue;
    }

    const parsedDate = new Date(`${lastmod}T00:00:00Z`);
    if (
      Number.isNaN(parsedDate.getTime()) ||
      parsedDate.toISOString().slice(0, 10) !== lastmod
    ) {
      errors.push(`${loc}: impossible <lastmod> date ${lastmod}`);
      continue;
    }

    if (lastmod > today) {
      errors.push(`${loc}: future <lastmod> date ${lastmod}`);
    }
  }

  return errors;
}
