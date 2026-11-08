// Build Lab case-study page, generated from a BUILDS entry.
import { BUILDS, STATUS, PAGE_SECTIONS } from '../../content/builds.js';
import { LENS } from '../../content/lenses.js';
import { esc, pad2 } from '../../lib/dom.js';
import { lensDots, statusLabel } from '../../lib/ui.js';
import { archDiagram } from './archDiagram.js';

const draftPara = (label) =>
  `<p class="ph">[Draft] ${label} for this build goes here. Two or three short paragraphs; lead with the user, not the technology.</p>`;

function sectionBody(key, label, b, hex) {
  const v = b.page?.[key];
  if (key === 'decisions') {
    const rows = Array.isArray(v) && v.length ? v : [['[Decision point]', '[Option picked]', '[Trade-off reasoning]'], ['[Decision point]', '[Option picked]', '[Trade-off reasoning]']];
    return `<div class="tablewrap"><table class="decisions"><thead><tr><th>Question</th><th>Chosen</th><th>Why</th></tr></thead><tbody>${rows
      .map((r) => `<tr>${r.map((c) => `<td class="${/^\[/.test(c) ? 'ph' : ''}">${esc(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody></table></div>`;
  }
  if (key === 'architecture') return archDiagram(hex, b.page?.pipeline) + (v ? `<p>${esc(v)}</p>` : '');
  if (key === 'results') {
    const m = b.page?.metrics || [['[x%]', 'Metric one'], ['[n]', 'Metric two'], ['[t]', 'Metric three']];
    return `<div class="results mono">${m.map(([n, l], i) => `<div><b${i === 0 ? ` style="color:${hex}"` : ''}>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>${
      v ? `<p>${esc(v)}</p>` : '<p class="ph">[What you learned, and what you would do differently.]</p>'
    }`;
  }
  return v ? `<p>${esc(v)}</p>` : draftPara(label);
}

export function projectPage(id) {
  const b = BUILDS.find((x) => x.id === id);
  if (!b) return null;
  const i = BUILDS.indexOf(b);
  const next = BUILDS[(i + 1) % BUILDS.length];
  const hex = LENS[b.lens[0]].hex;
  const link = (url, text) => (url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${text} ↗</a>` : `<span>${text} · soon</span>`);
  return {
    crumb: 'Build Lab / ' + b.title,
    paper: false,
    html: `<div class="wrap">
      <div class="p-hero">
        <div class="tag mono"><span>${statusLabel(b.status)}</span><span>${esc(b.year)}</span><span class="lz">${lensDots(b.lens)} ${b.lens.map((l) => LENS[l].name).join(' · ')}</span>${b.placeholder ? '<span class="warn">Placeholder build slot</span>' : ''}</div>
        <h1 id="sheetTitle">${esc(b.title)}</h1>
        <p class="sum ${b.page?.summary ? '' : 'ph'}">${esc(b.page?.summary || b.summary + '. [One-paragraph summary to be written.]')}</p>
        <div class="p-facts mono">
          <div><span class="k">Role</span><span>${esc(b.page?.role || 'Solo · PM + builder')}</span></div>
          <div><span class="k">Stack</span><span>${esc(b.stack)}</span></div>
          <div><span class="k">Status</span><span>${STATUS[b.status]}</span></div>
          <div><span class="k">Links</span><span>${link(b.links?.demo, 'Demo')} · ${link(b.links?.code, 'Code')}</span></div>
        </div>
      </div>
      <div class="demo" aria-label="Demo area">
        <div class="demo-chrome"><span class="mono" style="color:${hex}">● Live demo</span><span class="u mono">${esc(b.links?.demo || 'demo link coming soon')}</span><span class="mono muted">Embed or recording</span></div>
        <div class="demo-stage">
          <div class="demo-side"><span class="mono muted">Sources</span><div class="pv-row" style="width:80%"></div><div class="pv-row" style="width:60%"></div><div class="pv-row" style="width:70%"></div></div>
          <div class="demo-main"><div class="pv-glow" style="background:${hex};opacity:.25"></div>
            <div class="bubble me">[Example question a user would ask]</div>
            <div class="bubble">[Example grounded answer from the build]<div class="cite"><i>doc·03</i><i>doc·11</i></div></div>
            <div class="demo-input mono">Try it: type a question…<span>↵</span></div>
          </div>
        </div>
      </div>
      <div class="p-body">
        <nav class="toc" aria-label="On this page">${PAGE_SECTIONS.map(([k, l]) => `<a href="#s-${k}" data-k="${k}">${l}</a>`).join('')}</nav>
        <div class="p-content">${PAGE_SECTIONS.map(
          ([k, l], n) => `<div class="blk" id="s-${k}"><h2><span class="mono">${pad2(n + 1)}</span>${l}</h2>${sectionBody(k, l, b, hex)}</div>`
        ).join('')}</div>
      </div>
      <div class="pnext"><span class="mono muted">Next build</span><a href="#p-${next.id}" data-cursor="Next">${esc(next.title)} →</a></div>
    </div>`,
  };
}
