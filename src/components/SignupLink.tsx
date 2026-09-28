"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";

import { currentSignupUrl } from "@/lib/acquisition-campaign";
import {
  hasAnalyticsConsent,
  trackAnalyticsEvent,
} from "@/lib/analytics-consent";

type SignupLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  analyticsEvent?: string;
  analyticsParameters?: Record<string, number | string>;
};

export default function SignupLink({
  analyticsEvent,
  analyticsParameters,
  children,
  onClick,
  ...props
}: SignupLinkProps) {
  const [href, setHref] = useState("https://app.brandscast.com/signup");

  useEffect(() => {
    const update = () => setHref(currentSignupUrl(hasAnalyticsConsent()));
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
      {...props}
      href={href}
      onClick={(event) => {
        event.currentTarget.href = currentSignupUrl(hasAnalyticsConsent());
        if (analyticsEvent)
          trackAnalyticsEvent(analyticsEvent, analyticsParameters);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
