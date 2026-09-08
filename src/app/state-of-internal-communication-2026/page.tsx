import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import RelatedLinks from "@/components/RelatedLinks";
import ReportFigure from "./ReportFigure";
import ReportActionLink from "./ReportActionLink";

const TITLE = "The State of Internal Communication 2026 | Brandscast";
const DESCRIPTION =
  "A research-led report on the gap between channel performance and workforce coverage, with a practical framework for auditing who can realistically receive important internal communications.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "The State of Internal Communication 2026",
  headline: "The State of Internal Communication 2026",
  description: DESCRIPTION,
  datePublished: "2026-09-01",
  inLanguage: "en",
  url: "https://brandscast.com/state-of-internal-communication-2026/",
  publisher: {
    "@type": "Organization",
    name: "Brandscast",
    url: "https://brandscast.com/",
  },
  isBasedOn: [
    "https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx",
    "https://www.gallup.com/workplace/697850/state-of-the-global-workplace-regional-data.aspx",
    "https://staffbase.com/blog/employee-communication-impact-study-2025",
    "https://politemail.com/internal-email-benchmarks-for-communicators/",
    "https://www.edisonresearch.com/the-infinite-dial-2026/",
    "https://www.westwoodone.com/blog/2026/03/09/edisons-q4-2025-share-of-ear-in-car-listening-grows-in-importance-for-am-fm-radio-as-it-dominates-the-path-to-purchase/",
    "https://revistascientificas.us.es/index.php/Ambitos/article/view/29187",
    "https://www.emcap.com/technology-for-the-deskless-workforce-2020",
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
        url: "/report/social/coverage-thesis-landscape.png",
        width: 1600,
        height: 900,
        alt: "Channel performance is not workforce coverage. The Brandscast State of Internal Communication 2026 report.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/report/social/coverage-thesis-landscape.png"],
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

      {/* PRINT-ONLY COVER — hidden on screen, first page of the PDF */}
      <div className="print-cover">
        <div className="print-cover-top">
          <div className="print-cover-brand">BrandsCast</div>
          <div className="print-cover-eyebrow">Research · 2026</div>
          <div className="print-cover-title">
            The State of Internal Communication 2026
          </div>
          <p className="print-cover-lead">
            A report on the distance between what internal communication
            measures and who it actually reaches.
          </p>
        </div>
        <p className="print-cover-meta">
          Brandscast · brandscast.com/state-of-internal-communication-2026 ·
          Published September 2026
        </p>
      </div>

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Research · 2026</div>
          <h1>The State of Internal Communication 2026</h1>
          <p className="lead">
            Internal communication has never been better measured than it is
            today. The numbers, on the whole, look good.{" "}
            <strong>That is the problem.</strong>
          </p>
          <p className="hero-meta">
            A report on the distance between what internal communication
            measures and who it actually reaches. Seven published sources, no
            data of our own, and several widely repeated figures deliberately
            left out.
          </p>
          <div className="report-hero-actions">
            <ReportActionLink
              action="signup"
              className="btn"
              href="https://app.brandscast.com/signup"
              placement="hero"
            >
              Start trial
            </ReportActionLink>
            <ReportActionLink
              action="download"
              className="btn outline"
              href="/report/the-state-of-internal-communication-2026.pdf"
              download
              placement="hero"
            >
              Download the full report
            </ReportActionLink>
          </div>
        </div>
      </div>

      <main className="report-body">
        {/* SUMMARY STATS */}
        <section className="content-section">
          <div className="section-inner">
            <div className="stat-row">
              <div className="stat">
                <div className="report-stat">66.2%</div>
                <p className="report-stat-label">
                  average unique open rate in PoliteMail&apos;s 2026 benchmark.
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">45%</div>
                <p className="report-stat-label">
                  of surveyed non-desk employees said they were not informed
                  about why their company changes what it changes.
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">80%</div>
                <p className="report-stat-label">
                  An older estimate placed roughly this share of the global
                  workforce in deskless roles.
                </p>
              </div>
            </div>
            <p className="report-source">
              Sources: PoliteMail 2026, Staffbase/YouGov 2025 and an Emergence
              Capital 2018 estimate repeated in 2020. Full citations and
              limitations at the end.
            </p>
          </div>
        </section>

        {/* CONTENTS */}
        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>What is in this report</h2>
            <ul className="report-toc">
              <li>
                <a href="#introduction">Introduction</a>{" "}
                <span>— the measurement problem</span>
              </li>
              <li>
                <a href="#chapter-1">Chapter 1</a>{" "}
                <span>— the invisible 80%</span>
              </li>
              <li>
                <a href="#chapter-2">Chapter 2</a>{" "}
                <span>— why the metrics say everything is fine</span>
              </li>
              <li>
                <a href="#chapter-3">Chapter 3</a> <span>— why it matters</span>
              </li>
              <li>
                <a href="#chapter-4">Chapter 4</a>{" "}
                <span>— the channel that doesn&apos;t ask you to stop</span>
              </li>
              <li>
                <a href="#what-this-report-does-not-say">
                  What this report does not say
                </a>
              </li>
              <li>
                <a href="#coverage-audit">Coverage audit</a>{" "}
                <span>— a practical framework</span>
              </li>
              <li>
                <a href="#about">About this report</a>{" "}
                <span>— sources and how to cite it</span>
              </li>
            </ul>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="content-section" id="introduction">
          <div className="section-inner">
            <div className="eyebrow">Introduction</div>
            <h2>The measurement problem</h2>
            <p>
              Internal communication has never been better measured than it is
              today. Platforms report open rates, attention time,
              click-throughs, reach. The numbers, on the whole, look good.
            </p>
            <p className="pull-quote">That is the problem.</p>
            <p>
              We measure the channel that is easy to measure. Email leaves a
              trail: it can be opened, timed, counted. And when you count it,
              internal email performs better than dismissal claims suggest. In
              PoliteMail&apos;s benchmark, the recorded unique open rate is
              66.2%, and 83.7% of recorded opens meet its attention-rate
              threshold.
            </p>
            <p>
              Meanwhile, 45% of surveyed non-desk employees said they were not
              really, or not at all, informed about the reasons behind the
              changes their company makes.
            </p>
            <p>
              Both things are true at once. That is the finding this report is
              about — and it turns on a distinction internal communication
              rarely makes explicit.{" "}
              <strong>Channel performance is not workforce coverage.</strong> A
              dashboard measures channel performance: what happened to a message
              among the people a particular channel actually reached. It says
              nothing about workforce coverage — what share of the people an
              organisation needed to reach ever had a realistic opportunity to
              receive it, through that channel or any other. Non-desk employees
              report measurably worse communication outcomes than desk-based
              respondents within the same survey. And the working world is not
              mostly desk-based to begin with: an older structural estimate
              placed roughly 80% of the global workforce in deskless roles. It
              is not a current census or a measure of email access. None of that
              proves internal communication has failed those employees — the
              evidence here does not establish that. It does establish this:
              many of the metrics organisations rely on are generated by digital
              traces — logins, opens, clicks — left behind by behaviours that
              are easiest to capture where work is already organised around a
              screen. The measurement risk is greatest where those digital
              traces are weakest.
            </p>

            <ReportFigure
              src="/report/factory-mezzanine.webp"
              alt="A maintenance technician on a factory mezzanine, taking a moment between tasks"
              brief="Documentary editorial photograph, mid-forties maintenance technician in worn navy overalls and safety glasses pushed up on the forehead, standing at a mezzanine rail above a mid-size European factory floor. Bright daylight streaming in from high windows, clean industrial palette of pale blue and steel. Relaxed, genuinely smiling — not posed. Shot at 35mm, natural depth, no lens flare, no stock-photo gloss."
              safety="A slim wraparound bone-conduction headset: the band passes behind his head and the two pads rest on his cheekbones in front of the ears, so both ear canals stay visibly open and unblocked. He is stationary at a rail, not operating anything."
              caption="Most of the world's workforce is reachable. Just not only through desk-based channels."
            />

            <p>
              This report brings together the primary research that maps that
              gap: Gallup&apos;s <em>State of the Global Workplace 2026</em>,
              the Staffbase/YouGov 2025 survey of 3,574 employees across six
              countries, PoliteMail&apos;s benchmark of more than two billion
              internal emails, Emergence Capital&apos;s count of the deskless
              workforce, and Edison Research&apos;s <em>Infinite Dial 2026</em>{" "}
              and <em>Share of Ear</em>.
            </p>
            <p>
              We have added no data of our own. Where a widely repeated figure
              could not be traced to an original study, we left it out —
              including several that would have suited our argument.
            </p>
          </div>
        </section>

        {/* CHAPTER 1 */}
        <section className="content-section section-band" id="chapter-1">
          <div className="section-inner">
            <div className="eyebrow chapter-eyebrow">Chapter 1</div>
            <h2>The invisible 80%</h2>

            <h3>The size of the gap</h3>
            <p>
              A 2018 Emergence Capital estimate placed around 2.7 billion
              people, roughly 80% of the global workforce, in work without a
              desk. That includes roles on production lines, in wards, in
              delivery vans, on shop floors, in kitchens, on construction sites,
              in warehouses, on the road between client visits and behind hotel
              and restaurant counters. The estimate comes from Emergence
              Capital&apos;s{" "}
              <em>State of Technology for the Deskless Workforce</em>, published
              in 2018 and repeated in its 2020 edition. The figure is dated and
              should be read as a structural estimate rather than a current
              census — the shape of the world&apos;s labour force does not shift
              quickly, but the number itself is not fresh.
            </p>
            <p>
              What has been measured recently is what those people experience.
              In February 2025, Staffbase and YouGov surveyed 3,574 employees
              across Australia, Austria, Germany, Switzerland, the UK and the
              US. The survey sorted respondents by how much of their work
              happens at a computer: 51% work exclusively or mainly on one
              (&ldquo;desk-based&rdquo;), 26% mostly or entirely without one
              (&ldquo;non-desk&rdquo;), and 23% do both about equally.
            </p>
            <div className="callout">
              <p>
                That 26% sits well below the global 80% above, and it should.
                This is a six-country survey of advanced economies, where desk
                work is heavily over-represented compared with the world as a
                whole. It is not a census of the deskless workforce and is not
                offered as one. What it is is a within-study comparison between
                desk-based and non-desk respondents, surveyed using the same
                methodology — and the comparison is the finding.
              </p>
            </div>

            <h3>Two workforces, two experiences</h3>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Desk-based</th>
                    <th>Non-desk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Satisfied with internal communication</td>
                    <td>
                      <strong>47%</strong>
                    </td>
                    <td>
                      <strong>29%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <em>Very</em> satisfied
                    </td>
                    <td>14%</td>
                    <td>
                      <strong>9%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Do not feel informed about company changes</td>
                    <td>36%</td>
                    <td>
                      <strong>45%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Feel well informed by their manager</td>
                    <td>65%</td>
                    <td>
                      <strong>48%</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Read the second row again. In this survey, nine per cent of
              non-desk participants were very satisfied with how their employer
              communicates with them. Not dissatisfied-but-coping. Nine per cent
              at the top of the scale — and 14% among surveyed desk-based
              colleagues, which is its own verdict within this sample.
            </p>
            <p>
              The gap is not a rounding error at the margins of an otherwise
              healthy picture. On every measure above, the non-desk workforce
              sits behind — by five points at the top of the satisfaction scale,
              nine on feeling informed about change, seventeen on being well
              informed by a manager, eighteen on overall satisfaction. The size
              varies; the direction never does. Not one measure runs the other
              way.
            </p>

            <p>
              And one figure in the survey is not a matter of degree at all.
            </p>
            <div className="stat-card stat-card--accent">
              <div className="stat-card-num">12%</div>
              <p className="stat-card-label">
                of surveyed non-desk employees said they never receive any
                communication from senior leadership. Not rarely, not too
                little, not badly timed. Never.
              </p>
            </div>
            <p>
              Whatever the people running these organisations say about
              strategy, values or where the company is going, one in eight
              surveyed non-desk participants said they had never been on the
              receiving end of it.
            </p>

            <ReportFigure
              src="/report/hospital-break-room.webp"
              alt="A ward nurse on a break, listening to something on her phone"
              brief="Documentary editorial photograph, nurse in her thirties in scrubs, sitting in a plain hospital staff break room — vinyl chair, laminate table, a vending machine out of focus behind. Bright, clean overhead light, airy pale green and grey palette. Phone flat on the table beside a mug, audio playing through the phone's own speaker. She is looking at nothing in particular, mid-thought, warmly smiling to herself, genuinely enjoying the break. 35mm, available light only."
              safety="No headphones at all — audio on the phone speaker in a break room. She is off the ward and at rest."
              caption="Only 9% of surveyed non-desk employees were very satisfied with how their employer communicates with them."
            />

            <h3>Where they are told to look</h3>
            <p>
              Staffbase and YouGov also asked the whole sample — desk-based,
              non-desk and mixed employees together — one direct question: where
              do you actually get your news and information about your employer?
              In order, they named:
            </p>
            <div className="cards cards--2">
              <article className="value-card">
                Email and memos — <strong>51%</strong>
              </article>
              <article className="value-card">
                Their direct supervisor — <strong>47%</strong>
              </article>
              <article className="value-card">
                The intranet — <strong>39%</strong>
              </article>
              <article className="value-card">
                A newsletter — <strong>22%</strong>
              </article>
              <article className="value-card">
                A dedicated employee app — <strong>15%</strong>
              </article>
            </div>
            <p>
              Three of the top four are commonly visual formats that require a
              moment to read. The second — the supervisor — is the one channel
              that travels to where the work is, which is likely why it carries
              so much of the load. It is also the least controllable: it depends
              on whether a particular manager remembered, understood and had
              time. Only 48% of surveyed non-desk employees felt well informed
              by their manager, against 65% of surveyed desk-based employees.
            </p>
            <p>
              Employees who use an employee app report notably stronger
              crisis-communication ratings: 68% rate their organisation&apos;s
              crisis communication as good or excellent, against 52% overall.
              Yet only 15% of respondents name an employee app as their main
              source of company information. Employee apps are often deployed
              precisely to improve access for frontline and non-desk employees —
              which makes the gap between those two figures worth noting, not
              explaining away.
            </p>

            <h3>The point</h3>
            <p>
              None of this shows that the intranet, newsletters or email are
              inherently poor channels. Email, as chapter 2 shows, performs
              better than almost anyone assumes. Their usefulness depends, in
              part, on whether employees have a practical opportunity to consume
              them.
            </p>
            <p className="pull-quote">
              The gap cannot be explained by channel-performance metrics alone.
              Coverage is the part those metrics cannot answer.
            </p>
            <p>
              Nearly every channel a company owns is good at telling you how it
              performed among the people it reached. None of them, on its own,
              tells you who it never reached at all — and that distinction is
              where the rest of this report lives.
            </p>
          </div>
        </section>

        {/* CHAPTER 2 */}
        <section className="content-section" id="chapter-2">
          <div className="section-inner">
            <div className="eyebrow chapter-eyebrow">Chapter 2</div>
            <h2>Why the metrics say everything is fine</h2>

            <h3>The number nobody quotes</h3>
            <p>
              PoliteMail&apos;s 2026 benchmark covers more than two billion
              internal emails sent to nearly eleven million employees across ten
              S&amp;P sectors. It is one of the few datasets of any size that
              measures what actually happens to corporate email after it is
              sent, rather than what the people sending it assume happens.
            </p>
            <div className="stat-card">
              <div className="stat-card-num">66.2%</div>
              <p className="stat-card-label">
                recorded unique open rate — the provider&apos;s headline metric.
                It can include non-human opens, as explained below.
              </p>
            </div>
            <p>
              Internal email is not marketing email, and benchmarking the two as
              though they were the same behaviour is not especially useful — the
              two get compared anyway, and the comparison flatters nobody. The
              relationship, context and reason for receiving an internal email
              are fundamentally different from those of a marketing email.
            </p>
            <p>
              <strong>
                The intuition that internal email is broadly ignored is not
                supported by the benchmark.
              </strong>
            </p>
            <p>
              So if the channel works, why does the previous chapter look the
              way it does?
            </p>

            <h3>What an open rate is not</h3>
            <p>Three things, and PoliteMail names the first one itself.</p>

            <div className="highlight-box">
              <p>
                <strong>First, the number is generous.</strong> The people who
                publish this benchmark are explicit that open rates flatter:
                automated security scans, outdated distribution lists and
                passive opens all register as opens without a human reading
                anything. Their words, not ours — &ldquo;open rates can be
                misleading… giving a false sense of success&rdquo;. We are
                citing 66.2% as the best available measure of internal email
                performance, and the organisation that produced it is explicit
                that these effects can inflate it — the true human-open figure
                may be lower. Hold that thought; it makes the rest of this
                chapter worse, not better.
              </p>
            </div>

            <p>
              <strong>Second, an open is not a read.</strong> PoliteMail also
              reports an attention rate: 83.7% of recorded opens met its
              provider-defined threshold of more than three seconds without
              immediate deletion. That is not independent confirmation of
              attentive human reading. Separately, 14% of recorded openers skim,
              spending less than 30% of the message&apos;s predicted reading
              time with it. Roughly a third of all recipients never get past the
              subject line at all.
            </p>
            <p>
              The average corporate email contains about 500 words, which
              PoliteMail calculates as a two-minute read. Employees receive
              around 14 a month, and the time actually measured on them totals{" "}
              <strong>33 minutes</strong> — slightly more than the reading time
              those messages were predicted to need.
            </p>
            <div className="stat-card stat-card--accent-2">
              <div className="stat-card-num">33 min</div>
              <p className="stat-card-label">
                a month — the measured reading time on the corporate emails in
                PoliteMail&apos;s benchmark. Not a total for internal
                communication: PoliteMail measures email, not meetings,
                managers, apps, intranets, chat or anything else.
              </p>
            </div>
            <p>
              That total is easy to overstate in a specific direction. It is not
              evidence that employees ignore internal email: the measured time
              is, in aggregate, roughly what the messages ask for. Nor is it
              evidence that everyone read carefully: an average sitting close to
              the predicted time is also consistent with wide variation
              underneath it — some people skimming, others opening nothing at
              all, others spending far longer. And it is not a measure of
              internal communication as a whole, however often it gets quoted as
              one — it is a measure of one channel, corporate email, produced by
              a benchmark built to measure exactly that channel and nothing
              else. What happens in meetings, with a manager, in an employee
              app, on an intranet or in a team chat is outside what these
              thirty-three minutes can tell us, in either direction.
            </p>
            <p>
              For messages containing links, click rate is 7% of recipients and
              10% of openers.
            </p>

            <div className="callout callout--accent-2">
              <p>
                <strong>
                  Third — and this is the one that matters — an open rate is a
                  channel-performance metric, not a workforce-coverage metric.
                </strong>{" "}
                It answers a narrow question with real precision: of the people
                this email was sent to, what happened? It cannot answer a
                different, prior question — what share of the people the
                organisation needed to reach were sent it, or could
                realistically have received it, at all. Many channel-performance
                dashboards, PoliteMail&apos;s included, begin measuring at or
                after &ldquo;sent&rdquo;. Nothing in it can tell you who never
                reached that starting line.
              </p>
            </div>
            <p className="pull-quote">
              A good open rate can tell you that email worked. It cannot tell
              you whether email was enough.
            </p>

            <div className="coverage-funnel">
              <div className="coverage-funnel-step coverage-funnel-step--before">
                <strong>Intended workforce</strong> — everyone the message is
                meant for
              </div>
              <div className="coverage-funnel-arrow">↓</div>
              <div className="coverage-funnel-step coverage-funnel-step--before">
                <strong>Reachable through this channel</strong> — has the login,
                the app, the inbox, the shift overlap
              </div>
              <div className="coverage-funnel-arrow">↓</div>
              <div className="coverage-funnel-divider">
                Channel-performance measurement typically begins here
              </div>
              <div className="coverage-funnel-step">
                <strong>Delivered</strong>
              </div>
              <div className="coverage-funnel-arrow">↓</div>
              <div className="coverage-funnel-step">
                <strong>Opened / played</strong>
              </div>
              <div className="coverage-funnel-arrow">↓</div>
              <div className="coverage-funnel-step">
                <strong>Attention</strong>
              </div>
              <div className="coverage-funnel-arrow">↓</div>
              <div className="coverage-funnel-step">
                <strong>Understood or acted on</strong>
              </div>
            </div>
            <p className="coverage-funnel-caption">
              A conceptual sequence, not a measured funnel — no percentages are
              attached to it. The coverage problem begins above the line.
            </p>

            <h3>The illusion, stated plainly</h3>
            <p>
              A communications team looks at a dashboard reporting 66% open, 84%
              attention and healthy clicks, and concludes that internal
              communication is working. The dashboard gives them good reason to
              believe the channel is working — among the population represented
              in it.
            </p>
            <p>
              Whether the surveyed non-desk employees who said they were not
              informed about company changes sit inside or outside that
              population, the dashboard cannot say. That is not a gap in this
              particular benchmark; it is what a channel-performance metric is.
              It is built to describe, with real precision, what happens after a
              message enters the channel. It was never built to describe who
              never had the channel open to them in the first place, and nothing
              in it distinguishes those two situations.
            </p>
            <p>
              The open rate is also inflated in a specific, documented direction
              — automated security scans, stale distribution lists and passive
              opens all count as opens without a human reading anything, by
              PoliteMail&apos;s own account. That may push the true reading
              number lower, not higher. It does not, on its own, tell us
              anything about coverage: a channel can be simultaneously
              over-counted among the people it reaches and silent about the
              people it does not. Neither fact cancels the other.
            </p>
            <p>
              The risk comes when strong performance inside a measurable channel
              is interpreted as evidence that the intended workforce was fully
              covered.
            </p>
            <p className="pull-quote">
              This helps explain how a desk/non-desk communication gap can
              persist without ever showing up as a failure in the dashboards
              used to track it. It is not being ignored. It is not being seen.
            </p>
          </div>
        </section>

        {/* CHAPTER 3 */}
        <section className="content-section section-tint" id="chapter-3">
          <div className="section-inner">
            <div className="eyebrow chapter-eyebrow">Chapter 3</div>
            <h2>Why it matters</h2>

            <h3>What poor communication is associated with</h3>
            <p>
              Engagement is not a communication metric, and it would be
              dishonest to present internal communication as the sole cause of
              anything as large as global disengagement. What the
              Staffbase/YouGov survey can show is narrower and still useful: it
              asked employees directly about their own employer&apos;s
              communication and their own intentions, and the association
              between the two is not subtle.
            </p>
            <p className="pull-quote">
              63% of surveyed employees who were considering leaving their job
              named poor internal communication as a contributing factor.
            </p>
            <p>
              And in the other direction: among surveyed employees who rated
              organisation&apos;s communication as excellent,{" "}
              <strong>76%</strong> say they are &ldquo;very likely&rdquo; to
              stay, against <strong>20%</strong> of those who rate it as poor.
              These are employees&apos; own reports of their own communication
              and their own intentions — an association, not an experiment. It
              cannot prove that improving communication would, on its own,
              change someone&apos;s mind about leaving. What it shows is that
              the two move together consistently, at scale, across a sample of
              more than three thousand employees.
            </p>
            <p>
              The same survey also asked employees to rate communication&apos;s
              impact directly, rather than inferring it from intentions to
              leave. Majorities in the survey reported that internal
              communication has some or a great impact on their productivity at
              work (<strong>63%</strong>), their motivation to do their best
              work (<strong>67%</strong>), and their understanding of the
              company&apos;s vision and mission (<strong>65%</strong>). These
              are still employees reporting on their own experience, not an
              independent measurement of productivity or motivation — but three
              separate questions converging on the same answer is a pattern
              worth taking seriously.
            </p>

            <h3>The wider picture</h3>
            <p>
              Step back from individual perception to macro, independently
              tracked data, and a much larger problem comes into view — one
              internal communication is only a single input to, but sits inside
              all the same. Gallup&apos;s{" "}
              <em>State of the Global Workplace 2026</em>, reporting on 2025,
              puts global employee engagement at <strong>20%</strong>. It was
              23% in 2022.
            </p>
            <div className="stat-card">
              <div className="stat-card-num">20%</div>
              <p className="stat-card-label">
                global employee engagement in 2025 — down from 23% in 2022.
              </p>
            </div>
            <p>
              Two details make this edition different from previous ones. It is
              the{" "}
              <strong>
                first time engagement has fallen in two consecutive years
              </strong>
              , and <strong>no region increased</strong>. The decline is not
              simply one region dragging down the global average: Gallup reports
              that no region increased.
            </p>
            <p>
              Managers are where it is happening. Gallup is direct about this:
              lower engagement among managers &ldquo;accounts for most of the
              recent downturn&rdquo; in engagement overall. Manager engagement
              now stands at <strong>22%</strong>, down nine points since 2022,
              and most of that fall arrived in a single year — from 27% to 22%
              between 2024 and 2025. Managers used to enjoy what Gallup calls an
              engagement premium. They are now roughly as disengaged as the
              people they lead.
            </p>
            <p>
              That matters here for a specific reason. 47% of the whole survey
              sample named their direct supervisor as a main source of company
              information — second only to email. Surveyed non-desk employees
              were also less likely than surveyed desk-based employees to feel
              well informed by their manager: 48% against 65%. And manager
              engagement itself, as above, has just fallen sharply in a single
              year. None of this tells us that managers are the reason the
              non-desk gap exists, or that manager disengagement is causing it —
              the data does not establish that link. It does put two facts
              uncomfortably close together: managers are an important source of
              company information, and managers are the group whose own
              engagement has fallen fastest.
            </p>

            <div className="stat-card stat-card--accent">
              <div className="stat-card-num">$10T</div>
              <p className="stat-card-label">
                estimated annual cost of low engagement in lost productivity —
                about 9% of global GDP.
              </p>
            </div>
            <div className="highlight-box">
              <p>
                Gallup puts the annual cost of low engagement at approximately{" "}
                <strong>
                  $10 trillion in lost productivity, or 9% of global GDP
                </strong>
                . This is the cost of low <em>engagement</em> broadly, not a
                cost attributed to poor communication specifically — Gallup does
                not isolate communication as a cause anywhere in this figure.
              </p>
              <p>
                The estimate is built by applying meta-analyses of the
                engagement–productivity link to GDP per worker and scaling
                globally. It should be read as an order of magnitude, not an
                invoice — and it measures the cost of low engagement across the
                whole economy, not a return on any single organisation&apos;s
                communication programme.
              </p>
            </div>

            <h3>The regional picture</h3>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>World region</th>
                    <th>Engaged</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>United States and Canada</td>
                    <td>
                      <strong>31%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Europe</td>
                    <td>
                      <strong>12%</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="compare-wrap" style={{ marginTop: "16px" }}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Country (Europe)</th>
                    <th>Engaged</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spain</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>France</td>
                    <td>8%</td>
                  </tr>
                  <tr>
                    <td>Poland</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>Croatia</td>
                    <td>7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Regional engagement in 2025 ran from{" "}
              <strong>
                31% in the United States and Canada down to 12% in Europe
              </strong>{" "}
              — and Europe has been the lowest region in the world for years
              running. Beneath that average, single-digit engagement is
              ordinary: France at 8%, Poland and Croatia at 7%. Spain sits at
              10%, down from 18% in 2012.
            </p>
            <p>
              Two honest qualifications. Gallup&apos;s country figures are
              three-year rolling averages rather than snapshots of a single
              year, so they move slowly by construction. And the European
              picture is not uniformly deteriorating: Spain fell as low as 6% in
              2016 and 2017, recovered to 7% in 2018 and 2019, and has climbed
              roughly a point at a time since. What is stable is the distance:
              at regional level, Europe&apos;s 12% engagement rate is less than
              half the 31% recorded in the United States and Canada.
            </p>
            <p>
              Gallup also shows how far this is from inevitable. In
              organisations it classes as best practice,{" "}
              <strong>79% of managers are engaged</strong> — close to four times
              the global average of 22%. Those organisations are spread across
              every region and industry in the study, so this is not a story
              about one rich market or one forgiving sector. The comparison does
              not tell us which interventions caused the difference. It does
              show that low manager engagement is not inevitable.
            </p>

            <ReportFigure
              src="/report/construction-site.webp"
              alt="A site foreman reviewing the day, audio playing from a phone in a jacket pocket"
              brief="Documentary editorial photograph, construction site foreman in her forties in a hi-vis vest and hard hat, standing at the edge of a site cabin looking over a half-built structure, smiling warmly. Bright grey European daylight, clean and clear, mud, scaffolding, no golden hour. Relaxed, glancing toward the site. 35mm, documentary framing, no dramatic angles."
              safety="A slim wraparound bone-conduction headset: the band passes behind her head and the two pads rest on her cheekbones in front of the ears, so both ear canals stay visibly open and unblocked. She is on an active construction site where hearing approaching plant is a safety requirement, so the open-ear form has to be legible in the frame, not assumed."
              caption="Managers are a key source of company information for employees — and the group whose own engagement has fallen fastest."
            />

            <h3>What chapter 4 has to answer</h3>
            <p>
              Non-desk employees report weaker communication outcomes than their
              desk-based colleagues, consistently, across every measure in
              chapter 1. At the same time, the metrics organisations commonly
              use describe what happens inside individual channels, not whether
              the intended workforce was ever fully covered by them. The
              evidence in this report does not tell us how much of that gap is
              caused by insufficient coverage. It tells us that the dashboards
              organisations already have cannot answer the question — and that
              not knowing is itself worth acting on, at a moment when engagement
              has fallen for two years running and the cost of disengagement is
              measured in trillions.
            </p>
            <p>
              Which leaves a specific question, and it is not &ldquo;which
              channel performs best&rdquo;. Email should not be replaced; it
              works for the people it reaches. The question is about coverage,
              not performance, and it is narrower and harder:
            </p>
            <p className="pull-quote">
              What can carry a company&apos;s message to someone whose hands and
              eyes are already busy, without asking them to stop?
            </p>
          </div>
        </section>

        {/* CHAPTER 4 */}
        <section className="content-section" id="chapter-4">
          <div className="section-inner">
            <div className="eyebrow chapter-eyebrow">Chapter 4</div>
            <h2>The channel that doesn&apos;t ask you to stop</h2>

            <h3>Blocking and non-blocking</h3>
            <p>
              Many of the dominant channels described in the first three
              chapters share one constraint. Email, intranets, newsletters and
              slide decks require a moment to read; all-hands meetings require
              synchronous attention. We use <strong>blocking</strong> here as
              shorthand for channels that require sustained visual or
              synchronous attention — not a claim that email is literally always
              blocking, or that every email demands the same focus. They are not
              worse for being blocking — a document you can re-read, search and
              forward is often exactly what a message needs. But blocking is a
              precondition, and for many non-desk roles that precondition is
              harder to meet during significant parts of the working day.
            </p>
            <p>
              Audio is one of the few asynchronous formats that does not require
              sustained visual attention. It can arrive alongside an activity
              rather than interrupting it, which is why it is one of the few
              channels a company owns that can open a consumption window for
              someone whose hands and eyes are already committed to something
              else.
            </p>
            <p>
              That is not a claim about audio being more persuasive, more
              memorable or more modern, and it is not a claim that everyone can
              listen while they work — plenty of roles cannot, safely or
              otherwise. It is a narrower claim about{" "}
              <em>when it can be consumed</em>. Audio can create additional
              consumption windows. That addresses one constraint among several
              that screen-dependent channels cannot always solve.
            </p>

            <h3>Audio is already a mass habit</h3>
            <p>
              One objection to internal audio is that it asks employees to adopt
              something unfamiliar. US consumption data can test two parts of
              that assumption: whether digital audio is niche behaviour and
              whether podcasting is unfamiliar. It cannot establish familiarity
              for every workforce or region.
            </p>
            <p>
              Edison Research&apos;s <em>Infinite Dial 2026</em> (n=2,050,
              fielded January 2026 on a probability-based SSRS panel) finds that
              among Americans aged 12 and over, <strong>81%</strong> listened to
              online audio of any kind — streaming music and radio included, not
              only podcasts — in the past month. Digital audio was mainstream in
              this US sample, not universal.
            </p>
            <p>
              Podcasting specifically is also familiar, though it is worth being
              precise about what Edison is now measuring: its 2026 figures track
              people who have <strong>listened to or watched</strong> a podcast,
              since a growing share of podcast consumption happens on video
              platforms. Among Americans 12+:
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="report-stat">80%</div>
                <p className="report-stat-label">
                  have listened to or watched a podcast at some point — 230
                  million people
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">58%</div>
                <p className="report-stat-label">
                  did so in the past month — 167 million
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">45%</div>
                <p className="report-stat-label">
                  did so in the past week — 130 million
                </p>
              </div>
            </div>
            <p>
              The video question matters less for our purposes than it sounds.
              What it establishes is not that Americans specifically listen with
              their eyes closed — it is that podcasting is already a familiar
              format to a majority of Americans, with monthly consumption
              reaching <strong>68%</strong> among{" "}
              <strong>35–54-year-olds</strong>, ten points above the all-ages
              average. That makes podcast familiarity a reasonable hypothesis
              for many people in this US age group, not an assumption to impose
              on every pilot audience.
            </p>

            <ReportFigure
              src="/report/warehouse-aisle.webp"
              alt="A warehouse picker walking a quiet aisle at the start of a shift"
              brief="Documentary editorial photograph, warehouse operative in his twenties in a plain hi-vis over a hoodie, walking a wide aisle of racking with a handheld scanner, smiling slightly. Bright overhead LED light, clean concrete floor, deep perspective down the aisle. Bone-conduction headphones sitting in front of the ears, clearly not covering the ear canal. Calm, ordinary, mid-shift, relaxed. 35mm, realistic, no motion blur theatrics."
              safety="Bone-conduction headphones — both ear canals remain fully open. Chosen deliberately for a warehouse, where forklifts and reversing alarms make occluded ears genuinely dangerous. The open-ear form must be clearly visible in frame."
              caption="Audio arrives alongside the work rather than interrupting it."
            />

            <h3>Where audio already lives</h3>
            <p>
              If audio&apos;s advantage is that it travels into occupied time,
              it is worth asking where audio listening actually happens.
            </p>
            <p>
              According to Edison&apos;s <em>Share of Ear</em> Q4 2025 (as
              reported by Westwood One), <strong>53%</strong> of over-the-air
              AM/FM radio listening now takes place <strong>in the car</strong>,
              up from 42% in 2015. More than half of over-the-air AM/FM
              listening now takes place in the car.
            </p>
            <div className="stat-card stat-card--accent-2">
              <div className="stat-card-num">53%</div>
              <p className="stat-card-label">
                of over-the-air AM/FM radio listening now happens in the car —
                up from 42% in 2015.
              </p>
            </div>
            <ReportFigure
              src="/report/sales-rep-driving.webp"
              alt="A sales rep driving between client visits, podcast on the car's CarPlay screen"
              brief="Documentary editorial photograph, sales representative in her fifties in a plain shirt, driving a mid-range estate car at a moderate, ordinary speed on a bright suburban road, both hands on the wheel, eyes on the road, smiling slightly, at ease. A folder and a couple of product samples on the passenger seat. Bright, clear mid-afternoon light, an ordinary low-rise office-park road outside, no glamour. 35mm, shot from the passenger seat, realistic wear in the cabin."
              safety="Audio through the car's built-in CarPlay screen, not a phone in a cradle — a glanceable, hands-free interface built for exactly this. Both hands stay on the wheel and her eyes stay on the road; the screen is visible in frame but she is not looking at it. Nothing in frame should read as operating a vehicle while distracted."
              caption="We could not locate published cross-company data on whether a sales rep listens to a company update on the drive between accounts."
            />

            <div className="callout">
              <p>
                We are presenting this as an{" "}
                <strong>analogy, not as proof</strong>, and the distinction
                should be stated plainly rather than buried: these figures
                describe entertainment and news consumption, not internal
                communication. They demonstrate that audio is already consumed,
                at scale, in a context — driving — where sustained visual
                attention to another medium is not available. They do not
                demonstrate that employees will listen to a company announcement
                in that same time.
              </p>
            </div>
            <p>
              None of this holds everywhere, and it should not be read as though
              it does. Audio is not the right channel for every deskless job: a
              warehouse floor with reversing forklifts, an active construction
              site, a clinical procedure, a customer-facing conversation, or any
              moment where listening would compete with a safety-critical sound
              are not places to route a message through someone&apos;s ears.
              Audio alone is also not accessible to everyone, including some
              employees with hearing loss, so an equivalent written format or
              transcript remains necessary. Audio adds a consumption window; it
              does not remove the need for written and visual channels, and it
              should never be the only way a message reaches someone.
            </p>

            <h3>The benchmark that doesn&apos;t exist</h3>
            <p>
              Which leads to the most striking gap we found while assembling
              this report — stated narrowly, because the broad version of this
              claim is not true.
            </p>
            <p>
              Internal podcasts already exist, and they have received some
              academic attention. A 2026 study in <em>Ámbitos</em>, a Spanish
              communication-research journal, examined corporate podcasts run by
              Mapfre, Banco Santander and Coca-Cola as tools for internal
              communication and social engagement. What we searched for and
              could not find is a large-scale, cross-company benchmark for
              internal audio comparable to what PoliteMail publishes for
              internal email — reach, listening time, completion, and how those
              figures differ between desk-based and non-desk populations,
              measured across many organisations rather than described in a
              single case.
            </p>
            <p>
              Why that benchmark is absent is not something the available
              research can establish. What we can say is narrower: we could not
              locate published cross-company data on whether a field engineer
              listens to a company update between calls, or a sales rep on the
              drive between accounts, or a nurse on a commute home.
              PoliteMail&apos;s benchmark reflects a mature, high-volume channel
              with years of measurement behind it. Internal audio does not yet
              have an equivalent published benchmark.
            </p>
            <p>
              We would rather name that absence than paper over it with a
              borrowed statistic. Several of the figures circulating in this
              space — a podcast completion rate quoted as though it were an
              internal-communication benchmark, a claim that employees miss half
              of all internal communications — could not be traced to any
              original study, and they are not in this report.
            </p>
            <p>
              There is also a comparison worth refusing even when it is
              available. Podcast listeners <strong>choose</strong> what they
              listen to; employees generally do not self-select internal
              announcements the way consumers self-select podcasts. Consumer
              podcast completion rates are shaped by that self-selection and
              therefore cannot be transferred directly to internal
              communication. The honest version of the claim is narrower: when
              someone decides to listen, audio does not require continuous
              visual attention in order to finish.
            </p>

            <h3>Addition, not replacement</h3>
            <p>
              The conclusion of this report is not that companies should send
              fewer emails.
            </p>
            <p>
              Chapter 2 was unambiguous: internal email works, and works better
              than the organisations using it are usually told. Replacing a
              channel that two-thirds of its recipients actually open would be a
              strange way to respond to the evidence.
            </p>
            <p className="pull-quote">
              The finding is about coverage, so the response should be about
              coverage.
            </p>
            <p>
              Send the same message through more than one channel and let people
              take it in the form that fits the shape of their day. The person
              at a desk reads it. The person driving between sites may hear it
              during an appropriate, legal journey. Neither is asked to change
              how they work, and nobody has to be at a screen at a particular
              moment to find out what their employer has decided.
            </p>
            <p>
              That framing also resolves the tension that has made this problem
              so persistent. Internal communications teams are not going to
              abandon channels that measure well in favour of one that is
              unproven. They do not have to. Adding another format does not
              require sacrificing the reach of the channels already working.
            </p>

            <ReportFigure
              src="/report/kitchen-before-shift.webp"
              alt="A field service engineer at a kitchen table before an early start"
              brief="Documentary editorial photograph, field service engineer in her thirties at a plain kitchen table before dawn, work fleece already on, van keys and a mug beside a phone, smiling softly to herself. Warm, bright kitchen light against a dark window — cosy rather than dim, the only warm-toned image in the set, and deliberately domestic rather than corporate. A single in-ear earbud. Unhurried, resting her chin on her hand, content. 35mm, natural, slightly grainy, no styling."
              safety="A single earbud is fine here and only here — she is at home, at rest, before the shift starts. No machinery, no traffic, no moving plant, so there is no hazard to prove awareness against."
              caption="The same message, taken in the form that fits the shape of the day."
            />

            <h3>Three conditions</h3>
            <p>
              For internal audio to function as a measurable coverage channel,
              it needs three things that consumer podcasting does not
              necessarily provide.
            </p>
            <div className="callout callout--accent">
              <p>
                <strong>It has to support segmentation.</strong> Not every
                internal message needs to be segmented — genuine
                organisation-wide communication has its place. But a useful
                internal channel should allow communication to be targeted when
                only part of the workforce needs it: a production-floor update,
                field-team information, sales enablement. Without that, the
                channel risks adding noise and reducing relevance for the people
                receiving it. This is the one condition we argue rather than
                cite — none of the research in this report measures it. But it
                follows from chapter 1: a channel is only worth the time of the
                person receiving it if what arrives is relevant to them.
              </p>
            </div>
            <div className="callout callout--accent">
              <p>
                <strong>It has to be private.</strong> Internal communication
                contains things that are not for public distribution. A channel
                that requires publishing to a public podcast directory is not a
                channel for internal communication, whatever else it is good
                for.
              </p>
            </div>
            <div className="callout callout--accent-2">
              <p>
                <strong>It has to be measured.</strong> This is really the
                answer to chapter 2. If audio is added as an unmeasured channel,
                it inherits the exact blind spot this report has spent three
                chapters describing. The value of the Staffbase finding that 45%
                of surveyed non-desk respondents felt uninformed about the
                reasons for company changes is that it makes the perceived gap
                visible in that sample. At organisation level, the equivalent
                access question has to be measured directly. If you cannot
                estimate whether the intended group had a realistic opportunity
                to receive the message, you cannot assess incremental coverage.
              </p>
            </div>

            <p>
              Every channel in this report, audio included, can be asked the
              same two questions, and they are different questions. Did the
              channel perform well? And, separately: did the intended workforce
              have a realistic opportunity to receive the message? The first is
              what most dashboards already answer. The second is the one this
              report has been about.
            </p>
          </div>
        </section>

        <section
          className="content-section section-tint"
          id="what-this-report-does-not-say"
        >
          <div className="section-inner">
            <div className="eyebrow">Evidence boundaries</div>
            <h2>What this report does not say</h2>
            <p>
              The distinction between channel performance and workforce coverage
              is useful only if it stays within the limits of the evidence. This
              report does not claim that:
            </p>
            <ul className="report-boundaries">
              <li>Internal email is not read or does not work.</li>
              <li>
                Audio should replace email, intranets, meetings or written
                documentation.
              </li>
              <li>
                Consumer podcast completion rates predict internal communication
                performance.
              </li>
              <li>
                Low global engagement is caused by internal communication.
              </li>
              <li>
                Audio is appropriate for every non-desk role or every moment at
                work.
              </li>
              <li>Any channel can guarantee 100% workforce reach.</li>
            </ul>
            <p>
              The report argues for a more complete measurement question, not
              for abandoning channels that already work.
            </p>
          </div>
        </section>

        {/* COVERAGE AUDIT */}
        <section className="content-section" id="coverage-audit">
          <div className="section-inner">
            <div className="eyebrow">Practical framework</div>
            <h2>A simple coverage audit</h2>
            <p>
              The argument in this report converts into a short set of
              questions. They are not a scoring system and they are not research
              of their own — they are the practical version of the distinction
              chapter 2 makes: ask about coverage, not only about channel
              performance.
            </p>
            <div className="cards cards--2">
              <article className="value-card">
                What share of the workforce is actually addressable through
                corporate email?
              </article>
              <article className="value-card">
                Who can realistically check the intranet during a working day?
              </article>
              <article className="value-card">
                Which employee groups rely mainly on a manager for company
                information?
              </article>
              <article className="value-card">
                Which groups have no convenient asynchronous channel at all?
              </article>
              <article className="value-card">
                Which channels require someone to stop and look at a screen?
              </article>
              <article className="value-card">
                Which parts of the workforce are absent from the dashboards in
                daily use?
              </article>
              <article className="value-card">
                Can reach and consumption be measured by workforce segment, not
                only by channel?
              </article>
            </div>
            <p>
              Some of these questions may be answerable from employee-directory,
              HRIS and channel data already on hand. Others require asking
              employees directly. The point is not that organisations already
              know the answers. It is that channel-performance dashboards, by
              themselves, do not provide them.
            </p>
            <p>
              Brandscast builds private, segmented and measurable audio channels
              for organisations that want to add an eyes-free option to their
              internal communication mix.
            </p>
            <div className="report-audit-action">
              <div>
                <strong>Apply the framework to one workforce group.</strong>
                <p>
                  The interactive audit turns these questions into a coverage
                  hypothesis, a pilot recommendation or a clear no-pilot
                  decision.
                </p>
              </div>
              <ReportActionLink
                action="audit"
                className="btn"
                href="/communication-coverage-audit/?source=report"
                placement="framework"
              >
                Run the audit
              </ReportActionLink>
            </div>
          </div>
        </section>

        {/* ABOUT + SOURCES */}
        <section className="content-section section-tint" id="about">
          <div className="section-inner">
            <h2>About this report</h2>
            <p>
              <em>The State of Internal Communication 2026</em> was compiled by
              Brandscast, which builds private audio channels for internal
              communication. That is a relevant interest and we would rather
              declare it than have it noticed.
            </p>
            <p>
              The report contains no data of our own. Every figure is drawn from
              published third-party research, cited below. Where a widely
              repeated statistic could not be traced to an original study, it
              was excluded — including figures that would have supported our
              position.
            </p>
            <p>
              Questions, corrections and requests for the underlying source
              notes:{" "}
              <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>. If
              you find an error in here, tell us and we will fix it and say so.
            </p>

            <h3>Citing this report</h3>
            <div className="report-cite">
              Brandscast, <em>The State of Internal Communication 2026</em>.
              <br />
              https://brandscast.com/state-of-internal-communication-2026
            </div>
            <p style={{ marginTop: "14px" }}>
              Figures may be reproduced with attribution, including in
              commercial publications, without asking us first. A link to the
              report is the only thing we ask for.
            </p>

            <h3>Sources</h3>
            <ul>
              <li>
                Gallup, <em>State of the Global Workplace 2026</em> (reporting
                on 2025).{" "}
                <a
                  href="https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  gallup.com
                </a>
                . Regional and country figures from the same edition&apos;s{" "}
                <a
                  href="https://www.gallup.com/workplace/697850/state-of-the-global-workplace-regional-data.aspx"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  regional data pages
                </a>
                ; country-level numbers are three-year rolling averages.
              </li>
              <li>
                Staffbase and YouGov,{" "}
                <em>2025 International Employee Communication Impact Study</em>.
                n=3,574 (Australia 518, Austria 216, Germany 1,067, Switzerland
                200, UK 529, US 1,044), YouGov panel, fielded 12–21 February
                2025.{" "}
                <a
                  href="https://staffbase.com/blog/employee-communication-impact-study-2025"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  staffbase.com
                </a>
              </li>
              <li>
                PoliteMail,{" "}
                <em>Internal Email Communications Benchmarks 2026</em>. Over two
                billion internal emails sent to nearly eleven million employees
                across ten industry sectors.{" "}
                <a
                  href="https://politemail.com/internal-email-benchmarks-for-communicators/"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  politemail.com
                </a>
              </li>
              <li>
                Edison Research, <em>The Infinite Dial 2026</em>. n=2,050
                Americans 12+, fielded January 2026, probability-based SSRS
                panel. Its 2026 podcast-consumption figures count listening and
                watching together, which this report states explicitly where
                those figures are used.{" "}
                <a
                  href="https://www.edisonresearch.com/the-infinite-dial-2026/"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  edisonresearch.com
                </a>
              </li>
              <li>
                Edison Research, <em>Share of Ear</em> Q4 2025, as reported by
                Westwood One. <em>Share of Ear</em> is a subscription study; we
                have not read the underlying data and cite only the figures
                Westwood One published with attribution to Edison.{" "}
                <a
                  href="https://www.westwoodone.com/blog/2026/03/09/edisons-q4-2025-share-of-ear-in-car-listening-grows-in-importance-for-am-fm-radio-as-it-dominates-the-path-to-purchase/"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  westwoodone.com
                </a>
              </li>
              <li>
                Cartes-Barroso, M. &amp; García-Estévez, N.,{" "}
                <em>
                  El pódcast corporativo como medio estratégico para la
                  comunicación interna y el compromiso social. Estudio de casos
                  españoles
                </em>
                . <em>Ámbitos. Revista Internacional de Comunicación</em>, issue
                69 (April 2026). Cited only to establish that internal corporate
                podcasting exists and has received academic study — not as a
                cross-company performance benchmark.{" "}
                <a
                  href="https://revistascientificas.us.es/index.php/Ambitos/article/view/29187"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  revistascientificas.us.es
                </a>
              </li>
              <li>
                Emergence Capital,{" "}
                <em>The State of Technology for the Deskless Workforce 2020</em>{" "}
                (~1,500 deskless workers, 20 industries).{" "}
                <a
                  href="https://www.emcap.com/technology-for-the-deskless-workforce-2020"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  emcap.com
                </a>
              </li>
            </ul>
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/communication-coverage-audit/?source=report",
              label: "Communication Coverage Audit",
            },
            {
              href: "/employee-listening-analytics/",
              label: "Employee listening analytics",
            },
            {
              href: "/secure-access-control/",
              label: "Secure access control",
            },
          ]}
        />

        <section className="section-brand report-final-cta">
          <div className="container cta-inner">
            <h2>Give your team another way to receive your updates</h2>
            <p className="lead">
              Create your Brandscast account and explore private audio for your
              team. No audit, demo or sales call is required to get started.
            </p>
            <div className="cta-actions">
              <ReportActionLink
                action="signup"
                className="btn"
                href="https://app.brandscast.com/signup"
                placement="final"
              >
                Start trial
              </ReportActionLink>
              <ReportActionLink
                action="audit"
                className="btn outline"
                href="/communication-coverage-audit/?source=report"
                placement="final"
              >
                Explore the optional coverage audit
              </ReportActionLink>
            </div>
            <p>
              The 30-day trial includes 5 minutes shared between text-to-audio
              and audio enhancement per organisation for the entire trial, with
              no renewal. <a href="/#pricing">See plans and limits</a>.
            </p>
          </div>
        </section>
      </main>

      <FooterMinimal />
    </>
  );
}
