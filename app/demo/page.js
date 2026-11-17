import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/Icons';
import { site, whatsappLink } from '@/lib/site';

export const metadata = {
  title: 'Live demo',
  description: `Fill in a short form and explore ${site.demoName}, a live travel booking site running on SkyTravex.`,
};

const agenda = [
  ['Fill in the form', 'Tell us who you are and how you sell. It takes under a minute.'],
  [`Explore ${site.demoName}`, 'Search real routes and see the customer booking journey on a live site.'],
  ['See the back office', 'We follow up to walk you through the agent portal, pricing rules and the ledger.'],
  ['Get your launch plan', 'A dated plan for your suppliers, branding and agents.'],
];

export default function DemoPage() {
  const wa = whatsappLink();
  return (
    <>
      <PageHero
        label="Live demo"
        line="See SkyTravex"
        accent="running a real booking site."
        text={`After the form, you go straight to ${site.demoName}, a live customer booking site built on the SkyTravex engine.`}
      />

      <section className="section demo-section" aria-label="Demo request">
        <div className="wrap demo-grid">
          <aside className="demo-agenda" data-reveal="left">
            <h2>How the demo works</h2>
            <ol>
              {agenda.map(([name, text]) => (
                <li key={name}>
                  <strong>{name}</strong>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
            <div className="demo-showcase">
              <span className="demo-showcase-badge">Live on SkyTravex</span>
              <strong>{site.demoName}</strong>
              <span>Flights, hotels, tours and visa for travellers</span>
            </div>
            <p className="demo-contact">
              <Icon name="phone" size={18} />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p className="demo-contact demo-contact-2">
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            {wa ? (
              <p className="demo-contact demo-contact-2">
                <Icon name="whatsapp" size={18} />
                <a href={wa} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </p>
            ) : null}
          </aside>
          <div className="demo-form-card" data-reveal="right">
            <LeadForm mode="demo" />
          </div>
        </div>
      </section>
    </>
  );
}
