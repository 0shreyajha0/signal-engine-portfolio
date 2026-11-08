// Tiny DOM + string helpers shared by every component.

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** Dashed-underline class for draft/placeholder copy. */
export const isDraft = (s) => /^\[(draft|placeholder)\]/i.test(String(s ?? '').trim());
export const draftClass = (s, force) => (force || isDraft(s) ? 'ph' : '');

export const pad2 = (n) => String(n).padStart(2, '0');
