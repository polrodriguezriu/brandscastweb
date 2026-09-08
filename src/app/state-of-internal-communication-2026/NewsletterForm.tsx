"use client";

import { useState, type FormEvent } from "react";
import styles from "./NewsletterForm.module.css";

export default function NewsletterForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const values = new FormData(form);
    setState("sending");
    setMessage("");
    try {
      const response = await fetch(
        "https://app.brandscast.com/api/marketing/subscribe",
        {
          method: "POST",
          credentials: "omit",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: values.get("email"),
            consent: values.get("consent") === "on",
          }),
          signal: AbortSignal.timeout(15000),
        },
      );
      if (!response.ok) {
        throw new Error(
          response.status === 429
            ? "Too many requests. Please try again later."
            : "Subscriptions are temporarily unavailable. The report is still free to download.",
        );
      }
      setState("sent");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error && error.name === "Error"
          ? error.message
          : "We could not connect. Please try again later.",
      );
    }
  }

  return (
    <section className={styles.signup} aria-labelledby="research-signup-title">
      <h2 id="research-signup-title">Get the next research, too.</h2>
      <p>
        Occasional Brandscast studies and practical resources on internal
        communication. No weekly newsletter commitment.
      </p>
      {state === "sent" ? (
        <p role="status">
          Check your inbox for a confirmation link. You are not subscribed until
          you confirm your email.
        </p>
      ) : (
        <form onSubmit={subscribe} className={styles.form}>
          <label htmlFor="research-email">Email address</label>
          <div className={styles.row}>
            <input
              id="research-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              disabled={state === "sending"}
            />
            <button
              className="btn"
              type="submit"
              disabled={state === "sending"}
            >
              {state === "sending" ? "Sending..." : "Subscribe"}
            </button>
          </div>
          <label className={styles.consent}>
            <input
              name="consent"
              type="checkbox"
              required
              disabled={state === "sending"}
            />
            <span>
              I want to receive Brandscast research and internal communication
              resources by email. I can unsubscribe at any time.{" "}
              <a href="/privacy/#research-emails">Privacy policy</a>.
            </span>
          </label>
          {state === "error" && <p role="alert">{message}</p>}
        </form>
      )}
      <p className={styles.note}>
        Optional. Downloading or sharing the report never requires an email
        address.
      </p>
    </section>
  );
}
