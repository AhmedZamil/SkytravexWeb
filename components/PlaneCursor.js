'use client';

import { useEffect, useRef } from 'react';

// A small plane that replaces the pointer on desktop and leaves a fading
// contrail. Off on touch screens and for visitors who prefer reduced motion.
// Text fields keep the normal text cursor.
export default function PlaneCursor() {
  const planeRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduce.matches) return undefined;

    const plane = planeRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const root = document.documentElement;
    root.classList.add('plane-cursor');

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const trail = [];
    let x = -100;
    let y = -100;
    let angle = 0;
    let visible = false;
    let over = false;
    let text = false;
    let frame = 0;
    let last = 0;

    const onMove = (event) => {
      const dx = event.clientX - x;
      const dy = event.clientY - y;
      x = event.clientX;
      y = event.clientY;
      if (Math.hypot(dx, dy) > 2) {
        const target = Math.atan2(dy, dx);
        let diff = target - angle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        angle += diff * 0.35;
      }
      trail.push({ x, y, t: performance.now() });
      const el = event.target;
      text = Boolean(el.closest && el.closest('input, textarea, select, [contenteditable="true"]'));
      over = !text && Boolean(el.closest && el.closest('a, button, summary, label, [role="tab"]'));
      if (!visible) {
        visible = true;
        plane.style.opacity = '1';
      }
    };
    const onLeave = () => {
      visible = false;
      plane.style.opacity = '0';
    };
    const onDown = () => plane.classList.add('is-down');
    const onUp = () => plane.classList.remove('is-down');

    const draw = (now) => {
      frame = window.requestAnimationFrame(draw);
      if (now - last < 14) return;
      last = now;
      const life = 520;
      while (trail.length && now - trail[0].t > life) trail.shift();
      ctx.clearRect(0, 0, w, h);
      for (let i = 1; i < trail.length; i += 1) {
        const a = trail[i - 1];
        const b = trail[i];
        const age = (now - b.t) / life;
        ctx.strokeStyle = `rgba(0, 216, 240, ${(1 - age) * 0.55})`;
        ctx.lineWidth = (1 - age) * 3 + 0.4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle}rad) scale(${over ? 1.35 : 1})`;
      plane.classList.toggle('is-hidden', text);
    };
    frame = window.requestAnimationFrame(draw);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('resize', resize);
    window.addEventListener('blur', onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      root.classList.remove('plane-cursor');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('resize', resize);
      window.removeEventListener('blur', onLeave);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />
      <span ref={planeRef} className="cursor-plane" aria-hidden="true">
        <svg width="26" height="26" viewBox="-13 -13 26 26">
          <defs>
            <linearGradient id="cp-g" x1="-10" x2="12" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1f6bff" />
              <stop offset="1" stopColor="#00d8f0" />
            </linearGradient>
          </defs>
          <path d="M12 0 L-9 -9 L-4 0 L-9 9 Z" fill="url(#cp-g)" stroke="#e7eef8" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );
}
