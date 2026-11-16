'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHead from './SectionHead';

// Counts up once when the element scrolls into view.
function CountUp({ to, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setValue(to);
      return undefined;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(to * eased);
          if (t < 1) frame = window.requestAnimationFrame(tick);
        };
        frame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [to]);

  const text = value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

const kpis = [
  { label: 'Sales today', to: 48250, prefix: 'USD ', delta: '+8.4% vs yesterday' },
  { label: 'Bookings', to: 312, delta: '41 on hold' },
  { label: 'Tickets issued', to: 268, delta: '6 in the manual queue' },
  { label: 'Active agents', to: 87, delta: '12 topped up today' },
];

const routes = [
  { name: 'DAC to DXB', share: 86 },
  { name: 'DAC to KUL', share: 64 },
  { name: 'CGP to JED', share: 52 },
  { name: 'DAC to SIN', share: 41 },
  { name: 'DAC to LHR', share: 28 },
];

const feedSeed = [
  { ref: 'SKX-48213', who: 'Orbit Travels', what: 'Ticket issued', tone: 'ok' },
  { ref: 'SKX-48214', who: 'Delta Holidays', what: 'Wallet topped up', tone: 'info' },
  { ref: 'SKX-48215', who: 'Website customer', what: 'Booking paid online', tone: 'ok' },
  { ref: 'SKX-48216', who: 'Rupali Tours', what: 'Refund requested', tone: 'wait' },
  { ref: 'SKX-48217', who: 'Meghna Air Services', what: 'PNR imported', tone: 'info' },
  { ref: 'SKX-48218', who: 'Orbit Travels', what: 'Reissue quoted', tone: 'wait' },
];

const chartLine = 'M0,150 C40,140 60,120 100,124 S160,96 200,104 S262,70 300,78 S362,44 400,56 S462,30 500,22 S560,26 600,10';

export default function Dashboard() {
  const [feed, setFeed] = useState(feedSeed.slice(0, 4));
  const pointer = useRef(4);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setInterval(() => {
      const next = feedSeed[pointer.current % feedSeed.length];
      pointer.current += 1;
      setFeed((rows) => [{ ...next, key: pointer.current }, ...rows].slice(0, 4));
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section dash" id="dashboard" aria-labelledby="dash-title">
      <div className="wrap">
        <SectionHead
          id="dash-title"
          label="Dashboard"
          line="Know where today stands"
          accent="before the day ends."
          text="Sales, tickets, balances and agent activity update as bookings move. No end-of-day spreadsheet to assemble."
        />

        <div className="window dash-window" data-reveal="scale" data-watch>
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="window-title">Admin / Overview</span>
            <span className="live-tag">
              <i /> Sample data
            </span>
          </div>

          <div className="dash-kpis">
            {kpis.map((kpi, index) => (
              <div className="kpi" key={kpi.label} style={{ '--i': index }}>
                <small>{kpi.label}</small>
                <b>
                  <CountUp to={kpi.to} prefix={kpi.prefix || ''} />
                </b>
                <span>{kpi.delta}</span>
              </div>
            ))}
          </div>

          <div className="dash-body">
            <div className="dash-chart">
              <p className="screen-h">Sales, last 30 days</p>
              <svg viewBox="0 0 600 170" preserveAspectRatio="none" role="img" aria-label="Sample sales trend rising over 30 days">
                <defs>
                  <linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#00d8f0" stopOpacity="0.28" />
                    <stop offset="1" stopColor="#00d8f0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g stroke="#243246" strokeWidth="1">
                  <path d="M0,42.500H600M0,85H600M0,127.500H600" strokeDasharray="2 6" />
                </g>
                <path className="dash-area" d={`${chartLine} L600,170 L0,170Z`} fill="url(#dash-area)" />
                <path className="dash-line" d={chartLine} fill="none" stroke="#00d8f0" strokeWidth="2.500" strokeLinecap="round" pathLength="1" vectorEffect="non-scaling-stroke" />
              </svg>
              <span className="dash-dot" aria-hidden="true" />
            </div>

            <div className="dash-routes">
              <p className="screen-h">Top routes this week</p>
              <ul>
                {routes.map((route, index) => (
                  <li key={route.name} style={{ '--w': `${route.share}%`, '--i': index }}>
                    <span>{route.name}</span>
                    <span className="route-bar">
                      <i />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dash-feed">
              <p className="screen-h">
                Live activity <i className="blink" aria-hidden="true" />
              </p>
              <ul>
                {feed.map((row) => (
                  <li key={row.key || row.ref}>
                    <span className={`feed-dot feed-${row.tone}`} />
                    <span className="feed-main">
                      <b>{row.what}</b>
                      <small>
                        {row.who}, {row.ref}
                      </small>
                    </span>
                    <span className="feed-time">now</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
