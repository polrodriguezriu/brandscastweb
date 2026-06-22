import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterFull from "@/components/FooterFull";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Features | Brandscast — Private podcasting for teams",
  description:
    "All Brandscast features in one place. Private podcast hosting, secure access control, listening analytics, AI audio enhancement and text-to-audio, RSS distribution, tracks, audio messages and MCP integration.",
  alternates: { canonical: "https://brandscast.com/features/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/features",
    title: "Features | Brandscast",
    description:
      "Everything you need to run a private internal podcast. Hosting, access control, analytics, RSS distribution and more.",
    images: "/Podcasters.webp",
  },
};

const features = [
  {
    href: "/private-audio-for-teams/",
    title: "Private audio hosting",
    description:
      "Host your internal audio on a fully private, invite-only channel. No public listings, no external discoverability.",
  },
  {
    href: "/secure-access-control/",
    title: "Secure access control",
    description:
      "Invite listeners by email, manage who can hear what, and revoke access instantly when someone leaves.",
  },
  {
    href: "/employee-listening-analytics/",
    title: "Listening analytics",
    description:
      "See who listened, for how long, and which episodes drive the most engagement across your team.",
  },
  {
    href: "/audio-messages-and-updates/",
    title: "Audio messages and updates",
    description:
      "Publish short audio updates directly to your team's feed. Faster than an email, more human than a doc.",
  },
  {
    href: "/tracks/",
    title: "Tracks",
    description:
      "Organise episodes into series or topic-based tracks so listeners always find the content relevant to them.",
  },
  {
    href: "/private-podcasts-for-teams/",
    title: "Audience segmentation",
    description:
      "Create separate podcasts or Tracks for any slice of the company — by department, language, level or team — so each group only hears what's relevant.",
  },
  {
    href: "/rss-distribution/",
    title: "RSS distribution",
    description:
      "Each listener gets a personal, authenticated RSS feed they can add to any podcast app — Apple Podcasts, Pocket Casts, and more.",
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
      "Paste a document or upload a PDF and AI turns it into a natural-sounding audio episode — perfect for written content you want employees to listen to.",
  },
  {
    href: "/mcp/",
    title: "MCP connector",
    description:
      "Manage your audio, episodes and members directly from Claude using natural language. No dashboard needed.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Features</div>
          <h1>Everything you need to run a private internal podcast</h1>
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
          title="Start your private internal audio"
          lead="Set up your channel, invite your team and publish your first episode in minutes."
          note="No credit card required."
        />
      </main>

      <FooterFull />
    </>
  );
}
