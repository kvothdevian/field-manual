# Brief ch01 — "Your first agent session" (Style-B pilot)

Status: PROPOSED — needs Aman's approval before any prose is drafted.
Frozen on approval; scope changes after that need explicit sign-off.

## Outcome promise (lede, ≤40 words)

Run a real opencode session in a scratch repo and end with one reviewed,
verified change you fully understand — plus a reusable stopping condition
for every session after.

## Venue

Scratch repo `agent-first-run` (mkdir, `hello.js`, `git init`). Nothing
else installed besides opencode. Reproducible from zero in 45 minutes.

## Briefing (≤400 words, tool-agnostic first)

Model / harness / loop in three short moves, condensed from v1 ch01.
Ends on the outer loop you own: aim → watch → verify → commit.

## Visuals (budget: 1 signature SVG + HTML infographics in ≥3 forms)

Trio for ch01 (no later chapter may repeat this exact trio):

1. **Fig. 1 — the wheel (signature SVG).** Agent-loop diagram: model →
   harness → stopping gate → loop-back, animated dash on the return
   edge. Answers: "what turns, and what stops it?"
2. **Annotated terminal (HTML `.term`).** The session's expected
   transcript with per-line roles (thought / tool / observed) —
   doubles as the step-2 expectation.
3. **Stat strip (HTML `.stat-strip`).** The honesty anchor: predicted
   +24% / believed +20% / measured −19% (METR trial, re-verified at
   evidence packing or cut).
4. **Diff view (HTML `.diff`).** Step-3 expectation: +7/−0, one file.

Forms used: svg + term + stat-strip + diff (4 forms ≥ 3 required).

## Session (4 steps)

1. **Scratch repo** — paste: mkdir/init/hello.js · expect: `ls` shows 1
   file · verify: exact file list.
2. **First prompt** — paste-block (opencode default; variant line for
   Claude Code/Codex/Gemini if commands differ) · expect: transcript
   read → edit → run-proof → halt · stuck: extra files touched →
   `git checkout .`, re-send with final constraint standalone.
3. **Read the diff** — diff view (+7/−0, one file) · verify: explain
   every line; `git diff --stat` = 1 file.
4. **Run the proof yourself** — your keystrokes, not the agent's ·
   verify: output matches.

Checkpoint: 3 persisted checkboxes (ran proof myself · 1-file diff
explained · wrote a reusable stopping condition).

## Evidence packet (closed world for the writer)

- v1 `chapters/ch01/index.html` (theory source, to condense — not copy).
- Ledger rows: ch01 table (agent=LLM+tools+loop definition, harness
  wrapping, workflows-vs-agents, kitchen-sink/trust-gap/wander failures,
  METR speed trial as honesty anchor). New facts → new ledger rows first.
- Live-fetch in P1 and record here: opencode quickstart (install +
  first-run commands as of 2026-09). Session transcript will be pasted
  from a REAL executed run, never generated.
- Freshness re-verification at evidence packing: METR trial numbers
  (stat strip lives or dies here), opencode install path, Node version
  floor for the proof. Stamped "verified 2026-09-XX" in-chapter.

## Teach test (adversary enforces this)

After ch01 the reader runs solo sessions with written stopping
conditions and self-run proofs. If the draft doesn't produce that
behavior, it fails — however pretty the figures are.

## Budgets

Prose 1500–2000 words · briefing ≤400 · figures 2 · receipts ≤8,
rendered from ledger rows only.

## Whole-book notes (registry seeds)

Locks `term.stopping-condition` and `conv.prompt-default` wording for
all later chapters. ch02 will assume the reader has completed this
checkpoint.
