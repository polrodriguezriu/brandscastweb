import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy — Brandscast',
  description: 'Privacy policy for Brandscast explaining how we collect, use, disclose, retain, and protect personal data in line with GDPR.',
  alternates: { canonical: 'https://brandscast.com/privacy' },
  robots: 'noindex,nofollow',
};

export default function PrivacyPage() {
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
        nav.toc { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 16px 18px; margin: 24px 0 32px; }
        nav.toc strong { display: block; margin-bottom: 8px; }
        nav.toc ol { margin: 0; padding-left: 18px; }
        nav.toc a { color: var(--link); text-decoration: none; }
        nav.toc a:hover { text-decoration: underline; }
        section { margin: 28px 0; padding: 0; }
        h2 { font-size: 1.25rem; margin: 0 0 10px; }
        p { margin: 12px 0; }
        ul { margin: 8px 0 8px 20px; }
        li { margin: 6px 0; }
        a { color: var(--link); }
        code.inline { background: var(--card); border: 1px solid var(--border); padding: 0 6px; border-radius: 6px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: .95em; }
        .note { border-left: 4px solid var(--link); background: var(--card); padding: 12px 14px; border-radius: 10px; margin: 16px 0; color: var(--muted); }
        footer { margin-top: 48px; color: var(--muted); font-size: .95rem; }
        hr { border: 0; border-top: 1px solid var(--border); margin: 32px 0; }
      `}</style>

      <main className="container">
        <header>
          <h1>Privacy policy</h1>
          <p className="subtitle">This Privacy Policy explains how we collect, use, disclose, retain, and protect your personal data when you use brandscast.com.</p>
        </header>

        <nav className="toc" aria-label="Table of Contents">
          <strong>On this page</strong>
          <ol>
            <li><a href="#controller">Identity of the controller and contact information</a></li>
            <li><a href="#collection">Collection of your data</a></li>
            <li><a href="#purpose">Purpose</a></li>
            <li><a href="#legal-basis">Legal basis</a></li>
            <li><a href="#categories">Categories of data processed</a></li>
            <li><a href="#sharing">Sharing your personal information</a></li>
            <li><a href="#transfers">International data transfers</a></li>
            <li><a href="#retention">Data retention</a></li>
            <li><a href="#rights">Data protection rights</a></li>
            <li><a href="#security">Security measures</a></li>
            <li><a href="#updates">Policy updates</a></li>
            <li><a href="#contact">Further information</a></li>
          </ol>
        </nav>

        <article>
          <section id="intro">
            <p>We consider it important that you read and understand this information. At <strong>Brandscast</strong>, you have control over your personal information and we will not use your data in an illegitimate or unfair way. This Policy follows <strong>Regulation (EU) 2016/679</strong> the General Data Protection Regulation <strong>GDPR</strong>.</p>
          </section>

          <section id="controller">
            <h2>1. Identity of the controller and contact information</h2>
            <p><strong>Controller:</strong> Pol Rodríguez Rius<br />
               <strong>Tax ID:</strong> 47651931W<br />
               <strong>Address:</strong> C/ de la Llotja s/n, Coworking VIT, Vic 08500, Spain<br />
               <strong>Email:</strong> <a href="mailto:hello@brandscast.com">hello@brandscast.com</a><br />
               <strong>Website:</strong> <a href="https://brandscast.com">brandscast.com</a>
            </p>
          </section>

          <section id="collection">
            <h2>2. Collection of your data</h2>
            <p>We may collect data about you in the following ways:</p>
            <ul>
              <li>When you contact us through communication channels provided on this website such as email.</li>
              <li>Through cookies and similar technologies. See our <a href="/cookie-policy">Cookie Policy</a> for details.</li>
            </ul>
          </section>

          <section id="purpose">
            <h2>3. Purpose</h2>
            <ul>
              <li>Manage contact requests responses and user support.</li>
              <li>Manage contractual relationships with clients who subscribe to our plans.</li>
              <li>Analyze user behavior to improve usability and marketing campaigns through cookies.</li>
              <li>Send commercial communications by email when you have given explicit consent.</li>
              <li>Provide podcast owners with relevant information or updates about their private podcasts or services.</li>
            </ul>
          </section>

          <section id="legal-basis">
            <h2>4. Legal basis</h2>
            <p><strong>Legitimate interests</strong> GDPR art 6 1 f. Communication with you by electronic means and maintaining site security provided this does not override your rights and freedoms.</p>
            <p><strong>Consent</strong> GDPR art 6 1 a. For analytical or marketing cookies and for promotional emails. You may withdraw consent at any time.</p>
            <p><strong>Contract performance</strong> GDPR art 6 1 b. When you subscribe to a paid plan we process necessary data to execute and fulfill the contract.</p>
            <p><strong>Legal obligation</strong> GDPR art 6 1 c. For billing accounting or tax requirements and to respond to lawful requests from authorities.</p>
          </section>

          <section id="categories">
            <h2>5. Categories of data processed</h2>
            <p>We collect the minimum data required. We do not process special or sensitive categories.</p>
            <ul>
              <li><strong>Access data</strong> passwords.</li>
              <li><strong>Contact data</strong> email address.</li>
              <li><strong>Connectivity data</strong> IP address and browsing activity.</li>
              <li><strong>Transaction data</strong> purchase details payment data and related correspondence.</li>
              <li><strong>Additional data</strong> any information you voluntarily share with us.</li>
            </ul>
            <p className="note">If you do not provide required data we may not be able to deliver the service properly. Please inform us of any changes so we can keep your information accurate.</p>
          </section>

          <section id="sharing">
            <h2>6. Sharing your personal information</h2>
            <p>We do not share your personal data with third parties except when required by law. We work with service providers to operate this website and manage customer relationships and we only use providers that offer adequate guarantees. When required we may disclose data to public authorities law enforcement or courts.</p>
          </section>

          <section id="transfers">
            <h2>7. International data transfers</h2>
            <p>Your data is hosted on <strong>Amazon Web Services AWS</strong> in the <strong>Ireland</strong> region. AWS may be subject to requests from US authorities which could involve international data transfers. Some cookies may transfer limited data to companies such as <strong>Google</strong> or <strong>Meta</strong> in the United States. In such cases we rely on appropriate safeguards like the European Commission standard contractual clauses.</p>
          </section>

          <section id="retention">
            <h2>8. Data retention</h2>
            <ul>
              <li><strong>Contact and support</strong> retained until your query is resolved then securely archived for up to three years.</li>
              <li><strong>Cookies</strong> see the <a href="/cookie-policy">Cookie Policy</a>.</li>
              <li><strong>Contracts and billing</strong> retained for six years after the end of the contractual relationship under the Spanish Commercial Code.</li>
            </ul>
          </section>

          <section id="rights">
            <h2>9. Data protection rights</h2>
            <p>You have the right to access rectify erase and port your data to restrict or object to processing and to withdraw consent at any time. You may also lodge a complaint with the <a href="https://www.aepd.es/">Spanish Data Protection Agency AEPD</a>.</p>
            <p>To exercise your rights email <a href="mailto:hello@brandscast.com">hello@brandscast.com</a> or send a written request with a copy of your ID to our postal address above.</p>
          </section>

          <section id="security">
            <h2>10. Security measures</h2>
            <p>We apply technical and organizational measures to protect your personal data including encrypted transport via SSL secure password hashing access control to AWS resources using IAM least privilege practices and contractual security commitments from our providers.</p>
          </section>

          <section id="updates">
            <h2>11. Policy updates</h2>
            <p>We may update this Privacy Policy to reflect changes in law or our practices. If changes are significant we will notify you through this website or by email.</p>
          </section>

          <section id="contact">
            <h2>12. Further information</h2>
            <p>If you have questions concerns or requests regarding this Policy contact us at <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>.</p>
            <hr />
            <footer>
              <p>Last updated October 2025</p>
              <p>Brandscast, C/ de la Llotja s/n, Coworking VIT, Vic 08500, Spain</p>
            </footer>
          </section>
        </article>
      </main>
    </>
  );
}
