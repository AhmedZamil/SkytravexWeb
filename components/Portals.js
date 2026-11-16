'use client';

import { useEffect, useState } from 'react';
import SectionHead from './SectionHead';
import Icon from './Icons';

const tabs = [
  {
    id: 'admin',
    name: 'Admin back office',
    who: 'For owners, finance and the ticketing desk',
    text: 'Approve deposits, set pricing rules, work the ticketing queue and see every agent and booking in one place.',
  },
  {
    id: 'b2b',
    name: 'B2B agent portal',
    who: 'For partner agents and sub-agencies',
    text: 'Agents search at their own fares, pay from a wallet or credit line, and manage their tickets without calling you.',
  },
  {
    id: 'b2c',
    name: 'B2C website',
    who: 'For travellers booking direct',
    text: 'A public booking site in your brand, selling the same inventory with online payment. Pick a colour to see it re-skin.',
  },
];

const brandColors = ['#00d8f0', '#1f6bff', '#ff8a3d', '#3ddc97', '#c77dff'];

const ROTATE_MS = 6500;

function AdminScreen() {
  return (
    <div className="screen screen-admin">
      <aside className="screen-side" aria-hidden="true">
        {['Overview', 'Bookings', 'Deposits', 'Agents', 'Pricing', 'Reports'].map((item, index) => (
          <span key={item} className={index === 2 ? 'is-on' : undefined}>
            {item}
          </span>
        ))}
      </aside>
      <div className="screen-main">
        <p className="screen-h">Deposits waiting for approval</p>
        <table className="screen-table">
          <thead>
            <tr>
              <th>Agent</th>
              <th>Amount</th>
              <th>Reference</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Orbit Travels</td>
              <td>USD 2,500</td>
              <td>TRX-88214</td>
              <td>
                <span className="pill pill-ok approve-anim">Approved</span>
              </td>
            </tr>
            <tr>
              <td>Delta Holidays</td>
              <td>USD 900</td>
              <td>TRX-88240</td>
              <td>
                <span className="pill pill-wait">In review</span>
              </td>
            </tr>
            <tr>
              <td>Rupali Tours</td>
              <td>USD 4,200</td>
              <td>Missing</td>
              <td>
                <span className="pill pill-bad">Needs reference</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="screen-rules">
          <span>
            Rule <b>All airlines</b> +2.0%
          </span>
          <span>
            Rule <b>DAC to DXB</b> +USD 4
          </span>
          <span>
            Tier <b>Gold</b> -1.0%
          </span>
        </div>
      </div>
    </div>
  );
}

function AgentScreen() {
  return (
    <div className="screen screen-agent">
      <div className="agent-top">
        <div className="agent-wallet">
          <small>Wallet balance</small>
          <b>USD 12,480.00</b>
          <div className="mini-bar">
            <i />
          </div>
          <small>Credit limit USD 20,000, 38% used</small>
        </div>
        <div className="agent-search" aria-hidden="true">
          <span>DAC</span>
          <Icon name="arrow" size={14} />
          <span>KUL</span>
          <span className="agent-date">12 Mar</span>
          <span className="search-go">Search</span>
        </div>
      </div>
      <p className="screen-h">Recent bookings</p>
      <ul className="agent-bookings">
        <li>
          <span>SKX-48213</span>
          <span>DAC to DXB, 2 pax</span>
          <span className="pill pill-ok">Ticketed</span>
        </li>
        <li>
          <span>SKX-48209</span>
          <span>DAC to SIN, 1 pax</span>
          <span className="pill pill-wait">On hold</span>
        </li>
        <li>
          <span>SKX-48190</span>
          <span>CGP to JED, 4 pax</span>
          <span className="pill pill-info">Refund quoted</span>
        </li>
      </ul>
    </div>
  );
}

function ConsumerScreen({ color, onColor }) {
  return (
    <div className="screen screen-b2c" style={{ '--brand': color }}>
      <div className="b2c-nav" aria-hidden="true">
        <span className="b2c-logo">
          <i /> Your Agency
        </span>
        <span>Flights</span>
        <span>Hotels</span>
        <span>Visa</span>
        <span className="b2c-signin">Sign in</span>
      </div>
      <div className="b2c-hero">
        <p>Where to next?</p>
        <div className="b2c-search" aria-hidden="true">
          <span>From</span>
          <span>To</span>
          <span>Dates</span>
          <b>Search flights</b>
        </div>
      </div>
      <div className="b2c-swatches">
        <span>Brand colour</span>
        {brandColors.map((item) => (
          <button
            key={item}
            type="button"
            aria-label={`Use brand colour ${item}`}
            aria-pressed={item === color}
            style={{ background: item }}
            onClick={() => onColor(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portals() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [color, setColor] = useState(brandColors[0]);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setInterval(() => setActive((value) => (value + 1) % tabs.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const tab = tabs[active];

  return (
    <section className="section portals" id="portals" aria-labelledby="portals-title">
      <div className="wrap">
        <SectionHead
          id="portals-title"
          label="Portals"
          line="Three front doors."
          accent="The same engine behind each."
        />

        <div
          className="portal-stage"
          data-reveal="scale"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="portal-tabs" role="tablist" aria-label="Portals">
            {tabs.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`portal-tab-${item.id}`}
                aria-selected={index === active}
                aria-controls="portal-panel"
                className={index === active ? 'is-active' : undefined}
                onClick={() => setActive(index)}
              >
                <span className="portal-tab-num">0{index + 1}</span>
                <span className="portal-tab-name">{item.name}</span>
                <span className="portal-tab-who">{item.who}</span>
                {index === active ? (
                  <span className="portal-tab-timer" data-paused={paused ? 'true' : 'false'} key={`${item.id}-${paused}`} />
                ) : null}
              </button>
            ))}
          </div>

          <div className="window portal-window" id="portal-panel" role="tabpanel" aria-labelledby={`portal-tab-${tab.id}`}>
            <div className="window-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="window-title">
                {tab.id === 'b2c' ? 'youragency.com' : tab.id === 'b2b' ? 'agents.youragency.com' : 'admin.youragency.com'}
              </span>
              <span className="window-count">
                0{active + 1} / 0{tabs.length}
              </span>
            </div>
            <div className="portal-screen" key={tab.id}>
              {tab.id === 'admin' ? <AdminScreen /> : null}
              {tab.id === 'b2b' ? <AgentScreen /> : null}
              {tab.id === 'b2c' ? <ConsumerScreen color={color} onColor={setColor} /> : null}
            </div>
            <p className="portal-caption">{tab.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
