import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Private RSS feed distribution for internal podcasts | Brandscast",
  description:
    "Distribute private internal audio through per-member RSS feeds for compatible apps such as PulsarCast, Apple Podcasts, Pocket Casts, Overcast, AntennaPod and Podcast Addict.",
  alternates: { canonical: "https://brandscast.com/rss-distribution/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/rss-distribution/",
    title: "Private RSS feed distribution for internal podcasts | Brandscast",
    description:
      "Bring company updates to the podcast apps your team already uses, with a personal private feed for every Member.",
    images: "/Podcasters.webp",
  },
};

export default function RssDistributionPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">RSS distribution</div>
          <h1>Private RSS feeds for your internal podcast</h1>
          <p className="lead">
            Every listener on Brandscast gets a personal, authenticated RSS feed
            they can add to a compatible podcast app. Your team can listen in
            PulsarCast, Apple Podcasts, Pocket Casts, Overcast, AntennaPod or
            Podcast Addict while you retain control over access.
          </p>
          <p className="hero-meta">
            Invite your team once. Publish new episodes to their personal feeds
            and let them listen alongside their favourite podcasts.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why distribution matters as much as the content</h2>
              <p>
                A useful update deserves an easy way to listen. Private RSS
                brings your internal audio to familiar podcast apps, so your
                team can keep company updates alongside the shows they follow.
              </p>
              <p>
                When a listener can add internal audio to a compatible app, the
                update can sit alongside their existing listening. They do not
                need to open a company dashboard to catch the next episode.
              </p>
              <p>
                Each Member gets one private feed with their assigned Tracks.
                You manage the audience in Brandscast; they choose a compatible
                app and listen on their own schedule.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>Works with compatible podcast apps</h3>
              <ul>
                <li>Apple Podcasts</li>
                <li>PulsarCast</li>
                <li>Pocket Casts</li>
                <li>Overcast</li>
                <li>AntennaPod</li>
                <li>Podcast Addict</li>
              </ul>
              <div className="tag-list">
                <span className="tag">private RSS</span>
                <span className="tag">podcast distribution</span>
                <span className="tag">secure feeds</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>How private RSS distribution works in Brandscast</h2>
            <p>
              When you add a member to your Brandscast audio, the platform
              generates a unique RSS feed URL for that person. Their feed brings
              together the Tracks you assign to them, so they only need to
              subscribe once.
            </p>

            <h3>What makes these feeds different from public RSS</h3>
            <p>
              A standard public audio RSS feed can be shared with anyone. Anyone
              with the link can subscribe and listen. Private RSS feeds in
              Brandscast are personal and can be turned off individually. Each
              Member gets one feed containing the Tracks assigned to them.
            </p>

            <h3>A guided setup in compatible apps</h3>
            <p>
              Each invited member adds a personal feed to Apple Podcasts, Pocket
              Casts, Overcast, AntennaPod or Podcast Addict through the
              subscription page. Spotify does not support this private RSS
              workflow. Apps refresh feeds on their own schedule.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Security and access controls around each feed</h2>
              <p>
                RSS distribution in Brandscast is designed with security from
                the start. Each Member receives a personal feed instead of one
                company-wide feed URL, and administrators retain{" "}
                <a href="/secure-access-control/">
                  member-level access control
                </a>
                .
              </p>

              <h3>Remove access when someone leaves</h3>
              <p>
                When an employee leaves or changes roles, you remove them from
                Brandscast and future requests through their personal RSS feed
                are rejected. Episodes already downloaded to their device may
                remain and need to be covered by your device and offboarding
                policies.
              </p>

              <h3>No public directory listing</h3>
              <p>
                Brandscast does not submit private feeds to public podcast
                directories. You invite your audience directly and choose which
                Tracks appear in each Member&apos;s feed.
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>What Brandscast controls for you</h3>
              <ul>
                <li>One personal private feed per Member</li>
                <li>Revocation of future requests when access ends</li>
                <li>No submission to public podcast directories</li>
                <li>Member list with access status</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>Company updates in a familiar app</h2>
              <p>
                <a href="/internal-communication/">Internal communication</a>{" "}
                can fit into the way your team already listens. For colleagues
                new to podcasts, the subscription page walks them through adding
                their feed to a compatible app.
              </p>

              <h3>Take updates beyond the screen</h3>
              <p>
                Catch up on a leadership update during a walk or listen to a
                colleague&apos;s story on the commute. Audio gives your team
                another way to stay informed without looking at a screen.
              </p>

              <h3>Apps can refresh new episodes automatically</h3>
              <p>
                Once a member has added a personal feed, compatible apps can
                refresh new episodes without a Brandscast web login. Refresh
                timing and notification behaviour depend on the app and device.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>When RSS distribution helps most</h3>
              <ul>
                <li>
                  Remote or{" "}
                  <a href="/podcasting-for-remote-teams/">distributed teams</a>{" "}
                  with varied schedules
                </li>
                <li>Companies where employees already listen to audio</li>
                <li>High-frequency internal communication channels</li>
                <li>
                  Teams that want company updates in the apps they already use
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to set up RSS distribution with Brandscast
            </h2>

            <div className="step-list">
              <div className="step">
                <h3>Create your private audio</h3>
                <p>
                  Set up your internal audio in Brandscast, upload your first
                  episode and configure your access settings.
                </p>
              </div>

              <div className="step">
                <h3>Add your employees</h3>
                <p>
                  Invite listeners by email. Each member gets a unique RSS key
                  and subscription link generated automatically.
                </p>
              </div>

              <div className="step">
                <h3>Members add their feed to a compatible app</h3>
                <p>
                  Each member copies their personal RSS link and adds it to
                  Apple Podcasts, Pocket Casts, Overcast, AntennaPod or Podcast
                  Addict through the guided subscription page.
                </p>
              </div>

              <div className="step">
                <h3>Publish and let the app refresh the feed</h3>
                <p>
                  Compatible apps can fetch newly published episodes after a
                  member subscribes. Refresh timing, downloads and notifications
                  depend on the app, device and user settings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <Faq
              heading={
                "Frequently asked questions about private RSS distribution"
              }
              items={[
                {
                  q: "Can employees share their RSS feed with someone outside the company",
                  a: "Feed links work like passwords: anyone with the link may be able to listen, so do not forward them. If a link is shared, an administrator can turn it off or replace it with a new one.",
                },
                {
                  q: "What happens to the feed when I remove a member",
                  a: "Their feed can no longer fetch audio or new episodes. Removing access does not erase files already downloaded to their device.",
                },
                {
                  q: "Which podcast apps are compatible",
                  a: "Brandscast supports apps that accept a custom authenticated RSS feed, including PulsarCast, Apple Podcasts, Pocket Casts, Overcast, AntennaPod and Podcast Addict. Spotify does not support this private RSS workflow.",
                },
                {
                  q: "Do employees need a Brandscast account to listen via RSS",
                  a: "Members listen in a compatible podcast app, not the Brandscast dashboard. You invite them from Brandscast, and they receive a personal subscription link for their private RSS feed.",
                },
              ]}
            />
          </div>
        </section>

        <CtaSection
          title="Start distributing your internal audio via private RSS"
          lead="Bring your next company update to the podcast apps your team already uses."
          note="Publish your first episode and invite your team to subscribe."
        />
      </main>

      <RelatedLinks
        links={[
          {
            href: "/private-podcasts-for-teams/",
            label: "Private podcasts for teams",
          },
          { href: "/secure-access-control/", label: "Secure access control" },
          {
            href: "/employee-listening-analytics/",
            label: "Employee listening analytics",
          },
          { href: "/tracks/", label: "Tracks" },
          {
            href: "/state-of-internal-communication-2026/",
            label: "State of Internal Communication 2026",
          },
          {
            href: "/text-to-audio/",
            label: "Turn documents into audio",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
