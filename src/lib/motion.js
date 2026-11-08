// Motion preferences, scroll reveals and number count-ups.
// "calm" = reduced motion (OS setting, the footer toggle, or ?static capture mode).

import { $$ } from './dom.js';

export const STATIC = /[?&]static/.test(location.search);
const reduceQuery = matchMedia('(prefers-reduced-motion: reduce)');

export const motion = { calm: reduceQuery.matches || STATIC };
export const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;

const calmListeners = [];
export function onCalmChange(fn) { calmListeners.push(fn); }

export function setCalm(value) {
  motion.calm = value;
  document.documentElement.classList.toggle('calm', value);
  calmListeners.forEach((fn) => fn(value));
}

export function initMotion() {
  if (!STATIC) document.documentElement.classList.add('js');
  if (motion.calm) document.documentElement.classList.add('calm');
  reduceQuery.addEventListener?.('change', (e) => setCalm(e.matches));
}

/** Reveal anything with .rv (and section headings) once it's near the viewport. */
export function revealCheck() {
  const limit = innerHeight * 0.94;
  $$('.rv:not(.in), .sec-head h2:not(.in)').forEach((el) => {
    if (el.getBoundingClientRect().top < limit) el.classList.add('in');
  });
}

/** Count a metric up from 0 when it enters the viewport. */
export function initCountUps() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (!motion.calm) countUp(e.target);
      }),
    { rootMargin: '0px 0px -8% 0px' }
  );
  $$('[data-count]').forEach((el) => io.observe(el));
}

function countUp(el) {
  const to = +el.dataset.count;
  const dec = to % 1 ? 1 : 0;
  const { pre = '', suf = '' } = el.dataset;
  const t0 = performance.now();
  const D = 1100;
  const step = (t) => {
    const k = Math.min((t - t0) / D, 1);
    const eased = 1 - Math.pow(1 - k, 4);
    el.textContent = pre + (to * eased).toFixed(dec) + suf;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
