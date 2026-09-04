# Brief ch03 — "Models without money" (four $0 doors, all opened)

Status: PROPOSED — batch approval with ch04–ch06. Frozen on approval.

## Outcome promise

Run frontier-class models for $0 through four doors — subscription
reuse, free tiers, cheap open-weight APIs, fully local — wired into
opencode, with the rate-limit wall of each door measured, not rumored.

## Coverage dimensions (matrix-bound)

Model access: free tiers & routing (●) · open-weight models (●) ·
local inference Ollama/LM Studio (●) · subscription reuse (●) ·
grey-zone flags where met (◐) · cost/rate-limit math (◐, shared w/ ch15).

## Venue

Scratch repo + opencode model switching. Executed: at least one $0
model run per door where auth allows (OpenRouter :free via existing
credential; Ollama if installed — check at packing; subscription reuse
via Aman's own subs). Doors that need keys Aman lacks → ledger-backed
+ reader-run, labeled.

## Briefing (≤500w)

The four doors + the one rule: free tiers are rate-limited funnels,
not gifts. GitHub Models is DEAD (retired 2026-07-30 — present as
cautionary tale, never as path). Training-data tradeoffs flagged
per door (OpenRouter opt-outs, Gemini unpaid-tier training, Mistral
Experiment tier).

## Visuals — trio {svg, stat-strip, timeline}

1. **Fig. 3 — four doors (signature SVG).** Funnel diagram:
   subs / free-tiers / open-APIs / local → opencode. Answers: "where
   does $0 actually come from?"
2. **Rate-limit stat strip.** Groq 30RPM/1K-day, OpenRouter :free
   20RPM/50-day, Gemini OAuth 60/1000 — re-verified at packing.
3. **Door timeline.** Open door 1→4 in one evening: what worked,
   what 429'd, what it cost ($0).

## Session (5 steps)

1. Door 1 subscription reuse (opencode providers, ChatGPT/Copilot OAuth).
2. Door 2 free tier (OpenRouter :free model, feel the 20RPM wall).
3. Door 3 open-weight API (Groq/DeepSeek/Kimi cheapest viable).
4. Door 4 local (Ollama + opencode integration, ≥64k-context models).
5. Scorecard: $/1M tokens, limits, quality on the fixed prompt.

## Evidence

Ledger ch03 rows (Groq, Gemini, OpenRouter, Mistral, Cerebras,
DeepSeek CORRECTED, Kimi, Qwen, Ollama, sub-reuse) + ch16 rows
(token buckets, training tradeoffs). Re-verify ALL numeric limits
live — fastest-churning facts in the book.

## Teach test

Reader wires a $0 model into opencode solo and states its limits
from measurement. Adversary fails any door without an executed run
or an explicit labeled reader-run.
