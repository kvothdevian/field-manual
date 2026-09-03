# Source Ledger — P1 research wave (complete 2026-08-25)

Every citation in the book MUST come from this ledger. Chapters may append new
rows while drafting, but each new row follows the same protocol.

## Protocol

- **Tiers:** T1 = official docs/specs/repos or established practitioners
  (Willison, Ronacher, Karpathy, Hamel Husain, vendor *engineering* blogs).
  T2 = vendor marketing blogs, aggregators, tool homepages. T3 = forums/X/SEO
  farms — leads only, never cited as fact; always paired with a warning or a
  corroborating T1/T2 source.
- **fetched** = y when a subagent retrieved it live this wave.
- **as-of** dates ride on every row; anything time-sensitive gets restamped
  when a chapter drafts against it.
- **Gaps** at the bottom carry binding instructions for chapter drafting.

## Wave stats

Six parallel research agents · ~160 rows · all 16 chapters + Appendix A covered.
Rows below are lightly normalized; wording preserved from the vetting pass.

---

## Ch 01 — What agentic coding actually is

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Agent definition: LLM runs tools in a loop toward a goal, bounded, with stopping condition | https://simonwillison.net/2025/Sep/18/agents/ | T1 | 2025-09 | y | Established practitioner; definition Anthropic also uses |
| Harness vs model: coding agent = harness wrapping an LLM with invisible prompts + callable tools; code execution is the defining capability | https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/ | T1 | 2025–2026 | n | Practitioner guide-in-progress; conceptual, low churn risk |
| Workflows vs agents; when NOT to build agents (start simplest; latency/cost tradeoff; compounding error risk; sandbox + guardrails) | https://www.anthropic.com/research/building-effective-agents | T1 | 2024-12 | y | Canonical vendor essay; tooling details have aged |
| Agentic coding ≠ chatbot: reads files, runs commands, iterates autonomously; documented failure patterns (kitchen-sink session, trust-then-verify gap, infinite exploration, bloated memory files) | https://code.claude.com/docs/en/best-practices | T1 | 2026-08 | y | Official docs; practical but favors own tool |
| Field failure modes: permission-skipping risk, MCP unreliability, slow tools stall loops, stale breadcrumbs, refactor before complexity exceeds agent capacity | https://lucumr.pocoo.org/2025/6/12/agentic-coding/ | T1 | 2025-06 | y | Ronacher; candid, self-warned may age |
| Practical loop tips: scripts over MCP, unified logs, subagents save context, skip-permissions only sandboxed | https://simonwillison.net/2025/Jun/29/agentic-coding/ | T1 | 2025-06 | y | Curated summary of primary talk |
| Original vibe-coding coinage: give in to the vibes, Accept All, don't read diffs, throwaway projects only | https://archive.is/yNSTA (orig x.com/karpathy 1886192184808149383) | T3 | 2025-02 | y | X unstable — cite the archive snapshot |
| Vibe coding ≠ all AI-assisted programming; golden rule: don't commit what you can't explain | https://simonwillison.net/2025/Mar/19/vibe-coding/ | T1 | 2025-03 | y | Definitional corrective essay |
| "Vibe engineering" proposal; Feb 2026 update concedes "agentic engineering" won the naming contest | https://simonwillison.net/2025/Oct/7/vibe-engineering/ | T1 | 2025-10 upd 2026-02 | n | Vocabulary chapter material |
| Karpathy endorses agentic engineering: orchestrate with oversight, no quality compromise | https://thenewstack.io/vibe-coding-is-passe/ | T2 | 2026-02 | y | Press proxy for inaccessible original tweet |
| Stable reference definition of agentic engineering vs vibe coding | https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/ | T1 | 2025–2026 | n | Consistent with dated posts |
| When to design an agentic loop: clear success criteria + trial-and-error tasks; agents are dangerous (prompt injection, rogue shell) | https://simonwillison.net/2025/Sep/30/designing-agentic-loops/ | T1 | 2025-09 | n | Safety framing consistent with vendor guidance |
| Perception-gap RCT: devs expected +24%, believed +20%, measured 19% SLOWER (early-2025 tools, experienced OSS devs) | https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ | T1 | 2025-07 | y | Independent nonprofit RCT, public data/code; narrow setting |
| Convergence risk: even careful practitioners stop reviewing every line; accountability stays human | https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/ | T1 | 2026-05 | n | Recent self-critical reflection |
| opencode first-run path: `npm install -g opencode-ai`, launch `opencode`, `/init` scaffolds AGENTS.md, Tab toggles plan/build, Windows via choco/scoop/npm/mise | https://opencode.ai/docs | T1 | 2026-09-03 | y | v2 ch01 evidence packing: fetched live 2026-09-03, install + first-run + Windows paths confirmed |
| METR Jul-2025 RCT page now carries an "out of date" banner pointing at the Feb-2026 follow-up; +24/+20/−19 figures unchanged on the page | https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ | T1 | 2026-09-03 | y | v2 ch01 re-verification: numbers hold, staleness flagged in prose |
| opencode provider auth via `/connect` in the TUI (opencode.ai/auth, paste API key); supports any LLM provider + Zen curated list | https://opencode.ai/docs | T1 | 2026-09-03 | y | v2 ch01: fetched live 2026-09-03, Configure section |
| opencode non-interactive runs: `opencode run -m provider/model "message"` (also --agent/--format/--continue flags) | https://opencode.ai/docs/cli/ | T1 | 2026-09-03 | y | v2 ch01: `opencode run --help` on opencode-ai 1.18.21 + live CLI page; the ch01 session transcript was produced this way |
| Node.js floor for the ch01 proof: Node v24.13.0 used 2026-09-03; proof is one console.log, needs any maintained Node release | https://opencode.ai/docs | T1 | 2026-09-03 | y | v2 ch01: `node --version` executed locally; chapter states the observed version, not a support claim |

