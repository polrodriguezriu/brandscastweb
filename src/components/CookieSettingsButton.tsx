"use client";

export default function CookieSettingsButton() {
  return (
    <button
      className="btn outline"
      type="button"
      onClick={() => window.dispatchEvent(new Event("openCookieSettings"))}
    >
      Manage cookie preferences
    </button>
  );
}
