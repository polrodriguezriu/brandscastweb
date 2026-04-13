interface RelatedLink {
  href: string;
  label: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
}

export default function RelatedLinks({ links }: RelatedLinksProps) {
  if (!links.length) return null;
  return (
    <section className="content-section">
      <div className="section-inner">
        <h2>Related resources</h2>
        <ul className="related-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
