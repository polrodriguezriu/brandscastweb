import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (path) => fs.readFileSync(path, "utf8");

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
