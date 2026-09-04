# Brief ch09 — "Testing what agents build" (no red, no belief)

Status: PROPOSED — batch approval with ch07–ch08/ch10–ch11. Frozen on approval.

## Outcome promise

Never accept an agent-written green suite without a confirmed red
first — and state, for any test, what change would turn it red.

## Coverage dimensions (matrix-bound)

Red-green order as instrument (●) · tautology trap (●) ·
command+output evidence mandate (●) · browser traces (●) ·
evals-lite (●) · conformance suite (●).

## Venue

Scratch repo `verify-lab` (`divide.js` + `divide.test.js`, plain
Node, `node --test`, zero installs). Executed: spec-held red-first
run (reader watches it fail), green, then the trap sprung on
purpose (test-after-code enshrines a seeded defect — suite stays
green while wrong). Trace/evals as reader-run bridge, docs-only
labeled where tools absent. Book-only.

## Briefing (≤500w)

Hook: ship a function with proof (a failure you watched fail, then
pass) → order is the instrument (test-first = specification,
test-after = biography; tests learned from code agree with code) →
"It passed" is a claim, command+output is a fact (standing rule:
show me the command and its output) → same habit two more venues
(UI: per-action trace evidence reviewable without reading code;
fuzzy: evals-lite task+grader, five graded examples beat vibes,
read transcripts not aggregates; conformance-suite trick in one
line) → breaks-down: suites rot, specs have blind spots tests
inherit, fuzzy resists booleans (that's what graders are for).

## Visuals — quad {svg, term, rail, diff}

1. **Fig. 9 — the order (signature SVG).** Two rails:
   spec→test→code (defect dies) vs code→test (defect ships).
   Answers: "why does the same defect die on one track and ship on
   the other?"
2. **Red-green annotated terminal.** Verbatim `node --test` red →
   green, per-line roles. Doubles as steps 1–2 expectation.
3. **Evidence rail.** Trace's 4 per-action types as checkables +
   "what change would make this turn red?"
4. **Tautology diff.** Spec-true vs code-true assertions
   side-by-side, passing-while-wrong line flagged shape+label.

## Session (4 steps)

1. Spec + red-first: agent writes tests from the held spec only;
   reader runs `node --test`, captures the red.
2. Green: agent implements; reader re-runs with own keystrokes;
   outputs must match.
3. Spring the trap: agent tests a defective copy from the code;
   suite passes-while-wrong; reader mutates code → still green =
   proof of decoration.
4. Evidence gate (reader-run): name the 4 trace evidence types;
   save the never-"done"-without-output mandate line.

## Evidence

Ledger ch09 rows (playwright-cli/MCP/trace-viewer trio,
BetterStack digits fenced single-measurement, Anthropic evals-lite,
Willison summit tests-free + exercise-evidence split, conformance
trick, chrome-devtools-mcp perf). New rows: arXiv 2607.12068
keystone (confirm version/numbers live, PREPRINT label); codewithseb
tautology URL-form; Willison red-green URL-form. Drop testcollab T3
as fact (corroboration-only at most). Re-verify the CLI/MCP/trace
trio first (fastest churn).

## Teach test

Session produces a captured failing run + ≥1 caught
tautological/untested test. Adversary fails any draft whose session
lacks a confirmed red. "It passed" without prior red = fail.
