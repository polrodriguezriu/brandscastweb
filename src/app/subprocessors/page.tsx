import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subprocessors — Brandscast",
  description:
    "List of third-party subprocessors Brandscast uses to provide its private podcasting service, the data they process, and where it is hosted.",
  alternates: { canonical: "https://brandscast.com/subprocessors" },
  robots: "noindex,follow",
  openGraph: {
    url: "https://brandscast.com/subprocessors",
    title: "Subprocessors — Brandscast",
    description:
      "List of third-party subprocessors Brandscast uses to provide its service.",
  },
};

type Subprocessor = {
  name: string;
  purpose: string;
  data: string;
  location: string;
};

const subprocessors: Subprocessor[] = [
  {
    name: "Hetzner Online GmbH",
    purpose: "Cloud hosting, database and object storage (app, audio, images)",
    data: "All customer and member data, audio files, account data",
    location: "Germany / Finland (EU)",
  },
  {
    name: "Stripe, Inc.",
    purpose: "Payment processing and subscription billing",
    data: "Billing contact, payment metadata (no full card data stored by us)",
    location: "USA (SCCs)",
  },
  {
    name: "OpenAI, L.L.C.",
    purpose: "Text-to-speech generation for the Text-to-Episode feature",
    data: "Document text submitted by the account for audio generation",
    location: "USA (SCCs)",
  },
  {
    name: "Auphonic",
    purpose: "Audio enhancement and post-production processing",
    data: "Episode audio files submitted for enhancement",
    location: "Austria (EU)",
  },
  {
    name: "Resend (Plus Five Five, Inc.)",
    purpose: "Delivery of transactional and notification emails",
    data: "Recipient email address, email content (invites, notifications)",
    location: "USA (SCCs)",
  },
];

export default function SubprocessorsPage() {
  return (
    <>
      <style>{`
        :root { --bg: #ffffff; --fg: #0f172a; --muted: #475569; --link: #2e5af4; --border: #e2e8f0; --card: #f8fafc; }
        @media (prefers-color-scheme: dark) {
          :root { --bg: #0b1220; --fg: #e5e7eb; --muted: #94a3b8; --link: #8ab4ff; --border: #1f2937; --card: #0f172a; }
        }
        html, body { height: 100%; }
        body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
        .container { max-width: 920px; margin: 0 auto; padding: 48px 20px 72px; }
        header h1 { font-size: 2rem; line-height: 1.2; margin: 0 0 8px; }
        .subtitle { color: var(--muted); margin: 0 0 24px; }
        section { margin: 28px 0; padding: 0; }
        h2 { font-size: 1.25rem; margin: 0 0 10px; }
        p { margin: 12px 0; }
        a { color: var(--link); }
        .note { border-left: 4px solid var(--link); background: var(--card); padding: 12px 14px; border-radius: 10px; margin: 16px 0; color: var(--muted); }
        .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 14px; margin: 16px 0; }
        table { border-collapse: collapse; width: 100%; min-width: 640px; font-size: .95rem; }
        th, td { text-align: left; padding: 12px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
        th { background: var(--card); font-weight: 600; }
        tr:last-child td { border-bottom: 0; }
        footer { margin-top: 48px; color: var(--muted); font-size: .95rem; }
      `}</style>

      <main className="container">
        <header>
          <h1>Subprocessors</h1>
          <p className="subtitle">
            Brandscast uses a small number of trusted third-party providers
            (subprocessors) to deliver its private audio service. This page
            lists who they are, what they do, and where data is hosted.
          </p>
          <p className="subtitle">Last updated: 3 June 2026</p>
        </header>

        <section id="roles">
          <h2>Controller and processor</h2>
          <p>
            When you use Brandscast to run private audios for your
            organization,{" "}
            <strong>your organization is the data controller</strong> of your
            members&apos; personal data (such as their email addresses), and{" "}
            <strong>Brandscast acts as a data processor</strong>, processing
            that data on your behalf and according to your instructions, in line
            with Article 28 GDPR.
          </p>
          <p>
            The subprocessors below may process member or account data on our
            behalf in order to provide the service.
          </p>
        </section>

        <section id="list">
          <h2>Current subprocessors</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Data processed</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((s) => (
                  <tr key={s.name}>
                    <td>
                      <strong>{s.name}</strong>
                    </td>
                    <td>{s.purpose}</td>
                    <td>{s.data}</td>
                    <td>{s.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">
            Where a subprocessor is located outside the European Economic Area,
            transfers are protected by the European Commission&apos;s Standard
            Contractual Clauses (SCCs) and equivalent safeguards.
          </p>
        </section>

        <section id="transfers">
          <h2>International data transfers</h2>
          <p>
            Core customer and member data is hosted within the European Union
            (Hetzner, Germany/Finland). Some providers process limited data in
            the United States; in those cases we rely on appropriate safeguards
            such as the European Commission&apos;s Standard Contractual Clauses.
          </p>
        </section>

        <section id="changes">
          <h2>Changes to this list</h2>
          <p>
            We may update this list as our service evolves. Material changes to
            our subprocessors will be reflected here. If you are a customer and
            would like to be notified of changes, contact us at the address
            below.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Questions about our subprocessors or data processing? Email{" "}
            <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>. See
            also our <a href="/privacy">Privacy policy</a> and{" "}
            <a href="/legal">Legal notice</a>.
          </p>
        </section>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} Brandscast. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
