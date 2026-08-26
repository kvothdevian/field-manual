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

### Added contracts — chapter-home pass (all HTML+CSS only, tokens only,
### both themes via vars, no blue; definitions OWNED by the chapter-home
### agent in book.css — later chapters consume these classes, never redefine)

- **chapnav** — sticky in-chapter jump bar placed directly after
  `chapter-banner`: mono lowercase pill links (ink border, 999px radius,
  ≥38px targets), pills never wrap (`white-space:nowrap` + container
  `overflow-x:auto`), sticks at `top:64px` (108px ≤640px where the site
  header wraps to two rows), z-index 40 (above content, below site-head's
  50), paper bg at 95% opacity via color-mix. No active state (no JS).
  Print: hidden. DO keep labels short and lowercase; DON'T add JS tracking.
- **inside-grid / inside-card** (+ `.ic-l0..l5` set a consumed `--route`) —
  "inside this chapter" landing grid under the banner: 3/2/1 columns at
  900/600px; each card is one `<a>` = numeral chip (`§N`, route-tinted) +
  h3 title + one-line honest summary + meta row (`~N min` label plus an
  optional `lab` badge — dot+label per shape+label law). Hover lift =
  shadow-md translate, killed under reduced-motion; min-height 44px.
  DO derive summaries from the section's real content and badge only
  sections with a live widget; DON'T use cards for anything but section
  links or restyle them per chapter.
- **sec-rule** — main-flow section opener: `<div class="sec-rule"><span
  class="sec-rule-label">§N</span><h2 id="chNN-sN">…</h2></div>` — mono
  overline label + 3rem top margin, deliberately NOT a heavy divider.
  DO skip it on h2s inside boxed `.exercise/.selfcheck/.beyond` (bare id
  there); DON'T color the § label with a route (sections aren't phases).
- **section ids** — every chapter h2 gets `id="chNN-s1", -s2 …`
  (collision-safe for book.html concatenation); CSS gives `h2[id]` a
  scroll-margin that clears both stacked sticky bars (122px / 168px ≤640px).
  Chapnav mirrors the full inside-map: every h2 section gets a pill, with
  `exercises` present among the closers.

### Added contracts — chapter-home pass (all HTML+CSS only, tokens only,
### both themes via vars, no blue, no new motion)

- **chapnav** — sticky in-chapter jump bar of mono lowercase pills (1.5px ink
  ring, radius 999px, paper-raised bg, ≥38px tap targets) on a 95%-paper
  translucent strip with hairline bottom border; overflows horizontally.
  Sticks only ≥1000px (`top: 4.2rem`) where the site-head is a single ~66px
  row; below that it stays in flow. DO one per chapter, right after the
  banner; DON'T hardcode a smaller `top` (half-hides under wrapped head),
  DON'T put non-section links in it.
- **inside-grid / inside-card** (+ `.ic-l0..l5` set consumed `--route`) —
  3-up grid (2 cols ≤900px, 1 col ≤600px) of route-topped link cards:
  display-font bold title link, mono `.ic-meta` row, global `.badge` reuse.
  DO one destination per card; DON'T nest cards/grids; missing variant = ink
  top rule (never claims a phase).
- **sec-rule** (+ `.sec-no`) — dashed section opener, exact usage:
  `<div class="sec-rule"><span class="sec-no">§n</span><h2>…</h2></div>`.
  DO one at each h2 section start; DON'T wrap h3s or put anything besides the
  number span and one h2 inside it.
- **Print** — `.chapnav` and `.inside-grid` are hidden in print (continuous
  reading); sec-rule prints as-is (a dashed rule is structure, not furniture).

## Review log

| Date | What | Why |
|---|---|---|
| 2026-08-26 | Added chapter-home contracts (chapnav, inside-grid/inside-card, sec-rule, section-id scheme) to book.css; applied to ch01–ch04 (ids on every h2, sticky jump bar, landing grid, §-openers on main-flow h2s) | chapter-home pass per Aman — kill endless-scroll feel |
| 2026-08-26 | Tension logged: spec said chapnav ends at a final "exercises" pill, but cards must cover every h2 — resolved by mirroring the full map in the nav (exercises pill present; self-check/beyond pills follow for coverage). Boxed-section h2s get bare ids without §-openers so `.exercise > :first-child` margins stay intact | chapter-home pass — coordination note for later chapters |
| 2026-08-26 | Added 7 component contracts + print block to book.css (chapter-banner, stat-strip, pull-fact, rail, css-icon set, flow-stage-v, part-divider) | visual-density pass per Aman |
| 2026-08-26 | Tension logged: `.flow-stage` hardcodes an `--l0` saffron tint, so `.flow-stage-v` inherits saffron even for non-L0 parts | visual-density pass per Aman — "color routes never decorates" wants per-part tints; existing pages must not change behavior, so parameterizing `--route` is deferred, not done |
| 2026-08-26 | Guardrail noted: oversized banner/stat numerals could drift into decorative type; kept because they encode real data (chapter number, metrics), banner numeral aria-hidden | visual-density pass per Aman |
| 2026-08-26 | `.css-icon-rocket` excluded from the icon set | visual-density pass per Aman — rocket is decorative, not a structural metaphor used in prose ("diagrams are diagrams") |
| 2026-08-26 | Added chapter-home component family (chapnav, inside-grid/inside-card + ic-l0..l5, sec-rule/sec-no) + reduced-motion & print guards to book.css | chapter-home pass per Aman |
| 2026-08-26 | chapnav sticks only ≥1000px: below that the site-head wraps to variable height and any hardcoded `top` risks half-overlap; in-flow fallback chosen over guessy offsets, z-index 40 < head 50 as backstop | chapter-home pass per Aman |
| 2026-08-26 | Stability scan at defs time: 0/16 chapters carried the new classes yet (siblings mid-write); 0 duplicate `chNN-sN` ids in every file; braces balanced; hex confined to token blocks + one pre-existing var() fallback (book.css:229) | chapter-home pass per Aman |

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
