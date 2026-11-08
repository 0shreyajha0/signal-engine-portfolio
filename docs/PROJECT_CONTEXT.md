# Project Context & Handoff — Shreya Jha Portfolio ("Signal Engine")

> **Purpose of this file.** Everything a new collaborator (human or a new Claude session/account) needs to continue this project without the original chat: what we're building, every decision and why, what exists where, how it was built step by step, what's still open, and how to pick up.
>
> **Last updated:** 2026-11-08 · **Owner:** Shreya Jha (GitHub: `0shreyajha0`)

---

## 1. Quick start for a new Claude session

Paste this to a new Claude (Claude Code / desktop app), with this repo open:

> I'm continuing my portfolio project. Read `docs/PROJECT_CONTEXT.md` and `README.md` in this repo first — they hold the full context, decisions and open items. Then continue from section 9 ("What's next"). Keep the design system and "Signal Engine" direction as-is unless I ask. Never invent projects, metrics or claims about me; leave unknowns as `[Draft]` placeholders.

Then, in a terminal:

```bash
git clone https://github.com/0shreyajha0/signal-engine-portfolio.git
cd signal-engine-portfolio
npm install
npm run dev        # http://localhost:5173
```

---

## 2. Where everything lives

| Thing | Location | Notes |
| --- | --- | --- |
| **Live site** | https://0shreyajha0.github.io/signal-engine-portfolio/ | GitHub Pages, auto-deploys on every push to `main` |
| **Source code (this repo)** | https://github.com/0shreyajha0/signal-engine-portfolio | Public. Vite + vanilla JS + three.js |
| Local copy (original Mac) | `~/shreya-portfolio/site` | `~/shreya-portfolio/portfolio/index.html` = the first single-file prototype (superseded by this repo) |
| **Figma design file** | https://www.figma.com/design/3PVG2FMpUunzLv6NoOfQJz | "Shreya Jha — Portfolio (Signal Engine)", in Shreya's Figma drafts (team "Shreya Jha's team", Starter plan) |
| Copy deck (Claude Docs) | https://claude.ai/artifact/72xug71KGVPYeWVMDvUQgU | Tied to the original Claude account — **may not open from a new account**. Its approved content is already in `src/content/*` and summarised in §7 below |
| Old portfolio repos (untouched) | `0shreyajha0/Shreya-Portfolio` (2023, Vercel: shreya-portfolio-neon.vercel.app), `0shreyajha0/simple-portfolio-shreyajha-in`, `0shreyajha0/portfolio` | Leave alone unless Shreya asks |
| Real project repo to link later | `0shreyajha0/Noise-Predicting-Model` | The Noise Pollution Predictor build — candidate for its "code" link |
| Domain | `shreyajha.in` | Still points at the **old** site. Not moved yet (needs Shreya's go-ahead + DNS change) |

---

## 3. The brief (summary of Shreya's original request)

Build a premium, highly interactive, **3D-animated personal portfolio** — first as a high-fidelity Figma design, implementable via AI-assisted coding ("vibe coding"). Not a template, not a generic dev portfolio, not a generic AI landing page. The site itself should prove her capabilities.

**Positioning:** B2C Product Manager · Growth Product Manager · AI Product Manager — an *experienced* PM deepening into AI, with an engineering background and the ability to build products herself. Must not read as a fresher or aspiring developer.

**Must communicate:** Product thinking × AI × Technology × Building.

**Requirements (condensed):**
- Personality: professional/sophisticated **and** experimental/futuristic, balanced.
- Colour: understated base, purposeful accents. Avoid purple-blue AI gradients, neon, generic SaaS palettes.
- Typography: distinctive, strong hierarchy, not template-like.
- Composition: art-directed, asymmetric where useful, avoid card-heavy layouts.
- **3D + animation = high priority**: scroll animation, parallax, hover, cursor-responsive elements, animated type, micro-interactions — intentional, one coherent motion language. Minimal clutter, rich behaviour.
- Avoid generic AI visuals (robots, neural-net graphics, floating code, circuit boards).
- Sections: About (personal, credible), Professional experience (storytelling + impact, not a resume dump), **Articles** (publication-quality reading), **Build Projects** (major pillar: AI apps, agents, RAG, automation, experiments; each labelled live/prototype/experiment/concept; demo + full product story).
- Navigation: integrated; contact links (LinkedIn, email, resume, GitHub, demos, articles) **not hidden behind a hamburger**.
- Responsive: desktop showcase, real mobile design (not scaled-down), tablet.
- Performance + accessibility: reduced motion, keyboard, focus, contrast.
- Figma deliverables: direction, all screens, desktop/tablet/mobile, states, motion & 3D specs, type/colour system, components, prototype links.
- **Phase rules from Shreya:** use the resume as background only; do not rewrite her experience or invent projects/metrics/claims; use clear placeholders until the copy phase.

---

## 4. Shreya's background (from her resume — facts only)

- **YesMadam** (at-home beauty & wellness marketplace), Noida — *Product Manager, AI, Growth & Strategy*, Mar 2026 → present (~1 yr)
  - +15% discovery & +12% conversion for premium categories (Laser, Body Toning)
  - +6.5% marketplace ops (service availability, fulfilment, efficiency) balancing demand & professional supply
  - +23% ARPU via cross-sell, recommendations, complementary services
- **Physics Wallah** (EdTech apps & platform), Noida — *Associate PM, Revenue & Growth*, May 2024 → Mar 2026 (~2.5 yrs incl. internship)
  - Retention Prediction Model on behavioural signals → +21% retention
  - API-driven personalisation framework (12 parameters) → +13% conversion, +25% repeat engagement
  - +20% average ARPU via improved flows + cross-sell
  - Plan structure in batch purchase flow (higher-ticket conversion, upgrade understanding)
  - Payment funnel analysis + UX fixes → −33% payment-page drop-off
- **Physics Wallah — PM Intern**, Jan → Apr 2024: QR UPI payment from support-ticket data (−10% drop-off); A/B-tested launches; retention analysis (+5%); automation (−90% error rate, −60% time); in-house part-payment for high-ticket products (+35% booking rate)
- **X2S Technologies**, Gurugram — SDE Intern, Apr → Jul 2023: responsive web UI
- **Education:** B.Tech, Delhi Technological University (DTU), 2024 — Environmental Engineering major, CS minor, GPA 8.0
- **Research/projects:** Noise Pollution Prediction ML model (adopted by DTU); indoor acoustic environment study (ICSTCE 2024); Medium articles on PM, growth, user psychology, experimentation
- **Skills:** product strategy, roadmapping, pricing/monetisation, SQL, Python, Metabase, GA, A/B testing, KPIs/OKRs, AI evals, RAG, AWS Lambda, Figma, Unleash, Plotline, Jira, Git
- **Public contact used on site:** shreyajha.co@gmail.com · linkedin.com/in/shreyajha-co (phone number intentionally NOT used anywhere)

---

## 5. Design direction — "Signal Engine" (approved)

**Concept.** A PM turns raw user signals into decisions. One glass cube (the product) takes a noisy white input stream of particles and emits **three ordered, colour-coded streams** — Consumer, Growth, AI. Those three colours are the *only* accents and tag every piece of content (work rows, builds, essays), so her three strengths read as one practice, not three portfolios.

**Rejected alternatives & why:** dark site with one acid accent (AI cliché); glass prism splitting light (too close to a famous album cover); generic neural-net/particle-brain visuals (brief forbids).

**Colour tokens** (`src/styles/tokens.css` = Figma variables):
| Token | Value | Use |
| --- | --- | --- |
| `--bg` / `--bg-2` / `--bg-3` | #0D0D0C / #151513 / #1D1C1A | ground, raised, overlay |
| `--ink` / `--ink-2` / `--ink-3` | #ECE8E1 / #ABA69D / #8A857D | text primary / secondary / meta |
| `--c` Consumer | #FF8A66 coral | lens accent |
| `--g` Growth | #D3E27A chartreuse | lens accent |
| `--a` AI | #93B7FF glacier blue | lens accent, focus ring |
| `--paper` / `--paper-ink` | #F2EEE7 / #1A1916 | essay reading mode only |

**Type:** Archivo (variable width 62–125 — width animates with cursor & scroll) for display/UI · Newsreader (serif) for editorial voice & reading · JetBrains Mono for metadata.

**Motion system:** one curve `cubic-bezier(.2,.7,0,1)`, three speeds 240 / 520 / 900 ms. Every effect has a reduced-motion state; footer has a Motion On/Off toggle.

**Signature interactions:** hero name letters widen/lighten near the cursor · cursor steers the incoming particle stream and tilts the cube · hovering a lens word/column isolates that stream in 3D · section headings expand width on reveal · metrics count up · impact rows expand into Problem/Decision/Outcome · Build Lab rows show a cursor-following tilted preview · custom cursor with verb labels · magnetic buttons · ⌘K command menu · slide-up detail "sheets" for projects & essays (essays switch to a warm paper reading mode) · bottom-left desktop "readout" (section §, scroll %, IST time).

**Status system for builds:** filled dot = Live · half = Prototype · ring = Experiment · dashed diamond = Concept (shape encodes state, works without colour).

**3D engine (three.js r128 via npm `three@0.128.0`):** camera FOV 32, z=16; glass cube 2.2u with fresnel shader + edges + inner lattice + pulsing core; 1600 particles desktop / 700 mobile; per-section "poses" (x, y, scale, opacity, lane spread) in `src/engine/config.js`. On phones the engine only shows in hero & contact and idles elsewhere. Lazy-loaded after content renders.

---

## 6. How we progressed (step by step)

1. **Figma connected.** Figma MCP (Design plugin) authorised via `/mcp`. Account: Starter plan, **View seat** → MCP read calls capped at **~20/month**; write tools (create file, capture) aren't counted. Because of this we chose: build a live prototype first, then capture it into Figma.
2. **Resume read** (PDF text extracted via macOS PDFKit/JXA) — used only as background.
3. **Direction chosen**: "Signal Engine" (see §5).
4. **Prototype v1** — single file `portfolio/index.html` (HTML/CSS/JS + three.js CDN). Verified in browser at desktop/tablet/mobile; fixed particle visibility, responsive 3D poses, reveal robustness. Shreya approved the direction.
5. **Figma file built** (`3PVG2FMpUunzLv6NoOfQJz`):
   - Captured 6 screens with Figma's html-to-design capture (`?static` freeze mode): Desktop Home 1440, Tablet Home 768, Mobile Home 375, Desktop Project detail, Desktop Essay, Mobile Essay → page **02 · Screens**.
   - Page **01 · System**: variable collection "Signal Engine" (27 vars: colour, spacing, radius, with CSS code syntax), 16 text styles, Foundations board (colour, type specimen, spacing/radius/grid/breakpoints), Components (Button style×state, Filter chip, Build status, Nav link, Impact row — with hover/click prototype reactions), Motion & 3D spec board (tokens, 12-interaction inventory, engine spec, scroll poses, accessibility).
   - Page **00 · Cover**.
   - ⚠️ Figma screens show the **old section order** (Work before About) and old copy; not yet updated.
6. **Copy phase** — created the Claude Docs copy deck (voice & tone, hero, lenses, work P/D/O, build lab, notebook, about, microcopy, open questions). Shreya edited it.
7. **Restructured into this repo** (Vite project, micro files, content separated from code), and in the same pass:
   - **About moved above Work** (order lives in `SECTIONS`, `src/content/site.js`).
   - **Mobile-first rewrite** of all CSS (base = phone; `min-width` 640/900/1100 add layouts). Fixes found: tablets 640–900px had no section nav → added bottom dock for <900px; 44px tap targets; 3D hidden behind reading sections on phones; three.js lazy-loaded (initial JS 143 KB → 16 KB gzipped); hero no longer "flies in" on load.
   - Verified: no horizontal overflow at 375/768/1440, detail pages, Esc, no console errors.
8. **Published.** Installed GitHub CLI (`brew install gh`), Shreya ran `gh auth login`. Name `shreya-portfolio` collided with her 2023 `Shreya-Portfolio` repo (GitHub names are case-insensitive) → chose **`signal-engine-portfolio`**. Created public repo, enabled Pages (workflow build), pushed. Deploy workflow auto-sets Vite `base` path via `actions/configure-pages`.
9. **Copy synced** from the deck into `src/content/*` and deployed. Live site verified.

**Practical gotchas learned:**
- Claude's sandboxed shell can't read the macOS keychain, so `gh`/`git push` must run in Shreya's own Terminal (Claude used the app's Terminal panel). Creating a *public* repo is blocked for Claude by the app's safety check — Shreya ran that command herself.
- The app's "Run" button on code blocks may also be blocked; pasting into a terminal works.
- Figma captures need a full page reload per capture ID (hash-only changes don't reload).

---

## 7. Content status (what's real vs draft)

All site copy lives in `src/content/`. Anything beginning `[Draft]`/`[Placeholder]` or flagged `placeholder: true` renders with a dashed underline.

**Approved & live:** hero (line option A: "Product manager for consumer, growth & AI products, with an engineer's hands."), fact strip (PM — YesMadam, ~1 yr · Physics Wallah, 2.5 yrs · B.Tech, DTU · CS minor), availability badge "Open to PM roles & challenges", Practice intro + three lens questions + proof points, Work rows with Problem/Decision/Outcome where known, About lead + DTU paragraph + 3 principles, contact & microcopy, Build entries "Noise Pollution Predictor" and "This Portfolio".

**Still needed from Shreya (the deck's checklist):**
- [ ] 3–5 real builds — for each: problem & user, opportunity, what was built, 2–3 product decisions + trade-offs, how it works (models/retrieval/tools/data/evals), personal contribution, status + demo link, results/learnings. (Current slots "RAG Assistant", "Workflow Agent", "Experiment Readout Tool" are placeholders.)
- [ ] Medium profile/article links (title, link, date, read time, which to feature). Current 6 essays are placeholders.
- [ ] GitHub profile URL, Medium URL, resume PDF → `public/resume.pdf`
- [ ] About: "why product" story and "why AI now / what team" paragraph
- [ ] Scale numbers for YesMadam & Physics Wallah
- [ ] Missing "before"/decision lines: YesMadam ARPU problem, premium-discovery decision, marketplace-efficiency decision; PW ARPU problem; plan-structure metric
- [ ] Solo vs team for each Work row (affects "I"/"we")
- [ ] Portrait photo (4:5) and confirm DTU start year 2020
- [ ] Noise Pollution Predictor details (inputs, how DTU uses it) + link `Noise-Predicting-Model` repo; decide where the ICSTCE paper goes (Build Lab "Experiment" or About → Research)

---

## 8. Code map (where to change things)

See `README.md` for the full table. Short version:
- Text/data → `src/content/*.js` (hero, lenses, experience, builds, notes, about, contact, site)
- Section order & nav → `SECTIONS` in `src/content/site.js`
- Colours/fonts/spacing → `src/styles/tokens.css`
- One component = `src/components/<name>.js` + `src/styles/components/<name>.css`
- 3D tuning → `src/engine/config.js`
- Deploy → `.github/workflows/deploy.yml` (push to `main` = live in ~1 min)
- Figma capture of a page → `?static#figmacapture=<id>`; detail page → `?static&view=p-<build-id>` or `n-<note-id>`

---

## 9. What's next (prioritised)

1. Fill real builds + articles (biggest gaps; Build Lab and Notebook are the two pillars still mostly placeholder).
2. Add GitHub/Medium/resume links; add portrait.
3. Complete About stories and remaining Work "before"s.
4. Decide on `shreyajha.in`: add custom domain in repo Settings → Pages, then point DNS (replaces the current site).
5. Update Figma: re-capture screens with About above Work and final copy (`generate_figma_design` with `?static`), keep System page in sync with `tokens.css`.
6. Optional polish: OG share image, per-build architecture steps (`page.pipeline` in `builds.js`), essay bodies in reading mode, analytics.

---

## 10. Guardrails for whoever continues

- Never invent projects, metrics, employers' scale or claims. Unknown → `[Draft]` + ask Shreya.
- Don't publish her phone number or anything not already on the site.
- Keep the three-lens colour meaning consistent: coral = Consumer, chartreuse = Growth, blue = AI.
- Keep mobile-first, reduced-motion and 44px tap targets when adding UI.
- Don't touch her old repos or the `shreyajha.in` domain without explicit approval.
