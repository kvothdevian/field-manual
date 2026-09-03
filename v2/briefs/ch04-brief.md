# Brief ch04 — "Configuring your agent properly" (compounding leverage)

Status: PROPOSED — batch approval with ch03, ch05, ch06. Frozen on approval.

## Outcome promise

Turn one generic agent into yours: a memory file, a skill, and a deny
rule — then watch the same prompt behave differently before and after.

## Coverage dimensions (matrix-bound)

Config/memory files AGENTS.md etc. (●) · skills/plugins/commands (●) ·
hooks & deterministic guardrails (●) · permissions & deny lists (●) ·
plan mode / spec-first (●) · MCP servers (◐, full in ch14) ·
LSP diagnostics (◐) · memory across sessions (shared w/ ch05).

## Venue

Scratch repo `configured-agent`. Fully executable locally: memory
files, skills, and permission rules are all local files — no auth
needed. Before/after runs on opencode with the fixed task prompt.

## Briefing (≤500w)

The three layers: memory (what the agent knows — AGENTS.md standard,
nested nearest-wins, CLAUDE.md/GEMINI.md cousins), skills (what it can
do on demand — SKILL.md progressive disclosure), guardrails (what it
may never do — deny > ask > allow, hooks as code). Plus the two honest
footnotes: unbounded memory files poison later sessions; skills and
plugins are supply chain (npm plugin = startup execution).

## Visuals — trio {svg, table, diff}

1. **Fig. 4 — precedence (signature SVG).** Nested AGENTS.md
   resolution: nearest-wins flow. Answers: "which file wins when
   three disagree?"
2. **Before/after table.** Same prompt, bare vs configured agent:
   diff size, proof habit, permission behavior.
3. **Guardrail diff.** The deny rule + hook, shown as the actual
   file diff that changed behavior.

## Session (5 steps)

1. Baseline: fixed task on bare opencode, log behavior.
2. Memory: write AGENTS.md (conventions + stopping rule), re-run.
3. Skill: add a SKILL.md (proof-runner), re-run, watch it load.
4. Deny: add Read(./.env)+secrets deny + a `.env` honeypot, attempt
   exfiltration read, watch the block.
5. Compound: all three on; final scorecard vs baseline.

## Evidence

Ledger ch04 rows (agents.md, Claude memory/skills/hooks/permissions,
plan mode, MCP intro/registry/reference-servers, opencode
plugins/LSP) + ch14 deny-list row. Re-verify agents.md standard +
Claude docs paths live (fastest churn: skills/commands merge).

## Teach test

Reader configures a real project repo (memory + 1 skill + 1 deny)
and demonstrates a behavior change. Adversary fails any layer
without a before/after run.
