import Link from 'next/link';
import HeroBoard from './HeroBoard';
import Icon from './Icons';
import { connectorTypes } from '@/lib/content';
import { whatsappLink } from '@/lib/site';

export default function Hero() {
  const wa = whatsappLink();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-in" style={{ '--i': 0 }}>
            Travel platform for agencies and OTAs
          </p>
          <h1 id="hero-title">
            <span className="hero-line hero-in" style={{ '--i': 1 }}>
              Fares, agents and money.
            </span>
            <em className="hero-line hero-in" style={{ '--i': 2 }}>
              Finally in one system.
            </em>
          </h1>
          <p className="lede hero-in" style={{ '--i': 3 }}>
            SkyTravex gives your agency an admin back office, a B2B agent portal and a branded B2C
            website. All three share one booking engine, one wallet and one ledger.
          </p>
          <div className="hero-actions hero-in" style={{ '--i': 4 }}>
            <Link href="/demo" className="btn btn-primary chase">
              Book a demo
            </Link>
            {wa ? (
              <a href={wa} className="btn" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            ) : (
              <Link href="/#modules" className="btn">
                See the modules
              </Link>
            )}
          </div>
          <ul className="hero-points hero-in" style={{ '--i': 5 }}>
            <li>
              <Icon name="check" size={14} strokeWidth={2.2} /> Admin, B2B and B2C portals
            </li>
            <li>
              <Icon name="check" size={14} strokeWidth={2.2} /> GDS, NDC and direct airline connections
            </li>
            <li>
              <Icon name="check" size={14} strokeWidth={2.2} /> No per-ticket fee from SkyTravex
            </li>
          </ul>
        </div>

        <div className="hero-visual hero-in" style={{ '--i': 3 }}>
          <HeroBoard />
        </div>
      </div>

      <div className="marquee" aria-label="What SkyTravex connects to">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
              {connectorTypes.map((item) => (
                <li key={item}>
                  <span className="marquee-dot" />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="marquee-note wrap">
        Supplier and payment connections go live under your own agreements and credentials.
      </p>
    </section>
  );
}
