"use client";

import { useEffect } from "react";

import { hasAnalyticsConsent } from "@/lib/analytics-consent";
import { captureOrganicCampaign } from "@/lib/acquisition-campaign";

export default function AcquisitionCapture() {
  useEffect(() => {
    const sync = () => captureOrganicCampaign(hasAnalyticsConsent());
    sync();
    window.addEventListener("cookieConsentChanged", sync);
    return () => window.removeEventListener("cookieConsentChanged", sync);
  }, []);

  return null;
}
