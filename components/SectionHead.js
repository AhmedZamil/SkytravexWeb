// Shared section heading: small label, a sans line and a serif-italic line.
export default function SectionHead({ label, line, accent, text, id, align = 'center', as: Tag = 'h2' }) {
  return (
    <header className={`section-head section-head-${align}`}>
      {label ? (
        <p className="eyebrow" data-reveal>
          {label}
        </p>
      ) : null}
      <Tag id={id} className="section-title" data-reveal style={{ '--i': 1 }}>
        <span>{line}</span>
        {accent ? <em>{accent}</em> : null}
      </Tag>
      {text ? (
        <p className="lede" data-reveal style={{ '--i': 2 }}>
          {text}
        </p>
      ) : null}
    </header>
  );
}
