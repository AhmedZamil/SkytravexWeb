'use client';

import { useEffect, useState } from 'react';
import SectionHead from './SectionHead';
import { pipeline } from '@/lib/content';

const STEP_MS = 2800;

export default function Pipeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setInterval(() => setActive((value) => (value + 1) % pipeline.length), STEP_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const progress = (active / (pipeline.length - 1)) * 100;

  return (
    <section className="section pipeline" id="ecosystem" aria-labelledby="pipeline-title">
      <div className="pipeline-sky" aria-hidden="true" />
      <div className="wrap">
        <SectionHead
          id="pipeline-title"
          label="How it connects"
          line="Follow one booking"
          accent="from search to ledger."
          text="Each stage hands its result to the next. Nobody retypes a fare, a passenger name or an amount."
        />

        <div
          className="pipe"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="pipe-rail" aria-hidden="true">
            <span className="pipe-fill" style={{ '--p': `${progress}%` }} />
            <span className="pipe-plane" style={{ '--p': `${progress}%` }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 4.500 21.500 12 3 19.500 7.500 12Z" />
              </svg>
            </span>
          </div>
          <ol className="pipe-steps">
            {pipeline.map((stage, index) => (
              <li key={stage.name} className={index === active ? 'is-active' : index < active ? 'is-done' : undefined}>
                <button type="button" onClick={() => setActive(index)} aria-current={index === active ? 'step' : undefined}>
                  <span className="pipe-dot" />
                  <span className="pipe-num">0{index + 1}</span>
                  <span className="pipe-name">{stage.name}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="pipe-detail" aria-live="polite">
            <p key={pipeline[active].name}>
              <strong>{pipeline[active].name}.</strong> {pipeline[active].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
