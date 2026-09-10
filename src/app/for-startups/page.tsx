import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Private podcasts for startups | Brandscast",
  description:
    "Bring your founder's voice to a growing team. Share company updates, onboarding and the why behind decisions through private audio with Brandscast.",
  alternates: { canonical: "https://brandscast.com/for-startups/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/for-startups/",
    title: "Private podcasts for startups | Brandscast",
    description:
      "Share the story behind your startup's decisions. Private audio for founder updates, new-hire welcomes and product context across your team.",
    images: "/Podcasters.webp",
  },
};

export default function ForStartupsPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">For startups</div>
          <h1>Private podcasts for startups that move fast</h1>
          <p className="lead">
            Startups use <strong>private audio</strong> to share founder
            updates, onboarding and key decisions in a format people can listen
            to between sprints, alongside existing written channels.
          </p>
          <p className="hero-meta">
            Give new colleagues the origin story and keep your growing team
            close to the reasoning behind the next big decision.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why alignment breaks as startups grow</h2>
              <p>
                In a small founding team, context often travels informally. As
                headcount grows, decisions cross more team boundaries and
                different groups can leave with different interpretations.
              </p>
              <p>
                Teams may respond with an all-hands, a product sync or a
                leadership check-in. Those live formats remain useful for
                discussion and decisions. A short audio update gives colleagues
                the background to revisit before or after the conversation.
              </p>
              <p>
                The real problem is not lack of communication. It is that the
                communication is unstructured, undocumented, and inconsistent.
                New hires miss context. Contractors get a different story.{" "}
                <a href="/podcasting-for-remote-teams/">Remote employees</a>{" "}
                catch only fragments.
              </p>
              <p>
                Private internal audio adds an on-demand broadcast option. Short
                episodes can carry the founder's voice, product rationale and
                decision context without requiring one shared live slot.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>Signs your startup has an alignment gap</h3>
              <ul>
                <li>
                  New hires need three weeks to understand how things actually
                  work.
                </li>
                <li>
                  Teams make conflicting decisions because context was not
                  shared.
                </li>
                <li>
                  The all-hands feels rushed and people leave with more
                  questions.
                </li>
                <li>
                  Remote employees feel out of the loop between live sessions.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">startups</span>
                <span className="tag">alignment</span>
                <span className="tag">async comms</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>What private audio looks like for a startup</h2>
            <p>
              Start with a short founder update each week or fortnight. Share
              what changed, what you learned and what comes next, alongside your
              usual written updates and team conversations.
            </p>
            <p>
              When you explain a difficult decision in your own voice, people
              can hear your emphasis and the trade-offs you considered. Give
              them room to ask about what is still unclear.
            </p>
            <p>
              Episodes can also be structured and evergreen. An{" "}
              <a href="/employee-onboarding/">onboarding series</a> that
              explains how the company works, what good looks like, and how
              decisions get made. It gives each invited new hire access to the
              same introduction, alongside the documents, tasks and people that
              help them settle in.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How startups use private audio</h2>
              <p>
                Use the stories you already tell: why you built the product,
                what changed this month and how the team makes decisions.
              </p>

              <h3>Founder and leadership updates</h3>
              <p>
                Add an audio briefing before or after an all-hands. It can cover
                priorities, decisions and context, while the live session stays
                available for questions, discussion and connection.
              </p>

              <h3>Onboarding for new hires</h3>
              <p>
                Build a short series of six to ten episodes. How the company
                works, what the product is, how decisions get made, what culture
                actually looks like day to day. Every new hire gets the same
                introduction to return to. Keep it current and make room for
                questions and practice with their manager.
              </p>

              <h3>Product and strategy context</h3>
              <p>
                When the product direction changes or a big bet is placed,
                record a short episode explaining why. This is especially useful
                for{" "}
                <a href="/for-sales-teams/">
                  sales, support, and success teams
                </a>{" "}
                who need to explain the roadmap to customers. Link the episode
                to the written decision and invite follow-up questions.
              </p>

              <h3>Team knowledge sharing</h3>
              <p>
                Short team episodes on what was shipped, what was learned, and
                what comes next can supplement a demo or written changelog for
                teams working across time zones.
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>Startup audio episode examples</h3>
              <ul>
                <li>
                  Founder update: what happened this month, what changes, and
                  why.
                </li>
                <li>
                  Onboarding episode two: how we make decisions at this company.
                </li>
                <li>
                  Product context: why we deprioritised this feature and what it
                  means for sales.
                </li>
                <li>
                  Team spotlight: what the data team shipped and what it unlocks
                  next.
                </li>
              </ul>
              <p>
                Start with a few bullet points and talk as you would to a
                colleague. Keep the first episode focused on one useful story.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>Keep the story available as your team grows</h2>

              <p>
                <strong>It can be reused as you hire</strong>
              </p>
              <p>
                Your next hire can hear the origin story and product thinking
                you recorded for the last one. Update individual episodes as
                your company changes.
              </p>

              <p>
                <strong>It survives busy weeks</strong>
              </p>
              <p>
                People can listen while commuting, between tasks, or after the
                standup. They are not dependent on a specific window in
                everyone&apos;s calendar. The recording is there when they are
                ready to catch up.
              </p>

              <p>
                <strong>It carries founder voice</strong>
              </p>
              <p>
                New colleagues can hear the founder&apos;s explanation of why
                the company exists, what matters and how decisions get made,
                even before they have met in person.
              </p>

              <p>
                <strong>It captures the reasoning behind a decision</strong>
              </p>
              <p>
                When decisions are made but not documented, the team carries the
                cost of that missing context for months. A short audio episode
                explaining a decision can provide a reusable companion to the
                written decision record, including the options you considered
                and the trade-offs behind your choice.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>When to start</h3>
              <p>
                The useful starting point is not a specific headcount. It is the
                moment recurring context begins to cross teams, locations or
                time zones and needs a more structured broadcast rhythm.
              </p>
              <ul>
                <li>You are onboarding more than two people per month.</li>
                <li>Remote or async employees need more context.</li>
                <li>The all-hands is already feeling too long.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to start your startup podcast in four steps
            </h2>
            <p>
              Start with one use case. Do not try to build a full content
              library before publishing. Pick a story your team needs now and
              let their questions guide the next episode.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Pick the one thing you most need to communicate</h3>
                <p>
                  Welcome a new colleague or explain this month's priorities.
                  Choose one topic you can discuss clearly and keep it focused.
                </p>
              </div>
              <div className="step">
                <h3>Record a six to ten minute episode</h3>
                <p>
                  Use a short outline: context, the main point, what it means
                  for the team, what comes next. Record in one take.
                  Imperfections are fine.
                </p>
              </div>
              <div className="step">
                <h3>Invite the team and give them a clear habit</h3>
                <p>
                  Tell them what to expect and help them subscribe. Share the
                  episode alongside the written update in the channels your team
                  already uses.
                </p>
              </div>
              <div className="step">
                <h3>Let your team's questions shape the next episode</h3>
                <p>
                  Ask what was useful and what needs more explanation. Review
                  listening analytics, adjust the length and choose a rhythm you
                  can keep up with.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner two-cols">
            <div>
              <h2>How Brandscast supports startup internal audio</h2>
              <p>
                Organize updates and onboarding into Tracks, invite your team
                and publish your episodes. Each Member gets one private RSS feed
                containing their assigned Tracks.
              </p>
              <p>With Brandscast, you can:</p>
              <ul>
                <li>
                  <strong>Create private audio</strong> and assign Tracks to
                  teams such as engineers, sales or new hires.
                </li>
                <li>
                  <strong>Invite employees</strong> with private links that work
                  in compatible podcast apps such as Apple Podcasts, Pocket
                  Casts or Overcast.
                </li>
                <li>
                  <strong>Control access</strong> and stop future feed access
                  when someone leaves.
                </li>
                <li>
                  <strong>See listening analytics</strong> to explore recorded
                  starts and completion for each episode.
                </li>
              </ul>
              <p>
                Use your existing updates as the starting point. Add your voice,
                share the recording and build from there.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>What a lean startup audio system looks like</h3>
              <p>
                Start with a Track for company updates. Add an onboarding Track
                with the origin story, product overview and ways of working new
                colleagues need.
              </p>
              <p>
                Each Member receives one private feed containing their assigned
                Tracks. Add more topics when your team has a reason to hear
                them.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={
                "Frequently asked questions about internal audio for startups"
              }
              items={[
                {
                  q: "Is this only useful for remote startups",
                  a: "No. Colleagues in the same office can also use a founder update or onboarding episode between conversations. Remote teams can catch up across time zones, with the same recordings available to both.",
                },
                {
                  q: "How much time does it take to produce an audio episode",
                  a: "Start with an outline, record one focused explanation, listen back and publish. A company update can stay simple; sensitive topics or interviews may need more preparation and review.",
                },
                {
                  q: "What if only a few people listen",
                  a: "Ask your team what got in the way. Help with subscription, choose a more relevant topic or shorten the next episode. Give people the written update too, so they can choose the format that suits them.",
                },
                {
                  q: "Can we use this for investor or board updates",
                  a: "You can invite them as Members and assign a dedicated Track. Each gets a personal private RSS feed. The link acts like a password, so do not share it; stopping future feed access does not remove downloaded files. Choose content that is appropriate for that audience.",
                },
              ]}
            />
          </div>
        </section>

        <CtaSection
          title="Bring your founder's voice to a growing team"
          lead="Share the origin story, the decisions and the priorities behind your next stage of growth."
          note="Create your first Track and invite your team to hear the next update."
        />
      </main>

      <RelatedLinks
        links={[
          { href: "/for-leadership/", label: "For leadership teams" },
          { href: "/employee-onboarding/", label: "Employee onboarding" },
          { href: "/internal-communication/", label: "Internal communication" },
          {
            href: "/resources/guide-to-internal-podcasts/",
            label: "Guide to internal podcasts",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
