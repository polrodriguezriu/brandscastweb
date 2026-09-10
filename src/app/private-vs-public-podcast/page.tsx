import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Private vs public podcast for internal communications | Brandscast",
  description:
    "Choosing a podcast platform for your team? Compare public shows and private internal audio, from invitations and access to listening analytics.",
  alternates: {
    canonical: "https://brandscast.com/private-vs-public-podcast/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/private-vs-public-podcast/",
    title: "Private vs public podcast for internal communications | Brandscast",
    description:
      "See how private internal audio helps you choose your audience, manage access and follow listening trends across your team.",
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
            Private vs public podcasts: choose the right home for your audio
          </h1>
          <p className="lead">
            A public podcast helps new audiences find you. Private audio helps
            you speak to your own team, with invitations, content for specific
            groups and access you can manage as people join or leave.
          </p>
          <p className="hero-meta">
            Compare how each approach handles your audience, episode delivery
            and listening analytics.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Company updates need a different kind of platform</h2>
              <p>
                Spotify and similar platforms are excellent for reaching a
                general audience. They are designed to maximise discovery, grow
                subscribers and track aggregate download numbers across the
                internet.
              </p>
              <p>
                <a href="/internal-communication/">Internal communications</a>{" "}
                starts with the people in your organisation. You need to send
                relevant updates to each group, see listening trends and change
                access when someone moves teams or leaves.
              </p>
              <p>
                Some teams use one shared unlisted{" "}
                <a href="/rss-distribution/">RSS feed</a>. This avoids public
                directory listing, but turning off that link affects everyone
                using it. With one feed per Member, you can change individual
                access and assign different Tracks to different teams.
              </p>
              <p>
                Choose a platform around who the content is for. A customer
                interview for the world and a leadership briefing for managers
                need different ways to reach their audience.
              </p>
            </div>
            <aside className="callout callout--accent-2">
              <h3>What your internal audio platform should help you do</h3>
              <ul>
                <li>
                  <strong>Audience assignment</strong> — define which Tracks
                  appear in each Member&apos;s feed.
                </li>
                <li>
                  <strong>
                    Listening{" "}
                    <a href="/employee-listening-analytics/">analytics</a>
                  </strong>{" "}
                  — compare episodes and follow engagement trends.
                </li>
                <li>
                  <strong>Guided distribution</strong> — give invited Members a
                  subscription page for compatible apps.
                </li>
                <li>
                  <strong>Offboarding</strong> — remove a Member&apos;s feed
                  access without disrupting the rest of the team.
                </li>
                <li>
                  <strong>Relevant content</strong> — organise updates by
                  department, language or role.
                </li>
              </ul>
              <p>
                Brandscast brings these tasks together in a workspace built for
                internal communication.
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
                <h3>1. You choose who receives each update</h3>
                <p>
                  A public podcast is intended for discovery. An unlisted shared
                  feed removes directory discovery but anyone with its URL may
                  still use it, and revoking it affects every subscriber.
                </p>
                <p>
                  With a personal feed for each Member, you can turn off one
                  person's feed without changing anyone else's subscription.
                </p>
                <p>
                  Keep private feed links confidential, like passwords. Anyone
                  who receives a forwarded link may be able to use it until you
                  revoke it.
                </p>
              </div>

              <div className="step">
                <h3>2. Listening trends are organised around your team</h3>
                <p>
                  Public podcast analytics are generally oriented toward an
                  aggregate audience. They are not organised around a
                  company&apos;s invited Members and assigned groups.
                </p>
                <p>
                  Which episodes draw interest from sales? Is listening growing
                  in your regional teams? Internal audio analytics help you
                  explore questions like these by audience and episode.
                </p>
                <p>
                  Brandscast brings starts, completion and engagement trends
                  into one dashboard. Use them to choose topics, refine episode
                  length and find out where colleagues may need help
                  subscribing.
                </p>
              </div>

              <div className="step">
                <h3>3. Your team gets a direct invitation</h3>
                <p>
                  Public discovery asks people to find a show. Private RSS asks
                  each invited Member to use a subscription page and add the
                  feed to a compatible app.
                </p>
                <p>
                  A personal invitation gives colleagues a clear starting point.
                  Tell them what they will hear, how often you will publish and
                  which episode to try first.
                </p>
                <p>
                  Brandscast invites Members directly and builds one feed from
                  their assigned Tracks. Once they subscribe in a compatible
                  app, it can fetch new episodes as you publish them.
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
                  Brandscast keeps your audio out of public podcast directories.
                  You invite Members and decide which Tracks they receive.
                </p>
                <p>
                  For sensitive material, check that downloadable audio fits
                  your company&apos;s security rules. Private feeds cannot
                  prevent forwarding, recording or keeping downloaded copies.
                </p>
              </div>

              <div className="step">
                <h3>5. Reports help you improve your internal audio</h3>
                <p>
                  Internal comms teams eventually face the same question from
                  leadership: is this working? Seeing listening trends by
                  episode and team gives you a more useful starting point than a
                  single total download count.
                </p>
                <p>
                  Share which series are gaining listeners, how completion
                  compares across episodes and what you are changing next. Add
                  feedback from colleagues to bring the report to life.
                </p>
                <p>
                  When you need to check whether an update was understood, ask
                  your team directly. Listening trends help improve the content;
                  their answers tell you what needs more explanation.
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
                      "Listening analytics",
                      "Aggregate public-audience metrics",
                      "Listening trends by Member feed and team",
                    ],
                    [
                      "Episode completion",
                      "Depends on public platform",
                      "Measured completion by episode and Member feed",
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
                      "Internal listening trends and downloadable PDF reports",
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
                employees, share different Tracks with each team and manage
                individual access, Brandscast is built for that work.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>A practical way to think about it</h3>
              <p>Ask yourself two questions before choosing a platform:</p>
              <ol>
                <li>
                  Do I need to choose which employees receive each update?
                </li>
                <li>
                  Would it be a problem if someone outside the company could
                  access this content?
                </li>
              </ol>
              <p>
                If you answered yes to either, a public audio platform is the
                wrong fit. Choose private distribution with invitations and
                individual access controls.
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
                  a: "Yes, but check how the provider manages access. Turning off one shared feed affects everyone using it. Brandscast gives each Member a personal feed, so you can change their access independently and compare listening across your team.",
                },
                {
                  q: "What analytics do I get with a private internal audio platform?",
                  a: "You can compare episode starts, completion and listening trends by Member feed and team. Use them to refine topics and episode length. Listening data alone does not show understanding, so ask your team what they took away from an update.",
                },
                {
                  q: "How does employee distribution work without a public feed?",
                  a: "You invite members directly into Brandscast. Each person receives a unique private feed built from their assigned audio. They use the guided subscription page to add it to a compatible app such as Apple Podcasts, Pocket Casts, Overcast, AntennaPod or Podcast Addict; Spotify does not support this workflow.",
                },
                {
                  q: "What happens to employee access when they leave the company?",
                  a: "Remove the Member in Brandscast and their feed can no longer fetch audio or new episodes. This does not erase files they have already downloaded.",
                },
                {
                  q: "Is internal audio content safe on a private platform?",
                  a: "Brandscast does not list your audio in public podcast directories. Each Member gets a personal feed link that works like a password: do not forward it, because anyone with the link may be able to listen. You can turn it off if it is shared.",
                },
              ]}
            />
          </div>
        </section>

        <CtaSection
          title="Give your internal audio a home in Brandscast"
          lead="Invite your team, publish your first episode and follow listening trends in one place."
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
