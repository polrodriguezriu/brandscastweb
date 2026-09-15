export type Campaign = {
  source: "allthingsic" | "commsrebel";
  medium: "newsletter";
  campaign: "private_audio_n1";
  content: "two_options_v1";
};
export function parseCampaign(params: URLSearchParams): Campaign | null {
  const keys = ["source", "medium", "campaign", "content"];
  if (keys.some((k) => params.getAll(`utm_${k}`).length !== 1)) return null;
  const source = params.get("utm_source");
  if (
    (source !== "allthingsic" && source !== "commsrebel") ||
    params.get("utm_medium") !== "newsletter" ||
    params.get("utm_campaign") !== "private_audio_n1" ||
    params.get("utm_content") !== "two_options_v1"
  )
    return null;
  return {
    source,
    medium: "newsletter",
    campaign: "private_audio_n1",
    content: "two_options_v1",
  };
}

export function campaignSignupUrl(search: string, consent: boolean) {
  const url = new URL("https://app.brandscast.com/signup");
  const campaign = consent ? parseCampaign(new URLSearchParams(search)) : null;
  if (campaign)
    for (const [key, value] of Object.entries(campaign))
      url.searchParams.set(`utm_${key}`, value);
  return url.toString();
}
