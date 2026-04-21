import type { Metadata } from 'next';
import Header from '@/components/Header';
import FooterMinimal from '@/components/FooterMinimal';

export const metadata: Metadata = {
  title: 'Brandscast MCP Connector | Use Brandscast with Claude',
  description:
    'Connect your Brandscast account to Claude. Manage your private podcasts, episodes, and listeners using natural language with the Brandscast MCP connector.',
  alternates: { canonical: 'https://brandscast.com/mcp/' },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  openGraph: {
    url: 'https://brandscast.com/mcp',
    title: 'Brandscast MCP Connector | Use Brandscast with Claude',
    description:
      'Connect your Brandscast account to Claude and manage your internal podcasts with natural language.',
  },
};

export default function McpPage() {
  return (
    <>
      <Header />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">MCP Connector</div>
          <h1>Use Brandscast with Claude</h1>
          <p className="lead">
            The Brandscast MCP connector lets you manage your private podcasts, episodes, and
            listeners directly from Claude — no dashboard needed.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>What you can do</h2>
              <p>
                Once connected, you can ask Claude to perform actions on your Brandscast account
                using plain English:
              </p>
              <ul>
                <li>List and search your podcasts and episodes</li>
                <li>Get listening stats and analytics</li>
                <li>Add or remove listeners from a podcast</li>
                <li>Publish new episodes</li>
              </ul>
            </div>
            <div>
              <h2>How to connect</h2>
              <ol>
                <li>
                  Open <strong>Claude.ai → Settings → Connectors</strong>
                </li>
                <li>Search for <strong>Brandscast</strong> in the directory</li>
                <li>Click <strong>Connect</strong> and authenticate with your Brandscast account</li>
                <li>Start using Brandscast tools in any Claude conversation</li>
              </ol>
              <p>
                Authentication uses OAuth 2.0. Your Brandscast credentials are never shared with
                Anthropic.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>Requirements</h2>
            <p>
              You need an active Brandscast account with a Starter or Growth plan. No technical
              setup is required — the connector works out of the box once you authenticate.
            </p>

            <h2>Available tools</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Tool</th>
                  <th style={{ textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>What it does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['list_podcasts', 'Returns all podcasts in your account'],
                  ['get_podcast', 'Returns details for a specific podcast'],
                  ['list_episodes', 'Lists episodes for a podcast'],
                  ['get_episode', 'Returns details for a specific episode'],
                  ['publish_episode', 'Publishes an episode'],
                  ['list_members', 'Lists listeners for a podcast'],
                  ['get_member', 'Returns details for a specific listener'],
                  ['add_member', 'Adds a listener to a podcast'],
                  ['remove_member', 'Removes a listener from a podcast'],
                  ['get_stats', 'Returns listening analytics for your account'],
                ].map(([tool, desc]) => (
                  <tr key={tool}>
                    <td style={{ padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6', fontFamily: 'monospace', fontSize: '0.9em' }}>{tool}</td>
                    <td style={{ padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 style={{ marginTop: '2rem' }}>Support</h2>
            <p>
              Having trouble connecting? Email us at{' '}
              <a href="mailto:hello@brandscast.com">hello@brandscast.com</a> and we will help you
              get set up.
            </p>
          </div>
        </section>
      </main>

      <FooterMinimal />
    </>
  );
}
