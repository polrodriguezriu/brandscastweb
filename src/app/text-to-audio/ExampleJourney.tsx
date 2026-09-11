"use client";

import { useRef, useState } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics-consent";
import TrialLink from "./TrialLink";

const steps = [
  "The written update",
  "The audio version",
  "Private publication",
  "The Member experience",
];

export default function ExampleJourney({
  source,
  transcript,
}: {
  source: string;
  transcript: string;
}) {
  const [step, setStep] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const playTracked = useRef(false);
  const stepButtons = useRef<(HTMLButtonElement | null)[]>([]);

  function chooseStep(index: number) {
    if (index !== 1) audio.current?.pause();
    setStep(index);
    stepButtons.current[index]?.focus();
  }

  return (
    <div className="tta-example">
      <div className="tta-step-picker" aria-label="Explore the example">
        {steps.map((label, index) => (
          <button
            key={label}
            ref={(element) => {
              stepButtons.current[index] = element;
            }}
            type="button"
            aria-pressed={step === index}
            aria-controls={`example-step-${index}`}
            onClick={() => chooseStep(index)}
          >
            <span className="tta-step-number" aria-hidden="true">
              0{index + 1}
            </span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="tta-example-body">
        <div id="example-step-0" hidden={step !== 0}>
          <div className="tta-example-grid">
            <div className="tta-paper">
              <div className="tta-paper-top">
                <span>OPERATIONS / WEEKLY</span>
                <span>01</span>
              </div>
              <h3>One update. Already written.</h3>
              <pre>{source}</pre>
              <a
                className="tta-text-link"
                href="/examples/weekly-team-update.txt"
                download
              >
                Download this example (.txt) ↓
              </a>
            </div>
            <div className="tta-example-copy">
              <span className="tta-kicker">Start with what you have</span>
              <h3>The same update, another way to catch up.</h3>
              <p>
                A handover checklist. A change of location. Next week’s rota.
                Give a routine written update an audio version your team can
                choose to hear.
              </p>
              <p>
                In Brandscast, create a Track for your updates, choose{" "}
                <strong>Generate from text</strong>, then paste your text or
                upload a TXT, DOCX or PDF. This example follows the AI route;
                you can also upload your own recorded audio and use the same
                publication and Member subscription steps.
              </p>
              <button
                className="btn"
                type="button"
                onClick={() => chooseStep(1)}
              >
                Hear the audio <span aria-hidden="true">→</span>
              </button>
              <p className="tta-small">
                Purpose-made example, not a customer story. The company and
                update are fictional.
              </p>
            </div>
          </div>
        </div>

        <div id="example-step-1" hidden={step !== 1}>
          <div className="tta-example-grid">
            <div className="tta-audio-card">
              <span className="tta-audio-label">PUBLIC AUDIO EXAMPLE</span>
              <div className="tta-record" aria-hidden="true">
                <span>BC</span>
              </div>
              <h3>Weekly team update</h3>
              <p>Operations · 49 seconds · AI voice: Mia</p>
              <audio
                ref={audio}
                controls
                preload="none"
                aria-label="Listen to the weekly team update example"
                onError={() => setAudioError(true)}
                onPlay={() => {
                  if (!playTracked.current)
                    playTracked.current = trackAnalyticsEvent(
                      "text_audio_example_played",
                      { example: "weekly_update" },
                    );
                }}
              >
                <source
                  src="/examples/weekly-team-update.mp3"
                  type="audio/mpeg"
                />
                <a href="/examples/weekly-team-update.mp3">
                  Download the audio example
                </a>
              </audio>
              {audioError && (
                <p role="alert">
                  The player could not load. You can download the audio below or
                  read the transcript.
                </p>
              )}
              <a href="/examples/weekly-team-update.mp3" download>
                Download audio ↓
              </a>
            </div>
            <div className="tta-example-copy">
              <span className="tta-kicker">Listen before you publish</span>
              <h3>A spoken version, ready for your review.</h3>
              <p>
                Brandscast adapts the writing for speech and generates an AI
                voice. Your episode starts as a draft, so you can check the
                facts, names and pronunciation before sharing it.
              </p>
              <details className="tta-transcript">
                <summary>Read the audio transcript</summary>
                <p>{transcript}</p>
              </details>
              <button
                className="btn"
                type="button"
                onClick={() => chooseStep(2)}
              >
                See how to share it <span aria-hidden="true">→</span>
              </button>
              <p className="tta-small">
                This public sample uses Brandscast’s speech pipeline. Your
                organisation’s episodes are distributed through private feeds.
              </p>
            </div>
          </div>
        </div>

        <div id="example-step-2" hidden={step !== 2}>
          <div className="tta-example-grid">
            <div className="tta-publication">
              <span className="tta-kicker">Example publishing plan</span>
              <h3>Operations updates</h3>
              <p className="tta-small">
                Your Track · a home for the next update, too
              </p>
              <dl>
                <div>
                  <dt>Episode</dt>
                  <dd>Weekly team update</dd>
                </div>
                <div>
                  <dt>Audience</dt>
                  <dd>Operations</dd>
                </div>
                <div>
                  <dt>Next update</dt>
                  <dd>Next Monday</dd>
                </div>
              </dl>
              <p className="tta-publication-note">
                Review → publish episode → publish Track → invite Members
              </p>
              <p className="tta-small">
                Illustration only. No content is published and no invitations
                are sent from this example.
              </p>
            </div>
            <div className="tta-example-copy">
              <span className="tta-kicker">Choose who receives it</span>
              <h3>Publish to a defined audience.</h3>
              <p>
                Publish both the episode and its Track. Then add the intended
                listeners as <strong>Members</strong> and assign them to that
                Track.
              </p>
              <p>
                Members receive an invitation to subscribe. Each Member has one
                personal feed containing their assigned Tracks, so different
                teams can receive different updates.
              </p>
              <button
                className="btn"
                type="button"
                onClick={() => chooseStep(3)}
              >
                Follow the Member journey <span aria-hidden="true">→</span>
              </button>
              <a className="tta-text-link" href="/help/#managing-audience">
                See the Member setup guide ↗
              </a>
            </div>
          </div>
        </div>

        <div id="example-step-3" hidden={step !== 3}>
          <div className="tta-example-grid">
            <div className="tta-listener">
              <span className="tta-kicker">On the Member’s phone</span>
              <h3>From invitation to listening.</h3>
              <ol>
                <li>
                  <strong>Open the invitation</strong>
                  <span>Follow the personal subscription link.</span>
                </li>
                <li>
                  <strong>Choose a compatible app</strong>
                  <span>
                    Open the feed in the app, or copy the personal RSS URL into
                    its “Add by URL” option.
                  </span>
                </li>
                <li>
                  <strong>Subscribe and press play</strong>
                  <span>
                    New published updates appear when the app refreshes the
                    feed.
                  </span>
                </li>
              </ol>
              <div className="tta-app-list">
                <span>Apple Podcasts</span>
                <span>Overcast</span>
                <span>Pocket Casts</span>
                <span>AntennaPod</span>
                <span>Podcast Addict</span>
              </div>
            </div>
            <div className="tta-example-copy">
              <span className="tta-kicker">Make room for the next update</span>
              <h3>One subscription. An ongoing channel.</h3>
              <p>
                Members listen in a compatible podcast app. They do not need a
                Brandscast dashboard account. Your publishing team uses the web
                app to manage content and access.
              </p>
              <p>
                Next week, publish another episode to the same Track. The
                audience keeps its subscription. The written version stays
                available in your usual channel for links and detail.
              </p>
              <TrialLink placement="example" />
              <p className="tta-small">
                Spotify cannot subscribe to these private feeds. Feed links are
                personal credentials; keep them private.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="tta-example-caption">
        Explore the example here. To create and privately distribute your own
        update, start a trial in the Brandscast app.
      </p>
    </div>
  );
}
