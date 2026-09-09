"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../state-of-internal-communication-2026/NewsletterForm.module.css";

export default function ConfirmSubscription() {
  const [token, setToken] = useState<string | null>(null);
  const [state, setState] = useState<
    "loading" | "ready" | "sending" | "success" | "error"
  >("loading");
  const [message, setMessage] = useState("");
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const value = new URLSearchParams(window.location.hash.slice(1)).get(
      "token",
    );
    window.history.replaceState(null, "", window.location.pathname);
    setToken(value);
    setState(value ? "ready" : "error");
    if (!value)
      setMessage(
        "This confirmation link is missing or invalid. Please request a new one from the report page.",
      );
  }, []);

  async function confirm() {
    if (!token || state === "sending") return;
    setState("sending");
    try {
      const response = await fetch(
        "https://app.brandscast.com/api/marketing/confirm",
        {
          method: "POST",
          credentials: "omit",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
          signal: AbortSignal.timeout(15000),
        },
      );
      if (!response.ok) {
        setToken(null);
        setMessage(
          response.status === 409
            ? "Your address was previously unsubscribed. This request has not changed that preference. Contact hello@brandscast.com if you need help managing your subscription."
            : response.status === 400 || response.status === 410
              ? "This link has expired or has already been used. Please request a new confirmation email."
              : "We could not complete confirmation. Please request a new confirmation email from the report page and check your subscription preferences before requesting another.",
        );
        setState("error");
        return;
      }
      setToken(null);
      setState("success");
    } catch {
      setToken(null);
      setMessage(
        "We could not verify the result. Please request a new confirmation email from the report page. Your previous link may already have been used.",
      );
      setState("error");
    }
  }

  return (
    <main className={styles.signup}>
      <a href="/">Brandscast</a>
      <h1>
        {state === "success"
          ? "You are subscribed."
          : "Confirm your subscription"}
      </h1>
      <p>
        Occasional Brandscast research and internal communication resources.
        Unsubscribe at any time.
      </p>
      {state === "loading" && <p role="status">Loading...</p>}
      {state === "success" && (
        <p role="status">
          Your email address is confirmed. Thank you for subscribing.
        </p>
      )}
      {state === "error" && <p role="alert">{message}</p>}
      {token && state !== "success" && (
        <button
          className="btn"
          type="button"
          disabled={state === "sending"}
          onClick={confirm}
        >
          {state === "sending" ? "Confirming..." : "Confirm subscription"}
        </button>
      )}
      <p>
        <a href="/state-of-internal-communication-2026/">
          Read the report highlights
        </a>
      </p>
      <p>
        <a href="/report/the-state-of-internal-communication-2026.pdf" download>
          Download the report
        </a>
      </p>
    </main>
  );
}
