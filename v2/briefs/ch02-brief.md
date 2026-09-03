# Brief ch02 — "The harness landscape" (compare, don't collect)

Status: PROPOSED — needs Aman's approval before any prose is drafted.
Frozen on approval; scope changes after that need explicit sign-off.

## Outcome promise (lede, ≤40 words)

Pick the right harness for a task on evidence, not hype: run one fixed
task on every harness you can auth, score all four on the same card,
and know exactly what each one costs you at $0.

## Venue + honesty constraint

Scratch repo `harness-derby` (one buggy file + one test file, refactored
from the ch01 scratch pattern). The fixed task: "make the failing test
pass without touching any other file" — same shape as ch01, so results
are comparable across harnesses.
Environment honesty: only harnesses authenticatable here get executed
runs (opencode confirmed; others attempted at evidence packing and
documented as executed-or-ledger-backed). Unrunnable harnesses are
compared from ledger rows + reader-run scorecard — never fabricated.

## Briefing (≤500 words, tool-agnostic first)

What varies between harnesses and what doesn't: the loop is identical,
the differences that matter are tools exposed, approval defaults,
context survival between sessions, and price of entry. Condensed from
v1 ch02 + Appendix A table.

## Visuals (budget: 1 signature SVG + HTML infographics in ≥3 forms)

Trio for ch02 (differs as a set from ch01's {svg, term, stat-strip, diff}):

1. **Fig. 2 — the gate (signature SVG).** Permission-gate flow diagram:
   proposed act → gate (allow/ask/deny) → executed or blocked. Answers:
   "where does each harness put the human back in the loop?"
2. **Comparison table (HTML table).** opencode / Claude Code / Codex CLI
   / Gemini CLI × license, $0 path, approval model, context survival —
   rendered from Appendix A ledger rows, re-verified at packing.
3. **Derby timeline (HTML `.timeline`).** The fixed task run-by-run:
   which harness finished, what its diff looked like, where it stumbled.

## Session (4–5 steps, 2200–3200 words total chapter)

1. **Build the derby repo** — paste: two files, one failing test.
2. **Run it on opencode** (executed here) — paste the fixed task prompt.
3. **Run it elsewhere** — same prompt on every harness the reader can
   auth; scorecard with cost/latency/diff-quality columns.
4. **Read the diffs side by side** — what "same task" hides: default
   verbosity, file discipline, proof habits.
5. **Pick your default** — decision rule written down, not vibes.

Checkpoint: 3 proofs (ran the derby on ≥2 harnesses · filled the
scorecard · wrote a default-harness rule).

## Evidence packet (closed world)

- v1 `chapters/ch02/index.html` + Appendix A per-harness table
  (ledger rows 71–82, 88–97).
- Live re-verification at packing (as-of 2026-08-25 rows go stale
  fastest here): opencode providers page, Codex/Gemini repos, Claude
  Code overview. Changed facts → new ledger rows first.
- Execution log from every harness actually run; ledger-backed notes
  for the rest, labeled as such.

## Freshness targets

Gemini free-tier numbers (60rpm/1000day), Codex sign-in paths, Claude
Code surfaces/pricing, opencode "75+ providers" claim, Roo Code
archived status (do not present as live).

## Teach test

After ch02 the reader chooses harnesses by scorecard instead of hype,
and can state what their default harness costs at $0. Adversary fails
any draft that recommends without the reader's own derby data.
