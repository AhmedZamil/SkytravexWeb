import PageHero from '@/components/PageHero';
import DemoForm from '@/components/DemoForm';
import Icon from '@/components/Icons';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Book a demo',
  description: 'Request a SkyTravex walkthrough covering the admin, agent and customer portals, the pricing engine and the money flow.',
};

const agenda = [
  ['Your setup', 'Which products, suppliers and agent network you run today.'],
  ['The three portals', 'Admin back office, B2B agent portal and B2C website in action.'],
  ['Pricing and money', 'Markup rules, wallet top-ups, refunds and the ledger.'],
  ['A launch plan', 'The stages and what we would need from you for each.'],
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        label="Book a demo"
        line="A walkthrough built"
        accent="around how you sell."
        text="Tell us a little about your agency and we will come prepared."
      />

      <section className="section demo-section" aria-label="Demo request">
        <div className="wrap demo-grid">
          <aside className="demo-agenda" data-reveal="left">
            <h2>What we will cover</h2>
            <ol>
              {agenda.map(([name, text]) => (
                <li key={name}>
                  <strong>{name}</strong>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
            <p className="demo-contact">
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </aside>
          <div className="demo-form-card" data-reveal="right">
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
