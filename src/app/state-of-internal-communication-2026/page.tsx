import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import ReportActionLink from "./ReportActionLink";
import ShareReport from "./ShareReport";
import NewsletterSignup from "./NewsletterSignup";

const TITLE = "The State of Internal Communication 2026 | Brandscast";
const DESCRIPTION =
  "What does internal communication look like beyond the desk? Explore the findings and download Brandscast's free 2026 report. No email required.";
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "The State of Internal Communication 2026",
  headline: "The State of Internal Communication 2026",
  description: DESCRIPTION,
  datePublished: "2026-09-01",
  inLanguage: "en",
  url: "https://brandscast.com/state-of-internal-communication-2026/",
  image: "https://brandscast.com/report/final-cover.png",
  encoding: {
    "@type": "MediaObject",
    encodingFormat: "application/pdf",
    contentUrl:
      "https://brandscast.com/report/the-state-of-internal-communication-2026.pdf",
  },
  publisher: {
    "@type": "Organization",
    name: "Brandscast",
    url: "https://brandscast.com/",
  },
  isBasedOn: [
    "https://staffbase.com/blog/employee-communication-impact-study-2025",
    "https://politemail.com/internal-email-benchmarks-for-communicators/",
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://brandscast.com/state-of-internal-communication-2026/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    type: "article",
    url: "https://brandscast.com/state-of-internal-communication-2026/",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/report/final-cover.png",
        width: 849,
        height: 1200,
        alt: "The final cover of The State of Internal Communication 2026 by Brandscast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/report/final-cover.png"],
  },
};

export default function StateOfInternalCommunication2026() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="study-landing">
        <section className="study-intro">
          <div className="container">
            <div className="eyebrow">Brandscast research / 2026</div>
            <h1>The State of Internal Communication 2026</h1>
            <p className="study-lead">
              A fresh look at who your communication reaches.
            </p>
            <p className="study-summary">
              What&apos;s working? Who feels left out? And where could audio
              help? Explore the research and bring new ideas to your next
              internal communication plan.
            </p>
            <div className="study-actions">
              <ReportActionLink
                action="download"
                className="btn"
                href="/report/the-state-of-internal-communication-2026.pdf"
                download
                placement="hero"
              >
                Download the free report
              </ReportActionLink>
              <span className="study-note">PDF / No email required</span>
            </div>
          </div>
        </section>
        <section
          className="study-overview"
          aria-labelledby="study-highlights-title"
        >
          <div className="container study-overview-grid">
            <figure className="study-cover">
              <ReportActionLink
                action="download"
                href="/report/the-state-of-internal-communication-2026.pdf"
                download
                placement="framework"
                aria-label="Download the free report PDF"
              >
                <img
                  src="/report/final-cover.png"
                  alt="Cover of The State of Internal Communication 2026 by Brandscast"
                  width="849"
                  height="1200"
                  decoding="async"
                />
              </ReportActionLink>
              <figcaption>
                The full report, ready to read and pass on.
              </figcaption>
            </figure>
            <div>
              <h2 id="study-highlights-title">
                Three findings worth a closer look
              </h2>
              <ol className="study-highlights">
                <li id="chapter-2">
                  <h3>66.2% recorded unique open rate</h3>
                  <p>
                    Internal email remains a valuable channel. PoliteMail&apos;s
                    2026 benchmark reports a 66.2% recorded unique open rate
                    across the internal emails it measured.
                  </p>
                  <a href="#study-sources">PoliteMail 2026</a>
                </li>
                <li id="chapter-1">
                  <h3>45% felt uninformed about the reasons for change</h3>
                  <p>
                    45% of surveyed non-desk employees said they were not
                    really, or not at all, informed about why their company
                    makes changes.
                  </p>
                  <a href="#study-sources">Staffbase/YouGov 2025</a>
                </li>
                <li>
                  <h3>9% were very satisfied</h3>
                  <p>
                    Only 9% of surveyed non-desk employees were very satisfied
                    with internal communication.
                  </p>
                  <a href="#study-sources">Staffbase/YouGov 2025</a>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="study-takeaway">
          <div className="container">
            <h2>Keep the channels that work. Ask who is missing.</h2>
            <p>
              Email, meetings and your intranet all have a role. The report
              explores where audio could add something different: a way to catch
              up without sitting down to read.
            </p>
            <p>
              Inside: key findings, questions to discuss with your team and a
              practical framework for spotting communication gaps.
            </p>
            <ReportActionLink
              action="audit"
              href="/communication-coverage-audit/?source=report"
              placement="framework"
            >
              Explore your communication gaps
            </ReportActionLink>
          </div>
        </section>
        <section
          className="study-distribution"
          aria-labelledby="study-share-title"
        >
          <div className="container">
            <h2 id="study-share-title">Useful to your team? Pass it on.</h2>
            <p>
              Forward the PDF to a colleague or share this page with your
              network. When citing the report, credit Brandscast and link to
              this page.
            </p>
            <div className="study-actions">
              <ReportActionLink
                action="download"
                className="btn"
                href="/report/the-state-of-internal-communication-2026.pdf"
                download
                placement="final"
              >
                Download the free report
              </ReportActionLink>
              <ShareReport />
            </div>
          </div>
        </section>
        {process.env.MARKETING_SIGNUP_ENABLED === "true" && (
          <div className="study-newsletter">
            <div className="container">
              <NewsletterSignup />
            </div>
          </div>
        )}
        <section className="study-sources" id="study-sources">
          <div className="container">
            <h2>About the research</h2>
            <p>
              This report brings together published research, compiled by
              Brandscast, a private audio tool for internal communication. No
              original survey was conducted by Brandscast. The PDF includes the
              complete bibliography and methodological limitations.
            </p>
            <h3>Sources</h3>
            <ul>
              <li>
                <a href="https://staffbase.com/blog/employee-communication-impact-study-2025">
                  Staffbase/YouGov, 2025 International Employee Communication
                  Impact Study
                </a>
                . Staffbase and YouGov surveyed 3,574 employees across
                Australia, Austria, Germany, Switzerland, the UK and the US.
                Fieldwork: 12-21 February 2025. The percentages above refer to
                the non-desk subgroup, not the full sample.
              </li>
              <li>
                <a href="https://politemail.com/internal-email-benchmarks-for-communicators/">
                  PoliteMail, Internal Email Communications Benchmarks 2026
                </a>
                . More than two billion internal emails sent to nearly eleven
                million employees across ten industry sectors. Provider-recorded
                metrics are not confirmation of human attention or
                comprehension.
              </li>
            </ul>
            <p>
              Questions or corrections:{" "}
              <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>.
            </p>
            <p>
              Exploring private audio for your organisation?{" "}
              <ReportActionLink
                action="signup"
                href="https://app.brandscast.com/signup"
                placement="final"
              >
                Try Brandscast
              </ReportActionLink>
              .
            </p>
          </div>
        </section>
      </main>
      <FooterMinimal />
    </>
  );
}
