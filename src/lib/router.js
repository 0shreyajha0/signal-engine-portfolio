// Hash router for detail pages: #p-<build id> opens a project, #n-<note id> opens an essay.
// Plain section anchors (#work, #about…) are left to the browser.

const handlers = { open: () => {}, close: () => {} };

export function onRoute(open, close) {
  handlers.open = open;
  handlers.close = close;
}

export function route() {
  const m = location.hash.slice(1).match(/^(p|n)-(.+)$/);
  if (m) handlers.open(m[1], m[2]);
  else handlers.close(true);
}

export function clearRoute() {
  history.replaceState(null, '', location.pathname + location.search);
}

export function initRouter() {
  addEventListener('hashchange', route);
}