## Ch 07 — Source literacy

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Productivity forecasts inverted by RCT — AI slowed experienced OSS devs 19%; both groups still believed they sped up | https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ | T1 | 2025-07 | y | Strongest counterweight to vendor surveys |
| Researchers publicly retracting confidence in their own method due to selection effects (devs refuse no-AI arm); late-2025 tools likely help more | https://metr.org/blog/2026-02-24-uplift-update/ | T1 | 2026-02 | y | Model behavior for intellectual honesty |
| Benchmark inflation anatomy: ~33% of resolved SWE-bench instances leak solutions; ~25% pass weak tests; filtering drops SWE-Agent+GPT-4 12.47%→4.58%; post-cutoff issues score lower | https://arxiv.org/abs/2410.06992 (SWE-Bench+) | T1 | 2024-10 | n | Academic paper; verified via citation trails |
| Contamination measurement method: LiveCodeBench continuously collects post-release problems, documents overfitting on static benchmarks | https://arxiv.org/abs/2403.07974 | T1 | 2024-03 | y | Standard template for contamination-free evals |
| Benchmark governance case: FrontierMath quietly funded by OpenAI which had pre-access to problems+solutions before o3 record; Epoch admits disclosure failure, builds holdout | https://epoch.ai/latest/openai-and-frontiermath | T1 | 2025-01 upd 2025-03 | n | Primary-party admission |
| Press verification of same case | https://techcrunch.com/2025/01/19/ai-benchmarking-organization-criticized-for-waiting-to-disclose-funding-from-openai/ | T2 | 2025-01 | n | Reputable press quoting named actors |
| Devin "completed real jobs on Upwork" claim walked back within a month | https://newsletter.pragmaticengineer.com/p/the-pulse-90 | T1 | 2024-04 | n | Practitioner journalist, contemporaneous docs |
| Frame-by-frame demo debunk of that Devin video (hallucinated fixes, unmet requirements, 36-min human replication vs 6h+ run) | https://www.youtube.com/watch?v=tNmgmwEtoWE | T3 | 2024-04 | y | Use as lead + teaching example; cite Pragmatic Engineer corroboration |
| Memorization test: Claude models localize SWE-Bench-Verified files 3–6x better than comparable fresh benchmarks — recall vs skill | https://arxiv.org/abs/2512.10218 | T1 | 2025-12 | n | Waterloo-group preprint; clever design |
| Vendor study to teach scrutiny of: Copilot "55% faster" (n=95, self-timed, no control, vendor-funded) | https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/ | T2 | 2022-12 | n | Classic contrast case vs controlled design |
| Non-expert verification heuristics: checklists for AI-hype metrics, bad benchmarks, unfalsifiable claims | https://www.aisnakeoil.com/ | T1 | ongoing | n | Narayanan & Kapoor, credentialed skeptics |

## Ch 02 — The harness landscape (+ Appendix A data)

### Chapter claims

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| opencode: open-source agent as TUI + desktop (beta) + IDE extension (+CLI/Web/GitHub/GitLab); installs via curl/npm/brew/scoop/choco/pacman/docker | https://opencode.ai/docs ; github.com/anomalyco/opencode | T1 | 2026-08-25 | y | MIT; ~201k stars, 26k forks |
| 75+ LLM providers via Vercel AI SDK + Models.dev; local runtimes (Ollama/LM Studio/llama.cpp); OpenCode Zen curated list + low-cost Go plan | https://opencode.ai/docs/providers | T1 | 2026-08-25 | y | Exact claim "75+" |
| Subscription reuse zero-setup: ChatGPT Plus/Pro OAuth, GitHub Copilot device OAuth, GitLab Duo OAuth; Claude Pro/Max proxy plugins REMOVED since v1.3.0 because Anthropic explicitly prohibits | https://opencode.ai/docs/providers | T1 | 2026-08-25 | y | Key $0 lever + grey-zone exhibit |
| Built-in build (full access) / plan (read-only) agents via Tab; @general subagent for multistep searches | github.com/anomalyco/opencode ; opencode.ai/docs | T1 | 2026-08-25 | y | No separate modes doc page exists |
| Skills: SKILL.md from .opencode/skills + Claude-compatible .claude/.agents paths; loaded on demand; wildcard allow/deny/ask permissions | https://opencode.ai/docs/skills | T1 | 2026-08-25 | y | Cross-compatible layouts |
| Plugins: JS/TS from .opencode/plugins or npm; event hooks (tool.execute.*, session.*, lsp.*); custom tools override built-ins; Bun auto-installed | https://opencode.ai/docs/plugins | T1 | 2026-08-25 | y | npm plugin = startup code execution (supply-chain note) |
| LSP: 30+ built-in servers feed diagnostics to agent; DISABLED by default (`lsp: true` enables) | https://opencode.ai/docs/lsp | T1 | 2026-08-25 | y | Docs themselves suggest lint CLIs as alternative |
| Multi-session (/sessions), /new, git-backed /undo //redo, opt-in /share links | https://opencode.ai/docs/tui ; InfoQ below | T1 | 2026-08-25 | y | |
| Independent corroboration: native terminal UI, multi-session, 75+ models, desktop+IDE, ACP editors (Zed/JetBrains/Neovim/Emacs), privacy-first | https://www.infoq.com/news/2026/02/opencode-coding-agent/ | T2 | 2026-02-05 pub | y | Star count stale there (95k→201k) |
| Claude Code surfaces: terminal, VS Code/JetBrains, desktop, web (claude.ai/code); requires subscription or Console account; PROPRIETARY (repo hosts docs/issues only) | https://code.claude.com/docs/en/overview ; github.com/anthropics/claude-code | T1 | 2026-08-25 | y | Features: CLAUDE.md, skills, hooks, subagents, Agent SDK, routines |
| Codex CLI: Apache-2.0 Rust core; Sign in with ChatGPT (Plus/Pro/Business/Edu/Enterprise) or API key; IDE ext + codex app desktop + Codex Web cloud | https://github.com/openai/codex | T1 | 2026-08-25 | y | ~118k stars |
| Gemini CLI: Apache-2.0; FREE tier 60 req/min + 1,000 req/day with personal Google OAuth; Gemini 3 models, 1M context, GEMINI.md, checkpointing, MCP, VS Code companion | https://github.com/google-gemini/gemini-cli | T1 | 2026-08-25 | y | Strongest no-cost first-party entry |
| Gemini CLI: free tier 60 req/min + 1,000 req/day (Google OAuth), Gemini 3 + 1M context, Apache-2.0, GEMINI.md, checkpointing, MCP, `gemini -p` non-interactive | https://github.com/google-gemini/gemini-cli | T1 | 2026-09-03 | y | v2 ch02: re-verified live 2026-09-03, free-tier numbers unchanged from Aug row |
| Claude Code surfaces: terminal/IDE/desktop/web on one engine; subscription or Console account; install via curl/brew/winget; `cd + claude`, login on first use; skills, hooks, subagents, routines | https://code.claude.com/docs/en/overview | T1 | 2026-09-03 | y | v2 ch02: fetched live 2026-09-03, surfaces + install + auth flow confirmed |
| Install versions verified by local execution 2026-09-03: gemini 0.58.0, codex-cli 0.153.0, Claude Code 2.1.259 (all via npm install -g) | https://github.com/google-gemini/gemini-cli ; https://github.com/openai/codex ; https://code.claude.com/docs/en/overview | T1 | 2026-09-03 | y | v2 ch02: `--version` output captured; own-execution evidence |
| Headless-run auth walls quoted verbatim 2026-09-03: gemini demands GEMINI_API_KEY/VERTEX/GCA; codex demands trusted directory; claude demands /login — none runnable without interactive auth | https://github.com/google-gemini/gemini-cli ; https://github.com/openai/codex ; https://code.claude.com/docs/en/overview | T1 | 2026-09-03 | y | v2 ch02: exact captured strings — gemini: "Please set an Auth method in your C:\Users\Aman\.gemini\settings.json or specify one of GEMINI_API_KEY, GOOGLE_GENAI_USE_VERTEXAI, GOOGLE_GENAI_USE_GCA"; codex exec: "Not inside a trusted directory and --skip-git-repo-check was not specified"; claude -p: "Not logged in · Please run /login" |
| Codex gate position (executed `codex exec --help`, 0.153.0): sandbox policies read-only/workspace-write/danger-full-access, --approve-for-me routing, --dangerously-bypass-approvals-and-sandbox flag, -c config overrides, `codex login`, trusted-directory requirement | https://github.com/openai/codex | T1 | 2026-09-03 | y | v2 ch02: own-execution evidence; gate = policy on the CLI |
| Claude Code gate position (overview fetched live 2026-09-03): permission prompts + hooks ("auto-formatting after every file edit", "running lint before a commit" quoted from page) + auto-memory saved across sessions without writing anything | https://code.claude.com/docs/en/overview | T1 | 2026-09-03 | y | v2 ch02: hook examples are page quotes, not inventions; gate = script |
| Gemini CLI gate position (README fetched live 2026-09-03): Trusted Folders control execution policy per directory; conversation checkpointing saves/resumes; sandboxing guide; `gemini -p` + --output-format json headless | https://github.com/google-gemini/gemini-cli | T1 | 2026-09-03 | y | v2 ch02: gate = territory |

