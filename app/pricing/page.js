import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import PricingModel from '@/components/PricingModel';
import QuoteBuilder from '@/components/QuoteBuilder';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'Pricing',
  description:
    'SkyTravex pricing has three parts: a one-time setup, a flat monthly platform fee and add-on connections. There is no per-ticket fee.',
};

const billingFaqs = [
  {
    q: 'Is there a fee on each ticket or booking?',
    a: 'No. SkyTravex does not charge per ticket and does not take a share of your revenue. Suppliers and payment gateways may charge their own fees under your agreements with them.',
  },
  {
    q: 'What does the setup cover?',
    a: 'Configuring your portals, applying your brand and domain, importing agents, setting pricing rules, testing supplier connections and training your team before go-live.',
  },
  {
    q: 'How are add-on connections priced?',
    a: 'Each supplier or payment gateway is quoted once as a connection. You can start with one source and add more when your contracts are ready.',
  },
  {
    q: 'What about hosting costs?',
    a: 'Hosting, monitoring and updates are part of the monthly platform fee. If your volume needs dedicated infrastructure, that is quoted openly before anything changes.',
  },
  {
    q: 'Can we start small?',
    a: 'Yes. Many agencies begin with flights, the agent portal and the wallet, then switch on visa, hotels or the B2C website later.',
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        line="One platform fee."
        accent="No surprises on the invoice."
        text="You pay to set up, a flat amount each month, and for the connections you choose. Your ticket volume never changes the bill."
      >
        <Link href="/demo" className="btn btn-primary chase">
          Get a quote
        </Link>
      </PageHero>

      <PricingModel heading={false} cta={false} />

      <section className="section quote-section" aria-labelledby="quote-title">
        <div className="wrap">
          <SectionHead
            id="quote-title"
            label="Build your scope"
            line="Tell us what you sell."
            accent="We will price exactly that."
            text="Tick what you need on day one. The selection travels with your request so the first reply can be specific."
          />
          <QuoteBuilder />
        </div>
      </section>

      <Faq items={billingFaqs} />
      <CtaBand />
    </>
  );
}
