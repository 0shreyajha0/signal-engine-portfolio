// About: portrait with depth layers, story, career path, principles, skills.
import { ABOUT } from '../content/about.js';
import { esc, draftClass, $ } from '../lib/dom.js';
import { sectionHead } from '../lib/ui.js';
import { pointer } from '../lib/pointer.js';
import { motion, finePointer } from '../lib/motion.js';

export function renderAbout(num) {
  const p = ABOUT.portrait;
  return `<section id="about" class="sec wrap" aria-labelledby="h-about">
    ${sectionHead({ id: 'about', num, index: ABOUT.index, title: ABOUT.title, titleAccent: ABOUT.titleAccent })}
    <div class="about">
      <div class="portrait rv" aria-label="${p.src ? esc(p.alt) : 'Portrait placeholder'}">
        <div class="stack" id="pstack">
          <div class="layer l1">${p.src ? `<img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy">` : ''}</div>
          ${p.src ? '' : '<div class="layer l2 mono">Portrait · 4:5<br>placeholder</div>'}
          ${p.badge ? `<div class="layer l4 mono"><span class="dot g"></span>${esc(p.badge)}</div>` : ''}
          <div class="layer l3"><span class="mono k">Based in</span><b>${esc(p.basedIn)}</b></div>
        </div>
      </div>
      <div class="about-copy rv">
        <p class="big">${ABOUT.lead}</p>
        ${ABOUT.paragraphs.map((t) => `<p class="${draftClass(t)}">${esc(t)}</p>`).join('')}
      </div>
      <ol class="path rv" aria-label="Career path">${ABOUT.path
        .map((s) => `<li class="stop${s.now ? ' now' : ''}${s.next ? ' next' : ''}"><span class="yr mono">${esc(s.year)}</span><b>${esc(s.title)}</b><span class="r">${esc(s.detail)}</span></li>`)
        .join('')}</ol>
      <div class="principles">${ABOUT.principles
        .map((x) => `<div class="principle rv"><span class="mono lens-${x.lens}">Principle</span><h3 class="${draftClass(x.title)}">${esc(x.title)}</h3><p class="${draftClass(x.body)}">${esc(x.body)}</p></div>`)
        .join('')}</div>
      <div class="stackgrid rv">${ABOUT.skills
        .map(([k, v]) => `<div><span class="k mono">${esc(k)}</span><p>${esc(v)}</p></div>`)
        .join('')}</div>
    </div>
  </section>`;
}

let stack;
export function initAbout() { stack = $('#pstack'); }
export function tickAbout() {
  if (!stack || !finePointer || motion.calm) return;
  const r = stack.getBoundingClientRect();
  if (r.bottom < 0 || r.top > innerHeight) return;
  const dx = (pointer.x - (r.left + r.width / 2)) / r.width;
  const dy = (pointer.y - (r.top + r.height / 2)) / r.height;
  stack.style.transform = `rotateY(${dx * 14}deg) rotateX(${-dy * 14}deg)`;
}
