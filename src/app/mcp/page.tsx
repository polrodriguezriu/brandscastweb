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
  [
    "create_episode_from_script",
    "Creates a draft from a finished script and queues narration without rewriting it",
  ],
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
                Personal API token (Bearer)
              </p>
              <p style={{ margin: 0 }}>
                <strong>Standard</strong>
                <br />
                Model Context Protocol
              </p>
            </div>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>Connect Claude Code</h2>
            <p>
              Create a personal API token in{" "}
              <strong>Settings → Integrations</strong>
              in Brandscast. Copy it when it appears; you cannot view it again.
              Add the MCP server with that token as an HTTP header:
            </p>
            <div className="compare-wrap">
              <pre>
                <code>{`claude mcp add --transport http brandscast https://mcp.brandscast.com/api/mcp \\\n  --header "Authorization: Bearer bcast_YOUR_TOKEN"`}</code>
              </pre>
            </div>
            <p>
              Replace the example token with your own. If you previously added
              Brandscast without a header, run{" "}
              <code>claude mcp remove brandscast</code>
              and add it again. This endpoint uses personal tokens; OAuth
              Dynamic Client Registration and <code>claude mcp login</code> are
              not used. Keep the token private and revoke it in Integrations if
              needed.
            </p>
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
        <section className="content-section">
          <div className="section-inner">
            <h2>Create an episode from a finished script</h2>
            <p>
              First call <code>list_podcasts</code> to find the Track ID. Then
              call <code>create_episode_from_script</code> with
              <code> podcast_id</code>, <code>title</code>, and{" "}
              <code>script</code>. You can also supply <code>voice</code>; it
              defaults to
              <code> nova</code>. Available voices are <code>nova</code>,
              <code> shimmer</code>, <code>alloy</code>, <code>echo</code>,
              <code> fable</code>, and <code>onyx</code>.
            </p>
            <p>
              Brandscast keeps your script as written and queues audio
              generation. The new episode is a draft. Check{" "}
              <code>get_episode</code> for
              <code> generationStatus</code>; once it is done, review the
              episode and use <code>publish_episode</code> to publish it. The
              account needs available AI minutes and the token needs
              <code> podcasts:write</code> permission.
            </p>
            <p>
              Prefer a direct HTTP request? See the
              <a href="/api/"> REST API guide</a> for the same workflow.
            </p>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>Ways to connect</h2>
            <p>
              The same server is reachable from several kinds of client. Pick
              whichever fits how your team already works.
            </p>
            <div className="cards">
              <div className="card">
                <h3>Claude Code</h3>
                <p>
                  Add the server with the HTTP command above, including your
                  personal API token. Then use its tools in a Claude Code
                  session.
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
                Access uses personal API tokens, stored hashed (SHA-256) and
                revocable in Settings → Integrations. Pass the token as an
                Authorization: Bearer header. Tool actions follow the token
                holder&apos;s account role and Track access. If your user
                belongs to multiple accounts, you can select one with the
                optional X-Brandscast-Account-Id header. Treat the token as a
                secret: the MCP client stores it in its configuration.
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
                You need an active Brandscast account and a personal API token
                from Settings → Integrations. Audio generation uses your
                plan&apos;s shared AI minutes. You can also upload your own
                recording in Brandscast; AI narration is optional.
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
                  a: "Create a personal API token in Settings → Integrations, then send it as an Authorization: Bearer header. OAuth Dynamic Client Registration is not available on this endpoint. Tokens are hashed and revocable.",
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
            { href: "/api/", label: "REST API guide" },
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
          note="Try Brandscast free for 30 days. Create a personal token in Settings to connect your MCP client."
        />
      </main>

      <FooterMinimal />
    </>
  );
}
