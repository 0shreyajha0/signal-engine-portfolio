// Hero: name with cursor-responsive letter widths, positioning line, CTAs, fact strip.
import { HERO } from '../content/hero.js';
import { esc, $$ } from '../lib/dom.js';
import { pointer } from '../lib/pointer.js';
import { motion, finePointer } from '../lib/motion.js';

const lensWords = (s) =>
  esc(s).replace(/\{([cga]):([^}]+)\}/g, (_, k, w) => `<span class="lens ${k}" data-lens="${k}">${w}</span>`);

export function renderHero() {
  return `<section id="top" class="hero wrap" aria-label="Introduction">
    <div class="hero-copy">
      <div class="eyebrow mono"><span class="live"><span class="dot"></span>${esc(HERO.eyebrow)}</span><span>${esc(HERO.location)}</span></div>
      <h1 class="name" aria-label="${esc(HERO.nameLines.join(' '))}">${HERO.nameLines
        .map((l) => `<span class="ln" aria-hidden="true">${[...l].map((c) => `<span class="ch">${esc(c)}</span>`).join('')}</span>`)
        .join('')}</h1>
      <p class="role">${lensWords(HERO.role)}</p>
      <div class="hero-actions">${HERO.ctas
        .map((c) => `<a class="btn${c.solid ? ' solid' : ''}" href="${c.href}" data-cursor="Go">${esc(c.label)}${c.solid ? ' <span class="arr" aria-hidden="true">→</span>' : ''}</a>`)
        .join('')}</div>
    </div>
    <div class="hint3d mono" aria-hidden="true">${HERO.hints.map((h) => `<span>${esc(h)}</span>`).join('')}</div>
    <div class="hero-foot mono">
      ${HERO.facts.map(([k, v]) => `<div><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`).join('')}
      <div class="scrollcue"><span class="k">Scroll</span><span class="line"></span></div>
    </div>
  </section>`;
}

/** Letters near the cursor widen and lighten. Called every frame from the main loop. */
let chars = [];
export function initHero() { chars = $$('.hero .name .ch'); }
export function tickHero() {
  if (!finePointer || motion.calm || scrollY > innerHeight) return;
  for (const c of chars) {
    const r = c.getBoundingClientRect();
    const d = Math.hypot(pointer.x - (r.left + r.width / 2), pointer.y - (r.top + r.height / 2));
    const f = Math.max(0, 1 - d / 360);
    c.style.setProperty('--w', (88 + f * 37).toFixed(1));
    c.style.setProperty('--wg', (750 - f * 450).toFixed(0));
  }
}
