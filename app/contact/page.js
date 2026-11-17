import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import Icon from '@/components/Icons';
import { site, whatsappLink } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: `Contact the SkyTravex team at ${site.company} by phone, email or WhatsApp.`,
};

export default function ContactPage() {
  const wa = whatsappLink();
  const cards = [
    { icon: 'phone', label: 'Call', value: site.phone, href: site.phoneHref },
    { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
    wa ? { icon: 'whatsapp', label: 'WhatsApp', value: 'Message us', href: wa, external: true } : null,
  ].filter(Boolean);

  return (
    <>
      <PageHero
        label="Contact"
        line="Talk to the people"
        accent="who build SkyTravex."
        text="Questions about suppliers, pricing or launch dates? Send a message or reach us directly."
      />
      <section className="section demo-section" aria-label="Contact details and form">
        <div className="wrap demo-grid">
          <aside className="demo-agenda" data-reveal="left">
            <h2>{site.contactName}</h2>
            <p className="contact-role">{site.company}</p>
            <ul className="contact-cards">
              {cards.map((card) => (
                <li key={card.label}>
                  <a href={card.href} target={card.external ? '_blank' : undefined} rel={card.external ? 'noreferrer' : undefined}>
                    <span className="module-icon">
                      <Icon name={card.icon} size={20} />
                    </span>
                    <span>
                      <small>{card.label}</small>
                      <strong>{card.value}</strong>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact-hours">We usually reply within one working day.</p>
          </aside>
          <div className="demo-form-card" data-reveal="right">
            <LeadForm mode="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
