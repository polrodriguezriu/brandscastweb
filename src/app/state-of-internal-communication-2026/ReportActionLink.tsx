"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackAnalyticsEvent } from "@/lib/analytics-consent";

type ReportActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  action: "audit" | "download" | "signup";
  children: ReactNode;
  placement: "hero" | "framework" | "final";
};

export default function ReportActionLink({
  action,
  children,
  onClick,
  placement,
  ...props
}: ReportActionLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackAnalyticsEvent(
          action === "download"
            ? "report_pdf_downloaded"
            : action === "signup"
              ? "report_signup_clicked"
              : "report_audit_clicked",
          { report_placement: placement },
        );
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
