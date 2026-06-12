import type { ReactNode } from "react";

export type FaqItem = {
  /** Question text — also used verbatim in the FAQPage schema. */
  q: string;
  /**
   * Answer. A plain string is rendered as a single paragraph and used as-is in
   * the schema. A ReactNode renders rich markup visibly; in that case pass
   * `aText` so the schema gets clean plain text.
   */
  a: ReactNode;
  /** Plain-text answer for the schema when `a` is rich markup. */
  aText?: string;
};

/**
 * Renders a visible FAQ accordion AND emits matching FAQPage JSON-LD from the
 * same source, so the structured data can never drift from the copy on screen.
 */
export default function Faq({
  heading,
  items,
}: {
  heading: string;
  items: FaqItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.aText ?? (typeof item.a === "string" ? item.a : ""),
      },
    })),
  };

  return (
    <>
      <h2>{heading}</h2>
      <div className="faq">
        {items.map((item, i) => (
          <details key={i}>
            <summary>{item.q}</summary>
            {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
