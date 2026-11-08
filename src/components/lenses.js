// Practice: the three lenses. Hovering/focusing a lens isolates its stream in the 3D engine.
import { PRACTICE, LENS } from '../content/lenses.js';
import { esc, $$ } from '../lib/dom.js';
import { sectionHead } from '../lib/ui.js';
import { set } from '../lib/state.js';

export function renderLenses(num) {
  return `<section id="lenses" class="sec wrap" aria-labelledby="h-lenses">
    ${sectionHead({ id: 'lenses', num, index: PRACTICE.index, title: PRACTICE.title, titleAccent: PRACTICE.titleAccent, intro: PRACTICE.intro })}
    <div class="lenses">${PRACTICE.lenses
      .map(
        (l) => `<article class="lens-col rv" data-lens="${l.key}" tabindex="0">
        <div class="beam"></div>
        <h3>${LENS[l.key].name} <span class="n">LENS·${l.key.toUpperCase()}</span></h3>
        <p class="q">${esc(l.question)}</p>
        <div class="evidence mono">${l.evidence.map(([n, t]) => `<span><b>${esc(n)}</b> ${esc(t)}</span>`).join('')}</div>
        <ul>${l.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </article>`
      )
      .join('')}</div>
    <div class="lens-foot mono"><span>${esc(PRACTICE.footLeft)}</span><span>${esc(PRACTICE.footRight)}</span></div>
  </section>`;
}

/** Any element with data-lens (hero words, lens columns) drives the 3D focus. */
export function initLensFocus() {
  $$('.role .lens, .lens-col').forEach((el) => {
    const on = () => set('focusLens', el.dataset.lens);
    const off = () => set('focusLens', null);
    el.addEventListener('mouseenter', on);
    el.addEventListener('mouseleave', off);
    el.addEventListener('focus', on);
    el.addEventListener('blur', off);
  });
}