### Appendix A — per-harness facts

| harness | license | access/$0 path | standout feature | source | tier |
|---|---|---|---|---|---|
| opencode (Anomaly) | MIT | Free OSS binary; $0 via local models or free-key clouds (NVIDIA build.nvidia.com etc.); reuses ChatGPT/Copilot/GitLab Duo subs; optional paid Zen/Go | 75+ providers; TUI/desktop/IDE; skills+plugins+LSP; plan/build agents | opencode.ai/docs/providers ; github.com/anomalyco/opencode | T1 |
| Claude Code (Anthropic) | Proprietary | No free tier; subscription or API credits | One engine across terminal/IDE/desktop/web; subagents, Agent SDK, routines | code.claude.com/docs/en/overview | T1 |
| Codex CLI (OpenAI) | Apache-2.0 | Free install; $0-ish via ChatGPT plan sign-in or usage-based API | Same agent in CLI/IDE/app/Web cloud | github.com/openai/codex | T1 |
| Gemini CLI (Google) | Apache-2.0 | Free tier 60rpm/1000day personal OAuth | Largest gratis allowance + 1M context | github.com/google-gemini/gemini-cli | T1 |
| Cline | Apache-2.0 (JetBrains plugin closed) | Free OSS; BYO keys/OpenRouter/local | VS Code + JetBrains + headless CLI + Kanban board + SDK; Plan/Act toggle | github.com/cline/cline | T1 |
| Roo Code | Apache-2.0 — ARCHIVED 2026-05-15 | Extension shut down May 15 2026; community successor ZooCode | Mode system — historical benchmark | github.com/RooCodeInc/Roo-Code | T1 |
| Goose (Block→AAIF/Linux Foundation) | Apache-2.0 | Free OSS; BYO keys 15+ providers; sub reuse via ACP | Native desktop + CLI + embeddable Rust API; recipes, 70+ MCP extensions | github.com/aaif-goose/goose | T1 |
| Aider | Apache-2.0 | Free OSS; BYO incl. Copilot auth, OpenRouter, Ollama | Git-native pair programming: auto commits, repo map, edit-format leaderboards | aider.chat/docs | T1 |
| Cursor CLI | Proprietary (licensing unverified — see Gaps) | Requires Cursor account; free-tier limits not confirmed on CLI page | Editor-parity Agent/Plan/Ask in shell; `&` hands task to Cloud Agent | cursor.com/docs/cli | T1 |
| Pi (Mario Zechner) | MIT (@mariozechner/pi-coding-agent) | Free OSS; BYO keys via pi-ai multi-provider layer | Minimalist 4-tool core (read/write/edit/bash); TS extensions; deliberately no baked-in subagents/plan mode | pi.dev ; mariozechner.at/posts/2025-11-30-pi-coding-agent/ | T1 |

## Ch 03 — Models without money

