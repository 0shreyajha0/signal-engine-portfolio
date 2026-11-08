// About section. Strings starting with "[Draft]" render with a dashed underline.

export const ABOUT = {
  index: 'About',
  title: 'Engineer by training,',
  titleAccent: 'PM by practice.',
  lead: 'I trained as an engineer and built an ML model to predict noise pollution. Now I decide <em>what</em> gets built, and I still build it myself when that’s the fastest way to learn.',
  paragraphs: [
    'At DTU I studied environmental engineering with a minor in computer science. My projects there modelled noise: a pollution-prediction model the university adopted, and a study of acoustics in campus study spaces, published at ICSTCE 2024.',
    '[Draft] Why product: the moment you moved from building to deciding what to build. Two or three sentences.',
    '[Draft] Why AI now, and the kind of team you want to join.',
  ],
  portrait: { src: '', alt: 'Portrait of Shreya Jha', badge: 'Open to PM roles & challenges', basedIn: 'Noida · Delhi NCR' },
  path: [
    { year: '2020 — 24', title: 'B.Tech, DTU', detail: 'Env. Eng. + CS minor · ML research' },
    { year: '2023', title: 'X2S Technologies', detail: 'SDE Intern' },
    { year: '2024', title: 'Physics Wallah', detail: 'PM Intern → APM' },
    { year: '2026 — now', title: 'YesMadam', detail: 'Product Manager', now: true },
    { year: 'Next', title: 'AI products', detail: 'Deeper AI specialisation', next: true },
  ],
  principles: [
    { lens: 'c', title: 'Start from the behaviour, not the feature request', body: 'Requests describe solutions. Usage data and support tickets describe problems.' },
    { lens: 'g', title: 'Every launch is an experiment with a hypothesis', body: 'If I can’t say what would prove it wrong, it isn’t ready to ship.' },
    { lens: 'a', title: 'Prototype the hard part first', body: 'With AI, the risky part is whether the model is good enough, so I test that before designing the screens.' },
  ],
  skills: [
    ['Product', 'Strategy, roadmapping, pricing & monetisation, prioritisation, stakeholder management'],
    ['Data', 'SQL, Python, Metabase, Google Analytics, A/B testing, KPI & OKR design, AI evals'],
    ['Build', 'RAG, AWS Lambda, Git/GitHub, Figma, Unleash, Plotline'],
    ['Research', 'Noise-prediction ML model adopted by DTU · paper at ICSTCE 2024'],
  ],
};
