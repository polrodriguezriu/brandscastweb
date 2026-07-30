import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import ReportFigure from "./ReportFigure";

const TITLE = "The State of Internal Communication 2026 | Brandscast";
const DESCRIPTION =
  "Internal email is opened by 66.2% of the people who receive it. 45% of employees without a desk say they are not informed about why their company changes what it changes. Both are true. A report on the gap between what internal communication measures and who it reaches.";

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
    images: "/og-image.png",
  },
};

export default function StateOfInternalCommunication2026() {
  return (
    <>
      <Header />

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
            measures and who it actually reaches. Six published sources, no data
            of our own, and several widely repeated figures deliberately left
            out.
          </p>
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
                  of internal emails are opened. Internal email works.
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">45%</div>
                <p className="report-stat-label">
                  of employees without a desk are not informed about why their
                  company changes what it changes.
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">80%</div>
                <p className="report-stat-label">
                  of the world&apos;s workforce does not spend the day at a
                  screen — and appears in almost no dashboard.
                </p>
              </div>
            </div>
            <p className="report-source">
              Sources: PoliteMail 2026, Staffbase/YouGov 2025, Emergence
              Capital. Full citations at the end.
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
                <a href="#chapter-3">Chapter 3</a> <span>— what it costs</span>
              </li>
              <li>
                <a href="#chapter-4">Chapter 4</a>{" "}
                <span>— the channel that doesn&apos;t ask you to stop</span>
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
              internal email turns out to work — the average internal email is
              opened by 66.2% of the people who receive it, and 83.7% of those
              who open it spend real time with it.
            </p>
            <p>
              Meanwhile, 45% of employees without a desk say they are not
              really, or not at all, informed about the reasons behind the
              changes their company makes.
            </p>
            <p>
              Both things are true at once. That is the finding this report is
              about. Internal communication is not failing where we look at it.
              It is failing where we have no instrument pointed — at the roughly
              80% of the world&apos;s workforce that does not spend its day in
              front of a screen, does not have a corporate inbox open, and
              appears in almost none of the dashboards their employers use to
              decide that communication is going fine.
            </p>

            <ReportFigure
              alt="A maintenance technician on a factory mezzanine, taking a moment between tasks"
              brief="Documentary editorial photograph, mid-forties maintenance technician in worn navy overalls and safety glasses pushed up on the forehead, standing at a mezzanine rail above a mid-size European factory floor. Overcast daylight from high windows, muted industrial palette of grey-blue and steel, no colour grading toward warmth. Phone held loosely in one hand, screen showing an audio player. Neutral, slightly tired expression — not smiling, not posed. Shot at 35mm, natural depth, no lens flare, no stock-photo gloss."
              safety="A single earbud in the left ear only, right ear visibly clear and unobstructed. He is stationary at a rail, not operating anything."
              caption="Most of the world's workforce is reachable. It is just not reachable at a desk."
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
            <div className="eyebrow">Chapter 1</div>
            <h2>The invisible 80%</h2>

            <h3>The size of the gap</h3>
            <p>
              Around 2.7 billion people, roughly 80% of the global workforce,
              work without a desk. They are on production lines, in wards, in
              vans, on shop floors, in kitchens and on job sites. The figure
              comes from Emergence Capital&apos;s{" "}
              <em>State of Technology for the Deskless Workforce</em>, published
              in 2018 and repeated in its 2020 edition — dated, but structural:
              the shape of the world&apos;s labour force does not shift quickly,
              and no more recent count contradicts it.
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
                offered as one. What it is is a controlled comparison between
                two groups inside the same employers — and the comparison is the
                finding.
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
              Read the second row again. Nine per cent of people without a desk
              are very satisfied with how their employer communicates with them.
              Not dissatisfied-but-coping. Nine per cent at the top of the scale
              — and 14% among the colleagues who sit at a screen all day, which
              is its own verdict on how well any of this is working.
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

            <div className="callout callout--accent">
              <p>
                And one figure in the survey is not a matter of degree at all.{" "}
                <strong>
                  12% of non-desk employees say they never receive any
                  communication from senior leadership.
                </strong>{" "}
                Not rarely, not too little, not badly timed. Never. Whatever the
                people running these organisations say about strategy, values or
                where the company is going, one in eight of the people without a
                desk has never once been on the receiving end of it.
              </p>
            </div>

            <ReportFigure
              alt="A ward nurse on a break, listening to something on her phone"
              brief="Documentary editorial photograph, nurse in her thirties in scrubs, sitting in a plain hospital staff break room — vinyl chair, laminate table, a vending machine out of focus behind. Flat fluorescent overhead light, honest and unflattering, pale green and grey palette. Phone flat on the table beside a mug, audio playing through the phone's own speaker. She is looking at nothing in particular, mid-thought. Genuinely tired, not miserable, not smiling for camera. 35mm, available light only."
              safety="No headphones at all — audio on the phone speaker in a break room. She is off the ward and at rest."
              caption="Only 9% of employees without a desk are very satisfied with how their employer communicates with them."
            />

            <h3>Where they are told to look</h3>
            <p>
              Asked which channel actually informs them, employees named, in
              order:
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
              Three of the top four require a screen and a moment to look at it.
              The second — the supervisor — is the one channel that travels to
              where the work is, which is precisely why it carries so much of
              the load. It is also the least controllable: it depends on whether
              a particular manager remembered, understood and had time. Only 48%
              of non-desk employees feel well informed by their manager, against
              65% of desk workers.
            </p>
            <p>
              The employee app is the one channel on that list built
              specifically to close this gap, and where it exists it does its
              job: 68% of employees who use one rate their organisation&apos;s
              crisis communication as excellent or good, against an average of
              52%. It is a main source of information for 15% of employees. The
              trouble with the purpose-built answer is not that it fails the
              people it reaches. It is that it has not reached most of them.
            </p>

            <h3>The point</h3>
            <p>
              None of this says the channels are badly made. The intranet works.
              The newsletter works. Email, as chapter 2 shows, works better than
              almost anyone assumes. They work for the people who can stop and
              look.
            </p>
            <p className="pull-quote">
              The gap in internal communication is not a quality problem with
              the channels. It is a coverage problem.
            </p>
            <p>
              Nearly every channel a company owns requires the recipient to be
              somewhere they can give it their attention, and most of the
              workforce spends most of its day somewhere else.
            </p>
          </div>
        </section>

        {/* CHAPTER 2 */}
        <section className="content-section" id="chapter-2">
          <div className="section-inner">
            <div className="eyebrow">Chapter 2</div>
            <h2>Why the metrics say everything is fine</h2>

            <h3>The number nobody quotes</h3>
            <p>
              PoliteMail&apos;s 2026 benchmark covers more than two billion
              internal emails sent to nearly eleven million employees across ten
              S&amp;P sectors. It is one of the few datasets of any size that
              measures what actually happens to corporate email after it is
              sent, rather than what the people sending it assume happens.
            </p>
            <p className="pull-quote">
              The headline: a 66.2% unique open rate. Two employees in three
              open the internal email their employer sends them.
            </p>
            <p>
              That is well above the open rate of good external marketing email
              — which is where the confusion that runs through this industry
              starts. The two are routinely mixed up, and the comparison
              flatters nobody. Internal email is not marketing. People open it
              because it is from their employer.
            </p>
            <p>
              <strong>
                The intuition that internal email goes unread is,
                straightforwardly, wrong.
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
                performance, and the organisation that produced it says the true
                figure is lower. Hold that thought; it makes the rest of this
                chapter worse, not better.
              </p>
            </div>

            <p>
              <strong>Second, an open is not a read.</strong> PoliteMail also
              tracks attention: 83.7% of people who open an internal email spend
              more than three seconds with it and do not immediately delete it —
              the &ldquo;attention rate&rdquo;. But 14% of openers skim,
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
            <p>
              That total does not say what it is usually taken to say. It is not
              evidence that employees ignore internal email: the measured time
              is, in aggregate, roughly what the messages ask for. Nor is it
              evidence that they read carefully, since a message left open in a
              window counts as time on it either way. What the figure
              establishes is a ceiling. Thirty-three minutes a month is the
              whole of the attention internal communication receives, and every
              minute of it belongs to the population with a corporate inbox.
            </p>
            <p>Click rate lands at 7% of recipients, 10% of openers.</p>

            <div className="callout callout--accent-2">
              <p>
                <strong>
                  Third — and this is the one that matters — an open rate has no
                  denominator for the people who were never sent the email.
                </strong>{" "}
                It is a percentage of the reachable. Every metric in this
                section describes, with real precision, what happens inside the
                population that has a corporate inbox. It says nothing
                whatsoever about the population that does not.
              </p>
            </div>

            <h3>The illusion, stated plainly</h3>
            <p>
              A communications team looks at a dashboard reporting 66% open, 84%
              attention, healthy clicks, and concludes that internal
              communication is working.
            </p>
            <p>
              They are broadly right, and generously so. It is working — for the
              people the dashboard can see.
            </p>
            <p>
              The 45% of non-desk staff who say they are not informed about why
              their company changes what it changes do not appear in that number
              as a failure. They do not appear in it at all. They were never in
              the denominator. And note which way the two errors point: the open
              rate is inflated by machines that never read anything, and it is
              calculated on a population that excludes the people this report is
              about. Both push the same number in the same direction. The better
              internal email looks, the more confidently the gap goes unnoticed,
              because the instrument measuring success is installed exclusively
              on the side of the workforce where success is easiest.
            </p>
            <p className="pull-quote">
              This is why the deskless gap has survived a decade of investment
              in internal communication tools. It is not being ignored. It is
              not being seen.
            </p>

            <ReportFigure
              alt="A delivery driver parked between drops, listening through the van's speakers"
              brief="Documentary editorial photograph shot from the passenger side of a parked delivery van, driver in his fifties in a plain uniform polo, one arm resting on the wheel, van stationary with the handbrake visibly on and a loading bay in front through the windscreen. Dashboard screen shows an audio track title. Late afternoon light, slightly flat, realistic grime on the windscreen. He is looking ahead, unhurried, not performing. 35mm, no HDR, no colour pop."
              safety="Audio through the van's own speakers. No headphones. Vehicle is parked and stationary — handbrake engaged and visible, not in motion."
              caption="An open rate is a percentage of the people who were already reachable."
            />
          </div>
        </section>

        {/* CHAPTER 3 */}
        <section className="content-section section-tint" id="chapter-3">
          <div className="section-inner">
            <div className="eyebrow">Chapter 3</div>
            <h2>What it costs</h2>

            <h3>The macro number</h3>
            <p>
              Gallup&apos;s <em>State of the Global Workplace 2026</em>,
              reporting on 2025, puts global employee engagement at{" "}
              <strong>20%</strong>. It was 23% in 2022.
            </p>
            <p>
              Two details make this edition different from previous ones. It is
              the{" "}
              <strong>
                first time engagement has fallen in two consecutive years
              </strong>
              , and <strong>no region increased</strong>. The decline is not a
              composition effect or one bad market dragging an average down: not
              a single region moved the other way.
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
              That matters here for a specific reason. Managers are the channel
              47% of employees named in chapter 1 as one that actually informs
              them — second only to email, and the one carrying most of the
              weight for the workforce email cannot reach. The channel that
              substitutes for the ones that don&apos;t reach the shop floor is
              degrading faster than any other.
            </p>

            <div className="highlight-box">
              <p>
                Gallup puts the annual cost of low engagement at approximately{" "}
                <strong>
                  $10 trillion in lost productivity, or 9% of global GDP
                </strong>
                .
              </p>
              <p>
                That figure is an estimate built by applying meta-analyses of
                the engagement–productivity link to GDP per worker and scaling
                globally. It should be read as an order of magnitude, not an
                invoice. It is worth being precise about which number is which,
                because three circulate and they measure different things: $10T
                is the annual cost of low engagement; $438bn was the cost of the
                single-year drop in 2024; $9.6T is the potential <em>gain</em>{" "}
                if organisations reached the roughly 70% engagement benchmark.
                They are not interchangeable.
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
              picture is not uniformly deteriorating: Spain bottomed out at 7%
              between 2016 and 2019 and has recovered a point at a time since.
              What is stable is the distance. A European employer starts from a
              base of engaged staff less than half the size of a North American
              one, and has done for as long as the measure has existed.
            </p>

            <h3>The link back to communication</h3>
            <p>
              Engagement is not a communication metric, and it would be
              dishonest to present internal communication as its sole cause. But
              the Staffbase/YouGov survey asked employees directly, and the
              association is not subtle.
            </p>
            <p className="pull-quote">
              63% of employees who are considering leaving their job name poor
              internal communication as a contributing factor.
            </p>
            <p>
              And in the other direction: <strong>76%</strong> of employees who
              rate their organisation&apos;s communication as excellent intend
              to stay, against <strong>20%</strong> of those who rate it as
              poor. A near four-fold difference on the outcome that costs most
              to get wrong.
            </p>
            <p>
              Gallup also shows how far this is from inevitable. In
              organisations it classes as best practice,{" "}
              <strong>79% of managers are engaged</strong> — close to four times
              the global average of 22%. Those organisations are spread across
              every region and industry in the study, so this is not a story
              about one rich market or one forgiving sector. Whatever separates
              them is reproducible. The gap is not a problem that resists
              expensive intervention. In most organisations it is simply not
              being worked on.
            </p>

            <ReportFigure
              alt="A site foreman reviewing the day, audio playing from a phone in a jacket pocket"
              brief="Documentary editorial photograph, construction site foreman in her forties in a hi-vis vest and hard hat, standing at the edge of a site cabin looking over a half-built structure. Grey European daylight, mud, scaffolding, no golden hour. Phone tucked in a chest pocket with a single cable running up. Clipboard under one arm. Composed, focused expression — reading the site, not the camera. 35mm, documentary framing, no dramatic angles."
              safety="One earbud only, in the ear away from the site. The other ear is fully open — she is on an active construction site where hearing approaching plant is a safety requirement."
              caption="Managers carry most of the communication load for the workforce email cannot reach — and are the group disengaging fastest."
            />

            <h3>What chapter 4 has to answer</h3>
            <p>
              The picture across these three chapters is coherent and
              uncomfortable. Most of the workforce cannot be reached by the
              channels their employers rely on. The metrics those employers
              watch are accurate but structurally blind to exactly that group.
              And the cost of people feeling uninformed is measurable, large,
              and arriving in the first years on record when engagement has
              fallen twice running.
            </p>
            <p>
              Which leaves a specific question, and it is not &ldquo;which
              channel should replace email&rdquo;. Email should not be replaced;
              it works for the people it reaches. The question is narrower and
              harder:
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
            <div className="eyebrow">Chapter 4</div>
            <h2>The channel that doesn&apos;t ask you to stop</h2>

            <h3>Blocking and non-blocking</h3>
            <p>
              Every channel described in the first three chapters has one thing
              in common. Email, the intranet, the newsletter, the slide deck,
              the all-hands: each one requires the recipient to stop what they
              are doing, look at something, and give it their attention for as
              long as it takes. Call these <strong>blocking</strong> channels.
              They are not worse for being blocking — a document you can
              re-read, search and forward is often exactly what a message needs.
              But blocking is a precondition, and it is a precondition that most
              of the workforce cannot meet during most of its day.
            </p>
            <p>
              Audio is the one format that does not impose it. It arrives
              alongside an activity rather than interrupting it, which is why it
              is the only channel a company owns that can reach someone whose
              hands and eyes are already committed.
            </p>
            <p>
              That is not a claim about audio being more persuasive, more
              memorable or more modern. It is a claim about{" "}
              <em>when it can be consumed</em>, which — given the previous three
              chapters — is the constraint that actually binds.
            </p>

            <h3>Audio is already a mass habit</h3>
            <p>
              The objection to internal audio has always been that it asks
              employees to adopt something unfamiliar. In 2026 that is no longer
              true.
            </p>
            <p>
              Edison Research&apos;s <em>Infinite Dial 2026</em> (n=2,050,
              fielded January 2026 on a probability-based SSRS panel) reports
              that among Americans aged 12 and over:
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="report-stat">80%</div>
                <p className="report-stat-label">
                  have listened to a podcast at some point — 230 million people
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">58%</div>
                <p className="report-stat-label">
                  listened in the past month — 167 million
                </p>
              </div>
              <div className="stat">
                <div className="report-stat">45%</div>
                <p className="report-stat-label">
                  listened in the past week — 130 million
                </p>
              </div>
            </div>
            <p>
              The age breakdown matters more than the headline. Monthly
              listening in the <strong>35–54</strong> band runs at{" "}
              <strong>68%</strong> — ten points above the all-ages average. The
              middle of the working-age range is not a population that has to be
              taught what a podcast is.
            </p>

            <ReportFigure
              alt="A warehouse picker walking a quiet aisle at the start of a shift"
              brief="Documentary editorial photograph, warehouse operative in his twenties in a plain hi-vis over a hoodie, walking a wide aisle of racking with a handheld scanner. Cold overhead LED light, concrete floor, deep perspective down the aisle. Bone-conduction headphones sitting in front of the ears, clearly not covering the ear canal. Calm, ordinary, mid-shift. 35mm, realistic, no motion blur theatrics."
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
              reported by Westwood One), <strong>53%</strong> of all AM/FM radio
              listening now takes place <strong>in the car</strong>, up from 42%
              in 2015. Radio is the oldest audio medium there is, and a majority
              of what remains of it is consumed by people who are driving.
            </p>
            <div className="callout">
              <p>
                We are presenting this as an{" "}
                <strong>analogy, not as proof</strong>, and the distinction
                should be stated plainly rather than buried: these figures
                describe entertainment and news consumption, not internal
                communication. They demonstrate that audio comfortably occupies
                time that no other medium can reach. They do not demonstrate
                that employees will listen to a company announcement in that
                same time.
              </p>
            </div>

            <h3>The measurement that doesn&apos;t exist</h3>
            <p>
              Which leads to the most striking gap we found while assembling
              this report.
            </p>
            <p>
              There is no study measuring corporate audio consumption in a work
              context — none that we could locate. Nobody has published data on
              whether a field engineer listens to a company update between
              calls, or a sales rep on the drive between accounts, or a nurse on
              a commute home.
            </p>
            <p>
              The reason is not that the question is uninteresting. It is that
              almost no company has ever sent one, so there has been nothing to
              measure. The instrument problem from chapter 2 goes all the way
              down: we lack data on the deskless workforce partly because we
              lack channels that reach it, and we lack those channels partly
              because there is no data proving they would work.
            </p>
            <p>
              We would rather name that absence than paper over it with a
              borrowed statistic. Several of the figures circulating in this
              space — a widely quoted podcast completion rate, a claim that
              employees miss half of all internal communications — could not be
              traced to any original study, and they are not in this report.
            </p>
            <p>
              There is also a comparison worth refusing even when it is
              available. Podcast listeners <strong>choose</strong> what they
              listen to; employees do not choose internal announcements. Any
              completion figure drawn from consumer podcasting is a measure of
              self-selection, not a property of audio that transfers to a
              company all-staff message. The honest version of the claim is
              narrower: when someone decides to listen, audio does not require
              them to stop doing anything else in order to finish.
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
              at a desk reads it. The person driving between sites hears it.
              Neither is asked to change how they work, and nobody has to be at
              a screen at a particular moment to find out what their employer
              has decided.
            </p>
            <p>
              That framing also resolves the tension that has made this problem
              so persistent. Internal communications teams are not going to
              abandon channels that measure well in favour of one that is
              unproven. They do not have to. Adding a non-blocking channel costs
              nothing in reach on the existing ones.
            </p>

            <ReportFigure
              alt="A field service engineer at a kitchen table before an early start"
              brief="Documentary editorial photograph, field service engineer in her thirties at a plain kitchen table before dawn, work fleece already on, van keys and a mug beside a phone. Warm low kitchen light against a dark window — the only warm-lit image in the set, and deliberately domestic rather than corporate. Over-ear headphones on. Unhurried, mid-sip, thinking. 35mm, natural, slightly grainy, no styling."
              safety="Over-ear headphones are fine here and only here — she is at home, at rest, before the shift starts. No machinery, no traffic, no moving plant."
              caption="The same message, taken in the form that fits the shape of the day."
            />

            <h3>Three conditions</h3>
            <p>
              An audio channel only closes the gap in chapter 1 if it meets
              three conditions that consumer podcasting does not.
            </p>
            <div className="callout callout--accent">
              <p>
                <strong>It has to be segmented.</strong> A single all-staff feed
                reproduces the problem it is meant to solve: the production
                floor receives sales enablement, the field team receives factory
                notices, and both learn to disregard it. This is the one
                condition we argue rather than cite — none of the research in
                this report measures it. But it follows from chapter 1. A
                channel is only worth the time of the person receiving it if
                what arrives is meant for them, and a message aimed at everyone
                is aimed at nobody in particular.
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
                chapters describing. The value of knowing that 45% of your
                non-desk staff feel uninformed is that it is a number. The point
                of adding a channel for them is lost if you cannot tell whether
                it reached them.
              </p>
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
                panel.{" "}
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
              href: "/employee-listening-analytics/",
              label: "Employee listening analytics",
            },
            {
              href: "/internal-communication/",
              label: "Internal communication in audio",
            },
            {
              href: "/private-podcasts-for-teams/",
              label: "Private podcasts for teams",
            },
          ]}
        />

        <CtaSection
          title="Find out who you are not reaching"
          lead="Brandscast turns what you already write into private audio, segmented by team, and counts coverage in people — including the ones who have never listened to anything."
        />
      </main>

      <FooterMinimal />
    </>
  );
}
