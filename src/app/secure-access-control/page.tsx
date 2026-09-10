import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Manage access to your internal audio | Brandscast",
  description:
    "Choose who receives each Track, give every Member a private RSS feed and update access as your team changes.",
  alternates: { canonical: "https://brandscast.com/secure-access-control/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/secure-access-control/",
    title: "Manage access to your internal audio | Brandscast",
    description:
      "Share internal audio with the right teams. Manage Track permissions and individual private feeds from one place.",
    images: "/Podcasters.webp",
  },
};

export default function SecureAccessControlPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Secure access control</div>
          <h1>Share internal audio with the right people</h1>
          <p className="lead">
            With <strong>secure access control for internal audio</strong>, you
            choose who receives each Track. Every Member gets a unique private
            RSS feed, and you can update or remove their access as your team
            changes.
          </p>
          <p className="hero-meta">
            Send onboarding to new hires, leadership briefings to managers and
            company news to everyone, with permissions you manage in one place.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why the access model matters for internal audio</h2>
              <p>
                Internal audio often contains sensitive information. You share
                strategy, financial context, upcoming launches and honest
                reflections on what is working and what is not. This is exactly
                the kind of content you do not want drifting outside your
                company.
              </p>
              <p>
                One shared feed makes changes awkward: turn it off for someone
                who leaves, and everyone else loses that link too.
              </p>
              <p>
                <strong>Secure access control for internal audio</strong> uses a
                different model. Instead of one shared feed for everyone, each
                invited Member gets a private{" "}
                <a href="/rss-distribution/">RSS feed</a>. This gives you a way
                to change one person&apos;s access without interrupting the rest
                of your team.
              </p>
              <p>
                For{" "}
                <a href="/internal-communication/">internal communication</a>{" "}
                and <a href="/employee-onboarding/">HR teams</a>, that means
                simpler invitations, relevant content for each group and a clear
                way to remove access when someone leaves.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Keep access organised as your team grows</h3>
              <ul>
                <li>
                  <strong>Clear permissions</strong> showing which Tracks are
                  included in each Member feed.
                </li>
                <li>
                  <strong>Revocation</strong> of future requests for one Member
                  feed without rotating an organisation-wide URL.
                </li>
                <li>
                  <strong>Personal feeds</strong> containing the audio each
                  Member is assigned.
                </li>
                <li>
                  <strong>Simple management</strong> for invitations, role
                  changes and offboarding.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">secure access control</span>
                <span className="tag">internal podcasts</span>
                <span className="tag">private feeds</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner two-cols">
            <div>
              <h2>How per-Member private feeds work in Brandscast</h2>
              <p>
                Brandscast is built around a simple idea. Each Member gets a{" "}
                <strong>single, unique and private feed</strong> for the
                internal audio assigned to them. The feed is generated for that
                member record inside your workspace.
              </p>
              <p>
                When you invite someone to Brandscast, the platform creates this
                unique private feed. They subscribe in a compatible app such as
                Apple Podcasts, Pocket Casts, Overcast, AntennaPod or Podcast
                Addict. The app then refreshes the feed on its own schedule.
              </p>
              <p>
                Each feed link works like a password. Keep it private: anyone
                who receives it may be able to listen until you turn it off or
                replace it with a new link.
              </p>
              <p>
                You can change a Member&apos;s assigned Tracks as their role
                evolves, without asking the whole company to subscribe again.
              </p>
            </div>
            <aside className="callout callout--accent-2">
              <h3>The life of a private feed</h3>
              <p>For each Member, Brandscast:</p>
              <ul>
                <li>Creates a unique private feed when they are invited.</li>
                <li>
                  Associates that feed with their permissions for internal
                  audio.
                </li>
                <li>Builds the feed from the audio assigned to that member.</li>
                <li>Rejects future feed requests after access is removed.</li>
              </ul>
              <p>One Member, one private feed, all their assigned audio.</p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>What happens when you remove access</h2>
            <p>
              Secure access control is not just about how you grant access. It
              is also about how you remove it. In Brandscast, access revocation
              is built into the way private feeds work.
            </p>
            <p>
              When you remove a Member from a Track or from your Brandscast
              workspace, future requests through their unique private feed stop
              returning the protected content. The feed is no longer a valid
              path for retrieving it from Brandscast.
            </p>
            <p>Practically, this means:</p>
            <ul>
              <li>New episodes from the removed Track no longer appear.</li>
              <li>
                Future requests cannot retrieve the protected audio through that
                feed.
              </li>
              <li>Files already downloaded to a device may remain there.</li>
            </ul>
            <p>
              Remove one Member without changing anyone else&apos;s feed.
              Include downloaded audio in your usual offboarding process, just
              as you would other files saved to a device.
            </p>
            <p>
              This behaviour is key to{" "}
              <strong>secure access control for internal audio</strong>. It lets
              People, Security and IT teams align on a simple rule. If someone
              should no longer receive content, you remove them in Brandscast
              and their feed no longer grants future access.
            </p>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>
                Easier access management for IT, HR and communication teams
              </h2>
              <p>
                Keep your internal audio organised through new hires, team moves
                and departures.
              </p>
              <p>
                <strong>For security and IT teams</strong>
              </p>
              <p>
                Review who is assigned each Track and revoke individual feeds
                when needed. A change for one Member does not require a new link
                for everyone else.
              </p>
              <p>
                <strong>For HR and people teams</strong>
              </p>
              <p>
                You can integrate Brandscast into your onboarding and
                offboarding checklists. When someone joins, they receive a
                private feed. When they leave, you can stop that feed from
                fetching more content.
              </p>
              <p>
                <strong>For internal communication teams</strong>
              </p>
              <p>
                Send each audience the updates that matter to them. Create
                separate Tracks for departments, languages or managers and
                assign them to the relevant Members.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>Aligning with your policies</h3>
              <p>
                Many companies already have strict guidelines about who can see
                what. Using per-employee private feeds and access revocation
                helps you align internal audio with those same rules, instead of
                creating an exception.
              </p>
              <p>
                For sensitive topics, check that private RSS fits your rules for
                shared links and downloaded files.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>
                How Brandscast implements secure access control for internal
                audio
              </h2>
              <p>
                Brandscast is designed from day one as a platform for private,
                internal audio. Secure access control is not an extra feature.
                It is how the product works at its core.
              </p>
              <p>In practice, this means that Brandscast:</p>
              <ul>
                <li>
                  <strong>Generates a unique private feed per Member</strong>{" "}
                  instead of sharing one generic feed for everyone.
                </li>
                <li>
                  <strong>Links each feed to specific permissions</strong> for
                  internal audio, so the generated feed reflects the content
                  assigned to that member.
                </li>
                <li>
                  <strong>Revokes future feed access</strong> when you remove
                  that Member&apos;s access from your workspace or from
                  particular audio.
                </li>
                <li>
                  <strong>Centralises access management</strong> so you can
                  review Members and adjust Track permissions in one place.
                </li>
                <li>
                  <strong>Combines with listening analytics</strong> without
                  publishing the feed in a public podcast directory.
                </li>
              </ul>
              <p>
                For you, this looks like a clean dashboard where you manage
                employees, internal audio and access levels without needing to
                understand technical details.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>One feed per Member, not one feed per company</h3>
              <p>
                Instead of a single company feed shared by everyone, Brandscast
                creates one private feed per Member record.
              </p>
              <p>
                When someone moves teams, change their assigned Tracks. When
                they leave, remove their access without disrupting colleagues.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to set up secure access control for internal audio in four
              steps
            </h2>
            <p>
              Choose your audiences, create their Tracks and invite your team.
              You can adjust permissions as your organisation changes.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Define who should have access to internal audio</h3>
                <p>
                  Start by identifying the groups that should receive internal
                  audio. For example, all employees, managers only or specific
                  teams. This gives you a simple structure for permissions
                  before you invite anyone.
                </p>
              </div>
              <div className="step">
                <h3>Create your internal audio in Brandscast</h3>
                <p>
                  Set up the internal audio you need, such as leadership
                  updates, product news or onboarding content. Give each one a
                  clear name and description so people know what to expect.
                </p>
              </div>
              <div className="step">
                <h3>Invite employees and assign access</h3>
                <p>
                  Invite a first group of employees into Brandscast. The
                  platform creates a unique private feed for each of them.
                  Assign them access to the internal audio that is relevant to
                  their role.
                </p>
              </div>
              <div className="step">
                <h3>Integrate revocation into your offboarding process</h3>
                <p>
                  Add Brandscast to your standard offboarding checklist. When
                  someone leaves the company, you remove them from your
                  Brandscast workspace or revoke their access to specific audio.
                  Their feed will stop fetching the content they no longer have
                  access to.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={
                "Frequently asked questions about private RSS access for internal audio"
              }
              items={[
                {
                  q: "What exactly is a unique private feed per Member",
                  a: "Each Member gets one personal feed containing all their assigned Tracks. They subscribe once in a compatible podcast app, and you manage which Tracks they receive in Brandscast.",
                },
                {
                  q: "What happens to the feed when we remove someone’s access",
                  a: "Their feed can no longer fetch the audio you removed access to. Removing a Member from Brandscast turns off their whole feed. Neither action erases files already downloaded to a device.",
                },
                {
                  q: "Can employees share their private feed with others",
                  a: "The link can be forwarded, but it should stay private, like a password. Anyone with it may be able to listen. If it is shared, you can turn off that Member's feed without affecting anyone else's.",
                },
                {
                  q: "How does this help with compliance and internal policies",
                  a: "You can assign Tracks by team or role and make removing access part of your leaving process. Check that private links and downloadable audio fit your company's rules for the content you plan to share.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Bring your internal audio to the right audience"
          lead="Create Tracks for your teams and manage every Member's private feed from one place."
          note="Create your first Track and invite your team to listen."
        />
      </main>

      <RelatedLinks
        links={[
          {
            href: "/private-vs-public-podcast/",
            label: "Private vs public podcast",
          },
          {
            href: "/private-podcasts-for-teams/",
            label: "Private podcasts for teams",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
