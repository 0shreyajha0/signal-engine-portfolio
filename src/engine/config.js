// Tunables for the Signal Engine. Safe to tweak without touching the scene code.

export const ENGINE = {
  colors: { consumer: '#FF8A66', growth: '#D3E27A', ai: '#93B7FF', signal: '#ECE8E1' },
  laneOrder: ['c', 'g', 'a'],          // top → bottom output streams
  particles: { desktop: 1600, mobile: 700 },
  maxPixelRatio: { desktop: 2, mobile: 1.5 },
  mobileBreakpoint: 900,               // px — below this, mobile poses + counts are used
  mobileVisibleIn: ['top', 'contact'], // on phones the engine fades out everywhere else
  laneSpacing: 2.2,                    // world units between output lanes
  poseEase: 0.045,                     // per-frame lerp toward the active section pose
  steer: { tilt: 0.5, sourceY: 2.4 },  // cursor influence
};

// Pose per section: [x, y, scale, streamOpacity, laneSpread]
// Add a key here if you add a new section id in content/site.js.
export const POSES = {
  desktop: {
    top:     [3.1, 0.1, 1.0, 1.0, 1.0],
    lenses:  [4.6, 2.7, 0.55, 0.6, 1.0],
    about:   [-5.4, 2.2, 0.42, 0.35, 0.7],
    work:    [5.6, 2.2, 0.42, 0.35, 0.7],
    build:   [5.4, -2.0, 0.5, 0.45, 0.8],
    writing: [6.2, 2.6, 0.36, 0.18, 0.6],
    contact: [2.6, 0.6, 0.9, 0.9, 1.1],
  },
  mobile: {
    top:     [0, 2.6, 0.62, 1.0, 1.0],
    lenses:  [0, 3.2, 0.5, 0.55, 1.0],
    about:   [0, 3.6, 0.4, 0.25, 0.6],
    work:    [0, 3.6, 0.4, 0.25, 0.6],
    build:   [0, 3.6, 0.4, 0.3, 0.6],
    writing: [0, 3.6, 0.38, 0.18, 0.5],
    contact: [0, 2.2, 0.55, 0.6, 1.0],
  },
};
