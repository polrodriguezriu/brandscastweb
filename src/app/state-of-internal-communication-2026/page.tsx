import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import ReportActionLink from "./ReportActionLink";
import ShareReport from "./ShareReport";
import NewsletterSignup from "./NewsletterSignup";

const TITLE = "The State of Internal Communication 2026 | Brandscast";
const DESCRIPTION =
  "Channel performance is not workforce coverage. Explore the highlights and download Brandscast's free report on internal communication. No email required.";
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
              Channel performance is not workforce coverage.
            </p>
            <p className="study-summary">
              Strong channel metrics leave an important question unanswered: who
              had a realistic opportunity to receive the message? Explore the
              evidence, the limitations and a practical coverage framework.
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
                <li>
                  <h3>66.2% recorded unique open rate</h3>
                  <p>
                    In PoliteMail&apos;s 2026 internal-email benchmark. Recorded
                    opens do not confirm attentive human reading, understanding
                    or workforce coverage. Internal email can perform well
                    within its measured audience.
                  </p>
                  <a href="#study-sources">PoliteMail 2026</a>
                </li>
                <li>
                  <h3>45% felt uninformed about the reasons for change</h3>
                  <p>
                    45% of surveyed non-desk employees said they were not
                    really, or not at all, informed about why their company
                    makes changes. This is a self-reported perception, not a
                    measure of delivery or a causal finding.
                  </p>
                  <a href="#study-sources">Staffbase/YouGov 2025</a>
                </li>
                <li>
                  <h3>9% were very satisfied</h3>
                  <p>
                    Only 9% of surveyed non-desk employees were very satisfied
                    with internal communication. The finding describes that
                    survey group, not every workforce.
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
              The report explores how an additional audio format could
              complement email, meetings and written information. Audio still
              requires auditory attention and a safe, appropriate context. Its
              contribution to coverage needs to be tested.
            </p>
            <p>
              Inside the PDF: the research, its limits and questions to audit
              access by workforce group. No original survey was conducted by
              Brandscast.
            </p>
            <ReportActionLink
              action="audit"
              href="/communication-coverage-audit/?source=report"
              placement="framework"
            >
              Explore the optional coverage audit
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
              Compiled by Brandscast, which builds private audio channels for
              internal communication. That commercial interest is relevant. The
              full PDF includes the complete bibliography and methodological
              limitations; the sources below support the selected highlights on
              this page.
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
