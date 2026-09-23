import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { listCheckFiles } from "./list-check-files.mjs";
import { validateSitemapEntries } from "./sitemap-validation.mjs";

const read = (path) => fs.readFileSync(path, "utf8");

test("retired audit has no page, entry links, events or discovery entries", () => {
  assert.equal(
    fs.existsSync("src/app/communication-coverage-audit/page.tsx"),
    false,
  );
  assert.equal(
    fs.existsSync("src/app/communication-coverage-audit/CoverageAudit.tsx"),
    false,
  );
  const files = [
    ...listCheckFiles("src/app", "*.tsx"),
    ...listCheckFiles("src/components", "*.tsx"),
    "public/sitemap.xml",
    "public/llms.txt",
  ];
  for (const file of files) {
    assert.doesNotMatch(
      read(file),
      /communication-coverage-audit|report_audit_clicked|coverage_audit_/,
      file,
    );
  }
  assert.doesNotMatch(
    read("src/styles/globals.css"),
    /\.coverage-audit-|\.coverage-score-|\.coverage-question/,
  );
});

test("both retired audit URL forms permanently redirect to the report", () => {
  const config = read("next.config.ts");
  for (const source of [
    "/communication-coverage-audit",
    "/communication-coverage-audit/",
  ]) {
    const block = config.split(`source: "${source}"`)[1]?.split("}")[0];
    assert.ok(block, `missing redirect for ${source}`);
    assert.match(
      block,
      /destination: "\/state-of-internal-communication-2026\/"/,
    );
    assert.match(block, /permanent: true/);
  }
});

test("marketing heroes do not regress to telemetry and legal jargon", () => {
  const legalPages = new Set(["privacy", "cookies", "legal", "subprocessors"]);
  for (const file of listCheckFiles("src/app", "page.tsx")) {
    if (legalPages.has(file.split("/")[2])) continue;
    const lead = read(file).match(
      /<p\s+className="lead"[^>]*>([\s\S]*?)<\/p>/,
    )?.[1];
    if (!lead) continue;
    assert.doesNotMatch(
      lead.replace(/\s+/g, " "),
      /bearer credentials?|proof of (?:listener identity|comprehension)|evidence boundary|coverage hypothesis|measured completion|auditory attention/i,
      `${file}: lead with the customer benefit; put technical limits in details`,
    );
  }
});

test("homepage analytics does not restore the rejected attribution disclaimer", () => {
  assert.doesNotMatch(
    read("src/app/page.tsx").replace(/\s+/g, " "),
    /Brandscast groups recorded feed activity|not proof of listener identity, comprehension or workforce reach/,
  );
});

