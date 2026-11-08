// Custom cursor (fine pointers only): exact dot + lagging ring that grows with a verb label
// over any element carrying data-cursor="Verb". Magnetic pull on .btn.
import { $, $$ } from '../lib/dom.js';
import { pointer } from '../lib/pointer.js';
import { motion, finePointer } from '../lib/motion.js';

let cur, dot, ring, label;
const lag = { x: innerWidth / 2, y: innerHeight / 2 };

export function bindCursorTargets(root = document) {
  if (!finePointer) return;
  $$('[data-cursor]', root).forEach((el) => {
    if (el._cursorBound) return;
    el._cursorBound = true;
    el.addEventListener('mouseenter', () => { label.textContent = el.dataset.cursor; cur.classList.add('big'); });
    el.addEventListener('mouseleave', () => cur.classList.remove('big'));
  });
}

function bindMagnetic() {
  $$('.btn').forEach((b) => {
    b.addEventListener('pointermove', (e) => {
      if (motion.calm) return;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    b.addEventListener('pointerleave', () => (b.style.transform = ''));
  });
}

export function initCursor() {
  cur = $('#cur');
  if (!finePointer) { cur.hidden = true; return; }
  dot = $('.dt', cur);
  ring = $('.rg', cur);
  label = $('#curLbl');
  document.body.classList.add('has-cur');
  bindCursorTargets();
  bindMagnetic();
  document.addEventListener('pointerleave', () => (cur.style.opacity = 0));
  document.addEventListener('pointerenter', () => (cur.style.opacity = 1));
}

export function tickCursor() {
  if (!finePointer) return;
  const k = motion.calm ? 1 : 0.18;
  lag.x += (pointer.x - lag.x) * k;
  lag.y += (pointer.y - lag.y) * k;
  dot.style.transform = `translate(${pointer.x}px,${pointer.y}px)`;
  ring.style.transform = `translate(${lag.x}px,${lag.y}px)`;
}
