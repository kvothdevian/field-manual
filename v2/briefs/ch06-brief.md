# Brief ch06 — "Patterns that ship" (simplest sufficient wins)

Status: PROPOSED — batch approval with ch03–ch05. Frozen on approval.

## Outcome promise

Name the five workflow patterns, pick the simplest one that fits —
and run a gauntlet loop (builder vs critic) on real work of your own.

## Coverage dimensions (matrix-bound)

Prompting patterns loops/fan-out (●) · evaluator/critic gauntlets (●) ·
TDD & test strategy (●) · plan-first/spec-driven (●) · multi-agent
orchestration & subagents (●) · evals before iteration (●) ·
Reflexion with expiry date (◐).

## Venue

Scratch repo `pattern-lab`. Executed: same fixed task three ways
(direct prompt vs plan-first vs evaluator loop), red-green TDD run,
gauntlet loop on a real artifact. Spec Kit docs from local inspection
if installed, else ledger-backed + reader-run.

## Briefing (≤500w)

Baseline (one direct prompt) + Anthropic's five (chaining, routing,
parallelization, orchestrator-workers, evaluator-optimizer) with
buy-only-with-a-reason pricing. Spec-driven pipeline (constitution →
specify → plan → tasks). Tests as steering (red-green, tautology
trap). Evals ladder (align judge on 25–50 labels). Reflexion habit
with expired digits. The gauntlet (this book's engine, honestly
labeled unvalidated craft).

## Visuals — trio {svg, timeline, stat-strip}

1. **Fig. 6 — the picker (signature SVG).** Decision flow: task
   shape → simplest sufficient pattern. Answers: "which shape for
   THIS task?"
2. **Pattern timeline.** Same task three ways: tokens, latency,
   diff quality per pattern.
3. **Gauntlet stat strip.** Builder→critic rounds on the real
   artifact: verdicts per round until blind win (or human stop).

## Session (5 steps)

1. Direct: fixed task, one prompt, log cost/diff.
2. Plan-first: same task via plan mode, compare.
3. Evaluator: builder draft + critic pass, compare all three.
4. TDD: red-green run on a new function, confirmed failure first.
5. Gauntlet: reader's own artifact through builder/critic, binary
   verdict, biggest gap fixed.

## Evidence

Ledger ch06 rows (Anthropic taxonomy, Spec Kit + origin + deep-dive,
Reflexion, red-green TDD, tautology paper, Hamel evals, plan-first
mechanics, Cognition counterpoint). Re-verify Spec Kit command
names (changed before) + red-green guide live.

## Teach test

Reader selects patterns by measurement log, not taste — three
logged runs on one task. Adversary fails any pattern recommended
without a logged comparison.