test("remote-team podcasting page matches search intent and both creation paths", () => {
  const source = read("src/app/podcasting-for-remote-teams/page.tsx");
  const metadata = source.slice(0, source.indexOf("openGraph:"));
  assert.match(
    metadata,
    /title: "Podcasting for remote teams: private audio guide \| Brandscast"/,
  );
  assert.match(
    metadata,
    /Learn how podcasting for remote teams turns recorded updates or existing documents into private audio/,
  );
  assert.match(
    source,
    /openGraph: \{[\s\S]*title: "Podcasting for remote teams: private audio guide \| Brandscast"[\s\S]*Create private episodes from your own recordings or existing documents/,
  );
  assert.match(source, /<h1>Podcasting for remote teams:/);
  assert.match(
    source,
    /Upload your own audio or generate it from\s+text with optional AI/,
  );
  assert.match(source, /authenticated RSS feed/);
  assert.match(source, /title="Start podcasting for your remote team"/);
  assert.match(
    source,
    /Start a 30-day trial and publish your first private episode/,
  );
});

test("employee listening analytics page matches search intent and evidence limits", () => {
  const source = read("src/app/employee-listening-analytics/page.tsx");
  const metadata = source.slice(0, source.indexOf("openGraph:"));
  assert.match(
    metadata,
    /title: "Employee listening analytics for internal comms \| Brandscast"/,
  );
  assert.match(
    metadata,
    /Use employee listening analytics to compare private audio activity/,
  );
  assert.match(
    source,
    /<h1>Employee listening analytics for internal communication<\/h1>/,
  );
  assert.match(source, /employee communication analytics/);
  assert.match(source, /It cannot prove/);
  assert.match(
    source,
    /whether they paid attention or whether they understood/,
  );
  assert.match(source, /employees who were not\s+invited to the Track/);
  assert.match(source, /activity that was not recorded/);
  assert.match(
    source,
    /Upload your own recording or generate audio from text with optional\s+AI/,
  );
  assert.match(source, /authenticated private feeds/);
  assert.match(source, /title="Start using employee listening analytics"/);
  assert.match(
    source,
    /Start a 30-day trial without a credit card/,
  );
});

test("async communication guide matches norms intent and both creation paths", () => {
  const source = read("src/app/resources/async-communication-guide/page.tsx");
  const metadata = source.slice(0, source.indexOf("openGraph:"));
  assert.match(
    metadata,
    /title: "Async Communication Norms \+ Templates \| Brandscast"/,
  );
  assert.match(metadata, /Set clear async communication norms/);
  assert.match(
    source,
    /<h1>Async communication norms and templates for teams<\/h1>/,
  );
  assert.match(source, /What are good async communication norms/);
  assert.match(
    source,
    /upload audio you recorded yourself or\s+turn an existing written update into audio with optional AI/,
  );
  assert.match(source, /personal authenticated RSS feed/);
  assert.match(source, /title="Add private audio to your async communication"/);
  assert.match(
    source,
    /Explore the example first, then start a 30-day trial without a credit card/,
  );
});

test("private RSS page matches secure distribution intent and creation paths", () => {
  const source = read("src/app/rss-distribution/page.tsx");
  const metadata = source.slice(0, source.indexOf("openGraph:"));
  assert.match(
    metadata,
    /title: "Private RSS feed for secure podcast distribution \| Brandscast"/,
  );
  assert.match(metadata, /personal, authenticated private RSS feed/);
  assert.match(
    source,
    /<h1>Private RSS feeds for secure podcast distribution<\/h1>/,
  );
  assert.match(source, /<h2>What is a private RSS feed\?<\/h2>/);
  assert.match(source, /unique subscription URL/);
  assert.match(
    source,
    /Upload audio you recorded yourself or generate it from text with\s+optional AI/,
  );
  assert.match(source, /revoke future access\s+individually/);
  assert.match(source, /Spotify does not support this private RSS\s+workflow/);
});

test("internal podcast cluster assigns a distinct search intent to each page", () => {
  const platform = read("src/app/private-podcasts-for-teams/page.tsx");
  const communication = read("src/app/internal-communication/page.tsx");
  const comparison = read("src/app/private-vs-public-podcast/page.tsx");
  const guide = read("src/app/resources/guide-to-internal-podcasts/page.tsx");

  assert.match(
    platform,
    /title: "Internal podcast platform for private team audio \| Brandscast"/,
  );
  assert.match(
    platform,
    /<h1>An internal podcast platform for private team audio<\/h1>/,
  );
  assert.match(platform, /What is an internal podcast platform\?/);
  assert.match(
    platform,
    /upload audio you recorded\s+yourself, or turn written text into audio with optional AI/,
  );

  assert.match(
    communication,
    /title: "Audio for internal communication \| Brandscast"/,
  );
  assert.match(
    comparison,
    /title: "Private podcast vs public podcast \| Brandscast"/,
  );
  assert.match(
    guide,
    /title: "How to start an internal podcast: complete guide \| Brandscast"/,
  );
  assert.match(
    guide,
    /<h1>How to start an internal podcast: a practical guide<\/h1>/,
  );
});

test("supporting internal podcast pages point to the commercial platform page", () => {
  for (const file of [
    "src/app/internal-communication/page.tsx",
    "src/app/private-vs-public-podcast/page.tsx",
    "src/app/resources/guide-to-internal-podcasts/page.tsx",
  ]) {
    assert.match(
      read(file),
      /<a href="\/private-podcasts-for-teams\/">[\s\S]*?(?:internal podcast platform|private internal podcast platform|Brandscast internal podcast platform)[\s\S]*?<\/a>/,
      `${file}: missing contextual platform link`,
    );
  }
});

test("informational SEO pages route through the complete product example", () => {
  const resources = [
    "src/app/resources/async-communication-guide/page.tsx",
    "src/app/resources/employee-engagement-with-audio/page.tsx",
    "src/app/resources/guide-to-internal-podcasts/page.tsx",
    "src/app/resources/how-to-launch-a-private-podcast/page.tsx",
    "src/app/resources/how-to-pitch-internal-podcast/page.tsx",
    "src/app/resources/internal-comms-best-practices/page.tsx",
    "src/app/resources/remote-team-communication-tips/page.tsx",
    "src/app/resources/templates-for-company-updates/page.tsx",
  ];
  for (const file of resources)
    assert.match(
      read(file),
      /<CtaSection[\s\S]*?intent="informational"/,
      `${file}: missing informational CTA intent`,
    );

  for (const file of [
    "src/app/state-of-internal-communication-2026/page.tsx",
    "src/app/resources/deskless-internal-communication/page.tsx",
    "src/app/resources/internal-communication-metrics/page.tsx",
  ])
    assert.match(
      read(file),
      /href="\/text-to-audio\/#example"/,
      `${file}: missing product-example destination`,
    );
});

test("commercial trial surfaces preserve consented acquisition context", () => {
  for (const file of [
    "src/components/Header.tsx",
    "src/components/CtaSection.tsx",
    "src/app/PricingSection.tsx",
    "src/app/page.tsx",
    "src/app/about/page.tsx",
    "src/app/text-to-audio/TrialLink.tsx",
  ])
    assert.match(read(file), /SignupLink/, `${file}: missing SignupLink`);
});

test("relevant guides link contextually to private RSS distribution", () => {
  for (const file of [
    "src/app/private-podcasts-for-teams/page.tsx",
    "src/app/podcasting-for-remote-teams/page.tsx",
    "src/app/resources/how-to-launch-a-private-podcast/page.tsx",
    "src/app/resources/guide-to-internal-podcasts/page.tsx",
    "src/app/employee-onboarding/page.tsx",
  ]) {
    assert.match(
      read(file),
      /<a href="\/rss-distribution\/">[\s\S]*?(?:RSS feed|RSS feeds)[\s\S]*?<\/a>/,
      `${file}: missing contextual private RSS link`,
    );
  }
});

test("noindex subprocessors are excluded from the sitemap", () => {
  const page = read("src/app/subprocessors/page.tsx");
  assert.match(page, /robots: "noindex,follow"/);
  assert.doesNotMatch(read("public/sitemap.xml"), /\/subprocessors\//);
});

test("HR announcements use a descriptive analytics internal anchor", () => {
  const hrPage = read("src/app/hr-announcements/page.tsx");
  const analyticsLink = hrPage.match(
    /<a href="\/employee-listening-analytics\/">([\s\S]*?)<\/a>/,
  );
  assert.ok(analyticsLink, "missing analytics internal link");
  assert.match(
    analyticsLink[1].replace(/\s+/g, " "),
    /employee listening analytics/,
  );
  assert.doesNotMatch(analyticsLink[1], /engagement surveys/);
});

test("sitemap entry validation rejects broken XML structure and calendar dates", () => {
  const unclosedUrl =
    "<urlset><url><loc>https://brandscast.com/</loc><lastmod>2026-09-22</lastmod></urlset>";
  assert.match(
    validateSitemapEntries(unclosedUrl, "2026-09-22")[0],
    /malformed XML/,
  );

  const nestedUrl =
    "<urlset><url><url><loc>https://brandscast.com/</loc><lastmod>2026-09-22</lastmod></url></url></urlset>";
  assert.deepEqual(validateSitemapEntries(nestedUrl, "2026-09-22"), [
    "unexpected or malformed content inside <urlset>",
    "nested <url> elements are not allowed",
  ]);

  const missingRoot =
    "<url><loc>https://brandscast.com/</loc><lastmod>2026-09-22</lastmod></url>";
  assert.deepEqual(validateSitemapEntries(missingRoot, "2026-09-22"), [
    "expected one complete <urlset> root element",
  ]);

  const malformedChild =
    "<urlset><url><loc>https://brandscast.com/</loc><lastmod>2026-09-22</lastmod><changefreq>monthly</priority></url></urlset>";
  assert.match(
    validateSitemapEntries(malformedChild, "2026-09-22")[0],
    /malformed XML/,
  );

  const impossibleDate =
    "<urlset><url><loc>https://brandscast.com/</loc><lastmod>2026-02-31</lastmod></url></urlset>";
  assert.deepEqual(validateSitemapEntries(impossibleDate, "2026-09-22"), [
    "https://brandscast.com/: impossible <lastmod> date 2026-02-31",
  ]);

  const validEntry =
    "<urlset><url><loc>https://brandscast.com/</loc><lastmod>2026-09-22</lastmod></url></urlset>";
  assert.deepEqual(validateSitemapEntries(validEntry, "2026-09-22"), []);
});

test("subscription stays unavailable until explicitly enabled", () => {
  assert.match(
    read("src/app/state-of-internal-communication-2026/NewsletterSignup.tsx"),
    /MARKETING_SIGNUP_ENABLED !== "true"/,
  );
});

test("subscription consent is explicit and not preselected", () => {
  const source = read(
    "src/app/state-of-internal-communication-2026/NewsletterForm.tsx",
  );
  assert.match(source, /type="checkbox"/);
  assert.match(source, /required/);
  assert.doesNotMatch(source, /defaultChecked|checked=\{true\}/);
  assert.match(source, /credentials: "omit"/);
  assert.doesNotMatch(source, /trackAnalyticsEvent|gtag/);
});

test("confirmation is a deliberate POST and removes fragment credentials", () => {
  const source = read("src/app/research-subscription/ConfirmSubscription.tsx");
  assert.match(source, /window.location.hash/);
  assert.match(source, /window.history.replaceState/);
  assert.match(source, /onClick=\{confirm\}/);
  assert.match(source, /method: "POST"/);
  assert.match(
    read("src/components/Analytics.tsx"),
    /pathname.startsWith\("\/research-subscription"\)/,
  );
  assert.match(
    read("src/app/research-subscription/page.tsx"),
    /noindex,nofollow/,
  );
});
