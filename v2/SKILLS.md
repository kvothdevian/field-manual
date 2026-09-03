# v2/SKILLS.md — the three skills this rebuild runs on (P0, DECISIONS #20–23)

Locked 2026-09-03. Every v2 chapter pipeline invokes all three. If a skill
changes, record it here — never silently swap methodology mid-book.

## 1. diagram-design (local: `~/.agents/skills/diagram-design`)

**Job:** every Style-B figure must pass its review checklist before the
chapter closes: title that says what the diagram shows · labeled arrows
(verb phrases) · one question per diagram · ≤15 elements · shape+label
(never color alone) · grayscale-readable.

**Project mapping (HTML-first figure policy, locked 2026-09-03):**
default construction material is HTML/CSS infographics (step rails, stat
strips, timelines, annotated terminals, before/after diffs). Inline SVG
is reserved for custom geometry only (flows with arrows, charts with
axes) — max one signature SVG per chapter. Every visual in either
material passes the checklist: title, labeled relationships, one
question answered. Visual budget per chapter: 1 signature SVG + 2–4
HTML infographics in ≥3 different forms (each brief names its trio; no
chapter repeats another chapter's exact trio).

- Palette: ink `#26201A`, accent `#B25E09`, go `#1F7A52`, stop `#B03A2A`
  on paper `#FAF5EA` (dark theme: lifted tokens, same roles).
- Every figure = `<figure>` + `<svg role="img" aria-label="…">` +
  `<figcaption>` starting `Fig. N —`.
- Motion only via SMIL/CSS that `prefers-reduced-motion` kills.

## 2. monograph-writing (skills.sh: `newdeme/monograph-writing`, Apache-2.0)

**Job:** the batch pipeline. Adopted rules (adapted from academic
monograph to HTML field manual):

- **Ledger is state.** Progress, conventions, verified references live in
  `v2/STATUS.md` + `v2/registry.jsonl` on disk — never only in chat.
- **Batch = 1 chapter.** `validate-v2.mjs` must report zero errors
  before a batch closes. WARNs get logged with reasons or fixed.
- **Academic red lines:** no fabricated commands/data/URLs · cite only
  the approved corpus (`docs/source-ledger.md` + live-fetched opencode
  docs recorded in the brief) · missing evidence is marked
  `needs-verification`, never smoothed over.
- **Batch closeout (all four):** validator clean → ledger updated →
  report (files, validation, next) → claims↔tool-receipts self-check.
- **Frozen brief:** the approved `v2/briefs/chNN-brief.md` is the
  chapter's contract; scope changes need Aman's explicit approval.

## 3. frontend-design (local skill family, anthropics pattern)

**Job:** Style-B component discipline across 16 chapters built weeks
apart. One signature per page (the figure), everything else quiet.
Type carries personality (serif display / humanist body / mono data).
Copy is interface copy: active voice, controls named by outcome
("copy", not "submit"). Failure states give direction (`stuck` boxes
say what to run next). Quality floor without announcement: mobile,
keyboard focus, reduced motion.
