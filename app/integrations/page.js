import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Integrations from '@/components/Integrations';
import ConnectorHub from '@/components/ConnectorHub';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'Integrations',
  description: 'Connect the GDS, NDC, low-cost carrier, hotel, payment and messaging providers you already have agreements with.',
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        label="Integrations"
        line="Your suppliers and gateways,"
        accent="wired into one platform."
        text="Each connection is set up once under your own agreement and feeds the same search, wallet and ledger."
      >
        <Link href="/contact" className="btn btn-primary chase">
          Request a connection
        </Link>
      </PageHero>
      <ConnectorHub />
      <Integrations />
      <CtaBand />
    </>
  );
}
