import Link from 'next/link';
import PageHero from './PageHero';
import SectionHead from './SectionHead';
import RouteLine from './RouteLine';
import CtaBand from './CtaBand';
import Icon from './Icons';
import { solutionBySlug } from '@/lib/solutions';
import { productBySlug } from '@/lib/products';

export default function SolutionView({ slug }) {
  const sol = solutionBySlug[slug];
  if (!sol) return null;

  return (
    <>
      <PageHero label={sol.name} line={sol.line} accent={sol.accent} text={sol.intro}>
        <Link href="/demo" className="btn btn-primary chase">
          Start the live demo
        </Link>
        <Link href="/contact" className="btn">
          Talk to us
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="pain-title">
        <div className="wrap">
          <SectionHead id="pain-title" label="What changes" line="From workarounds" accent="to a system." />
          <div className="problem-table" role="table" aria-label={`Before and after for ${sol.name}`}>
            <div className="problem-headrow problem-headrow-2" role="row">
              <span role="columnheader">Today</span>
              <span role="columnheader">With SkyTravex</span>
            </div>
            {sol.pains.map(([before, after], index) => (
              <div className="problem-row problem-row-2" role="row" key={before} data-reveal style={{ '--i': index }}>
                <p className="problem-before" role="cell">
                  <span className="mark mark-no">
                    <Icon name="cross" size={12} strokeWidth={2.4} />
                  </span>
                  <span className="strike">{before}</span>
                </p>
                <p className="problem-after" role="cell">
                  <span className="mark mark-yes">
                    <Icon name="check" size={12} strokeWidth={2.4} />
                  </span>
                  {after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="day-title">
        <div className="wrap">
          <SectionHead id="day-title" label="A booking, start to finish" line="One journey" accent="through your business." />
          <RouteLine stops={sol.route} label={`${sol.name} journey`} />
        </div>
      </section>

      <section className="section" aria-labelledby="kit-title">
        <div className="wrap">
          <SectionHead id="kit-title" label="Your starting kit" line="The modules" accent="we would switch on first." />
          <ul className="link-cards link-cards-4">
            {sol.products.map((p, index) => {
              const prod = productBySlug[p];
              return (
                <li key={p} data-reveal style={{ '--i': index }}>
                  <Link href={`/product/${p}`}>
                    <span className="module-icon">
                      <Icon name={prod.icon} size={20} />
                    </span>
                    <strong>{prod.name}</strong>
                    <span>{prod.short}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
