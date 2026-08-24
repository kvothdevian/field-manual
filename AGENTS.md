# AGENTS.md — The Agentic Coding Field Manual (book)

A visual HTML book teaching students to ship real software with coding agents.
Plain HTML/CSS/JS, zero dependencies, must keep working over `file://`.
Standalone repo at `C:\Users\Aman\Projects\field-manual`. The visual system is
vendored in `DESIGN.md` (binding); threaded build specs live at
`C:\Users\Aman\Projects\journey\builds\<slug>\BUILD.md`; the Critical Teacher
persona from `..\journey\AGENTS.md` applies EXCEPT milestone quizzes, which are
waived for this project (DECISIONS #17).

## Commands

- Regenerate search index after any content change: `node scripts/build-index.mjs`
- Preview locally: open `index.html` directly in a browser (file:// works), or
  `npx serve .` if a local server is preferred.

No framework, no build step beyond the index script. Do not introduce one
without a superseding DECISIONS.md row.

## Read before working

1. `DECISIONS.md` — every locked decision. Never contradict; supersede in writing.
2. `STATUS.md` — current phase, next actions, milestone log.
3. `docs/coverage-matrix.md` — the exhaustiveness contract.
4. `DESIGN.md` — binding visual system (vendored from journey/design.md). No blue.

## Chapter contract (every chapter MUST have)

Copy `chapters/template.html`. Required blocks:

- **Header:** part plate (L-color), chapter number + title, one-line promise,
  `as of <date>` stamp on anything time-sensitive.
- **Generalized teaching first** — technique explained tool-agnostically before
  any specific harness appears.
- **Receipts** — every factual claim carries a source card: URL, tier badge
  (T1 official/practitioner · T2 vendor blog · T3 lead-only), as-of date.
  Unverifiable claims get cut or labeled unverified. T3 is never cited as fact.
- **Threaded build tie-in** — what this technique does inside the current build.
- **Exercises** — try-it checkpoints a non-coder can follow (exact clicks).
- **Self-check** — 3 comprehension questions with collapsed answers.
- **Beyond this build** — where else the pattern applies, alternate tools,
  and where it breaks down.
- Prev/next footer links wired into toc order.

## Source ledger protocol

All research lands in `docs/source-ledger.md` BEFORE chapter drafting:
URL · claim supported · tier · as-of date · fetched-live? (y/n). Chapters may
only cite rows from the ledger. P1 builds the ledger; later phases append.

## Gauntlet protocol (per piece)

Builder and critic are separate agents with fresh context. Critic fetches the
real bars and compares blind, labels stripped:

- Visual bar: Bartosz Ciechanowski's essays — https://ciechanow.ski/
- Content bar: Anthropic Claude Code best practices —
  https://code.claude.com/docs/en/best-practices

Critic says which wins, names the single biggest gap, returns to builder.
Binary verdicts only, no scores. Exit = critic picks ours blind or Aman stops
the run. Never exit on a round count.

## Workflow rules

1. Conventional commits (`feat:`, `fix:`, `docs:`, `content:`), small commits.
2. Every milestone: update STATUS.md milestone log AND progress.html together.
3. Local git only. No remote push before P5 (DECISIONS #12).
4. Never commit secrets. There should be none — the book is static content.
5. Accessibility floor per DESIGN.md (semantic HTML, 3px ink focus rings,
   ≥38px tap targets, prefers-reduced-motion honored, shape+label never color alone).
6. Dark theme tokens are first-class — any new component defines both themes.
7. Search index regenerated (`node scripts/build-index.mjs`) before any commit
   that touched HTML.
