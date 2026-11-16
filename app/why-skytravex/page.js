import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Compare from '@/components/Compare';
import LaunchPlan from '@/components/LaunchPlan';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icons';
import { whyReasons } from '@/lib/content';

export const metadata = {
  title: 'Why SkyTravex',
  description:
    'Six reasons travel agencies and consolidators run on SkyTravex: one core, controlled money, a record of every change and a flat fee.',
};

export default function WhyPage() {
  return (
    <>
      <PageHero
        label="Why SkyTravex"
        line="Built around the two things"
        accent="agencies lose sleep over."
        text="Fares that were quoted wrong and money that cannot be traced. SkyTravex is designed so that both have one source of truth."
      >
        <Link href="/demo" className="btn btn-primary chase">
          Book a demo
        </Link>
        <Link href="/pricing" className="btn">
          See pricing
        </Link>
      </PageHero>

      <section className="section reasons" aria-labelledby="reasons-title">
        <div className="wrap">
          <SectionHead id="reasons-title" label="Six reasons" line="What is different" accent="about the way it works." />
          <ul className="reason-grid">
            {whyReasons.map((reason, index) => (
              <li key={reason.title} data-reveal style={{ '--i': index % 3 }}>
                <span className="module-icon">
                  <Icon name={reason.icon} size={22} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section channels" aria-labelledby="channels-title">
        <div className="wrap">
          <SectionHead
            id="channels-title"
            label="Channels"
            line="B2B, B2C and white label"
            accent="are settings, not separate products."
            text="Bookings, tickets, finance and audit are shared. Pricing, credit, branding and service queues are set for each channel."
          />
          <div className="channel-map" data-reveal data-watch>
            <div className="channel-col">
              <span>B2B agents</span>
              <span>Sub-agencies</span>
              <span>B2C website</span>
              <span>White-label partners</span>
            </div>
            <div className="channel-wires" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="channel-core">
              <p>Shared core</p>
              <ul>
                <li>Bookings and tickets</li>
                <li>Wallets and ledger</li>
                <li>Pricing rules</li>
                <li>Audit log</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Compare />
      <LaunchPlan />
      <CtaBand />
    </>
  );
}
