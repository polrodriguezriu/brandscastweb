import { test } from "node:test";
import assert from "node:assert/strict";
import {
  CAMPAIGN_STORAGE_KEY,
  campaignSignupUrl,
  captureCampaign,
  currentSignupUrl,
  organicCampaignFromReferrer,
  parseCampaign,
  readStoredCampaign,
} from "../src/lib/acquisition-campaign.ts";
const search =
  "?utm_source=allthingsic&utm_medium=newsletter&utm_campaign=private_audio_n1&utm_content=two_options_v1";
const paidSearch =
  "?utm_source=google&utm_medium=cpc&utm_campaign=private_audio_search_uk_n1&utm_content=internal_podcast";
const organicCampaign = {
  source: "organic_search",
  medium: "organic",
  campaign: "seo",
  content: "landing_private-podcasts-for-teams",
};

function withBrowser(t, { search = "", pathname = "/", referrer = "" } = {}) {
  const values = new Map();
  const sessionStorage = {
    getItem: (key) => values.get(key) ?? null,
    removeItem: (key) => values.delete(key),
    setItem: (key, value) => values.set(key, value),
  };
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  globalThis.window = { location: { search, pathname }, sessionStorage };
  globalThis.document = { referrer };
  t.after(() => {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
    if (originalDocument === undefined) delete globalThis.document;
    else globalThis.document = originalDocument;
  });
  return { sessionStorage };
}
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

test("only consented controlled paid-search attribution reaches signup", () => {
  assert.equal(
    campaignSignupUrl(paidSearch, false),
    "https://app.brandscast.com/signup",
  );
  assert.deepEqual(parseCampaign(new URLSearchParams(paidSearch)), {
    source: "google",
    medium: "cpc",
    campaign: "private_audio_search_uk_n1",
    content: "internal_podcast",
  });
  assert.equal(
    new URL(campaignSignupUrl(paidSearch, true)).searchParams.get("utm_source"),
    "google",
  );
  assert.equal(
    campaignSignupUrl(paidSearch.replace("internal_podcast", "free_text"), true),
    "https://app.brandscast.com/signup",
  );
  assert.equal(
    parseCampaign(
      new URLSearchParams(
        paidSearch.replace("internal_podcast", "internal_audio"),
      ),
    )?.content,
    "internal_audio",
  );
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

test("capture stores controlled paid search ahead of an organic referrer", (t) => {
  const { sessionStorage } = withBrowser(t, {
    search: paidSearch,
    pathname: "/private-podcasts-for-teams/",
    referrer: "https://www.google.com/search?q=private+podcast",
  });

  captureCampaign(true);

  assert.deepEqual(
    JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)),
    parseCampaign(new URLSearchParams(paidSearch)),
  );
});

test("delayed consent preserves the initial landing campaign after navigation", (t) => {
  const { sessionStorage } = withBrowser(t, {
    search: paidSearch,
    pathname: "/private-podcasts-for-teams/",
    referrer: "https://www.google.com/search?q=private+podcast",
  });
  const landingCampaign = parseCampaign(
    new URLSearchParams(globalThis.window.location.search),
  );

  globalThis.window.location.search = "";
  globalThis.window.location.pathname = "/features/";
  captureCampaign(true, landingCampaign);

  assert.deepEqual(
    JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)),
    parseCampaign(new URLSearchParams(paidSearch)),
  );
});

test("capture falls back to organic search and withdrawal clears all storage keys", (t) => {
  const { sessionStorage } = withBrowser(t, {
    search: "?utm_source=uncontrolled&utm_medium=cpc",
    pathname: "/private-podcasts-for-teams/",
    referrer: "https://www.google.com/search?q=private+podcast",
  });

  captureCampaign(true);
  assert.deepEqual(
    JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)),
    organicCampaign,
  );
  sessionStorage.setItem(
    "brandscast_consenting_organic_campaign",
    JSON.stringify(organicCampaign),
  );

  captureCampaign(false);
  assert.equal(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY), null);
  assert.equal(
    sessionStorage.getItem("brandscast_consenting_organic_campaign"),
    null,
  );
});

test("stored campaign parsing fails closed for malformed and unavailable storage", (t) => {
  const { sessionStorage } = withBrowser(t);
  assert.equal(readStoredCampaign(), null);
  sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, "not-json");
  assert.equal(readStoredCampaign(), null);
  sessionStorage.setItem(
    CAMPAIGN_STORAGE_KEY,
    JSON.stringify({ ...organicCampaign, content: 42 }),
  );
  assert.equal(readStoredCampaign(), null);

  globalThis.window.sessionStorage.getItem = () => {
    throw new Error("blocked");
  };
  assert.equal(readStoredCampaign(), null);
  globalThis.window.location.search = paidSearch;
  globalThis.window.sessionStorage.setItem = () => {
    throw new Error("blocked");
  };
  assert.doesNotThrow(() => captureCampaign(true));
});

test(
  "capture leaves an existing campaign intact when a page has no new attribution",
  (t) => {
    const { sessionStorage } = withBrowser(t, {
      pathname: "/about/",
      referrer: "https://brandscast.com/",
    });
    sessionStorage.setItem(
      CAMPAIGN_STORAGE_KEY,
      JSON.stringify(organicCampaign),
    );

    captureCampaign(true);

    assert.deepEqual(
      JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)),
      organicCampaign,
    );
  },
);

test("signup uses stored campaign, but a valid current campaign takes precedence", (t) => {
  const { sessionStorage } = withBrowser(t, { search: "" });
  sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(organicCampaign));
  assert.equal(
    new URL(currentSignupUrl(true)).searchParams.get("utm_source"),
    "organic_search",
  );

  globalThis.window.location.search = paidSearch;
  assert.equal(
    new URL(currentSignupUrl(true)).searchParams.get("utm_source"),
    "google",
  );
  assert.equal(currentSignupUrl(false), "https://app.brandscast.com/signup");
});

test("existing tabs keep legacy organic attribution across the storage-key rename", (t) => {
  const { sessionStorage } = withBrowser(t);
  sessionStorage.setItem(
    "brandscast_consenting_organic_campaign",
    JSON.stringify(organicCampaign),
  );

  assert.deepEqual(readStoredCampaign(), organicCampaign);
  assert.equal(
    new URL(currentSignupUrl(true)).searchParams.get("utm_source"),
    "organic_search",
  );
});

test("browser-only helpers fail closed during server rendering", () => {
  assert.equal(readStoredCampaign(), null);
  assert.equal(currentSignupUrl(true), "https://app.brandscast.com/signup");
  assert.doesNotThrow(() => captureCampaign(true));
});
