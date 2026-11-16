'use client';

import { useState } from 'react';
import SectionHead from './SectionHead';
import Icon from './Icons';
import { sampleFares, priceLayers } from '@/lib/content';

const money = (value) => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function SearchDemo() {
  const [layer, setLayer] = useState('agent');
  const current = priceLayers.find((item) => item.id === layer);

  return (
    <section className="section search" id="platform" aria-labelledby="search-title">
      <div className="wrap search-grid">
        <div className="search-copy">
          <SectionHead
            id="search-title"
            align="left"
            label="Search and booking"
            line="One search box."
            accent="Every source you hold."
            text="The engine queries your GDS, NDC and direct airline connections together, removes duplicate fares and applies your pricing before the agent sees a number."
          />
          <ul className="check-list">
            <li data-reveal style={{ '--i': 0 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>Unified results.</strong> One list, labelled by source, sorted the way your agents sell.
              </span>
            </li>
            <li data-reveal style={{ '--i': 1 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>Fallback built in.</strong> If one supplier times out, the search still answers from the rest.
              </span>
            </li>
            <li data-reveal style={{ '--i': 2 }}>
              <Icon name="check" size={16} strokeWidth={2.2} />
              <span>
                <strong>Price layers.</strong> Net, agent and customer price are stored with every offer. Try the switch.
              </span>
            </li>
          </ul>
        </div>

        <div className="window search-window" data-reveal="right" data-watch>
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="window-title">Agent portal / Flight search</span>
            <span className="live-tag">
              <i /> Sample data
            </span>
          </div>

          <div className="search-form" aria-hidden="true">
            <div className="search-field">
              <small>From</small>
              <b className="typed typed-1">Dhaka (DAC)</b>
            </div>
            <span className="search-swap">
              <Icon name="plane" size={16} />
            </span>
            <div className="search-field">
              <small>To</small>
              <b className="typed typed-2">Dubai (DXB)</b>
            </div>
            <div className="search-field search-field-sm">
              <small>Travellers</small>
              <b>2 adults</b>
            </div>
            <span className="search-go">Search</span>
          </div>

          <div className="layer-switch" role="radiogroup" aria-label="Price layer">
            {priceLayers.map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={layer === item.id}
                className={layer === item.id ? 'is-active' : undefined}
                onClick={() => setLayer(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="layer-note" aria-live="polite">
            {current.note}
          </p>

          <ul className="fare-list">
            {sampleFares.map((fare, index) => {
              const price = fare.net * current.factor + current.add;
              return (
                <li key={fare.code} className="fare" style={{ '--i': index }}>
                  <div className="fare-air">
                    <span className="fare-logo" aria-hidden="true">
                      {fare.carrier.slice(0, 1)}
                    </span>
                    <div>
                      <strong>{fare.carrier}</strong>
                      <small>{fare.code}</small>
                    </div>
                  </div>
                  <div className="fare-time">
                    <b>{fare.dep}</b>
                    <span className="fare-track" aria-hidden="true">
                      <i />
                    </span>
                    <b>{fare.arr}</b>
                    <small>
                      {fare.dur}, {fare.stops.toLowerCase()}
                    </small>
                  </div>
                  <div className="fare-meta">
                    <span className={`source source-${fare.source.toLowerCase()}`}>{fare.source}</span>
                    {fare.tag ? <span className="fare-tag">{fare.tag}</span> : null}
                  </div>
                  <div className="fare-price">
                    <small>USD</small>
                    <b key={`${fare.code}-${layer}`}>{money(price)}</b>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
