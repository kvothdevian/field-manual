# The Agentic Coding Field Manual

A visual, opinionated book that teaches students to ship real software with
coding agents — opencode, Claude Code, Codex, Gemini CLI and friends — using
$0-first tools, honest grey-zone coverage, and receipts behind every claim.

Built as plain multi-page HTML. No framework. Works offline over file://.

## Read it

Open `index.html` in any browser. Or serve it:

```
npx serve .
```

## State & governance

| File | What it is |
|---|---|
| `DECISIONS.md` | Locked decisions log (append-only) |
| `STATUS.md` | Phase board + milestone log — disk memory between sessions |
| `AGENTS.md` | Rules for agent sessions working on this repo |
| `docs/coverage-matrix.md` | Exhaustiveness contract: dimensions × chapters |
| `progress.html` | Live progress page for humans |

## Rebuild search index

After editing any HTML:

```
node scripts/build-index.mjs
```

## Status

P0 scaffold complete. Phases P1–P5 tracked in STATUS.md. Local git only until P5.
