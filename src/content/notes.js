// Notebook (writing). One object per essay. Set `feature: true` on exactly one.
// `url` links out (Medium). Without a url, the essay opens in on-site reading mode (`body`).
// Source: medium.com/@0shreyajha0 (read times from article length, ~230 wpm).

export const NOTEBOOK = {
  index: 'Notebook',
  title: 'Written',
  titleAccent: 'thinking.',
  intro: 'Essays on AI product management, product thinking, user psychology and experimentation.',
  empty: 'Nothing filed under this topic yet. Pick another, or come back soon.',
};

const M = 'https://medium.com/@0shreyajha0/';

export const NOTES = [
  {
    id: 'spec-driven-development', feature: true, topic: 'AI Product', lens: 'a',
    title: 'Spec-Driven Development: The Right Way To Vibe Code',
    dek: 'If anyone can prompt their way to an app, what’s left for the PM? More than before.',
    date: 'Aug 2026', minutes: 5, url: M + 'spec-driven-development-the-right-way-to-vibe-code-4544f0c61e8c',
  },
  {
    id: 'data-driven-decisions', topic: 'Analytics', lens: 'g',
    title: 'Data Driven Decisions aren’t always successful',
    dek: 'Some of my biggest product mistakes happened when the dashboards looked perfect.',
    date: 'Feb 2026', minutes: 3, url: M + 'data-driven-decisions-arent-always-successful-509ecb04a6d9',
  },
  {
    id: 'invisible-engine', topic: 'AI Product', lens: 'a',
    title: 'The Invisible Engine of the Modern World',
    dek: 'The language quietly running behind most of the AI you used today.',
    date: 'Jan 2026', minutes: 2, url: M + 'the-invisible-engine-of-the-modern-world-4774905c1f5a',
  },
  {
    id: 'github-copilot-pms', topic: 'AI Product', lens: 'a',
    title: 'GitHub + Copilot + PMs + AI = A Day Full of “Aha!” Moments',
    dek: 'Notes from GitHub’s “Copilot for Product Managers” day: dev roots, PM lens.',
    date: 'Jun 2025', minutes: 4, url: M + 'github-copilot-pms-ai-a-day-full-of-aha-moments-1763f4b6e3cd',
  },
  {
    id: 'psychology-not-hacking', topic: 'Product Thinking', lens: 'c',
    title: 'Why Product Thinking Needs More Psychology and Less Hacking',
    dek: 'Users don’t drop off over button colours. They drop off when something doesn’t feel right.',
    date: 'Apr 2025', minutes: 5, url: M + 'why-product-thinking-needs-more-psychology-and-less-hacking-a50956752064',
  },
  {
    id: 'ab-testing-basics', topic: 'Experimentation', lens: 'g',
    title: 'From Guesswork to Growth: A/B Testing Basics Every PM Needs',
    dek: 'The fundamentals of A/B testing, from hypothesis to decision.',
    date: 'Apr 2025', minutes: 4, url: M + 'from-guesswork-to-growth-a-b-testing-basics-every-pm-needs-4b864205fdbc',
  },
  {
    id: 'user-interviews', topic: 'Product Thinking', lens: 'c',
    title: 'The Art of User Interviews: A PM’s Secret Weapon',
    dek: 'Why Google Forms aren’t interviews, and what The Mom Test changed for me.',
    date: 'Feb 2025', minutes: 4, url: M + 'the-art-of-user-interviews-a-pms-secret-weapon-0f484d1ba610',
  },
  {
    id: 'what-is-prd', topic: 'Product Thinking', lens: 'c',
    title: 'What is PRD??',
    dek: 'An interactive guide to what a PRD holds, who uses it, and when.',
    date: 'Jul 2024', minutes: 3, url: M + 'what-is-prd-ac3b44760bfa',
  },
  {
    id: 'pm-vs-analyst', topic: 'Product Thinking', lens: 'c',
    title: 'Product Manager Vs Product Analyst: With Zomato’s Veg Only Example',
    dek: 'Two roles that look alike from outside, explained through one real feature.',
    date: 'Jun 2024', minutes: 5, url: M + 'product-manager-vs-product-analyst-bda610f15c7a',
  },
];
