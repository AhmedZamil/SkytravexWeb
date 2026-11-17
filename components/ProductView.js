import Link from 'next/link';
import PageHero from './PageHero';
import SectionHead from './SectionHead';
import RouteLine from './RouteLine';
import CtaBand from './CtaBand';
import Icon from './Icons';
import { productBySlug, products } from '@/lib/products';
import { solutionBySlug } from '@/lib/solutions';

export default function ProductView({ slug }) {
  const product = productBySlug[slug];
  if (!product) return null;
  const others = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero label={product.name} line={product.line} accent={product.accent} text={product.intro}>
        <Link href="/demo" className="btn btn-primary chase">
          Start the live demo
        </Link>
        <Link href="/contact" className="btn">
          Talk to us
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="feat-title">
        <div className="wrap">
          <SectionHead id="feat-title" label="What it does" line="Built for the way" accent="your team works." />
          <ul className="feature-grid">
            {product.features.map(([title, text], index) => (
              <li key={title} data-reveal style={{ '--i': index % 3 }}>
                <span className="feature-check">
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="flow-title">
        <div className="wrap">
          <SectionHead id="flow-title" label="How it flows" line="Four steps," accent="one record." />
          <RouteLine stops={product.steps} label={`${product.name} workflow`} />
        </div>
      </section>

      <section className="section" aria-labelledby="fit-title">
        <div className="wrap">
          <SectionHead id="fit-title" label="Who uses it" line="Made for" accent="these businesses." />
          <ul className="link-cards">
            {product.solutions.map((s) => {
              const sol = solutionBySlug[s];
              return (
                <li key={s} data-reveal>
                  <Link href={`/solutions/${s}`}>
                    <span className="module-icon">
                      <Icon name={sol.icon} size={20} />
                    </span>
                    <strong>{sol.name}</strong>
                    <span>{sol.short}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="more-title">More modules</p>
          <ul className="chip-links">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/product/${p.slug}`}>
                  <Icon name={p.icon} size={15} /> {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
