import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Brandscast API | Create audio episodes from scripts",
  description:
    "Use the Brandscast REST API and a personal API token to create a draft audio episode from a finished script.",
  alternates: { canonical: "https://brandscast.com/api/" },
  openGraph: {
    url: "https://brandscast.com/api/",
    title: "Brandscast API | Create audio episodes from scripts",
    description:
      "Create draft audio episodes from finished scripts with a personal API token.",
  },
};

export default function ApiPage() {
  return (
    <>
      <Header />
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Developer guide</div>
          <h1>Create an audio episode with the REST API</h1>
          <p className="lead">
            Send a finished script to Brandscast, generate its audio, then
            review and publish the draft. The same workflow is also available
            through the <a href="/mcp/">MCP server</a>.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner">
            <h2>Authentication</h2>
            <p>
              Create a personal API token in{" "}
              <strong>Settings → Integrations</strong>
              in the Brandscast app. Copy it when it appears; it cannot be
              viewed again. Send it in the <code>
                Authorization: Bearer
              </code>{" "}
              header. The token holder must have access to the Track and
              <code> podcasts:write</code> permission. For users in multiple
              accounts, set <code>X-Brandscast-Account-Id</code> to the account
              ID if you need to select a different account.
            </p>
            <p>
              Keep the token private. You can revoke it at any time in
              Integrations. Do not send it as a URL parameter.
            </p>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>POST /api/episodes/from-script</h2>
            <p>
              Request URL:{" "}
              <code>https://app.brandscast.com/api/episodes/from-script</code>
            </p>
            <p>
              Use the Track ID returned by the MCP <code>list_podcasts</code>
              tool for <code>podcastId</code>.
            </p>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>JSON field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>podcastId</code>
                    </td>
                    <td>string</td>
                    <td>Required Track ID.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>title</code>
                    </td>
                    <td>string</td>
                    <td>Required episode title.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>script</code>
                    </td>
                    <td>string</td>
                    <td>Required finished script, up to 100,000 characters.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>voice</code>
                    </td>
                    <td>string</td>
                    <td>
                      Optional: nova (default), shimmer, alloy, echo, fable, or
                      onyx.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Example request:</p>
            <div className="compare-wrap">
              <pre>
                <code>{`curl -X POST https://app.brandscast.com/api/episodes/from-script \\\n  -H "Authorization: Bearer bcast_YOUR_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d '{
    "podcastId": "YOUR_TRACK_ID",
    "title": "This week's update",
    "script": "Hello team. Here is this week's update...",
    "voice": "nova"
  }'`}</code>
              </pre>
            </div>
            <p>
              Replace the token and Track ID with your own values. The script is
              narrated without an AI rewrite. Audio generation uses your
              account&apos;s shared AI minutes.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>Response and publishing</h2>
            <p>
              A successful request returns HTTP <code>202 Accepted</code> with a
              JSON response like this:
            </p>
            <div className="compare-wrap">
              <pre>
                <code>{`{
  "episodeId": "EPISODE_ID",
  "slug": "this-weeks-update",
  "generationStatus": "queued",
  "publishStatus": "draft"
}`}</code>
              </pre>
            </div>
            <p>
              Generation runs asynchronously. Check progress in the Brandscast
              app or with the MCP <code>get_episode</code> tool. When
              <code> generationStatus</code> is <code>done</code>, review the
              episode and publish it in the app or with the MCP
              <code> publish_episode</code> tool. This REST endpoint creates
              drafts; it does not publish them.
            </p>
            <p>
              Errors are JSON: <code>400</code> for malformed or invalid input,
              <code> 401</code> for missing, invalid, or expired tokens,
              <code> 403</code> for insufficient permission or a read-only
              account, <code>404</code> when the Track is unavailable, and
              <code> 422</code> for generation limits such as insufficient AI
              minutes or an unsupported voice.
            </p>
          </div>
        </section>

        <RelatedLinks
          links={[
            { href: "/mcp/", label: "MCP server and Claude Code setup" },
            { href: "/text-to-audio/", label: "Text to audio in Brandscast" },
            { href: "/features/", label: "All Brandscast features" },
          ]}
        />
      </main>
      <FooterMinimal />
    </>
  );
}
