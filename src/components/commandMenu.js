// ⌘K / Ctrl+K command menu: jump to sections, builds, essays; quick actions.
import { SECTIONS, LINKS } from '../content/site.js';
import { BUILDS, STATUS } from '../content/builds.js';
import { NOTES } from '../content/notes.js';
import { esc, $ } from '../lib/dom.js';
import { copyEmail, toggleMotion } from './contact.js';

const go = (hash) => () => (location.hash = hash);

const COMMANDS = [
  ...[...SECTIONS, { id: 'contact', label: 'Contact' }].map((s) => ({ group: 'Sections', title: s.label, hint: '§', run: go('#' + s.id) })),
  ...BUILDS.map((b) => ({ group: 'Builds', title: b.title, hint: STATUS[b.status], run: go('#p-' + b.id) })),
  ...NOTES.map((n) => ({ group: 'Essays', title: n.title, hint: n.topic, run: n.url ? () => window.open(n.url, '_blank', 'noopener') : go('#n-' + n.id) })),
  { group: 'Actions', title: 'Copy email address', hint: '⏎', run: copyEmail },
  { group: 'Actions', title: 'Open LinkedIn', hint: '↗', run: () => window.open(LINKS.linkedin, '_blank', 'noopener') },
  { group: 'Actions', title: 'Toggle motion', hint: 'A11y', run: toggleMotion },
];

let box, input, list, selected = 0, results = [], lastFocus = null;

export function renderCommandMenu() {
  return `<div class="cmdk-box" role="dialog" aria-modal="true" aria-label="Command menu">
    <input id="cmdkIn" type="text" placeholder="Jump to a section, build or essay…" aria-label="Search" autocomplete="off" role="combobox" aria-expanded="true" aria-controls="cmdkList">
    <ul id="cmdkList" role="listbox"></ul>
  </div>`;
}

function draw() {
  const q = input.value.toLowerCase().trim();
  results = COMMANDS.filter((c) => !q || c.title.toLowerCase().includes(q) || c.group.toLowerCase().includes(q));
  selected = Math.min(selected, Math.max(results.length - 1, 0));
  let group = '', html = '';
  results.forEach((c, i) => {
    if (c.group !== group) { group = c.group; html += `<li class="grp mono" role="presentation">${group}</li>`; }
    html += `<li role="option" id="co-${i}" data-i="${i}" aria-selected="${i === selected}"><span>${esc(c.title)}</span><span class="mono">${esc(c.hint)}</span></li>`;
  });
  list.innerHTML = html || '<li class="grp mono">No matches. Try “growth” or “RAG”.</li>';
  input.setAttribute('aria-activedescendant', 'co-' + selected);
  list.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
}

export const openMenu = () => { lastFocus = document.activeElement; box.hidden = false; input.value = ''; selected = 0; draw(); input.focus(); };
export const closeMenu = () => { box.hidden = true; lastFocus?.focus?.(); };
export const isMenuOpen = () => !box.hidden;
const runSelected = (i) => { const c = results[i]; closeMenu(); c?.run(); };

export function initCommandMenu() {
  box = $('#cmdk');
  input = $('#cmdkIn');
  list = $('#cmdkList');
  $('#openCmd').addEventListener('click', openMenu);
  input.addEventListener('input', () => { selected = 0; draw(); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); selected = Math.min(selected + 1, results.length - 1); draw(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); selected = Math.max(selected - 1, 0); draw(); }
    else if (e.key === 'Enter') runSelected(selected);
  });
  list.addEventListener('click', (e) => { const li = e.target.closest('[data-i]'); if (li) runSelected(+li.dataset.i); });
  box.addEventListener('click', (e) => { if (e.target === box) closeMenu(); });
  addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); box.hidden ? openMenu() : closeMenu(); }
  });
}
