# Brief ch12 — "Pipelines that prevent bloat" (the doorway, not willpower)

Status: PROPOSED — batch approval with ch13–ch16. Frozen on approval.

## Outcome promise

Seed bloat into a scratch repo, watch your own gate fail red naming
the gate, remove the bloat, watch it pass green — then name which
gate you'd buy first and write one quiet-season sentence.

## Coverage dimensions (matrix-bound)

Binary local gates (●) · correctness/hygiene/size trio (●) ·
doorway vs calendar (●) · honest quiet seasons (●) · bypass habits
+ uncapped autonomy (●).

## Venue

Scratch repo `gate-lab/` (`app.js` + `check.js`, preexisting node
only, zero installs). Executed: agent builds the 3-gate pipeline,
reader seeds bloat (dup helper + console.log + comment blob),
watches red (exit ≠ 0, gate named), removes, watches green — both
runs from reader keystrokes. v1 bloat-incubator widget preserved as
the calendar lesson (bare vs full net, quiet weeks labeled).

## Briefing (≤500w + one small decision table that counts)

Stakes (rot is default; agents copy drift forward as fact) → gate
defined (automatic · binary exit code · fast) → three local gates
cheapest-first (correctness: never-ran code; hygiene: debris scan;
size: byte budget) → calendar vs doorway (doorway judges a change,
calendar judges time; quiet seasons: net costs more than it catches
some six weeks, judged over the long run) → breaks-down (unread
gates train bypass; uncapped autonomy burns budget; no gate judges
taste; accountability stays human).

## Visuals — quintet {svg, timeline, stat-strip, rail, table} (table = the briefing decision table that counts; set distinct from ch06's quad)

1. **Fig. 12 — the doorway (signature SVG).** branch → PR → three
   gates → merge/blocked; side lane weekly sweep. Answers: "where
   does a change stop, and what stops time-rot?"
2. **Red→green timeline.** Step-2 red → step-3 green, reader
   keystroke under each node. Doubles as steps-2/3 expectation.
3. **Gate stat-strip.** Three gates × catches / fail signal / cost;
   strip labels illustrative, never measured claims.
4. **Doorway-vs-calendar rails.** Merge-gate lane vs clock lane:
   which fires at merge, which needs a clock.

## Session (4 steps)

1. Build the gate: agent writes check.js only; reader runs, exit 0.
2. Seed bloat, watch red: reader pastes bloat; exit ≠ 0, gate named.
3. Pass through the doorway: remove bloat; green, bytes back under.
4. Calendar lesson: incubator twice (bare vs full net); quiet-season
   sentence; name the first gate to buy (build/test).

## Evidence

Ledger ch12 rows (workflow-syntax exit-code framing; keep ≤3
bot/calendar rows only if the where-it-grows paragraph survives).
Re-fetch: claude-code-action security/solutions URL-FORM rows (bare
rows are validator-invisible); github-actions/claude-action/codex
claims only if cited (drop star/version numbers or re-fetch live).
New rows: none expected (node --test semantics only if stated as
fact; size/lint gates are own-execution, authored-labeled).

## Teach test

Both runs captured from reader keystrokes; failing gate named.
Adversary fails any draft with green-without-prior-red on the same
gate, or authored transcripts presented as agent output.
