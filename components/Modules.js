import SectionHead from './SectionHead';
import Icon from './Icons';
import { modules } from '@/lib/content';

// Small looping illustrations inside the larger module cards.
function MiniDemo({ type }) {
  if (type === 'sources') {
    return (
      <div className="mini mini-sources" aria-hidden="true">
        {['GDS', 'NDC', 'LCC'].map((source, index) => (
          <span key={source} className="mini-source" style={{ '--i': index }}>
            {source}
          </span>
        ))}
        <span className="mini-merge">
          <i />
          <i />
          <i />
        </span>
        <span className="mini-result">1 result list</span>
      </div>
    );
  }
  if (type === 'rules') {
    return (
      <div className="mini mini-rules" aria-hidden="true">
        <span style={{ '--i': 0 }}>
          Airline <b>+2%</b>
        </span>
        <span style={{ '--i': 1 }}>
          Route <b>+4.00</b>
        </span>
        <span style={{ '--i': 2 }}>
          Tier Gold <b>-1%</b>
        </span>
      </div>
    );
  }
  if (type === 'wallet') {
    return (
      <div className="mini mini-wallet" aria-hidden="true">
        <div className="mini-wallet-top">
          <span>Wallet</span>
          <b>USD 12,480</b>
        </div>
        <div className="mini-bar">
          <i />
        </div>
        <small>Credit used: 38% of limit</small>
      </div>
    );
  }
  if (type === 'lifecycle') {
    return (
      <div className="mini mini-life" aria-hidden="true">
        {['Booked', 'Issued', 'Reissued', 'Refunded'].map((state, index) => (
          <span key={state} style={{ '--i': index }}>
            <i />
            {state}
          </span>
        ))}
      </div>
    );
  }
  if (type === 'brand') {
    return (
      <div className="mini mini-brand" aria-hidden="true">
        <span className="mini-brand-bar">
          <i />
          youragency.com
        </span>
        <div className="mini-swatches">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }
  if (type === 'bars') {
    return (
      <div className="mini mini-bars" aria-hidden="true">
        {[42, 64, 51, 78, 60, 92, 70].map((height, index) => (
          <i key={index} style={{ '--h': `${height}%`, '--i': index }} />
        ))}
      </div>
    );
  }
  return null;
}

export default function Modules() {
  return (
    <section className="section modules" id="modules" aria-labelledby="modules-title">
      <div className="wrap">
        <SectionHead
          id="modules-title"
          label="Modules"
          line="Twelve modules."
          accent="One shared core."
          text="Switch on what you sell today and add the rest when you are ready. Every module reads and writes the same bookings, wallets and ledger."
        />

        <ul className="module-grid">
          {modules.map((module, index) => (
            <li
              key={module.name}
              className={`module-card${module.size === 'wide' ? ' is-wide' : ''}`}
              data-reveal
              style={{ '--i': index % 4 }}
            >
              <div className="module-body">
                <span className="module-icon">
                  <Icon name={module.icon} size={22} />
                </span>
                <h3>{module.name}</h3>
                <p>{module.text}</p>
                <ul className="tag-row">
                  {module.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              {module.demo ? <MiniDemo type={module.demo} /> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
