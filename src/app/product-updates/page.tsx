import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Product updates | Brandscast",
  description:
    "Add private audio to product updates so teams can hear what changed, why it matters and how to talk about it alongside the written release detail.",
  alternates: { canonical: "https://brandscast.com/product-updates/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/product-updates/",
    title: "Product updates | Brandscast",
    description:
      "Share product context through private internal audio, segmented by audience and supported by member-level listening analytics.",
    images: "/Podcasters.webp",
  },
};

export default function ProductUpdatesPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Product updates</div>
          <h1>Share product updates in a format teams actually follow</h1>
          <p className="lead">
            With <strong>product updates</strong> delivered through private
            internal audio, you share what changed, why it matters, and how
            teams should talk about it. Assigned Members can revisit the audio
            in an appropriate context and use the written update for detail and
            reference.
          </p>
          <p className="hero-meta">
            On this page you will see how internal audio can support product
            updates across functions and give intended groups another way to
            revisit the impact behind each release.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why product updates get lost inside busy weeks</h2>
              <p>
                Product teams ship constantly. New features, improvements, bug
                fixes, pricing changes, and small details that matter. The
                problem is not shipping. It is making sure the rest of the
                company understands what changed and how to use it.
              </p>
              <p>
                Most product updates travel through release notes, long Slack
                threads, or internal emails. Those formats remain useful for
                detail and reference; a team should still test whether intended
                groups can retrieve the context and positioning they need.
              </p>
              <p>
                Then the questions start. Sales asks what to say. Support asks
                what to expect. Marketing asks what is ready to share.
                Leadership asks why it matters. The same explanation repeats
                across meetings, and important nuance gets diluted.
              </p>
              <p>
                Some broadcast updates may not justify another weekly meeting. A
                pilot can test whether an on-demand spoken version adds useful
                context while the written release record remains authoritative.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Signs your product updates are not landing</h3>
              <ul>
                <li>
                  Teams ship features, but adoption inside the company is slow.
                </li>
                <li>
                  Sales and support repeat questions that were already answered.
                </li>
                <li>
                  Marketing struggles to understand what is actually ready.
                </li>
                <li>
                  Different teams describe the same feature in different ways.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">product updates</span>
                <span className="tag">internal alignment</span>
                <span className="tag">release communication</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>What product updates with internal audio looks like</h2>
            <p>
              Product updates with internal audio means turning releases into
              short audio episodes alongside the written update. You explain
              what changed and why it matters in a clear voice, with examples
              and positioning.
            </p>
            <p>
              A spoken narrative can carry the customer problem, trade-offs and
              intended emphasis. Feedback or a short assessment is still needed
              to establish whether people interpreted it correctly.
            </p>
            <p>
              Episodes can be as short as three to eight minutes. One feature,
              one message, one clear action. For larger releases, you can
              publish a short series, or record a quick conversation between
              product and go to market teams.
            </p>
            <p>
              Because it is private, you can keep it honest. You can explain
              what is still evolving and what is not ready yet, without turning
              every update into a public narrative.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How to use internal audio for product updates</h2>
              <p>
                You can use internal audio for product updates in a few
                repeatable ways. The key is to tie each episode to a decision or
                an impact, not only a list of features.
              </p>

              <h3>Weekly or biweekly product update recap</h3>
              <p>
                Publish a short recap with the main changes, the customer
                impact, and the teams involved. This creates a recurring
                reference whose adoption can be measured.
              </p>

              <h3>Deep dives for important launches</h3>
              <p>
                For bigger releases, record a deeper episode where product
                explains the problem, the solution, and the expected outcomes.
                Include positioning so sales and marketing stay consistent.
              </p>

              <h3>Talk tracks for go to market teams</h3>
              <p>
                Add a dedicated segment for sales, support, and success. What
                should they say, what should they avoid, and which customer
                questions to expect.
              </p>

              <h3>Cross functional Q and A</h3>
              <p>
                Record a short conversation where product answers common
                internal questions. Compare repeated-question volume and
                audience feedback before deciding whether the format helps.
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>Examples of product update episodes</h3>
              <ul>
                <li>
                  A three minute update on a new workflow and who it helps.
                </li>
                <li>A PM explaining a launch and the story behind it.</li>
                <li>
                  A short talk track for sales on how to position the change.
                </li>
                <li>
                  A support focused episode on expected tickets and edge cases.
                </li>
              </ul>
              <p>
                These episodes add spoken context alongside the changelog. Ask
                the intended group whether that makes the change easier to
                interpret.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>What to evaluate in a product-update audio pilot</h2>
              <p>
                Internal audio supplies a reusable spoken explanation. Measure
                use, interpretation and operating effects separately.
              </p>

              <p>
                <strong>Interpretation of context</strong>
              </p>
              <p>
                Audio lets the speaker explain the why behind the update. Ask
                the audience what they understood instead of inferring it from a
                completed play.
              </p>

              <p>
                <strong>A shared input across teams</strong>
              </p>
              <p>
                Each invited group receives the same explanation in the same
                words. This gives sales, support, marketing and leadership a
                shared source of context.
              </p>

              <p>
                <strong>Repeated-question volume</strong>
              </p>
              <p>
                Teams can reference one episode alongside the written release.
                Compare meeting time and repeated questions with the baseline;
                do not assume either will fall.
              </p>

              <p>
                <strong>A format that works across time zones</strong>
              </p>
              <p>
                Product updates often need to reach{" "}
                <a href="/podcasting-for-remote-teams/">distributed teams</a>.
                Audio adds an on-demand format; validate which listening windows
                are practical for each intended group.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>Conditions worth testing</h3>
              <p>Consider a bounded pilot when you:</p>
              <ul>
                <li>
                  Ship frequently and need a lightweight way to communicate
                  change.
                </li>
                <li>Have distributed teams with limited overlapping hours.</li>
                <li>Need consistent messaging for go to market teams.</li>
                <li>
                  Want to carry broadcast context outside live discussions.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>
                How Brandscast supports product updates with private audio
              </h2>
              <p>
                Brandscast publishes <strong>product updates</strong> through
                per-Member private RSS feeds. Assign Tracks to the intended
                groups, keep the written release as the source of record and
                treat every feed URL as a bearer credential.
              </p>
              <p>With Brandscast, you can:</p>
              <ul>
                <li>
                  <strong>Create dedicated audio</strong> for product updates,
                  go to market updates, or{" "}
                  <a href="/leadership-updates/">leadership context</a>.
                </li>
                <li>
                  <strong>Invite listeners easily</strong> with private links
                  that work in podcast apps.
                </li>
                <li>
                  <strong>Control access</strong> by team, role, or region, and
                  revoke future feed requests when needed.
                </li>
                <li>
                  <strong>See listening analytics</strong> to compare recorded
                  starts and measured completion among invited teams.
                </li>
              </ul>
              <p>
                You get an additional distribution format for product change,
                linked back to the written source of truth and existing
                channels.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>A simple rhythm for product communication</h3>
              <p>
                Brandscast helps you build a repeatable cadence, for example
                weekly product updates, plus deeper launch episodes when needed.
              </p>
              <p>
                Measure whether the cadence is used and whether teams find it
                useful before expanding it.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to start product update audio in four steps
            </h2>
            <p>
              Start small and build consistency. Track repeated questions,
              recorded listening and feedback to evaluate the pilot.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Choose a cadence that you can sustain</h3>
                <p>
                  Weekly, every two weeks, or tied to launches. Pick a rhythm
                  that fits your shipping pace and your team’s capacity.
                </p>
              </div>
              <div className="step">
                <h3>Use a simple episode structure</h3>
                <p>
                  A useful structure is: what changed, why it matters, who it is
                  for, what to say, and what to do next. Keep it short and
                  clear.
                </p>
              </div>
              <div className="step">
                <h3>Publish and invite the right audiences</h3>
                <p>
                  Create your product updates audio in Brandscast and invite the
                  teams that need it most, often sales, support, marketing,
                  success and leadership.
                </p>
              </div>
              <div className="step">
                <h3>Improve with feedback and listening data</h3>
                <p>
                  Ask teams what helps them and what is missing. Review recorded
                  starts and measured completion by episode. Then test changes
                  to length, topics and targeting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={
                "Frequently asked questions about product updates with audio"
              }
              items={[
                {
                  q: "Should product updates replace release notes",
                  a: "Usually no. Release notes are useful as a reference. Audio adds context and impact. Many teams use audio for the story and keep release notes for details and links.",
                },
                {
                  q: "How long should product update episodes be",
                  a: "Start with one change and one audience question per episode. A broader launch can become a short series; use completion and feedback from the invited group to adjust length.",
                },
                {
                  q: "Who should record product update episodes",
                  a: "Product managers are a common choice for explaining what changed and why. For go to market messaging, pairing product with sales enablement or marketing can make episodes more actionable.",
                },
                {
                  q: "How do we keep internal product updates private",
                  a: "Each invited member receives a unique private feed. Administrators can revoke future feed requests when a role changes; feed URLs can be forwarded and downloaded copies may remain.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Share product updates with Brandscast"
          lead="Test one recurring product update in private audio, link the written source of truth and compare listening, feedback and message recall separately."
          note="Create a private product updates audio in a few minutes and publish your next release as a short episode."
        />
      </main>

      <RelatedLinks
        links={[
          { href: "/for-sales-teams/", label: "For sales teams" },
          {
            href: "/audio-messages-and-updates/",
            label: "Audio messages and updates",
          },
          { href: "/sales-enablement/", label: "Sales enablement" },
          {
            href: "/for-customer-support-teams/",
            label: "For customer support teams",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
