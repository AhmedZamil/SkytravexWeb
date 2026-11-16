import Link from 'next/link';
import Logo from './Logo';
import { site, whatsappLink } from '@/lib/site';

const columns = [
  {
    title: 'Platform',
    links: [
      ['Modules', '/#modules'],
      ['Search and booking', '/#platform'],
      ['Three portals', '/#portals'],
      ['Dashboard', '/#dashboard'],
      ['Integrations', '/#integrations'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Why SkyTravex', '/why-skytravex'],
      ['Pricing', '/pricing'],
      ['About', '/about'],
      ['Questions', '/#faq'],
      ['Book a demo', '/demo'],
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
      <div className="wrap footer-grid">
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

        <div>
          <h2>Talk to us</h2>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {wa ? (
              <li>
                <a href={wa} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/demo">Request a walkthrough</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-base">
        <span>
          © {new Date().getFullYear()} {site.company}. All rights reserved.
        </span>
        <span>Supplier content is available under your own agreements and credentials.</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
