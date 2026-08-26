# Coverage Matrix — the exhaustiveness contract

> DECISIONS #8 and #10: the book is exhaustive AND generalized; projects are
> the spine, never the scope. This matrix proves it. Every dimension gets at
> least one chapter; every chapter closes with "Beyond this build".
>
> Legend: `·` none · `◐` thin (touched, deepens elsewhere) · `●` primary (generalized teaching + build demo + receipts + exercise) — shape+label, never color alone.
> As-of 2026-08-26 — 16/16 chapters shipped, 3 builds code-complete locally, 0 true gaps (every row ≥1 ●), 5 thin cuts flagged in App D.
> Update with STATUS.md + progress.html at every milestone (AGENTS.md workflow 2).

| Dimension | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | App | Builds |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Harness selection & comparison | ◐ | ● | · | ◐ | · | · | · | · | · | · | · | · | · | · | · | · | A | B1 B2 B3 |
| Model access: free tiers & routing | · | ◐ | ● | · | · | · | · | · | · | · | · | · | · | · | ◐ | · | · | B1 |
| Open-weight models | · | · | ● | · | · | · | · | · | · | · | · | · | · | · | · | · | · | B1 |
| Local inference (Ollama/LM Studio) | · | · | ● | · | · | · | · | · | · | · | · | · | · | · | · | ◐ | · | B1 |
| Subscription reuse (Copilot/ChatGPT) | · | ◐ | ● | · | · | · | · | · | · | · | · | · | · | · | · | · | · | B1 |
| Config/memory files (AGENTS.md etc.) | · | · | · | ● | ● | · | · | · | · | · | · | · | · | · | · | ● | · | B1 B2 |
| Skills, plugins, slash commands | · | ● | · | ● | · | · | · | · | · | · | · | · | · | · | · | · | A | B1 B3 |
| MCP servers & integration | · | ● | · | ◐ | · | · | · | · | · | · | · | · | · | ● | · | · | · | B3 |
| Hooks & deterministic guardrails | · | · | · | ● | · | · | · | · | · | · | · | ● | · | ◐ | · | · | · | B1 B2 |
| Permissions & deny lists | · | · | · | ● | · | · | · | · | · | · | · | · | · | ● | · | · | · | B2 |
| LSP diagnostics in agent loop | · | ◐ | · | ◐ | · | · | · | · | · | · | · | · | · | · | · | · | · | B3 |
| Plan mode / spec-first workflows | · | · | · | ● | · | ● | · | · | · | · | · | · | · | · | · | · | · | B1 B2 |
| Context management & compaction | · | · | · | ◐ | ● | · | · | · | · | · | · | · | · | · | · | ◐ | C | B1 B2 |
| Memory across sessions | · | · | · | ● | ● | · | · | · | · | · | · | · | · | · | · | ● | · | B3 |
| Prompting patterns (loops, fan-out) | ◐ | · | · | · | · | ● | · | · | · | · | · | · | · | · | · | · | · | B2 B3 |
| Evaluator/critic patterns (gauntlets) | ● | · | · | · | · | ● | ◐ | · | · | · | · | · | · | · | · | · | · | B1 B2 |
| TDD & test strategy for agents | · | · | · | · | · | ● | · | · | ● | · | · | · | · | · | · | · | · | B2 |
| Browser automation / UI verification | · | · | · | · | · | · | · | ● | ● | · | · | · | · | · | · | · | · | B2 |
| UI craft: tokens, systems, a11y | · | · | · | · | · | · | · | ● | · | · | · | · | · | · | · | · | · | B2 |
| Debugging methodology | · | · | · | · | · | · | · | · | · | ● | · | · | · | · | · | · | · | B2 |
| Brownfield / large existing repos | · | · | · | · | · | · | · | · | · | · | ● | · | · | · | · | · | · | B3 |
| Multi-agent orchestration & subagents | · | · | · | · | ◐ | ● | · | · | · | · | · | · | · | · | · | ◐ | · | B2 B3 |
| Git workflow, worktrees, branching | · | ◐ | · | · | · | · | · | · | · | · | · | ● | · | · | · | ● | · | B3 |
| CI pipelines & automation | · | · | · | · | · | · | · | · | · | · | · | ● | ● | · | · | · | · | B3 |
| Anti-bloat & refactor hygiene | · | · | · | · | · | · | · | · | · | · | ● | ● | · | · | · | · | · | B3 |
| Deployment & hosting ($0 paths) | · | · | · | · | · | · | · | · | · | · | · | · | ● | · | · | · | · | B1 B3 |
| Security: prompt injection, secrets | · | · | · | · | · | · | · | · | · | · | · | · | · | ● | · | · | · | B2 B3 |
| Supply chain: malicious MCP/skills | · | · | · | · | · | · | · | · | · | · | · | · | · | ● | · | · | · | B3 |
| Licensing & copyright of output | · | · | · | · | · | · | · | · | · | · | · | · | · | ◐ | ◐ | · | · | — |
| Grey-zone tactics (flagged) | · | · | ◐ | · | · | · | · | · | · | · | · | · | · | · | ● | · | · | B1 |
| Cost & rate-limit management | · | · | ◐ | · | · | · | · | · | · | · | · | · | · | · | ● | · | · | B1 B3 |
| Daily workflow rituals (sessions, memory upkeep, review rhythm) | · | · | · | ◐ | ◐ | · | · | · | · | · | · | ◐ | · | · | · | ● | · | B3 |
| Source evaluation & benchmark gaming | · | · | · | · | · | · | ● | · | · | · | · | · | · | · | · | · | B | B3 |
| When NOT to use an agent | ● | · | · | · | · | ◐ | · | · | · | · | · | · | · | · | ◐ | · | · | B1 |
| Exercises + self-checks per chapter | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | · | B1 B2 B3 |

Chapter key: 01 what agentic coding is · 02 harness landscape · 03 models
without money · 04 configuring your agent · 05 context engineering ·
06 patterns that ship · 07 source literacy · 08 good UI with agents ·
09 testing · 10 debugging · 11 brownfield · 12 pipelines/anti-bloat ·
13 shipping $0 · 14 security/secrets · 15 costs+limits+grey zones (merged,
per DECISIONS #18) · 16 your daily agentic workflow.
App = appendices A cheat sheet, B source ledger, C glossary, D this matrix.

Builds woven through (per DECISIONS #9): build 1 agent-cost-compass → ch
02–06, 13 · build 2 ncert-quiz-forge → ch 08–10, 14 · build 3 free-tier-atlas →
ch 11, 12, 15, 16.
