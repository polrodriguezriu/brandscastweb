import type { Metadata } from "next";
import "../styles/globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import { PRICING_PLANS } from "@/lib/pricing";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandscast.com"),
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    "theme-color": "#2e5af4",
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brandscast.com/#organization",
      name: "Brandscast",
      url: "https://brandscast.com/",
      logo: "https://brandscast.com/brandscast-logo.png",
      description:
        "Brandscast is an internal communication platform built on audio. Companies share updates, training, and culture through private, authenticated RSS feeds in compatible podcast apps.",
    },
    {
      "@type": "WebSite",
      "@id": "https://brandscast.com/#website",
      url: "https://brandscast.com/",
      name: "Brandscast",
      publisher: { "@id": "https://brandscast.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Brandscast",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://brandscast.com/",
      publisher: { "@id": "https://brandscast.com/#organization" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: String(
          Math.min(...PRICING_PLANS.map((plan) => plan.yearlyPrice)),
        ),
        highPrice: String(
          Math.max(...PRICING_PLANS.map((plan) => plan.monthlyPrice)),
        ),
        offerCount: String(PRICING_PLANS.length),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {/* Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
