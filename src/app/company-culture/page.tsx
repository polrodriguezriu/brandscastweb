import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Company culture podcast for remote teams | Brandscast",
  description:
    "Use private internal audio to share stories, values and rituals with remote and hybrid teams, alongside written and live communication.",
  alternates: { canonical: "https://brandscast.com/company-culture/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/company-culture/",
    title: "Company culture podcast for remote teams | Brandscast",
    description:
      "Add private audio to culture communication so distributed teams can hear stories, values and context alongside existing written channels.",
    images: "/Podcasters.webp",
  },
};

export default function CompanyCulturePage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Company culture</div>
          <h1>Bring company culture to life with private audio</h1>
          <p className="lead">
            Bring your <strong>company culture</strong> to life through the
            voices of your people. Share founder stories, team spotlights and
            values in action as short private episodes colleagues can listen to
            on their own schedule.
          </p>
          <p className="hero-meta">
            From a founder's first customer to a team's latest win, share
            stories that show what makes your company yours.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why company culture becomes fragile as teams grow</h2>
              <p>
                In the early days, culture spreads naturally. People sit
                together, talk often, and learn how decisions are made by
                watching leaders work. As the team grows, this becomes harder.
                New hires may not encounter the same informal context as the
                original team.
              </p>
              <p>
                Remote and hybrid work adds another layer. Colleagues may never
                share a room. Most interactions happen in written tools, where
                tone, emotion and context are easy to lose. Over time, people
                can start to feel like they work near each other, not with each
                other.
              </p>
              <p>
                All hands, team conversations and culture decks each have a
                place. Audio gives those stories a life beyond the meeting, so a
                colleague in another office or a new hire next month can hear
                them too.
              </p>
              <p>
                Company culture is not a document. It is what people hear, see,
                and practice every week.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Signs your culture is drifting</h3>
              <ul>
                <li>
                  Teams interpret values differently, especially across
                  locations.
                </li>
                <li>New hires take too long to understand how things work.</li>
                <li>
                  People feel disconnected from leadership and from each other.
                </li>
                <li>
                  Information travels through rumours instead of a clear source.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">company culture</span>
                <span className="tag">distributed teams</span>
                <span className="tag">internal podcasts</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>
              What building company culture with internal audio looks like
            </h2>
            <p>
              Building company culture with internal audio means creating a
              private audio channel where leaders and teams share stories,
              context, and rituals on a regular basis. Instead of relying only
              on written updates, you use voice to communicate how your company
              thinks and behaves.
            </p>
            <p>
              For employees, it feels like a podcast made for their team. They
              hear the colleague behind a project, the excitement of a customer
              win and the reasoning behind a difficult choice, all in a familiar
              podcast app.
            </p>
            <p>
              Start with a five-minute story or a short interview. Give each
              episode one theme, then build a rhythm you can keep, such as a
              weekly team spotlight or a monthly founder conversation.
            </p>
            <p>
              Your audience is your own team. Speak to the experiences you share
              and make room for voices from across the company.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How to use internal audio to reinforce company culture</h2>
              <p>
                You can support company culture with a few simple formats. Start
                with the ones that match your current needs and energy.
              </p>

              <h3>Leadership stories and decisions</h3>
              <p>
                Culture is shaped by decisions. Record short episodes where
                leaders explain what was decided, why, and what trade offs were
                considered. Show how a value shaped a real choice, such as
                delaying a launch to solve a customer problem.
              </p>

              <h3>Rituals that repeat</h3>
              <p>
                Create recurring episodes, for example a weekly reflection, a
                monthly state of the company, or a quarterly reset. Rituals
                create stability, especially when teams are changing fast.
              </p>

              <h3>Values in real situations</h3>
              <p>
                Values become meaningful when you show them in action. Share
                examples from real projects, customer stories, or internal
                dilemmas. This makes values practical, not abstract.
              </p>

              <h3>Team spotlights and behind the scenes</h3>
              <p>
                Invite different teams to share what they are working on and how
                they work. This creates empathy between functions and helps
                people feel part of a larger system.
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>Examples of culture episodes</h3>
              <ul>
                <li>
                  A founder sharing a story about a hard decision and what was
                  learned.
                </li>
                <li>
                  A monthly episode celebrating wins, learnings, and shoutouts.
                </li>
                <li>
                  A short interview with a new hire about their first weeks.
                </li>
                <li>
                  A team explaining how they collaborate and what they value.
                </li>
              </ul>
              <p>
                These stories give colleagues across locations something to
                recognise, talk about and build on.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>Why bring company culture into audio</h2>
              <p>
                Audio puts real voices behind your values and makes company
                stories available beyond the room where they first happened.
              </p>

              <p>
                <strong>Get to know the people behind the work</strong>
              </p>
              <p>
                A short interview lets colleagues hear from people they rarely
                meet. Invite someone from support, engineering or another office
                to describe a challenge they solved and what they learned.
              </p>

              <p>
                <strong>Hear the reasoning behind decisions</strong>
              </p>
              <p>
                Use voice to explain a difficult choice, acknowledge uncertainty
                and share what comes next. Give your{" "}
                <a href="/leadership-updates/">leadership communication</a> the
                space for a thoughtful explanation.
              </p>

              <p>
                <strong>More context during onboarding</strong>
              </p>
              <p>
                New hires can listen to culture episodes during{" "}
                <a href="/employee-onboarding/">onboarding</a> and learn quickly
                how decisions are made, what is rewarded, and how teams
                collaborate.
              </p>

              <p>
                <strong>Less meeting pressure</strong>
              </p>
              <p>
                Share a team story or monthly reflection as an episode, then use
                your time together to discuss it. Colleagues can catch up
                without finding a shared calendar slot.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>When culture audio is a good fit</h3>
              <p>Bring culture stories into audio when you:</p>
              <ul>
                <li>Have remote, hybrid, or multi site teams.</li>
                <li>Want culture to be consistent as you scale.</li>
                <li>Need a simple way to repeat key messages.</li>
                <li>Care about belonging, clarity, and alignment.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>
                How Brandscast helps you build company culture with private
                audio
              </h2>
              <p>
                Brandscast is built to make <strong>company culture</strong>{" "}
                communication easy to publish and share. Each Member receives a
                private RSS feed with the Tracks you assign, from company-wide
                stories to a series for new hires.
              </p>
              <p>With Brandscast, you can:</p>
              <ul>
                <li>
                  <strong>Create private culture audio</strong> for everyone, or
                  for specific audiences like managers or new hires.
                </li>
                <li>
                  <strong>Invite listeners easily</strong> with private links
                  that work in compatible podcast apps.
                </li>
                <li>
                  <strong>Control access</strong> with unique Member feeds,
                  audience segments and revocation when needed.
                </li>
                <li>
                  <strong>
                    See{" "}
                    <a href="/employee-listening-analytics/">
                      listening analytics
                    </a>
                  </strong>{" "}
                  to review recorded listening activity and use it alongside
                  feedback to plan your next stories.
                </li>
              </ul>
              <p>
                You focus on finding the next story. Brandscast brings your
                episodes, audiences and listening data together.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>Culture that travels across time zones</h3>
              <p>
                A teammate in London and a new hire in Sydney can hear the same
                founder story without joining the same call. Each chooses when
                to listen.
              </p>
              <p>
                Keep the conversations that bring people together, and give them
                shared stories to start from.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to start a company culture podcast in four steps
            </h2>
            <p>
              Start with one story worth sharing and a format you can repeat.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Pick one cultural goal</h3>
                <p>
                  Choose what you want people to discover: how you make
                  decisions, what a value looks like in practice, or what
                  another team is working on.
                </p>
              </div>
              <div className="step">
                <h3>Define a repeatable format</h3>
                <p>
                  Keep it simple. A weekly five minute reflection, a monthly
                  update, or a short interview format. A consistent structure
                  helps people know what to expect and makes production easier.
                </p>
              </div>
              <div className="step">
                <h3>Publish and invite your first audience</h3>
                <p>
                  Create your private audio in Brandscast and invite a first
                  group. You can start with managers or with the whole team.
                  Explain the purpose and how often you will publish.
                </p>
              </div>
              <div className="step">
                <h3>Improve with feedback and data</h3>
                <p>
                  Ask employees what resonates and what feels unnecessary.
                  Review listening analytics to see what gets completed. Use
                  what you learn to refine topics, length, and frequency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={"Frequently asked questions about company culture audio"}
              items={[
                {
                  q: "Is audio really useful for company culture",
                  a: "Audio lets colleagues tell their own stories. Use it for founder reflections, team interviews and values in action, alongside your existing conversations and written material.",
                },
                {
                  q: "How often should we publish culture episodes",
                  a: "Choose a rhythm you can maintain, such as a fortnightly team spotlight or a monthly founder update. Keep each episode focused on a story worth sharing.",
                },
                {
                  q: "Who should host the culture podcast",
                  a: "A founder can tell the company story, a people team can host employee interviews, and rotating contributors can bring different perspectives. Choose someone curious who helps others speak naturally.",
                },
                {
                  q: "How do we keep culture content private",
                  a: "Each Member gets a unique private RSS feed with the Tracks you assign. The link acts like a password, so it should not be forwarded. You can revoke future feed access, but files already downloaded may remain.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Build company culture with Brandscast"
          lead="Share the stories, decisions and people that make your company yours, wherever your team works."
          note="Publish your first culture story and invite your team to listen."
        />
      </main>

      <RelatedLinks
        links={[
          {
            href: "/podcasting-for-remote-teams/",
            label: "Podcasting for remote teams",
          },
          {
            href: "/resources/employee-engagement-with-audio/",
            label: "Employee engagement with audio",
          },
          { href: "/employee-onboarding/", label: "Employee onboarding" },
          {
            href: "/internal-communication/",
            label: "Internal communication with private podcasts",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
