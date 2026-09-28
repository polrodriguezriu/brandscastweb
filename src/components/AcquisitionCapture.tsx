"use client";

import { useEffect } from "react";

import { hasAnalyticsConsent } from "@/lib/analytics-consent";
import {
  captureCampaign,
  organicCampaignFromReferrer,
  parseCampaign,
} from "@/lib/acquisition-campaign";

export default function AcquisitionCapture() {
  useEffect(() => {
    const landingCampaign =
      parseCampaign(new URLSearchParams(window.location.search)) ??
      organicCampaignFromReferrer(document.referrer, window.location.pathname);
    const sync = () =>
      captureCampaign(hasAnalyticsConsent(), landingCampaign);
    sync();
    window.addEventListener("cookieConsentChanged", sync);
    return () => window.removeEventListener("cookieConsentChanged", sync);
  }, []);

  return null;
}
