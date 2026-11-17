import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icons';
import { site, whatsappLink } from '@/lib/site';
import { products } from '@/lib/products';
import { solutions } from '@/lib/solutions';

const columns = [
  {
    title: 'Product',
    links: [['Platform overview', '/product'], ...products.slice(0, 6).map((p) => [p.name, `/product/${p.slug}`]), ['Integrations', '/integrations']],
  },
  {
    title: 'Solutions',
    links: solutions.map((s) => [s.name, `/solutions/${s.slug}`]),
  },
  {
    title: 'Company',
    links: [
      ['About', '/about'],
      ['Why SkyTravex', '/why-skytravex'],
      ['Pricing', '/pricing'],
      ['Partner programme', '/partners'],
      ['Insights', '/insights'],
      ['Live demo', '/demo'],
    ],
  },
];

export default function Footer() {
  const wa = whatsappLink();
  return (
    <footer className="site-footer">
      <div className="footer-runway" aria-hidden="true">
        <span />
      </div>
      <div className="wrap footer-grid footer-grid-wide">
        <div className="footer-brand">
          <Logo size={38} />
          <p>
            One platform for fares, agents and money. Built for travel agencies, consolidators and
            online travel teams.
          </p>
          <p className="footer-by">
            A product of{' '}
            <a href={site.companyUrl} target="_blank" rel="noreferrer">
              {site.company}
            </a>
          </p>
          <ul className="footer-contact">
            <li>
              <Icon name="users" size={16} />
              {site.contactName}, {site.company}
            </li>
            <li>
              <Icon name="phone" size={16} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {wa ? (
              <li>
                <Icon name="whatsapp" size={16} />
                <a href={wa} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="wrap footer-base">
        <span>
          © {new Date().getFullYear()} {site.company}. All rights reserved.
        </span>
        <span>Supplier content is available under your own agreements and credentials.</span>
        <span className="footer-legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
          <a href="#top">Back to top</a>
        </span>
      </div>
    </footer>
  );
}
