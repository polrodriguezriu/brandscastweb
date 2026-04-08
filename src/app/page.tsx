import type { Metadata } from 'next';
import Header from '@/components/Header';
import FooterFull from '@/components/FooterFull';
import PricingSection from './PricingSection';

export const metadata: Metadata = {
  title: 'Brandscast — Private podcasts for growing teams',
  description: 'Brandscast is the simplest way for teams to share information and culture through secure private podcasts. Keep everyone aligned without endless meetings or unread emails.',
  alternates: { canonical: 'https://brandscast.com/' },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  openGraph: {
    url: 'https://brandscast.com/',
    title: 'Brandscast — Private podcasts for growing teams',
    description: 'Share updates and culture via secure private podcasts. Communicate smarter without more meetings.',
    images: '/Podcasters.webp',
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
            <h1>Private podcasts for <span style={{color:'var(--brand)'}}>growing teams</span></h1>
            <p className="lead">Keep everyone aligned without endless meetings or unread emails. Share updates, culture and knowledge through secure private podcasts.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start trial</a>
              <a className="btn outline" href="#pricing">See pricing</a>
            </div>
            <div className="hero-podcatchers">
              <p className="hero-podcatchers-label">Listen from your favourite podcast app</p>
              <img src="/Podcatchers.png" alt="Logos of podcast apps where employees can listen to Brandscast episodes" />
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-duo">
              <img className="hero-duo-img hero-duo-img--1" src="/podcaster-1.webp" alt="Podcaster recording" />
              <img className="hero-duo-img hero-duo-img--2" src="/podcaster-2.webp" alt="Podcaster recording" />
            </div>
          </div>
        </div>
      </section>

      {/* CUT MEETINGS */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>Cut meetings, not communication</h2>
            <p>Record once and share with everyone. Secure, private and easy for any team.</p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><path d="M12 18v5"/><path d="M8 23h8"/></svg></div>
              <h3>Record once and reach all</h3>
              <p>Replace recurring status meetings with short audio updates people can hear on their own time.</p>
            </article>
            <article className="card">
              <div className="icon red"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11V7a4 4 0 0 0-8 0v4"/><rect x="5" y="11" width="14" height="10" rx="2"/></svg></div>
              <h3>Secure and private</h3>
              <p>Private feeds for each coworker. Revoke access instantly when someone leaves.</p>
            </article>
            <article className="card">
              <div className="icon green"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 6-7"/></svg></div>
              <h3>Clear analytics</h3>
              <p>IAB standard metrics for plays, listeners and engagement so you know what gets heard.</p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="container">
          <div className="section-head">
            <h2>Everything you need to make internal audio work</h2>
            <p>Brandscast gives you the tools to turn communication into a seamless listening experience.</p>
          </div>

          {/* Mini player visual */}
          <div className="mini-player" style={{ maxWidth: '820px', margin: '0 auto 24px', display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', padding: '12px 16px', boxShadow: 'var(--shadow)' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'rgba(46,90,244,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z"/><path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z"/><path d="M4 13a8 8 0 0 1 16 0"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: '6px', borderRadius: '999px', background: 'linear-gradient(90deg, var(--brand) 35%, var(--brand-tint) 35%)' }}></div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <div style={{ height: '6px', width: '24%', borderRadius: '999px', background: 'var(--line)' }}></div>
                <div style={{ height: '6px', width: '18%', borderRadius: '999px', background: 'var(--line)' }}></div>
                <div style={{ height: '6px', width: '12%', borderRadius: '999px', background: 'var(--line)' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button aria-label="Play" style={{ appearance: 'none', border: 0, background: 'var(--brand)', color: '#fff', width: '40px', height: '40px', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(47,90,244,.25)', cursor: 'pointer' }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '18px', height: '18px', fill: '#fff' }}><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
          </div>

          <div className="cards cards--2">
            <article className="card">
              <div className="icon yellow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 2l.04.04-1.7 1.7-.04-.04a1.8 1.8 0 0 0-2-.36 1.8 1.8 0 0 0-1.1 1.7V22h-2v-.02a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .36l-.04.04-1.7-1.7.04-.04a1.8 1.8 0 0 0 .36-2 1.8 1.8 0 0 0-1.7-1.1H2v-2h.02a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.36-2l-.04-.04 1.7-1.7.04.04a1.8 1.8 0 0 0 2 .36 1.8 1.8 0 0 0 1.1-1.7V2h2v.02a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.36l.04-.04 1.7 1.7-.04.04a1.8 1.8 0 0 0-.36 2 1.8 1.8 0 0 0 1.7 1.1H22v2h-.02a1.8 1.8 0 0 0-1.7 1.1Z"/></svg></div>
              <h3>Podcasting 2.0 ready</h3>
              <p>Enjoy enhanced metadata and cross app compatibility. Your internal podcast stays future proof.</p>
            </article>
            <article className="card">
              <div className="icon green"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l10 6-10 6L2 9z"/><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg></div>
              <h3>Audiocourses</h3>
              <p>Turn internal knowledge into structured audio learning paths. Perfect for onboarding, training and professional development.</p>
            </article>
          </div>
        </div>
      </section>

      {/* HR TEAMS */}
      <section className="section-muted">
        <div className="container">
          <div className="section-head">
            <h2>For HR teams, better communication and stronger culture</h2>
            <p>Share updates, culture and training with everyone. No more town halls that drain time and energy.</p>
          </div>
          <div className="cards">
            <article className="card"><div className="icon yellow"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg></div><h3>Save time</h3><p>Reduce meeting fatigue and cut internal noise.</p></article>
            <article className="card"><div className="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3.5 3.6 3.5 14.4 0 18"/><path d="M12 3c-3.5 3.6-3.5 14.4 0 18"/></svg></div><h3>Reach everyone</h3><p>Communicate consistently across remote and hybrid teams.</p></article>
            <article className="card"><div className="icon green"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg></div><h3>Build culture</h3><p>Share authentic messages that strengthen team connection.</p></article>
            <article className="card"><div className="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 6-7"/></svg></div><h3>Measure engagement</h3><p>Track what gets heard with clear analytics.</p></article>
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
          <div className="cards">
            <article className="card"><div className="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z"/><path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z"/><path d="M4 13a8 8 0 0 1 16 0"/></svg></div><h3>Listen anytime</h3><p>Access updates easily from your favourite podcast app.</p></article>
            <article className="card"><div className="icon green"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 19h2"/></svg></div><h3>Stay connected</h3><p>Feel part of the culture even when working remotely.</p></article>
            <article className="card"><div className="icon yellow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 4a3.5 3.5 0 0 0-3.5 3.5v8A3.5 3.5 0 0 0 9.5 19"/><path d="M14.5 4A3.5 3.5 0 0 1 18 7.5v8A3.5 3.5 0 0 1 14.5 19"/><path d="M9.5 4c.6 2 0 3-1.5 4"/><path d="M14.5 4c-.6 2 0 3 1.5 4"/><path d="M12 7v10"/></svg></div><h3>Focus better</h3><p>No more email or chat overload. Learn when it suits you.</p></article>
            <article className="card"><div className="icon red"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11V7a4 4 0 0 0-8 0v4"/><rect x="5" y="11" width="14" height="10" rx="2"/></svg></div><h3>Private and secure</h3><p>All content stays inside your organisation.</p></article>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <PricingSection />

      {/* SECURITY */}
      <section className="section-muted">
        <div className="container">
          <div className="section-head">
            <h2>Enterprise grade security</h2>
            <p>Private podcast feeds, GDPR compliance and reliable infrastructure you can trust.</p>
          </div>
          <div className="cards">
            <article className="card"><div className="icon red"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6z"/><path d="M9 12l2 2 4-5"/></svg></div><h3>Private feeds</h3><p>Each feed is generated privately and shared only with your team.</p></article>
            <article className="card"><div className="icon yellow"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 8h6"/><path d="M8 12h6"/><path d="M8 16h6"/><path d="M16 7a3 3 0 0 0-2 5 3 3 0 0 0 2 5"/></svg></div><h3>GDPR compliant</h3><p>Hosted on AWS with EU regulations compliance.</p></article>
            <article className="card"><div className="icon green"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 6-7"/></svg></div><h3>Scalable and reliable</h3><p>Built to grow with your company and ensure consistent performance.</p></article>
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
            <details><summary>Is it easy to set up?</summary><p>Yes, invite your team manually or upload a CSV file.</p></details>
            <details><summary>Can we cancel anytime?</summary><p>Yes, with no hidden fees or long term contracts.</p></details>
            <details><summary>Do employees need an app?</summary><p>No, they can listen in their usual podcast players.</p></details>
          </div>
        </div>
      </section>

      {/* SIGNUP CTA */}
      <section className="section-brand" id="signup">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to simplify your internal communication?</h2>
          <p className="lead">Create your first private podcast in minutes and keep your team aligned.</p>
          <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start trial</a>
          <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>14 day free trial · Full features · Cancel anytime</p>
        </div>
      </section>

      <FooterFull />
    </>
  );
}
