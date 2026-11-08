// Small reusable markup snippets (lens dots, status icons, chips, section headers).
import { LENS } from '../content/lenses.js';
import { STATUS } from '../content/builds.js';
import { esc } from './dom.js';

export const lensDots = (keys) =>
  keys.map((k) => `<span class="dot ${k}" title="${LENS[k].name}"></span>`).join('');

export const statusIcon = (s) => `<i class="st ${s}" aria-hidden="true"></i>`;
export const statusLabel = (s) => `${statusIcon(s)}${STATUS[s]}`;

/** Section header used by every main section. */
export function sectionHead({ id, num, index, title, titleAccent, intro, introClass = '' }) {
  return `<div class="sec-head">
    <span class="idx mono">§${num} / ${esc(index)}</span>
    <h2 id="h-${id}">${esc(title)} <em>${esc(titleAccent)}</em></h2>
    ${intro ? `<p class="${introClass}">${esc(intro)}</p>` : ''}
  </div>`;
}

/** A group of toggle chips. items: [{value,label,dot?,count?}] */
export function chipGroup(items, ariaLabel, id) {
  return `<div class="filters" role="group" aria-label="${esc(ariaLabel)}" id="${id}">${items
    .map(
      (x, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-v="${esc(x.value)}">${
        x.dot ? `<span class="dot ${x.dot}"></span>` : ''
      }${esc(x.label)}${x.count != null ? ` <span class="mono count">${x.count}</span>` : ''}</button>`
    )
    .join('')}</div>`;
}

export function bindChips(root, onPick) {
  root.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    root.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c === b));
    onPick(b.dataset.v);
  });
}