| chapter | claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|---|
| 03 | Groq free plan caps: e.g. gpt-oss-120b 30 RPM / 1K RPD / 8K TPM / 200K TPD; org-level; cached tokens don't count; 429 + retry-after | https://console.groq.com/docs/rate-limits | T1 | 2026-08 live | y | Full free-tier model table on page |
| Groq free plan re-verified: gpt-oss-120b 30 RPM / 1K RPD / 8K TPM / 200K TPD, org-level, cached tokens excluded, 429 + retry-after + X-RateLimit headers | https://console.groq.com/docs/rate-limits | T1 | 2026-09-03 | y | v2 ch03: fetched live, August numbers hold exactly |
| DeepSeek re-verified: V4-Flash-0731 off-peak $0.22/$0.66 peak doubled, cache $0.007, conc 2500; V4-Pro-0813 off-peak $0.66/$1.98, cache $0.022/$0.044, conc 500; peak = 01-04 & 06-10 UTC weekdays; Anthropic-format endpoint | https://api-docs.deepseek.com/quick_start/pricing | T1 | 2026-09-03 | y | v2 ch03: fetched live; model version suffixes new vs August row, prices hold |
| Kimi re-verified: K2.7 Code & K2.6 $0.95/$4.00 (cache $0.19/$0.16), K3 flagship $3/$15 (cache $0.30); spend-unlocks-limits tiers | https://platform.kimi.ai/ | T1 | 2026-09-03 | y | v2 ch03: fetched live, August numbers hold; K3 launch noted |
| OpenRouter limits re-verified from page source constants: :free 20 RPM always, 50/day under $10 credits, 1000/day above; multi-account evasion blocked; 429 vs 402 semantics | https://openrouter.ai/docs/api-reference/limits | T1 | 2026-09-03 | y | v2 ch03: fetched live, August numbers hold exactly |
| Gemini API: no public fixed grid — limits per project/model visible ONLY in AI Studio; Free→Tier1→Tier2→Tier3 spend ladder; free tier Flash-only since May 2026 per third-party guides (leads, verify in console) | https://ai.google.dev/gemini-api/docs/rate-limits | T1 | 2026-09-03 | y | v2 ch03: direct fetch fails transport (as in August); official position confirmed via docs search excerpts + Mar-2026 tiers blog; chapter teaches console-reading, not frozen numbers |
| Google AI Studio revamp Mar 2026: project spend caps, automatic tier graduation with billing history, per-project RPM/TPM/RPD dashboard | https://blog.google/innovation-and-ai/technology/developers-tools/more-control-over-gemini-api-costs/ | T1 | 2026-09-03 | y | v2 ch03: official blog via search excerpt; backs console-reading method + dashboard claim |
| Door 2 executed 2026-09-03: opencode free-tier model mimo-v2.5-free fixed add.js (a-b→a+b) one pass, +1/-1, proof add(2,3)=5 | https://openrouter.ai/docs/api-reference/limits | T1 | 2026-09-03 | y | v2 ch03: own-execution transcript; free-tier cloud door proven runnable |
| opencode free-tier model IDs observed via `opencode models` 2026-09-03: big-pickle, ling-3.0-flash-fin-free, mimo-v2.5-free, muse-spark-1.2/1.3-contributor-free, nemotron-3-ultra-free, nemotron-3.5-lightning-free | https://opencode.ai/docs | T1 | 2026-09-03 | y | v2 ch03: local command output; second model (nemotron-3.5) executed same fixed task +1/-1 |
| Door 2 second run 2026-09-03: nemotron-3.5-lightning-free fixed add.js one pass (+1/-1, proof 5), globbed first and narrated the bug line — same wall/quality, different style | https://opencode.ai/docs | T1 | 2026-09-03 | y | v2 ch03: own-execution transcript; free-model comparison material |
| 03 | Gemini API still has a Free tier; no public fixed RPM/RPD grid anymore — live limits per project/model visible ONLY in AI Studio; Tier 1 unlocks $10 billing | https://ai.google.dev/gemini-api/docs/rate-limits | T1 | 2026-08-18 | y (snapshot) | Direct fetch failed transport; re-fetch before print |
| 03 | OpenRouter :free models: 20 RPM always; 50 req/day if never bought ≥$10 credits; 1,000 req/day once you have; multi-account evasion blocked | https://openrouter.ai/docs/api-reference/limits | T1 | 2026-08 live | y | Constants exposed in source |
| 03 | Mistral free tier: "Free mode" default; limits = RPS + tokens/min + tokens/month shown per-org in console; paid tiers €20/€100/€500/€2000 | help.mistral.ai rate-limit article | T1 | 2026-08-12 | y | Exact free numbers per-console only now |
| 03 | Cerebras free tier: $5 free credits + all models on signup; Developer tier $10+ gives 10x limits | https://inference-docs.cerebras.ai/support/pricing | T1 | 2026-08 live | y | No numeric free RPM published |
| 03 | **GitHub Models fully RETIRED July 30 2026** — playground/catalog/BYOK gone; redirects to Azure AI Foundry or Copilot | https://docs.github.com/en/github-models/use-github-models/prototyping-with-ai-models | T1 | retired 2026-07-30 | y | Ch03 must DROP GitHub Models as a $0 path |
| 03 | DeepSeek pay-only but near-free: V4-Flash OFF-PEAK $0.22/$0.66 per M in/out, PEAK doubled $0.44/$1.32 (peak = 01–04 & 06–10 UTC weekdays); cache-hit input $0.007 flash / $0.014 pro; V4-Pro off-peak $0.66/$1.98, peak $1.32/$3.96, cache $0.022/$0.044; concurrency 2500/500 | https://api-docs.deepseek.com/quick_start/pricing | T1 | fetched-live 2026-08-25 | y | CORRECTED 2026-08-25 — original wording implied standard-rate-halved; live page confirms $0.22/$0.66 are the OFF-PEAK rates (caught during Build 1 review). Also serves Anthropic-format endpoint /anthropic |
| 03 | Kimi API: K2.7 Code & K2.6 $0.95/$4.00 per M in/out (cache-hit $0.19/$0.16), K3 flagship $3/$15; higher limits auto-unlock with cumulative spend | https://platform.kimi.ai/ | T1 | 2026-08 live | y | Batch API 60% price on K2 |
| 03 | Qwen Model Studio new-user quota: ~1M tokens per model, 90 days, Beijing/Singapore regions; "Free Quota Only" mode hard-stops HTTP 403 to prevent charges | alibabacloud.com/help/en/model-studio/new-free-quota | T1 | 2026-08-13 | y | Quota shared across RAM users |
| 03 | Local: `ollama launch opencode` auto-configures OpenCode; ≥64k-context models required locally | https://docs.ollama.com/integrations/opencode | T1 | 2026-08 live | y | Cloud models via `ollama pull <model>-cloud` |
| 03 | Subscription reuse: ChatGPT Plus/Pro OAuth + Copilot device-flow "zero setup" in opencode; NVIDIA build.nvidia.com free key; LM Studio provider documented at 127.0.0.1:1234/v1 | https://opencode.ai/docs/providers | T1 | 2026-08 live | y | Claude proxy plugins removed v1.3.0 (see Ch02) |
| 16 | Anthropic API token-bucket: per-model-class RPM + ITPM/OTPM (Start Opus 5: 1,000 RPM / 2M ITPM / 400K OTPM); monthly spend caps Start $500 / Build $1k / Scale $200k; cached-read input doesn't count toward ITPM | https://docs.anthropic.com/en/api/rate-limits | T1 | 2026-08 live | y | Canonical token-bucket citation |
| 16 | Codex included across ChatGPT plans incl. Free/Go drawing one shared allowance pool; since Apr 2 2026 billing is token-based credits (was per-message); OpenAI cites ~$100–200/dev/mo average Codex cost | help.openai.com/en/articles/11369540-using-codex | T1 | post-Apr-2026 | y | Rate card article 20001106; `/status` shows remaining allowance |
| 16 | OpenRouter privacy: per-provider train-on-prompts flags surfaced per endpoint; separate opt-outs for paid AND free models; request-level data-policy filtering | https://openrouter.ai/docs/features/privacy-and-logging | T1 | 2026-08 live | y | Opting out of training may exclude cheapest providers |
| 16 | z.ai GLM Coding Plan: ToS allows training on your data, no meaningful opt-out; Apr 2026 policy restricts to "coding scenarios" with automated detection — throttle → suspend → permanent ban at 3 violations (errors 1302/1303 reported) | https://awesomeagents.ai/news/zai-coding-plan-bans-non-coding-use/ | T3 | Apr 2026 events | y | Corroborated by practitioner posts (LinkedIn, r/ClaudeCode, r/ZaiGLM) |
| 16 | GLM Coding Plan quota mechanics: dual ceilings (5-hour rolling window + weekly quota, Lite ≈10k credits/wk); points system since GLM-5.3 (2026-08-14); off-peak bills half points + dynamic concurrency boost; concurrency unpublished by design; cancel ≥3 days before renewal | https://moclaw.ai/blog/glm-coding-plan-rate-limits | T3 | 2026-08-14 read | y | Quotes z.ai policy pages directly |
| 16 | Gemini free-tier tradeoff: unpaid-tier prompts/responses may train Google models; Search-grounding capped 500 req/day shared Flash/Flash-Lite | https://aireiter.com/blog/google-ai-studio-free-api | T3 | 2026-07-20 checked | y | Verify against ai.google.dev terms before print |
| 16 | Mistral free Experiment tier: requests MAY train Mistral models unless opted out in Admin Console; paid Scale opted-out by default; phone verification, no card | https://e8.team/resources/mistral-la-plateforme-free-tier-for-developers/ | T3 | Jun 2026 upd | y | Official caveat quoted verbatim; cross-check help.mistral.ai |

## Ch 16 — Cost & rate-limit management

Covered by the Ch 03 table above (rows tagged 16): token buckets, spend tiers,
credit systems, free-tier training tradeoffs, off-peak routing economics.

