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
          <h1>Add spoken stories to company-culture communication</h1>
          <p className="lead">
            Use private audio to share <strong>company culture</strong> stories,
            rituals and values alongside written and live channels. Then ask the
            intended group whether voice added useful context or connection.
          </p>
          <p className="hero-meta">
            On this page you will see how internal audio can support company
            culture, especially in distributed teams, and how to build a simple
            rhythm that complements existing meetings and written channels.
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
                Many companies try to fix this with more meetings, bigger all
                hands, more Slack channels, and long culture decks. These help,
                but they rarely scale. Culture needs repetition, consistency,
                and formats that work across different roles and working
                contexts.
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
              For employees, it feels like listening to an audio, but made for
              them. They can press play while walking, commuting, or doing light
              tasks. They hear real voices, real opinions, and real stories.
              This creates connection in a way that text rarely can.
            </p>
            <p>
              Culture episodes do not need to be long. Five to fifteen minutes
              is often enough. The key is consistency and clarity. A short
              weekly culture moment is more powerful than a big annual culture
              presentation.
            </p>
            <p>
              When your audio is private, you can be candid. You can share
              internal context and decisions safely, without turning everything
              into a public PR message.
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
                considered. This gives the intended group more context to
                evaluate alongside the written decision.
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
                These episodes provide recurring stories whose relevance can be
                tested with distributed groups.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>What audio may add to culture communication</h2>
              <p>
                Internal audio adds a spoken, asynchronous version of selected
                stories. Test whether the intended group can access it and finds
                the added context useful.
              </p>

              <p>
                <strong>A stronger sense of presence to test</strong>
              </p>
              <p>
                Hearing a voice exposes tone and pacing. Ask employees whether
                this changes their sense of context or connection; recorded
                listening alone cannot establish either outcome.
              </p>

              <p>
                <strong>More trust through tone and transparency</strong>
              </p>
              <p>
                Voice carries nuance. It is easier to be honest, calm, and clear
                in audio. This helps reduce speculation and makes{" "}
                <a href="/leadership-updates/">leadership communication</a> feel
                more credible.
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
                Not every culture update requires a new live call. Test whether
                an audio version handles broadcast context while keeping
                meetings for discussion and collaboration.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>When culture audio is testable</h3>
              <p>Internal audio is a practical pilot candidate when you:</p>
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
                communication available through private per-member RSS feeds.
                You control assignments and can revoke future feed requests;
                feed URLs remain bearer credentials.
              </p>
              <p>With Brandscast, you can:</p>
              <ul>
                <li>
                  <strong>Create private culture audio</strong> for everyone, or
                  for specific audiences like managers or new hires.
                </li>
                <li>
                  <strong>Invite listeners easily</strong> with private links
                  that work in podcast apps.
                </li>
                <li>
                  <strong>Control access</strong> with unique member feeds,
                  audience segments and revocation when needed.
                </li>
                <li>
                  <strong>
                    See{" "}
                    <a href="/employee-listening-analytics/">
                      listening analytics
                    </a>
                  </strong>{" "}
                  to compare recorded starts and measured completion by member
                  feed. These signals do not prove workforce reach or impact.
                </li>
              </ul>
              <p>
                This provides a dedicated spoken channel whose usefulness still
                depends on audience access, adoption and feedback.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>Culture that travels across time zones</h3>
              <p>
                Brandscast gives distributed groups another way to hear the same
                recorded message and tone outside a shared time slot. Safe and
                practical listening contexts still need to be verified.
              </p>
              <p>
                A pilot can test whether that adds useful context without
                replacing the synchronous conversations culture still needs.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to start a company culture audio in four steps
            </h2>
            <p>
              Start with one defined audience, message and outcome. Review the
              evidence before establishing a recurring cadence.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Pick one cultural goal</h3>
                <p>
                  Choose one outcome to test: perceived connection,
                  transparency, onboarding understanding or interpretation
                  across teams. Record a baseline before publishing.
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
                  a: "Audio can carry voice, tone and first-person stories. Test whether a defined audience finds that format useful, and keep written alternatives for accessibility, search and precise reference.",
                },
                {
                  q: "How often should we publish culture episodes",
                  a: "Start from the existing communication cadence and a frequency the owner can sustain. Review preparation time, recorded use and audience feedback before making it permanent.",
                },
                {
                  q: "Who should host the culture audio",
                  a: "Choose the host from the message and audience. Leadership, people teams or rotating contributors can each be tested; feedback should establish credibility, usefulness and interpretation.",
                },
                {
                  q: "How do we keep culture content private",
                  a: "Each member gets a unique private feed that is not listed in a public directory, and administrators can revoke future requests. Treat the feed URL as a bearer credential and remember that downloaded files may remain after revocation.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Build company culture with Brandscast"
          lead="Use private internal audio to test whether spoken stories add useful context to your existing culture communication."
          note="Start with one audience, one story format and a written equivalent."
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
