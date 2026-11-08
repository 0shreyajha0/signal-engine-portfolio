// Notebook: featured essay + topic-filtered list.
import { NOTEBOOK, NOTES } from '../content/notes.js';
import { esc, $, $$ } from '../lib/dom.js';
import { sectionHead, chipGroup, bindChips } from '../lib/ui.js';

const href = (n) => (n.url ? n.url : `#n-${n.id}`);
const ext = (n) => (n.url ? ' target="_blank" rel="noopener"' : '');

export function renderNotebook(num) {
  const feat = NOTES.find((n) => n.feature) || NOTES[0];
  const rest = NOTES.filter((n) => n !== feat);
  const topics = ['All', ...new Set(NOTES.map((n) => n.topic))];
  const chips = topics.map((t) => {
    const first = NOTES.find((n) => n.topic === t);
    return { value: t, label: t, dot: first?.lens, count: t === 'All' ? NOTES.length : NOTES.filter((n) => n.topic === t).length };
  });
  return `<section id="writing" class="sec wrap" aria-labelledby="h-writing">
    ${sectionHead({ id: 'writing', num, index: NOTEBOOK.index, title: NOTEBOOK.title, titleAccent: NOTEBOOK.titleAccent, intro: NOTEBOOK.intro })}
    <a class="feature rv" href="${href(feat)}"${ext(feat)} data-cursor="Read">
      <div class="meta mono"><span>Featured essay</span><span class="tp"><span class="dot ${feat.lens}"></span>${esc(feat.topic)}</span><span>${feat.minutes} min read · ${esc(feat.date)}</span></div>
      <h3 class="${feat.placeholder ? 'ph' : ''}">${esc(feat.title)}</h3>
      <p>${esc(feat.dek)}</p>
      <span class="read btn">Read essay <span class="arr">→</span></span>
    </a>
    <div class="notes">
      <div class="notes-filter">${chipGroup(chips, 'Filter essays by topic', 'noteFilters')}</div>
      <div class="notes-list" id="notesList">${rest
        .map(
          (n) => `<a class="note" href="${href(n)}"${ext(n)} data-topic="${esc(n.topic)}" data-cursor="Read">
          <span class="dt mono">${esc(n.date)}</span>
          <div><h3 class="${n.placeholder ? 'ph' : ''}">${esc(n.title)}</h3><p>${esc(n.dek)}</p></div>
          <span class="rt mono"><span class="dot ${n.lens}"></span>${n.minutes} min</span>
        </a>`
        )
        .join('')}<p class="notes-empty" hidden>${esc(NOTEBOOK.empty)}</p></div>
    </div>
  </section>`;
}

export function initNotebook() {
  bindChips($('#noteFilters'), (v) => {
    let shown = 0;
    $$('.note').forEach((r) => {
      r.hidden = v !== 'All' && r.dataset.topic !== v;
      if (!r.hidden) shown++;
    });
    $('.notes-empty').hidden = shown > 0;
  });
}
