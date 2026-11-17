import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata = { title: 'Website terms' };

export default function TermsPage() {
  return (
    <LegalPage
      label="Terms"
      line="Website terms of use"
      updated="17 November 2026"
      sections={[
        ['About these terms', `These terms cover your use of this website, operated by ${site.company}. A SkyTravex subscription is governed by a separate written agreement.`],
        [
          'Information on this site',
          'Product screens on this site show sample data. Features, connections and timelines described here are a general guide; what you receive is set out in your agreement.',
        ],
        [
          'Supplier and payment connections',
          'Airline, hotel and payment connections are enabled under your own agreements and credentials with each provider. Provider names belong to their owners and do not imply endorsement.',
        ],
        ['The live demo', `The demo opens ${site.demoUrl}, a separate live site with its own terms. Any booking you complete there is handled under those terms.`],
        ['Intellectual property', `The SkyTravex name, logo, text and design of this site belong to ${site.company}. Please ask before reusing them.`],
        ['Contact', `Questions about these terms: ${site.email}.`],
      ]}
    />
  );
}
