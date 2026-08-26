# DESIGN.md — binding visual system (vendored)

> This book was born inside `C:\Users\Aman\Projects\journey` whose `design.md`
> is the brand's origin of truth. That file remains authoritative for the
> journey site; THIS file is the binding copy for this repo so the book is
> standalone. If journey/design.md changes, reconcile deliberately.

## Identity

Paper & Ink atlas: ink structure on warm paper, saturated route colors marking
lines/phases, boxed flows for how things work. Voice: honest, first-person,
progress-over-polish. No hype.

## Principles

1. Paper first — light warm surfaces; ink carries structure, not fills.
2. Color routes, never decorates — saturated colors mark parts/phases, they are information.
3. Shape + label over color alone (~8% of men colorblind; grayscale must work).
4. Diagrams are diagrams — boxes, arrows, containers carry meaning; no cosplay in nav/copy.
5. Zero blue. No blue hues anywhere in any state.

## Tokens

### Light theme (default)

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F6F1E7` | page background |
| `--paper-raised` | `#FFFDF7` | cards, receipts |
| `--ink` | `#201B14` | text, borders, primary buttons |
| `--muted` | `#5F5648` | secondary text (AA on paper) |
| `--line` | `#E4DAC8` | hairline dividers |
| `--line-strong` | `#CBBFA9` | dashed rules, ghost borders |

Route palette (= part colors): L0 saffron `#E8890C` · L1 coral `#D9573F` ·
L2 olive `#7A8C3F` · L3 jade `#1F9D6E` · L4 plum `#8E5BA6` · L5 rose `#C2455A`.

Status mapping: shipped = jade · drafting/in-progress = saffron ·
review/blocked = coral · planned/archived = muted.

### Dark theme (derived, first-class)

| Token | Value |
|---|---|
| `--paper` | `#191512` |
| `--paper-raised` | `#221C16` |
| `--ink` | `#EDE6D8` |
| `--muted` | `#A89B87` |
| `--line` | `#352E26` |
| `--line-strong` | `#4A4136` |

Dark routes (lifted for contrast): L0 `#F0971A` · L1 `#E06A54` · L2 `#96AA52`
· L3 `#2BB47F` · L4 `#A878BE` · L5 `#D66A7C`.
Shadows switch to black-alpha (`rgba(0,0,0,.35–.6)`) — ink-based shadows are
invisible on dark surfaces.

## Typography (system stacks only, no webfont CDN)

Display Archivo 800–900 (`font-stretch:110%`, tracking −0.01em) · Body
Instrument Sans 400–600 · Labels/data JetBrains Mono 400/700. Scale: h1
clamp(2rem→2.9rem), h2 1.35rem, h3 1.12rem, body 16.5px/1.65, mono-small
0.72–0.85rem. Devanagari अ always wrapped in `.deva`.

## Space & shape

Radius: 999px pills · 12–14px cards · 8–10px buttons/steps. Spacing on a 4px
rhythm; section gap 3rem; card padding ~1.15–1.4rem.
Elevation (offset-print style): sm `3px 3px 0 line-strong` (rest) · md
`5px 5px 0 rgba(ink,.9)` (hover) · lg `6px 6px 0 rgba(ink,.12)` (shells).

## Components used by the book

part-plate (L-color mono badge) · toc-row with part left border · badge status
pills (shape+label, never color alone) · chip · btn/btn-primary (one primary
per view) · receipt card with tier badge T1/T2/T3 · callouts tip/warning/
grey-zone-risk · exercise / selfcheck / beyond blocks · flow-stage diagram ·
progress board columns.

### Added contracts — visual-density pass (all HTML+CSS only, tokens only,
### both themes via vars, no motion added so reduced-motion is safe)

