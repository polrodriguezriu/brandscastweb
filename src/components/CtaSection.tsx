import { TRIAL_COPY } from "@/lib/pricing";
import SignupLink from "@/components/SignupLink";

interface CtaSectionProps {
  title: string;
  lead: string;
  note?: string;
  intent?: "commercial" | "informational";
}

export default function CtaSection({
  title,
  lead,
  note,
  intent = "commercial",
}: CtaSectionProps) {
  return (
    <section className="section-brand">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
        {intent === "commercial" ? (
          <SignupLink className="btn" target="_blank" rel="noopener">
            Start your free trial
          </SignupLink>
        ) : (
          <a className="btn" href="/text-to-audio/#example">
            See the complete example
          </a>
        )}
        <p style={{ marginTop: "1rem" }}>{note ?? TRIAL_COPY}</p>
      </div>
    </section>
  );
}
