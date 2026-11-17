'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Icon from './Icons';
import { quoteOptions } from '@/lib/content';

const defaults = ['Admin back office', 'B2B agent portal', 'Flights', 'GDS'];

export default function QuoteBuilder() {
  const [picked, setPicked] = useState(defaults);

  const toggle = (item) => {
    setPicked((list) => (list.includes(item) ? list.filter((value) => value !== item) : [...list, item]));
  };

  const href = useMemo(() => {
    if (!picked.length) return '/contact';
    return `/contact?scope=${encodeURIComponent(picked.join(', '))}`;
  }, [picked]);

  return (
    <div className="quote" data-reveal>
      <div className="quote-options">
        {quoteOptions.map((group) => (
          <fieldset key={group.group}>
            <legend>{group.group}</legend>
            <div className="quote-chips">
              {group.items.map((item) => {
                const on = picked.includes(item);
                return (
                  <label key={item} className={on ? 'is-on' : undefined}>
                    <input type="checkbox" checked={on} onChange={() => toggle(item)} />
                    <span className="quote-box">
                      <Icon name="check" size={12} strokeWidth={2.6} />
                    </span>
                    {item}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <aside className="quote-summary" aria-live="polite">
        <p className="eyebrow">Your scope</p>
        {picked.length ? (
          <ul>
            {picked.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="quote-empty">Pick at least one item to build a scope.</p>
        )}
        <p className="quote-count">
          <b>{picked.length}</b> {picked.length === 1 ? 'item' : 'items'} selected
        </p>
        <Link href={href} className="btn btn-primary chase">
          Request a quote for this scope
        </Link>
        <small>Your selection is carried into the request form.</small>
      </aside>
    </div>
  );
}
