import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CoverageAudit from "./CoverageAudit";

const TITLE = "Communication Coverage Audit | Brandscast";
const DESCRIPTION =
  "Spot the gaps in your internal communication. Answer seven questions about your audience, channels and listening opportunities, and get a practical next step.";

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
      name: "Choose a team and a message",
    },
    {
      "@type": "HowToStep",
      name: "Check how that team gets updates",
    },
    {
      "@type": "HowToStep",
      name: "Review what you know about that team",
    },
    {
      "@type": "HowToStep",
      name: "Choose your next step",
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
              Take a closer look at how one team gets your updates. Seven
              questions help you spot gaps and decide what to try next.
            </p>
            <p>
              Ready to try audio instead?{" "}
              <a href="https://app.brandscast.com/signup">
                Start a Brandscast trial
              </a>{" "}
              with no call required.
            </p>
          </div>
          <div className="coverage-audit-hero__note">
            <span>Outcome</span>
            <strong>A clear next step</strong>
            <p>
              Find out what to check, what to improve and whether audio is worth
              a try for this team.
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
              <h2>A starting point for a better conversation</h2>
              <p>
                Your score reflects your answers, not an industry benchmark. Use
                it to focus the next conversation with your team on the things
                you still need to find out.
              </p>
              <p>
                A low score means there are questions to explore. It does not
                mean you need another tool.
              </p>
            </div>
            <aside className="callout">
              <h3>Look beyond the dashboard</h3>
              <p>
                An email open rate tells you about the emails you sent. It
                won&apos;t tell you whether a colleague on the night shift has
                time or access to check their inbox.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner coverage-audit-source">
            <div>
              <div className="eyebrow">Research foundation</div>
              <h2>Explore the research behind the questions</h2>
              <p>
                The audit is the practical companion to{" "}
                <em>The State of Internal Communication 2026</em>. Read the
                report for the findings, sources and ideas to discuss with your
                team.
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
