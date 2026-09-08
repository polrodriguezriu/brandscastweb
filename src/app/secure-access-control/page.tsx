import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Revocable private RSS access for internal audio | Brandscast",
  description:
    "Manage internal audio entitlements with one private RSS feed per Member. Revoke future feed requests while accounting for forwarded URLs and prior downloads.",
  alternates: { canonical: "https://brandscast.com/secure-access-control/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/secure-access-control/",
    title: "Revocable private RSS access for internal audio | Brandscast",
    description:
      "Use one private RSS feed per Member and revoke future feed requests when roles change, with explicit bearer-URL and download boundaries.",
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
          <h1>Revocable private RSS access for internal audio</h1>
          <p className="lead">
            With <strong>secure access control for internal audio</strong> you
            manage who is entitled to receive your internal audio. Brandscast
            gives each Member a unique private RSS feed whose future access can
            be revoked when permissions change.
          </p>
          <p className="hero-meta">
            On this page you will see how per-employee private feeds work, how
            access revocation is handled and why this matters for internal
            communication, security and compliance.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why the access model matters for internal audio</h2>
              <p>
                Internal audio often contain sensitive information. You share
                strategy, financial context, upcoming launches and honest
                reflections on what is working and what is not. This is exactly
                the kind of content you do not want drifting outside your
                company.
              </p>
              <p>
                A single shared bearer URL can move from one person to another,
                and disabling it affects everyone who uses it. It also does not
                identify the person behind a request.
              </p>
              <p>
                <strong>Secure access control for internal audio</strong> uses a
                different model. Instead of one shared feed for everyone, each
                invited Member gets a private{" "}
                <a href="/rss-distribution/">RSS feed</a>. This gives you a
                per-Member entitlement and revocation path. It does not prove
                who held the device or played a downloaded file.
              </p>
              <p>
                For{" "}
                <a href="/internal-communication/">internal communication</a>{" "}
                and <a href="/employee-onboarding/">HR teams</a>, this access
                model must be reviewed alongside content classification, device,
                retention and offboarding policy.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>What the model provides</h3>
              <ul>
                <li>
                  <strong>Assigned entitlements</strong> showing which Tracks
                  are included in each Member feed.
                </li>
                <li>
                  <strong>Revocation</strong> of future requests for one Member
                  feed without rotating an organisation-wide URL.
                </li>
                <li>
                  <strong>Accountability</strong> through an individual feed
                  credential instead of one company-wide URL.
                </li>
                <li>
                  <strong>Evidence for review</strong>, without claiming that a
                  bearer feed alone satisfies security or compliance policy.
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
                Brandscast does not require one generic company feed shared by
                the whole team. Each private feed URL is an individual bearer
                credential: anyone who obtains it may be able to use it until
                you revoke or regenerate that feed, so it should be handled like
                a password.
              </p>
              <p>
                This design is the core of secure access control for internal
                audio in Brandscast. It lets you manage feed entitlement one
                Member record at a time, within the bearer-URL boundary above.
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
              <p>One member record, one revocable feed credential.</p>
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
              When you remove a Member from an internal audio or from your
              Brandscast workspace, future requests through their unique private
              feed stop returning the protected content. The feed is no longer a
              valid path for retrieving it from Brandscast.
            </p>
            <p>Practically, this means:</p>
            <ul>
              <li>
                Their private feed is no longer updated with new episodes.
              </li>
              <li>
                Future requests cannot retrieve the protected audio through that
                feed.
              </li>
              <li>
                Content already downloaded to a device may remain there and must
                be covered by your device, retention and offboarding policies.
              </li>
            </ul>
            <p>
              From an offboarding perspective, this replaces an
              organisation-wide shared URL with a credential you can revoke for
              one member. It closes future access through Brandscast, while
              copies already downloaded remain outside that revocation boundary.
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
                Operational differences for security, HR and internal
                communication
              </h2>
              <p>
                Different teams can review the per-Member feed model from their
                own operational perspective.
              </p>
              <p>
                <strong>For security and IT teams</strong>
              </p>
              <p>
                You get a way to manage which Member records are entitled to
                receive sensitive audio content. Access is not based on generic
                links or public feeds, but on per-Member private feeds that can
                be revoked individually.
              </p>
              <p>
                <strong>For HR and people teams</strong>
              </p>
              <p>
                You can integrate Brandscast into your onboarding and
                offboarding checklists. When someone joins, they receive a
                private feed credential. When they leave, you can invalidate
                that credential for future requests.
              </p>
              <p>
                <strong>For internal communication teams</strong>
              </p>
              <p>
                You can segment internal audio and manage feed access at member
                level. This adds a controllable distribution path, alongside the
                editorial and information-classification policies your content
                still requires.
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
                Security and leadership should review the residual URL,
                download, device and retention risks before approving the
                channel.
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
                  <strong>Centralises assigned entitlements</strong> so you can
                  review Member records and adjust Track permissions without
                  equating assignments with actual possession of a feed URL.
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
                Because that feed is unique, you can revoke its future requests
                independently. This does not remotely delete copies an app may
                already have downloaded.
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
              Start with a defined audience, content classification and
              offboarding rule. Expand only after the organisation has reviewed
              the access boundaries.
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
                  Future requests through their private feed are then rejected;
                  your offboarding policy should also cover downloaded files and
                  managed devices.
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
                  a: "In Brandscast, each person gets one private podcast feed generated for their member record. It contains the internal audio assigned to them. The URL is an individual bearer credential, so it should not be forwarded and can be revoked if exposed.",
                },
                {
                  q: "What happens to the feed when we remove someone’s access",
                  a: "When you remove an employee from Brandscast or from specific internal audio, future feed requests stop returning that protected content. Audio already downloaded to a device may remain there, so revocation should sit alongside your device and offboarding policies.",
                },
                {
                  q: "Can employees share their private feed with others",
                  a: "Yes. A private feed URL is a bearer credential and can be forwarded. Per-employee feeds let you identify which member record owns a credential and revoke that specific path for future requests if it is exposed or the person leaves.",
                },
                {
                  q: "How does this help with compliance and internal policies",
                  a: "Per-Member feeds record intended entitlements and provide an individual path for future-request revocation. They do not prove who possesses a forwarded URL or erase downloaded files, so the organisation must assess them alongside its content, device, retention and offboarding controls.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Use secure access control for your internal audio with Brandscast"
          lead="Per-employee private feeds give internal audio a revocable access layer without publishing it in a public directory."
          note="Create a first Track, invite a pilot group and include feed handling in your access policy."
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
