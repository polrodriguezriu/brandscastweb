import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import { PRICING_PLANS } from "@/lib/pricing";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Audio enhancement for internal podcasts | Brandscast",
  description:
    "Automatically remove background noise, balance levels and improve audio quality with one click. No audio editing skills required. Built for teams that record on the go.",
  alternates: { canonical: "https://brandscast.com/audio-enhancement/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/audio-enhancement",
    title: "Audio enhancement for internal podcasts | Brandscast",
    description:
      "One click to remove noise, fix levels and make your internal podcast sound professional — no editing skills needed.",
    images: "/Podcasters.webp",
  },
};

export default function AudioEnhancementPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Audio enhancement</div>
          <h1>Make every episode sound professional — with one click</h1>
          <p className="lead">
            Internal podcasts are often recorded on a phone, in a home office or
            on the road. Brandscast automatically removes background noise,
            balances audio levels and delivers broadcast-quality sound — no
            audio editing skills required.
          </p>
          <p className="hero-meta">
            On this page you will learn how audio enhancement works, what it
            fixes automatically, and how it fits into your publishing workflow.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why audio quality matters for internal podcasts</h2>
              <p>
                When employees listen to an{" "}
                <a href="/private-podcasts-for-teams/">internal podcast</a>, the
                first thing they notice is not the message — it is the sound. A
                noisy recording or uneven volume makes people tune out before
                the content even starts.
              </p>
              <p>
                Most <a href="/for-internal-comms/">internal communicators</a>{" "}
                are not audio engineers. They record on a phone, a laptop
                microphone or in a room that was not designed for it. The result
                is often background hum, echo, volume spikes and audio that
                sounds amateur compared to the podcasts employees listen to in
                their own time.
              </p>
              <p>
                Audio enhancement in Brandscast closes that gap automatically.
                You upload the recording and Brandscast takes care of the rest.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>What enhancement fixes automatically</h3>
              <ul>
                <li>Background noise and room hum</li>
                <li>Uneven volume levels</li>
                <li>Frequency imbalances (thin or muddy sound)</li>
                <li>Loudness normalisation to broadcast standard</li>
              </ul>
              <div className="tag-list">
                <span className="tag">noise removal</span>
                <span className="tag">audio quality</span>
                <span className="tag">podcast production</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>How audio enhancement works in Brandscast</h2>
            <p>
              When you edit an episode, you will see an &ldquo;Enhance
              audio&rdquo; button alongside the upload controls. Click it and
              Brandscast sends your audio through an automated processing
              pipeline. A few minutes later, the enhanced version replaces the
              original and you receive an email confirmation.
            </p>

            <h3>What happens behind the scenes</h3>
            <p>
              Brandscast uses adaptive noise reduction to detect and suppress
              background sounds like air conditioning, keyboard clicks and room
              ambience. Voice equalisation balances the frequency range so the
              speaker sounds clear regardless of the microphone used. Loudness
              normalisation brings the episode to -16 LUFS, the standard used by
              professional podcast producers.
            </p>

            <h3>No export, no software, no extra steps</h3>
            <p>
              Everything happens inside Brandscast. You do not need to download
              your audio, open a separate tool, export a file and re-upload. The
              enhanced file is stored in your account and all existing listener
              RSS feeds update automatically.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Built for teams that record without a studio</h2>
              <p>
                Professional podcast studios are not realistic for most internal
                communicators. Leaders record updates between meetings. Field
                teams send audio from the road. HR teams record in open offices.
                Enhancement is designed to make all of these sound acceptable to
                listeners without any post-production work.
              </p>

              <h3>Especially useful for remote and distributed teams</h3>
              <p>
                When contributors record from different locations, microphone
                quality and room acoustics vary significantly between episodes
                or even within the same episode. Enhancement creates a
                consistent, professional baseline across all recordings without
                anyone needing to adjust their setup.
              </p>

              <h3>Keeps your original file safe</h3>
              <p>
                If you ever want to revert to the original recording, it is
                available for 30 days after enhancement. The process is
                non-destructive and reversible.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>Typical use cases</h3>
              <ul>
                <li>Leadership updates recorded on a phone</li>
                <li>Field team reports from noisy environments</li>
                <li>Remote contributors with budget microphones</li>
                <li>Episodes with multiple speakers at different volumes</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to enhance an episode in Brandscast
            </h2>

            <div className="step-list">
              <div className="step">
                <h3>1. Upload your episode</h3>
                <p>
                  Record your audio however works for your team — phone, laptop
                  mic, voice memo — and upload it to Brandscast as usual.
                </p>
              </div>

              <div className="step">
                <h3>2. Click &ldquo;Enhance audio&rdquo;</h3>
                <p>
                  On the episode edit page, click the Enhance audio button.
                  Brandscast queues the file for processing automatically.
                </p>
              </div>

              <div className="step">
                <h3>3. Wait for the confirmation email</h3>
                <p>
                  Processing takes a few minutes depending on episode length.
                  You will receive an email when the enhanced version is ready.
                </p>
              </div>

              <div className="step">
                <h3>4. Publish — listeners get the improved audio</h3>
                <p>
                  The enhanced file is live in your podcast. All existing
                  listener feeds update automatically. No extra steps needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>Enhancement limits by plan</h2>
            <p>
              Audio enhancement is available on all Brandscast plans. The amount
              of audio you can enhance per month depends on your plan.
            </p>

            <div className="two-cols" style={{ marginTop: "1.5rem" }}>
              {PRICING_PLANS.map((plan) => (
                <aside key={plan.slug} className="highlight-box">
                  <h3>{plan.name}</h3>
                  <p>
                    {plan.enhancementMinutes} minutes of audio enhancement per
                    month.
                  </p>
                  <p>
                    {plan.slug === "starter"
                      ? "Enough for roughly four 15-minute episodes or two 30-minute episodes each month."
                      : plan.slug === "growth"
                        ? "Suitable for teams publishing multiple episodes per week or longer-form content on a regular cadence."
                        : "Built for heavier publishing schedules, larger teams and programmes with frequent enhancement needs."}
                  </p>
                </aside>
              ))}
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              Minutes reset at the start of each billing cycle. Unused minutes
              do not roll over. If an episode fails to process, the minutes are
              not deducted.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>Frequently asked questions about audio enhancement</h2>

            <div className="faq">
              <details>
                <summary>
                  What types of audio problems does enhancement fix
                </summary>
                <p>
                  Enhancement targets the most common issues in non-studio
                  recordings: background noise (HVAC, room hum, ambient sounds),
                  uneven volume between speakers, frequency imbalances that make
                  voices sound thin or muffled, and overall loudness that is too
                  quiet or too loud compared to professional podcasts.
                </p>
              </details>

              <details>
                <summary>
                  Does enhancement work on recordings with multiple speakers
                </summary>
                <p>
                  Yes. The processing applies to the entire audio file and
                  balances overall levels across the recording. For best results
                  with multi-speaker episodes, record each person at a similar
                  distance from their microphone.
                </p>
              </details>

              <details>
                <summary>
                  Can I undo an enhancement after it has been applied
                </summary>
                <p>
                  Yes. The original file is kept for 30 days after enhancement.
                  You can revert to the original recording from the episode edit
                  page at any time within that window.
                </p>
              </details>

              <details>
                <summary>
                  Do my listeners need to do anything when an episode is
                  enhanced
                </summary>
                <p>
                  No. Enhanced audio replaces the original file at the same
                  location. Listeners accessing episodes through the web player
                  or their personal RSS feed will automatically get the improved
                  version.
                </p>
              </details>

              <details>
                <summary>What audio formats are supported</summary>
                <p>
                  Brandscast supports the most common podcast audio formats
                  including MP3, M4A and WAV. Enhancement works with any
                  supported format and the output is delivered in the same
                  format as the original.
                </p>
              </details>
            </div>
          </div>
        </section>

        <CtaSection
          title="Start your free trial — no credit card required"
          lead="Try audio enhancement and every other Brandscast feature free for 30 days."
          note="Your first episode enhancement is included in the trial."
        />
      </main>

      <RelatedLinks
        links={[
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
