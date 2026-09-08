import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Private RSS feed distribution for internal podcasts | Brandscast",
  description:
    "Distribute private internal audio through per-member RSS feeds for compatible apps such as Apple Podcasts, Pocket Casts, Overcast, AntennaPod and Podcast Addict.",
  alternates: { canonical: "https://brandscast.com/rss-distribution/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/rss-distribution/",
    title: "Private RSS feed distribution for internal podcasts | Brandscast",
    description:
      "Give each member a revocable RSS feed credential for compatible podcast apps, without publishing the audio in a public directory.",
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
            Apple Podcasts, Pocket Casts, Overcast, AntennaPod or Podcast Addict
            while you retain control over access.
          </p>
          <p className="hero-meta">
            On this page you will learn how private RSS distribution works, why
            it affects access, and which security boundaries still apply.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why distribution matters as much as the content</h2>
              <p>
                Publishing a private audio inside a company solves one problem.
                Giving the intended audience a realistic way to receive it is a
                separate distribution problem. Supporting familiar podcast apps
                removes one possible access barrier.
              </p>
              <p>
                When a listener can add internal audio to a compatible app, the
                update can sit alongside their existing listening. They do not
                need a Brandscast web player to receive new episodes.
              </p>
              <p>
                RSS distribution in Brandscast adds a unique key per invited
                member and lets administrators revoke future feed access. The
                feed URL must be protected like a credential.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>Works with compatible podcast apps</h3>
              <ul>
                <li>Apple Podcasts</li>
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
              generates a unique RSS feed URL for that person. The URL includes
              a bearer key associated with their member record. Anyone who
              obtains that URL may be able to use it until you revoke or
              regenerate the credential.
            </p>

            <h3>What makes these feeds different from public RSS</h3>
            <p>
              A standard public audio RSS feed can be shared with anyone. Anyone
              with the link can subscribe and listen. Private RSS feeds in
              Brandscast are personal, authenticated and revocable. The URL
              contains the member&apos;s RSS key and must be treated as a
              credential; revoke or regenerate access if it is exposed.
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
                the start. Each member receives a separate credential instead of
                one company-wide feed URL, and administrators retain{" "}
                <a href="/secure-access-control/">
                  member-level access control
                </a>
                .
              </p>

              <h3>Revoke future feed requests</h3>
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
                directories. The RSS endpoint requires its bearer key, but the
                URL can still be forwarded or exposed and must be treated as a
                credential.
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>What Brandscast controls for you</h3>
              <ul>
                <li>Unique bearer feed credential per member</li>
                <li>Revocation of future requests when access ends</li>
                <li>No public indexing or discoverability</li>
                <li>Member list with access status</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>A familiar workflow for some listening habits</h2>
              <p>
                <a href="/internal-communication/">Internal communication</a>{" "}
                tools have different access requirements. Private RSS can use a
                familiar listening workflow for employees who already use a
                compatible app, while others may need setup support.
              </p>

              <h3>Audio can fit selected existing routines</h3>
              <p>
                People may listen while commuting, exercising or doing approved
                light work. A compatible private feed can use those same safe
                moments. Whether this improves adoption is a pilot outcome, not
                a distribution guarantee.
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
                  Organisations testing whether RSS removes a specific access
                  barrier
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
                  a: "The feed URL contains a personal RSS key and must be treated as a credential. If it is exposed or shared, an administrator should revoke or regenerate that member's access. As with other downloadable files, copies already saved to a device may remain there.",
                },
                {
                  q: "What happens to the feed when I remove a member",
                  a: "Future requests through their personal feed are rejected, so it no longer returns protected audio or new episodes. Files already downloaded to a device may remain there and need to be covered by your device and offboarding policies.",
                },
                {
                  q: "Which podcast apps are compatible",
                  a: "Brandscast supports apps that accept a custom authenticated RSS feed, including Apple Podcasts, Pocket Casts, Overcast, AntennaPod and Podcast Addict. Spotify does not support this private RSS workflow.",
                },
                {
                  q: "Do employees need a Brandscast account to listen via RSS",
                  a: "Each invited member needs an access record in Brandscast. That record generates the personal RSS key used by the feed and lets administrators revoke future access without requiring the member to use the web dashboard.",
                },
              ]}
            />
          </div>
        </section>

        <CtaSection
          title="Start distributing your internal audio via private RSS"
          lead="Give each invited listener a revocable feed credential for a compatible podcast app, without publishing the audio in a public directory."
          note="Pilot the subscription flow with a small group before a broader rollout."
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
            href: "/communication-coverage-audit/",
            label: "Communication coverage audit",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
