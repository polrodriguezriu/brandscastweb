import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import CookieConsent from "@/components/CookieConsent";

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
        "Brandscast is an internal communication platform built on audio. Companies share updates, training, and culture through private audio employees can listen to from any podcast app.",
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
      operatingSystem: "Web, iOS, Android",
      url: "https://brandscast.com/",
      publisher: { "@id": "https://brandscast.com/#organization" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "39",
        highPrice: "149",
        offerCount: "3",
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
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7G5RLF81SG"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7G5RLF81SG');
        `}</Script>
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
