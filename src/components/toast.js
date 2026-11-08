// One-line status toast (announced to screen readers via role=status on #toast).
let timer;
export function toast(message) {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.classList.add('on');
  clearTimeout(timer);
  timer = setTimeout(() => t.classList.remove('on'), 1800);
}
