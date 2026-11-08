// Essay reading view on a warm paper ground. If a note has `body` (an array of blocks)
// it renders that; otherwise it shows a typographic placeholder.
import { NOTES } from '../../content/notes.js';
import { LENS } from '../../content/lenses.js';
import { esc, pad2 } from '../../lib/dom.js';

const PLACEHOLDER = (hex) => `
  <p class="drop">This is placeholder body copy set in the reading face so the long-form rhythm can be judged at real size. The final essay replaces it. Measure is held to about 65 characters, with generous leading and a quiet paper ground that switches the site from instrument mode to reading mode.</p>
  <p>Paragraphs carry the argument. Headings are set in the interface face to act as signposts rather than decoration, and margin notes sit outside the measure on wide screens so they never interrupt the line.</p>
  <h2>A section heading</h2>
  <div class="side"><p>Side notes hold definitions, numbers and asides that a skimming reader can ignore and a careful reader will enjoy.</p><aside>MARGIN NOTE — a definition, a source, or the number behind a claim.</aside></div>
  <blockquote>A pull quote that states the essay’s sharpest idea in one line.</blockquote>
  <p>More placeholder body copy. On phones the margin notes fall inline beneath their paragraph, the drop cap stays, and the pull quote shrinks but keeps its centred, italic voice.</p>
  <figure><div class="fig"><div class="pv-glow" style="background:${hex};opacity:.5;right:10%;bottom:-40%"></div></div><figcaption>FIG. 1 — Full-bleed figure slot for a chart, diagram or product screenshot.</figcaption></figure>
  <p>Closing paragraph placeholder.</p>`;

export function articlePage(id) {
  const n = NOTES.find((x) => x.id === id);
  if (!n) return null;
  const i = NOTES.indexOf(n);
  const next = NOTES[(i + 1) % NOTES.length];
  const hex = LENS[n.lens].hex;
  return {
    crumb: 'Notebook / ' + n.topic,
    paper: true,
    html: `<article class="art wrap">
      <div class="kick mono"><span class="tp"><span class="dot ${n.lens}"></span>${esc(n.topic)}</span><span>${n.minutes} min read</span><span>${esc(n.date)}</span><span>Essay №${pad2(i + 1)}</span></div>
      <h1 id="sheetTitle">${esc(n.title)}</h1>
      <p class="dek">${esc(n.dek)}</p>
      <div class="by mono"><span class="av">SJ</span><span>Shreya Jha · Product Manager</span>${n.placeholder ? '<span class="r">Placeholder essay</span>' : ''}</div>
      ${n.body || PLACEHOLDER(hex)}
      <div class="end mono"><span>Filed under ${esc(n.topic)}</span><a href="#n-${next.id}">Next: ${esc(next.title)} →</a></div>
    </article>`,
  };
}
