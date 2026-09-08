"use client";

import { useMemo, useRef, useState } from "react";

import { trackAnalyticsEvent } from "@/lib/analytics-consent";

type Score = 0 | 1 | 2;
type Answer = Score | null;
type AuditEvent =
  | "coverage_audit_started"
  | "coverage_audit_completed"
  | "coverage_audit_review_requested"
  | "coverage_audit_signup_clicked"
  | "coverage_audit_printed"
  | "coverage_audit_reset";

const knownAuditSources = new Set([
  "report",
  "homepage",
  "deskless-guide",
  "metrics-guide",
]);

interface Question {
  id: string;
  title: string;
  prompt: string;
}

const questions: Question[] = [
  {
    id: "audience",
    title: "Intended audience",
    prompt:
      "Is the intended workforce for important messages explicitly defined by segment?",
  },
  {
    id: "access",
    title: "Realistic access",
    prompt:
      "Can this group realistically access at least one asynchronous channel during or around the working day?",
  },
  {
    id: "prerequisites",
    title: "Access prerequisites",
    prompt:
      "Do you know which devices, logins, apps, inboxes or shift overlaps are required to use the current channels?",
  },
  {
    id: "measurement",
    title: "Segment-level evidence",
    prompt:
      "Can communication performance be measured for this workforce group rather than only as a channel-wide aggregate?",
  },
  {
    id: "manager",
    title: "Manager dependency",
    prompt:
      "Are groups that depend mainly on managers identified and supported by another reliable source of truth?",
  },
  {
    id: "equivalent",
    title: "Accessible equivalent",
    prompt:
      "Does every critical message retain an accessible written or visual equivalent?",
  },
  {
    id: "pilot",
    title: "Testable use case",
    prompt:
      "Is there one safe, recurring message and one defined audience suitable for a small test?",
  },
];

const scoreOptions: Array<{ value: Score; label: string; detail: string }> = [
  { value: 0, label: "Unknown", detail: "No evidence" },
  { value: 1, label: "Partial", detail: "Proxy or inconsistent" },
  { value: 2, label: "Verified", detail: "Segment-level evidence" },
];

function initialAnswers(): Record<string, Answer> {
  return Object.fromEntries(
    questions.map((question) => [question.id, null]),
  ) as Record<string, Answer>;
}

function getInterpretation(score: number) {
  if (score <= 4) {
    return {
      label: "Map before adding a channel",
      detail:
        "There is not enough visibility to select a tool responsibly. Define the audience and access conditions first.",
    };
  }

  if (score <= 8) {
    return {
      label: "Validate the coverage gaps",
      detail:
        "Material unknowns remain. Confirm one or two hypotheses with the workforce group and its manager.",
    };
  }

  if (score <= 11) {
    return {
      label: "A small pilot may be justified",
      detail:
        "The foundations are present if the message is recurring, the owner is named and listening has a safe context.",
    };
  }

  return {
    label: "Strong measurement foundation",
    detail:
      "Current visibility appears strong. Any pilot should prove incremental value rather than duplicate existing coverage.",
  };
}

function trackAuditEvent(
  eventName: AuditEvent,
  parameters?: Record<string, number | string>,
) {
  const sourceParameter = new URLSearchParams(window.location.search).get(
    "source",
  );
  const source = sourceParameter
    ? knownAuditSources.has(sourceParameter)
      ? sourceParameter
      : "other"
    : "direct";

  return trackAnalyticsEvent(eventName, {
    audit_source: source,
    ...parameters,
  });
}

