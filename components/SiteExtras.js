'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from './Icons';
import { whatsappLink } from '@/lib/site';

const BAR_KEY = 'skx-bar-agent-portal';

export function AnnouncementBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(BAR_KEY) === '1';
    } catch (e) {
      dismissed = false;
    }
    setShow(!dismissed);
  }, []);

  if (!show) return null;

  const close = () => {
    setShow(false);
    try {
      window.localStorage.setItem(BAR_KEY, '1');
    } catch (e) {
      // Storage can be unavailable; the bar just reappears next visit.
    }
  };

  return (
    <div className="announce" role="region" aria-label="Announcement">
      <div className="wrap announce-inner">
        <span className="announce-pill">New</span>
        <span className="announce-text">
          The SkyTravex B2B agent portal is launching soon.
          <Link href="/contact"> Get early access</Link>
        </span>
        <button type="button" className="announce-close" onClick={close} aria-label="Dismiss announcement">
          <Icon name="cross" size={14} />
        </button>
      </div>
    </div>
  );
}

export function WhatsAppFloat() {
  const href = whatsappLink();
  if (!href) return null;
  return (
    <a className="wa-float" href={href} target="_blank" rel="noreferrer" aria-label="Chat with SkyTravex on WhatsApp">
      <span className="wa-ring" aria-hidden="true" />
      <Icon name="whatsapp" size={26} strokeWidth={1.7} />
      <span className="wa-tip">Chat with us</span>
    </a>
  );
}
