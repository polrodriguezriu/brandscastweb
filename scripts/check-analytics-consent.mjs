/**
 * Keeps custom campaign events behind the stored analytics-consent decision.
 * The Google loader may call gtag to update consent; event emitters may not.
 */
import fs from "node:fs";

const EVENT_FILES = [
  "src/app/communication-coverage-audit/CoverageAudit.tsx",
  "src/app/state-of-internal-communication-2026/ReportActionLink.tsx",
];
const HELPER_FILE = "src/lib/analytics-consent.ts";
const LOADER_FILE = "src/components/Analytics.tsx";
const SETTINGS_FILE = "src/components/CookieConsent.tsx";
const COOKIE_POLICY_FILE = "src/app/cookies/page.tsx";
const ATTRIBUTED_AUDIT_ENTRY_FILES = new Map([
  ["src/app/page.tsx", "source=homepage"],
  ["src/app/state-of-internal-communication-2026/page.tsx", "source=report"],
  [
    "src/app/resources/deskless-internal-communication/page.tsx",
    "source=deskless-guide",
  ],
  [
    "src/app/resources/internal-communication-metrics/page.tsx",
    "source=metrics-guide",
  ],
]);
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

const audit = fs.readFileSync(EVENT_FILES[0], "utf8");
for (const [file, eventName] of [
  [EVENT_FILES[0], "coverage_audit_signup_clicked"],
  [EVENT_FILES[1], "report_signup_clicked"],
]) {
  if (!fs.readFileSync(file, "utf8").includes(eventName)) {
    errors.push(`${file}: missing autonomous signup event ${eventName}`);
  }
}
for (const file of [
  "src/app/page.tsx",
  "src/app/state-of-internal-communication-2026/page.tsx",
  EVENT_FILES[0],
]) {
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
for (const required of [
  "const trackedStart = useRef(false)",
  "trackedStart.current = trackAuditEvent",
  "trackedStart.current = false",
]) {
  if (!audit.includes(required)) {
    errors.push(`${EVENT_FILES[0]}: missing start-cycle contract ${required}`);
  }
}
for (const required of [
  "audit source",
  "numerical score",
  "never these context fields",
]) {
  if (!audit.includes(required)) {
    errors.push(
      `${EVENT_FILES[0]}: missing audit analytics disclosure ${required}`,
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
  if (!cookiePolicy.includes(required)) {
    errors.push(
      `${COOKIE_POLICY_FILE}: missing event-data disclosure ${required}`,
    );
  }
}

for (const [file, expectedSource] of ATTRIBUTED_AUDIT_ENTRY_FILES) {
  const source = fs.readFileSync(file, "utf8");
  const auditLinks = [
    ...source.matchAll(
      /(?:href|href:)\s*=*\s*["'](\/communication-coverage-audit\/[^"']*)["']/g,
    ),
  ].map((match) => match[1]);

  if (!auditLinks.length) {
    errors.push(`${file}: contains no audit entry link`);
  }
  for (const link of auditLinks) {
    if (!link.includes(expectedSource)) {
      errors.push(`${file}: audit link ${link} is missing ${expectedSource}`);
    }
  }
}

if (errors.length) {
  console.error("\nAnalytics consent checks failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  console.error();
  process.exit(1);
}

console.log(
  `[analytics] ${EVENT_FILES.length} event emitters and ${ATTRIBUTED_AUDIT_ENTRY_FILES.size} attributed entry pages are guarded`,
);
