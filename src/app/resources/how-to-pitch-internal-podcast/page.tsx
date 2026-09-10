import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "How to pitch an internal podcast to your boss | Brandscast",
  description:
    "Make the case for internal audio with practical arguments, budget planning, answers to common objections and a pitch you can adapt for your boss.",
  alternates: {
    canonical:
      "https://brandscast.com/resources/how-to-pitch-internal-podcast/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/resources/how-to-pitch-internal-podcast/",
    title: "How to pitch an internal podcast to your boss | Brandscast",
    description:
      "Get a clear pitch structure for internal audio, with practical examples for leadership, HR, operations and finance.",
    images: "/Podcasters.webp",
  },
};

export default function HowToPitchInternalPodcastPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandscast.com/" },
          {
            name: "How to pitch an internal podcast to your boss",
            url: "https://brandscast.com/resources/how-to-pitch-internal-podcast/",
          },
        ]}
      />
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Resources</div>
          <h1>How to pitch an internal podcast to your boss</h1>
          <p className="lead">
            You see a place for audio in your company's communication. Now you
            need to explain it to the person who approves the budget. Build your
            pitch around a real need, a useful first episode and a clear plan.
          </p>
          <p className="hero-meta">
            Written for HR managers, internal comms leads, operations managers,
            and anyone who needs to make the business case for a new
            communication channel without overselling it.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why this pitch is worth making</h2>
              <p>
                A short recording makes the idea tangible. Let your decision
                maker hear how a leader could explain a priority or how a new
                hire could learn the company's story in a colleague's voice.
              </p>
              <p>
                You are proposing an additional format for communication that
                already happens. Audio gives employees another way to receive
                that message, alongside email, chat and meetings.
              </p>
              <p>
                Start with something you can name: a recurring question from new
                hires, a team working across time zones or colleagues who would
                welcome an option that does not require a screen.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>What you are pitching</h3>
              <p>
                Not an audio production project. A communication channel that:
              </p>
              <ul>
                <li>
                  Is asynchronous, while preserving live discussion where it is
                  needed.
                </li>
                <li>
                  Publishes one consistent recording alongside the written
                  source of truth.
                </li>
                <li>
                  Shows recorded starts and completion to help you improve
                  future episodes.
                </li>
                <li>Can start with one team and a few focused episodes.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">business case</span>
                <span className="tag">internal comms</span>
                <span className="tag">ROI</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner two-cols">
            <div>
              <h2>The problem you are solving, in business terms</h2>
              <p>
                Before you pitch the solution, name the problem in language that
                resonates with your decision maker. Depending on their role, the
                frame changes.
              </p>

              <h3>For a CEO or founder</h3>
              <p>
                "As we grow, the same priorities and decisions mean different
                things to different teams. We are losing alignment, and it is
                slowing us down. A private audio update would let you explain
                those priorities in your own voice, for teams to hear on their
                own schedules."
              </p>

              <h3>For an HR or People director</h3>
              <p>
                "Our onboarding varies too much depending on the manager. Our
                policy changes are understood inconsistently across teams.
                Employees say they feel out of the loop in engagement surveys.
                We need a channel that reaches people where they are, not where
                we assume they are."
              </p>

              <h3>For a COO or Operations lead</h3>
              <p>
                "Some field and frontline roles have fewer opportunities to use
                a screen during work. We could offer an audio version of our
                weekly update, alongside the written one, for colleagues who
                prefer to listen during a suitable break."
              </p>

              <h3>For a CFO or budget owner</h3>
              <p>
                "We repeat parts of training, onboarding and broadcast updates.
                Let's record a short series for one team, track the time we
                spend producing it and ask whether it answers their recurring
                questions. We can review the results before investing further."
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>One sentence per stakeholder</h3>
              <ul>
                <li>
                  <strong>CEO:</strong> shares the thinking behind decisions in
                  your own voice.
                </li>
                <li>
                  <strong>HR:</strong> one consistent recording for{" "}
                  <a href="/employee-onboarding/">onboarding</a> and policy
                  communication for selected teams.
                </li>
                <li>
                  <strong>Ops:</strong> offers an audio option for field roles
                  with limited screen time.
                </li>
                <li>
                  <strong>Finance:</strong> starts with a clear budget and a
                  review before a wider rollout.
                </li>
              </ul>
              <p style={{ margin: "0" }}>
                Pick the frame that fits your audience. Do not try to say all of
                them at once.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="centered-heading">
              The business case in five points
            </h2>
            <p>
              You do not need a long deck. You need five clean arguments, each
              tied to something your organisation already cares about.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Not everyone can stop what they are doing to read</h3>
                <p>
                  PoliteMail reports a 66.2 percent average recorded unique open
                  rate under the provider's methodology (Internal Email
                  Benchmarks 2026). The open rate does not establish coverage
                  outside the measured recipient audience. An older 2018
                  estimate, repeated in 2020, put the deskless workforce at
                  roughly 80 percent; it is not a current census or a measure of
                  email access. In a separate six-country study, 45 percent of
                  non-desk respondents said they were not informed about the
                  reasons behind company changes (Staffbase and YouGov, 2025).
                  Reading requires visual focus. Audio adds another option where
                  employees have a safe moment to listen and a suitable device.
                  Keep language, accessibility and workplace rules in mind when
                  choosing the first audience.
                </p>
              </div>
              <div className="step">
                <h3>Give people context before the meeting</h3>
                <p>
                  Establish the attendance hours used by the broadcast portion
                  of a current meeting. Compare that with scripting, review,
                  recording, publishing, total listening time and retained Q and
                  A. Count only time actually displaced; do not treat discussion
                  or decisions as replaceable broadcast time.
                </p>
              </div>
              <div className="step">
                <h3>Onboarding inconsistency is a recurring cost</h3>
                <p>
                  If onboarding varies by manager, measure the repeated
                  explanation time, clarification requests and ramp outcome. A
                  reusable recording creates one consistent version, but it
                  still requires maintenance, written material, accessibility
                  support and live practice.
                </p>
              </div>
              <div className="step">
                <h3>You can measure it</h3>
                <p>
                  Brandscast reports starts and measured completion for each
                  Member's feed. Because a feed link can be shared, activity
                  does not prove who listened or what they understood. Pair it
                  with a question or survey about the message itself.
                </p>
              </div>
              <div className="step">
                <h3>Start with a budget you can explain</h3>
                <p>
                  Budget for the platform and the time to prepare, review and
                  publish episodes, including accessible versions. Choose one
                  team and a review date so your sponsor knows what they are
                  approving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>Handling the objections you will hear</h2>
              <p>
                Objections to internal audio can be reasonable. They come from
                people who have seen "new channel" initiatives fail before. Here
                is how to address them directly.
              </p>

              <h3>"Nobody will listen to it"</h3>
              <p>
                Bring a sample episode that answers a question colleagues
                already ask. Invite one team to listen, then review recorded
                listening and their feedback. A specific example gives your
                sponsor something concrete to assess.
              </p>

              <h3>"We already have too many communication channels"</h3>
              <p>
                Explain where audio fits: the same weekly update, with a choice
                to read it or hear it. Keep email for written detail, chat for
                questions and meetings for discussion. Show how the audio
                version fits into the routine colleagues already know.
              </p>

              <h3>"It will create extra work"</h3>
              <p>
                Be clear about the work involved. Reuse an existing update,
                choose a repeatable outline and name who will record and
                publish. Track the time spent so the review includes the effort
                as well as the response from listeners.
              </p>

              <h3>"Our employees are not audio listeners"</h3>
              <p>
                Ask the first team how they would like to receive updates. Offer
                a short sample and help them subscribe in a compatible podcast
                app. Keep the written version available so listening remains a
                choice.
              </p>

              <h3>"What happens with sensitive content"</h3>
              <p>
                Brandscast does not publish private audio in a public directory.
                Each Member gets a personal private feed link, which should be
                treated like a password. You can remove future feed access, but
                links can be forwarded and downloaded files may remain. Agree on
                which topics are suitable and who should receive them.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>Make the first decision easy</h3>
              <p>
                Your sponsor needs to know who it is for, what it will cost and
                when you will report back.
              </p>
              <p>
                Put those answers on one page. Propose a small group, a few
                useful episodes and a review date before any wider rollout.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>A simple pitch structure to adapt</h2>
              <p>
                Keep the presentation short. Show the problem, play a sample and
                explain what you need to get started. Leave time for questions.
              </p>

              <h3>Open with the problem, not the solution</h3>
              <p>
                "I want to talk about how we communicate X. Right now, the way
                we do it is not landing. Here is the evidence." Use one or two
                specific examples: a policy that was misapplied, an onboarding
                inconsistency, an all-hands that felt too long for the
                information it conveyed.
              </p>

              <h3>Name what you have tried and why it is not enough</h3>
              <p>
                Describe what you have learned from the team. For example: "Our
                technicians asked for a version of the weekly update they could
                hear during a break." Use a real example from your own
                organisation.
              </p>

              <h3>Introduce the channel, not the tool</h3>
              <p>
                "I would like to offer short private audio updates alongside our
                written ones. Each Member subscribes through their own private
                RSS feed in a compatible podcast app, such as Apple Podcasts or
                Pocket Casts." Keep the explanation brief.
              </p>

              <h3>Propose a pilot, not a programme</h3>
              <p>
                "I am not asking for a full rollout. I want one team, a fixed
                number of episodes and a decision date. We will review recorded
                listening, direct feedback, the selected outcome and full
                operating cost before deciding whether to continue."
              </p>

              <h3>Give one specific success metric</h3>
              <p>
                Choose a result tied to the original problem, such as whether
                new hires can answer a key onboarding question. Track listening
                alongside it to learn how the episodes are being used.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>The five-part pitch</h3>
              <ol style={{ paddingLeft: "1.2rem", margin: "0" }}>
                <li>Open with the problem</li>
                <li>Name what you have tried</li>
                <li>Introduce the channel</li>
                <li>Propose a pilot</li>
                <li>One success metric</li>
              </ol>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: ".85rem",
                  color: "var(--muted)",
                }}
              >
                Keep the meeting under fifteen minutes. Leave room for
                questions.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner two-cols">
            <div>
              <h2>What to prepare before the meeting</h2>
              <p>
                You will have a stronger pitch if you walk in with three things
                ready.
              </p>

              <h3>One internal communication failure you can name</h3>
              <p>
                A specific example: a policy that was misunderstood, a decision
                that was interpreted differently across teams, an onboarding
                that varies too much by manager. One real, recent example lands
                better than any statistic.
              </p>

              <h3>A cost estimate for the current approach</h3>
              <p>
                If you run a monthly all-hands for sixty people that lasts
                ninety minutes, that is ninety hours of collective time per
                month. Separate the broadcast portion from discussion and
                decisions, then compare only the time a pilot could plausibly
                displace with its production, review and listening cost.
              </p>

              <h3>A proposed pilot plan on one page</h3>
              <p>
                Team or group you would pilot with. Number of episodes per
                month. Episode format and length. Who records. How you will
                share the subscribe link. What you will measure. How you will
                review it. One page, not a deck.
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>A first plan to adapt</h3>
              <ul>
                <li>Pilot group: one team or location of 15 to 30 people.</li>
                <li>Duration: six weeks.</li>
                <li>Episodes: two per month, five to ten minutes each.</li>
                <li>
                  Listening threshold: set against the comparable current
                  channel baseline.
                </li>
                <li>
                  Review: recorded listening, team feedback, results and the
                  time and money spent publishing.
                </li>
              </ul>
              <p style={{ margin: "0" }}>
                Use the review to decide what to keep, what to improve and
                whether another team would benefit.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={
                "Frequently asked questions about pitching internal audio"
              }
              items={[
                {
                  q: "How do I find out whether colleagues want audio updates",
                  a: "Talk to the team you want to start with. Ask which updates they value, when they could listen and what they would want to hear. Bring those answers and a sample episode to your sponsor; the first few episodes will show actual use.",
                },
                {
                  q: "What budget should I ask for",
                  a: "Include the Brandscast plan for your audience plus time to prepare, approve, record and publish episodes. Allow for accessible versions and listener support. Set out the cost through your first review date.",
                },
                {
                  q: "Who should record the episodes",
                  a: "Choose someone who knows the subject and can speak about it naturally. A leader can explain priorities; a colleague closest to the work can share a process or customer story. Give them a short outline and a quiet place to record.",
                },
                {
                  q: "What if my boss says we will review it in six months",
                  a: "Suggest a review after the first six weeks so you can learn while the episodes are fresh. Bring listener feedback, recorded use and the time spent publishing, then agree on the next steps together.",
                },
              ]}
            />
          </div>
        </section>

        <CtaSection
          title="Turn your pitch into a first episode"
          lead="Give your sponsor something to hear. Create a Track in Brandscast, record the update you have in mind and invite your first team."
          note="Start free, invite your pilot group, and have your first episode live before the week is out."
        />
      </main>

      <RelatedLinks
        links={[
          {
            href: "/resources/guide-to-internal-podcasts/",
            label: "Guide to internal podcasts",
          },
          {
            href: "/resources/internal-comms-best-practices/",
            label: "Internal comms best practices",
          },
          {
            href: "/resources/how-to-launch-a-private-podcast/",
            label: "How to launch a private podcast",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
