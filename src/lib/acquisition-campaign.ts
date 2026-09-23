export type NewsletterCampaign = {
  source: "allthingsic" | "commsrebel";
  medium: "newsletter";
  campaign: "private_audio_n1";
  content: "two_options_v1";
};

export type OrganicCampaign = {
  source: "organic_search";
  medium: "organic";
  campaign: "seo";
  content: string;
};

export type Campaign = NewsletterCampaign | OrganicCampaign;

export const ORGANIC_CAMPAIGN_STORAGE_KEY =
  "brandscast_consenting_organic_campaign";

const SIGNUP_URL = "https://app.brandscast.com/signup";
const ORGANIC_CONTENT_PATTERN = /^landing_[a-z0-9]+(?:[-_][a-z0-9]+)*$/;

function isSearchHostname(hostname: string) {
  const host = hostname.toLowerCase().replace(/^www\./, "");
  return (
    /^(?:[a-z0-9-]+\.)?google\.[a-z.]{2,}$/.test(host) ||
    host === "bing.com" ||
    host.endsWith(".bing.com") ||
    host === "duckduckgo.com" ||
    host.endsWith(".duckduckgo.com") ||
    host === "search.yahoo.com" ||
    host.endsWith(".search.yahoo.com") ||
    host === "ecosia.org" ||
    host.endsWith(".ecosia.org")
  );
}

function organicContent(pathname: string) {
  const slug =
    pathname
      .split(/[?#]/, 1)[0]
      .replace(/^\/+|\/+$/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9/_-]/g, "")
      .replace(/\//g, "_")
      .replace(/_+/g, "_") || "home";
  const content = `landing_${slug}`;
  return content.length <= 80 && ORGANIC_CONTENT_PATTERN.test(content)
    ? content
    : null;
}

export function organicCampaignFromReferrer(
  referrer: string,
  pathname: string,
): OrganicCampaign | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    const content = organicContent(pathname);
    if (
      url.protocol !== "https:" ||
      !content ||
      !isSearchHostname(url.hostname)
    )
      return null;
    return {
      source: "organic_search",
      medium: "organic",
      campaign: "seo",
      content,
    };
  } catch {
    return null;
  }
}

export function parseCampaign(params: URLSearchParams): Campaign | null {
  const keys = ["source", "medium", "campaign", "content"];
  if (keys.some((k) => params.getAll(`utm_${k}`).length !== 1)) return null;
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  const content = params.get("utm_content");
  if (
    (source === "allthingsic" || source === "commsrebel") &&
    medium === "newsletter" &&
    campaign === "private_audio_n1" &&
    content === "two_options_v1"
  ) {
    return { source, medium, campaign, content };
  }
  if (
    source === "organic_search" &&
    medium === "organic" &&
    campaign === "seo" &&
    content &&
    content.length <= 80 &&
    ORGANIC_CONTENT_PATTERN.test(content)
  ) {
    return { source, medium, campaign, content };
  }
  return null;
}

export function campaignSignupUrl(
  search: string,
  consent: boolean,
  fallbackCampaign: Campaign | null = null,
) {
  const url = new URL(SIGNUP_URL);
  const campaign = consent
    ? (parseCampaign(new URLSearchParams(search)) ?? fallbackCampaign)
    : null;
  if (campaign)
    for (const [key, value] of Object.entries(campaign))
      url.searchParams.set(`utm_${key}`, value);
  return url.toString();
}

export function captureOrganicCampaign(consent: boolean) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  try {
    if (!consent) {
      window.sessionStorage.removeItem(ORGANIC_CAMPAIGN_STORAGE_KEY);
      return;
    }
    const campaign = organicCampaignFromReferrer(
      document.referrer,
      window.location.pathname,
    );
    if (campaign)
      window.sessionStorage.setItem(
        ORGANIC_CAMPAIGN_STORAGE_KEY,
        JSON.stringify(campaign),
      );
  } catch {
    // Storage can be unavailable in locked-down browser contexts.
  }
}

export function readStoredOrganicCampaign(): OrganicCampaign | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(ORGANIC_CAMPAIGN_STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Record<string, unknown>;
    const params = new URLSearchParams();
    for (const key of ["source", "medium", "campaign", "content"])
      if (typeof value[key] === "string") params.set(`utm_${key}`, value[key]);
    const campaign = parseCampaign(params);
    return campaign?.source === "organic_search" ? campaign : null;
  } catch {
    return null;
  }
}

export function currentSignupUrl(consent: boolean) {
  if (typeof window === "undefined") return SIGNUP_URL;
  return campaignSignupUrl(
    window.location.search,
    consent,
    readStoredOrganicCampaign(),
  );
}
