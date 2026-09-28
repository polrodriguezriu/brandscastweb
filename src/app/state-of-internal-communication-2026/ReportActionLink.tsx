"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackAnalyticsEvent } from "@/lib/analytics-consent";

type ReportActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  action: "download" | "product";
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
            : "report_product_example_clicked",
          { report_placement: placement },
        );
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
