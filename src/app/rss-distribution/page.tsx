import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Private RSS feed distribution for internal podcasts | Brandscast",
  description:
    "Distribute your private internal podcast to any podcast app via secure RSS feeds. Each listener gets a unique, authenticated feed they can add to Apple Podcasts, Spotify or any player.",
  alternates: { canonical: "https://brandscast.com/rss-distribution/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/rss-distribution",
    title: "Private RSS feed distribution for internal podcasts | Brandscast",
    description:
      "Secure, per-listener RSS feeds so your team can listen to internal podcasts in the app they already use.",
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
            they can add to any podcast app. Your team listens in Apple
            Podcasts, Spotify or wherever they already listen — without you
            losing control over who has access.
          </p>
          <p className="hero-meta">
            On this page you will learn how private RSS distribution works, why
            it matters for adoption, and how Brandscast keeps feeds secure.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why distribution matters as much as the content</h2>
              <p>
                Publishing a private podcast inside a company solves one
                problem. Getting people to actually listen solves another. The
                easiest way to build a listening habit is to meet people where
                they already are.
              </p>
              <p>
                Most employees already use a podcast app on their phone. If they
                can add your internal podcast there, alongside everything else
                they listen to, adoption is dramatically easier than asking them
                to open a new tool every time.
              </p>
              <p>
                RSS distribution in Brandscast makes this possible while keeping
                content completely private. Each person gets their own unique
                feed that only works for them.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>Works with any podcast app</h3>
              <ul>
                <li>Apple Podcasts</li>
                <li>Spotify</li>
                <li>Pocket Casts</li>
                <li>Overcast</li>
                <li>Any RSS-compatible player</li>
              </ul>
              <div className="tag-list">
                <span className="tag">private RSS</span>
                <span className="tag">podcast distribution</span>
                <span className="tag">secure feeds</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>How private RSS distribution works in Brandscast</h2>
            <p>
              When you add a member to your Brandscast podcast, the platform
              generates a unique RSS feed URL for that person. The URL includes
              an authentication token tied to their account. Only they can use
              it. If they leave the company or you revoke access, the feed stops
              working immediately.
            </p>

            <h3>What makes these feeds different from public RSS</h3>
            <p>
              A standard public podcast RSS feed can be shared with anyone.
              Anyone with the link can subscribe and listen. Private RSS feeds
              in Brandscast work the opposite way. Each feed is personal,
              authenticated and revocable. Sharing the link does not help anyone
              else because the token is bound to the original listener.
            </p>

            <h3>No app to install, no friction for employees</h3>
            <p>
              Your team does not need to learn a new tool. They add their
              personal feed to the podcast app they already use and new episodes
              appear automatically whenever you publish. The listening
              experience is identical to any other podcast.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Security and access control built into every feed</h2>
              <p>
                RSS distribution in Brandscast is designed with security from
                the start. There is no trade-off between convenience and
                control. Your team gets the convenience of their favourite app.
                You keep full control over who has access.
              </p>

              <h3>Revoke access instantly</h3>
              <p>
                When a team member leaves or changes roles, you remove them from
                Brandscast and their personal RSS feed stops working. Episodes
                already downloaded to their device remain, but they receive no
                new content and cannot re-authenticate.
              </p>

              <h3>No public URLs, no indexing</h3>
              <p>
                Private feeds are not discoverable. They do not appear in
                podcast directories. Search engines cannot index them. The
                content only reaches the people you explicitly authorise.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>What Brandscast controls for you</h3>
              <ul>
                <li>Unique authenticated feed per listener</li>
                <li>Instant revocation when access ends</li>
                <li>No public indexing or discoverability</li>
                <li>Full member list with access status</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Better adoption through familiar listening habits</h2>
              <p>
                Internal communication tools often fail because they require
                behaviour change. Employees already have a podcast listening
                habit. Private RSS distribution uses that habit instead of
                fighting it.
              </p>

              <h3>Passive listening fits into existing routines</h3>
              <p>
                People listen to podcasts while commuting, exercising or doing
                light work. When your internal podcast appears in the same feed,
                it fits naturally into the same moments. Consumption goes up
                without asking anyone to do anything differently.
              </p>

              <h3>Episodes appear automatically</h3>
              <p>
                Once a member has added their personal feed, new episodes appear
                automatically. They do not need to log in, check a dashboard or
                receive a notification. The content comes to them.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>When RSS distribution helps most</h3>
              <ul>
                <li>Remote or distributed teams with varied schedules</li>
                <li>Companies where employees already listen to podcasts</li>
                <li>High-frequency internal communication channels</li>
                <li>
                  Organisations wanting maximum reach with minimum friction
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
                <h3>1. Create your private podcast</h3>
                <p>
                  Set up your internal podcast in Brandscast, upload your first
                  episode and configure your access settings.
                </p>
              </div>

              <div className="step">
                <h3>2. Add your team members</h3>
                <p>
                  Invite listeners by email. Each member gets a personal account
                  and a unique RSS feed generated automatically.
                </p>
              </div>

              <div className="step">
                <h3>3. Members add their feed to any app</h3>
                <p>
                  Each member copies their personal RSS link and adds it to
                  their preferred podcast app. The process takes under a minute.
                </p>
              </div>

              <div className="step">
                <h3>4. Publish and your team listens automatically</h3>
                <p>
                  Every new episode you publish appears in each member's podcast
                  app without any action on their part.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>Frequently asked questions about private RSS distribution</h2>

            <div className="faq">
              <details>
                <summary>
                  Can employees share their RSS feed with someone outside the
                  company
                </summary>
                <p>
                  The feed URL is tied to their personal authentication token.
                  If someone outside tries to use it, they will not be able to
                  authenticate and will not receive any content.
                </p>
              </details>

              <details>
                <summary>
                  What happens to the feed when I remove a member
                </summary>
                <p>
                  Their personal feed stops working immediately. They will no
                  longer receive new episodes. Episodes they have already
                  downloaded to their device remain locally, but access to the
                  feed itself is revoked.
                </p>
              </details>

              <details>
                <summary>Which podcast apps are compatible</summary>
                <p>
                  Any app that supports adding a custom RSS feed URL works with
                  Brandscast. This includes Apple Podcasts, Pocket Casts,
                  Overcast, Castbox and many others. Spotify support depends on
                  their current RSS import feature availability.
                </p>
              </details>

              <details>
                <summary>
                  Do employees need a Brandscast account to listen via RSS
                </summary>
                <p>
                  Yes. Each listener needs a Brandscast member account. The
                  account is what generates their personal authenticated feed
                  and controls their access.
                </p>
              </details>
            </div>
          </div>
        </section>

        <CtaSection
          title="Start distributing your internal podcast via private RSS"
          lead="Give your team a seamless listening experience in any podcast app while keeping full control over who has access."
          note="Set up your private podcast and RSS distribution in minutes."
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
        ]}
      />

      <FooterMinimal />
    </>
  );
}
