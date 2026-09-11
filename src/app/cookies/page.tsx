import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie policy | Brandscast",
  description:
    "Cookie policy for brandscast.com, including necessary preferences and optional Google Analytics cookies.",
  alternates: { canonical: "https://brandscast.com/cookies/" },
  robots: "noindex,follow",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Legal</div>
          <h1>Cookie policy</h1>
          <p className="lead">
            This page explains which cookies brandscast.com uses, why they are
            used and how to change your choice.
          </p>
          <p className="hero-meta">Last updated: 11 September 2026</p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner">
            <h2>Your choice</h2>
            <p>
              Necessary cookies support website preferences and cannot be
              disabled through the banner. Google Analytics is optional and is
              loaded only after analytics consent is stored.
            </p>
            <CookieSettingsButton />
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>Cookies used on this website</h2>
            <div className="cookie-table">
              <table>
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Provider</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>__cookie_consent</code>
                    </td>
                    <td>Brandscast</td>
                    <td>
                      Stores whether optional analytics was accepted or
                      rejected.
                    </td>
                    <td>365 days</td>
                  </tr>
                  <tr>
                    <td>
                      <code>currency</code>
                    </td>
                    <td>Brandscast</td>
                    <td>
                      Displays homepage pricing in EUR or USD based on country.
                    </td>
                    <td>24 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <code>_ga</code>, <code>_ga_*</code>
                    </td>
                    <td>Google Analytics</td>
                    <td>Measures website usage after analytics consent.</td>
                    <td>Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Analytics</h2>
              <p>
                When you allow analytics, brandscast.com loads Google Analytics
                using measurement ID <code>G-7G5RLF81SG</code>. We use these
                statistics to understand aggregate website use and campaign
                progression.
              </p>
              <p>
                Brandscast does not put names, email addresses, company names or
                free-text audit answers into its custom Google Analytics events.
                Historical events from the retired communication audit may
                include the controlled campaign source and the numerical
                evidence score. The audit no longer collects new events.
              </p>
              <p>
                On the text-to-audio page, optional analytics records when the
                public audio example is played and which trial button is
                clicked. These events contain only a fixed example name or
                button placement, not document contents or personal feed links.
              </p>
            </div>
            <aside className="callout">
              <h3>Change or withdraw consent</h3>
              <p>
                Use the preference button on this page at any time. Rejecting
                optional cookies disables future analytics collection and
                removes the Google Analytics cookies that this site can access.
                You can also clear site data in your browser settings.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner">
            <h2>More information</h2>
            <p>
              See the <a href="/privacy/">Privacy Policy</a> for controller,
              legal basis, international transfer and data-rights information.
              Questions can be sent to{" "}
              <a href="mailto:hello@brandscast.com">hello@brandscast.com</a>.
            </p>
          </div>
        </section>
      </main>

      <FooterMinimal />
    </>
  );
}
