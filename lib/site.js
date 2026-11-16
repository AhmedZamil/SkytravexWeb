// One place for everything that is specific to your business.
// Change a value here and it updates across the whole site.

export const site = {
  name: 'SkyTravex',
  tagline: 'The travel platform for agencies, consolidators and OTAs',
  description:
    'SkyTravex gives a travel business an admin back office, a B2B agent portal and a branded B2C site that share one booking engine, one wallet and one ledger.',

  // Parent company shown in the footer and on the About page.
  company: 'Sky Lake Solutions',
  companyUrl: 'https://skylakesolutions.com',

  // Demo requests are addressed to this inbox.
  email: 'hello@skylakesolutions.com',

  // Optional. Digits only with country code, e.g. '8801XXXXXXXXX'.
  // Leave empty to hide every WhatsApp button.
  whatsapp: '',

  // Optional. Leave a value empty to show "Quoted per launch" instead.
  // Example: setup: '$5,000', monthly: '$1,000'
  pricing: {
    setup: '',
    monthly: '',
  },
};

export const nav = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Modules', href: '/#modules' },
  { label: 'Portals', href: '/#portals' },
  { label: 'Integrations', href: '/#integrations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Why SkyTravex', href: '/why-skytravex' },
];

export function whatsappLink(text = 'Hello, I would like to know more about SkyTravex.') {
  if (!site.whatsapp) return '';
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
