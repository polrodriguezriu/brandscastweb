import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CoverageAudit from "./CoverageAudit";

const TITLE = "Communication Coverage Audit | Brandscast";
const DESCRIPTION =
  "Map which workforce groups can realistically receive important internal communications, what your current dashboards measure and whether a small audio pilot is worth testing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://brandscast.com/communication-coverage-audit/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://brandscast.com/communication-coverage-audit/",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const auditSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Communication Coverage Audit",
  description: DESCRIPTION,
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      name: "Define the intended workforce group",
    },
    {
      "@type": "HowToStep",
      name: "Map realistic access to current channels",
    },
    {
      "@type": "HowToStep",
      name: "Review the evidence available by segment",
    },
    {
      "@type": "HowToStep",
      name: "Decide whether a small pilot is justified",
    },
  ],
};

export default function CommunicationCoverageAuditPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
      />

      <div className="coverage-audit-hero">
        <div className="container coverage-audit-hero__inner">
          <div>
            <div className="eyebrow">15-minute diagnostic</div>
            <h1>Communication Coverage Audit</h1>
            <p className="lead">
              Map who an important message is meant to reach, which channels
              each group can realistically access and what your dashboards can
              prove today.
            </p>
            <p>
              This audit is optional. You can{" "}
              <a href="https://app.brandscast.com/signup">
                start a Brandscast trial
              </a>{" "}
              without completing it or booking a call.
            </p>
          </div>
          <div className="coverage-audit-hero__note">
            <span>Outcome</span>
            <strong>One coverage hypothesis</strong>
            <p>
              Plus a small pilot recommendation, or a clear reason not to add a
              channel yet.
            </p>
          </div>
        </div>
      </div>

      <main className="coverage-audit-page">
        <CoverageAudit />

        <section className="content-section coverage-audit-method">
          <div className="section-inner two-cols">
            <div>
              <div className="eyebrow">How to read the result</div>
              <h2>This is a diagnostic, not an industry benchmark</h2>
              <p>
                The score organises a discovery conversation. It does not prove
                that a workforce group is uninformed, that an existing channel
                is failing or that audio will improve an outcome.
              </p>
              <p>
                A useful audit separates what the organisation knows, what it
                infers and what a pilot would still need to validate.
              </p>
            </div>
            <aside className="callout">
              <h3>Evidence boundary</h3>
              <p>
                Channel performance describes what happens after a person is
                reachable through the channel. Workforce coverage asks whether
                every intended group had a realistic opportunity to receive the
                message in the first place.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner coverage-audit-source">
            <div>
              <div className="eyebrow">Research foundation</div>
              <h2>Start with the measurement gap</h2>
              <p>
                The audit is the practical companion to{" "}
                <em>The State of Internal Communication 2026</em>. Read the
                report for the source data, methodology and claims Brandscast
                deliberately excludes.
              </p>
            </div>
            <a
              className="btn outline"
              href="/state-of-internal-communication-2026/"
            >
              Read the report
            </a>
          </div>
        </section>
      </main>

      <FooterMinimal />
    </>
  );
}
