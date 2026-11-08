// The slide-up sheet that hosts project and essay pages. Handles focus, Esc, progress, TOC.
import { $, $$ } from '../../lib/dom.js';
import { set } from '../../lib/state.js';
import { motion, STATIC } from '../../lib/motion.js';
import { onRoute, clearRoute, route } from '../../lib/router.js';
import { bindCursorTargets } from '../cursor.js';
import { projectPage } from './projectPage.js';
import { articlePage } from './articlePage.js';

let sheet, body, lastFocus = null;

export function renderSheetShell() {
  return `<div class="sheet-bar wrap">
      <span class="mono" id="sheetCrumb"></span>
      <button class="close" type="button" id="sheetClose" data-cursor="Close">Close <span class="kbd">Esc</span></button>
      <i class="progress" id="sheetProg"></i>
    </div>
    <div id="sheetBody"></div>`;
}

export function openSheet(kind, id) {
  const page = kind === 'p' ? projectPage(id) : articlePage(id);
  if (!page) return closeSheet(true);
  if (!sheet.classList.contains('open')) lastFocus = document.activeElement;
  sheet.classList.toggle('paper', page.paper);
  $('#sheetCrumb').textContent = page.crumb;
  body.innerHTML = page.html;
  sheet.scrollTop = 0;
  sheet.classList.add('open');
  sheet.removeAttribute('inert');
  document.body.style.overflow = 'hidden';
  set('sheetOpen', true);
  setTimeout(() => $('#sheetClose').focus({ preventScroll: true }), 50);
  bindCursorTargets(sheet);
}

export function closeSheet(fromRoute) {
  if (!sheet.classList.contains('open')) return;
  sheet.classList.remove('open');
  sheet.setAttribute('inert', '');
  document.body.style.overflow = '';
  set('sheetOpen', false);
  if (!fromRoute) clearRoute();
  lastFocus?.focus?.({ preventScroll: true });
}

export const isSheetOpen = () => sheet.classList.contains('open');

export function initSheet() {
  sheet = $('#sheet');
  body = $('#sheetBody');
  sheet.setAttribute('inert', '');
  onRoute(openSheet, closeSheet);
  $('#sheetClose').addEventListener('click', () => closeSheet());

  sheet.addEventListener('scroll', () => {
    const p = sheet.scrollTop / (sheet.scrollHeight - sheet.clientHeight || 1);
    $('#sheetProg').style.transform = `scaleX(${p})`;
    $$('.toc a', sheet).forEach((a) => {
      const s = $('#s-' + a.dataset.k, sheet);
      if (!s) return;
      const r = s.getBoundingClientRect();
      a.classList.toggle('on', r.top < 200 && r.bottom > 200);
    });
  });
  sheet.addEventListener('click', (e) => {
    const a = e.target.closest('.toc a');
    if (!a) return;
    e.preventDefault();
    $('#s-' + a.dataset.k, sheet).scrollIntoView({ behavior: motion.calm ? 'auto' : 'smooth' });
  });

  // ?static&view=p-<id> renders a detail page in normal flow (for Figma capture / screenshots).
  const view = STATIC && new URLSearchParams(location.search).get('view');
  const m = view && view.match(/^(p|n)-(.+)$/);
  if (m) {
    document.documentElement.classList.add('static-sheet');
    openSheet(m[1], m[2]);
    document.body.style.overflow = '';
  } else route();
}
