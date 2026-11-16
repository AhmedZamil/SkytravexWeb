'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Icon from './Icons';
import { nav } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap header-row">
        <Link href="/" className="header-logo" aria-label="SkyTravex home">
          <Logo />
        </Link>

        <nav className="header-nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'is-current' : undefined}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/demo" className="btn btn-primary chase header-cta">
            Book a demo
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'cross' : 'menu'} size={22} />
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="wrap" aria-label="Mobile">
          {nav.map((item, index) => (
            <Link key={item.href} href={item.href} style={{ '--i': index }} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/about" style={{ '--i': nav.length }} onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/demo" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book a demo
          </Link>
        </nav>
      </div>

      <span id="scroll-progress" className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
