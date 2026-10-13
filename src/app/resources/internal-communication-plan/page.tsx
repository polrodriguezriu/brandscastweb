import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import RelatedLinks from "@/components/RelatedLinks";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import styles from "./plan.module.css";

const url = "https://brandscast.com/resources/internal-communication-plan/";

export const metadata: Metadata = {
  title: "Internal communication plan template and guide | Brandscast",
  description:
    "Build an internal communication plan with a free CSV template. Map audiences, access, channels, owners, timing and evidence before you publish.",
  alternates: {
    canonical: "https://brandscast.com/resources/internal-communication-plan/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    type: "article",
    url: "https://brandscast.com/resources/internal-communication-plan/",
    title: "Internal communication plan template and guide | Brandscast",
    description:
      "A practical plan and editable CSV template for matching each workplace update to its intended audience, channels and measures.",
    images: "/og-image.png",
  },
};

const fields = [
  [
    "Objective and action",
    "What should people understand or do after the update?",
  ],
  [
    "Audience segment and size",
    "Who needs it? Count each intended group before choosing a channel.",
  ],
  [
    "Realistic access",
    "Can this group use each proposed channel during an appropriate moment?",
  ],
  [
    "Message and channels",
    "Keep one core message; choose a primary route and an alternative where needed.",
  ],
  [
    "Owner and timing",
    "Who approves, publishes and answers questions, and when?",
  ],
  [
    "Evidence and review",
    "What will show access, delivery, attention, understanding or action? When will you revisit the plan?",
  ],
] as const;

export default function InternalCommunicationPlanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandscast.com/" },
          { name: "Internal communication plan template", url },
        ]}
      />
      <Header />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Internal communication plan</div>
          <h1>Internal communication plan template for every audience</h1>
          <p className="lead">
            A useful internal communication plan starts with the intended
            audience, then sets the message, channels, owners and evidence. Use
            this guide and editable template to plan one important update or a
            repeatable series.
          </p>
          <p className="hero-meta">
            Email, chat, meetings and private audio can all have a place. Choose
            the combination your colleagues can realistically access.
          </p>
          <div className="hero-cta">
            <a
              className="btn"
              href="/internal-communication-plan-template.csv"
              download
            >
              Download the free CSV template
            </a>
            <a className="btn outline" href="#worked-example">
              See a worked example
            </a>
          </div>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Strategy sets the direction; a plan makes it deliverable</h2>
              <p>
                An internal communication strategy defines the outcomes you want
                and the principles you will follow. A plan turns those choices
                into a specific piece of work: who needs which message, where
                they can receive it, who owns each step and how you will learn
                whether it worked.
              </p>
              <p>
                Start with one decision, change or recurring update. You can
                reuse the same template for another audience or message without
                assuming one channel reaches everyone.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Before you pick a channel</h3>
              <ul>
                <li>What is the purpose of this update?</li>
                <li>Who is supposed to receive it?</li>
                <li>Which groups can actually access each option?</li>
                <li>Where can people ask questions or find the source?</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>Build the plan in six decisions</h2>
            <div className={styles.steps}>
              {fields.map(([title, explanation], index) => (
                <div className="card" key={title}>
                  <h3>
                    {index + 1}. {title}
                  </h3>
                  <p>{explanation}</p>
                </div>
              ))}
            </div>
            <p>
              For an ongoing programme, begin with a short audit of existing
              channels and ask each audience about practical access. Treat
              accessibility, language, shift patterns and safe listening
              contexts as planning constraints, not afterthoughts.
            </p>
          </div>
        </section>

        <section id="template" className="content-section">
          <div className="section-inner">
            <h2>Copy the internal communication plan template</h2>
            <p>
              Download the CSV, open it in your spreadsheet tool and make one
              row per audience segment and message. It includes a blank row
              ready to replace. Duplicate rows when two groups need different
              routes or timing. Keep an owner and review date on each row so the
              document remains usable after launch.
            </p>
            <a
              className="btn"
              href="/internal-communication-plan-template.csv"
              download
            >
              Download editable plan template (.csv)
            </a>
            <div className={styles.fieldList}>
              <h3>The fields in the template</h3>
              <ul>
                <li>Update, objective and action needed</li>
                <li>Audience segment and number of intended people</li>
                <li>Known access constraints and suitable channels</li>
                <li>Core message, source of truth and feedback route</li>
                <li>Owner, publication date and review date</li>
                <li>Evidence to check and the change you will make next</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="worked-example" className="content-section section-brand">
          <div className="section-inner">
            <h2>Worked example: an important policy update</h2>
            <p>
              Imagine a policy change affecting both office and shift-based
              colleagues. This is an illustration, not a claim about any
              organisation or a guaranteed channel result. The objective is that
              each group knows what changed, where to read the approved policy
              and how to ask a question.
            </p>
            <div className={styles.exampleGrid}>
              <div className="card">
                <h3>Office-based group</h3>
                <p>
                  Link the policy in an email summary and the normal team
                  channel. Put questions in one shared place. Ask the channel
                  owner whether every intended person has access before you rely
                  on that route.
                </p>
                <ul>
                  <li>Owner: internal communications lead</li>
                  <li>
                    Evidence to review: access list and questions received
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>Shift-based group</h3>
                <p>
                  Check actual device and account access. Pair a manager
                  briefing or another suitable route with the same written
                  source. If listening is safe and appropriate, a short private
                  audio explanation can add context for people who prefer to
                  catch up away from a screen.
                </p>
                <ul>
                  <li>Owner: shift manager with the policy lead</li>
                  <li>
                    Evidence to review: who had a practical route and what
                    questions remain
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Review each group separately. A send, meeting invitation or audio
              play is evidence for a different stage; none proves that everyone
              understood the change. Check access first, then use feedback or a
              relevant action to assess understanding.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Where private audio can help</h2>
              <p>
                Brandscast can add a private audio version of an internal
                update. You can upload your own recording or generate audio from
                text with optional AI, then assign it to the intended audience
                through private, authenticated RSS feeds.
              </p>
              <p>
                Keep the written source for policy details, links and people who
                cannot or do not want to listen. Brandscast can show listening
                activity within its own channel; it does not measure the reach
                of your entire communication mix.
              </p>
              <p>
                <a href="/text-to-audio/">See text-to-audio</a> or read the{" "}
                <a href="/resources/internal-communication-metrics/">
                  internal communication metrics guide
                </a>
                .
              </p>
            </div>
            <aside className="callout">
              <h3>A simple review question</h3>
              <p>
                For each intended group, could they realistically receive this
                message through at least one chosen route? Record where the
                answer is uncertain and change the plan before the next update.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <RelatedLinks
        links={[
          {
            href: "/resources/internal-comms-best-practices/",
            label: "Internal comms best practices",
          },
          {
            href: "/resources/templates-for-company-updates/",
            label: "Templates for company updates",
          },
          {
            href: "/resources/internal-communication-metrics/",
            label: "Internal communication metrics",
          },
        ]}
      />
      <FooterMinimal />
    </>
  );
}
