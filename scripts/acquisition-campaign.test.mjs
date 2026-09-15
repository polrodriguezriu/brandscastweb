import { test } from "node:test";
import assert from "node:assert/strict";
import { campaignSignupUrl } from "../src/lib/acquisition-campaign.ts";
const search =
  "?utm_source=allthingsic&utm_medium=newsletter&utm_campaign=private_audio_n1&utm_content=two_options_v1";
test("only consented exact N1 attribution reaches signup", () => {
  assert.equal(
    campaignSignupUrl(search, false),
    "https://app.brandscast.com/signup",
  );
  assert.equal(
    new URL(campaignSignupUrl(search, true)).searchParams.get("utm_source"),
    "allthingsic",
  );
  assert.equal(
    campaignSignupUrl(search + "&utm_source=commsrebel", true),
    "https://app.brandscast.com/signup",
  );
  assert.equal(
    campaignSignupUrl(search.replace("allthingsic", "other"), true),
    "https://app.brandscast.com/signup",
  );
  assert.equal(
    campaignSignupUrl("", true),
    "https://app.brandscast.com/signup",
  );
});
test("never copies unrelated personal data or arbitrary query values", () => {
  const url = campaignSignupUrl(search + "&email=private&rssKey=private", true);
  assert.equal(new URL(url).searchParams.size, 4);
  assert.ok(!url.includes("private&") && !url.includes("email"));
});
