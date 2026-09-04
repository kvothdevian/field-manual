# Brief ch05 — "Context engineering" (the finite budget)

Status: PROPOSED — batch approval with ch03, ch04, ch06. Frozen on approval.

## Outcome promise

Audit what enters your agent's context, watch compaction happen,
and delegate to a subagent — then feel a long session stay sharp
instead of rotting.

## Coverage dimensions (matrix-bound)

Context management & compaction (●) · memory across sessions (●) ·
context rot + token discipline (●) · multi-agent/subagents (◐,
full in ch06) · skills progressive disclosure (shared w/ ch04).

## Venue

Scratch repo `context-lab` + opencode session inspection
(transcript/token readout, /compact-style flow, subagent
delegation). Executed: context audit before/after, compaction run,
subagent delegated research with token comparison where the harness
exposes counts; ledger-backed where it doesn't.

## Briefing (≤500w)

Context = finite attention budget: smallest high-signal set wins.
What enters (system prompt, memory, skill descriptions, deferred MCP
schemas, file reads) with token costs; what survives compaction;
context rot (18-LLM degradation evidence, distractors compound);
the three long-horizon levers (compaction, structured notes,
sub-agent architectures) + the canonical counterpoint (naive fan-out
fragility — Cognition).

## Visuals — trio {svg, stat-strip, term} + table (built set; distinct from all shipped chapters)

1. **Fig. 5 — the budget (signature SVG).** Stacked context bar:
   segments sized by token cost, compaction guillotine. Answers:
   "where did my 200k tokens go?"
2. **Stats stat-strip.** Live `opencode stats` readout (sessions /
   messages / cost / median vs average) — the skew made visible.
3. **A/B + delegation + trim terminals.** Verbatim proof pairs,
   ZEBRA-7 obedience, Explore self-pricing, trim re-run.
4. **Lever table** (audit/trim/compact/notes/subagents × measured /
   pays / rots) incl. docs' 6,100→420 isolation figure.

## Session (5 steps)

1. Audit: run a task, inventory what entered context, price it
   (+`opencode stats` baseline, session-list fallback).
2. A/B bloat: slim vs junk-stuffed memory, same task — log
   behavioral deltas with causality fenced; void contaminated runs.
3. Trim: cut memory ≥30% (1,122B→100B demonstrated), re-run proof —
   the teach-test behavior, executed.
4. Delegate: subagent research task, compare token spend + quality
   (6–8x overhead measured here; docs' 6,100→420 where it pays).
5. Compact: reader-run /compact in TUI, grade survive/die bar.

## Evidence

Ledger ch05 rows (context-rot study, Anthropic context-eng essay,
Cognition anti-fan-out, Claude context-window/compaction/memory/
sub-agents/skills docs, opencode MCP/plugins). Re-verify token
figures (marked illustrative) + compaction semantics live.

## Teach test

Reader audits a real session's context and cuts ≥30% tokens with
no quality loss, demonstrated by re-run. Adversary fails
unmeasured claims ("feels faster" without numbers).
