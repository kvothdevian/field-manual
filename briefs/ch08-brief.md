# Brief ch08 — "Good UI with agents" (constrain, then measure)

Status: PROPOSED — batch approval with ch07/ch09–ch11. Frozen on approval.

## Outcome promise

Commission UI with written constraints (tokens + acceptance
criteria) and judge it by computed numbers — never by "looks fine."

## Coverage dimensions (matrix-bound)

Token sheets (●) · component contracts (●) · a11y floor as
arithmetic (●) · bounded screenshot loop + stop rules (●) · where
constraints break (●).

## Venue

Scratch repo `ui-loop-lab` (`tokens.json` + `index.html` +
optional `notes.md`). Executed: unconstrained baseline shipped,
token-constrained rebuild, contrast math recomputed by reader's own
keystrokes, one bounded visual loop with pre-written halt rule.
Browser-MCP capture reader-run optional, never required. Book-only:
`grep`, `node -e`, reader's browser resize/tab only.

## Briefing (≤500w)

Median problem (unconstrained generation regresses to training-data
median; Willison inverse: agents follow codebase patterns — supply
patterns or the median ships) → three constraint layers (tokens:
named values make off-palette unwritable; component contracts: make
the compliant path the path of least resistance; a11y floor as
arithmetic: 4.5:1/3:1/7:1, shape+label, target floor, visible
focus) → bounded screenshot loop (Anthropic prescription + warning:
loops without acceptance criteria polish forever; stop rules named
up front) → breaks-down: constraints scale identity, don't
originate it; systems ossify; tokens drift (book's own muted-token
confession as the discipline-of-noticing example).

## Visuals — trio +1 {svg, rail, before/after pair} (+ term)

1. **Fig. 8 — the constraint stack (signature SVG).** Tokens →
   contracts → a11y gate; vibes bounce off, judged UI exits.
   Answers: "what constrains what, in which order?"
2. **Acceptance rail.** Four halt criteria as checkable items
   (pairs ≥4.5:1 · zero literals · 360px survives · focus visible).
3. **Before/after rebuild pair.** Same card unconstrained vs
   token-sheet, six changed decisions called out.
4. *(earned 4th)* **Annotated loop terminal.** One bounded
   screenshot-compare cycle, authored-example labeled.

## Session (4 steps)

1. Ship the median: unconstrained quiz card, hand-measure one
   failing pair.
2. Constrain it: rebuild under tokens.json; `grep -n '#'` clean
   outside the token block; glyph+word feedback; ≥44px targets.
3. Measure it: agent reports every pair's luminance math; reader
   recomputes one ratio with `node -e`; fix the token, not the
   component.
4. Loop with eyes, bounded: written stop rule first, ≤2 fix cycles,
   halt statement; reader verifies 360px + keyboard-only tab.

## Evidence

Ledger ch08 rows (Willison summit, Ciechanowski moon, Design Tokens
TR w/ CG-draft caveat, WCAG22 quickref, Claude best-practices loop
wording, shadcn, Tailwind version, chrome-devtools-mcp stars,
playwright-mcp tradeoff). New rows: relative-luminance formula +
0.03928 threshold; contrast-minimum (4.5:1/3:1 + large-text def);
use-of-color (shape+label); target-size-minimum (24px floor behind
book's 38/44px); focus-visible; animation-from-interactions
(reduced-motion). Re-verify: namespace versions (Tailwind),
star counts ("at checking time" phrasing), loop wording.

## Teach test

Reader passes/rejects agent UI with computed numbers from their
own keystrokes. Adversary fails any draft where UI is accepted on
taste, or a screenshot loop runs without a written stop rule.
