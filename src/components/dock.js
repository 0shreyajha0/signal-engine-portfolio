// Mobile & tablet navigation: a thumb-reachable bottom dock (no hamburger menu).
import { SECTIONS } from '../content/site.js';
import { esc } from '../lib/dom.js';

export function renderDock() {
  return [...SECTIONS.filter((s) => s.nav), { id: 'contact', label: 'Contact' }]
    .map((s) => `<a href="#${s.id}" data-sec="${s.id}">${esc(s.short || s.label)}</a>`)
    .join('');
}
