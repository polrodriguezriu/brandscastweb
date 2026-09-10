import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "HR announcements | Brandscast",
  description:
    "Use private internal podcasts to make HR announcements clearer, more human and easier to follow. Share updates on policies, benefits and culture in a flexible audio format.",
  alternates: { canonical: "https://brandscast.com/hr-announcements/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/hr-announcements/",
    title: "HR announcements | Brandscast",
    description:
      "Add private audio to HR announcements about policies, benefits and people updates while keeping written guidance as the source of record.",
    images: "/Podcasters.webp",
  },
};

export default function HrAnnouncementsPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">HR announcements</div>
          <h1>
            Make HR announcements clearer and more human with internal audio
          </h1>
          <p className="lead">
            With <strong>HR announcements</strong> in private audio, explain
            what is changing, why it matters and what people need to do next.
            Give benefits, policies and people news a clear, approachable voice.
          </p>
          <p className="hero-meta">
            Walk colleagues through a new benefit, introduce a wellbeing program
            or answer the questions coming up before review season.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why HR announcements are easy to send but hard to absorb</h2>
              <p>
                <a href="/employee-onboarding/">HR teams</a> handle some of the
                most important messages in a company. Changes in benefits, new
                policies, performance cycles, office updates and people news.
                Most of this information still travels through long emails,
                intranet posts or slide decks.
              </p>
              <p>
                A written announcement sets out the details. A short audio
                message gives you room to explain the thinking behind a change
                and answer the questions people may have about their own
                situation.
              </p>
              <p>
                When you work across locations and time zones, the challenge
                grows. It is hard to bring everyone together in a live call
                every time you have something important to say. You want to be
                transparent, but you also want to avoid meeting fatigue.
              </p>
              <p>
                Private audio gives employees another way to follow the news
                that affects them, alongside your emails, intranet and team
                conversations.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Signs your HR announcements are not landing well</h3>
              <ul>
                <li>
                  Employees ask basic questions after you already shared a
                  detailed update.
                </li>
                <li>
                  Different teams interpret the same HR announcement in
                  different ways.
                </li>
                <li>
                  Some roles have limited practical access to long, screen-based
                  updates during the working day.
                </li>
                <li>
                  You rely on managers to re explain HR messages in separate
                  meetings.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">HR announcements</span>
                <span className="tag">internal communication</span>
                <span className="tag">people and culture</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>
              What using audio for HR announcements looks like in practice
            </h2>
            <p>
              Using audio for HR announcements means that instead of relying
              only on written messages, you record short episodes that explain
              what is changing and why. You keep the written record, but you add
              a human layer on top.
            </p>
            <p>
              A familiar voice from HR can make an announcement feel more
              personal. Employees can listen in their podcast app and return to
              the written update for dates, links and exact terms.
            </p>
            <p>
              Start with a five-minute explanation of a new benefit or the next
              performance cycle. Cover one topic, give a practical example and
              finish with the next step.
            </p>
            <p>
              Group HR announcements into Tracks and assign them to the relevant
              Members, such as managers, a regional team or the whole company.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How to use internal audio for HR announcements</h2>
              <p>
                You do not need to move every HR message to audio. Start with
                the types of HR announcements that benefit most from voice, tone
                and context.
              </p>
              <h3>Policy and compliance updates</h3>
              <p>
                When you introduce or adjust policies, record a short episode
                that explains the change in plain language. Pair it with written
                documentation so employees can listen first and then read the
                details.
              </p>
              <h3>Benefits and compensation communication</h3>
              <p>
                Walk employees through a new benefit: who it is for, how to use
                it and where to find the full terms. Keep personal compensation
                conversations in your usual individual channels.
              </p>
              <h3>Performance and growth cycles</h3>
              <p>
                Before reviews begin, explain the timetable, how to prepare and
                what a useful self-review looks like. Give managers a shared
                introduction they can build on in their team conversations.
              </p>
              <h3>People and culture stories</h3>
              <p>
                Share highlights from{" "}
                <a href="/employee-listening-analytics/">engagement surveys</a>,
                diversity and inclusion initiatives or new wellbeing programs.
                Let employees hear how leadership is responding and where you
                are focusing next.
              </p>
            </div>
            <aside className="callout callout--accent-2">
              <h3>Examples of HR announcement episodes</h3>
              <ul>
                <li>
                  A short overview of updated parental leave policies from your
                  HR leader.
                </li>
                <li>
                  A walk through of upcoming public holidays and how they impact
                  schedules.
                </li>
                <li>
                  A message about new wellbeing resources and how to access
                  them.
                </li>
                <li>
                  An update on engagement survey results and the actions you
                  will take.
                </li>
              </ul>
              <p>
                Give people a regular place to hear HR explain changes, answer
                common questions and share what is coming next.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>Benefits of audio for HR announcements</h2>
              <p>
                Short episodes let you explain the practical meaning behind an
                announcement in a voice your colleagues recognise.
              </p>
              <p>
                <strong>An option beyond the screen</strong>
              </p>
              <p>
                Employees can hear an explanation without needing to look at a
                screen. A short episode gives them another way to catch up
                during their day.
              </p>
              <p>
                <strong>A more human tone in key moments</strong>
              </p>
              <p>
                HR announcements often affect people personally. A calm,
                empathetic voice gives you space to acknowledge concerns and
                explain how people can get help.
              </p>
              <p>
                <strong>A consistent message across locations</strong>
              </p>
              <p>
                Share one core recording across locations, then add regional
                episodes for local benefits, dates or processes. Managers have a
                common explanation to refer to.
              </p>
              <p>
                <strong>A reusable explanation before live discussion</strong>
              </p>
              <p>
                Publish the background before a Q and A so the live conversation
                can focus on employee questions. Keep individual or sensitive
                conversations personal.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>When audio is a good fit for HR</h3>
              <p>Audio is especially useful for HR announcements when you:</p>
              <ul>
                <li>Support a distributed or hybrid workforce.</li>
                <li>Need to communicate changes in a calm, clear way.</li>
                <li>Want HR to feel approachable, not only procedural.</li>
                <li>Care about consistent messaging around people topics.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>
                How Brandscast supports HR announcements with private audio
              </h2>
              <p>
                Brandscast makes <strong>HR announcements</strong>{" "}
                straightforward to share in audio. Publish your update, choose
                its audience and deliver it through each Member's private RSS
                feed.
              </p>
              <p>With Brandscast, you can:</p>
              <ul>
                <li>
                  <strong>Create dedicated HR audio</strong> for all employees
                  or specific segments like managers or certain regions.
                </li>
                <li>
                  <strong>Publish time sensitive updates</strong> quickly, so
                  Members have an on-demand audio option alongside the written
                  announcement and any required live briefing.
                </li>
                <li>
                  <strong>Control access</strong> with{" "}
                  <a href="/secure-access-control/">secure access control</a> so
                  each invited member receives a unique feed that can be
                  segmented and revoked.
                </li>
                <li>
                  <strong>See listening analytics</strong> to identify recorded
                  listening activity, then decide where follow-up is needed.
                </li>
              </ul>
              <p>
                You do not need to manage public feeds or complex tooling.
                Brandscast gives HR and internal comms a focused channel for
                audio that fits into existing workflows.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>A clear, familiar voice for HR news</h3>
              <p>
                Give colleagues a regular place to hear HR explain changes in
                full. Pair each episode with the written details and a clear way
                to ask questions.
              </p>
              <p>
                A familiar voice and a consistent format make the next update
                easier to find and follow.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to start using audio for HR announcements in four steps
            </h2>
            <p>
              Start with your next announcement. A short explanation of a new
              benefit or review cycle is enough to begin.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Choose a simple HR use case</h3>
                <p>
                  Pick one type of HR announcement to start with. For example,
                  upcoming policy updates, benefits changes or engagement survey
                  follow up. Start with a clear, well defined topic.
                </p>
              </div>
              <div className="step">
                <h3>Define a short episode format</h3>
                <p>
                  Decide how you will present the message. A solo update from an
                  HR leader, a short conversation with a manager or a Q and A
                  style explanation. Keep episodes short and focused so they are
                  easy to finish.
                </p>
              </div>
              <div className="step">
                <h3>Launch your HR audio in Brandscast</h3>
                <p>
                  Set up a private HR announcements Track in Brandscast and
                  invite a first group of employees. Share simple instructions
                  on how to subscribe and when they can expect new episodes.
                </p>
              </div>
              <div className="step">
                <h3>Collect feedback and adjust</h3>
                <p>
                  After a few HR announcements, ask employees how the audio
                  format helps them and what they still miss. Combine their
                  feedback with listening data. Use these insights to refine
                  your approach and decide which other HR messages you want to
                  move to audio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={
                "Frequently asked questions about HR announcements with audio"
              }
              items={[
                {
                  q: "Will employees take HR announcement audio seriously",
                  a: "Make the episode useful: explain a relevant change, answer common questions and tell people what to do next. A clear message from the person responsible gives colleagues a reason to listen and follow up.",
                },
                {
                  q: "Do we still need written HR communication",
                  a: "In most cases, yes. Audio works best alongside written communication. Use the audio to explain the context and highlight what matters, and use documents or intranet pages for detailed policies and references.",
                },
                {
                  q: "How do we keep HR announcements private",
                  a: "Each Member receives a unique private RSS feed. The link acts like a password, so it should not be forwarded. You can choose their Tracks and revoke future feed access; files already downloaded may remain. Use your usual HR process for personal employee matters.",
                },
                {
                  q: "How long should an HR announcement episode be",
                  a: "Start with three to five minutes for a straightforward announcement. Cover what is changing, who it affects and what to do next. Split unrelated topics into separate episodes.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Give your next HR announcement a human voice"
          lead="Explain changes, answer common questions and help colleagues make sense of the news that affects them."
          note="Create your HR Track and publish your next announcement."
        />
      </main>

      <RelatedLinks
        links={[
          { href: "/employee-onboarding/", label: "Employee onboarding" },
          {
            href: "/training-and-compliance/",
            label: "Training and compliance",
          },
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
