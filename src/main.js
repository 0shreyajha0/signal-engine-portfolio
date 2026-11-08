// Entry point: renders every section from src/content/*, then wires up behaviour.
// Section order comes from SECTIONS in src/content/site.js.

import './styles/index.css';
import { SECTIONS } from './content/site.js';
import { $, pad2 } from './lib/dom.js';
import { initMotion } from './lib/motion.js';
import { initScrollSpy } from './lib/scrollspy.js';
import { initCountUps } from './lib/motion.js';
import { initRouter } from './lib/router.js';
import { maybeLoadFigmaCapture } from './lib/figmaCapture.js';

import { renderNav, initNav } from './components/nav.js';
import { renderDock } from './components/dock.js';
import { renderReadout, initReadout } from './components/readout.js';
import { renderHero, initHero, tickHero } from './components/hero.js';
import { renderLenses, initLensFocus } from './components/lenses.js';
import { renderAbout, initAbout, tickAbout } from './components/about.js';
import { renderWork, initWork } from './components/work.js';
import { renderBuildLab, initBuildLab, tickBuildLab } from './components/buildLab.js';
import { renderNotebook, initNotebook } from './components/notebook.js';
import { renderContact, initContact } from './components/contact.js';
import { renderSheetShell, initSheet, closeSheet, isSheetOpen } from './components/sheet/sheet.js';
import { renderCommandMenu, initCommandMenu, isMenuOpen, closeMenu } from './components/commandMenu.js';
import { initCursor, tickCursor } from './components/cursor.js';

const RENDERERS = { lenses: renderLenses, about: renderAbout, work: renderWork, build: renderBuildLab, writing: renderNotebook };

// 1. Render
initMotion();
$('#nav').innerHTML = renderNav();
$('#dock').innerHTML = renderDock();
$('#readout').innerHTML = renderReadout();
$('#main').innerHTML = renderHero() + SECTIONS.map((s, i) => RENDERERS[s.id]?.(pad2(i + 1)) ?? '').join('');
$('#contact').innerHTML = renderContact();
$('#sheet').innerHTML = renderSheetShell();
$('#cmdk').innerHTML = renderCommandMenu();

// 2. Behaviour
initNav();
initReadout();
initHero();
initLensFocus();
initAbout();
initWork();
initBuildLab();
initNotebook();
initContact();
initCommandMenu();
initCursor();
initRouter();
initSheet();
initScrollSpy(SECTIONS.map((s) => s.id));
initCountUps();
maybeLoadFigmaCapture();

// The 3D engine (three.js, ~120 KB gzipped) loads after the content is on screen,
// so phones get readable text first. Skipped when the visitor asks to save data.
const saveData = navigator.connection?.saveData;
if (!saveData) {
  const boot = () => import('./engine/signalEngine.js').then((m) => m.startSignalEngine($('#gl')));
  'requestIdleCallback' in window ? requestIdleCallback(boot, { timeout: 1200 }) : setTimeout(boot, 300);
}

addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (isMenuOpen()) closeMenu();
  else if (isSheetOpen()) closeSheet();
});

// 3. One animation loop for all DOM-driven motion
(function loop() {
  tickCursor();
  tickHero();
  tickBuildLab();
  tickAbout();
  requestAnimationFrame(loop);
})();