- **chapter-banner** (+ `.banner-l0..l5` set a consumed `--route`) — chapter
  lockup: huge outlined numeral (text-stroke route tint + layered offset
  shadow, @supports fallback = flat low-alpha fill), part-plate, title, 6px
  left route rule. DO mark `.banner-num` aria-hidden and keep the real title
  in an h1; DON'T tint the title text or use for non-chapter headers; missing
  variant falls back to muted (never claims a phase).
- **stat-strip / .stat** — inline flex row of big JetBrains Mono figures with
  uppercase caps labels; dividers are `border-left` on siblings (stacks to
  border-top ≤640px). DO put units in the label, not the number; DON'T color
  numbers by status or by route — figures stay ink.
- **pull-fact** (+ optional `.pf-l0..l5` accent) — key takeaway: 3px ink
  frame, paper-raised bg, lg print shadow, oversized em-dash pseudo-element.
  DO one per section max; DON'T nest boxes inside it or swap the dash for
  emoji; accent variants only widen/recolor the left border (work-card rule).
- **rail** — vertical timeline: dotted `--line-strong` spine (`ul::before`),
  node dots as `li::before` circles (ink ring, paper-raised fill masks the
  spine). DO pair every dot with a text label (shape+label); DON'T recolor
  dots to encode status without a label, DON'T number nodes.
- **css-icon-loop / -shield / -gate / -stack / -bug** — 1em pure-CSS
  pictograms from borders/pseudo-elements/box-shadows, always `currentColor`.
  Structural metaphors already present in prose ONLY. DON'T add new beasts
  (`.css-icon-rocket` explicitly rejected as decorative), DON'T paint them in
  route colors, DON'T scale past ~1.4em.
- **flow-stage-v** — vertical flow-stage variant: chains stack and arrows
  rotate ↓ at any viewport. DO use for long hand-off sequences; DON'T mix
  horizontal and vertical chains within one stage boundary.
- **part-divider** (+ `.pd-l0..l5`) — full-column band between major
  sections: route color at 8% alpha bg (color-mix over paper) + matching 2.5px
  bottom border + centered mono uppercase label. DO let the label carry the
  meaning; DON'T use as navigation or sprinkle tints on body sections.
- **Print safety** — banner/stat/pull/divider/rail drop backgrounds and
  shadows to borders + text in `@media print`; banner numeral prints as solid
  route text (stroke off). Rail dots keep their paper fill (they mask the
  spine — structural, not decorative).

## Review log

| Date | What | Why |
|---|---|---|
| 2026-08-26 | Added 7 component contracts + print block to book.css (chapter-banner, stat-strip, pull-fact, rail, css-icon set, flow-stage-v, part-divider) | visual-density pass per Aman |
| 2026-08-26 | Tension logged: `.flow-stage` hardcodes an `--l0` saffron tint, so `.flow-stage-v` inherits saffron even for non-L0 parts | visual-density pass per Aman — "color routes never decorates" wants per-part tints; existing pages must not change behavior, so parameterizing `--route` is deferred, not done |
| 2026-08-26 | Guardrail noted: oversized banner/stat numerals could drift into decorative type; kept because they encode real data (chapter number, metrics), banner numeral aria-hidden | visual-density pass per Aman |
| 2026-08-26 | `.css-icon-rocket` excluded from the icon set | visual-density pass per Aman — rocket is decorative, not a structural metaphor used in prose ("diagrams are diagrams") |

## Do / Don't

DO: semantic HTML · visible `:focus-visible` outlines (3px ink) · tap targets
≥38px · `prefers-reduced-motion` kills transforms · mobile ≤640px single-column.

DON'T: blue anything · centered-text walls · more than one primary CTA per
view · raw machine slugs in UI · decorative absolute elements without z-index.

## Diagram grammar

Tinted stage containers (route color ~8% alpha + matching border) holding
horizontal chains of boxed steps connected by plain →. Stage label inside its
container, bottom-center. Boundaries connect via one vertical arrow through a
saffron pivot node naming the hand-off. Numbers on steps forbidden. Mobile:
chains stack, arrows rotate ↓.
