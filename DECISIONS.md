# DECISIONS.md — The Agentic Coding Field Manual

Locked decisions from planning (Aug 2026). Append-only: new rows go at the
bottom, never edit history. If a decision changes, add a superseding row that
names the one it replaces.

| # | Date | Decision | Rationale |
|---|------|----------|-----------|
| 1 | 2026-08-24 | Audience = students/learners, zero assumed knowledge | Aman wants to learn, not just reference; fundamentals taught alongside agentic coding |
| 2 | 2026-08-24 | Budget = $0 core + pay-per-use where dramatically better (<$20/mo documented) | Book must be followable for free end-to-end |
| 3 | 2026-08-24 | Grey zone = include risky tricks (unofficial relays etc.) clearly flagged with risk warnings and death-forecasts | Practical honesty beats sanitized theory; readers deserve to know what exists |
| 4 | 2026-08-24 | Format = multi-page static site (nav, search, dark mode), GitHub Pages at P5 | Chosen over single-file for navigation and search |
| 5 | 2026-08-24 | Teaching style = threaded projects built chapter by chapter | Techniques land on real code, not toys |
| 6 | 2026-08-24 | Voice = opinionated practitioner with receipts — every claim linked, as-of dated, reliability-rated | Trust through verifiability |
| 7 | 2026-08-24 | Quality bars (dual): Bartosz Ciechanowski's essays (ciechanow.ski) for visual craft + Anthropic Claude Code best-practices page for content authority | Named, fetchable, comparable — blind A/B by critics |
| 8 | 2026-08-24 | Scope = full encyclopedia (~16 chapters + appendices), coverage matrix guarantees exhaustiveness | User demanded exhaustive AND generalized — projects are the spine, never the scope |
| 9 | 2026-08-24 | Threaded build ladder from `../builds/`: agent-cost-compass (WEEKEND) → ncert-quiz-forge (TWO-WEEK) → free-tier-atlas (SIX-WEEK) | Escalating complexity matches book arc; all $0-native; specs already exist as BUILD.md files |
| 10 | 2026-08-24 | Every chapter teaches technique tool-agnostically FIRST, then demonstrates on the project; every chapter ends with "Beyond this build" section + exercises + self-checks | Generalization guarantee — lessons transfer beyond the three builds |
| 11 | 2026-08-24 | Execution = phased gauntlet (P0 scaffold → P1 research wave → P2 foundations+build1 → P3 craft+build2 → P4 ship/pipelines+build3 → P5 integration+deploy); each phase resumes from disk state | Single session cannot hold this at quality; filesystem is the memory |
| 12 | 2026-08-24 | Local git only until P5, then push to GitHub + enable Pages | Per Aman |
| 13 | 2026-08-24 | Repo location `journey/book` — inherits journey/design.md tokens and AGENTS.md persona | Sibling of builds/; visual identity unified |
| 14 | 2026-08-24 | Source discipline = three tiers: T1 official docs + established practitioners (verify before cite); T2 vendor blogs (flag as marketing); T3 X/Reddit/SEO farms (leads only, never cited as fact) | Reliability rating printed on every receipt in the book |
| 15 | 2026-08-24 | Part colors reuse journey route palette L0–L5 (saffron/coral/olive/jade/plum/rose) — six parts, six lines | Zero new hues; color routes, never decorates |
| 16 | 2026-08-24 | SUPERSEDES #13: repo relocated to `C:\Users\Aman\Projects\field-manual`, standalone; design system vendored internally as `DESIGN.md`; journey/builds referenced by absolute path | Per Aman — book gets its own dedicated folder |
| 17 | 2026-08-24 | Milestone quizzes waived for this project (journey persona rule #4 does not apply here) | Per Aman |
| 18 | 2026-08-25 | EMPHASIS POLICY: center of gravity = mastering the modern agentic workflow itself (vibe coding done right). $0 access stays as an on-ramp chapter only; cost + grey zones merge into ONE compact reference chapter (Ch 15 'Costs, limits & grey zones'); freed slot becomes Ch 16 'Your daily agentic workflow' - capstone habits chapter. Security (Ch 14) unchanged - safety is craft, not cost-talk | Per Aman - main purpose is learning modern vibe coding; never let money-talk crowd out the craft |
| 20 | 2026-09-03 | V2 REBUILD (supersedes the v1 chapter contract #10 in form, not in spirit): full rewrite into `v2/` alongside v1; v1 stays shipped until v2 replaces it. Every v2 chapter = briefing (condensed theory, ≤5 min) → session track (numbered steps: goal → paste-this-prompt → expect-this-output → verify → if-stuck fix) → checkpoint (prove it worked) → receipts (collapsed by default) | Per Aman: too theoretical, wants output-driven learning; theory stays but serves the session |
| 21 | 2026-09-03 | V2 sessions default to opencode; Claude Code / Codex CLI / Gemini CLI differences noted inline as variant lines, never as parallel tracks | Per Aman; keeps sessions copy-pasteable instead of matrix-hedged |
| 22 | 2026-09-03 | V2 full UX + visual redesign: course-shaped (start-here CTA, session progress via localStorage, step rails), new visual language (terminal blocks with annotated output, diff views, one diagram grammar per concept). Constraints kept: plain HTML/CSS/JS, zero dependencies, works over file://, no blue, dark theme first-class, a11y floor | Per Aman; DESIGN.md tokens may be replaced by a v2 token file, recorded here when it happens |
| 23 | 2026-09-03 | V2 keeps from v1: tiered receipts ledger (T1/T2/T3 + as-of), threaded builds as session venues, gauntlet quality loop per piece | The trust system and real-project spine were working; only the teaching form changes |
