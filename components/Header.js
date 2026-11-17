'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Icon from './Icons';
import { nav } from '@/lib/nav';

function isCurrent(pathname, item) {
  if (item.href) return item.href === pathname;
  return item.groups.some((g) =>
    g.items.some((i) => {
      const path = i.href.split('#')[0];
      return path && path !== '/' && (pathname === path || pathname.startsWith(`${path}/`));
    })
  );
}

function MegaPanel({ item, id, onNavigate }) {
  return (
    <div className="mega" id={id} role="region" aria-label={`${item.label} menu`}>
      <div className="wrap mega-inner">
        <div className="mega-groups">
          {item.groups.map((group) => (
            <div key={group.title} className={`mega-group${group.wide ? ' is-wide' : ''}`}>
              <p className="mega-title">{group.title}</p>
              <ul>
                {group.items.map((link, index) => (
                  <li key={link.href} style={{ '--i': index }}>
                    <Link href={link.href} onClick={onNavigate}>
                      <span className="mega-icon">
                        <Icon name={link.icon} size={18} />
                      </span>
                      <span>
                        <strong>{link.label}</strong>
                        <small>{link.text}</small>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.feature ? (
          <Link href={item.feature.href} className="mega-feature" onClick={onNavigate}>
            <span className="mega-feature-sky" aria-hidden="true">
              <svg viewBox="0 0 200 90" fill="none">
                <path d="M6 80 C60 70 110 40 190 10" stroke="#00d8f0" strokeWidth="1.5" strokeDasharray="3 6" />
                <path className="mega-feature-plane" d="M-7,-4.5 L8,0 L-7,4.5 L-3.5,0Z" fill="#e7eef8" />
              </svg>
            </span>
            <strong>{item.feature.title}</strong>
            <span>{item.feature.text}</span>
            <em>{item.feature.cta}</em>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setMenu(null);
      }
    };
    const onClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setMenu(null);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, []);

  const hoverOpen = (label) => {
    window.clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const hoverClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 180);
  };

  const activeItem = nav.find((item) => item.label === menu && item.groups);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}${menu ? ' has-mega' : ''}`}
      onMouseLeave={hoverClose}
    >
      <div className="wrap header-row">
        <Link href="/" className="header-logo" aria-label="SkyTravex home">
          <Logo />
        </Link>

        <nav className="header-nav" aria-label="Main">
          {nav.map((item) =>
            item.groups ? (
              <button
                key={item.label}
                type="button"
                className={`nav-trigger${menu === item.label ? ' is-open' : ''}${isCurrent(pathname, item) ? ' is-current' : ''}`}
                aria-expanded={menu === item.label}
                aria-controls={`mega-${item.label}`}
                onMouseEnter={() => hoverOpen(item.label)}
                onClick={() => setMenu((value) => (value === item.label ? null : item.label))}
              >
                {item.label}
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                  <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={hoverClose}
                className={pathname === item.href ? 'is-current' : undefined}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          )}
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

      {activeItem ? (
        <div onMouseEnter={() => hoverOpen(activeItem.label)}>
          <MegaPanel key={activeItem.label} item={activeItem} id={`mega-${activeItem.label}`} onNavigate={() => setMenu(null)} />
        </div>
      ) : null}

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="wrap" aria-label="Mobile">
          {nav.map((item, index) =>
            item.groups ? (
              <div key={item.label} className="m-group" style={{ '--i': index }}>
                <button
                  type="button"
                  aria-expanded={mobileGroup === item.label}
                  onClick={() => setMobileGroup((value) => (value === item.label ? null : item.label))}
                >
                  {item.label}
                  <span className="m-plus" aria-hidden="true" />
                </button>
                {mobileGroup === item.label ? (
                  <ul>
                    {item.groups.flatMap((g) => g.items).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={() => setOpen(false)}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <Link key={item.label} href={item.href} style={{ '--i': index }} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <Link href="/demo" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book a demo
          </Link>
        </nav>
      </div>

      <span id="scroll-progress" className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
