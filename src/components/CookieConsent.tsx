'use client';

import Script from 'next/script';

export default function CookieConsent() {
  return (
    <>
      {/* Cookie consent modals */}
      <div
        role="dialog"
        aria-labelledby="lcc-modal-alert-label"
        aria-describedby="lcc-modal-alert-desc"
        aria-modal="true"
        className="lcc-modal lcc-modal--alert js-lcc-modal js-lcc-modal-alert"
        style={{ display: 'none' }}
        data-cookie-key="__cookie_consent"
        data-cookie-value-analytics="2"
        data-cookie-value-marketing="3"
        data-cookie-value-both="true"
        data-cookie-value-none="false"
        data-cookie-expiration-days="365"
        data-gtm-event="cookie_refresh"
        data-ignored-paths="/cookies,/privacy,/documents*"
      >
        <div className="lcc-modal__content">
          <h2 id="lcc-modal-alert-label" className="lcc-modal__title">This website uses cookies</h2>
          <p id="lcc-modal-alert-desc" className="lcc-text">
            Brandscast uses its own and third party cookies to allow the website function properly, for analytical purposes and to show you personalized advertising based on a profile drawn up from your browsing habits. You can configure or reject all cookies by clicking the &quot;Manage&quot; button. Or you can accept all cookies by pressing the &quot;Accept&quot; button. For further information you can visit our{' '}
            <a href="/cookies" target="_blank">Cookie Policy</a>.
          </p>
        </div>
        <div className="lcc-modal__actions">
          <button type="button" className="js-lcc-settings-toggle btn btn-sm btn-outline-secondary">Manage</button>
          <button type="button" className="js-lcc-accept btn btn-sm btn-primary">Accept Cookies</button>
        </div>
      </div>

      <div
        role="dialog"
        aria-labelledby="lcc-modal-settings-label"
        aria-describedby="lcc-modal-settings-desc"
        aria-modal="true"
        className="lcc-modal lcc-modal--settings js-lcc-modal js-lcc-modal-settings"
        style={{ display: 'none' }}
      >
        <button className="lcc-modal__close js-lcc-settings-toggle" type="button">
          <span className="lcc-u-sr-only">Close</span>
          ×
        </button>
        <div className="lcc-modal__content">
          <div className="lcc-modal__content">
            <h2 id="lcc-modal-settings-label" className="lcc-modal__title">Cookie settings</h2>
            <p id="lcc-modal-settings-desc" className="lcc-text">
              Our website keeps three levels of cookies. You can adjust your preferences at any time. If you want more information about what cookies are and which cookies we collect, please read our{' '}
              <a href="/cookies" target="_blank">cookie policy</a>.
            </p>
            <div className="lcc-modal__section lcc-u-text-center">
              <button type="button" className="lcc-button js-lcc-accept btn btn-sm btn-primary">Accept all Cookies</button>
            </div>
            <div className="lcc-modal__section">
              <label htmlFor="lcc-checkbox-essential" className="lcc-label">
                <input type="checkbox" id="lcc-checkbox-essential" disabled checked readOnly />
                <span>Functional cookies</span>
              </label>
              <p className="lcc-text">are essential cookies that ensure that the website functions properly and that your preferences are saved.</p>
            </div>
            <div className="lcc-modal__section">
              <label htmlFor="lcc-checkbox-analytics" className="lcc-label">
                <input type="checkbox" id="lcc-checkbox-analytics" />
                <span>Analytical cookies</span>
              </label>
              <p className="lcc-text">allow us to analyse website use and to improve the visitor&apos;s experience.</p>
            </div>
            <div className="lcc-modal__section">
              <label htmlFor="lcc-checkbox-marketing" className="lcc-label">
                <input type="checkbox" id="lcc-checkbox-marketing" />
                <span>Marketing cookies</span>
              </label>
              <p className="lcc-text">allow us to personalise your experience and to send you relevant content and offers, on this website and other websites.</p>
            </div>
          </div>
        </div>
        <div className="lcc-modal__actions">
          <button type="button" className="js-lcc-settings-toggle btn btn-sm btn-outline-secondary">Cancel</button>
          <button type="button" className="js-lcc-settings-save btn btn-sm btn-primary">Save</button>
        </div>
      </div>

      <div className="lcc-backdrop js-lcc-backdrop" style={{ display: 'none' }} />

      <Script src="/assets/js/cookie-consent.js" strategy="afterInteractive" />
    </>
  );
}
