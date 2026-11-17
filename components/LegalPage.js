import PageHero from './PageHero';

export default function LegalPage({ label, line, updated, sections }) {
  return (
    <>
      <PageHero label={label} line={line} text={`Last updated ${updated}.`} />
      <section className="section section-tight">
        <div className="wrap article-body legal">
          {sections.map(([title, ...paras]) => (
            <div key={title}>
              <h2>{title}</h2>
              {paras.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
