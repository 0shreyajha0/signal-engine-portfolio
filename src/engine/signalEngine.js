// THE SIGNAL ENGINE
// Noisy white "user signal" particles stream in from the left, pass through a glass
// cube (the product) and leave as three ordered, lens-coloured streams.
// Cursor steers the input and tilts the cube; scroll moves it between section poses;
// hovering a lens isolates its stream. Purely decorative: aria-hidden, page works without it.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, ShaderMaterial, BoxGeometry, Mesh,
  LineSegments, EdgesGeometry, LineBasicMaterial, SphereGeometry, MeshBasicMaterial,
  BufferGeometry, BufferAttribute, Points, AdditiveBlending, DoubleSide, Color, Line, Vector3,
} from 'three';
import { ENGINE, POSES } from './config.js';
import { fresnel, points } from './shaders.js';
import { state } from '../lib/state.js';
import { pointer } from '../lib/pointer.js';
import { motion, STATIC } from '../lib/motion.js';

export function startSignalEngine(canvas) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: STATIC });
  } catch {
    canvas.remove(); // no WebGL: the page is complete without the engine
    return;
  }
  let W = innerWidth, H = innerHeight;
  const isMobile = () => W < ENGINE.mobileBreakpoint;
  renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile() ? ENGINE.maxPixelRatio.mobile : ENGINE.maxPixelRatio.desktop));
  renderer.setSize(W, H, false);

  const scene = new Scene();
  const cam = new PerspectiveCamera(32, W / H, 0.1, 100);
  cam.position.set(0, 0, 16);
  const rig = new Group();
  scene.add(rig);

  // Glass cube: fresnel shell + edges + counter-rotating inner lattice + pulsing core
  const box = new BoxGeometry(2.2, 2.2, 2.2);
  const shell = new Mesh(box, new ShaderMaterial({ transparent: true, depthWrite: false, side: DoubleSide, vertexShader: fresnel.vertex, fragmentShader: fresnel.fragment }));
  shell.add(new LineSegments(new EdgesGeometry(box), new LineBasicMaterial({ color: 0xece8e1, transparent: true, opacity: 0.55 })));
  const inner = new LineSegments(new EdgesGeometry(new BoxGeometry(1.1, 1.1, 1.1, 2, 2, 2)), new LineBasicMaterial({ color: 0xece8e1, transparent: true, opacity: 0.22 }));
  const core = new Mesh(new SphereGeometry(0.16, 24, 24), new MeshBasicMaterial({ color: 0xffffff }));
  rig.add(shell, inner, core);

  // Particles
  const N = isMobile() ? ENGINE.particles.mobile : ENGINE.particles.desktop;
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), size = new Float32Array(N), alpha = new Float32Array(N);
  const P = Array.from({ length: N }, () => ({ u: Math.random() * 2, sp: 0.0016 + Math.random() * 0.0022, lane: Math.floor(Math.random() * 3), jy: Math.random() - 0.5, jz: Math.random() - 0.5, ph: Math.random() * 6.28, sz: 0.6 + Math.random() * 1.4 }));
  const laneColors = [ENGINE.colors.consumer, ENGINE.colors.growth, ENGINE.colors.ai].map((h) => new Color(h));
  const white = new Color(ENGINE.colors.signal);
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('color', new BufferAttribute(col, 3));
  geo.setAttribute('size', new BufferAttribute(size, 1));
  geo.setAttribute('alpha', new BufferAttribute(alpha, 1));
  const mat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uPR: { value: renderer.getPixelRatio() }, uFade: { value: 1 } }, vertexShader: points.vertex, fragmentShader: points.fragment });
  rig.add(new Points(geo, mat));

  // Faint guide line per output lane
  const beamMats = laneColors.map((c) => new LineBasicMaterial({ color: c, transparent: true, opacity: 0.3 }));
  const beams = beamMats.map((m) => {
    const l = new Line(new BufferGeometry().setFromPoints([new Vector3(0, 0, 0), new Vector3(11, 0, 0)]), m);
    rig.add(l);
    return l;
  });

  // Start exactly at the current section's pose (no fly-in on load)
  const p0 = POSES[isMobile() ? 'mobile' : 'desktop'];
  const [x0, y0, s0, f0, sp0] = p0[state.section] || p0.top;
  const S = { x: x0, y: y0, s: s0, f: f0, sp: sp0 };
  let t = 0, rx = 0, ry = 0;

  function frame() {
    if (canvas.clientWidth !== W || canvas.clientHeight !== H) {
      W = canvas.clientWidth; H = canvas.clientHeight;
      renderer.setSize(W, H, false);
      cam.aspect = W / H;
      cam.updateProjectionMatrix();
    }
    const poses = POSES[isMobile() ? 'mobile' : 'desktop'];
    const p = poses[state.section] || poses.top;
    const k = motion.calm ? 1 : ENGINE.poseEase;
    S.x += (p[0] - S.x) * k; S.y += (p[1] - S.y) * k; S.s += (p[2] - S.s) * k; S.f += (p[3] - S.f) * k; S.sp += (p[4] - S.sp) * k;
    rig.position.set(S.x, S.y, 0);
    rig.scale.setScalar(S.s);
    mat.uniforms.uFade.value = S.f;
    // Phones: the engine owns the hero and contact only; it never sits behind reading text.
    const restOnMobile = isMobile() && !ENGINE.mobileVisibleIn.includes(state.section);
    canvas.style.opacity = state.sheetOpen || restOnMobile ? 0 : 1;
    if (restOnMobile || state.sheetOpen) {
      if (!document.hidden) requestAnimationFrame(frame); // idle: no particle work while hidden
      return;
    }

    const speed = motion.calm ? 0 : 1;
    t += 0.016 * speed;
    ry += (pointer.nx * ENGINE.steer.tilt - ry) * 0.05;
    rx += (pointer.ny * ENGINE.steer.tilt * 0.7 - rx) * 0.05;
    shell.rotation.set(0.5 + rx + t * 0.08, 0.7 + ry + t * 0.12, 0);
    inner.rotation.set(-t * 0.2, -t * 0.15, 0.2);
    core.scale.setScalar(1 + Math.sin(t * 3) * 0.12);

    const focus = state.focusLens;
    const srcY = -pointer.ny * ENGINE.steer.sourceY;
    for (let i = 0; i < N; i++) {
      const q = P[i];
      q.u += q.sp * speed;
      if (q.u >= 2) { q.u -= 2; q.lane = Math.floor(Math.random() * 3); }
      let x, y, z, c, a, sz = q.sz;
      if (q.u < 1) {
        // input: wide, noisy, converging; fades in so it doesn't cross the headline
        const e = q.u, spread = (1 - e) * (1 - e) * 2.6;
        x = -11 + e * 11;
        y = srcY * (1 - e) + q.jy * spread + Math.sin(t * 2 + q.ph) * 0.18 * (1 - e);
        z = q.jz * spread;
        c = white;
        a = (0.35 + e * 0.55) * Math.min(1, e * e * 4);
      } else {
        // output: three ordered lanes
        const e = q.u - 1, lane = (1 - q.lane) * ENGINE.laneSpacing * S.sp;
        x = e * 11;
        y = lane * e + q.jy * (0.08 + e * 0.32);
        z = q.jz * (0.08 + e * 0.32);
        c = laneColors[q.lane];
        const isFocus = ENGINE.laneOrder[q.lane] === focus;
        a = (1 - e * 0.55) * (focus ? (isFocus ? 1.6 : 0.12) : 1);
        if (isFocus) sz *= 1.5;
      }
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      alpha[i] = Math.max(0, a);
      size[i] = sz;
    }
    beams.forEach((b, j) => {
      const arr = b.geometry.attributes.position.array;
      arr[4] = (1 - j) * ENGINE.laneSpacing * S.sp;
      b.geometry.attributes.position.needsUpdate = true;
      beamMats[j].opacity = (focus ? (ENGINE.laneOrder[j] === focus ? 0.8 : 0.06) : 0.28) * S.f;
    });
    for (const k2 of ['position', 'color', 'alpha', 'size']) geo.attributes[k2].needsUpdate = true;
    renderer.render(scene, cam);
    if (!document.hidden) requestAnimationFrame(frame);
  }

  document.addEventListener('visibilitychange', () => { if (!document.hidden) requestAnimationFrame(frame); });
  requestAnimationFrame(frame);
}
