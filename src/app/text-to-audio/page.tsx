import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import { PRICING_PLANS } from "@/lib/pricing";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Text to audio for internal communication | Brandscast",
  description:
    "Turn documents, PDFs and written updates into natural-sounding audio episodes with AI. Paste your text, pick a voice and publish — no recording or editing required.",
  alternates: { canonical: "https://brandscast.com/text-to-audio/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/text-to-audio",
    title: "Text to audio for internal communication | Brandscast",
    description:
      "Paste a document or upload a PDF and AI turns it into a natural-sounding audio episode — no recording, no editing.",
    images: "/Podcasters.webp",
  },
};

export default function TextToAudioPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Text to audio</div>
          <h1>Turn any document into an audio episode — with AI</h1>
          <p className="lead">
            Most internal knowledge already exists in writing: policy updates,
            release notes, onboarding docs, newsletters. Brandscast turns that
            text into a natural-sounding audio episode automatically, so your
            team can listen instead of finding time to read.
          </p>
          <p className="hero-meta">
            On this page you will learn how text to audio works, when to use it,
            and how it fits into your publishing workflow.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why turn written content into audio</h2>
              <p>
                Written updates compete with hundreds of other messages.
                Important documents get skimmed, bookmarked &ldquo;for
                later&rdquo; and forgotten. Audio is the one{" "}
                <a href="/internal-communication/">internal communication</a>{" "}
                channel people can consume while doing something else —
                commuting, walking, between tasks — so the message actually
                lands.
              </p>
              <p>
                But recording takes time, a quiet room and someone comfortable
                on a microphone. Text to audio removes that barrier entirely.
                You bring the content you have already written, and Brandscast
                produces the episode.
              </p>
              <p>
                It is the fastest way to get more of your{" "}
                <a href="/private-podcasts-for-teams/">internal audio</a>{" "}
                programme out the door without adding to anyone&rsquo;s
                workload.
              </p>
            </div>

            <aside className="callout callout--accent">
              <h3>Great for content like</h3>
              <ul>
                <li>Policy and HR announcements</li>
                <li>Product release notes and changelogs</li>
                <li>Onboarding and training documents</li>
                <li>Company newsletters and updates</li>
              </ul>
              <div className="tag-list">
                <span className="tag">text to speech</span>
                <span className="tag">AI voice</span>
                <span className="tag">audio episodes</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>How text to audio works in Brandscast</h2>
            <p>
              When you create a new episode, you can choose &ldquo;Generate from
              text&rdquo; instead of uploading a recording. Paste your text or
              upload a PDF, DOCX or TXT file, pick a voice, and Brandscast does
              the rest in the background. A few minutes later your episode is
              ready as a draft for you to review and publish.
            </p>

            <h3>What happens behind the scenes</h3>
            <p>
              AI first adapts your written text into a script that sounds
              natural when spoken — handling headings, lists and formatting that
              would otherwise read awkwardly out loud. It then generates a
              clear, natural-sounding voice track and runs it through the same
              audio pipeline as every other episode, so the result is ready to
              distribute through your private feeds.
            </p>

            <h3>You stay in control</h3>
            <p>
              Generated episodes land as drafts, not published content. You
              review the audio, edit the title and description, set the cover
              and choose when it goes live — exactly like an episode you
              recorded yourself.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Built for teams with more to say than time to record</h2>
              <p>
                Internal communicators rarely have a shortage of content — they
                have a shortage of time. Text to audio lets a small team keep a
                consistent publishing cadence by converting the written material
                they already produce, without booking studio time or chasing
                busy executives for a recording.
              </p>

              <h3>Pairs naturally with recorded episodes</h3>
              <p>
                Use recordings for the personal, high-trust messages — a leader
                speaking directly to the company — and text to audio for the
                steady stream of informational updates. Together they keep your{" "}
                <a href="/leadership-updates/">internal audio channel</a> active
                without overwhelming anyone.
              </p>

              <h3>Multiple voices to match your content</h3>
              <p>
                Choose from a range of natural voices so the tone fits the
                message, whether it is a formal compliance update or a relaxed
                culture story.
              </p>
            </div>

            <aside className="callout callout--accent-2">
              <h3>Typical use cases</h3>
              <ul>
                <li>Weekly written updates published as audio</li>
                <li>Long policy documents made listenable</li>
                <li>Release notes for distributed product teams</li>
                <li>Onboarding material employees can play on the go</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to create an episode from text
            </h2>

            <div className="step-list">
              <div className="step">
                <h3>Choose &ldquo;Generate from text&rdquo;</h3>
                <p>
                  When creating a new episode, pick the text-to-audio option
                  instead of uploading an audio file.
                </p>
              </div>

              <div className="step">
                <h3>Add your content and pick a voice</h3>
                <p>
                  Paste your text or upload a PDF, DOCX or TXT file, then choose
                  the voice that fits your message.
                </p>
              </div>

              <div className="step">
                <h3>Wait for the confirmation email</h3>
                <p>
                  Generation runs in the background and takes a few minutes
                  depending on length. You get an email when the draft is ready.
                </p>
              </div>

              <div className="step">
                <h3>Review and publish</h3>
                <p>
                  Listen to the generated episode, tweak the details and publish
                  — listeners receive it through their private feeds like any
                  other episode.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>AI tools limits by plan</h2>
            <p>
              Text to audio is available on every paid Brandscast plan. It
              shares a single monthly allowance of AI minutes with{" "}
              <a href="/audio-enhancement/">audio enhancement</a>, so you can
              spend your minutes on whichever tool you need. The size of that
              allowance depends on your plan.
            </p>

            <div className="three-cols" style={{ marginTop: "1.5rem" }}>
              {PRICING_PLANS.map((plan) => (
                <aside key={plan.slug} className="highlight-box">
                  <h3>{plan.name}</h3>
                  <p>
                    {plan.aiToolsMinutes} minutes of AI tools (audio enhancement
                    and text-to-audio) per month.
                  </p>
                  <p>
                    {plan.slug === "starter"
                      ? "Enough for roughly four 15-minute episodes or two 30-minute episodes each month."
                      : plan.slug === "growth"
                        ? "Suitable for teams publishing multiple episodes per week or longer-form content on a regular cadence."
                        : "Built for heavier publishing schedules, larger teams and programmes with frequent AI generation needs."}
                  </p>
                </aside>
              ))}
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              Minutes reset at the start of each billing cycle. Unused minutes
              do not roll over. The same pool covers both audio enhancement and
              text to audio.
            </p>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <Faq
              heading={"Frequently asked questions about text to audio"}
              items={[
                {
                  q: "What file types can I convert to audio",
                  a: "You can paste text directly or upload a PDF, DOCX or TXT file. Brandscast extracts the text, adapts it into a natural script and generates the audio for you.",
                },
                {
                  q: "Does the audio sound robotic",
                  a: "No. Text to audio uses modern AI voices designed to sound natural and conversational. The text is also rewritten into a spoken-friendly script first, so it does not read like a document being narrated word for word.",
                },
                {
                  q: "Can I review the episode before it goes live",
                  a: "Yes. Generated episodes are created as drafts. You listen to the result, edit the title, description and cover, and choose when to publish — nothing goes out automatically.",
                },
                {
                  q: "How do the AI minutes work",
                  a: "Audio enhancement and text to audio share one monthly allowance of AI minutes that depends on your plan. You can use those minutes on either tool. They reset each billing cycle and do not roll over.",
                },
                {
                  q: "Is text to audio available on the free trial",
                  a: "Text to audio is a paid feature available on Starter, Growth and Pro. You can start a 30-day free trial without a credit card to explore Brandscast and upgrade when you are ready to generate episodes from text.",
                },
              ]}
            />
          </div>
        </section>

        <CtaSection
          title="Start your free trial — no credit card required"
          lead="Try text to audio and every other Brandscast feature free for 30 days."
          note="Bring the content you have already written and publish it as audio."
        />
      </main>

      <RelatedLinks
        links={[
          { href: "/audio-enhancement/", label: "Audio enhancement" },
          {
            href: "/private-podcasts-for-teams/",
            label: "Private podcasts for teams",
          },
          {
            href: "/employee-listening-analytics/",
            label: "Listening analytics",
          },
          { href: "/rss-distribution/", label: "RSS distribution" },
          { href: "/features/", label: "All features" },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
