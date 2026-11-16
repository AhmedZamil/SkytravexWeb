'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// One observer for the whole page. Any element with data-reveal or data-watch
// receives the class "in" the first time it scrolls into view, and the CSS
// does the rest. Also drives the reading-progress line in the header.
export default function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal], [data-watch]'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('in');
            observer.unobserve(el);
            // Once the entrance has played, drop the stagger delay so hover
            // transitions on the same element respond straight away.
            window.setTimeout(() => el.classList.add('done'), 1600);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    targets.forEach((el) => {
      if (!el.classList.contains('in')) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // The opening curtain plays once per visit. After it, page-to-page
  // navigation should not wait for it again.
  useEffect(() => {
    const id = window.setTimeout(() => {
      document.documentElement.style.setProperty('--intro', '0.3s');
    }, 1800);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
