import SectionHead from './SectionHead';
import { LogoMark } from './Logo';
import { integrationGroups } from '@/lib/content';

export default function Integrations() {
  return (
    <section className="section integrations" id="integrations" aria-labelledby="integrations-title">
      <div className="wrap">
        <SectionHead
          id="integrations-title"
          label="Integrations"
          line="Bring your own contracts."
          accent="We wire them in."
          text="SkyTravex connects the supplier and payment agreements you already hold. Each connection is set up once and feeds the same search, wallet and ledger."
        />

        <div className="flowmap" data-reveal data-watch>
          <ul className="flowmap-sources">
            {integrationGroups.map((group, index) => (
              <li key={group.name} style={{ '--i': index }}>
                <div className="flowmap-card">
                  <h3>{group.name}</h3>
                  <p>{group.items.join(', ')}</p>
                  <small>{group.note}</small>
                </div>
                <span className="flowmap-wire" aria-hidden="true" />
              </li>
            ))}
          </ul>

          <div className="flowmap-core">
            <span className="flowmap-ring" aria-hidden="true" />
            <span className="flowmap-ring flowmap-ring-2" aria-hidden="true" />
            <LogoMark size={56} />
            <p>SkyTravex core</p>
          </div>

          <ul className="flowmap-out">
            {['Unified search', 'One wallet per agent', 'One ledger', 'One set of reports'].map((item, index) => (
              <li key={item} style={{ '--i': index }}>
                <span className="flowmap-wire" aria-hidden="true" />
                <span className="flowmap-pill">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="fineprint" data-reveal>
          Product names belong to their owners. A connection is enabled for your account once your
          agreement and credentials with that provider are in place.
        </p>
      </div>
    </section>
  );
}
