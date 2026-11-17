import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icons';
import { solutions } from '@/lib/solutions';

export const metadata = {
  title: 'Solutions',
  description: 'SkyTravex for travel agencies, consolidators, OTAs, tour operators, corporate travel and Hajj and Umrah operators.',
};

export default function SolutionsIndex() {
  return (
    <>
      <PageHero label="Solutions" line="Different businesses," accent="the same dependable core." text="Pick the setup closest to how you sell today. Every solution runs on the same platform, so you can grow into the next one." />
      <section className="section" aria-labelledby="sol-title">
        <div className="wrap">
          <SectionHead id="sol-title" label="By business" line="Find your" accent="starting point." />
          <ul className="link-cards">
            {solutions.map((s, index) => (
              <li key={s.slug} data-reveal style={{ '--i': index % 3 }}>
                <Link href={`/solutions/${s.slug}`}>
                  <span className="module-icon">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <strong>{s.name}</strong>
                  <span>{s.short}</span>
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
