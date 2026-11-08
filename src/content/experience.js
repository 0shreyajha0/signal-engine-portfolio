// Work section. Each role has impact rows; each row opens into Problem / Decision / Outcome.
// `lens` colours the metric. Use `pre` for + or −. Leave `story` fields empty to show a draft note.

export const WORK = {
  index: 'Work',
  title: 'Impact,',
  titleAccent: 'with the reasoning attached.',
  intro: 'Each number opens into the problem, the decision and the outcome. Tap any row.',
};

const draft = { problem: '', decision: '', outcome: '' };

export const JOBS = [
  {
    company: 'YesMadam',
    kind: 'At-home beauty & wellness marketplace',
    role: 'Product Manager — AI, Growth & Strategy',
    dates: 'Mar 2026 — Now',
    place: 'Noida',
    lens: ['c', 'g', 'a'],
    impact: [
      { pre: '+', n: 23, suf: '%', label: 'ARPU', note: 'Cross-sell through recommendations and complementary services', lens: 'g', story: { ...draft } },
      { pre: '+', n: 15, suf: '%', label: 'Premium-category discovery', note: 'Laser & body toning; +12% conversion alongside', lens: 'c', story: { ...draft } },
      { pre: '+', n: 6.5, suf: '%', label: 'Marketplace efficiency', note: 'Matching customer demand to professional supply', lens: 'a', story: { ...draft } },
    ],
  },
  {
    company: 'Physics Wallah',
    kind: 'EdTech — apps & platform',
    role: 'Associate PM — Revenue & Growth',
    dates: 'May 2024 — Mar 2026',
    place: 'Noida',
    lens: ['a', 'g', 'c'],
    impact: [
      { pre: '+', n: 21, suf: '%', label: 'Retention', note: 'Churn-prediction model built on behavioural signals', lens: 'a', story: { ...draft } },
      { pre: '+', n: 13, suf: '%', label: 'Conversion', note: 'API-driven personalisation framework, 12 parameters', lens: 'c', story: { ...draft } },
      { pre: '+', n: 20, suf: '%', label: 'Average ARPU', note: 'Cross-selling woven into existing product journeys', lens: 'g', story: { ...draft } },
      { pre: '−', n: 33, suf: '%', label: 'Payment-page drop-off', note: 'Funnel analysis turned into UX fixes', lens: 'g', story: { ...draft } },
    ],
  },
  {
    company: 'Physics Wallah',
    kind: 'Product Manager Intern',
    role: 'PM Intern — Payments & Ops',
    dates: 'Jan — Apr 2024',
    place: 'Noida',
    lens: ['g', 'a'],
    impact: [
      { pre: '+', n: 35, suf: '%', label: 'Booking rate', note: 'In-house part-payment for high-ticket products', lens: 'g', story: { ...draft } },
      { pre: '−', n: 90, suf: '%', label: 'Operational error rate', note: 'Automation of manual workflows; 60% time saved', lens: 'a', story: { ...draft } },
    ],
  },
  {
    company: 'X2S Technologies',
    kind: 'Software Development Engineer Intern',
    role: 'SDE Intern',
    dates: 'Apr — Jul 2023',
    place: 'Gurugram',
    lens: ['c'],
    note: 'Built responsive web UI on a modern stack. This is where the engineering habit started.',
  },
];
