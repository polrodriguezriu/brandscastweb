import { TRIAL_COPY } from "@/lib/pricing";

interface CtaSectionProps {
  title: string;
  lead: string;
  note?: string;
}

export default function CtaSection({ title, lead, note }: CtaSectionProps) {
  return (
    <section className="section-brand">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
        <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">
          Start trial
        </a>
        <p style={{ marginTop: '1rem' }}>
          {note ?? TRIAL_COPY}
        </p>
      </div>
    </section>
  );
}
