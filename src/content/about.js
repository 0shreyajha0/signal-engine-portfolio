// About section. Strings starting with "[Draft]" render with a dashed underline.

export const ABOUT = {
  index: 'About',
  title: 'Engineer by training,',
  titleAccent: 'PM by practice.',
  lead: 'I started by writing code and building ML models. Now I decide <em>what</em> gets built, and I still build it myself when that’s the fastest way to learn.',
  paragraphs: [
    '[Draft] Short personal paragraph: what pulls you toward AI products, the kind of problems you love, and what you’re like to work with.',
    '[Draft] Second paragraph: a specific moment that shaped how you work. Keep it human.',
  ],
  portrait: { src: '', alt: 'Portrait of Shreya Jha', badge: 'Open to AI PM roles', basedIn: 'Noida · Delhi NCR' },
  path: [
    { year: '2020 — 24', title: 'B.Tech, DTU', detail: 'Env. Eng. + CS minor · ML research' },
    { year: '2023', title: 'X2S Technologies', detail: 'SDE Intern' },
    { year: '2024', title: 'Physics Wallah', detail: 'PM Intern → APM' },
    { year: '2026 — now', title: 'YesMadam', detail: 'Product Manager', now: true },
    { year: 'Next', title: 'AI products', detail: 'Deeper AI specialisation', next: true },
  ],
  principles: [
    { lens: 'c', title: 'Start from the behaviour, not the feature request', body: '[Draft] One or two lines on how you work.' },
    { lens: 'g', title: 'Every launch is an experiment with a hypothesis', body: '[Draft] One or two lines on how you work.' },
    { lens: 'a', title: 'Prototype the hard part first', body: '[Draft] One or two lines on how you work.' },
  ],
  skills: [
    ['Product', 'Strategy, roadmapping, pricing & monetisation, prioritisation, stakeholder management'],
    ['Data', 'SQL, Python, Metabase, Google Analytics, A/B testing, KPI & OKR design, AI evals'],
    ['Build', 'RAG, AWS Lambda, Git/GitHub, Figma, Unleash, Plotline'],
    ['Research', 'Noise-prediction ML model adopted by DTU · paper at ICSTCE 2024'],
  ],
};
