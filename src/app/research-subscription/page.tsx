import type { Metadata } from "next";
import ConfirmSubscription from "./ConfirmSubscription";

export const metadata: Metadata = {
  title: "Confirm research subscription | Brandscast",
  description: "Confirm your optional Brandscast research email subscription.",
  alternates: { canonical: "https://brandscast.com/research-subscription/" },
  robots: "noindex,nofollow",
  referrer: "no-referrer",
};

export default function ResearchSubscriptionPage() {
  return <ConfirmSubscription />;
}
