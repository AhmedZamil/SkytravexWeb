import { site } from './site';
import { products } from './products';
import { solutions } from './solutions';

// Header navigation. Items with "groups" open a mega menu.
export const nav = [
  { label: 'Home', href: site.siteUrl },
  {
    label: 'Product',
    groups: [
      {
        title: 'Platform',
        items: [
          { label: 'Platform overview', href: '/product', text: 'How the modules share one core', icon: 'layers' },
          { label: 'Three portals', href: '/#portals', text: 'Admin, agent and customer', icon: 'users' },
          { label: 'Dashboard', href: '/#dashboard', text: 'Sales and balances, live', icon: 'chart' },
        ],
      },
      {
        title: 'Modules',
        wide: true,
        items: products.map((p) => ({ label: p.name, href: `/product/${p.slug}`, text: p.short, icon: p.icon })),
      },
    ],
    feature: {
      title: 'Try the live demo',
      text: `Fill in a short form and explore ${site.demoName}, a live booking site running on SkyTravex.`,
      href: '/demo',
      cta: 'Start the demo',
    },
  },
  {
    label: 'Solutions',
    groups: [
      {
        title: 'By business',
        wide: true,
        items: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}`, text: s.short, icon: s.icon })),
      },
    ],
    feature: {
      title: 'Not sure where you fit?',
      text: 'Tell us how you sell today and we will show you the setup that matches.',
      href: '/contact',
      cta: 'Talk to us',
    },
  },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    groups: [
      {
        title: 'Learn',
        items: [
          { label: 'Insights', href: '/insights', text: 'Guides for agency owners', icon: 'ledger' },
          { label: 'Why SkyTravex', href: '/why-skytravex', text: 'How we compare', icon: 'check' },
          { label: 'Questions', href: '/#faq', text: 'Answers before you switch', icon: 'chatBubble' },
          { label: 'Live demo', href: '/demo', text: `Explore ${site.demoName}`, icon: 'plane' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    groups: [
      {
        title: 'Company',
        items: [
          { label: 'About', href: '/about', text: `SkyTravex by ${site.company}`, icon: 'globe' },
          { label: 'Partner programme', href: '/partners', text: 'Resell or refer SkyTravex', icon: 'plug' },
          { label: 'Contact', href: '/contact', text: 'Phone, email and WhatsApp', icon: 'mail' },
        ],
      },
    ],
  },
];
