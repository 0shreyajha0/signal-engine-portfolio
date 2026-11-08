// Work section. Each role has impact rows; each row opens into Problem / Decision / Outcome.
// `lens` colours the metric. Use `pre` for + or −. Leave a story field '' to show a draft note.

export const WORK = {
  index: 'Work',
  title: 'Impact,',
  titleAccent: 'with the reasoning attached.',
  intro: 'Each number opens into the problem, the decision and the outcome.',
};

export const JOBS = [
  {
    company: 'YesMadam',
    kind: 'At-home beauty & wellness marketplace',
    role: 'Product Manager — AI, Growth & Strategy',
    dates: 'Mar 2026 — Now',
    place: 'Noida',
    lens: ['c', 'g', 'a'],
    impact: [
      {
        pre: '+', n: 23, suf: '%', label: 'ARPU', lens: 'g',
        note: 'Cross-sell through recommendations and complementary services',
        story: {
          problem: '', // TODO: what held ARPU back?
          decision: 'Cross-sell through recommendations and complementary service offers.',
          outcome: 'ARPU up 23%.',
        },
      },
      {
        pre: '+', n: 15, suf: '%', label: 'Premium-category discovery', lens: 'c',
        note: 'Laser & body toning; +12% conversion alongside',
        story: {
          problem: 'Premium categories (Laser, Body Toning) were hard to find.',
          decision: '', // TODO: what changed — entry points, placement, ranking?
          outcome: 'Discovery up 15%, conversion up 12%.',
        },
      },
      {
        pre: '+', n: 6.5, suf: '%', label: 'Marketplace efficiency', lens: 'a',
        note: 'Matching customer demand to professional supply',
        story: {
          problem: 'Customer demand and professional supply were out of balance.',
          decision: '', // TODO: what changed in matching or scheduling?
          outcome: 'Availability, fulfilment and ops efficiency up 6.5%.',
        },
      },
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
      {
        pre: '+', n: 21, suf: '%', label: 'Retention', lens: 'a',
        note: 'Churn-prediction model built on behavioural signals',
        story: {
          problem: 'Churn-prone users were found too late to save.',
          decision: 'Led a retention prediction model on behavioural signals, then targeted interventions.',
          outcome: 'Retention up 21%.',
        },
      },
      {
        pre: '+', n: 13, suf: '%', label: 'Conversion', lens: 'c',
        note: 'API-driven personalisation framework, 12 parameters',
        story: {
          problem: 'One experience for every learner.',
          decision: 'Proposed and shipped an API-driven personalisation framework, 12 parameters, used across journeys.',
          outcome: 'Conversion up 13%, repeat engagement up 25%.',
        },
      },
      {
        pre: '+', n: 20, suf: '%', label: 'Average ARPU', lens: 'g',
        note: 'Cross-selling woven into existing product journeys',
        story: {
          problem: '', // TODO: what was missing in the purchase journeys?
          decision: 'Improved existing flows and added cross-sell features across journeys.',
          outcome: 'Average ARPU up 20%.',
        },
      },
      {
        pre: '−', n: 33, suf: '%', label: 'Payment-page drop-off', lens: 'g',
        note: 'Funnel analysis turned into UX fixes',
        story: {
          problem: 'Users dropped on the payment page, and the cause was unclear.',
          decision: 'Analysed the payment funnel for drop reasons, then shipped UX fixes.',
          outcome: 'Payment-page drop-off down 33%.',
        },
      },
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
      {
        pre: '+', n: 35, suf: '%', label: 'Booking rate', lens: 'g',
        note: 'In-house part-payment for high-ticket products',
        story: {
          problem: 'High-ticket products were hard to buy in one payment.',
          decision: 'Built an in-house part-payment option.',
          outcome: 'Booking rate up 35%.',
        },
      },
      {
        pre: '−', n: 90, suf: '%', label: 'Operational error rate', lens: 'a',
        note: 'Automation of manual workflows; 60% time saved',
        story: {
          problem: 'Manual operational work caused errors and took time.',
          decision: 'Automation and process changes.',
          outcome: 'Errors down 90%, time down 60%.',
        },
      },
    ],
  },
  {
    company: 'X2S Technologies',
    kind: 'Software Development Engineer Intern',
    role: 'SDE Intern',
    dates: 'Apr — Jul 2023',
    place: 'Gurugram',
    lens: ['c'],
    note: 'Built and maintained a responsive web UI to improve UX and web performance. This is where the engineering habit started.',
  },
];
