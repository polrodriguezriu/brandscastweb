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
      "Give sales, support and marketing the story behind each release with short private audio briefings from your product team.",
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
          <h1>Give your team the story behind every release</h1>
          <p className="lead">
            Turn <strong>product updates</strong> into stories your team can
            use. Explain what changed, which customer problem it solves and how
            to talk about it in short private audio episodes.
          </p>
          <p className="hero-meta">
            Give sales a talk track, support a heads-up and the wider team the
            story behind your next release.
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
                Release notes, internal emails and chat updates capture what
                shipped. Audio adds the conversation behind the release: the
                customer need, the choices you made and the examples teams can
                use.
              </p>
              <p>
                Then the questions start. Sales asks what to say. Support asks
                what to expect. Marketing asks what is ready to share.
                Leadership asks why it matters. The same explanation repeats
                across meetings, and important nuance gets diluted.
              </p>
              <p>
                Record the core explanation once and share it alongside the
                release notes. Teams can hear the background before coming
                together to discuss questions or launch plans.
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
            <h2>What product updates with internal audio look like</h2>
            <p>
              Product updates with internal audio means turning releases into
              short audio episodes alongside the written update. You explain
              what changed and why it matters in a clear voice, with examples
              and positioning.
            </p>
            <p>
              Walk through a customer's problem and show how the release changes
              their day. Explain the trade-offs and call out what the feature
              does, what it does not do and who it helps.
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
                Publish a regular recap with the main changes, the customer
                impact and the teams involved. Give colleagues a familiar place
                to catch up on the latest release.
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
                Record a conversation where product answers questions from
                sales, support or marketing. Cover the questions that come up in
                customer conversations, such as availability, limitations and
                next steps.
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
                These episodes give teams practical examples to use alongside
                the changelog, from a sales conversation to a support reply.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>Benefits of product updates in audio</h2>
              <p>
                Audio gives a release a human explanation and a reusable place
                for the questions behind the feature list.
              </p>

              <p>
                <strong>The why behind the release</strong>
              </p>
              <p>
                Explain why you built the feature and which customer problem
                drove it. Give teams the background they need to talk about its
                value.
              </p>

              <p>
                <strong>A shared explanation across teams</strong>
              </p>
              <p>
                Each invited group receives the same explanation in the same
                words. This gives sales, support, marketing and leadership a
                shared source of context.
              </p>

              <p>
                <strong>Less repetition for product teams</strong>
              </p>
              <p>
                Record the core release explanation once and point teams to it.
                Use follow-up conversations for their specific questions, rather
                than starting the introduction again.
              </p>

              <p>
                <strong>A format that works across time zones</strong>
              </p>
              <p>
                Product updates often need to reach{" "}
                <a href="/podcasting-for-remote-teams/">distributed teams</a>.
                Audio lets colleagues hear the release explanation on their own
                schedule, without waiting for a shared meeting slot.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>When product audio is a good fit</h3>
              <p>Use audio for product updates when you:</p>
              <ul>
                <li>
                  Ship frequently and need a lightweight way to communicate
                  change.
                </li>
                <li>Have distributed teams with limited overlapping hours.</li>
                <li>Need consistent messaging for go to market teams.</li>
                <li>Want to share release context before live discussions.</li>
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
                Brandscast delivers <strong>product updates</strong> through one
                private RSS feed per Member. Assign Tracks to sales, support or
                the wider company so each gets the updates relevant to their
                work.
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
                  that work in compatible podcast apps.
                </li>
                <li>
                  <strong>Control access</strong> by team, role, or region, and
                  revoke future feed access when needed.
                </li>
                <li>
                  <strong>See listening analytics</strong> to compare recorded
                  listening activity among invited teams.
                </li>
              </ul>
              <p>
                Give product communication a regular home in audio, with release
                notes alongside it for specifications, links and detailed steps.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>A simple rhythm for product communication</h3>
              <p>
                Brandscast helps you build a repeatable cadence, for example
                weekly product updates, plus deeper launch episodes when needed.
              </p>
              <p>
                A regular recap gives routine releases a home, while a dedicated
                launch episode gives important changes room for a fuller
                explanation.
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
              Start with your next release. Explain one change clearly, share it
              with the relevant teams and use their questions to shape the next
              episode.
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
                  Create your product updates Track in Brandscast and invite the
                  teams that need it most, often sales, support, marketing,
                  success and leadership.
                </p>
              </div>
              <div className="step">
                <h3>Improve with feedback and listening data</h3>
                <p>
                  Ask teams what helps them and what is missing. Review recorded
                  listening activity by episode. Use their feedback to refine
                  length, topics and targeting.
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
                  a: "Each Member receives a unique private RSS feed with the Tracks you assign. The link acts like a password, so it should not be forwarded. You can revoke future feed access; downloaded copies may remain.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Share product updates with Brandscast"
          lead="Help sales, support and marketing explain your next release with clear context and practical examples from the product team."
          note="Create a product updates Track and share the story behind your next release."
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
