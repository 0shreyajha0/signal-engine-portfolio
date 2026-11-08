// Bottom-left "instrument" readout: current section, scroll progress, local time. Desktop only.
import { SECTIONS, META } from '../content/site.js';
import { $, pad2 } from '../lib/dom.js';
import { onProgress } from '../lib/scrollspy.js';

const ORDER = ['top', ...SECTIONS.map((s) => s.id), 'contact'];
const LABEL = { top: 'Index', contact: 'Contact', ...Object.fromEntries(SECTIONS.map((s) => [s.id, s.label])) };

export function renderReadout() {
  return `<span><b id="roSec">§00 Index</b></span><span class="bar"><i id="roBar"></i></span><span id="roPct">0%</span><span>·</span><span id="roTime">${META.tzLabel} --:--</span>`;
}

export function initReadout() {
  onProgress((p, sec) => {
    $('#roBar').style.transform = `scaleX(${p})`;
    $('#roPct').textContent = Math.round(p * 100) + '%';
    $('#roSec').textContent = `§${pad2(ORDER.indexOf(sec))} ${LABEL[sec]}`;
  });
  const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: META.timezone });
  const tick = () => ($('#roTime').textContent = `${META.tzLabel} ${fmt.format(new Date())}`);
  tick();
  setInterval(tick, 30000);
}