export default function CoverageAudit() {
  const trackedStart = useRef(false);
  const [company, setCompany] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const [channels, setChannels] = useState("");
  const [answers, setAnswers] =
    useState<Record<string, Answer>>(initialAnswers);

  const answeredCount = Object.values(answers).filter(
    (answer) => answer !== null,
  ).length;
  const score = Object.values(answers).reduce<number>(
    (total, answer) => total + (answer ?? 0),
    0,
  );
  const complete = answeredCount === questions.length;
  const interpretation = getInterpretation(score);

  const hypothesis = useMemo(() => {
    const groupName = group.trim() || "this workforce group";
    const messageName = message.trim() || "this recurring message";
    const channelName = channels.trim() || "the current channel mix";

    if (score >= 12) {
      return (
        "Evidence for " +
        groupName +
        " appears comparatively strong across " +
        channelName +
        ". Test an additional format only if " +
        messageName +
        " has a distinct, measurable consumption window."
      );
    }

    return (
      "We believe " +
      groupName +
      " may have an incomplete opportunity to receive " +
      messageName +
      " through " +
      channelName +
      ". The audit identifies where access or segment-level evidence still needs to be validated."
    );
  }, [channels, group, message, score]);

  const mailtoHref = useMemo(() => {
    const answerLines = questions
      .map((question) => {
        const value = answers[question.id];
        const selected = scoreOptions.find((option) => option.value === value);
        return "- " + question.title + ": " + (selected?.label ?? "Unanswered");
      })
      .join("\n");
    const subject =
      "Coverage audit question" + (company ? " - " + company : "");
    const body = [
      "Hello Brandscast,",
      "",
      "I have a question about this Communication Coverage Audit.",
      "",
      "Company: " + (company || "Not provided"),
      "Workforce group: " + (group || "Not provided"),
      "Recurring message: " + (message || "Not provided"),
      "Current channels: " + (channels || "Not provided"),
      "Evidence score: " + score + "/14",
      "Interpretation: " + interpretation.label,
      "",
      "Answers:",
      answerLines,
      "",
      "Working hypothesis: " + hypothesis,
    ].join("\n");

    return (
      "mailto:hello@brandscast.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body)
    );
  }, [
    answers,
    channels,
    company,
    group,
    hypothesis,
    interpretation.label,
    message,
    score,
  ]);

  const setAnswer = (questionId: string, value: Score) => {
    const wasAnswered = answers[questionId] !== null;

    if (!trackedStart.current) {
      trackedStart.current = trackAuditEvent("coverage_audit_started");
    }

    if (!wasAnswered && answeredCount === questions.length - 1) {
      trackAuditEvent("coverage_audit_completed", {
        evidence_score: score + value,
      });
    }

    setAnswers((current) => ({ ...current, [questionId]: value }));
  };

  const resetAudit = () => {
    trackAuditEvent("coverage_audit_reset", { evidence_score: score });
    trackedStart.current = false;
    setCompany("");
    setGroup("");
    setMessage("");
    setChannels("");
    setAnswers(initialAnswers());
  };

  return (
    <section className="content-section coverage-audit-tool-section">
      <div className="section-inner">
        <div className="coverage-audit-print-heading">
          <span>Brandscast</span>
          <div className="coverage-audit-print-title">
            Communication Coverage Audit
          </div>
          <p>One workforce group, one recurring message, seven questions.</p>
        </div>
        <div className="coverage-audit-intro">
          <div>
            <div className="eyebrow">The audit</div>
            <h2>Start with one group and one message</h2>
            <p>
              Use what you know today. Choose <strong>Unknown</strong> whenever
              the evidence is missing rather than filling the gap with an
              assumption.
            </p>
          </div>
          <div className="coverage-audit-progress" aria-live="polite">
            <span>{answeredCount} of 7 questions answered</span>
            <progress value={answeredCount} max={questions.length}>
              {answeredCount} of {questions.length}
            </progress>
          </div>
        </div>

        <div
          className="coverage-audit-context"
          role="group"
          aria-label="Audit context"
        >
          <label>
            <span>Company</span>
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Optional"
              autoComplete="organization"
              maxLength={120}
            />
          </label>
          <label>
            <span>Workforce group</span>
            <input
              type="text"
              value={group}
              onChange={(event) => setGroup(event.target.value)}
              placeholder="e.g. field sales"
              maxLength={120}
            />
          </label>
          <label>
            <span>Recurring message</span>
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="e.g. weekly product update"
              maxLength={160}
            />
          </label>
          <label>
            <span>Current channels</span>
            <input
              type="text"
              value={channels}
              onChange={(event) => setChannels(event.target.value)}
              placeholder="e.g. email, intranet, managers"
              maxLength={160}
            />
          </label>
        </div>

        <div className="coverage-audit-layout">
          <div className="coverage-audit-questions">
            {questions.map((question, index) => (
              <fieldset className="coverage-question" key={question.id}>
                <legend>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question.title}
                </legend>
                <p>{question.prompt}</p>
                <div
                  className="coverage-score-options"
                  role="group"
                  aria-label={question.title + " evidence"}
                >
                  {scoreOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={
                        answers[question.id] === option.value
                          ? "coverage-score-option is-selected"
                          : "coverage-score-option"
                      }
                      aria-pressed={answers[question.id] === option.value}
                      onClick={() => setAnswer(question.id, option.value)}
                    >
                      <strong>{option.label}</strong>
                      <span>{option.detail}</span>
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <aside
            className="coverage-audit-result"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="coverage-audit-result__score">
              <span>Evidence score</span>
              <strong>{score}/14</strong>
            </div>

            {complete ? (
              <>
                <div className="coverage-audit-result__status">Complete</div>
                <h3>{interpretation.label}</h3>
                <p>{interpretation.detail}</p>

                <div className="coverage-audit-hypothesis">
                  <span>Working hypothesis</span>
                  <p>{hypothesis}</p>
                </div>

                <div className="coverage-audit-result__actions">
                  <a
                    className="btn"
                    href="https://app.brandscast.com/signup"
                    onClick={() =>
                      trackAuditEvent("coverage_audit_signup_clicked", {
                        evidence_score: score,
                      })
                    }
                  >
                    Start trial
                  </a>
                  <a
                    className="btn outline"
                    href={mailtoHref}
                    onClick={() =>
                      trackAuditEvent("coverage_audit_review_requested", {
                        evidence_score: score,
                      })
                    }
                  >
                    Ask a question by email (optional)
                  </a>
                  <button
                    className="btn outline"
                    type="button"
                    onClick={() => {
                      trackAuditEvent("coverage_audit_printed", {
                        evidence_score: score,
                      });
                      window.print();
                    }}
                  >
                    Print or save as PDF
                  </button>
                  <button
                    className="btn outline"
                    type="button"
                    onClick={resetAudit}
                  >
                    Reset audit
                  </button>
                </div>
                <p className="coverage-audit-result__note">
                  No review or call is required to create an account. The trial
                  includes 5 minutes shared between text-to-audio and audio
                  enhancement per organisation for the entire trial, with no
                  renewal. <a href="/#pricing">See plans and limits</a>. The
                  optional email link opens a draft in your email client. Review
                  its contents before sending; nothing is submitted
                  automatically. With analytics consent, Brandscast may measure
                  the audit source, completion and numerical score, but never
                  these context fields or the email body.
                </p>
              </>
            ) : (
              <>
                <div className="coverage-audit-result__status is-pending">
                  In progress
                </div>
                <h3>Complete all seven questions</h3>
                <p>
                  The result will provide a working coverage hypothesis and a
                  next-step recommendation. It can conclude that no audio pilot
                  is justified yet.
                </p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
