import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterFull from "@/components/FooterFull";
import { TRIAL_COPY } from "@/lib/pricing";
import PricingSection from "./PricingSection";
import {
  AppWindow,
  MockupAnalytics,
  MockupPodcast,
  MockupMembers,
} from "./AppMockups";

const HOME_TITLE =
  "Brandscast — internal communication your team actually hears";
const HOME_DESCRIPTION =
  "Half your company never reads the intranet. Turn what you already write into private audio for any podcast app — segmented by team, and you'll see who listened.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "https://brandscast.com/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: "/og-image.png",
  },
};

export default function HomePage() {
  return (
    <>
      <Header pricingHref="#pricing" />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          {/* Left: copy */}
          <div>
            <div className="eyebrow">Internal communication in audio</div>
            <h1>
              Half your company{" "}
              <span
                style={{
                  background:
                    "linear-gradient(180deg, var(--brand) 0%, #5b82ff 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                never got the message
              </span>
            </h1>
            <p className="lead">
              They were driving, on the floor or with a customer — not reading
              the intranet. Audio reaches them, and takes nothing from their
              day.
            </p>
            <div className="hero-cta">
              <a
                className="btn"
                href="https://app.brandscast.com/signup"
                target="_blank"
                rel="noopener"
              >
                Start trial{" "}
                <span
                  style={{
                    display: "inline-block",
                    transition: "transform .2s",
                  }}
                >
                  →
                </span>
              </a>
              <a className="btn outline" href="#pricing">
                See pricing
              </a>
            </div>
            <div className="hero-meta">
              <span className="check">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                30-day free trial
              </span>
              <span className="check">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Cancel anytime
              </span>
              <span className="check">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                No credit card required
              </span>
            </div>
          </div>

          {/* Right: product visual */}
          <div className="hero-visual">
            <div className="blob" />
            <div className="hero-card-wrap">
              {/* Phone player */}
              <div className="hero-phone" aria-hidden="true">
                <div className="hero-phone-inner">
                  <div className="hp-channel">
                    <span className="dot" /> Brandscast · Internal
                  </div>
                  <div className="hp-art">
                    <span className="glyph">
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="hp-title">Q2 Roadmap, in five minutes</div>
                  <div className="hp-sub">Hosted by Sarah · 4 min 32 sec</div>
                  <div className="hp-wave">
                    {[
                      30, 55, 80, 42, 68, 90, 72, 55, 40, 68, 84, 50, 30, 60,
                      78, 90, 65, 45, 30, 52, 70, 85, 72, 58, 40, 55, 72, 88,
                      60, 42, 28, 50, 68, 80, 65, 48, 30, 45,
                    ].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}%` }}
                        className={i > 17 ? "dim" : ""}
                      />
                    ))}
                  </div>
                  <div className="hp-time">
                    <span>1:42</span>
                    <span>-2:50</span>
                  </div>
                  <div className="hp-controls">
                    <button aria-label="Skip back">
                      <svg viewBox="0 0 24 24">
                        <path d="M11 19V5l-9 7 9 7zm2-14v14l9-7-9-7z" />
                      </svg>
                    </button>
                    <button className="play" aria-label="Play">
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <button aria-label="Skip forward">
                      <svg viewBox="0 0 24 24">
                        <path d="M13 5v14l9-7-9-7zm-2 14V5l-9 7 9 7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Chip: engagement */}
              <div className="float-chip top" aria-hidden="true">
                <span className="ic green">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="chip-label">
                  74% engaged
                  <span className="chip-sub">Last 30 days</span>
                </span>
              </div>

              {/* Chip: private feed */}
              <div className="float-chip mid" aria-hidden="true">
                <span className="ic brand">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6z" />
                    <path d="M9 12l2 2 4-5" />
                  </svg>
                </span>
                <span className="chip-label">
                  Private feed
                  <span className="chip-sub">Per employee</span>
                </span>
              </div>

              {/* Transcript card */}
              <div className="transcript-card" aria-hidden="true">
                <div className="tc-head">
                  <div className="tc-av">SM</div>
                  <div>
                    <div className="tc-nm">Sarah M.</div>
                    <div className="tc-role">CEO · Episode 12</div>
                  </div>
                </div>
                <div className="tc-line">
                  "Three things shipped this quarter, and the{" "}
                  <span className="hl">biggest unlock</span> is something the
                  whole team should hear about…"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NON-BLOCKING CHANNEL */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>
              The one channel that doesn&apos;t demand their full attention
            </h2>
            <p>
              Emails, slides and meetings all need 100% focus — so teams end up
              carving out time in the workday just to stay informed. Audio is
              different. It works alongside everything else your team is already
              doing.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <h3>Listen while doing something else</h3>
              <p>
                Working, commuting, having breakfast or at the gym — audio fits
                into moments your other channels can&apos;t reach.
              </p>
            </article>
            <article className="card">
              <div className="icon green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3>No time blocked off the day</h3>
              <p>
                No need to reserve a slot in the workday to read or watch.
                People stay informed without stepping away from their work.
              </p>
            </article>
            <article className="card">
              <div className="icon yellow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </div>
              <h3>Complementing channels</h3>
              <p>
                Audio doesn&apos;t replace email or chat — it reaches people in
                the moments those channels miss, so your message actually lands.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AI TOOLS */}
      <section>
        <div className="container">
          <div className="engagement-grid">
            <div>
              <div className="eyebrow">Nothing to produce</div>
              <h2>You don&apos;t have to make anything</h2>
              <p className="lead" style={{ marginBottom: "24px" }}>
                There is no step zero. Paste the update, the article or the
                report you already wrote — or upload the file — and it comes
                back as audio your team can listen to. No studio, no recording,
                no editing. And if you do want to speak in your own voice,
                Brandscast cleans up the recording for you.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#2e5af4",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>Text to audio</strong> — paste what you already
                    wrote, or upload a PDF, DOCX or TXT, and it comes back as
                    natural-sounding audio in minutes.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#22c55e",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>Audio enhancement</strong> — if you record it
                    yourself, it removes background noise, balances levels and
                    delivers broadcast-quality sound automatically.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#eab308",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>One shared monthly allowance</strong> — enhancement
                    and text-to-audio draw from the same pool of AI minutes on
                    every plan.
                  </span>
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "28px",
                }}
              >
                <a
                  href="/text-to-audio/"
                  style={{
                    color: "var(--brand)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Learn about text to audio →
                </a>
                <a
                  href="/audio-enhancement/"
                  style={{
                    color: "var(--brand)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Learn about audio enhancement →
                </a>
              </div>
            </div>

            {/* Text-to-audio card mock: the doc they already wrote → audio */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  Q3 update
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--tag-fg)",
                    background: "var(--tag-bg)",
                    border: "1px solid var(--brand-tint)",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    fontWeight: 600,
                  }}
                >
                  Pasted text
                </span>
              </div>

              {/* What they already wrote */}
              <div
                style={{
                  position: "relative",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  fontSize: "0.82rem",
                  lineHeight: 1.75,
                  color: "var(--muted)",
                  maxHeight: "104px",
                  overflow: "hidden",
                }}
              >
                Three things shipped this quarter, and the biggest unlock is
                something the whole team should hear about. First, the new
                onboarding flow cut setup time in half. Second, the plant in Vic
                is now running the same scheduling system as
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "42px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 85%)",
                  }}
                />
              </div>

              {/* The conversion */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  margin: "14px 0",
                  color: "var(--muted-2)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "16px", flexShrink: 0 }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
                Generated in 40 seconds
              </div>

              {/* The audio that comes back */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "999px",
                    background: "var(--brand)",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "14px" }}
                    fill="#fff"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    height: "32px",
                    flex: 1,
                  }}
                >
                  {[
                    14, 24, 18, 30, 22, 32, 26, 30, 20, 28, 32, 24, 16, 30, 26,
                    32, 22, 28, 16, 24, 32, 20, 30, 26, 14, 28, 20, 30, 24, 16,
                  ].map((h, i) => (
                    <span
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}px`,
                        borderRadius: "999px",
                        background: i < 11 ? "var(--brand)" : "var(--line)",
                        opacity: i < 11 ? 1 : 0.6,
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    fontVariantNumeric: "tabular-nums",
                    flexShrink: 0,
                  }}
                >
                  4:32
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  fontSize: "0.85rem",
                  color: "#15803d",
                  fontWeight: 500,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "16px", flexShrink: 0 }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Ready to send — nothing recorded, nothing edited
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-muted">
        <div className="container">
          <div className="section-head">
            <h2>Your team ignores emails. They&apos;ll press play on audio</h2>
            <p>Three steps and your team is listening.</p>
          </div>
          <div className="how-it-works-grid">
            {[
              {
                cls: "",
                title: "Paste what you already wrote",
                body: "An update, an article, a report — or upload the file. It comes out as audio.",
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                ),
              },
              {
                cls: "green",
                title: "Invite your team",
                body: "Add employees by email or import a CSV. Each one gets a private feed.",
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                cls: "yellow",
                title: "Listen from any app",
                body: "Overcast, Apple Podcasts, Pocket Casts — wherever they already listen.",
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
                    <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
                    <path d="M4 13a8 8 0 0 1 16 0" />
                  </svg>
                ),
              },
            ].flatMap((step, i) => [
              <article
                key={step.title}
                className="card"
                style={{ textAlign: "center" }}
              >
                <div className={`icon${step.cls ? ` ${step.cls}` : ""}`}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>,
              i < 2 && (
                <svg
                  key={`arrow-${i}`}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="hiw-arrow"
                  style={{
                    width: "24px",
                    color: "var(--muted)",
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            ])}
          </div>
        </div>
      </section>

      {/* WHY BRANDSCAST — private, segmented, measured */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Any tool can make a voice. This one knows who heard it</h2>
            <p>
              Turning text into speech is the easy part. What makes it internal
              communication is everything after: each person gets their own
              private feed, each group only hears what concerns them, and you
              find out who actually listened.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Private to each person</h3>
              <p>
                Every member gets their own authenticated feed — no public link,
                no shared password. When someone leaves, their access leaves
                with them.
              </p>
            </article>
            <article className="card">
              <div className="icon green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 6h18M7 12h10M11 18h2" />
                </svg>
              </div>
              <h3>Segmented by group</h3>
              <p>
                Sales hears sales, the plant hears the plant. One message, split
                by who needs it — not five programmes to produce.
              </p>
            </article>
            <article className="card">
              <div className="icon yellow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="6" y1="20" x2="6" y2="16" />
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                </svg>
              </div>
              <h3>And you&apos;ll know it landed</h3>
              <p>
                Not a number at the bottom of a report — the actual people who
                played it and the ones who didn&apos;t, so you can do something
                about it.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CREATE & PUBLISH */}
      <section className="section-muted">
        <div className="container">
          <div className="engagement-grid">
            <AppWindow url="app.brandscast.com/audio/q2-updates">
              <MockupPodcast />
            </AppWindow>
            <div>
              <div className="eyebrow">Create and publish</div>
              <h2>Create and publish, in minutes</h2>
              <p className="lead" style={{ marginBottom: "24px" }}>
                Paste your text or upload a recording, add a title, and your
                team has something new to listen to. No studio, no editing
                suite, and nothing for them to install.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Text or a recording — both come out as audio in minutes",
                  "Podcasts and Tracks — recurring updates, or a finite course people work through at their own pace",
                  "Nothing to install — it lands in the podcast app already on their phone, no new login or training",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "var(--brand-tint-2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: "10px",
                          height: "10px",
                          color: "var(--brand)",
                        }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "28px" }}>
                <a
                  href="/tracks/"
                  style={{
                    color: "var(--brand)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  See how tracks work →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOCKUP: Members */}
      <section>
        <div className="container">
          <div className="engagement-grid">
            <div>
              <div className="eyebrow">Member management</div>
              <h2>Your team, your rules</h2>
              <p className="lead" style={{ marginBottom: "24px" }}>
                Add members by email or import a CSV. Each one gets a private,
                authenticated feed — and you can revoke access instantly.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Per-member engagement rate with colour-coded bars",
                  "Filter by department, country or activity",
                  "Revoke access in one click when someone leaves",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "var(--brand-tint-2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: "10px",
                          height: "10px",
                          color: "var(--brand)",
                        }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <AppWindow url="app.brandscast.com/members">
              <MockupMembers />
            </AppWindow>
          </div>
        </div>
      </section>

      {/* SEGMENTATION */}
      <section className="section-muted">
        <div className="container">
          <div className="engagement-grid engagement-grid--reverse">
            <div>
              <div className="eyebrow">Targeted audio</div>
              <h2>The right audio for the right people</h2>
              <p className="lead" style={{ marginBottom: "24px" }}>
                Not everyone needs the same message. Split what you send by who
                needs to hear it, so each group only gets what&apos;s relevant
                to them — and nobody sits through the rest.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "By department — Sales, Engineering, People & Culture",
                  "By language — one message, localised per region",
                  "By level — leadership or manager-only updates",
                  "By team — a private feed for any group you define",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "var(--brand-tint-2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          width: "10px",
                          height: "10px",
                          color: "var(--brand)",
                        }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Segmented feeds mock */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "var(--shadow)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { name: "Leadership weekly", tag: "Managers", n: "12 members" },
                { name: "Sales kickoff", tag: "Sales · ES", n: "28 members" },
                {
                  name: "Engineering all-hands",
                  tag: "Engineering",
                  n: "45 members",
                },
                { name: "Company news", tag: "All staff", n: "210 members" },
              ].map((feed) => (
                <div
                  key={feed.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "var(--bg, #fafafa)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(46,90,244,.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{ width: "18px", height: "18px" }}
                      aria-hidden="true"
                    >
                      <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
                      <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
                      <path d="M4 13a8 8 0 0 1 16 0" />
                    </svg>
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                      {feed.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
                      {feed.n}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--brand)",
                      background: "var(--brand-tint-2)",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {feed.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER ENGAGEMENT */}
      <section>
        <div className="container">
          <div className="engagement-grid">
            <div>
              <div className="eyebrow">Listening analytics</div>
              <h2>See who's listening, not just how many</h2>
              <p className="lead" style={{ marginBottom: "24px" }}>
                Most tools give you a number. Brandscast shows you who's engaged
                and who hasn't listened yet, so you can do something about it.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#22c55e",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>Active members</strong> — people who have listened
                    to at least one episode and are part of your engaged
                    audience.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#eab308",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>Low engagement</strong> — members who listen
                    occasionally and may need more relevant content.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#ef4444",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>Inactive members</strong> — people who have never
                    listened and may need a nudge or a different format.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#6366f1",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>Sector benchmark</strong> — see how your engagement
                    rate compares to the average in your industry so you always
                    know where you stand.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#0ea5e9",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  ></span>
                  <span>
                    <strong>Shareable PDF reports</strong> — download a full
                    analytics report in one click and share it with leadership
                    or stakeholders.
                  </span>
                </li>
              </ul>
              <div
                style={{
                  marginTop: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <a
                  href="/employee-listening-analytics/"
                  style={{
                    color: "var(--brand)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Learn about employee listening analytics →
                </a>
                <a
                  href="/employee-engagement-benchmarks/"
                  style={{
                    color: "var(--brand)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  See engagement benchmarks by industry →
                </a>
              </div>
            </div>

            <AppWindow url="app.brandscast.com/analytics">
              <MockupAnalytics />
            </AppWindow>
          </div>
        </div>
      </section>

      {/* HR TEAMS */}
      <section className="section-muted">
        <div className="container">
          <div className="section-head">
            <h2>For HR teams, better communication and stronger culture</h2>
            <p>
              Share updates, culture and training with everyone. No more town
              halls that drain time and energy.
            </p>
          </div>
          <div className="cards cards--4">
            <article className="card">
              <div className="icon yellow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6l4 2" />
                </svg>
              </div>
              <h3>Save time</h3>
              <p>Reduce meeting fatigue and cut internal noise.</p>
            </article>
            <article className="card">
              <div className="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3c3.5 3.6 3.5 14.4 0 18" />
                  <path d="M12 3c-3.5 3.6-3.5 14.4 0 18" />
                </svg>
              </div>
              <h3>Reach everyone</h3>
              <p>Communicate consistently across remote and hybrid teams.</p>
            </article>
            <article className="card">
              <div className="icon green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </div>
              <h3>Build culture</h3>
              <p>Share authentic messages that strengthen team connection.</p>
            </article>
            <article className="card">
              <div className="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Control access</h3>
              <p>
                Invite by email or CSV. Revoke access instantly when someone
                leaves.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <PricingSection />

      {/* SECURITY */}
      <section className="section-muted">
        <div className="container">
          <div className="section-head">
            <h2>Security built for business</h2>
            <p>
              Private audio feeds, GDPR compliance and reliable infrastructure
              you can trust.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="icon red">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6z" />
                  <path d="M9 12l2 2 4-5" />
                </svg>
              </div>
              <h3>Private feeds</h3>
              <p>
                Each feed is generated privately and shared only with your team.
              </p>
            </article>
            <article className="card">
              <div className="icon yellow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 8h6" />
                  <path d="M8 12h6" />
                  <path d="M8 16h6" />
                  <path d="M16 7a3 3 0 0 0-2 5 3 3 0 0 0 2 5" />
                </svg>
              </div>
              <h3>GDPR compliant</h3>
              <p>Hosted in Europe with EU regulations compliance.</p>
            </article>
            <article className="card">
              <div className="icon green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 4 4 6-7" />
                </svg>
              </div>
              <h3>Scalable and reliable</h3>
              <p>
                Built to grow with your company and ensure consistent
                performance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-head">
            <h2>FAQs</h2>
            <p>Everything you need to know before getting started.</p>
          </div>
          <div className="faq-home">
            <details>
              <summary>Is it easy to set up?</summary>
              <p>Yes, invite your team manually or upload a CSV file.</p>
            </details>
            <details>
              <summary>Can we cancel anytime?</summary>
              <p>Yes, with no hidden fees or long term contracts.</p>
            </details>
            <details>
              <summary>Do employees need an app?</summary>
              <p>No, they can listen in their usual podcast players.</p>
            </details>
            <details>
              <summary>Why not just use Spotify?</summary>
              <p>
                Public platforms give you no control over who listens, no
                individual analytics, and no way to revoke access when someone
                leaves. They were built for growing a general audience, not for
                reaching a specific group of employees securely.{" "}
                <a href="/private-vs-public-podcast/">
                  See the full comparison →
                </a>
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SIGNUP CTA */}
      <section className="section-brand" id="signup">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Ready to simplify your internal communication?</h2>
          <p className="lead">
            Create your first private audio in minutes and keep your team
            aligned.
          </p>
          <a
            className="btn"
            href="https://app.brandscast.com/signup"
            target="_blank"
            rel="noopener"
          >
            Start trial
          </a>
          <p style={{ marginTop: "1rem", color: "var(--muted)" }}>
            {TRIAL_COPY}
          </p>
        </div>
      </section>

      <FooterFull />
    </>
  );
}
