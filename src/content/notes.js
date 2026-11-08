// Notebook (writing). One object per essay. Set `feature: true` on exactly one.
// `url` links out (e.g. Medium). Without a url, the essay opens in on-site reading mode (`body`).

export const NOTEBOOK = {
  index: 'Notebook',
  title: 'Written',
  titleAccent: 'thinking.',
  intro: 'Essays on AI product management, growth, user psychology and experimentation.',
  empty: 'Nothing filed under this topic yet. Pick another, or come back soon.',
};

export const NOTES = [
  { id: 'ai-features-trust', placeholder: true, feature: true, topic: 'AI Product', lens: 'a', title: 'Designing AI features people actually trust', dek: 'Why evals, fallbacks and honest UI states matter more than model choice.', date: '2026', minutes: 9, url: '' },
  { id: 'arpu-without-discounts', placeholder: true, topic: 'Growth', lens: 'g', title: 'Growing ARPU without discount addiction', dek: 'Cross-sell as a product problem, not a marketing one.', date: '2026', minutes: 7, url: '' },
  { id: 'churn-model-to-product', placeholder: true, topic: 'AI Product', lens: 'a', title: 'From churn model to product intervention', dek: 'A prediction is worthless until it changes what the user sees.', date: '2025', minutes: 11, url: '' },
  { id: 'payment-funnel', placeholder: true, topic: 'Analytics', lens: 'g', title: 'Reading a payment funnel like a detective', dek: 'Where users drop, and why the obvious fix is usually wrong.', date: '2025', minutes: 6, url: '' },
  { id: 'user-psychology', placeholder: true, topic: 'Product Thinking', lens: 'c', title: 'User psychology for product managers', dek: 'Defaults, anchoring and the quiet power of plan structure.', date: '2024', minutes: 8, url: '' },
  { id: 'ab-tests-lie', placeholder: true, topic: 'Experimentation', lens: 'g', title: 'When your A/B test is lying to you', dek: 'Novelty effects, peeking and segments that cancel out.', date: '2024', minutes: 10, url: '' },
];
