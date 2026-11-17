import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Modules from '@/components/Modules';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icons';
import { products } from '@/lib/products';

export const metadata = {
  title: 'Platform overview',
  description: 'The SkyTravex modules: flights, hotels, visa, packages, agent portal, customer website, white label and finance, all on one core.',
};

export default function ProductIndex() {
  return (
    <>
      <PageHero
        label="Platform"
        line="One core."
        accent="Every module you sell from."
        text="Switch on the modules you need today. Each one reads and writes the same bookings, wallets and ledger, so nothing is copied between systems."
      >
        <Link href="/demo" className="btn btn-primary chase">
          Start the live demo
        </Link>
      </PageHero>

      <section className="section" aria-labelledby="mods-title">
        <div className="wrap">
          <SectionHead id="mods-title" label="Module pages" line="Explore each module" accent="in detail." />
          <ul className="link-cards link-cards-4">
            {products.map((p, index) => (
              <li key={p.slug} data-reveal style={{ '--i': index % 4 }}>
                <Link href={`/product/${p.slug}`}>
                  <span className="module-icon">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <strong>{p.name}</strong>
                  <span>{p.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Modules />
      <CtaBand />
    </>
  );
}