## Ch 12 — Pipelines that prevent bloat

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Official Claude Code GitHub Action: @claude mentions, automation mode, --max-turns cost caps, secret auth | https://code.claude.com/docs/en/github-actions | T1 | 2026-08 (v2.1.229+) | y | First-party docs; version-sensitive |
| Official action repo 8.7k stars MIT; Bedrock/Vertex/Foundry auth; examples dir | https://github.com/anthropics/claude-code-action | T1 | active 2026 | y | Canonical repo |
| Action security guidance: access control, permissions, commit signing | .../claude-code-action/blob/main/docs/security.md | T1 | 2026 | y | Linked from docs + README |
| Codex cloud/web agent: parallel tasks, @codex delegation, PR review flows | https://developers.openai.com/codex/cloud | T1 | 2026 | y | Verified live |
| Codex CLI Apache-2.0; ChatGPT-plan auth vs API key | https://github.com/openai/codex | T1 | active 2026 | y | |
| Dependabot updates pinned GitHub Actions via dependabot.yml (package-ecosystem: github-actions) | https://docs.github.com/en/code-security/dependabot/working-with-dependabot/keeping-your-actions-up-to-date-with-dependabot | T1 | current | y | Copy-paste config |
| Renovate: multi-platform dependency automation; scheduling/presets; AGPL-3.0 | https://docs.renovatebot.com/ | T1 | v44.41.1 | y | Maintainer docs |
| Agent-run recurring jobs recipes: docs-sync, triage, scheduled maintenance | .../claude-code-action/blob/main/docs/solutions.md | T1 | 2026 | y | From official solutions guide |

## Ch 13 — Shipping for $0

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Cloudflare Pages Free: 500 builds/mo, 20-min build timeout, 20k files, 25 MiB/file, UNLIMITED preview deployments, 100 projects | https://developers.cloudflare.com/pages/platform/limits/ | T1 | 2026-07-16 | y | Explicit per-plan tables |
| Vercel Hobby: 200 projects, 100 deploys/day, 45-min builds, 100 GB transfer, 1 concurrent build | https://vercel.com/docs/limits | T1 | 2026-08-03 | y | Exhaustive tables |
| Netlify Free: credit-based ($0 tier 300 credits; prod deploy = 15 credits), unlimited deploy previews, custom domains + SSL | https://www.netlify.com/pricing/ | T1 | 2026 pricing | y | Quote exactly — "$0" has usage ceilings now |
| GitHub Pages: static sites from repos, 1 user/org site + unlimited project sites, custom domains | https://pages.github.com/ + docs.github.com Pages about-page | T1 | 2025–2026 | y | About-page canonical |
| GitHub Pages published SOFT limits: ~100 GB/mo bandwidth (soft); 10 builds/hr (soft; waived entirely w/ custom Actions workflow); source repo recommended ≤1 GB, published site ≤1 GB; 10-min deploy timeout; rate limits may respond HTTP 429; exceed → site may stop serving or Support emails mitigation advice | https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits | T1 | fetched-live 2026-08-26 | y | One click from additional-products terms §Bandwidth and Usage Limits; soft = guidance-grade, not contractual hard walls |
| Pages ToS boundary: NOT allowed as free commercial-business/e-commerce/SaaS hosting; same terms EXPLICITLY permit donation buttons and crowdfunding links on Pages | https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features | T1 | eff. 2026-04-27 | y | Also covers Actions limits; donation permission amended into row 2026-08-26 |
| Preview-deploy pattern: every branch gets preview URL before merge | developers.cloudflare.com/pages/configuration/preview-deployments/ | T1 | 2026 | y | |

## Ch 14 — Security & secrets

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| "Lethal trifecta": private data + untrusted content + exfiltration channel = exploitable agent; guardrails don't fully solve | https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/ | T1 | 2025-06-16 | y | Originating essay; dozens of prod exploits cited |
| OWASP Top 10 for LLM Apps — 2025 edition + newer 2026 edition + agentic-security initiatives | https://genai.owasp.org/ | T1 | 2026 ed. published | y | Standards body |
| First malicious MCP server in the wild: npm postmark-mcp ≥1.0.16 BCC'd emails to attacker (~1,500 dl/wk) | https://www.koi.security/blog/postmark-mcp-npm-malicious-backdoor-email-theft | T2 | 2025-09-25 | y | IOC-backed; corroborated by Snyk/Register/BleepingComputer |
| Independent analysis of same backdoor + remediation checklist | https://snyk.io/blog/malicious-mcp-server-on-npm-postmark-mcp-harvests-emails/ | T2 | 2025-09-25 | y | Consistent IOCs |
| Nx "s1ngularity": malware invoked installed AI CLIs (--dangerously-skip-permissions, --yolo, --trust-all-tools) to enumerate .env, SSH keys, wallets | https://socket.dev/blog/nx-packages-compromised | T2 | 2025-08-27 | y | First documented AI-CLI weaponization |
| s1ngularity aftermath: ~50% of victims had AI CLI installed; guardrail refusal rates measured | https://www.wiz.io/blog/s1ngularitys-aftermath | T2 | 2025-09-03 | y | Quantified funnel |
| Official Nx advisory GHSA-cxm3-wv7p-598c | github.com/nrwl/nx/security/advisories/GHSA-cxm3-wv7p-598c | T1 | 2025-08/09 | y | Primary advisory |
| Deny-list practice: Read(./.env) deny rules block agent reads; deny > ask > allow precedence; known bypass caveats documented | https://code.claude.com/docs/en/permissions | T1 | 2026-08 (v2.1.235+) | y | Paste-ready exclude-secrets rules |

## Ch 15 — Grey zones, honestly

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| US Copyright Office AI reports: Part 2 Copyrightability (2025-01-29) — human authorship required; Part 3 training pre-publication | https://www.copyright.gov/ai/ | T1 | Part 2 2025-01-29 | y | Government hub |
| Anthropic consumer terms: no sharing login/API credentials; no reselling Services | https://www.anthropic.com/legal/consumer-terms | T1 | eff. 2025-10-08 | y | §2/§3 quoted verbatim |
| OpenAI terms: no credential sharing; API terms bar reselling/sublicensing access | openai.com/policies/row-terms-of-use ; platform.openai.com/terms | T1 | 2026 ed. | y | Load-bearing clauses for relay illegality |
| OpenRouter free models: 50 req/day (1,000/day with ≥$10 credits); prompts not logged by default; training-capable providers routed only if privacy toggle allows | https://openrouter.ai/docs/faq | T1 | current | y | "Free = maybe-trained" is opt-in, in writing |
| Z.ai GLM Coding Plan usage policy: Lite/Pro/Max concurrency tiers, dynamic peak/off-peak limits — says NOTHING about input-training (silence citable) | https://docs.z.ai/devpack/usage-policy | T1 | current | y | |
| Z.ai third-party explainer: China-hosted data residency, Entity List shifts, self-hosting MIT weights as clean path | https://www.layer3labs.io/guides/z-ai-explained | T3 | 2026-07-21 | y | Leads-only for residency/risk framing |
| Example unofficial relay: ericc-ch/copilot-api (4.1k stars) reverse-proxies Copilot into OpenAI/Anthropic APIs; README itself warns "not supported by GitHub… use at your own risk" + abuse-detection notice | https://github.com/ericc-ch/copilot-api | T3 | active 2026 | y | Ideal warning-framed exhibit; viability historically short-lived |
| Free-tier stacking boundary: hosters reserve suspension rights for disproportionate burden; Pages bars commercial hosting; Actions bars standalone services | docs.github.com additional-products terms | T1 | eff. 2026-04-27 | y | Contractual text, not case law |

