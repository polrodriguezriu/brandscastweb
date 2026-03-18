import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal notice · Brandscast',
  description: 'Legal notice and contracting terms for brandscast.com (Owner: Pol Rodríguez Rius). Read terms of use, cookies, data protection, liability and jurisdiction.',
  alternates: { canonical: 'https://brandscast.com/legal' },
  robots: 'noindex,follow',
  openGraph: {
    url: 'https://brandscast.com/legal',
    title: 'Legal notice · Brandscast',
    description: 'Legal notice and contracting terms for brandscast.com.',
  },
};

export default function LegalPage() {
  return (
    <>
      <style>{`
        :root { --bg: #ffffff; --fg: #0f172a; --muted: #475569; --border: #e2e8f0; --brand: #2e5af4; --card: #f8fafc; }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: var(--fg); background: var(--bg); }
        header { background: linear-gradient(180deg, #fff, #f7f9ff); border-bottom: 1px solid var(--border); }
        .container { max-width: 860px; margin: 0 auto; padding: 32px 20px; }
        h1, h2, h3 { line-height: 1.25; margin: 1.5em 0 0.5em; }
        h1 { font-size: 2rem; margin-top: 0.25em; }
        h2 { font-size: 1.25rem; }
        h3 { font-size: 1.05rem; }
        p, li { color: var(--fg); }
        .muted { color: var(--muted); }
        .card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 16px 18px; }
        a { color: var(--brand); text-decoration: none; }
        a:hover { text-decoration: underline; }
        .toc a { display: block; padding: 6px 0; }
        footer { border-top: 1px solid var(--border); margin-top: 40px; padding: 20px 0 40px; color: var(--muted); font-size: 0.95rem; }
        .meta { margin-top: 6px; font-size: 0.95rem; color: var(--muted); }
      `}</style>

      <header>
        <div className="container">
          <h1>Legal notice</h1>
          <p className="meta">Last updated: 14 October 2025</p>
        </div>
      </header>

      <main className="container">
        <nav className="card toc" aria-label="Table of contents">
          <strong>On this page</strong>
          <a href="#identification-and-ownership">Identification and ownership</a>
          <a href="#purpose">Purpose</a>
          <a href="#terms-of-use">Terms of use</a>
          <a href="#security-measures">Security measures</a>
          <a href="#personal-data">Personal data</a>
          <a href="#content">Content</a>
          <a href="#cookies-policy">Cookies policy</a>
          <a href="#links-to-other-websites">Links to other websites</a>
          <a href="#intellectual-and-industrial-property">Intellectual and industrial property</a>
          <a href="#contracting-terms">Contracting terms</a>
          <a href="#limitation-of-liability">Limitation of liability</a>
          <a href="#jurisdiction-and-applicable-law">Jurisdiction and applicable law</a>
          <a href="#contact">Contact</a>
        </nav>

        <section id="identification-and-ownership">
          <h2>Identification and ownership</h2>
          <p>In compliance with Article 10 of Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), the Owner provides the following identification details:</p>
          <div className="card">
            <p><strong>Owner:</strong> Pol Rodríguez Rius<br />
            <strong>Tax ID (NIF):</strong> 47651931W<br />
            <strong>Address:</strong> C/ de la Llotja s/n, Coworking VIT, 08500 Vic (Barcelona), Spain<br />
            <strong>Email:</strong> <a href="mailto:hello@brandscast.com">hello@brandscast.com</a><br />
            <strong>Website:</strong> <a href="https://brandscast.com">https://brandscast.com</a></p>
          </div>
        </section>

        <section id="purpose">
          <h2>Purpose</h2>
          <p>The purpose of <strong>https://brandscast.com</strong> is to provide information about Brandscast and its services related to private podcasts for teams and internal communications.</p>
        </section>

        <section id="terms-of-use">
          <h2>Terms of use</h2>
          <p>Access to the Website grants you the status of <strong>User</strong> and implies full and unreserved acceptance of all clauses and conditions of use contained on the following pages:</p>
          <ul>
            <li><a href="/legal">Legal notice</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
            <li><a href="/cookies">Cookies policy</a></li>
          </ul>
          <p>If you do not agree with each and every one of these clauses and conditions, you should refrain from using this Website.</p>
          <p>Through this Website, the Owner provides access to various content published on the Internet by the Owner or its collaborators. You agree <strong>not</strong> to use any content of the Website for unlawful purposes, for purposes prohibited in this Legal Notice or in applicable law, or for purposes harmful to the rights and interests of third parties, or that in any way may damage, disable, overload, deteriorate, or impede the normal use of the contents, computer equipment, or documents, files, and all kinds of content stored on any computer equipment owned or hired by the Owner, other users, or any Internet user.</p>
          <p>The Owner is not responsible for opinions expressed by users through comments or other participation tools, in accordance with applicable regulations.</p>
        </section>

        <section id="security-measures">
          <h2>Security measures</h2>
          <p>Personal data you provide to the Owner may be stored in automated or non-automated databases, exclusively owned by <strong>Pol Rodríguez Rius</strong>, who adopts technical, organizational, and security measures to ensure the confidentiality, integrity, and quality of the information in accordance with the applicable data protection regulations.</p>
          <p>However, you should be aware that Internet computer security measures are not entirely reliable. Therefore, the Owner cannot guarantee the absence of viruses or other elements that may cause alterations in the User&apos;s computer systems (software and hardware) or in their electronic documents and files, even though the Owner uses all necessary means and appropriate security measures to prevent the presence of such harmful elements.</p>
        </section>

        <section id="personal-data">
          <h2>Personal data</h2>
          <p>You can find complete information on the processing of personal data collected by the Owner in the <a href="/privacy">Privacy policy</a> of this Website.</p>
        </section>

        <section id="content">
          <h2>Content</h2>
          <p>The Owner has obtained the information, multimedia content, and materials included on the Website from sources considered reliable. While reasonable measures have been taken to ensure the information is correct, the Owner does not guarantee that it is accurate, complete, or up to date. The Owner expressly disclaims any liability for errors or omissions in the information contained on the pages of this Website.</p>
          <p>It is prohibited to transmit or send through the Website any illegal or unlawful content, computer viruses, or messages that, in general, affect or violate the rights of the Owner or third parties.</p>
          <p>The contents of <strong>https://brandscast.com</strong> are for informational purposes only.</p>
          <p>The Owner reserves the right to modify, suspend, cancel, or restrict the content of <strong>https://brandscast.com</strong>, links, or information obtained through the Website, without prior notice.</p>
          <p>The Owner is not responsible for damages that may arise from the use of the information on the Website.</p>
        </section>

        <section id="cookies-policy">
          <h2>Cookies policy</h2>
          <p>Please refer to the <a href="/cookies">Cookies policy</a> page for full details on the collection and processing of cookies.</p>
        </section>

        <section id="links-to-other-websites">
          <h2>Links to other websites</h2>
          <p>The Owner may provide you with access to third-party websites via links for the sole purpose of informing you about the existence of other sources of information on the Internet, where you can expand on the data offered on this Website.</p>
          <p>These links to other websites do <strong>not</strong> imply any suggestion or recommendation to visit the destination web pages, which are beyond the Owner&apos;s control. Therefore, the Owner is not responsible for the content of the linked websites or for the result obtained by following the links.</p>
          <p>Likewise, the Owner is not responsible for links located on websites that provide you with access to this Website.</p>
          <p>Establishing a link does not imply, in any case, the existence of a relationship between the Owner and the owner of the site where the link is established, nor the acceptance or approval by the Owner of its contents or services.</p>
          <p>If you access an external website from a link found on <strong>https://brandscast.com</strong>, you must read the other site&apos;s own privacy policy, which may differ from this Website&apos;s policy.</p>
        </section>

        <section id="intellectual-and-industrial-property">
          <h2>Intellectual and industrial property</h2>
          <p>All rights reserved.</p>
          <p>Access to this Website is subject to the following conditions: reproduction, permanent storage, public communication, distribution, and any use of the contents for public or commercial purposes is expressly prohibited without the prior, express, and written consent of <strong>Pol Rodríguez Rius</strong>.</p>
        </section>

        <section id="contracting-terms">
          <h2>Contracting terms</h2>
          <p>In accordance with Article 6 of Directive 2011/83/EU on consumer rights, the following pre-contract information is provided.</p>

          <h3>First, identification</h3>
          <p>The services provided for sale through <strong>brandscast.com</strong> are subscription memberships to software services (SaaS). On <strong>brandscast.com</strong>, you are contracting directly with <strong>Pol Rodríguez Rius</strong>.</p>

          <h3>Second, products and prices</h3>
          <p>On <strong>brandscast.com</strong>, you can purchase access to services. Prices and applicable taxes may vary depending on the customer&apos;s country, which may be detected through the IP address and the billing details provided during checkout.</p>

          <h3>Support service</h3>
          <p>Customers have email support available at <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>.</p>

          <h3>Third, purchase process</h3>
          <p>To place an order on our Website, registration during checkout may be required. Our system may create a customer account with the email address and password you choose, to facilitate login and future purchases. These data will be processed and incorporated into our files as described in the <a href="/privacy">Privacy policy</a>.</p>

          <h3>Payment method</h3>
          <p>Credit or debit card. You will be asked for your card number and expiration date. For your peace of mind, we use secure payment processing via <strong>Stripe, Inc.</strong> Your personal and payment data are transmitted in encrypted form using TLS/SSL. At no time does <strong>Pol Rodríguez Rius</strong> receive or store your full card data—only the confirmation of your payment from the payment processor.</p>

          <h3>Subscription renewal</h3>
          <p>Membership subscriptions are <strong>recurring</strong> on a monthly or annual basis (as applicable) and renew automatically. You can cancel at any time from the &quot;Account&quot; section within the Website. There are no lock-in periods or minimum terms beyond the current billing period.</p>

          <h3>Fourth, cancellation and returns</h3>
          <p>The customer undertakes to always provide truthful information in the various purchase forms. Under Article 102 of Royal Legislative Decree 1/2007, of 16 November (Spain), the right of withdrawal does not apply to contracts for the supply of digital content (programs, applications, games, music, videos, or computer texts, whether by download or streaming) that is not provided on a material medium once execution has begun. Therefore, when purchasing a downloadable or instantly accessible digital product or service and execution has begun, you lose your right of withdrawal. As these are digital services, there are no material return costs; access is simply limited or cancelled, and therefore there will be no refund of such costs. For services, if they cannot be provided due to a lack of cooperation by the customer, the customer will lose the right to a refund of amounts paid. Post-sale assistance related to access or download difficulties is free of charge; consultations beyond technical access issues are not included as free support.</p>
        </section>

        <section id="limitation-of-liability">
          <h2>Limitation of liability</h2>
          <p>The information and services included on or available through this Website may include inaccuracies or typographical errors. The Owner periodically incorporates improvements and/or changes to the information contained and/or the Services, which may be introduced at any time.</p>
          <p>The Owner does not represent or warrant that the services or content will be uninterrupted or error-free, that defects will be corrected, or that the service or the server that makes it available are free of viruses or other harmful components, notwithstanding that the Owner makes best efforts to avoid such incidents.</p>
          <p>The Owner declines any liability in the event of interruptions or malfunction of the Services or content offered on the Internet, whatever the cause. Likewise, the Owner is not responsible for network failures, business losses resulting from such failures, temporary power outages, or any other type of indirect damage that may be caused by reasons beyond the Owner&apos;s control.</p>
          <p>Before making decisions and/or taking actions based on the information included on the Website, the Owner recommends verifying and cross-checking the information with other sources.</p>
        </section>

        <section id="jurisdiction-and-applicable-law">
          <h2>Jurisdiction and applicable law</h2>
          <p>This Legal Notice is governed in its entirety by <strong>Spanish law</strong>.</p>
          <p>Unless a mandatory rule provides otherwise, for any questions that may arise regarding the interpretation, application, and enforcement of this Legal Notice, as well as any claims that may derive from its use, the parties agree to submit to the <strong>Courts and Tribunals of the province of Barcelona</strong>, expressly waiving any other jurisdiction that may correspond to them.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>If you have any questions about these legal conditions or wish to make any comments about this Website, you can send an email to <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>.</p>
        </section>

        <footer>
          <p>&copy; {new Date().getFullYear()} Brandscast. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
