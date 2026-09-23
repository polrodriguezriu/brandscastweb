import { test } from "node:test";
import assert from "node:assert/strict";
import {
  campaignSignupUrl,
  organicCampaignFromReferrer,
  parseCampaign,
} from "../src/lib/acquisition-campaign.ts";
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

test("consented search referrals carry only organic source and public landing", () => {
  const campaign = organicCampaignFromReferrer(
    "https://www.google.com/search?q=private+podcast&secret=ignored",
    "/private-podcasts-for-teams/?email=ignored",
  );
  assert.deepEqual(campaign, {
    source: "organic_search",
    medium: "organic",
    campaign: "seo",
    content: "landing_private-podcasts-for-teams",
  });
  const url = new URL(campaignSignupUrl("", true, campaign));
  assert.equal(url.searchParams.get("utm_source"), "organic_search");
  assert.equal(
    url.searchParams.get("utm_content"),
    "landing_private-podcasts-for-teams",
  );
  assert.equal(url.searchParams.size, 4);
  assert.ok(!url.href.includes("private+podcast"));
  assert.ok(!url.href.includes("secret"));
  assert.ok(!url.href.includes("email"));
});

test("organic attribution rejects non-search referrers and malformed landings", () => {
  assert.equal(
    organicCampaignFromReferrer(
      "https://example.com/article",
      "/private-podcasts-for-teams/",
    ),
    null,
  );
  assert.equal(
    organicCampaignFromReferrer(
      "http://google.com/search?q=brandscast",
      "/private-podcasts-for-teams/",
    ),
    null,
  );
  assert.equal(
    parseCampaign(
      new URLSearchParams(
        "utm_source=organic_search&utm_medium=organic&utm_campaign=seo&utm_content=../../private",
      ),
    ),
    null,
  );
});
