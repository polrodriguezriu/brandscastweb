import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterFull from "@/components/FooterFull";
import PricingSection from "./PricingSection";

export const metadata: Metadata = {
  title: "Brandscast — align your team with private podcasts",
  description:
    "Keep your team aligned without endless meetings or unread emails. Share updates, culture and knowledge through private podcasts employees actually listen to.",
  alternates: { canonical: "https://brandscast.com/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/",
    title: "Brandscast — align your team with private podcasts",
    description:
      "Keep your team aligned without endless meetings or unread emails. Share updates, culture and knowledge through private podcasts employees actually listen to.",
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
          <div>
            <div className="eyebrow">Internal communication, simplified</div>
            <h1>
              Keep everyone aligned:{" "}
              <span style={{ color: "var(--brand)" }}>
                no meetings, no unread emails
              </span>
            </h1>
            <p className="lead">
              Share updates, culture and knowledge through private podcasts your
              team can listen to anywhere.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                className="btn"
                href="https://app.brandscast.com/signup"
                target="_blank"
                rel="noopener"
              >
                Start trial
              </a>
              <a className="btn outline" href="#pricing">
                See pricing
              </a>
            </div>
            <div className="hero-podcatchers">
              <p className="hero-podcatchers-label">
                Listen from your favourite podcast app
              </p>
              <img
                src="/Podcatchers.png"
                alt="Logos of podcast apps where employees can listen to Brandscast episodes"
              />
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-duo">
              <img
                className="hero-duo-img hero-duo-img--1"
                src="/podcaster-1.webp"
                alt="Podcaster recording"
              />
              <img
                className="hero-duo-img hero-duo-img--2"
                src="/podcaster-2.webp"
                alt="Podcaster recording"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-muted">
        <div className="container">
          <div className="section-head">
            <h2>Your team ignores emails. They&apos;ll listen to a podcast</h2>
            <p>Three steps and your team is listening.</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr",
              gap: "16px",
              alignItems: "center",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            {[
              {
                cls: "",
                title: "Create your podcast",
                body: "Upload an episode or record one. Takes less than 5 minutes.",
                icon: (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                    <path d="M12 18v5" />
                    <path d="M8 23h8" />
                  </svg>
                ),
              },
              {
                cls: "green",
                title: "Invite your team",
                body: "Add employees by email or upload a CSV. Each person gets a private feed.",
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
                body: "Spotify, Apple Podcasts, Pocket Casts — wherever they already listen.",
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

      {/* CUT MEETINGS */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Cut meetings, not communication</h2>
            <p>
              Record once and share with everyone. Secure, private and easy for
              any team.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                  <path d="M12 18v5" />
                  <path d="M8 23h8" />
                </svg>
              </div>
              <h3>Record once and reach all</h3>
              <p>
                Replace recurring status meetings with short audio updates
                people can hear on their own time.
              </p>
            </article>
            <article className="card">
              <div className="icon red">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11V7a4 4 0 0 0-8 0v4" />
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                </svg>
              </div>
              <h3>Secure and private</h3>
              <p>
                Private feeds for each coworker. Revoke access instantly when
                someone leaves.
              </p>
            </article>
            <article className="card">
              <div className="icon green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 4 4 6-7" />
                </svg>
              </div>
              <h3>Clear analytics</h3>
              <p>
                Plays, listeners and engagement metrics so you know what gets
                heard.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="container">
          <div className="section-head">
            <h2>Everything you need to make internal audio work</h2>
            <p>
              Brandscast gives you the tools to turn communication into a
              seamless listening experience.
            </p>
          </div>

          {/* Mini player visual */}
          <div
            className="mini-player"
            style={{
              maxWidth: "820px",
              margin: "0 auto 24px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "12px 16px",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                background: "rgba(46,90,244,.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
                <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
                <path d="M4 13a8 8 0 0 1 16 0" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  height: "6px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, var(--brand) 35%, var(--brand-tint) 35%)",
                }}
              ></div>
              <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                <div
                  style={{
                    height: "6px",
                    width: "24%",
                    borderRadius: "999px",
                    background: "var(--line)",
                  }}
                ></div>
                <div
                  style={{
                    height: "6px",
                    width: "18%",
                    borderRadius: "999px",
                    background: "var(--line)",
                  }}
                ></div>
                <div
                  style={{
                    height: "6px",
                    width: "12%",
                    borderRadius: "999px",
                    background: "var(--line)",
                  }}
                ></div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                aria-label="Play"
                style={{
                  appearance: "none",
                  border: 0,
                  background: "var(--brand)",
                  color: "#fff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(47,90,244,.25)",
                  cursor: "pointer",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ width: "18px", height: "18px", fill: "#fff" }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="cards cards--2">
            <article className="card">
              <div className="icon yellow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M19.4 15a1.8 1.8 0 0 0 .36 2l.04.04-1.7 1.7-.04-.04a1.8 1.8 0 0 0-2-.36 1.8 1.8 0 0 0-1.1 1.7V22h-2v-.02a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .36l-.04.04-1.7-1.7.04-.04a1.8 1.8 0 0 0 .36-2 1.8 1.8 0 0 0-1.7-1.1H2v-2h.02a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.36-2l-.04-.04 1.7-1.7.04.04a1.8 1.8 0 0 0 2 .36 1.8 1.8 0 0 0 1.1-1.7V2h2v.02a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.36l.04-.04 1.7 1.7-.04.04a1.8 1.8 0 0 0-.36 2 1.8 1.8 0 0 0 1.7 1.1H22v2h-.02a1.8 1.8 0 0 0-1.7 1.1Z" />
                </svg>
              </div>
              <h3>Podcasting 2.0 ready</h3>
              <p>
                Enjoy enhanced metadata and cross app compatibility. Your
                internal podcast stays future proof.
              </p>
            </article>
            <article className="card">
              <div className="icon green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l10 6-10 6L2 9z" />
                  <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                </svg>
              </div>
              <h3>Tracks</h3>
              <p>
                Turn internal knowledge into structured audio learning paths.
                Perfect for onboarding, training and professional development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MEMBER ENGAGEMENT */}
      <section className="section-muted">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow">Listening analytics</div>
              <h2>See who's listening, not just how many</h2>
              <p className="lead" style={{ marginBottom: "24px" }}>
                Most tools give you a number. Brandscast shows you which team
                members are engaged and which ones haven't listened yet, so you
                can act on it.
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
              </ul>
              <a
                href="/employee-listening-analytics/"
                style={{
                  display: "inline-block",
                  marginTop: "28px",
                  color: "var(--brand)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Learn about employee listening analytics →
              </a>
            </div>

            {/* Mock analytics card */}
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
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  Member engagement
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    background: "var(--line)",
                    padding: "3px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Last 30 days
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "12px", marginBottom: "24px" }}
              >
                <div
                  style={{
                    flex: 1,
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "10px",
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#16a34a",
                    }}
                  >
                    74%
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#15803d",
                      marginTop: "2px",
                    }}
                  >
                    Engagement rate
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "10px",
                    padding: "12px 14px",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>37</div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--muted)",
                      marginTop: "2px",
                    }}
                  >
                    Active members
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "10px",
                    padding: "12px 14px",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>13</div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--muted)",
                      marginTop: "2px",
                    }}
                  >
                    Inactive
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  { name: "Sarah M.", episodes: "12 episodes", dot: "#22c55e" },
                  { name: "James T.", episodes: "8 episodes", dot: "#22c55e" },
                  { name: "Laura K.", episodes: "3 episodes", dot: "#eab308" },
                  { name: "Marco R.", episodes: "0 episodes", dot: "#ef4444" },
                ].map((m) => (
                  <div
                    key={m.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "8px 10px",
                      borderRadius: "8px",
                      background: "var(--bg, #fafafa)",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "999px",
                        background: m.dot,
                        flexShrink: 0,
                      }}
                    ></span>
                    <span
                      style={{ flex: 1, fontSize: "0.88rem", fontWeight: 500 }}
                    >
                      {m.name}
                    </span>
                    <span
                      style={{ fontSize: "0.82rem", color: "var(--muted)" }}
                    >
                      {m.episodes}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 4 4 6-7" />
                </svg>
              </div>
              <h3>Measure engagement</h3>
              <p>Track what gets heard with clear analytics.</p>
            </article>
          </div>
        </div>
      </section>

      {/* EMPLOYEES */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>For employees, clarity, flexibility and trust</h2>
            <p>Stay informed and connected at your own pace, from anywhere.</p>
          </div>
          <div className="cards cards--4">
            <article className="card">
              <div className="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
                  <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
                  <path d="M4 13a8 8 0 0 1 16 0" />
                </svg>
              </div>
              <h3>Listen anytime</h3>
              <p>Access updates easily from your favourite podcast app.</p>
            </article>
            <article className="card">
              <div className="icon green">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 19h2" />
                </svg>
              </div>
              <h3>Stay connected</h3>
              <p>Feel part of the culture even when working remotely.</p>
            </article>
            <article className="card">
              <div className="icon yellow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.5 4a3.5 3.5 0 0 0-3.5 3.5v8A3.5 3.5 0 0 0 9.5 19" />
                  <path d="M14.5 4A3.5 3.5 0 0 1 18 7.5v8A3.5 3.5 0 0 1 14.5 19" />
                  <path d="M9.5 4c.6 2 0 3-1.5 4" />
                  <path d="M14.5 4c-.6 2 0 3 1.5 4" />
                  <path d="M12 7v10" />
                </svg>
              </div>
              <h3>Focus better</h3>
              <p>No more email or chat overload. Learn when it suits you.</p>
            </article>
            <article className="card">
              <div className="icon red">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11V7a4 4 0 0 0-8 0v4" />
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                </svg>
              </div>
              <h3>Private and secure</h3>
              <p>All content stays inside your organisation.</p>
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
              Private podcast feeds, GDPR compliance and reliable infrastructure
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
              <p>Hosted on AWS with EU regulations compliance.</p>
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
              <summary>Why not just use Spotify or Apple Podcasts?</summary>
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
            Create your first private podcast in minutes and keep your team
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
            30 day free trial · Full features · Cancel anytime
          </p>
        </div>
      </section>

      <FooterFull />
    </>
  );
}
