'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icons';
import { heroFlows } from '@/lib/content';

const airports = [
  { code: 'DAC', x: 330, y: 270, hub: true },
  { code: 'DXB', x: 195, y: 275 },
  { code: 'LHR', x: 70, y: 120 },
  { code: 'IST', x: 165, y: 165 },
  { code: 'JED', x: 120, y: 335 },
  { code: 'SIN', x: 440, y: 395 },
  { code: 'NRT', x: 540, y: 170 },
  { code: 'KUL', x: 395, y: 345 },
];

const routes = [
  { id: 'r1', d: 'M330,270 Q262,214 195,275', dur: 7 },
  { id: 'r2', d: 'M330,270 Q180,104 70,120', dur: 11 },
  { id: 'r3', d: 'M330,270 Q408,300 440,395', dur: 8 },
  { id: 'r4', d: 'M330,270 Q452,168 540,170', dur: 9 },
  { id: 'r5', d: 'M195,275 Q146,286 120,335', dur: 6 },
  { id: 'r6', d: 'M195,275 Q170,212 165,165', dur: 6.5 },
];

const STEP_MS = 3600;

export default function HeroBoard() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    timer.current = window.setInterval(() => {
      setActive((value) => (value + 1) % heroFlows.length);
    }, STEP_MS);
    return () => window.clearInterval(timer.current);
  }, [paused]);

  const flow = heroFlows[active];

  return (
    <div
      className="board"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="board-map" aria-hidden="true">
        <div className="board-sweep" />
        <svg viewBox="0 0 600 470" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="board-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1.2" cy="1.2" r="1.2" fill="#35506e" opacity="0.55" />
            </pattern>
            <radialGradient id="board-fade" cx="55%" cy="57%" r="62%">
              <stop offset="0" stopColor="#fff" />
              <stop offset="0.75" stopColor="#fff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="board-mask">
              <rect width="600" height="470" fill="url(#board-fade)" />
            </mask>
            <linearGradient id="route-g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#1f6bff" />
              <stop offset="1" stopColor="#00d8f0" />
            </linearGradient>
          </defs>

          <rect width="600" height="470" fill="url(#board-dots)" mask="url(#board-mask)" />

          <g className="board-rings" fill="none" stroke="#243246">
            <circle cx="330" cy="270" r="70" />
            <circle cx="330" cy="270" r="140" />
            <circle cx="330" cy="270" r="210" strokeDasharray="3 7" />
          </g>

          {routes.map((route, index) => (
            <g key={route.id}>
              <path id={`skx-${route.id}`} d={route.d} fill="none" stroke="#243246" strokeWidth="1.2" />
              <path
                className="board-route"
                d={route.d}
                fill="none"
                stroke="url(#route-g)"
                strokeWidth="1.6"
                strokeLinecap="round"
                pathLength="1"
                style={{ animationDelay: `${0.4 + index * 0.18}s` }}
              />
              <g className="board-plane">
                <path d="M-7,-4.500 L8,0 L-7,4.500 L-3.500,0Z" fill="#e7eef8" />
                <animateMotion dur={`${route.dur}s`} begin={`-${index * 1.3}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#skx-${route.id}`} />
                </animateMotion>
              </g>
            </g>
          ))}

          {airports.map((airport, index) => (
            <g key={airport.code} className="board-node" style={{ animationDelay: `${0.25 + index * 0.09}s` }}>
              {airport.hub ? (
                <>
                  <circle className="board-pulse" cx={airport.x} cy={airport.y} r="10" />
                  <circle className="board-pulse board-pulse-2" cx={airport.x} cy={airport.y} r="10" />
                </>
              ) : null}
              <circle cx={airport.x} cy={airport.y} r={airport.hub ? 6 : 4} fill={airport.hub ? '#00d8f0' : '#0b111a'} stroke="#00d8f0" strokeWidth="1.5" />
              <text x={airport.x + 10} y={airport.y - 9}>
                {airport.code}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="flow" aria-live="off">
        <div className="flow-head">
          <span className="flow-icon">
            <Icon name={flow.icon} size={18} />
          </span>
          <div>
            <p className="flow-title">{flow.title}</p>
            <p className="flow-meta">{flow.meta}</p>
          </div>
          <span className="live-tag">
            <i /> Sample
          </span>
        </div>
        <ol className="flow-steps" key={flow.id}>
          {flow.steps.map(([name, detail], index) => (
            <li key={name} style={{ '--i': index }}>
              <span className="flow-check">
                <Icon name="check" size={12} strokeWidth={2.4} />
              </span>
              <span>
                <strong>{name}</strong>
                <small>{detail}</small>
              </span>
            </li>
          ))}
        </ol>
        <span className="flow-timer" key={`${flow.id}-${paused ? 'p' : 'r'}`} data-paused={paused ? 'true' : 'false'} />
      </div>

      <div className="board-chips" role="tablist" aria-label="Workflows">
        {heroFlows.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? 'is-active' : undefined}
            onClick={() => setActive(index)}
          >
            <Icon name={item.icon} size={15} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
