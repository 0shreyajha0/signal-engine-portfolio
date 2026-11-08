// Shared app state with tiny pub/sub. Components read and react; nobody owns it.

const listeners = {};
export const state = {
  section: 'top',     // id of the section in view
  focusLens: null,    // 'c' | 'g' | 'a' | null — isolates a stream in the 3D engine
  sheetOpen: false,   // project/essay page is open
};

export function set(key, value) {
  if (state[key] === value) return;
  state[key] = value;
  (listeners[key] || []).forEach((fn) => fn(value));
}

export function on(key, fn) {
  (listeners[key] ||= []).push(fn);
}
