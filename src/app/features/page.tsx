import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterFull from "@/components/FooterFull";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Features | Brandscast internal communication audio",
  description:
    "Internal communication audio features in one place: private Member feeds, Track assignment, recorded activity, audio enhancement, text-to-audio, authenticated RSS and MCP integration.",
  alternates: { canonical: "https://brandscast.com/features/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/features/",
    title: "Features | Brandscast",
    description:
      "Create, segment and distribute private internal audio alongside written and live channels, with authenticated RSS feeds and recorded activity.",
    images: "/Podcasters.webp",
  },
};

const features = [
  {
    href: "/private-podcasts-for-teams/",
    title: "Private audio hosting",
    description:
      "Keep internal audio out of public listings and distribute it through unique, revocable member feeds.",
  },
  {
    href: "/secure-access-control/",
    title: "Secure access control",
    description:
      "Invite members by email, assign Tracks and revoke future feed requests when access changes.",
  },
  {
    href: "/employee-listening-analytics/",
    title: "Listening analytics",
    description:
      "See member-level starts and measured completion, then combine those signals with feedback or comprehension checks.",
  },
  {
    href: "/audio-messages-and-updates/",
    title: "Audio messages and updates",
    description:
      "Publish short audio updates to member feeds as spoken context alongside email, documents and meetings.",
  },
  {
    href: "/tracks/",
    title: "Tracks",
    description:
      "Organise episodes into series or topic-based Tracks and assign them to the intended member groups.",
  },
  {
    href: "/private-podcasts-for-teams/",
    title: "Audience segmentation",
    description:
      "Create Tracks by department, language, level or team, then assign them to the intended Members' private feeds.",
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
      "Paste text or upload a supported document to generate a draft audio episode for review before publication.",
  },
  {
    href: "/mcp/",
    title: "MCP connector",
    description:
      "Manage supported audio, episode and member actions from Claude through Brandscast's MCP connector.",
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
