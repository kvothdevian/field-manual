# Coverage Matrix — the exhaustiveness contract

> DECISIONS #8 and #10: the book is exhaustive AND generalized; projects are
> the spine, never the scope. This matrix proves it. Every dimension gets at
> least one chapter; every chapter closes with "Beyond this build".
>
> Legend: `·` planned · `W` being written (P2–P4) · `✓` shipped & gauntleted.
> Update with STATUS.md at every milestone.

| Dimension | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | App |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Harness selection & comparison | | W | W | W | | | | | | | | | | | | | A |
| Model access: free tiers & routing | | | W | | | | | | | | | | | | | W | |
| Open-weight models | | | W | | | | | | | | | | | | | | |
| Local inference (Ollama/LM Studio) | | | W | | | | | | | | | | | | | | |
| Subscription reuse (Copilot/ChatGPT) | | | W | | | | | | | | | | | | | | |
| Config/memory files (AGENTS.md etc.) | | | | W | | | | | | | | | | | | | |
| Skills, plugins, slash commands | | W | | W | | | | | | | | | | | | | A |
| MCP servers & integration | | W | | W | | | | | | | | | | | | | |
| Hooks & deterministic guardrails | | | | W | | | | | | | W | | | | | | |
| Permissions & deny lists | | | | W | | | | | | | | | | W | | | |
| LSP diagnostics in agent loop | | W | | W | | | | | | | | | | | | | |
| Plan mode / spec-first workflows | | | | W | | W | | | | | | | | | | | |
| Context management & compaction | | | | | W | | | | | | | | | | | | C |
| Memory across sessions | | | | W | W | | | | | | | | | | | | |
| Prompting patterns (loops, fan-out) | | | | | | W | | | | | | | | | | | |
| Evaluator/critic patterns (gauntlets) | W | | | | | W | | | | | | | | | | | |
| TDD & test strategy for agents | | | | | | W | | | W | | | | | | | | |
| Browser automation / UI verification | | | | | | | | W | W | | | | | | | | |
| UI craft: tokens, systems, a11y | | | | | | | | W | | | | | | | | | |
| Debugging methodology | | | | | | | | | | W | | | | | | | |
| Brownfield / large existing repos | | | | | | | | | | | W | | | | | | |
| Multi-agent orchestration & subagents | | | | | | W | | | | | | | | | | | |
| Git workflow, worktrees, branching | | W | | | | | | | | | | W | | | | | |
| CI pipelines & automation | | | | | | | | | | | | W | W | | | | |
| Anti-bloat & refactor hygiene | | | | | | | | | | | W | W | | | | | |
| Deployment & hosting ($0 paths) | | | | | | | | | | | | | W | | | | |
| Security: prompt injection, secrets | | | | | | | | | | | | | | W | | | |
| Supply chain: malicious MCP/skills | | | | | | | | | | | | | | W | | | |
| Licensing & copyright of output | | | | | | | | | | | | | | W | W | | |
| Grey-zone tactics (flagged) | | | W | | | | | | | | | | | | W | W | |
| Cost & rate-limit management | | | | | | | | | | | | | | | | W | |
| Source evaluation & benchmark gaming | | | | | | | W | | | | | | | | | | B |
| When NOT to use an agent | W | | | | | | | | | | | | | | | | |
| Exercises + self-checks per chapter | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |

Chapter key: 01 what agentic coding is · 02 harness landscape · 03 models
without money · 04 configuring your agent · 05 context engineering ·
06 patterns that ship · 07 source literacy · 08 good UI with agents ·
09 testing · 10 debugging · 11 brownfield · 12 pipelines/anti-bloat ·
13 shipping $0 · 14 security/secrets · 15 grey zones · 16 cost/rate limits.
App = appendices A cheat sheet, B source ledger, C glossary, D this matrix.

Builds woven through (per DECISIONS #9): build 1 agent-cost-compass → ch
02–06, 13 · build 2 ncert-quiz-forge → ch 08–10, 14 · build 3 free-tier-atlas →
ch 11, 12, 15, 16.
