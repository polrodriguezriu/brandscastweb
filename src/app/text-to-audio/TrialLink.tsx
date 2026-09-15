"use client";

import { useEffect, useState } from "react";
import { campaignSignupUrl } from "@/lib/acquisition-campaign";
import {
  hasAnalyticsConsent,
  trackAnalyticsEvent,
} from "@/lib/analytics-consent";

export default function TrialLink({
  placement,
}: {
  placement: "hero" | "example" | "footer";
}) {
  const [href, setHref] = useState("https://app.brandscast.com/signup");
  useEffect(() => {
    const update = () => {
      setHref(campaignSignupUrl(window.location.search, hasAnalyticsConsent()));
    };
    update();
    window.addEventListener("cookieConsentChanged", update);
    window.addEventListener("focus", update);
    return () => {
      window.removeEventListener("cookieConsentChanged", update);
      window.removeEventListener("focus", update);
    };
  }, []);
  return (
    <a
      className="btn"
      href={href}
      referrerPolicy="no-referrer"
      onClick={(event) => {
        event.currentTarget.href = campaignSignupUrl(
          window.location.search,
          hasAnalyticsConsent(),
        );
        trackAnalyticsEvent("text_audio_trial_clicked", { placement });
      }}
    >
      Try your own document <span aria-hidden="true">↗</span>
    </a>
  );
}
