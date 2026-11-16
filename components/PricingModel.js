import Link from 'next/link';
import SectionHead from './SectionHead';
import Icon from './Icons';
import { pricingParts } from '@/lib/content';
import { site } from '@/lib/site';

function priceFor(key) {
  if (key === 'setup') return site.pricing.setup ? { value: site.pricing.setup, unit: 'once' } : null;
  if (key === 'monthly') return site.pricing.monthly ? { value: site.pricing.monthly, unit: 'per month' } : null;
  return null;
}

export default function PricingModel({ heading = true, cta = true }) {
  return (
    <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        {heading ? (
          <SectionHead
            id="pricing-title"
            label="Pricing"
            line="A flat fee."
            accent="Nothing per ticket."
            text="Three parts, agreed before work starts. Your cost does not climb when your sales do."
          />
        ) : (
          <h2 id="pricing-title" className="sr-only">
            How pricing works
          </h2>
        )}

        <ul className="price-grid">
          {pricingParts.map((part, index) => {
            const price = priceFor(part.key);
            return (
              <li key={part.key} className={`price-card${part.key === 'monthly' ? ' is-main' : ''}`} data-reveal style={{ '--i': index }}>
                <h3>{part.name}</h3>
                <p className="price-figure">
                  {price ? (
                    <>
                      <b>{price.value}</b> <span>{price.unit}</span>
                    </>
                  ) : (
                    <b className="price-quote">{part.key === 'addons' ? 'Per connection' : 'Quoted per launch'}</b>
                  )}
                </p>
                <p>{part.text}</p>
                <ul>
                  {part.includes.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={14} strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <p className="price-promise" data-reveal>
          <Icon name="shield" size={18} />
          No per-ticket fee and no share of your revenue goes to SkyTravex.
        </p>

        {cta ? (
          <div className="center-actions" data-reveal>
            <Link href="/pricing" className="btn">
              See how pricing works
            </Link>
            <Link href="/demo" className="btn btn-primary chase">
              Get a quote
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
