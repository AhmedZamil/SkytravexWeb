// Compact hero used on the inner pages.
export default function PageHero({ label, line, accent, text, children }) {
  return (
    <section className="page-hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap page-hero-inner">
        <p className="eyebrow hero-in" style={{ '--i': 0 }}>
          {label}
        </p>
        <h1>
          <span className="hero-line hero-in" style={{ '--i': 1 }}>
            {line}
          </span>
          {accent ? (
            <em className="hero-line hero-in" style={{ '--i': 2 }}>
              {accent}
            </em>
          ) : null}
        </h1>
        {text ? (
          <p className="lede hero-in" style={{ '--i': 3 }}>
            {text}
          </p>
        ) : null}
        {children ? (
          <div className="center-actions hero-in" style={{ '--i': 4 }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
