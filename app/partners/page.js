import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/Icons';

export const metadata = {
  title: 'Partner programme',
  description: 'Resell, refer or integrate with SkyTravex.',
};

const tiers = [
  { icon: 'users', name: 'Referral partner', text: 'Introduce agencies that need a platform. We handle the demo, setup and support.' },
  { icon: 'brush', name: 'Reseller', text: 'Sell SkyTravex under your relationship in your market, with our team behind the launch.' },
  { icon: 'plug', name: 'Technology partner', text: 'Suppliers, gateways and tools that want to reach SkyTravex agencies through an integration.' },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Partner programme"
        line="Grow with us"
        accent="in your market."
        text="Work with SkyTravex as a referral partner, a reseller or a technology partner."
      />
      <section className="section section-tight" aria-labelledby="tiers-title">
        <div className="wrap">
          <SectionHead id="tiers-title" label="Ways to partner" line="Three ways" accent="to work together." />
          <ul className="reason-grid">
            {tiers.map((tier, index) => (
              <li key={tier.name} data-reveal style={{ '--i': index }}>
                <span className="module-icon">
                  <Icon name={tier.icon} size={22} />
                </span>
                <h3>{tier.name}</h3>
                <p>{tier.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section demo-section" aria-label="Partner application">
        <div className="wrap partner-form">
          <div className="demo-form-card" data-reveal>
            <h2 className="form-title">Apply to partner</h2>
            <LeadForm mode="partner" />
          </div>
        </div>
      </section>
    </>
  );
}
