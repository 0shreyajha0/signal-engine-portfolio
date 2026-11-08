// Works out which section is in view and the overall scroll progress.
import { set } from './state.js';
import { revealCheck } from './motion.js';

const progressListeners = [];
export const onProgress = (fn) => progressListeners.push(fn);

export function initScrollSpy(ids) {
  const all = ['top', ...ids, 'contact'];
  const update = () => {
    const y = scrollY + innerHeight * 0.4;
    let current = 'top';
    for (const id of all) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = id;
    }
    set('section', current);
    const p = scrollY / (document.documentElement.scrollHeight - innerHeight || 1);
    progressListeners.forEach((fn) => fn(p, current));
    revealCheck();
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}
