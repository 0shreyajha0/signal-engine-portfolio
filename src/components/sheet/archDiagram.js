// Animated pipeline diagram used on project pages. Pass your own steps per build later.
const DEFAULT_STEPS = ['User query', 'Retrieve', 'Rank + ground', 'LLM', 'Eval gate'];

export function archDiagram(hex, steps = DEFAULT_STEPS) {
  const xs = steps.map((_, i) => 30 + i * 160);
  return `<div class="arch"><svg viewBox="0 0 820 170" role="img" aria-label="Pipeline: ${steps.join(', ')}, answer">
    <defs><linearGradient id="fl" x1="0" x2="1"><stop offset="0" stop-color="#ECE8E1" stop-opacity=".15"/><stop offset="1" stop-color="${hex}" stop-opacity=".9"/></linearGradient></defs>
    <path d="M60 85 H760" stroke="url(#fl)" stroke-width="2" fill="none" stroke-dasharray="4 6"><animate attributeName="stroke-dashoffset" from="40" to="0" dur="1.6s" repeatCount="indefinite"/></path>
    ${steps
      .map(
        (label, k) => `<g><rect x="${xs[k]}" y="58" width="130" height="54" rx="10" fill="#151513" stroke="${k === 3 ? hex : 'rgba(236,232,225,.3)'}"/>
        <text x="${xs[k] + 65}" y="90" text-anchor="middle" fill="#ECE8E1" font-family="Archivo, sans-serif" font-size="14">${label}</text>
        <text x="${xs[k] + 65}" y="138" text-anchor="middle" fill="#8A857D" font-family="JetBrains Mono, monospace" font-size="10">STEP ${k + 1}</text></g>`
      )
      .join('')}
    <circle cx="790" cy="85" r="8" fill="${hex}"/>
    <text x="790" y="40" text-anchor="end" fill="#8A857D" font-family="JetBrains Mono, monospace" font-size="10">ANSWER + CITATIONS</text>
  </svg></div>`;
}
