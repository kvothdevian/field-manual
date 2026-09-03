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

## Visuals — trio {svg, term, table}

1. **Fig. 5 — the budget (signature SVG).** Stacked context bar:
   segments sized by token cost, compaction guillotine. Answers:
   "where did my 200k tokens go?"
2. **Annotated terminal.** Before/after audit transcript: what was
   loaded, what got cut, what the summary kept.
3. **Delegation table.** Main-agent vs subagent token spend
   (6,100→420 pattern) + when fan-out pays vs rots.

## Session (4 steps)

1. Audit: run a task, inventory what entered context, price it.
2. Trim: disable a hungry MCP server / slim memory, re-run, compare.
3. Compact: force compaction mid-session, inspect what survived.
4. Delegate: subagent research task, compare token spend + quality.

## Evidence

Ledger ch05 rows (context-rot study, Anthropic context-eng essay,
Cognition anti-fan-out, Claude context-window/compaction/memory/
sub-agents/skills docs, opencode MCP/plugins). Re-verify token
figures (marked illustrative) + compaction semantics live.

## Teach test

Reader audits a real session's context and cuts ≥30% tokens with
no quality loss, demonstrated by re-run. Adversary fails
unmeasured claims ("feels faster" without numbers).
