"use client";

import { useEffect, useRef, useState } from "react";

import {
  ANALYTICS_CONSENT_COOKIE,
  hasAnalyticsConsent,
  hasStoredAnalyticsConsentChoice,
} from "@/lib/analytics-consent";

const COOKIE_NAME = ANALYTICS_CONSENT_COOKIE;
const COOKIE_DAYS = 365;
const IGNORED_PATHS = ["/cookies", "/privacy", "/documents"];

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax${secure}`;
}

export default function CookieConsent() {
  const [showAlert, setShowAlert] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const path =
      window.location.pathname.length > 1
        ? window.location.pathname.replace(/\/+$/, "")
        : window.location.pathname;
    const isIgnored = IGNORED_PATHS.some((p) =>
      p.endsWith("*") ? path.startsWith(p.slice(0, -1)) : path === p,
    );
    if (!isIgnored && !hasStoredAnalyticsConsentChoice()) {
      setShowAlert(true);
    }
    setAnalytics(hasAnalyticsConsent());

    const handleOpenSettings = () => {
      setAnalytics(hasAnalyticsConsent());
      setShowAlert(false);
      setShowSettings(true);
    };
    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () =>
      window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  useEffect(() => {
    if (!showSettings) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const modal = modalRef.current;
    const focusable = modal?.querySelectorAll<HTMLElement>(
      "button:not([disabled]), input:not([disabled]), a[href]",
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowSettings(false);
        setShowAlert(!hasStoredAnalyticsConsentChoice());
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [showSettings]);

  const saveConsent = (value: "true" | "false" | "2") => {
    setCookie(COOKIE_NAME, value, COOKIE_DAYS);
    setAnalytics(value === "true" || value === "2");
    window.dispatchEvent(new Event("cookieConsentChanged"));
    setShowAlert(false);
    setShowSettings(false);
  };

  const handleAccept = () => {
    saveConsent("2");
  };

  const handleSave = () => {
    saveConsent(analytics ? "2" : "false");
  };

  const openSettings = () => {
    setAnalytics(hasAnalyticsConsent());
    setShowAlert(false);
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
    setShowAlert(!hasStoredAnalyticsConsentChoice());
  };

  if (!showAlert && !showSettings) return null;

  return (
    <>
      {/* Backdrop */}
      {showSettings && <div className="cc-backdrop" aria-hidden="true" />}

      {/* Alert bar */}
      {showAlert && (
        <div className="cc-bar" role="region" aria-labelledby="cc-bar-label">
          <div className="cc-bar__content">
            <p id="cc-bar-label" className="cc-bar__text">
              Brandscast uses necessary cookies and, with your permission,
              analytics cookies. <a href="/cookies/">Cookie Policy</a>.
            </p>
            <div className="cc-bar__actions">
              <button
                type="button"
                className="btn outline btn-sm"
                onClick={openSettings}
              >
                Manage
              </button>
              <button
                type="button"
                className="btn outline btn-sm"
                onClick={() => saveConsent("false")}
              >
                Reject optional
              </button>
              <button
                type="button"
                className="btn btn-sm"
                onClick={handleAccept}
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showSettings && (
        <div
          ref={modalRef}
          className="cc-modal"
          role="dialog"
          aria-labelledby="cc-modal-label"
          aria-describedby="cc-modal-description"
          aria-modal="true"
        >
          <button
            className="cc-modal__close"
            type="button"
            onClick={closeSettings}
            aria-label="Close"
          >
            ×
          </button>
          <div className="cc-modal__content">
            <h2 id="cc-modal-label" className="cc-modal__title">
              Cookie settings
            </h2>
            <p id="cc-modal-description" className="cc-modal__text">
              Necessary cookies support preferences and pricing display.
              Analytics remains off unless you allow it. See our{" "}
              <a href="/cookies/">cookie policy</a>.
            </p>

            <div className="cc-modal__accept-all">
              <button
                type="button"
                className="btn btn-sm"
                onClick={handleAccept}
              >
                Accept analytics
              </button>
            </div>

            <div className="cc-section">
              <label className="cc-label">
                <input type="checkbox" disabled checked readOnly />
                <span>Functional cookies</span>
              </label>
              <p className="cc-section__text">
                Needed for website preferences and pricing display.
              </p>
            </div>

            <div className="cc-section">
              <label className="cc-label">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
                <span>Analytical cookies</span>
              </label>
              <p className="cc-section__text">
                Allow aggregate website-usage measurement.
              </p>
            </div>
          </div>
          <div className="cc-modal__actions">
            <button
              type="button"
              className="btn outline btn-sm"
              onClick={closeSettings}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-sm" onClick={handleSave}>
              Save preferences
            </button>
          </div>
        </div>
      )}
    </>
  );
}
