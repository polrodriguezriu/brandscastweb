import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const TITLE =
  "Deskless internal communication: keep teams in the loop | Brandscast";
const DESCRIPTION =
  "Make company updates work for frontline teams. Practical advice on channels, shifts, languages and private audio, with research and a four-week starting plan.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical:
      "https://brandscast.com/resources/deskless-internal-communication/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    type: "article",
    url: "https://brandscast.com/resources/deskless-internal-communication/",
    title: TITLE,
    description: DESCRIPTION,
    images: "/report/warehouse-aisle.webp",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Deskless internal communication: keep teams in the loop",
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
    "https://brandscast.com/resources/deskless-internal-communication/",
};

export default function DesklessInternalCommunicationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandscast.com/" },
          {
            name: "Deskless internal communication",
            url: "https://brandscast.com/resources/deskless-internal-communication/",
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
          <div className="eyebrow">Non-desk and frontline teams</div>
          <h1>Make company updates fit life beyond the desk</h1>
          <p className="lead">
            A store team, a field technician and a warehouse crew have different
            working days. Give each team a practical way to catch up on company
            news, understand changes and ask questions.
          </p>
          <p className="hero-meta">
            Choose channels around the people using them: their shifts, devices,
            languages and the moments they have for an update.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner">
            <figure className="resource-editorial-figure">
              <Image
                src="/report/warehouse-aisle.webp"
                alt="Warehouse worker reviewing an internal update during a safe pause away from moving equipment"
                width={1600}
                height={1067}
                sizes="(max-width: 900px) calc(100vw - 48px), 1080px"
                priority
              />
              <figcaption>
                A break away from equipment can be a moment to catch up. Follow
                workplace rules on devices and headphones.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Definition</div>
              <h2>Start with how the team works</h2>
              <p>
                Non-desk or deskless groups include people whose primary work is
                not performed at a computer: manufacturing, field service,
                retail, logistics, hospitality, healthcare, construction and
                field sales are common examples.
              </p>
              <p>
                Many of these colleagues use email and smartphones. The
                difference is when and how they can use them. Ask each team
                where they currently get updates and what would make catching up
                easier.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Start with one group</h3>
              <p>
                Start with a store, a shift or a field team. Their routines will
                tell you more than a company-wide label: a technician's day
                looks different from a store manager's or a clinician's.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section" id="evidence">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Research context</div>
              <h2>What non-desk employees say about communication</h2>
              <p>
                Staffbase and YouGov surveyed 3,574 employees in six countries
                in 2025. In that study, 29% of non-desk participants were
                satisfied with internal communication, compared with 47% of
                desk-based participants. Only 9% of non-desk participants were
                very satisfied.
              </p>
              <p>
                The same study reported that 45% of non-desk participants felt
                not really or not at all informed about the reasons behind
                company changes. These are self-reported perceptions. They do
                not identify a single cause or prove that a particular channel
                failed.
              </p>
              <p>
                A separate, widely cited 2018 estimate from Emergence Capital
                put the global non-desk workforce at roughly 80%. It is useful
                for understanding potential scale, but it is not a fresh 2026
                census.
              </p>
              <p>
                Explore these findings in{" "}
                <a href="/state-of-internal-communication-2026/#chapter-1">
                  the report highlights
                </a>
                , where you can download the full report with its sources.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>Questions to ask your own team</h3>
              <ul>
                <li>Where do you usually find company updates?</li>
                <li>Which messages are most useful to your work?</li>
                <li>Would you like an audio version of regular updates?</li>
                <li>When could you safely listen?</li>
                <li>What do you wish the company explained more clearly?</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section section-band" id="access-map">
          <div className="section-inner">
            <div className="eyebrow">Access map</div>
            <h2>Check what each team needs to get the message</h2>
            <div className="step-list">
              <div className="step">
                <h3>Identity</h3>
                <p>
                  Does the person have an address, account or employee record
                  recognised by the channel?
                </p>
              </div>
              <div className="step">
                <h3>Device</h3>
                <p>
                  Is a personal or shared device available, permitted and usable
                  in the relevant location?
                </p>
              </div>
              <div className="step">
                <h3>Time</h3>
                <p>
                  Is there a realistic moment during or around the workday to
                  read, watch, attend or listen?
                </p>
              </div>
              <div className="step">
                <h3>Language and ability</h3>
                <p>
                  Is the message available in the language and accessible format
                  the group needs?
                </p>
              </div>
              <div className="step">
                <h3>Safety and policy</h3>
                <p>
                  Can people read or listen safely at that moment? Check
                  workplace rules and any tasks that need their full attention.
                </p>
              </div>
              <div className="step">
                <h3>Evidence</h3>
                <p>
                  Have colleagues tried the channel themselves? Record what
                  works and where they need help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="channel-mix">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Channel mix</div>
              <h2>Use formats for the jobs they perform well</h2>
              <h3>Email</h3>
              <p>
                Useful for searchable written detail, links and a persistent
                record when the intended recipient has realistic inbox access.
              </p>
              <h3>Employee app or intranet</h3>
              <p>
                Useful as a destination for news, documents and structured
                resources when login, device and discovery are workable.
              </p>
              <h3>Manager briefings</h3>
              <p>
                Useful for local interpretation and dialogue. Document what must
                remain consistent and avoid making the manager the only source
                of truth.
              </p>
              <h3>Print and signage</h3>
              <p>
                Useful for persistent visibility in a physical location. Keep
                the message concise and provide a route to detail.
              </p>
              <h3>Live meetings</h3>
              <p>
                Useful for discussion, sensitive change, questions and immediate
                clarification. Attendance should not be treated as attention or
                understanding by itself.
              </p>
              <h3>Private audio</h3>
              <p>
                Useful as an additional version of recurring context when a
                group has a suitable listening window but limited opportunity
                for focused reading.
              </p>
            </div>
            <aside className="callout">
              <h3>Same message, more than one path</h3>
              <p>
                Share the same update in formats colleagues can choose from.
                Keep written detail easy to find, add a spoken version where
                useful and give people a place to ask questions.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint" id="audio-fit">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Audio fit</div>
              <h2>Where private audio fits</h2>
              <ul>
                <li>The message already exists in written form.</li>
                <li>It is recurring and benefits from tone or explanation.</li>
                <li>Colleagues have a safe moment to listen.</li>
                <li>The group can use a compatible podcast app.</li>
                <li>Access needs to be private and revocable.</li>
                <li>You want to learn which episodes people return to.</li>
                <li>Someone can turn existing updates into short episodes.</li>
              </ul>
            </div>
            <aside className="highlight-box">
              <h3>When not to use audio</h3>
              <ul>
                <li>During machinery operation or vehicle interaction.</li>
                <li>When hearing is a safety input.</li>
                <li>For instructions that require visual reference.</li>
                <li>As the sole source for policy or compliance detail.</li>
                <li>When colleagues cannot take a safe listening break.</li>
                <li>
                  When nobody has time to prepare and maintain the episodes.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section" id="pilot">
          <div className="section-inner">
            <div className="eyebrow">Getting started</div>
            <h2>Bring one team's weekly update to life in audio</h2>
            <div className="step-list">
              <div className="step">
                <h3>Choose one group</h3>
                <p>
                  Start with 20-50 people who share similar access and safety
                  conditions.
                </p>
              </div>
              <div className="step">
                <h3>Reuse one message</h3>
                <p>
                  Convert one recurring update per week. Keep the original
                  written source available.
                </p>
              </div>
              <div className="step">
                <h3>Learn from listeners</h3>
                <p>
                  Review activation, starts and completion. Ask colleagues what
                  was useful, and keep track of the time spent publishing.
                </p>
              </div>
              <div className="step">
                <h3>Review after four weeks</h3>
                <p>
                  On day 28, review the episodes with the team. Decide what to
                  keep, what to improve and whether to invite another group.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner">
            <Faq
              heading="Frequently asked questions about deskless internal communication"
              items={[
                {
                  q: "Does deskless mean employees do not have email?",
                  a: "No. Many non-desk employees have email or smartphones. Ask when they can use them during the day and whether they can easily find the updates they need.",
                },
                {
                  q: "Should every message be available as audio?",
                  a: "No. Audio is useful for stories, explanations and recurring updates. Keep written or visual versions for detailed instructions, accessibility and anything people need to look up later.",
                },
                {
                  q: "Can employees listen while operating equipment?",
                  a: "Do not listen when the task requires hearing warnings or responding to equipment. Follow workplace rules on headphones and devices, and choose a break away from machinery instead.",
                },
                {
                  q: "How should access be measured?",
                  a: "List the teams who need the update and ask them to try getting it on the devices they use. Mark access as verified, partial or unknown. Check understanding separately with a question or a conversation.",
                },
                {
                  q: "What is a good first pilot?",
                  a: "Start with one team's weekly update. Turn it into a short episode, keep the written version available and help colleagues subscribe in a compatible podcast app. Ask for feedback and review together after four weeks.",
                },
              ]}
            />
          </div>
        </section>

        <section className="section-brand">
          <div className="container cta-inner">
            <h2>Find a better way to keep your team in the loop</h2>
            <p className="lead">
              Start with one regular update. The Communication Coverage Audit
              helps you see how colleagues get it today and where a different
              format could help.
            </p>
            <div className="hero-cta coverage-gap-actions">
              <a
                className="btn"
                href="/communication-coverage-audit/?source=deskless-guide"
              >
                Run the coverage audit
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
            href: "/resources/internal-communication-metrics/",
            label: "Internal communication metrics",
          },
          {
            href: "/industries/manufacturing/",
            label: "Private audio for manufacturing",
          },
          {
            href: "/industries/retail-and-franchises/",
            label: "Private audio for retail and franchises",
          },
          {
            href: "/communication-coverage-audit/?source=deskless-guide",
            label: "Communication Coverage Audit",
          },
        ]}
      />
      <FooterMinimal />
    </>
  );
}
