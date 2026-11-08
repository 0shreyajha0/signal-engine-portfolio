// Work: role cards with an expandable impact ledger (Problem / Decision / Outcome).
import { WORK, JOBS } from '../content/experience.js';
import { esc, $$ } from '../lib/dom.js';
import { lensDots, sectionHead } from '../lib/ui.js';

const storyCell = (label, text) =>
  `<div><span class="k mono">${label}</span><p class="${text ? '' : 'ph'}">${text ? esc(text) : '[Draft] One or two lines.'}</p></div>`;

function impactRow(m, id) {
  return `<div class="imp" data-lens="${m.lens}" data-open="false">
    <button class="imp-btn" type="button" aria-expanded="false" aria-controls="${id}" data-cursor="Expand">
      <span class="imp-num" data-count="${m.n}" data-pre="${m.pre}" data-suf="${m.suf}">${m.pre}${m.n}${m.suf}</span>
      <span class="imp-txt"><span class="lbl">${esc(m.label)}</span><span class="nt">${esc(m.note)}</span></span>
      <span class="imp-plus" aria-hidden="true">+</span>
    </button>
    <div class="imp-body" id="${id}"><div><div class="pdo">
      ${storyCell('Problem', m.story?.problem)}${storyCell('Decision', m.story?.decision)}${storyCell('Outcome', m.story?.outcome)}
    </div></div></div>
  </div>`;
}

export function renderWork(num) {
  return `<section id="work" class="sec wrap" aria-labelledby="h-work">
    ${sectionHead({ id: 'work', num, index: WORK.index, title: WORK.title, titleAccent: WORK.titleAccent, intro: WORK.intro })}
    ${JOBS.map(
      (j, ji) => `<article class="job">
        <div class="job-side">
          <span class="mono meta">${esc(j.dates)} · ${esc(j.place)}</span>
          <h3 class="co">${esc(j.company)}</h3>
          <div class="rl">${esc(j.role)}</div>
          <div class="kind">${esc(j.kind)}</div>
          <div class="lensrow">${lensDots(j.lens)}</div>
        </div>
        <div class="ledger">${
          j.impact ? j.impact.map((m, mi) => impactRow(m, `pdo-${ji}-${mi}`)).join('') : `<p class="job-note">${esc(j.note)}</p>`
        }</div>
      </article>`
    ).join('')}
  </section>`;
}

export function initWork() {
  $$('.imp-btn').forEach((b) =>
    b.addEventListener('click', () => {
      const imp = b.closest('.imp');
      const open = imp.dataset.open !== 'true';
      imp.dataset.open = open;
      b.setAttribute('aria-expanded', open);
    })
  );
}
