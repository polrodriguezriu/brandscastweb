import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Private vs public podcast for internal communications | Brandscast",
  description:
    "Compare public discovery, shared private RSS and per-Member private RSS for internal communication, including access, analytics and security boundaries.",
  alternates: {
    canonical: "https://brandscast.com/private-vs-public-podcast/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/private-vs-public-podcast/",
    title: "Private vs public podcast for internal communications | Brandscast",
    description:
      "Compare public discovery, shared private RSS and per-Member private RSS for internal communication, including access, analytics and security boundaries.",
    images: "/Podcasters.webp",
  },
};

export default function PrivateVsPublicPodcastPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Private vs public podcast</div>
          <h1>
            Public audio and private internal distribution solve different jobs
          </h1>
          <p className="lead">
            Many teams start with a simple idea: create an audio on Spotify,
            share the link with employees and call it internal communications.
            That may suit public discovery. Internal communication needs a
            defined audience, revocable future access and listening signals tied
            to assigned member feeds.
          </p>
          <p className="hero-meta">
            This page compares public discovery, shared private RSS and
            per-member private RSS, including the limits of each model.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>The appeal of public platforms and the internal-use gap</h2>
              <p>
                Spotify and similar platforms are excellent for reaching a
                general audience. They are designed to maximise discovery, grow
                subscribers and track aggregate download numbers across the
                internet.
              </p>
              <p>
                <a href="/internal-communication/">Internal communications</a>{" "}
                has a different distribution goal. You are addressing a defined
                group, need listening evidence for that invited audience and
                need the ability to revoke future access. Public discovery
                platforms were not designed for that workflow.
              </p>
              <p>
                Some teams use one shared unlisted{" "}
                <a href="/rss-distribution/">RSS feed</a>. This avoids public
                directory listing but makes person-specific assignment and
                revocation difficult. A per-member feed creates a separate
                credential and activity record, while still relying on a URL
                that can be forwarded.
              </p>
              <p>
                The relevant choice is therefore not public versus perfectly
                secure. It is which distribution, assignment, revocation and
                measurement boundaries fit the content and audience.
              </p>
            </div>
            <aside className="callout callout--accent-2">
              <h3>What internal comms teams actually need from an audio</h3>
              <ul>
                <li>
                  <strong>Audience assignment</strong> — define which Tracks
                  appear in each Member&apos;s feed.
                </li>
                <li>
                  <strong>
                    Member-feed{" "}
                    <a href="/employee-listening-analytics/">analytics</a>
                  </strong>{" "}
                  — compare recorded starts and measured completion, with a
                  forwarding caveat.
                </li>
                <li>
                  <strong>Guided distribution</strong> — give invited Members a
                  subscription page for compatible apps.
                </li>
                <li>
                  <strong>Offboarding</strong> — reject future requests through
                  a revoked feed while accounting for prior downloads.
                </li>
                <li>
                  <strong>Content governance</strong> — match the channel to the
                  organisation&apos;s device, retention and information policy.
                </li>
              </ul>
              <p>
                Public platforms optimise discovery. Internal tools should make
                these controls and limitations explicit.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              Five differences that matter for internal communication
            </h2>

            <div className="step-list">
              <div className="step">
                <h3>
                  Public, shared and per-member URLs have different boundaries
                </h3>
                <p>
                  A public podcast is intended for discovery. An unlisted shared
                  feed removes directory discovery but anyone with its URL may
                  still use it, and revoking it affects every subscriber.
                </p>
                <p>
                  A per-member feed can reject future requests for one
                  credential without changing other feeds. The URL can still be
                  forwarded, and audio already downloaded may remain.
                </p>
                <p>
                  Treat every feed URL as a bearer credential and use revocation
                  as one part of a wider device, retention and offboarding
                  policy.
                </p>
              </div>

              <div className="step">
                <h3>Audience evidence differs by distribution model</h3>
                <p>
                  Public podcast analytics are generally oriented toward an
                  aggregate audience. They are not organised around a
                  company&apos;s invited Members and assigned groups.
                </p>
                <p>
                  For an internal comms team, aggregate download numbers are
                  insufficient for some segment-level questions. Member-level
                  starts and completion can show observed listening behaviour;
                  combine them with feedback or comprehension checks before
                  making claims about impact.
                </p>
                <p>
                  Brandscast associates recorded starts and measured completion
                  with a member feed and assigned audience. This is useful
                  behavioural evidence, but feed forwarding and shared devices
                  can make person-level attribution unreliable.
                </p>
              </div>

              <div className="step">
                <h3>3. Subscription is a real adoption step</h3>
                <p>
                  Public discovery asks people to find a show. Private RSS asks
                  each invited Member to use a subscription page and add the
                  feed to a compatible app.
                </p>
                <p>
                  Neither route guarantees adoption. Measure invitations,
                  successful setup where available, recorded starts and feedback
                  to investigate where the process breaks down.
                </p>
                <p>
                  Brandscast invites Members directly and builds one feed from
                  their assigned Tracks. They still need to subscribe in a
                  compatible app; the product does not silently install or play
                  content.
                </p>
              </div>

              <div className="step">
                <h3>
                  4. Sensitive content does not belong on a public platform
                </h3>
                <p>
                  Internal communications often covers topics you would never
                  publish publicly: leadership transitions, financial context,
                  strategic priorities, honest reflections on what is working
                  and what is not. This is precisely the content that makes
                  internal audio valuable. Public distribution is not an
                  appropriate default for that material.
                </p>
                <p>
                  Any hosted platform, including Brandscast, is a third-party
                  processor. Review its controls, subprocessors, contractual
                  terms and fit for the content classification.
                </p>
                <p>
                  Private per-member RSS reduces public discovery and supports
                  individual future-feed revocation. It does not prevent URL
                  forwarding, audio capture or retention of prior downloads.
                </p>
              </div>

              <div className="step">
                <h3>Downloads alone do not demonstrate impact</h3>
                <p>
                  Internal comms teams eventually face the same question from
                  leadership: is this working? Aggregate public download counts
                  provide limited audience evidence. A download is not proof
                  that the intended people listened, understood the message or
                  acted on it.
                </p>
                <p>
                  A decision about ROI needs delivery and listening signals plus
                  the operational outcome selected before the pilot. Starts or
                  completion alone do not establish value.
                </p>
                <p>
                  The measurement design should match the decision: audience
                  activity from the platform, and comprehension, behaviour or
                  business impact from an appropriate separate measure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="centered-heading">
              Public audio vs private internal audio platform
            </h2>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th className="col-feature"></th>
                    <th className="col-public">Spotify</th>
                    <th className="col-brand">Brandscast</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Access control",
                      "Public discovery",
                      "Per-member feed with revocable future requests",
                    ],
                    [
                      "Audience evidence",
                      "Aggregate public-audience metrics",
                      "Activity associated with a member feed",
                    ],
                    [
                      "Completion signal",
                      "Depends on public platform",
                      "Per episode and member feed, with attribution caveat",
                    ],
                    [
                      "Distribution",
                      "Discovery and follow",
                      "Invite and guided private-RSS subscription",
                    ],
                    [
                      "When someone leaves",
                      "Still has access",
                      "Future feed requests can be revoked",
                    ],
                    [
                      "Segment by department",
                      "Not organised around an employee directory",
                      "Assign Tracks to defined member groups",
                    ],
                    [
                      "Sensitive content",
                      "Stored on public platform",
                      "Private, access-controlled distribution",
                    ],
                    [
                      "Stakeholder reports",
                      "Public-audience reporting",
                      "Internal listening signals; outcomes measured separately",
                    ],
                  ].map(([feature, publicVal, privateVal]) => (
                    <tr key={feature}>
                      <td className="col-feature">{feature}</td>
                      <td className="col-public">{publicVal}</td>
                      <td className="col-brand">{privateVal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>When does it make sense to use a public audio platform?</h2>
              <p>
                Public platforms like Spotify are the right choice when your
                goal is reach. If you are building a brand, attracting an
                external audience, or creating content meant to be discovered by
                anyone, public audio hosting is exactly what you need.
              </p>
              <p>
                Some companies run both: an external audio for brand building
                and recruitment, and a private internal audio for employee
                communications. These are different tools solving different
                problems, and they work well alongside each other.
              </p>
              <p>
                If your goal is to communicate with a specific group of
                employees, compare activity within an invited audience and
                revoke future requests for one feed, that is a private,
                purpose-built tool problem.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>A practical way to think about it</h3>
              <p>Ask yourself two questions before choosing a platform:</p>
              <ol>
                <li>
                  Do I need listening activity associated with an assigned
                  member feed?
                </li>
                <li>
                  Would it be a problem if someone outside the company could
                  access this content?
                </li>
              </ol>
              <p>
                If you answered yes to either, a public audio platform is the
                poor fit. You need a private distribution model built around an
                invited list, with explicit limits for credentials, downloads
                and attribution.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <Faq
              heading={"Frequently asked questions"}
              items={[
                {
                  q: "Can I use a private RSS feed as a workaround for internal communications?",
                  a: "A private RSS feed can keep content out of public directories, but the access and measurement model depends on the provider. One shared feed URL cannot usually be revoked for a single person without affecting others. Compare whether a solution provides per-member credentials, individual revocation and the listening evidence your use case needs.",
                },
                {
                  q: "What analytics do I get with a private internal audio platform?",
                  a: "With Brandscast, you can see member-level starts and measured completion for each episode and compare those signals by assigned audience. Listening behaviour does not prove comprehension or impact, so use feedback or a relevant outcome measure alongside it.",
                },
                {
                  q: "How does employee distribution work without a public feed?",
                  a: "You invite members directly into Brandscast. Each person receives a unique private feed built from their assigned audio. They use the guided subscription page to add it to a compatible app such as Apple Podcasts, Pocket Casts, Overcast, AntennaPod or Podcast Addict; Spotify does not support this workflow.",
                },
                {
                  q: "What happens to employee access when they leave the company?",
                  a: "When you remove a member from your Brandscast workspace, future requests through their unique private feed are rejected. Audio already downloaded to a device may remain there, so feed revocation should be one part of your broader device, retention and offboarding policy.",
                },
                {
                  q: "Is internal audio content safe on a private platform?",
                  a: "Brandscast audio is not listed in public directories or on Spotify. Each invited member receives a unique RSS key that administrators can revoke. Treat the feed URL as a credential and apply organisational content and device policies, because downloaded files may remain after feed access is revoked.",
                },
              ]}
            />
          </div>
        </section>

        <CtaSection
          title="Build private internal audio with measurable access"
          lead="Start with revocable private feeds, member-level listening signals and invite-based distribution designed for internal use."
          note="30 day free trial · No credit card required · Cancel anytime"
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
        ]}
      />

      <FooterMinimal />
    </>
  );
}
