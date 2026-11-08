// Build Lab: filterable project list with a cursor-following 3D preview card (desktop only).
import { BUILD_LAB, BUILDS, STATUS } from '../content/builds.js';
import { LENS } from '../content/lenses.js';
import { esc, pad2, $, $$ } from '../lib/dom.js';
import { lensDots, statusIcon, statusLabel, sectionHead, chipGroup, bindChips } from '../lib/ui.js';
import { set } from '../lib/state.js';
import { pointer } from '../lib/pointer.js';
import { motion, finePointer } from '../lib/motion.js';

export function renderBuildLab(num) {
  return `<section id="build" class="sec wrap" aria-labelledby="h-build">
    ${sectionHead({ id: 'build', num, index: BUILD_LAB.index, title: BUILD_LAB.title, titleAccent: BUILD_LAB.titleAccent, intro: BUILD_LAB.intro })}
    <div class="lab-tools">
      <div class="legend mono" aria-label="Status legend">${Object.keys(STATUS).map((s) => `<span>${statusLabel(s)}</span>`).join('')}</div>
      ${chipGroup([{ value: 'all', label: 'All' }, ...Object.entries(LENS).map(([k, l]) => ({ value: k, label: l.name, dot: k }))], 'Filter builds by lens', 'buildFilters')}
    </div>
    <div class="builds">${BUILDS.map(
      (b, i) => `<a class="build" href="#p-${b.id}" data-id="${b.id}" data-lens="${b.lens.join(' ')}" data-cursor="View">
        <span class="i mono">${pad2(i + 1)}</span>
        <span class="t ${b.placeholder ? 'ph' : ''}">${esc(b.title)}</span>
        <span class="d">${esc(b.summary)}</span>
        <span class="s mono">${statusLabel(b.status)}</span>
        <span class="l">${lensDots(b.lens)}</span>
        <span class="go" aria-hidden="true">→</span>
      </a>`
    ).join('')}</div>
    <div class="preview" id="preview" aria-hidden="true"></div>
  </section>`;
}

const previewHTML = (b) => {
  const h = LENS[b.lens[0]].hex;
  return `<div class="pv-glow" style="background:${h}"></div><div class="pv-ui"><div class="pv-bar"><i></i><i></i><i></i></div><div class="pv-row" style="width:60%"></div><div class="pv-row" style="width:85%"></div><div class="pv-row" style="width:40%;background:${h};opacity:.7"></div><div class="pv-row" style="width:72%"></div></div><span class="pv-tag mono">${statusIcon(b.status)} ${STATUS[b.status]} · ${b.year} · demo still</span>`;
};

let pv, on = false;
const pos = { x: 0, y: 0 };

export function initBuildLab() {
  bindChips($('#buildFilters'), (v) => {
    $$('.build').forEach((r) => (r.hidden = v !== 'all' && !r.dataset.lens.includes(v)));
    set('focusLens', v === 'all' ? null : v);
  });
  pv = $('#preview');
  if (!finePointer) return;
  $$('.build').forEach((r) => {
    r.addEventListener('mouseenter', () => {
      pv.innerHTML = previewHTML(BUILDS.find((b) => b.id === r.dataset.id));
      on = true;
      pv.classList.add('on');
    });
    r.addEventListener('mouseleave', () => {
      on = false;
      pv.classList.remove('on');
    });
  });
}

export function tickBuildLab() {
  if (!on) return;
  const tx = pointer.x + 24, ty = pointer.y - 120;
  if (motion.calm) { pv.style.transform = `translate(${tx}px,${ty}px)`; return; }
  pos.x += (tx - pos.x) * 0.14;
  pos.y += (ty - pos.y) * 0.14;
  const tilt = Math.max(-18, Math.min(18, (tx - pos.x) * 0.25));
  pv.style.transform = `translate(${pos.x}px,${pos.y}px) perspective(800px) rotateY(${tilt}deg) rotateX(6deg)`;
}
