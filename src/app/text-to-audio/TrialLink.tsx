"use client";

import SignupLink from "@/components/SignupLink";

export default function TrialLink({
  placement,
}: {
  placement: "hero" | "example" | "footer";
}) {
  return (
    <SignupLink
      className="btn"
      referrerPolicy="no-referrer"
      analyticsEvent="text_audio_trial_clicked"
      analyticsParameters={{ placement }}
    >
      Try your own document <span aria-hidden="true">↗</span>
    </SignupLink>
  );
}
