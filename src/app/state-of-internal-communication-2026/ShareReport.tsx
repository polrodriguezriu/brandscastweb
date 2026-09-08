"use client";

import { useState } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics-consent";

const REPORT_URL =
  "https://brandscast.com/state-of-internal-communication-2026/";
const REPORT_TITLE = "The State of Internal Communication 2026";

export default function ShareReport() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [showLink, setShowLink] = useState(false);

  async function copyLink() {
    setBusy(true);
    setStatus("");
    try {
      await navigator.clipboard.writeText(REPORT_URL);
      setShowLink(false);
      setStatus("Link copied.");
      trackAnalyticsEvent("report_link_copied", { report_placement: "final" });
    } catch {
      setShowLink(true);
      setStatus(
        "Could not copy automatically. Select and copy the link below.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function share() {
    if (!navigator.share) {
      await copyLink();
      return;
    }
    setBusy(true);
    setStatus("");
    try {
      await navigator.share({ title: REPORT_TITLE, url: REPORT_URL });
      setStatus("Share request completed.");
      trackAnalyticsEvent("report_shared", { report_placement: "final" });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        setStatus("Sharing cancelled.");
      } else {
        setShowLink(true);
        setStatus("Sharing is unavailable. You can copy the link instead.");
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="study-share">
      <div className="study-share-buttons">
        <button
          type="button"
          className="btn outline"
          onClick={share}
          disabled={busy}
        >
          Share report
        </button>
        <button
          type="button"
          className="study-copy-link"
          onClick={copyLink}
          disabled={busy}
        >
          Copy link
        </button>
      </div>
      <p className="study-share-status" role="status" aria-live="polite">
        {status}
      </p>
      {showLink && (
        <label className="study-share-fallback">
          Report link
          <input
            type="url"
            readOnly
            value={REPORT_URL}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      )}
    </div>
  );
}
