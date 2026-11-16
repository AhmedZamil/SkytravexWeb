import Link from 'next/link';
import { site } from '@/lib/site';

export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-glow" aria-hidden="true" />
      <svg className="cta-arc" viewBox="0 0 1200 260" preserveAspectRatio="none" aria-hidden="true">
        <path id="cta-arc-path" d="M-20,240 C300,40 900,40 1220,240" fill="none" stroke="#243246" strokeWidth="1.500" strokeDasharray="4 8" vectorEffect="non-scaling-stroke" />
        <g>
          <path d="M-9,-6 L10,0 L-9,6 L-4.500,0Z" fill="#00d8f0" />
          <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
            <mpath href="#cta-arc-path" />
          </animateMotion>
        </g>
      </svg>
      <div className="wrap cta-inner">
        <h2 id="cta-title" className="section-title" data-reveal>
          <span>See it with your routes,</span>
          <em>your agents and your rules.</em>
        </h2>
        <p className="lede" data-reveal style={{ '--i': 1 }}>
          A walkthrough covers the three portals, the pricing engine and the money flow, using the
          way your agency sells.
        </p>
        <div className="center-actions" data-reveal style={{ '--i': 2 }}>
          <Link href="/demo" className="btn btn-primary chase">
            Book a demo
          </Link>
          <a href={`mailto:${site.email}`} className="btn">
            Email {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
