export const ANALYTICS_CONSENT_COOKIE = "__cookie_consent";

type AnalyticsEventParameters = Record<string, number | string>;

type AnalyticsWindow = Window & {
  gtag?: (
    command: "event",
    eventName: string,
    parameters?: AnalyticsEventParameters,
  ) => void;
};

export function readCookieValue(name: string) {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  if (!match) return null;

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  const consent = readCookieValue(ANALYTICS_CONSENT_COOKIE);
  return consent === "true" || consent === "2";
}

export function hasStoredAnalyticsConsentChoice() {
  const consent = readCookieValue(ANALYTICS_CONSENT_COOKIE);
  return consent === "true" || consent === "2" || consent === "false";
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters?: AnalyticsEventParameters,
) {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !hasAnalyticsConsent()
  ) {
    return false;
  }

  const gtag = (window as AnalyticsWindow).gtag;
  if (!gtag) return false;

  gtag("event", eventName, parameters);
  return true;
}
