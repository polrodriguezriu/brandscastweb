import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterFull from "@/components/FooterFull";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Features | Brandscast internal communication audio",
  description:
    "Create and share private audio your team can listen to on their own schedule. Explore personal feeds, audience segmentation, listening analytics and AI audio tools.",
  alternates: { canonical: "https://brandscast.com/features/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/features/",
    title: "Features | Brandscast",
    description:
      "Bring a human voice to company updates and training. Create episodes, share them with the right teams and follow listening activity in one place.",
    images: "/Podcasters.webp",
  },
};

const features = [
  {
    href: "/private-podcasts-for-teams/",
    title: "Private audio hosting",
    description:
      "Give your company updates and training a private home, with a personal feed for every Member.",
  },
  {
    href: "/secure-access-control/",
    title: "Secure access control",
    description:
      "Choose who receives each Track, invite Members by email and manage their feed access as your team changes.",
  },
  {
    href: "/employee-listening-analytics/",
    title: "Listening analytics",
    description:
      "Explore listening activity by episode and Member to spot popular topics and teams that may need a follow-up.",
  },
  {
    href: "/audio-messages-and-updates/",
    title: "Audio messages and updates",
    description:
      "Put a voice to the weekly update, explain a decision or share a team story alongside your usual written channels.",
  },
  {
    href: "/tracks/",
    title: "Tracks",
    description:
      "Keep onboarding, leadership updates and training organised in series your team can follow.",
  },
  {
    href: "/private-podcasts-for-teams/",
    title: "Audience segmentation",
    description:
      "Share relevant audio with each department, language group or team through the Tracks in their personal feeds.",
  },
  {
    href: "/rss-distribution/",
    title: "RSS distribution",
    description:
      "Each listener gets a personal, authenticated RSS feed they can add to a compatible app such as Apple Podcasts, Pocket Casts or Overcast.",
  },
  {
    href: "/audio-enhancement/",
    title: "Audio enhancement",
    description:
      "Automatically clean background noise, balance levels and improve audio quality with one click — no audio editing skills required.",
  },
  {
    href: "/text-to-audio/",
    title: "Text to audio",
    description:
      "Turn the updates you have already written into audio. Paste text or upload a document, choose a voice, then review and publish.",
  },
  {
    href: "/mcp/",
    title: "MCP connector",
    description:
      "Publish episodes, manage listeners and ask about your analytics from Claude, using plain language.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Features</div>
          <h1>Everything you need to bring audio to your team</h1>
          <p className="lead">
            Brandscast is built for teams that communicate through audio.
            Private hosting, secure access, analytics and distribution — all in
            one place.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner">
            <div className="cards">
              {features.map((f) => (
                <a
                  key={f.href}
                  href={f.href}
                  className="card"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                  <p
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.9rem",
                      color: "var(--brand)",
                    }}
                  >
                    Learn more →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Give your next update a voice"
          lead="Set up your channel, invite your team and publish your first episode in minutes."
          note="No credit card required."
        />
      </main>

      <FooterFull />
    </>
  );
}
