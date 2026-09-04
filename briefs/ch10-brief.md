# Brief ch10 — "Debugging when it breaks" (two misses, then the hatch)

Status: PROPOSED — batch approval with ch07–ch09/ch11. Frozen on approval.

## Outcome promise

When the agent's second consecutive fix misses, stop the run —
repro recipe + failing test committed, revert to last-good, restart
fresh with the exact error text first.

## Coverage dimensions (matrix-bound)

Repro→oracle chain (●) · bisect halving (●) · hatch discipline
(●) · one-log/fast-loop (●) · evidence bar for "fixed" (●) ·
packaged debugging procedure (●).

## Venue

Scratch repo `debug-lab` (git init, ~8 seeded commits,
`totals.js` seeded promo-order bug + `check.js` exit-code oracle).
Executed: read-only repro capture, failing-test oracle, bisect with
exit-code verdicts (~3 midpoints, first-bad named), deliberate
two-miss thrash then hatch pulled (revert + error-first restart).
Optional 5th step (stack autopsy) only on word shortfall.
Book-only: preexisting node/git only.

## Briefing (≤500w + one small decision table that counts)

Stakes (the sixty seconds after a break decide the evening) →
repro before theory (recipe = input + command + expected-vs-actual;
encode as failing test; fix roots, suppression moves the bomb) →
halve don't walk (midpoint + scriptable verdicts; ⌈log₂8⌉=3 vs
linear; breaks-down: no oracle / no ordered history /
nondeterministic verdicts → pin the repro first) → hatches
(rewind, error-first restart after two misses, self-installed
iteration caps; one log file, fast loud loop, abort degraded
sessions) → evidence bar + opencode landing (green test + pasted
output; packaged procedure beats improvised discipline; opencode
exits re-verified live, stamped).

## Visuals — trio {svg, term, diff}

1. **Fig. 10 — the loop with exits (signature SVG).** Fix-attempt
   loop → correction counter → gate at 2 → four hatch exits.
   Answers: "am I debugging or thrashing, which exit is cheapest?"
2. **Bisect terminal.** Verbatim `git bisect run` transcript:
   midpoints, exit-code verdicts, first-bad named. Doubles as
   step-3 expectation.
3. **Diff view.** Speculative stack (+200/−190, bug alive) vs
   repro-pinned fix (+6/−2, green). Answers: "what does stopping
   at two save me?"

## Session (4 steps)

1. Capture the repro (read-only, no agent edits): recipe written,
   error quoted verbatim, reader re-runs exit ≠ 0.
2. Demand the oracle: failing assertion in check.js only;
   `git diff --stat` = 1 file, test only.
3. Bisect with the oracle: verdicts from exit codes only, ~3
   midpoints, first-bad named + hand-verified, `bisect reset`.
4. Thrash then hatch: weak prompt, two misses logged, revert,
   fresh session opened error-first.

## Evidence

Ledger ch10 rows (Ronacher one-log/abort, Willison evidence bar,
Tianpan craft synthesis w/ caveat, git-bisect docs version,
Claude best-practices hatches — highest churn, trace-viewer +
devtools-mcp conditional on step 5, superpowers skill path).
New rows: opencode session exits (fork/resume/undo/fresh —
paste-block needs a receipt); `git bisect run` exit-code contract
(0/125/other); opencode hook/cap mechanism if a cap is installed.
Re-verify Claude hatch claims + git version live; cut-or-label any
unverifiable row.

## Teach test

Artifacts show correction count hit 2, a committed repro/failing
test, and a stopped or restarted run. Adversary fails any draft
where the reader fixes via a third same-thread correction.
