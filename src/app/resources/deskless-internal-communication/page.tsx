import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const TITLE =
  "Deskless internal communication: access, safety and measurement | Brandscast";
const DESCRIPTION =
  "A practical guide to internal communication for non-desk and frontline groups: map realistic channel access, preserve safety and measure evidence by segment.";

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
  headline: "Deskless internal communication: access, safety and measurement",
  description: DESCRIPTION,
  datePublished: "2026-09-05",
  dateModified: "2026-09-05",
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
          <div className="eyebrow">Non-desk and frontline groups</div>
          <h1>Deskless internal communication starts with real access</h1>
          <p className="lead">
            A channel is available in theory when the organisation owns it. It
            is available in practice when a specific workforce group can use it
            in its actual shift, location, device and safety context.
          </p>
          <p className="hero-meta">
            This guide helps communication teams map those conditions without
            blaming employees, dismissing email or assuming one format fits
            every non-desk role.
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
                Listening is appropriate only in approved contexts that preserve
                awareness, safety and access to written instructions.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Definition</div>
              <h2>Deskless is a work context, not a communication diagnosis</h2>
              <p>
                Non-desk or deskless groups include people whose primary work is
                not performed at a computer: manufacturing, field service,
                retail, logistics, hospitality, healthcare, construction and
                field sales are common examples.
              </p>
              <p>
                The label does not mean a person lacks email, a phone or digital
                skills. It means access conditions may differ from those of an
                office-based colleague. Treat those conditions as facts to
                verify, not assumptions about attention or engagement.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Start with one group</h3>
              <p>
                "Frontline workforce" is usually too broad for a useful audit.
                Separate plant operators, field technicians, store managers,
                drivers, clinicians and sales representatives when their
                devices, shifts and safety constraints differ.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section" id="evidence">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Research context</div>
              <h2>What the current evidence supports</h2>
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
                Read the full source context in{" "}
                <a href="/state-of-internal-communication-2026/#chapter-1">
                  chapter 1 of the report
                </a>
                .
              </p>
            </div>
            <aside className="highlight-box">
              <h3>What the evidence does not support</h3>
              <ul>
                <li>That non-desk employees ignore communication.</li>
                <li>That email or an intranet is ineffective.</li>
                <li>That audio will improve satisfaction.</li>
                <li>That all roles can listen during work.</li>
                <li>That one global percentage describes every employer.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section section-band" id="access-map">
          <div className="section-inner">
            <div className="eyebrow">Access map</div>
            <h2>Document the conditions behind every channel</h2>
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
                  Does receiving the message comply with operational policy and
                  preserve the visual and auditory attention the task requires?
                </p>
              </div>
              <div className="step">
                <h3>Evidence</h3>
                <p>
                  Can the organisation verify access and activity by group, or
                  is the conclusion based on a proxy?
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
                The goal is not to choose a winner. Keep the written source,
                decide which groups need another format and measure each channel
                using the denominator it can support.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint" id="audio-fit">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">Audio fit</div>
              <h2>When private audio may be worth testing</h2>
              <ul>
                <li>The message already exists in written form.</li>
                <li>It is recurring and benefits from tone or explanation.</li>
                <li>One group has a plausible, safe listening window.</li>
                <li>The group can use a compatible podcast app.</li>
                <li>Access needs to be private and revocable.</li>
                <li>Starts and completion would add useful evidence.</li>
                <li>An owner can publish without a new editorial programme.</li>
              </ul>
            </div>
            <aside className="highlight-box">
              <h3>When not to use audio</h3>
              <ul>
                <li>During machinery operation or vehicle interaction.</li>
                <li>When hearing is a safety input.</li>
                <li>For instructions that require visual reference.</li>
                <li>As the sole source for policy or compliance detail.</li>
                <li>When the group has no approved listening context.</li>
                <li>
                  When the organisation cannot define an owner or audience.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section" id="pilot">
          <div className="section-inner">
            <div className="eyebrow">Small experiment</div>
            <h2>Design a four-week pilot that can say no</h2>
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
                <h3>Agree on evidence</h3>
                <p>
                  Track activation, starts, completion, publishing effort and
                  qualitative feedback without imposing a universal benchmark.
                </p>
              </div>
              <div className="step">
                <h3>Book the decision</h3>
                <p>
                  On day 28, continue, adjust or stop. Do not expand to another
                  workforce group before reviewing the first context.
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
                  a: "No. Many non-desk employees have email or smartphones. The relevant question is whether the channel is realistically available in their device, shift, location and working context.",
                },
                {
                  q: "Should every message be available as audio?",
                  a: "No. Use audio only where the message, audience and listening context fit. Preserve written or visual equivalents for detail, accessibility, safety and reference.",
                },
                {
                  q: "Can employees listen while operating equipment?",
                  a: "Do not assume so. Tasks that depend on auditory awareness, visual attention or immediate response may make listening inappropriate. The employer must define and approve safe contexts.",
                },
                {
                  q: "How should access be measured?",
                  a: "Define the intended group, document the requirements for each channel and mark access as verified, partial or unknown. Keep access separate from delivery, attention, understanding and action.",
                },
                {
                  q: "What is a good first pilot?",
                  a: "Use one recurring, non-critical message with one clearly defined group, an approved listening context, a written equivalent, an owner and a decision date after four weeks.",
                },
              ]}
            />
          </div>
        </section>

        <section className="section-brand">
          <div className="container cta-inner">
            <h2>Map one workforce group and one message</h2>
            <p className="lead">
              The Communication Coverage Audit separates verified access from
              assumptions and can conclude that no additional format is needed.
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
