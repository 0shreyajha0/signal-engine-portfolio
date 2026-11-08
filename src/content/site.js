// ─────────────────────────────────────────────────────────────
// SITE SETTINGS — section order, navigation, links.
// To reorder the page, reorder SECTIONS. Nav, mobile dock,
// command menu and the § numbers all follow this list.
// ─────────────────────────────────────────────────────────────

export const SECTIONS = [
  { id: 'lenses',  label: 'Practice',  nav: false },
  { id: 'about',   label: 'About',     nav: true },
  { id: 'work',    label: 'Work',      nav: true },
  { id: 'build',   label: 'Build Lab', nav: true, short: 'Build' },
  { id: 'writing', label: 'Writing',   nav: true },
];

export const LINKS = {
  email: 'shreyajha.co@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shreyajha-co/',
  github: 'https://github.com/0shreyajha0',
  medium: 'https://medium.com/@0shreyajha0',
  caseStudies: 'https://app.notion.com/p/Shreya-s-Product-Management-Portfolio-22dd6689d302805aa796c3bc1f56279c',
  resume: import.meta.env.BASE_URL + 'resume.pdf', // put your PDF at public/resume.pdf
};

export const META = {
  name: 'Shreya Jha',
  roleShort: 'PM · Consumer / Growth / AI',
  location: 'Noida, IN',
  timezone: 'Asia/Kolkata',
  tzLabel: 'IST',
  year: 2026,
};
