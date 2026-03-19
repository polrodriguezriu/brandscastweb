'use client';

import { useState, useEffect } from 'react';

const COOKIE_NAME = '__cookie_consent';
const COOKIE_DAYS = 365;
const IGNORED_PATHS = ['/cookies', '/privacy', '/documents'];

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

export default function CookieConsent() {
  const [showAlert, setShowAlert] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const isIgnored = IGNORED_PATHS.some(p =>
      p.endsWith('*') ? path.startsWith(p.slice(0, -1)) : path === p
    );
    if (!isIgnored && !getCookie(COOKIE_NAME)) {
      setShowAlert(true);
    }

    const handleOpenSettings = () => {
      setShowAlert(false);
      setShowSettings(true);
    };
    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, 'true', COOKIE_DAYS);
    setShowAlert(false);
    setShowSettings(false);
  };

  const handleSave = () => {
    let value = 'false';
    if (analytics && marketing) value = 'true';
    else if (analytics) value = '2';
    else if (marketing) value = '3';
    setCookie(COOKIE_NAME, value, COOKIE_DAYS);
    setShowAlert(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowAlert(false);
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
    setShowAlert(true);
  };

  if (!showAlert && !showSettings) return null;

  return (
    <>
      {/* Backdrop */}
      {showSettings && <div className="cc-backdrop" />}

      {/* Alert bar */}
      {showAlert && (
        <div className="cc-bar" role="dialog" aria-labelledby="cc-bar-label" aria-modal="true">
          <div className="cc-bar__content">
            <p id="cc-bar-label" className="cc-bar__text">
              Brandscast uses cookies to ensure proper website functionality, for analytics, and to show you personalised content.{' '}
              <a href="/cookies" target="_blank">Cookie Policy</a>.
            </p>
            <div className="cc-bar__actions">
              <button type="button" className="btn outline btn-sm" onClick={openSettings}>Manage</button>
              <button type="button" className="btn btn-sm" onClick={handleAccept}>Accept Cookies</button>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showSettings && (
        <div className="cc-modal" role="dialog" aria-labelledby="cc-modal-label" aria-modal="true">
          <button className="cc-modal__close" type="button" onClick={closeSettings} aria-label="Close">×</button>
          <div className="cc-modal__content">
            <h2 id="cc-modal-label" className="cc-modal__title">Cookie settings</h2>
            <p className="cc-modal__text">
              Our website uses three levels of cookies. Adjust your preferences below. For more information, visit our{' '}
              <a href="/cookies" target="_blank">cookie policy</a>.
            </p>

            <div className="cc-modal__accept-all">
              <button type="button" className="btn btn-sm" onClick={handleAccept}>Accept all Cookies</button>
            </div>

            <div className="cc-section">
              <label className="cc-label">
                <input type="checkbox" disabled checked readOnly />
                <span>Functional cookies</span>
              </label>
              <p className="cc-section__text">Essential — ensure the website functions properly and your preferences are saved.</p>
            </div>

            <div className="cc-section">
              <label className="cc-label">
                <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
                <span>Analytical cookies</span>
              </label>
              <p className="cc-section__text">Allow us to analyse website usage and improve the visitor experience.</p>
            </div>

            <div className="cc-section">
              <label className="cc-label">
                <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
                <span>Marketing cookies</span>
              </label>
              <p className="cc-section__text">Allow us to personalise your experience and send you relevant content and offers.</p>
            </div>
          </div>
          <div className="cc-modal__actions">
            <button type="button" className="btn outline btn-sm" onClick={closeSettings}>Cancel</button>
            <button type="button" className="btn btn-sm" onClick={handleSave}>Save preferences</button>
          </div>
        </div>
      )}
    </>
  );
}
