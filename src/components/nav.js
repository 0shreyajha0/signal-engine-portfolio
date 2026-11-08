// Top navigation: brand, section links with a sliding pill, always-visible contact links.
import { SECTIONS, LINKS, META } from '../content/site.js';
import { esc, $, $$ } from '../lib/dom.js';
import { on, state } from '../lib/state.js';
import { toast } from './toast.js';

const icons = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75v5.6h-4v-4.96c0-1.18-.02-2.7-1.7-2.7-1.7 0-1.95 1.3-1.95 2.62v5.04H10v-11Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
};

const extLink = (key, label) =>
  LINKS[key]
    ? `<a href="${esc(LINKS[key])}" target="_blank" rel="noopener" aria-label="${label}" data-cursor="Open">${icons[key]}<span class="lbl">${label}</span></a>`
    : `<a href="#" class="todo" aria-label="${label} (link coming soon)" data-cursor="Open">${icons[key]}<span class="lbl">${label}</span></a>`;

export function renderNav() {
  return `<a class="brand" href="#top" data-cursor="Top" aria-label="${esc(META.name)} — back to top">
      <span class="mark" aria-hidden="true"><i></i></span><span>${esc(META.name)}</span><small>${esc(META.roleShort)}</small>
    </a>
    <nav class="links" aria-label="Sections">
      <span class="pill" aria-hidden="true"></span>
      ${SECTIONS.filter((s) => s.nav).map((s) => `<a href="#${s.id}" data-sec="${s.id}">${esc(s.label)}</a>`).join('')}
    </nav>
    <div class="ext">
      ${extLink('linkedin', 'LinkedIn')}${extLink('github', 'GitHub')}
      <button class="kbtn" type="button" id="openCmd" aria-label="Open command menu" data-cursor="Search"><span class="kbd">⌘K</span></button>
      <a class="cta" href="${esc(LINKS.resume)}" target="_blank" rel="noopener" data-cursor="Get">Resume <span aria-hidden="true">↗</span></a>
    </div>`;
}

function movePill() {
  const a = $(`.links a[data-sec="${state.section}"]`);
  const pill = $('.links .pill');
  if (a && a.offsetParent) {
    pill.style.opacity = 1;
    pill.style.left = a.offsetLeft + 'px';
    pill.style.width = a.offsetWidth + 'px';
  } else pill.style.opacity = 0;
  $$('.links a, .dock a').forEach((x) => x.setAttribute('aria-current', x.dataset.sec === state.section));
}

export function initNav() {
  on('section', movePill);
  addEventListener('resize', movePill);
  document.fonts?.ready.then(movePill);
  movePill();
  $$('.nav .todo').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); toast('Link coming soon'); }));
}
