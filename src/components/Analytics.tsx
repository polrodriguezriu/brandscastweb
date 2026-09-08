"use client";

import { useEffect } from "react";

import { hasAnalyticsConsent } from "@/lib/analytics-consent";

const GA_ID = "G-7G5RLF81SG";

type GoogleAnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

function setAnalyticsDisabled(disabled: boolean) {
  const analyticsWindow = window as unknown as Window & Record<string, unknown>;
  analyticsWindow[`ga-disable-${GA_ID}`] = disabled;
}

function deleteAnalyticsCookies() {
  const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax";
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  names.forEach((name) => {
    document.cookie = `${name}=;${expires}`;
    if (window.location.hostname.endsWith("brandscast.com")) {
      document.cookie = `${name}=;${expires};domain=.brandscast.com`;
    }
  });
}

function loadGoogleAnalytics() {
  const analyticsWindow = window as GoogleAnalyticsWindow;
  const shouldConfigure = !analyticsWindow.gtag;

  if (shouldConfigure) {
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag = (...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    };
  }

  analyticsWindow.gtag?.("consent", "update", {
    analytics_storage: "granted",
  });

  if (shouldConfigure) {
    analyticsWindow.gtag?.("js", new Date());
    analyticsWindow.gtag?.("config", GA_ID);
  }

  if (!document.getElementById("google-analytics-script")) {
    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }
}

export default function Analytics() {
  useEffect(() => {
    const applyConsent = () => {
      // Never load tracking on pages handling email confirmation credentials.
      if (window.location.pathname.startsWith("/research-subscription")) {
        setAnalyticsDisabled(true);
        return;
      }
      if (hasAnalyticsConsent()) {
        setAnalyticsDisabled(false);
        loadGoogleAnalytics();
        return;
      }

      setAnalyticsDisabled(true);
      (window as GoogleAnalyticsWindow).gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
      deleteAnalyticsCookies();
    };

    applyConsent();
    window.addEventListener("cookieConsentChanged", applyConsent);

    return () =>
      window.removeEventListener("cookieConsentChanged", applyConsent);
  }, []);

  return null;
}
