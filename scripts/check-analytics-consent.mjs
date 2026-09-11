/**
 * Keeps custom campaign events behind the stored analytics-consent decision.
 * The Google loader may call gtag to update consent; event emitters may not.
 */
import fs from "node:fs";

const EVENT_FILES = [
  "src/app/state-of-internal-communication-2026/ReportActionLink.tsx",
  "src/app/state-of-internal-communication-2026/ShareReport.tsx",
  "src/app/text-to-audio/TrialLink.tsx",
  "src/app/text-to-audio/ExampleJourney.tsx",
];
const HELPER_FILE = "src/lib/analytics-consent.ts";
const LOADER_FILE = "src/components/Analytics.tsx";
const SETTINGS_FILE = "src/components/CookieConsent.tsx";
const COOKIE_POLICY_FILE = "src/app/cookies/page.tsx";
const SIGNUP_ENTRY_FILES = [
  "src/app/page.tsx",
  "src/app/state-of-internal-communication-2026/page.tsx",
  "src/app/resources/deskless-internal-communication/page.tsx",
  "src/app/resources/internal-communication-metrics/page.tsx",
];
const errors = [];

for (const file of EVENT_FILES) {
  const source = fs.readFileSync(file, "utf8");

  if (!source.includes("trackAnalyticsEvent")) {
    errors.push(`${file}: does not use the consent-gated event helper`);
  }
  if (/\.gtag\??\./.test(source)) {
    errors.push(`${file}: calls gtag directly`);
  }
}

const helper = fs.readFileSync(HELPER_FILE, "utf8");
const share = fs.readFileSync(EVENT_FILES[1], "utf8");
for (const required of [
  "https://brandscast.com/state-of-internal-communication-2026/",
  "report_link_copied",
  "report_shared",
  "await navigator.clipboard.writeText(REPORT_URL)",
  "await navigator.share(",
  'error.name === "AbortError"',
]) {
  if (!share.includes(required)) {
    errors.push(`${EVENT_FILES[1]}: missing share contract ${required}`);
  }
}
if (/window\.location|location\.href|document\.referrer/.test(share)) {
  errors.push(
    `${EVENT_FILES[1]}: share the canonical URL without visitor query data`,
  );
}
if (!helper.includes("!hasAnalyticsConsent()")) {
  errors.push(`${HELPER_FILE}: does not fail closed without stored consent`);
}
if (!helper.includes('gtag("event", eventName, parameters)')) {
  errors.push(`${HELPER_FILE}: custom events do not pass through the helper`);
}
if (!helper.includes("if (!gtag) return false")) {
  errors.push(`${HELPER_FILE}: reports an event without a callable gtag`);
}

const loader = fs.readFileSync(LOADER_FILE, "utf8");
for (const required of [
  "hasAnalyticsConsent()",
  'analytics_storage: "granted"',
  'analytics_storage: "denied"',
]) {
  if (!loader.includes(required)) {
    errors.push(`${LOADER_FILE}: missing ${required}`);
  }
}

const settings = fs.readFileSync(SETTINGS_FILE, "utf8");
if (!settings.includes("ANALYTICS_CONSENT_COOKIE")) {
  errors.push(`${SETTINGS_FILE}: does not share the consent-cookie contract`);
}
if (!settings.includes("!hasStoredAnalyticsConsentChoice()")) {
  errors.push(
    `${SETTINGS_FILE}: malformed consent values do not reopen the choice`,
  );
}
if (
  !helper.includes('consent === "true"') ||
  !helper.includes('consent === "2"') ||
  !helper.includes('consent === "false"')
) {
  errors.push(
    `${HELPER_FILE}: stored consent choices are not explicitly bounded`,
  );
}

for (const [file, eventName] of [[EVENT_FILES[0], "report_signup_clicked"]]) {
  if (!fs.readFileSync(file, "utf8").includes(eventName)) {
    errors.push(`${file}: missing autonomous signup event ${eventName}`);
  }
}
for (const file of SIGNUP_ENTRY_FILES) {
  const source = fs.readFileSync(file, "utf8");
  if (!source.includes('href="https://app.brandscast.com/signup"')) {
    errors.push(`${file}: missing direct product signup link`);
  }
  if (source.includes("Request a 15-minute review")) {
    errors.push(
      `${file}: restore optional support instead of a sales-review CTA`,
    );
  }
}

const cookiePolicy = fs.readFileSync(COOKIE_POLICY_FILE, "utf8");
for (const required of [
  "controlled campaign source",
  "numerical evidence score",
  "does not put names, email addresses, company names or",
  "free-text audit answers",
]) {
  if (!cookiePolicy.replace(/\s+/g, " ").includes(required)) {
    errors.push(
      `${COOKIE_POLICY_FILE}: missing event-data disclosure ${required}`,
    );
  }
}

if (errors.length) {
  console.error("\nAnalytics consent checks failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  console.error();
  process.exit(1);
}

console.log(
  `[analytics] ${EVENT_FILES.length} event emitters and ${SIGNUP_ENTRY_FILES.length} direct signup pages are guarded`,
);
