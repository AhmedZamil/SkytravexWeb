import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import CtaBand from '@/components/CtaBand';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About',
  description: 'SkyTravex is a travel platform built by Sky Lake Solutions, a remote software engineering studio.',
};

const principles = [
  {
    name: 'The ledger is never wrong',
    text: 'Every wallet movement, refund and commission is a ledger line tied to a booking. If two numbers disagree, the platform has a bug and we treat it as one.',
  },
  {
    name: 'Agents should not need to call',
    text: 'Balance, ticket status, refund progress and invoices are visible to the agent at all times. Fewer calls is the measure of a good portal.',
  },
  {
    name: 'Rules over favours',
    text: 'Markups, credit limits and void windows are rules with an owner and a history, so pricing stays consistent when the team grows.',
  },
  {
    name: 'Say what is real',
    text: 'A supplier connection is listed for you only when your agreement with that supplier is in place. We would rather show less and have it work.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        line="Travel software from people"
        accent="who build software for a living."
        text={`SkyTravex is a product of ${site.company}, a remote studio that designs, builds and runs web, mobile and cloud products.`}
      >
        <a href={site.companyUrl} className="btn" target="_blank" rel="noreferrer">
          Visit {site.company}
        </a>
        <Link href="/demo" className="btn btn-primary chase">
          Book a demo
        </Link>
      </PageHero>

      <section className="section about-story" aria-labelledby="story-title">
        <div className="wrap about-grid">
          <SectionHead id="story-title" align="left" label="What we are building" line="An operating system" accent="for a travel business." />
          <div className="prose" data-reveal>
            <p>
              A travel agency runs on three things: inventory it can sell, agents and customers who
              buy it, and money that has to end up in the right place. Most agencies manage each of
              them in a different tool.
            </p>
            <p>
              SkyTravex puts them in one. Search and ticketing, the agent network, the customer
              website and the finance desk all work from the same record of each booking.
            </p>
            <p>
              We host and maintain the platform. You bring your supplier agreements, your brand and
              your pricing, and you stay the merchant of record.
            </p>
          </div>
        </div>
      </section>

      <section className="section principles" aria-labelledby="principles-title">
        <div className="wrap">
          <SectionHead id="principles-title" label="How we decide" line="Four principles" accent="we design against." />
          <ul className="principle-grid">
            {principles.map((item, index) => (
              <li key={item.name} data-reveal style={{ '--i': index % 2 }}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
