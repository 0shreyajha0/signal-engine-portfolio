// Contact + footer: copyable email, outbound links, motion toggle.
import { CONTACT } from '../content/contact.js';
import { LINKS, META, SECTIONS } from '../content/site.js';
import { esc, pad2, $ } from '../lib/dom.js';
import { toast } from './toast.js';
import { motion, setCalm } from '../lib/motion.js';

const out = (label, url, verb = 'Open') =>
  url
    ? `<a href="${esc(url)}" target="_blank" rel="noopener" data-cursor="${verb}">${label} <span class="mono">↗</span></a>`
    : `<a href="#" aria-disabled="true" class="todo" data-cursor="${verb}">${label} <span class="mono">[link]</span></a>`;

export function renderContact() {
  return `<span class="mono k">§${pad2(SECTIONS.length + 1)} / ${esc(CONTACT.index)}</span>
  <h2 id="h-contact">${esc(CONTACT.title)} <em>${esc(CONTACT.titleAccent)}</em></h2>
  <div class="contact-row">
    <div class="mail">
      <span class="mono k">${esc(CONTACT.emailLabel)}</span>
      <div class="addr"><span id="email">${esc(LINKS.email)}</span><button class="copy" type="button" id="copyEmail" data-cursor="Copy">Copy</button></div>
    </div>
    <nav class="out" aria-label="Elsewhere">
      ${out('LinkedIn', LINKS.linkedin)}${out('GitHub', LINKS.github)}${out('Resume (PDF)', LINKS.resume, 'Get')}${out('Medium', LINKS.medium)}
    </nav>
  </div>
  <div class="foot mono">
    <span>© ${META.year} ${esc(META.name)} · ${esc(CONTACT.credit)}</span>
    <span>Draft content shown with <span class="ph">dashed underline</span></span>
    <span>Motion: <button type="button" id="motionToggle" aria-pressed="${motion.calm}">${motion.calm ? 'Off' : 'On'}</button> · <a href="#top">Back to top ↑</a></span>
  </div>`;
}

export function copyEmail() {
  const addr = LINKS.email;
  const b = $('#copyEmail');
  const done = () => {
    b.dataset.done = 'true';
    b.textContent = 'Copied';
    toast('Email copied');
    setTimeout(() => { b.dataset.done = 'false'; b.textContent = 'Copy'; }, 1800);
  };
  const fallback = () => {
    const r = document.createRange();
    r.selectNodeContents($('#email'));
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    toast('Press ⌘C to copy');
  };
  if (navigator.clipboard) navigator.clipboard.writeText(addr).then(done, fallback);
  else fallback();
}

export function toggleMotion() {
  setCalm(!motion.calm);
  const t = $('#motionToggle');
  t.textContent = motion.calm ? 'Off' : 'On';
  t.setAttribute('aria-pressed', motion.calm);
  toast(motion.calm ? 'Motion reduced' : 'Motion on');
}

export function initContact() {
  $('#copyEmail').addEventListener('click', copyEmail);
  $('#motionToggle').addEventListener('click', toggleMotion);
  document.querySelectorAll('.out .todo').forEach((a) =>
    a.addEventListener('click', (e) => { e.preventDefault(); toast('Link coming soon'); })
  );
}
