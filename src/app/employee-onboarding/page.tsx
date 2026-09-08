import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Employee onboarding with private audio | Brandscast",
  description:
    "Add private audio to employee onboarding so invited new hires can revisit culture, product and process context alongside written material and live practice.",
  alternates: { canonical: "https://brandscast.com/employee-onboarding/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/employee-onboarding/",
    title: "Employee onboarding with private audio | Brandscast",
    description:
      "Test private internal audio as an optional format for culture, context and training within a broader employee onboarding path.",
    images: "/Podcasters.webp",
  },
};

export default function EmployeeOnboardingPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Employee onboarding</div>
          <h1>
            Make employee onboarding clearer and more human with internal audio
          </h1>
          <p className="lead">
            With <strong>employee onboarding</strong> through private audio,
            invited new hires can revisit your story, culture and processes in
            short episodes during appropriate listening moments, alongside the
            written onboarding path.
          </p>
          <p className="hero-meta">
            On this page you will see how you can use private audio to support
            employee onboarding, structure recurring context and measure use by
            cohort.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why employee onboarding often feels overwhelming</h2>
              <p>
                When someone joins your company, they face a long list of things
                to learn. New tools, new names, new processes and a new market.
                In many organisations, this becomes a heavy mix of documents,
                slides and back to back calls.
              </p>
              <p>
                Managers try to help by scheduling more meetings. People from
                different teams join to “explain their part”. The result is a
                crowded calendar in the first weeks, with information that is
                hard to remember and hard to revisit.
              </p>
              <p>
                For distributed or hybrid teams, the problem grows. Time zones
                make it difficult to schedule live sessions. New hires start
                before a cohort is ready, so you repeat the same onboarding
                sessions many times.
              </p>
              <p>
                Most companies do not lack content. They lack an onboarding
                format that respects time, attention and different ways of
                learning. This is where <strong>employee onboarding</strong>{" "}
                with internal audio becomes powerful.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Signs your onboarding needs a better format</h3>
              <ul>
                <li>
                  New hires say they feel overloaded with calls and documents.
                </li>
                <li>
                  Managers repeat the same explanations every time someone
                  joins.
                </li>
                <li>
                  Important cultural messages get lost in the middle of tasks
                  and tools.
                </li>
                <li>
                  Remote colleagues do not receive the same experience as office
                  hires.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">employee onboarding</span>
                <span className="tag">new hires</span>
                <span className="tag">internal podcasts</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>What employee onboarding with internal audio looks like</h2>
            <p>
              Employee onboarding with internal audio means turning key parts of
              your onboarding into a curated audio journey. Instead of sharing
              everything in live calls, you record short episodes that guide new
              hires through what matters most.
            </p>
            <p>
              New colleagues add their private feed to a compatible podcast app
              and can listen during an appropriate moment, such as a commute or
              suitable administrative task. They hear the voices of leaders,
              managers and peers alongside the written material.
            </p>
            <p>
              Your episodes do not need to be polished like a public show. They
              need to be clear, honest and intentional. A ten minute episode on
              your origin story can provide a reusable companion to a live
              presentation. A short interview with a customer-facing teammate
              can add examples and tone while the wiki remains the source of
              truth.
            </p>
            <p>
              When you deliver this through private feeds designed for internal
              use, you can assign Tracks by audience and revoke future feed
              requests. Members choose playback order in their podcast app, and
              downloaded copies may remain after revocation.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How you can use audio in employee onboarding</h2>
              <p>
                You do not need to rebuild your entire onboarding to use audio.
                You can start small with a few focused use cases and expand from
                there.
              </p>
              <h3>Welcome and company story</h3>
              <p>
                Record a warm welcome from the founders or leadership team.
                Share why the company exists, what you are building and how you
                want people to feel when they work with you.
              </p>
              <h3>Culture, values and ways of working</h3>
              <p>
                Turn your values and operating principles into episodes with
                examples. Explain how decisions are made, how teams collaborate
                and what “good” looks like in daily work.
              </p>
              <h3>Product and customer basics</h3>
              <p>
                Create short explainers where product and customer teams talk
                through the problem you solve, your main features and who your
                customers are. New hires can revisit this content as many times
                as they need.
              </p>
              <h3>Role specific tracks</h3>
              <p>
                Add role based playlists for sales, support, marketing or
                engineering. Include episodes on tools, processes and common
                scenarios so each person feels better prepared in their first
                weeks.
              </p>
            </div>
            <aside className="callout callout--accent-2">
              <h3>Examples of onboarding episodes</h3>
              <ul>
                <li>“Our story in 10 minutes” from the founding team.</li>
                <li>
                  A conversation on how you work async and handle time zones.
                </li>
                <li>A walkthrough of your main product use cases from a PM.</li>
                <li>Short stories from teammates about their first 90 days.</li>
              </ul>
              <p>
                Together, these episodes form a reusable spoken path alongside
                the required documentation. Ask new hires how they used each
                format.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>What to evaluate in an onboarding-audio pilot</h2>
              <p>
                When you introduce internal audio into your onboarding, you are
                you are adding another route to existing onboarding. Measure
                access, understanding and connection separately.
              </p>
              <p>
                <strong>Spoken culture and context</strong>
              </p>
              <p>
                Voice carries nuance and emotion. New hires hear how leaders
                speak, what teams celebrate and how you talk about customers;
                feedback should test how they interpret it.
              </p>
              <p>
                <strong>More flexible first weeks</strong>
              </p>
              <p>
                People can spread optional audio across approved listening
                moments. Measure whether this changes calendar load, recall or
                satisfaction instead of assuming it does.
              </p>
              <p>
                <strong>Consistent experience across locations</strong>
              </p>
              <p>
                Publish one core recording for the invited cohorts, then retain
                local sessions and written material for role-specific context,
                questions and accessibility.
              </p>
              <p>
                <strong>Less repetition for managers</strong>
              </p>
              <p>
                Managers can record recurring explanatory context once and use
                live time for questions, mentoring and practice. Measure whether
                repetition or meeting time changes during the pilot.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>When audio onboarding is a good fit</h3>
              <p>Internal audio may be a useful onboarding pilot when you:</p>
              <ul>
                <li>Hire regularly across different teams or countries.</li>
                <li>
                  Already have good onboarding content but it is scattered.
                </li>
                <li>
                  Want to test how spoken leadership or customer context is
                  perceived.
                </li>
                <li>
                  Want to test a reusable format across onboarding cohorts.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How Brandscast supports employee onboarding with audio</h2>
              <p>
                Brandscast distributes <strong>employee onboarding</strong>{" "}
                Tracks through one private RSS feed per Member and records feed
                activity. Feed URLs remain bearer credentials and prior
                downloads may persist after revocation.
              </p>
              <p>With Brandscast, you can:</p>
              <ul>
                <li>
                  <strong>Create private onboarding audio</strong> for all new
                  hires or specific roles and regions.
                </li>
                <li>
                  <strong>
                    Group episodes into <a href="/tracks/">tracks</a>
                  </strong>{" "}
                  that match the first days, weeks or months of the employee
                  journey.
                </li>
                <li>
                  <strong>Invite new hires easily</strong> with private links
                  that work in compatible apps such as Apple Podcasts, Pocket
                  Casts, Overcast, AntennaPod and Podcast Addict.
                </li>
                <li>
                  <strong>Assign Tracks by cohort</strong> so each member feed
                  contains the onboarding content assigned to that role.
                </li>
                <li>
                  <strong>
                    Track{" "}
                    <a href="/employee-listening-analytics/">
                      listening activity
                    </a>
                  </strong>{" "}
                  to compare recorded starts and measured completion by episode.
                </li>
              </ul>
              <p>
                You do not need to build a custom system or manage public feeds.
                Brandscast gives you a focused tool for internal audio that fits
                modern onboarding.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>An onboarding channel that scales with you</h3>
              <p>
                As you grow, your onboarding needs evolve. With Brandscast, you
                can add new series, update episodes and create dedicated tracks
                without redesigning your full process each time.
              </p>
              <p>
                Test whether this structure makes the path clearer or changes
                repeated questions and manager time before expanding it.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to add internal audio to your onboarding in four steps
            </h2>
            <p>
              You do not need a big project to test employee onboarding with
              audio. A small, focused experiment is enough to see how it works
              for your team.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Pick one onboarding moment to improve</h3>
                <p>
                  Choose a specific part of your onboarding that would benefit
                  from audio. Your welcome message, your company story or a
                  product basics series. Start with one clear goal so you can
                  measure the impact.
                </p>
              </div>
              <div className="step">
                <h3>Outline a short series of episodes</h3>
                <p>
                  Define three to six episodes that cover the essentials for
                  that moment. Give each episode one main idea and keep them
                  short. Compare measured completion and feedback with any
                  longer material rather than assuming the format is easier.
                </p>
              </div>
              <div className="step">
                <h3>Upload and publish in Brandscast</h3>
                <p>
                  Record using a simple microphone and upload your episodes to
                  Brandscast. Create a private onboarding audio and invite the
                  next group of new hires. Share simple instructions on how to
                  subscribe and listen.
                </p>
              </div>
              <div className="step">
                <h3>Collect feedback and refine the journey</h3>
                <p>
                  After their first weeks, ask new hires how the audio helped
                  them and what was missing. Combine their feedback with
                  listening analytics. Use these insights to improve episodes
                  and decide which other parts of onboarding you want to move to
                  audio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={
                "Frequently asked questions about employee onboarding with audio"
              }
              items={[
                {
                  q: "Will new hires really listen to onboarding episodes",
                  a: "Do not assume adoption. Start with a defined cohort and measure invitation acceptance, subscription, starts, completion and qualitative feedback. Keep documents, training and live support available for the parts of onboarding that require them.",
                },
                {
                  q: "Do we need a full studio to start",
                  a: "No. A simple USB microphone and a quiet room are enough to begin. For internal onboarding, clarity matters more than perfect production. You can always improve quality later if you need to.",
                },
                {
                  q: "How do we keep onboarding content private",
                  a: "Each new hire receives a unique private feed and administrators can update assignments or revoke future feed requests. The feed URL is a bearer credential and downloaded files may persist, so apply your normal device and offboarding controls.",
                },
                {
                  q: "How does audio fit with our existing onboarding",
                  a: "Audio does not replace everything you do today. It complements your current onboarding by moving explanations and stories into a more human, flexible format. You can still use documents, training platforms and live sessions for practice and interaction.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Test private audio in employee onboarding"
          lead="Give a defined new-hire cohort another way to receive explanations and stories, while documents, training and live support remain in place."
          note="Set a baseline, invite one cohort and compare adoption and comprehension."
        />
      </main>

      <RelatedLinks
        links={[
          {
            href: "/training-and-compliance/",
            label: "Training and compliance",
          },
          { href: "/tracks/", label: "Tracks" },
          { href: "/hr-announcements/", label: "HR announcements" },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
