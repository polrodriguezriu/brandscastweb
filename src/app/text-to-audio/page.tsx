import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import Faq from "@/components/Faq";
import RelatedLinks from "@/components/RelatedLinks";
import { PRICING_PLANS } from "@/lib/pricing";
import ExampleJourney from "./ExampleJourney";
import TrialLink from "./TrialLink";
import { exampleSource, exampleTranscript } from "./example-content";
import "./text-to-audio.css";

export const metadata: Metadata = {
  title: "Text to audio for internal communication | Brandscast",
  description:
    "Give your next team update an audio version. Hear an example, explore private distribution and try your own document with Brandscast.",
  alternates: { canonical: "https://brandscast.com/text-to-audio/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/text-to-audio/",
    title: "Your next team update, also in audio | Brandscast",
    description:
      "From an existing written update to reviewed audio and a private feed for your team. Explore the example and try the full journey.",
    images: "/Podcasters.webp",
  },
};

export default function TextToAudioPage() {
  return (
    <>
      <Header />
      <main className="tta-page">
        <section className="tta-hero">
          <div className="container tta-hero-inner">
            <div>
              <div className="eyebrow">
                Text to audio · For your internal updates
              </div>
              <h1>
                Give your next team update <span>an audio version.</span>
              </h1>
              <p className="tta-lead">
                Start with the update you’ve already written. Review the audio,
                choose who receives it, and share it through private feeds in
                compatible podcast apps.
              </p>
              <div className="tta-actions">
                <TrialLink placement="hero" />
                <a className="btn outline" href="#example">
                  Explore the example <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="tta-trial-note">
                30-day free trial. No credit card.
                <br />5 AI minutes shared by text-to-audio and enhancement for
                the entire trial.
              </p>
            </div>
            <aside
              className="tta-hero-aside"
              aria-label="From a written update to a recurring audio channel"
            >
              <span className="tta-kicker">You already have the story.</span>
              <div className="tta-hero-path">
                <p>
                  <span aria-hidden="true">01</span>
                  <strong>Your written update</strong>
                  <small>The newsletter you already send.</small>
                </p>
                <p>
                  <span aria-hidden="true">02</span>
                  <strong>A voice for your message</strong>
                  <small>An AI draft you review first.</small>
                </p>
                <p>
                  <span aria-hidden="true">03</span>
                  <strong>Your team’s private feed</strong>
                  <small>This week’s update. And the next.</small>
                </p>
              </div>
              <p className="tta-small">
                Audio alongside the written version, for moments when listening
                fits.
              </p>
            </aside>
          </div>
        </section>

        <section
          className="tta-section"
          id="example"
          aria-labelledby="example-heading"
        >
          <div className="container">
            <div className="tta-section-heading">
              <div>
                <span className="tta-kicker">
                  A small update. The whole journey.
                </span>
                <h2 id="example-heading">
                  See it written. Hear it spoken.
                  <br />
                  See how it reaches your team.
                </h2>
              </div>
              <p>
                Follow a fictional Operations update from source text to the
                Member’s phone. No signup needed to explore.
              </p>
            </div>
            <ExampleJourney
              source={exampleSource}
              transcript={exampleTranscript}
            />
          </div>
        </section>

        <section
          className="tta-section tta-tint"
          aria-labelledby="own-update-heading"
        >
          <div className="container tta-own-update">
            <div>
              <span className="tta-kicker">Then make it yours</span>
              <h2 id="own-update-heading">
                Try the full flow
                <br />
                with your next update.
              </h2>
              <p>
                Choose a short piece you have permission to share. Keep its
                written version in your usual channel and add audio as another
                option.
              </p>
              <a className="tta-text-link" href="/help/">
                Open the step-by-step Help Center ↗
              </a>
            </div>
            <ol className="tta-checklist">
              <li>
                <strong>Create your account and verify your email.</strong>
                <span>
                  Start a trial, then create a Track to hold your recurring
                  updates.
                </span>
              </li>
              <li>
                <strong>Generate and review your first draft.</strong>
                <span>
                  Choose Generate from text, add the document and pick a voice.
                  Check the estimate against your remaining AI minutes, then
                  listen before publishing.
                </span>
              </li>
              <li>
                <strong>Publish and test private distribution.</strong>
                <span>
                  Publish the episode and Track. Add yourself as a Member with
                  an email you control, follow the invitation and subscribe in a
                  compatible app. Then invite your intended audience.
                </span>
              </li>
              <li>
                <strong>Plan the next update.</strong>
                <span>
                  Use the same Track and audience for your next communication.
                  Choose a paid plan in Plans when you’re ready to continue.
                </span>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="tta-section"
          id="purchase"
          aria-labelledby="purchase-heading"
        >
          <div className="container">
            <div className="tta-section-heading">
              <div>
                <span className="tta-kicker">
                  From a first listen to a regular channel
                </span>
                <h2 id="purchase-heading">Know what you’re choosing.</h2>
              </div>
              <p>
                Brandscast combines audio creation with private distribution,
                audience management and recorded listening activity.
              </p>
            </div>
            <div className="tta-plan-grid">
              <article className="tta-trial-card">
                <span className="tta-kicker">Start with your own content</span>
                <h3>Your 30-day trial</h3>
                <p className="tta-plan-value">
                  5 <span>shared AI minutes</span>
                </p>
                <p>
                  For text-to-audio and audio enhancement combined, across your
                  organisation. The allowance is for the whole trial and does
                  not renew.
                </p>
                <p>
                  Email verification is required. No credit card is needed to
                  start.
                </p>
              </article>
              {PRICING_PLANS.map((plan) => (
                <article className="tta-plan-card" key={plan.slug}>
                  <span className="tta-kicker">Self-service subscription</span>
                  <h3>{plan.name}</h3>
                  <p className="tta-plan-value">
                    {plan.members} <span>Members</span>
                  </p>
                  <p>
                    {plan.users.replace("users", "Users")} ·{" "}
                    {plan.aiToolsMinutes} shared AI minutes per month
                  </p>
                  <p>
                    Monthly: €{plan.monthlyPrice} / ${plan.monthlyPrice}.<br />
                    Annual: €{plan.yearlyPrice * 12} / ${plan.yearlyPrice * 12},
                    billed yearly.
                  </p>
                  <a className="tta-text-link" href="/#pricing">
                    Compare plans ↗
                  </a>
                </article>
              ))}
            </div>
            <div className="tta-purchase-notes">
              <p>
                <strong>Buy and manage it in the app.</strong> The Account Owner
                chooses the plan and billing period in Plans. Check the
                currency, tax and final total at checkout. Paid AI minutes reset
                monthly and do not roll over.
              </p>
              <p>
                <strong>Need an Enterprise arrangement?</strong> For larger
                audiences or custom requirements,{" "}
                <a href="mailto:hello@brandscast.com">
                  contact us about Enterprise
                </a>
                .
              </p>
            </div>
            <div className="tta-answers">
              <Faq
                heading="A few things to know before you start"
                items={[
                  {
                    q: "Can I review the audio before anyone receives it?",
                    a: "Yes. Generated episodes start as drafts. Listen first, check facts and pronunciation, and edit the title, description and cover. Publish both the episode and its Track when you are ready. The AI voice is synthetic; it is not a clone of a colleague’s voice.",
                  },
                  {
                    q: "What can I upload, and will it fit in the trial?",
                    a: "Paste text or upload a TXT, DOCX or PDF. Start with a short update and check the estimated minutes before generating. The five-minute allowance is shared across text-to-audio and enhancement for the entire trial, with no renewal. Longer documents or another generation may require a paid plan. Review scanned or image-heavy documents carefully: descriptions of images are not a verbatim transcription.",
                  },
                  {
                    q: "How do Members listen?",
                    a: "Members open their invitation, choose a compatible podcast app and subscribe with their personal feed link. Apple Podcasts, Overcast, Pocket Casts, AntennaPod and Podcast Addict support this workflow. Spotify does not. Members use their podcast app to listen; the Brandscast web dashboard is for publishing Users.",
                  },
                  {
                    q: "What stays private?",
                    a: "Your episodes are distributed through authenticated personal feeds rather than a public podcast directory. Treat each feed link as a credential: someone it is forwarded to can use it. Removing access blocks future protected requests, but cannot erase files already downloaded. This page’s fictional audio sample is deliberately public.",
                  },
                  {
                    q: "Why keep using Brandscast after the first document?",
                    a: "Publish future updates to the same Track, manage who receives them and keep a recurring private audio channel alongside your written communications. Recorded listening activity helps you compare episodes; it does not prove comprehension. The service includes this distribution and management, as well as the AI-minute allowance.",
                  },
                  {
                    q: "How do billing and cancellation work?",
                    a: "Growth and Pro can be purchased directly in the app, with monthly or annual billing. The Account Owner can cancel an active subscription from Plans; cancellation takes effect at the end of the current billing period. Your free Brandscast trial does not require a card or automatically charge you. Review the final currency, tax and billing interval at checkout.",
                  },
                  {
                    q: "Where can I get help?",
                    a: (
                      <>
                        {" "}
                        <p>
                          The <a href="/help/">Help Center</a> covers setup,
                          Member access and billing. For a technical issue, use
                          its support contact and describe what went wrong.
                          There is no published guaranteed response time. Growth
                          and Pro are self-service; no sales call is required to
                          choose or buy a plan.
                        </p>
                        <p>
                          Read our <a href="/privacy/">privacy policy</a> and{" "}
                          <a href="/legal/#contracting-terms">
                            contracting terms and legal notice
                          </a>
                          .
                        </p>
                      </>
                    ),
                    aText:
                      "The Help Center covers setup, Member access and billing. For a technical issue, use its support contact and describe what went wrong. There is no published guaranteed response time. Growth and Pro are self-service; no sales call is required to choose or buy a plan. Read our privacy policy and contracting terms.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="tta-final">
          <div className="container">
            <span className="tta-kicker">
              Your next update is the starting point
            </span>
            <h2>
              You’ve written it.
              <br />
              Now give your team a way to hear it.
            </h2>
            <TrialLink placement="footer" />
            <p>
              30 days free · No credit card · 5 shared AI minutes for the whole
              trial
            </p>
          </div>
        </section>
      </main>
      <RelatedLinks
        links={[
          { href: "/audio-enhancement/", label: "Audio enhancement" },
          {
            href: "/private-podcasts-for-teams/",
            label: "Private podcasts for teams",
          },
          { href: "/rss-distribution/", label: "RSS distribution" },
          {
            href: "/employee-listening-analytics/",
            label: "Listening analytics",
          },
        ]}
      />
      <FooterMinimal />
    </>
  );
}
