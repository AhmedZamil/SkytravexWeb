import Link from 'next/link';
import SectionHead from './SectionHead';
import Icon from './Icons';
import { site } from '@/lib/site';

export function Showcase() {
  return (
    <section className="section showcase" id="showcase" aria-labelledby="showcase-title">
      <div className="wrap showcase-grid">
        <div>
          <SectionHead
            id="showcase-title"
            align="left"
            label="Live on SkyTravex"
            line={`${site.demoName} is already flying.`}
            accent="See it for yourself."
            text={`${site.demoName} is a live travel booking site running on the SkyTravex engine. Search real routes, compare fares and walk through the customer journey your travellers would get.`}
          />
          <ul className="check-list">
            <li data-reveal style={{ '--i': 0 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>Flights, hotels, tours and visa</strong> on one customer site.
              </span>
            </li>
            <li data-reveal style={{ '--i': 1 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>Regular, student and Umrah fares</strong> from one search box.
              </span>
            </li>
            <li data-reveal style={{ '--i': 2 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>The agent portal and back office</strong> shown on a follow-up call.
              </span>
            </li>
          </ul>
          <div className="hero-actions showcase-actions" data-reveal style={{ '--i': 3 }}>
            <Link href="/demo" className="btn btn-primary chase">
              Start the live demo
            </Link>
          </div>
        </div>

        <div className="showcase-stage" data-reveal="right" data-watch aria-hidden="true">
          <div className="window showcase-window">
            <div className="window-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="window-title">{site.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              <span className="live-tag">
                <i /> Live
              </span>
            </div>
            <div className="showcase-screen">
              <div className="sc-nav">
                <b>{site.demoName}</b>
                <span>Flights</span>
                <span>Hotels</span>
                <span>Tours</span>
                <span>Visa</span>
              </div>
              <p className="sc-title">Plan. Book. Fly.</p>
              <div className="sc-tabs">
                <span className="is-on">Round trip</span>
                <span>One way</span>
                <span>Multi-city</span>
              </div>
              <div className="sc-search">
                <span>
                  <small>From</small>DAC
                </span>
                <span>
                  <small>To</small>DXB
                </span>
                <span>
                  <small>Fare</small>Regular
                </span>
                <b>Search</b>
              </div>
              <div className="sc-routes">
                {['DXB', 'DOH', 'JED', 'LHR', 'SIN', 'BKK'].map((code, index) => (
                  <span key={code} style={{ '--i': index }}>
                    DAC <i /> {code}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="showcase-badge">
            <span>Powered by</span>
            <strong>
              Sky<em>Travex</em>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

const ways = [
  {
    icon: 'bolt',
    name: 'Ready platform',
    best: 'Best for agencies that want to start selling fast',
    text: 'The SkyTravex platform with your brand, your domain and your supplier connections, hosted and maintained for you.',
    points: ['Admin, agent and customer portals', 'Flat monthly fee', 'Updates included'],
  },
  {
    icon: 'brush',
    name: 'Custom build',
    best: 'Best for unusual workflows and larger operators',
    text: `${site.company} extends the platform around the way you work: extra modules, custom reports or a different booking flow.`,
    points: ['Scoped and priced up front', 'Built by the same team', 'You own the configuration'],
    featured: true,
  },
  {
    icon: 'plug',
    name: 'API access',
    best: 'Best for teams with their own developers',
    text: 'Use the SkyTravex booking, pricing and ledger services from your own website or app through a REST API.',
    points: ['Search, book and ticket', 'Wallet and ledger calls', 'Sandbox for testing'],
  },
];

export function LaunchOptions() {
  return (
    <section className="section ways" id="ways" aria-labelledby="ways-title">
      <div className="wrap">
        <SectionHead
          id="ways-title"
          label="Ways to launch"
          line="Three ways to start."
          accent="One team behind each."
          text="Choose how much you want ready-made and how much you want shaped to your business."
        />
        <ul className="ways-grid">
          {ways.map((way, index) => (
            <li key={way.name} className={`way-card${way.featured ? ' is-main' : ''}`} data-reveal style={{ '--i': index }}>
              <span className="module-icon">
                <Icon name={way.icon} size={22} />
              </span>
              <h3>{way.name}</h3>
              <p className="way-best">{way.best}</p>
              <p>{way.text}</p>
              <ul>
                {way.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={14} strokeWidth={2.2} />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="center-actions" data-reveal>
          <Link href="/contact" className="btn">
            Discuss your launch
          </Link>
        </div>
      </div>
    </section>
  );
}

const stack = [
  ['.NET Core', 'Booking and pricing services'],
  ['Next.js', 'Fast, search-friendly portals'],
  ['PostgreSQL', 'One ledger you can trust'],
  ['Docker', 'Same build from test to live'],
  ['REST API', 'Open to your own apps'],
  ['Cloud hosting', 'Monitored and backed up'],
];

export function TechStack() {
  return (
    <section className="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <h2 id="stack-title" className="stack-title" data-reveal>
          Built on a modern stack
        </h2>
        <ul className="stack-row" data-watch>
          {stack.map(([name, note], index) => (
            <li key={name} style={{ '--i': index }}>
              <strong>{name}</strong>
              <small>{note}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
