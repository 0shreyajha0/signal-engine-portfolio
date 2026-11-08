// The three lenses. `key` is used everywhere as a colour tag (c / g / a).
// Colours live in src/styles/tokens.css (--c, --g, --a) and in engine/config.js.

export const LENS = {
  c: { name: 'Consumer', hex: '#FF8A66' },
  g: { name: 'Growth',   hex: '#D3E27A' },
  a: { name: 'AI',       hex: '#93B7FF' },
};

export const PRACTICE = {
  index: 'Practice',
  title: 'One input.',
  titleAccent: 'Three lenses.',
  intro: 'Every product question starts as user signal. I read it three ways, and the best work sits where they overlap.',
  footLeft: 'Colour = lens. It tags every case, build and essay below.',
  footRight: 'Engineering foundation · DTU CS minor',
  lenses: [
    {
      key: 'c',
      question: 'What does the person on the other side of the screen actually need?',
      evidence: [['+15%', 'premium discovery'], ['−33%', 'pay drop-off']],
      tags: ['Customer journeys', 'Discovery', 'Personalisation', 'Marketplaces', 'Engagement'],
    },
    {
      key: 'g',
      question: 'Which lever moves the business, and how do we prove it moved?',
      evidence: [['+23%', 'ARPU'], ['+35%', 'booking rate']],
      tags: ['Monetisation', 'Conversion', 'ARPU · AOV', 'Retention · LTV', 'Experimentation'],
    },
    {
      key: 'a',
      question: 'Where can a model make the product meaningfully smarter, and safely?',
      evidence: [['+21%', 'retention via churn model']],
      tags: ['Predictive models', 'GenAI · RAG', 'AI evals', 'Automation', 'Data products'],
    },
  ],
};
