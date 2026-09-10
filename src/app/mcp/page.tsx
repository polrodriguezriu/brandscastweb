import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import RelatedLinks from "@/components/RelatedLinks";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title:
    "Brandscast MCP Server | Connect compatible AI clients to internal audio",
  description:
    "Connect a compatible Model Context Protocol (MCP) client to manage Brandscast audio, episodes, listeners and analytics in natural language.",
  alternates: { canonical: "https://brandscast.com/mcp/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/mcp/",
    title:
      "Brandscast MCP Server | Connect compatible AI clients to internal audio",
    description:
      "Publish episodes, manage listeners and explore analytics from Claude or another compatible MCP client, using plain language.",
  },
};

const tools: [string, string][] = [
  ["list_podcasts", "Returns all audio in your account"],
  ["get_podcast", "Returns details for a specific audio"],
  ["list_episodes", "Lists episodes for an audio"],
  ["get_episode", "Returns details for a specific episode"],
  ["publish_episode", "Publishes an episode"],
  ["list_members", "Lists listeners for an audio"],
  ["get_member", "Returns details for a specific listener"],
  ["add_member", "Adds a listener to an audio"],
  ["remove_member", "Removes a listener from an audio"],
  ["get_stats", "Returns listening analytics for your account"],
];

export default function McpPage() {
  return (
    <>
      <Header />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Model Context Protocol</div>
          <h1>Manage your audio channel from Claude</h1>
          <p className="lead">
            Ask Claude to publish an episode, add a listener or bring up your
            latest analytics. The Brandscast MCP server connects your private
            audio channel to the conversation, with support for other compatible
            AI clients too.
          </p>
        </div>
      </div>

      <main>
        {/* What the MCP server is */}
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>An open endpoint for your audio channel</h2>
              <p>
                MCP is the emerging open standard for connecting AI models to
                external systems. Brandscast implements it as a hosted server,
                so compatible clients can work with your account through a set
                of ready-to-use tools. Connect Claude and start with a simple
                request, like listing your latest episodes.
              </p>
              <p>
                Because it speaks a standard protocol, the same server can work
                with Claude and other clients that support Brandscast&apos;s MCP
                authentication flow. Once connected, it provides programmatic,
                natural-language access to your{" "}
                <a href="/private-podcasts-for-teams/">private audio channel</a>
                .
              </p>
            </div>
            <div className="highlight-box">
              <h3>Server details</h3>
              <p style={{ margin: "0 0 0.75rem" }}>
                <strong>Endpoint</strong>
                <br />
                <code>https://mcp.brandscast.com/api/mcp</code>
              </p>
              <p style={{ margin: "0 0 0.75rem" }}>
                <strong>Transport</strong>
                <br />
                Streamable HTTP
              </p>
              <p style={{ margin: "0 0 0.75rem" }}>
                <strong>Auth</strong>
                <br />
                OAuth 2.0 or personal API token
              </p>
              <p style={{ margin: 0 }}>
                <strong>Standard</strong>
                <br />
                Model Context Protocol
              </p>
            </div>
          </div>
        </section>

        {/* What you can do */}
        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>What agents can do with it</h2>
            <p>
              Take care of everyday publishing and audience tasks from your AI
              assistant, without switching back to the dashboard each time.
            </p>
            <div className="cards">
              <div className="card">
                <h3>Run your channel</h3>
                <p>
                  Ask an agent to publish a new episode, look up an audio or its
                  episodes, and keep your internal feed moving without opening
                  the dashboard.
                </p>
              </div>
              <div className="card">
                <h3>Keep membership in sync</h3>
                <p>
                  Add and remove listeners as people join or leave, straight
                  from your own automations — onboarding flows, HRIS, or a quick
                  natural-language request.
                </p>
              </div>
              <div className="card">
                <h3>Pull analytics anywhere</h3>
                <p>
                  Bring{" "}
                  <a href="/employee-listening-analytics/">
                    listening analytics
                  </a>{" "}
                  into weekly digests, reports or dashboards — let an agent
                  fetch the numbers and write them up for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available tools */}
        <section className="content-section">
          <div className="section-inner">
            <h2>Available tools</h2>
            <p>
              The server exposes a typed toolset. Each tool maps to a single,
              auditable action against your account.
            </p>
            <div className="compare-wrap" style={{ marginTop: "1.25rem" }}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>What it does</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map(([tool, desc]) => (
                    <tr key={tool}>
                      <td>
                        <code style={{ fontSize: "0.9em" }}>{tool}</code>
                      </td>
                      <td>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ways to connect */}
        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>Ways to connect</h2>
            <p>
              The same server is reachable from several kinds of client. Pick
              whichever fits how your team already works.
            </p>
            <div className="cards">
              <div className="card">
                <h3>Claude connector</h3>
                <p>
                  In Claude, open <strong>Settings → Connectors</strong>, find
                  Brandscast and connect with OAuth. Then use Brandscast tools
                  in any conversation — no setup beyond signing in.
                </p>
              </div>
              <div className="card">
                <h3>Other compatible MCP clients</h3>
                <p>
                  Point a client that supports Streamable HTTP and API tokens at{" "}
                  <code>https://mcp.brandscast.com/api/mcp</code> and
                  authenticate with a personal API token (<code>bcast_…</code>)
                  from your Brandscast settings.
                </p>
              </div>
              <div className="card">
                <h3>Your own agents</h3>
                <p>
                  Connect through your agent framework's MCP integration, and
                  build Brandscast into your own internal tooling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="content-section">
          <div className="section-inner">
            <h2>Authentication and security</h2>
            <div className="callout">
              <p style={{ margin: 0 }}>
                Access is authorised per user. The Claude connector uses OAuth
                2.0; everything else uses personal API tokens, which are stored
                hashed (SHA-256), scoped to your account, and can be revoked at
                any time. Your Brandscast credentials are never shared with
                Anthropic or any model provider, and every tool call runs with
                the same permissions as the user who authorised it.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements + support */}
        <section className="content-section section-tint">
          <div className="section-inner two-cols">
            <div>
              <h2>Requirements</h2>
              <p>
                You need an active Brandscast account on any paid plan. No
                technical setup is required to use the Claude connector — it
                works out of the box once you authenticate. Connecting other
                clients only takes a personal API token from your settings.
              </p>
            </div>
            <div>
              <h2>Support</h2>
              <p>
                Having trouble connecting, or want a tool the server
                doesn&apos;t expose yet? Email us at{" "}
                <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>{" "}
                and we will help you get set up.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading="Frequently asked questions"
              items={[
                {
                  q: "What is the Brandscast MCP server?",
                  a: "It is a hosted Model Context Protocol server that lets any compatible AI agent manage your Brandscast account — audio, episodes, listeners and analytics — through a typed set of tools, using natural language or code.",
                },
                {
                  q: "Do I have to use Claude?",
                  a: "No. You can also connect clients that support Streamable HTTP and Brandscast's authentication options. Use the server details above to connect your own assistant or automation.",
                },
                {
                  q: "How do I authenticate?",
                  a: "The Claude connector uses OAuth 2.0. Other clients authenticate with a personal API token generated in your Brandscast settings. Tokens are hashed, scoped to your account and revocable at any time.",
                },
                {
                  q: "What is the server URL?",
                  a: "https://mcp.brandscast.com/api/mcp",
                },
              ]}
            />
          </div>
        </section>

        <RelatedLinks
          links={[
            { href: "/features/", label: "All Brandscast features" },
            {
              href: "/private-podcasts-for-teams/",
              label: "Private audio for teams",
            },
            {
              href: "/employee-listening-analytics/",
              label: "Listening analytics",
            },
            { href: "/secure-access-control/", label: "Secure access control" },
          ]}
        />

        <CtaSection
          title="Your next episode starts with a conversation"
          lead="Build your private audio channel, then connect Claude to handle publishing, listeners and analytics in plain language."
          note="Try Brandscast free for 30 days. The MCP connector is available on paid plans."
        />
      </main>

      <FooterMinimal />
    </>
  );
}
