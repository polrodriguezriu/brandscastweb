import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const TITLE =
  "Internal communication metrics: coverage, attention and action | Brandscast";
const DESCRIPTION =
  "A practical framework for measuring internal communication from intended audience and realistic access through delivery, attention, understanding and action.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical:
      "https://brandscast.com/resources/internal-communication-metrics/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    type: "article",
    url: "https://brandscast.com/resources/internal-communication-metrics/",
    title: TITLE,
    description: DESCRIPTION,
    images: "/og-image.png",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Internal communication metrics: coverage, attention and action",
  description: DESCRIPTION,
  datePublished: "2026-09-05",
  dateModified: "2026-09-10",
  author: {
    "@type": "Organization",
    name: "Brandscast",
  },
  publisher: {
    "@type": "Organization",
    name: "Brandscast",
    logo: {
      "@type": "ImageObject",
      url: "https://brandscast.com/brandscast-logo.png",
    },
  },
  mainEntityOfPage:
    "https://brandscast.com/resources/internal-communication-metrics/",
};

export default function InternalCommunicationMetricsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandscast.com/" },
          {
            name: "Internal communication metrics",
            url: "https://brandscast.com/resources/internal-communication-metrics/",
          },
        ]}
      />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Internal communication metrics</div>
          <h1>Know what your communication metrics are telling you</h1>
          <p className="lead">
            Opens, clicks, attendance and listens are useful. They answer
            different questions about different groups of people. Start with the
            basics: who needs this message, can they get it, and what do you
            need them to understand or do?
          </p>
          <p className="hero-meta">
            Build a useful scorecard, compare channels fairly and find the next
            thing to improve, from access to understanding and action.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>The measurement question comes before the dashboard</h2>
              <p>
                A metric is useful only when its denominator matches the
                decision. An email open rate describes recipients included in an
                email send. Meeting attendance describes invited people whose
                presence was recorded. An audio completion rate describes
                listeners who started an episode.
              </p>
              <p>
                None of these numbers automatically represents the whole
                workforce or proves that a message was understood. The first
                step is to define the intended audience, then map who could
                realistically access each channel.
              </p>
            </div>
            <aside className="toc" aria-label="Table of contents">
              <strong>On this page</strong>
              <a href="#measurement-ladder">1. The measurement ladder</a>
              <a href="#channel-metrics">2. What each metric can show</a>
              <a href="#email">3. Read email data correctly</a>
              <a href="#coverage">4. Add a coverage layer</a>
              <a href="#scorecard">5. Build a practical scorecard</a>
              <a href="#mistakes">6. Avoid common mistakes</a>
            </aside>
          </div>
        </section>

        <section
          className="content-section section-tint"
          id="measurement-ladder"
        >
          <div className="section-inner">
            <div className="eyebrow">Six layers</div>
            <h2>Move from intended audience to action</h2>
            <div className="step-list">
              <div className="step">
                <h3>1. Intended audience</h3>
                <p>
                  Name the people who should receive the message. Segment by
                  role, location, language, shift or team when their access
                  conditions differ.
                </p>
              </div>
              <div className="step">
                <h3>2. Realistic access</h3>
                <p>
                  Record whether each group can use the channel in its actual
                  working context, including device, login, inbox, app, shift
                  overlap and manager dependency.
                </p>
              </div>
              <div className="step">
                <h3>3. Delivery</h3>
                <p>
                  Confirm that the channel accepted or delivered the message.
                  Delivery is a technical event, not evidence of attention.
                </p>
              </div>
              <div className="step">
                <h3>4. Attention or consumption</h3>
                <p>
                  Use opens, attentive reading, attendance, starts, completion
                  or time spent according to the channel. Keep the denominator
                  visible.
                </p>
              </div>
              <div className="step">
                <h3>5. Understanding</h3>
                <p>
                  Ask a short question, pulse survey or manager check. A click,
                  open or completed episode does not prove comprehension.
                </p>
              </div>
              <div className="step">
                <h3>6. Action or outcome</h3>
                <p>
                  Measure the requested behaviour when it is observable. Treat
                  wider engagement or business outcomes as separate measures
                  with many possible causes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="channel-metrics">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Metric definitions</div>
              <h2>What each channel metric can and cannot show</h2>
              <h3>Delivery rate</h3>
              <p>
                Shows whether a system accepted the message for the addresses or
                devices in scope. It does not show attention or whether people
                outside that addressable audience had another route.
              </p>
              <h3>Open rate and attentive reading</h3>
              <p>
                Show activity among email recipients using the measurement rules
                of the email platform. Privacy controls, image loading and
                client behaviour can affect the event.
              </p>
              <h3>Clicks</h3>
              <p>
                Show interaction with a tracked link. A message with no link can
                still be useful, and a click does not prove understanding.
              </p>
              <h3>Attendance</h3>
              <p>
                Shows presence at a live or recorded event when attendance is
                captured. It does not establish attention throughout the
                session.
              </p>
              <h3>Audio starts and completion</h3>
              <p>
                Show playback activity for invited listeners. They provide
                format-specific evidence, not proof that the listener understood
                or acted.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>Do not compare unlike denominators</h3>
              <p>
                A 70% open rate among email recipients and a 70% audio
                completion rate among episode starters do not describe the same
                population. Write the denominator next to every percentage
                before comparing channels.
              </p>
              <p>
                A useful label is explicit:{" "}
                <strong>42 of 60 invited members started</strong>, rather than
                only <strong>70% reach</strong>.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band" id="email">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Email evidence</div>
              <h2>Read email results in context</h2>
              <p>
                PoliteMail&apos;s 2026 benchmark aggregates more than two
                billion internal emails sent to roughly 11 million employees. It
                reports a 66.2% average recorded unique open rate, and 83.7% of
                opens met its attention rate threshold under the provider&apos;s
                methodology.
              </p>
              <p>
                These figures show why email remains an important part of
                internal communication. To understand your own results, also
                check which teams were included in the measured audience and
                which colleagues need another way to get the update.
              </p>
              <p>
                Explore these findings in{" "}
                <a href="/state-of-internal-communication-2026/#chapter-2">
                  the report highlights
                </a>
                , where you can download the full report with its sources and
                limitations.
              </p>
            </div>
            <aside className="callout callout--accent-2">
              <h3>Use email data for the question it answers</h3>
              <ul>
                <li>Was the address included and deliverable?</li>
                <li>Was an open recorded?</li>
                <li>Was attention recorded under the vendor methodology?</li>
                <li>Was a tracked link clicked?</li>
              </ul>
              <p>
                Then add a separate coverage question for groups whose practical
                access may differ.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section" id="coverage">
          <div className="section-inner">
            <div className="eyebrow">Coverage layer</div>
            <h2>Map access before calculating a rate</h2>
            <p>
              Start with a count, not a percentage. For one recurring message,
              list every intended group and document whether at least one
              asynchronous channel is realistically available. Mark the answer
              as verified, partial or unknown.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Define</h3>
                <p>
                  Which people should receive this message, and why are they in
                  scope?
                </p>
              </div>
              <div className="step">
                <h3>Verify</h3>
                <p>
                  Which channel can each group access in practice, and what
                  evidence supports that answer?
                </p>
              </div>
              <div className="step">
                <h3>Count</h3>
                <p>
                  How many intended people have verified access, partial access
                  or an unknown access path?
                </p>
              </div>
              <div className="step">
                <h3>Investigate</h3>
                <p>
                  Treat unknowns as discovery work. Do not label them disengaged
                  or unreachable without evidence.
                </p>
              </div>
            </div>
            <aside className="callout">
              <h3>A working coverage measure</h3>
              <p>
                For internal use, a team may track the share of the intended
                audience with a verified practical access path. This is an
                organisation-specific diagnostic, not an industry benchmark.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint" id="scorecard">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Monthly scorecard</div>
              <h2>Keep the scorecard focused on what you can improve</h2>
              <p>For each critical recurring message, record:</p>
              <ul>
                <li>Intended audience and segment sizes.</li>
                <li>Verified, partial and unknown access paths.</li>
                <li>Delivery and consumption metrics by channel.</li>
                <li>One understanding or feedback signal.</li>
                <li>The requested action, when measurable.</li>
                <li>Owner, follow-up and next review date.</li>
              </ul>
              <p>
                Do not collapse the layers into one engagement score. Separate
                numbers make it easier to see whether the problem is access,
                delivery, attention, understanding or action.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>Example decision</h3>
              <p>
                If delivery and attention are strong for office staff but access
                is unknown for a field group, the next action is not to rewrite
                the email. It is to validate the field group&apos;s access and
                working context.
              </p>
              <p>
                Ask those colleagues how they get updates. Their answer can help
                you choose between a manager briefing, easier mobile access, an
                audio version or a clearer signpost to what exists.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section" id="mistakes">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Common mistakes</div>
              <h2>Common mistakes when reading the numbers</h2>
              <ul>
                <li>Calling opens workforce reach.</li>
                <li>Calling completion understanding.</li>
                <li>Calling attendance attention.</li>
                <li>Comparing percentages with different denominators.</li>
                <li>Using consumer podcast benchmarks for employees.</li>
                <li>Assuming an unknown group is disengaged.</li>
                <li>
                  Attributing a business outcome to one message or channel.
                </li>
              </ul>
            </div>
            <aside className="callout callout--accent">
              <h3>Better language</h3>
              <p>
                Say what was observed: delivered, opened, started, completed,
                answered or acted. Then name what remains unknown.
              </p>
              <p>
                Precise language makes the measurement more credible and the
                next experiment easier to design.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner">
            <Faq
              heading="Frequently asked questions about internal communication metrics"
              items={[
                {
                  q: "What is the most important internal communication metric?",
                  a: "There is no single universal metric. Start with the intended audience and the decision you need to make, then choose separate measures for access, delivery, attention, understanding and action.",
                },
                {
                  q: "Is email open rate a workforce reach metric?",
                  a: "No. It shows recorded opens among the email audience being measured. It tells you nothing about colleagues outside that audience, so list who was included before treating it as a company-wide result.",
                },
                {
                  q: "Does audio completion prove understanding?",
                  a: "No. Completion shows playback activity under the platform's measurement rules. Use a question, survey, manager check or observable action when understanding matters.",
                },
                {
                  q: "How should desk and non-desk groups be compared?",
                  a: "Look at the same message and check how each group can get it. Compare access and activity within each group. An office email open rate cannot tell you how well a shift briefing worked for a warehouse team.",
                },
                {
                  q: "How do we measure a new communication format?",
                  a: "Choose one message and one team. Record how they get the update today, then compare use, feedback and the result you care about after a few updates. Include publishing time so you can judge the effort as well as the response.",
                },
              ]}
            />
          </div>
        </section>

        <section className="section-brand">
          <div className="container cta-inner">
            <h2>Give your next update a voice</h2>
            <p className="lead">
              Turn a document into a private audio update, share it with your
              team and follow listening activity in Brandscast.
            </p>
            <div className="hero-cta coverage-gap-actions">
              <a className="btn" href="https://app.brandscast.com/signup">
                Start your free trial
              </a>
              <a
                className="btn outline"
                href="/state-of-internal-communication-2026/"
              >
                Read the 2026 report
              </a>
            </div>
          </div>
        </section>
      </main>

      <RelatedLinks
        links={[
          {
            href: "/employee-listening-analytics/",
            label: "Employee listening analytics",
          },
          {
            href: "/resources/internal-comms-best-practices/",
            label: "Internal communication best practices",
          },
          {
            href: "/resources/async-communication-guide/",
            label: "Async communication guide",
          },
          {
            href: "/text-to-audio/",
            label: "Turn documents into audio",
          },
        ]}
      />
      <FooterMinimal />
    </>
  );
}
