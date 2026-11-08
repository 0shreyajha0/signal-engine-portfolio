// Build Lab. Add a new object to BUILDS to add a project; its page is generated.
// status: 'live' | 'proto' | 'exp' | 'concept'. placeholder: true shows a dashed "draft" underline.
// `page` holds the case-study copy; any section left empty shows a draft note.

export const BUILD_LAB = {
  index: 'Build Lab',
  title: 'Things I build',
  titleAccent: 'myself.',
  intro: 'AI apps, agents, RAG systems and experiments, each one labelled honestly as live, prototype, experiment or concept.',
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

export const BUILDS = [
  {
    id: 'noise-model',
    title: 'Noise Pollution Predictor',
    summary: 'ML model forecasting urban noise levels; adopted by DTU',
    status: 'live', lens: ['a'], stack: 'Python · ML', year: '2024',
    links: { demo: '', code: '' },
    page: {},
  },
  {
    id: 'rag-assistant', placeholder: true,
    title: 'RAG Assistant',
    summary: '[Placeholder] Retrieval-augmented assistant over a private knowledge base',
    status: 'proto', lens: ['a', 'c'], stack: 'RAG · LLM · Vector DB', year: '2026',
    links: { demo: '', code: '' },
    page: {},
  },
  {
    id: 'ai-agent', placeholder: true,
    title: 'Workflow Agent',
    summary: '[Placeholder] Agent that automates a multi-step ops workflow',
    status: 'exp', lens: ['a', 'g'], stack: 'Agents · Tools · Lambda', year: '2026',
    links: { demo: '', code: '' },
    page: {},
  },
  {
    id: 'growth-lab', placeholder: true,
    title: 'Experiment Readout Tool',
    summary: '[Placeholder] Turns A/B results into a decision memo',
    status: 'concept', lens: ['g', 'a'], stack: 'Python · Stats · GenAI', year: '2026',
    links: { demo: '', code: '' },
    page: {},
  },
  {
    id: 'this-site',
    title: 'This Portfolio',
    summary: 'Designed and vibe-coded end to end: WebGL, motion system, content-driven layout',
    status: 'live', lens: ['c', 'a'], stack: 'Three.js · GLSL · Vite', year: '2026',
    links: { demo: '', code: '' },
    page: {},
  },
];
