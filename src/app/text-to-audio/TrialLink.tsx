"use client";

import { trackAnalyticsEvent } from "@/lib/analytics-consent";

export default function TrialLink({
  placement,
}: {
  placement: "hero" | "example" | "footer";
}) {
  return (
    <a
      className="btn"
      href="https://app.brandscast.com/signup"
      onClick={() =>
        trackAnalyticsEvent("text_audio_trial_clicked", { placement })
      }
    >
      Try your own document <span aria-hidden="true">↗</span>
    </a>
  );
}