## Ch 04 — Configuring your agent properly

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| AGENTS.md: open tool-agnostic instruction-file standard (60k+ repos claimed, nested files, nearest-wins precedence), Linux Foundation stewarded; adopted by Codex/Cursor/opencode/Copilot/Gemini CLI | https://agents.md | T1 | 2026-08 | y | Self-reported counts verifiable via linked searches |
| agents.md re-verified: 60k+ projects, nested nearest-wins, LF stewardship, closest-file-wins + chat-prompts-override; OpenAI repo holds 88 AGENTS.md files | https://agents.md | T1 | 2026-09-03 | y | v2 ch04: fetched live; adoption list + monorepo guidance confirm |
| Claude skills: custom commands merged into skills (both create /name, skill wins ties); SKILL.md body loads only on use (progressive disclosure); directory-name commands; disable-model-invocation; nested + Agent Skills standard | https://code.claude.com/docs/en/skills | T1 | 2026-09-03 | y | v2 ch04: fetched live; merge + disclosure + precedence confirm |
| opencode permissions: allow/ask/deny + granular object syntax, wildcards, last-match-wins, per-agent overrides; defaults permissive EXCEPT .env denied by default (*.env/*.env.* deny) | https://opencode.ai/docs/permissions/ | T1 | 2026-09-03 | y | v2 ch04: fetched live (page stamped Sep 3 2026); .env-default + granular rules confirm; honeypot demo armed on this |
| ch04 session pair 2026-09-03: bare run (glob→read→edit, terse) vs configured run (direct read, proof pasted verbatim, line cited); exfiltration refused at model layer twice — harness deny stood armed but unfired | https://opencode.ai/docs/permissions/ | T1 | 2026-09-03 | y | v2 ch04: own-execution transcripts; instructions-vs-enforcement demonstrated exactly as reality served it |
| opencode permission defaults detail (same live page): doom_loop (3 identical calls) + external_directory ask; read allows all EXCEPT *.env/*.env.* deny with *.env.example explicitly allowed; ask offers once/always/reject | https://opencode.ai/docs/permissions/ | T1 | 2026-09-03 | y | v2 ch04 round-2: specifics quoted from fetched page for defaults paragraph |
| Claude skill placement mechanics (same live page): enterprise > personal > project > bundled precedence; nested .claude/skills scoping; live change detection hot-reloads SKILL.md mid-session; disable-model-invocation for manual-only | https://code.claude.com/docs/en/skills | T1 | 2026-09-03 | y | v2 ch04 round-2: hierarchy + hot-reload quoted from fetched page for stuck-box mechanics |
| Claude skill frontmatter schema (same live page table): only `description` recommended/required; `allowed-tools` pre-approves tools for the invoking turn; `disallowed-tools` removes tools while skill active; `user-invocable: false` hides from slash menu; directory name (not frontmatter `name`) sets the command | https://code.claude.com/docs/en/skills | T1 | 2026-09-03 | y | v2 ch04 round-5: frontmatter-reference table quoted from fetched page for stuck-box mechanics |
| opencode ask-outcomes + agent permission frontmatter (same live page): ask offers once/always(session)/reject; per-agent overrides in config or markdown frontmatter (review agent edit-deny example) | https://opencode.ai/docs/permissions/ | T1 | 2026-09-03 | y | v2 ch04 round-3: quoted from fetched page for gate-firing analysis |
| CLAUDE.md hierarchy (managed/user/project/local), @ imports, .claude/rules/ path-scoped rules, auto-memory MEMORY.md (200-line/25KB load cap); "CLAUDE.md is context, not enforcement — use hooks/settings to block" | https://code.claude.com/docs/en/memory | T1 | 2026-08-25 | y | Version-pinned caveats throughout |
| SKILL.md skills with progressive disclosure; slash commands merged into skills (.claude/commands still works); frontmatter controls invocation | https://code.claude.com/docs/en/skills | T1 | 2026-08-25 | y | Spec fields vs extensions distinguished |
| Hooks: full lifecycle (PreToolUse deny, PostToolUse lint, Stop, PreCompact…), matcher/if syntax, command/HTTP/prompt/agent handlers, exit-code-2 blocking; `if` filter FAILS OPEN so prefer permission rules for hard denies | https://code.claude.com/docs/en/hooks | T1 | 2026-08-25 | y | Runnable jq/PowerShell examples |
| Permissions: deny→ask→allow order; Bash(git push *) globs; Read(./.env) path denies; MCP tool globs; managed-settings enforcement independent of model | https://code.claude.com/docs/en/permissions | T1 | 2026-08-25 | y | Candidly documents bypass risks |
| Plan mode (--permission-mode plan) reviews before disk writes; --worktree <name> isolated parallel sessions | https://code.claude.com/docs/en/common-workflows | T1 | 2026-08-25 | y | Worktrees deferred to linked page (not separately fetched) |
| MCP open standard ("USB-C for AI apps"); spec dated 2026-07-28 | https://modelcontextprotocol.io/docs/getting-started/intro | T1 | 2026-07-28 | y | Protocol home |
| Official MCP Registry (preview Sep 2025; API freeze v0.1 Oct 2025): namespace ownership validated via GitHub OAuth/OIDC/DNS/HTTP before publishing | https://github.com/modelcontextprotocol/registry | T1 | 2025-10-24 | y | Preview status flagged; breaking changes possible pre-GA |
| Reference servers (Filesystem/Git/Fetch/Memory/Sequential-Thinking) explicitly labeled educational, NOT production-ready | https://github.com/modelcontextprotocol/servers | T1 | 2026-08 | y | Maintainers warn to evaluate per threat model |
| Malicious npm postmark-mcp incident (see Ch 14) doubles as MCP supply-chain case | https://www.koi.ai/blog/postmark-mcp-npm-malicious-backdoor-email-theft | T2 | 2025-09-25 | y | Corroborated by victim Postmark's own alert |
| opencode plugins hook lifecycle events (.env protection, compaction-prompt override); npm plugins execute at startup — supply-chain consideration | https://opencode.ai/docs/plugins | T1 | 2026-08-25 | y | |
| LSP diagnostics fed back as fix-loop signal; docs honestly weigh sync/memory cost vs running lint/typecheck CLIs directly | https://opencode.ai/docs/lsp/ | T1 | 2026-08-25 | y | Disabled-by-default framing is vendor's own caution |

## Ch 05 — Context engineering

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Context rot: across 18 SOTA LLMs performance degrades non-uniformly with input length even on trivial tasks; distractors compound; replication code published | https://research.trychroma.com/context-rot | T2 | 2025-07-14 | y | Vendor report with public code; controlled but vendor-authored |
| Defining essay: context = finite attention budget; smallest high-signal-token set wins; compaction + structured note-taking + sub-agent architectures are the three long-horizon levers | anthropic.com/engineering/effective-context-engineering-for-ai-agents | T1 | 2025-09-29 | y | Influential vendor engineering blog; non-peer-reviewed |
| Why single-agent beats naive fan-out: share full traces; actions carry implicit decisions; conflicting-context subagents produce fragile systems | https://cognition.ai/blog/dont-build-multi-agents | T2 | 2025-06-12 | y | Opinionated position piece; canonical counterpoint |
| What enters context, itemized with token costs (system prompt, memory, skill descriptions, deferred MCP schemas, file reads); what survives compaction | https://code.claude.com/docs/en/context-window | T1 | 2026-08-25 | y | Token figures illustrative; mechanisms real |
| Compaction semantics: /compact replaces conversation with structured summary; project CLAUDE.md re-reads from disk; invoked skills re-inject capped 5k tokens; PreCompact hooks exist | https://code.claude.com/docs/en/context-window | T1 | 2026-08-25 | y | Cross-checked vs memory doc |
| Memory across sessions: CLAUDE.md + auto-memory dirs per repo shared across worktrees; MEMORY.md index loaded every session | https://code.claude.com/docs/en/memory | T1 | 2026-08-25 | y | Machine-local scope stated |
| Subagent isolation quantified: subagent reads 6,100 tokens in own window, returns 420-token summary; parent auto-memory excluded | https://code.claude.com/docs/en/sub-agents | T1 | 2026-08-25 | y | Matches Cognition reading |
| Tool-level discipline: "GitHub MCP server can easily exceed the context limit"; disable/glob-off unused servers | https://opencode.ai/docs/mcp-servers | T1 | 2026-08-25 | y | Cost tradeoff stated outright |
| Skills as progressive disclosure: body loads only on use; disable-model-invocation keeps side-effecting skills out of context until called | https://code.claude.com/docs/en/skills | T1 | 2026-08-25 | y | |
| Customizable compaction: experimental.session.compacting hook injects/replaces continuation prompt | https://opencode.ai/docs/plugins | T1 | 2026-08-25 | y | Marked experimental |

## Ch 06 — Patterns that ship

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Workflow taxonomy: prompt chaining, routing, parallelization (sectioning/voting), orchestrator-workers, evaluator-optimizer; simplest-thing-that-works; add complexity only when measured | anthropic.com/research/building-effective-agents | T1 | 2024-12-19 | y | Pattern-namers' own essay; points to newer Managed Agents material |
| Spec Kit: /speckit.constitution → specify → plan → tasks → implement → converge; constitution as non-negotiable principles; 131k stars, v1.0.0 Aug 2026 | https://github.com/github/spec-kit | T1 | 2026-08-21 | y | Command names changed over time (now /speckit.*) |
| Origin writeup: four-phase SDD, "intent is the source of truth", greenfield/brownfield/legacy scenarios | github.blog spec-kit announcement | T2 | 2025-09-02 | y | Pre-dates namespaced commands |
| Deep-dive: constitution grounds /plan; /specify excludes tech decisions while /plan owns them; helper scripts enforce consistency; SDD ≠ waterfall | developer.microsoft.com blog spec-driven-development-spec-kit | T2 | 2025-09-15 | y | Contributor-written, promotional-adjacent |
| Reflexion: verbal self-reflection in episodic buffer improves later trials; 91% vs 80% HumanEval pass@1 | arxiv.org/abs/2303.11366 | T1 | 2023-10-10 | y | Peer-reviewed; numbers pre-date modern harnesses |
| Red/green TDD as agent control: tests-first with confirmed failure prevents broken AND unused code; works as one-line prompt | simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/ | T1 | 2026-02-23 | y | Practitioner guidance |
| Tests-written-after-code encode the model's misreadings (tautology problem); contract tests reviewed as spec; hermeticity audit; role-split agents | codewithseb.com test-driven-agentic-development-guide | T1 | 2026-08-01 | y | Synthesis citing third-party dataset study — cite underlying paper too |
| Evals before iteration: unit assertions → human/LLM-judge → A/B; align judge to human on 25–50 examples; missing evals = #1 stall point | https://hamel.dev/blog/posts/evals/ | T1 | 2024-03-29 | y | Named case study (Rechat/Lucy) |
| Plan-first mechanics: read-only plan mode, approve before edits, delegate research to subagents to keep main context clean | code.claude.com/docs/en/common-workflows | T1 | 2026-08-25 | y | Prescriptive |
| Anti-pattern evidence: dispersed decisions + unshared context make multi-agent collaboration fragile | cognition.ai/blog/dont-build-multi-agents | T2 | 2025-06-12 | y | Balanced by Anthropic pro-subagent posts |

## Ch 08 — Good UI with agents

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Screenshot-compare iteration loop prescribed officially (screenshot → compare to design → fix; verify UI visually) | code.claude.com/docs/en/best-practices | T1 | current | y | The closed loop our book practices |
| Design tokens as machine-readable guardrails (name/value/type/alias format) | designtokens.org/TR/2025.10/format/ | T1 | 2026-07-30 | y | CG Draft Report — de facto standard, explicitly NOT W3C Standard |
| WCAG success criteria quick reference for accessibility defaults | w3.org/WAI/WCAG22/quickref/ | T1 | current | y | Normative, stable |
| Component library designed AI-readable ("open code… predictable for your team and LLMs") | ui.shadcn.com/docs | T1 | current | y | Explicit AI-ready principles |
| Utility classes + theme variables as constraint layer for generated CSS | tailwindcss.com/docs | T1 | v4.3 | y | |
| Browser-driving agent tools: screenshots, console, snapshots vs live app | github.com/ChromeDevTools/chrome-devtools-mcp | T1 | current | y | ~50k stars |
| Accessibility-tree snapshot loop alternative | github.com/microsoft/playwright-mcp | T1 | current | y | Documents MCP-vs-CLI tradeoff itself |
| Visual-craft gold standard exemplar | ciechanow.ski/moon/ | T1 | 2024-12-17 | y | Exemplar artifact; no colophon documenting tooling |
| Agents follow existing codebase patterns "almost to a tee" — inverse evidence missing conventions yield generic output | simonwillison.net/2026/Mar/14/pragmatic-summit/ | T1 | 2026-03-14 | y | Anecdotal but leading practitioner |

## Ch 09 — Testing what agents build

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| @playwright/cli: token-cheaper path — does not force page data into LLM, avoids loading schemas/a11y trees; includes show --annotate UI-review dashboard | github.com/microsoft/playwright-cli | T1 | current | y | PRIMARY source for token rationale |
| Playwright MCP for stateful loops when continuous context beats token cost | github.com/microsoft/playwright-mcp | T1 | current | y | README frames tradeoff honestly |
| Trace viewer = reviewable evidence gate for non-coders (screenshots/DOM/network/console per action) | playwright.dev/docs/trace-viewer | T1 | current | y | Runs at trace.playwright.dev locally |
| Measured CLI-vs-MCP context cost: 68-token skill description vs ~3.6k-token MCP schema head-to-head | betterstack.com/community/guides/ai/playwright-cli-vs-mcp-browser | T2 | 2026-02-22 | y | Reproducible hands-on numbers |
| Evals-lite: task + graders + outcome; grade real outcomes; read transcripts; maintain suites like tests | anthropic.com/engineering/demystifying-evals-for-ai-agents | T2 | 2026-01-09 | y | Vendor blog written by team running these evals |
| "Tests are effectively free now… no longer optional"; manual curl checks as acceptance | simonwillison.net/2026/Mar/14/pragmatic-summit/ | T1 | 2026-03-14 | y | First-person transcript |
| Conformance-suite trick: cross-framework passing suite first, then implement against it | simonwillison.net/2026/Mar/14/pragmatic-summit/ | T1 | 2026-03-14 | y | Worked example included |
| Performance traces as acceptance checks via browser-driving agent | github.com/ChromeDevTools/chrome-devtools-mcp | T1 | current | y | "Check performance of <url>" pattern |
| Third-party explainer corroborating CLI-as-token-efficient-alternative | testcollab.com/blog/playwright-cli | T3 | 2026-02-12 | y | Corroboration, not primary |

## Ch 10 — Debugging when it breaks

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| git bisect binary-searches bug-introducing commit; bisect run automates | git-scm.com/docs/git-bisect | T1 | v2.55.0 | y | Canonical manual |
| Reproduce-first discipline: paste symptom, demand failing test, fix root cause not suppress error; escape hatches (/rewind checkpoints, /clear after two failed corrections, Stop-hook caps) | code.claude.com/docs/en/best-practices | T1 | current | y | Encodes escape hatches officially |
| Environment-quality advice: log everything to one file, fast feedback, defensive commands; abort & restart when compaction hits | lucumr.pocoo.org/2025/6/12/agentic-coding/ | T1 | 2025-06-12 | y | Ronacher |
| Reading logs/stack traces: console messages with source-mapped stacks, network inspection | github.com/ChromeDevTools/chrome-devtools-mcp | T1 | current | y | Capabilities + limits documented |
| Post-failure forensics: trace viewer Errors/Console/Network tabs tied to action timeline; trace-on-first-retry CI workflow | playwright.dev/docs/trace-viewer | T1 | current | y | Standard artifact flow |
| Agents must exercise what they build (boot server, curl API) and show evidence, not assert success | simonwillison.net/2026/Mar/14/pragmatic-summit/ | T1 | 2026-03-14 | y | Showboat evidence-document workflow |
| Packaged systematic-debugging skill: root-cause tracing backward through call stack | github.com/obra/superpowers/blob/main/skills/debugging/root-cause-tracing/SKILL.md | T1 | current | y | Jesse Vincent library, highlighted by Willison |
| Systematic production-agent debugging: normalize trajectories, earliest failing step, replay failures as test artifacts | tianpan.co/blog/2026-02-19-systematic-debugging-ai-agents-production | T2 | 2026-04-15 upd | y | Sound synthesis, not independently reviewed |

## Ch 11 — Brownfield reality

| claim | URL | tier | as-of | fetched | note |
|---|---|---|---|---|---|
| Repo maps: graph-ranked symbol map lets LLMs edit large existing codebases within token budgets (--map-tokens budget) | aider.chat/docs/repomap.html | T1 | current | y | Construction + ranking algorithm explained |
| Why code context (find→relate→change) is the hard part; tree-sitter extraction | aider.chat/2023/10/22/repomap.html | T1 | 2023-10-22 | y | Foundational writeup |
| Spec Kit official guide: adopt SDD safely in established codebases | github.github.com/spec-kit/guides/existing-projects.html | T1 | 2026-08 site | y | Dedicated Existing Projects track |
| Brownfield gap discussion: greenfield templates don't fit; reverse-engineering constitutions | github.com/github/spec-kit/issues/1436 | T3 | opened 2026-01-06 · closed by 2026-08-26 check | y | Closed; kept as community-signal evidence — content still supports the point, unofficial status |
| Understand-before-edit: explore → plan → implement → commit; leads with giving the agent a way to verify its work; subagents investigate to keep main context clean; anti-pattern: infinite exploration | code.claude.com/docs/en/best-practices | T1 | current | y | Four-phase workflow |
| Large-codebase agent ergonomics: local reasoning, grep-ability, aliasing/refactor priorities under agents | lucumr.pocoo.org/2026/2/9/a-language-for-agents/ | T1 | 2026-02-09 | y | Opinionated first-person analysis |
| Safe-refactoring vocabulary: cataloged behavior-preserving moves agents can execute mechanically | refactoring.com/catalog/ | T1 | current | y | Fowler canon |
| Conventions steer agent quality in existing repos ("first person to use Redis must do it perfectly") | simonwillison.net/2026/Mar/14/pragmatic-summit/ | T1 | 2026-03-14 | y | Qualitative, consistent |
| Enterprise brownfield case study: spec-kit phases on legacy portal; ~0.8^5 compounding justifies per-phase review gates | epam.com insights using-spec-kit-for-brownfield-codebase | T2 | 2025-12-30 | y | Single-project sample |

---

## Merged gaps — binding instructions for chapter drafting

1. **Gemini free-tier numbers**: ai.google.dev resisted direct fetch; no public fixed RPM/RPD grid remains. Ch 03 teaches the "open AI Studio → check live limits" WORKFLOW instead of quoting a dead table. Re-fetch ai.google.dev/gemini-api terms when drafting Ch 16's training-on-free-tier claim.
2. **z.ai/GLM pricing + training clause**: official subscribe/legal pages render empty via fetch. Draft Ch 15/16 with the T1 silence-is-citable framing + T3 corroboration labeled as community-reported; do not assert prices without re-verification.
3. **GitHub Models retirement (2026-07-30)**: drop entirely as a $0 path anywhere it appeared in earlier outlines. Successor candidates (Copilot plan-gated quotas, Azure Foundry free tier) need verification before mention.
4. **Cursor CLI licensing/free-tier limits**: unverified on docs page. Appendix A marks it "verify against ToS" or fetch cursor.com/terms before print.
5. **Playwright token benchmark (~114k vs ~27k tokens/task)**: appears only in T2/T3 writeups. State direction from Microsoft repos (T1) and label the specific numbers as third-party-measured.
6. **Gauntlet pattern has no quantitative validation**: nearest anchors are evaluator-optimizer, Reflexion, Hamel's judge alignment. The book presents gauntlets as practitioner craft (with our own build as running evidence), never as studied fact.
7. **Roo Code archived 2026-05-15**: harness table lists it as historical with ZooCode successor noted.
8. **Karpathy original posts**: cite archive.is snapshot, never bare x.com links.
9. **GitClear "AI code duplication" reports**: gated vendor data (T2) — usable only with vendor-conflict caveat, or cut.
10. **Non-coder review-gate guidance + Claude-in-Chrome consumer docs**: fetch before Ch 09 drafts them as citations.
