# The Agentic Coding Field Manual

Sixteen sessions. Each one ends with output running on your machine.
Theory arrives as briefings; the session does the teaching — opencode
default, $0-first, receipts behind every claim.

Built as plain multi-page HTML. No framework. Works offline over file://.

Live at https://kvothdevian.github.io/field-manual/ (v1 preserved on git tag `v1-final`).

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
| `VOICE.md` | Voice + structure + budgets (binding on every session) |
| `registry.jsonl` | Locked terms, conventions, protocols |
| `briefs/` | Frozen per-session build contracts |
| `docs/source-ledger.md` | Tiered citation ledger — every claim traces here |
| `docs/coverage-matrix.md` | Exhaustiveness contract: dimensions × chapters |

## Validate + rebuild the single-page edition

After editing any chapter:

```
node scripts/validate-v2.mjs --book
node scripts/build-book-v2.mjs
```

(`book.html` is a local-only artifact — git-ignored by design, never deployed.)

## Status

v2 rebuild complete: 16/16 sessions shipped, validator zero-errors. See STATUS.md.
