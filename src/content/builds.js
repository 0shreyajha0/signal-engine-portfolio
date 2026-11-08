// Build Lab. Add a new object to BUILDS to add a project; its page is generated.
// status: 'live' | 'proto' | 'exp' | 'concept'. placeholder: true shows a dashed "draft" underline.
// `page` holds the case-study copy; any section left empty shows a draft note.
// page.pipeline = up to 5 short step labels for the "How it works" diagram.
// page.decisions = [[question, chosen, why], …]; page.metrics = [[big number, label], …].
// Source for everything below: the public repos at github.com/0shreyajha0 (read 2026-11-08).

export const BUILD_LAB = {
  index: 'Build Lab',
  title: 'Things I build',
  titleAccent: 'myself.',
  intro: 'ML models, data analyses and web apps, each labelled honestly as live, prototype, experiment or concept. AI agent and RAG builds are next.',
};

export const STATUS = { live: 'Live', proto: 'Prototype', exp: 'Experiment', concept: 'Concept' };

export const PAGE_SECTIONS = [
  ['problem', 'Problem'],
  ['user', 'Target user'],
  ['opportunity', 'Opportunity'],
  ['solution', 'Solution'],
  ['decisions', 'Product decisions'],
  ['architecture', 'How it works'],
  ['contribution', 'My contribution'],
  ['results', 'Results & learnings'],
];

const GH = 'https://github.com/0shreyajha0/';

export const BUILDS = [
  {
    id: 'noise-model',
    title: 'Noise Pollution Predictor',
    summary: 'ML model predicting classroom noise levels from 37 room and environment factors; adopted by DTU',
    status: 'live', lens: ['a'], stack: 'Python · scikit-learn · pandas', year: '2024',
    links: { demo: '', code: GH + 'Noise-Predicting-Model' },
    page: {
      summary: 'A regression model that estimates how loud a classroom will be from how the room is built, used and surrounded. It was adopted by Delhi Technological University.',
      problem: 'Noise in study spaces hurts concentration, but the factors behind it (occupancy, ventilation, materials, nearby traffic) are rarely measured together, so it is hard to know what to fix.',
      solution: 'A model trained on classroom survey data that predicts the noise level of a room from 37 inputs: number of students, AC blowers and fans, room size and ceiling height, windows, doors and wall thickness, furniture and wall materials, distance from roads and other external noise, and how teaching happens in the room.',
      decisions: [
        ['One model or several?', 'A voting ensemble of linear regression, random forest and decision tree', '[Draft] Why the ensemble beat any single model.'],
        ['How to judge accuracy?', 'MAE, MSE and RMSE on a held-out 20% test split', '[Draft] Which error mattered most for the people using it.'],
      ],
      pipeline: ['Room survey', '37 features', 'Linear · RF · Tree', 'Voting ensemble', 'Noise level'],
      architecture: 'Built in Python with pandas and scikit-learn. Data is split 80/20, each model is trained and scored, and their predictions are averaged by a VotingRegressor. The trained model is saved with joblib so it can be reused.',
      metrics: [['37', 'input features'], ['3', 'models in the ensemble'], ['DTU', 'adopted by the university']],
      results: 'Adopted by DTU. The related study of acoustics in campus study spaces was published at ICSTCE 2024.',
    },
  },
  {
    id: 'virtual-kitchens',
    title: 'Virtual Kitchen Hours Analysis',
    summary: 'SQL analysis of opening-hour mismatches for virtual kitchens across Grubhub and Uber Eats',
    status: 'exp', lens: ['g', 'c'], stack: 'SQL · BigQuery', year: '2024',
    links: { demo: '', code: GH + 'virtual-Restaurants' },
    page: {
      summary: 'An analysis of whether the same virtual restaurant shows different business hours on different delivery apps, and what that could mean for order volume.',
      problem: 'A virtual kitchen listed on several delivery platforms can show different opening hours on each. A customer who finds it “closed” on one app may never order.',
      user: 'Operators and growth teams at food-delivery platforms and multi-brand kitchens.',
      solution: 'BigQuery SQL that pulls each store’s hours from Grubhub and Uber Eats data, joins the two by store, and labels every store as “In range”, “Out of range by under 5 minutes” or “Out of range”.',
      pipeline: ['Grubhub hours', 'Uber Eats hours', 'Join by store', 'Compare hours', 'Mismatch flag'],
      architecture: 'Written in SQL on BigQuery. JSON fields are parsed from each platform’s raw menu data, times are parsed into timestamps, and a CASE rule classifies the gap between platforms.',
    },
  },
  {
    id: 'stats-dashboard',
    title: 'Sales Stats Dashboard',
    summary: 'Sales dashboard showing trends across clothing, accessories and customer demographics',
    status: 'live', lens: ['g'], stack: 'React · TypeScript · Refine · Chart.js', year: '2024',
    links: { demo: 'https://go-marble-ai-assignment.vercel.app', code: GH + 'Stats-Dashboard' },
    page: {
      summary: 'A sales dashboard with line graphs, a date-range picker and recent sales, built on the Refine framework.',
      solution: 'Charts and infographics of sales patterns across clothing, accessories and customer demographics, with a date-range filter and a recent-sales list.',
      pipeline: ['Sales data', 'Refine app', 'Date filter', 'Chart.js', 'Dashboard'],
      architecture: 'Built from the Refine template with React and TypeScript, styled with Tailwind CSS, Daisy UI and shadcn/ui, with charts from Chart.js and react-chartjs-2. Unused template pages and components were removed.',
    },
  },
  {
    id: 'data-visualiser',
    title: 'Data Visualiser',
    summary: 'Interactive data-visualisation web app built with React and D3',
    status: 'live', lens: ['a'], stack: 'React · D3 · Material UI', year: '2024',
    links: { demo: 'https://data-visualizer-psi.vercel.app/', code: GH + 'Data-Visualiser' },
    page: {
      pipeline: ['Dataset', 'React app', 'Tree view', 'D3 charts', 'Insight'],
      architecture: 'Built with React, D3 for the charts, and Material UI (including its tree view) for navigation.',
    },
  },
  {
    id: 'this-site',
    title: 'This Portfolio',
    summary: 'Designed and coded end to end: WebGL, a motion system, content-driven layout',
    status: 'live', lens: ['c', 'a'], stack: 'Three.js · GLSL · JS', year: '2026',
    links: { demo: 'https://0shreyajha0.github.io/signal-engine-portfolio/', code: GH + 'signal-engine-portfolio' },
    page: {
      summary: 'A portfolio that works like a product: one 3D “signal engine” and three colour-coded lenses tie consumer, growth and AI work into one story.',
      solution: 'A Vite site with every word in content files, one small file per component, mobile-first styles, and a three.js scene that reacts to the cursor, scroll and the lens you hover.',
      pipeline: ['Content files', 'Components', 'Vite build', 'GitHub Actions', 'GitHub Pages'],
      architecture: 'Vanilla JavaScript modules and CSS, with three.js loaded only after the text is on screen. Every push to main builds and deploys automatically.',
      contribution: 'Direction, design system, Figma file, copy and code.',
    },
  },
];
