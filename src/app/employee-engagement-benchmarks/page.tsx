import type { Metadata } from 'next';
import Header from '@/components/Header';
import FooterMinimal from '@/components/FooterMinimal';
import CtaSection from '@/components/CtaSection';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Employee engagement benchmarks by industry | Brandscast',
  description: 'See average internal podcast engagement rates by industry. How does your team compare? Benchmarks for tech, healthcare, retail, manufacturing and more.',
  alternates: { canonical: 'https://brandscast.com/employee-engagement-benchmarks/' },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  openGraph: {
    url: 'https://brandscast.com/employee-engagement-benchmarks/',
    title: 'Employee engagement benchmarks by industry | Brandscast',
    description: 'See average internal podcast engagement rates by industry. How does your team compare? Benchmarks for tech, healthcare, retail, manufacturing and more.',
    images: '/Podcasters.webp',
  },
};

const benchmarks = [
  { sector: 'Media and communications', rate: 74, color: '#2e5af4' },
  { sector: 'Healthcare', rate: 72, color: '#2e5af4' },
  { sector: 'Non-profit', rate: 70, color: '#2e5af4' },
  { sector: 'Technology', rate: 68, color: '#2e5af4' },
  { sector: 'Education', rate: 65, color: '#2e5af4' },
  { sector: 'Consulting', rate: 63, color: '#2e5af4' },
  { sector: 'Marketing', rate: 62, color: '#2e5af4' },
  { sector: 'Legal', rate: 60, color: '#2e5af4' },
  { sector: 'Manufacturing', rate: 58, color: '#2e5af4' },
  { sector: 'Finance', rate: 55, color: '#2e5af4' },
  { sector: 'Hospitality', rate: 53, color: '#2e5af4' },
  { sector: 'Government', rate: 52, color: '#2e5af4' },
  { sector: 'Food and beverage', rate: 50, color: '#2e5af4' },
  { sector: 'Retail', rate: 48, color: '#2e5af4' },
  { sector: 'Real estate', rate: 45, color: '#2e5af4' },
];

export default function EmployeeEngagementBenchmarksPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Benchmarks</div>
          <h1>Employee engagement benchmarks by industry</h1>
          <p className="lead">
            How engaged are employees with internal podcasts? These benchmarks show average listening engagement rates across industries, based on data from Brandscast accounts. Use them to set realistic goals and understand where your team stands.
          </p>
          <p className="hero-meta">
            Engagement rate measures the share of members who actively listen to internal podcast episodes. A member is considered active when they have listened to at least one episode.
          </p>
        </div>
      </div>

      <main>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>What is employee engagement rate</h2>
              <p>
                Engagement rate is the percentage of invited members who actively listen to your internal podcast. If you have 100 members and 65 have listened to at least one episode, your engagement rate is 65 percent.
              </p>
              <p>
                It is one of the most useful signals in internal communication. Unlike open rates in email, which measure passive exposure, podcast engagement rate reflects genuine time and attention from your team.
              </p>
              <p>
                High engagement means your content is relevant, your team trusts the channel, and people are building a listening habit. Low engagement usually points to a content, distribution or relevance problem, not a format problem.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>How to read these benchmarks</h3>
              <ul>
                <li>Rates reflect active listeners over the last 90 days.</li>
                <li>A member is active if they listened to at least one episode.</li>
                <li>Teams with shorter, more consistent episodes tend to score higher.</li>
                <li>New channels typically start below benchmark and climb over 3 to 6 months.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">engagement rate</span>
                <span className="tag">internal comms</span>
                <span className="tag">benchmarks</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="centered-heading">Average engagement rate by industry</h2>
            <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-muted)' }}>
              Percentage of members who actively listen to internal podcast episodes
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px', margin: '0 auto' }}>
              {benchmarks.map(({ sector, rate }) => (
                <div key={sector} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '200px', minWidth: '200px', fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
                    {sector}
                  </div>
                  <div style={{ flex: 1, height: '28px', background: 'var(--surface-2, #f1f5f9)', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${rate}%`,
                      background: 'var(--brand)',
                      borderRadius: '6px',
                      opacity: 0.15 + (rate / 100) * 0.85,
                    }} />
                  </div>
                  <div style={{ width: '48px', textAlign: 'right', fontSize: '15px', fontWeight: 700, color: 'var(--brand)' }}>
                    {rate}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why engagement varies by industry</h2>
              <p>
                Industries with distributed or shift-based teams, like healthcare, retail and manufacturing, show high variance. The teams that score above benchmark typically have shorter episodes, a consistent publishing cadence, and a clear topic scope that employees recognise as useful.
              </p>
              <p>
                Knowledge-based sectors like technology, consulting and marketing tend to perform well because employees are already comfortable with on-demand audio and see the format as an extension of how they already learn.
              </p>
              <p>
                Industries with lower averages, like real estate and government, often face structural barriers: employees may not have consistent downtime for listening, or the content has not yet been adapted to short, actionable formats.
              </p>
            </div>

            <aside className="highlight-box">
              <h3>What drives engagement above benchmark</h3>
              <ul>
                <li>Episodes under 10 minutes with a single clear topic.</li>
                <li>Publishing at least twice per month, consistently.</li>
                <li>Content that saves time or answers a real question.</li>
                <li>A clear channel for a specific audience, not everyone.</li>
                <li>Leadership voices that employees recognise and trust.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How Brandscast tracks your benchmark</h2>
              <p>
                Brandscast automatically calculates your engagement rate and compares it to the average for your industry. You do not need to set it up. When you configure your company sector in settings, the benchmark appears directly in your analytics dashboard.
              </p>
              <p>
                This makes it easy to set a goal, understand where you are, and track improvement over time. You can also download a full analytics report in PDF to share with leadership or HR.
              </p>
              <ul>
                <li><strong>Live benchmark</strong> — updates in real time as members listen.</li>
                <li><strong>Per-podcast breakdown</strong> — see which channels are above or below average.</li>
                <li><strong>Downloadable reports</strong> — share your engagement data with stakeholders.</li>
              </ul>
            </div>

            <aside className="highlight-box">
              <h3>Track your engagement in context</h3>
              <p>
                Knowing your engagement rate matters more when you know what "good" looks like. Brandscast shows your sector average alongside your own data so you always have the right reference point.
              </p>
              <p>
                No spreadsheets. No manual benchmarking. Just your number and the industry average, side by side.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>Frequently asked questions</h2>

            <div className="faq">
              <details>
                <summary>What is a good engagement rate for internal podcasts</summary>
                <p>
                  Anything above 60 percent is strong for most industries. If you are just starting, aim for 40 to 50 percent in the first three months. Consistent episodes and a clear audience are the two biggest drivers of improvement.
                </p>
              </details>

              <details>
                <summary>How is engagement rate different from completion rate</summary>
                <p>
                  Engagement rate measures how many of your members have listened to at least one episode. Completion rate measures how much of each episode gets listened to. Both matter, but engagement rate is the better indicator of channel health.
                </p>
              </details>

              <details>
                <summary>How often are these benchmarks updated</summary>
                <p>
                  The benchmarks shown here reflect data from Brandscast accounts and are reviewed periodically. The benchmark shown in your analytics dashboard updates as new data comes in from accounts in your sector.
                </p>
              </details>

              <details>
                <summary>Can I see benchmarks for my specific team size or region</summary>
                <p>
                  The current benchmarks are by industry sector. Team size and region breakdowns are on the roadmap. For now, the sector average is the most reliable reference point across different team sizes and geographies.
                </p>
              </details>
            </div>
          </div>
        </section>

        <CtaSection
          title="See how your team compares"
          lead="Start a free trial and get your engagement rate with sector benchmark included from day one."
          note="No credit card required. Your benchmark appears automatically once you set your company sector."
        />
      </main>

      <RelatedLinks links={[
        { href: '/employee-listening-analytics/', label: 'Employee listening analytics' },
        { href: '/for-hr-teams/', label: 'For HR teams' },
        { href: '/for-internal-comms/', label: 'For internal comms teams' },
        { href: '/private-podcasts-for-teams/', label: 'Private podcasts for teams' },
      ]} />

      <FooterMinimal />
    </>
  );
}
