# Shreya Jha — Portfolio ("Signal Engine")

A 3D, motion-led portfolio for a Product Manager working across **consumer, growth and AI**.
Plain HTML/CSS/JS built with [Vite](https://vitejs.dev), with a [three.js](https://threejs.org) scene for the hero.
No framework to learn: every section is a small file you can read top to bottom.

**Picking this up fresh (new machine or new Claude account)?** Start with [`docs/PROJECT_CONTEXT.md`](docs/PROJECT_CONTEXT.md): the full brief, design decisions, step-by-step history, open items and next steps.

## Run it locally

```bash
npm install      # once
npm run dev      # opens http://localhost:5173 — edits show instantly
```

`npm run build` makes the production site in `dist/`. `npm run preview` serves that build.

## Where to change things

**Most edits are text, and all text lives in `src/content/`.** You rarely need to touch anything else.

| I want to… | Edit |
| --- | --- |
| Change the hero line, buttons or fact strip | `src/content/hero.js` |
| Reorder sections, or rename them in the nav | `SECTIONS` in `src/content/site.js` |
| Add GitHub / Medium / resume links | `LINKS` in `src/content/site.js` (resume PDF goes in `public/resume.pdf`) |
| Edit a job or its metrics, or fill Problem/Decision/Outcome | `src/content/experience.js` |
| Add or edit a project (its case-study page is generated) | `src/content/builds.js` |
| Add an essay or link to Medium | `src/content/notes.js` |
| Edit About, principles, career path, skills, portrait | `src/content/about.js` (photo goes in `public/`) |
| Change the three lens questions | `src/content/lenses.js` |
| Change a colour, font or spacing everywhere | `src/styles/tokens.css` |
| Tweak the 3D (particles, positions per section) | `src/engine/config.js` |

Text that starts with `[Draft]` or `[Placeholder]`, or has `placeholder: true`, shows a dashed underline on the site, so you can see what's left to write.

## How the code is organised

```
index.html                 page shell (empty containers, filled by JS)
src/
  main.js                  renders sections in SECTIONS order, wires behaviour
  content/                 ← all words and data
  components/              one file per UI piece (render + behaviour)
    hero.js lenses.js about.js work.js buildLab.js notebook.js contact.js
    nav.js dock.js readout.js cursor.js commandMenu.js toast.js
    sheet/                 project + essay pages (slide-up "sheet")
  engine/                  the 3D Signal Engine (config, shaders, scene)
  lib/                     small helpers: dom, state, motion, router, scroll spy
  styles/
    tokens.css             design tokens (mirror the Figma variables)
    base.css layout.css    globals, section shell, buttons, chips
    components/*.css       one stylesheet per component
public/                    files served as-is (favicon, resume.pdf, images)
```

**Mobile-first:** every stylesheet starts with the phone layout; `@media (min-width: …)` blocks add tablet (640, 900) and desktop (1100) layouts. On phones the nav becomes a bottom dock, the 3D engine shows only in the hero and contact sections, and three.js loads after the text is on screen.

**Accessibility:** a skip link, visible focus rings, ⌘K / Ctrl+K command menu, Esc to close, `aria-expanded` on accordions, 44px touch targets, and `prefers-reduced-motion` plus a Motion On/Off toggle in the footer.

## Publish it

The repo includes `.github/workflows/deploy.yml`, which builds and publishes to **GitHub Pages** on every push to `main`.

1. On GitHub: **Settings → Pages → Source: GitHub Actions** (once).
2. Push to `main`. The site appears at `https://<username>.github.io/<repo>/`.
   The workflow sets the right base path automatically, for that address or a custom domain.
3. Custom domain (e.g. `shreyajha.in`): add it under **Settings → Pages → Custom domain**, then point your DNS at GitHub Pages ([GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)). Moving the domain replaces whatever it currently serves.

Day-to-day: edit in VS Code → check with `npm run dev` → commit → push. The live site updates in about a minute.

## Figma

The design file is **Shreya Jha — Portfolio (Signal Engine)** in Figma (cover, system, screens).
To capture an updated page into Figma, open `http://localhost:5173/?static#figmacapture=…` with a capture ID from the Figma MCP. `?static` freezes motion; add `&view=p-<build-id>` or `&view=n-<note-id>` to capture a detail page.
