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
  linkedin: 'https://linkedin.com/in/shreyajha-co',
  github: '',            // TODO: add your GitHub profile URL
  medium: '',            // TODO: add your Medium profile URL
  resume: '/resume.pdf', // put your PDF at public/resume.pdf
};

export const META = {
  name: 'Shreya Jha',
  roleShort: 'PM · Consumer / Growth / AI',
  location: 'Noida, IN',
  timezone: 'Asia/Kolkata',
  tzLabel: 'IST',
  year: 2026,
};
