# Brief ch11 — "Brownfield reality" (map first, touch last)

Status: PROPOSED — batch approval with ch07–ch10. Frozen on approval.

## Outcome promise

Never let an agent edit code you didn't write without all three: a
reversible baseline, a read-only neighborhood map, and a written
blast-radius.

## Coverage dimensions (matrix-bound)

Repo maps + token budgets (●) · verify-first precondition (●) ·
explore→plan→implement→commit arc (●) · refactoring moves (●) ·
legibility/conventions (●) · specs on inherited ground (●).

## Venue

Scratch repo `inherited-shop/` (exactly 3 files: tangled `shop.js`
w/ stale `legacyCartTotal` trap + `rates.js` truth table +
`shop.test.js` pinned cases, plain `node --test`). Executed:
baseline branch, read-only map, behavior pinning, blast-radius
plan approved before a 1-file surgical diff, optional break-it-on-
purpose contrast. Book-only.

## Briefing (≤500w)

Brownfield in one paragraph (reads fast, zero inherited intuition)
→ the arithmetic (no working context holds a whole repo;
compression with judgment: sketch first, expand where the change
lands, edit last) → maps (parse → graph-rank → pack under budget;
budget buys visibility; you choose which blindness matters) →
understand-before-edit arc (verify-first → explore → plan naming
untouched files → smallest change → reviewed commit; timebox ends
when the plan can be stated) → refactoring vocabulary (safe move +
tiny obvious one, each verifiable) → legibility (exemplar module
steers cheaper than rule lists) → specs on inherited ground
(characterize current, spec the delta, house rules; EPAM single-
sample caveat in view) → breaks-down: maps rank symbols, not
coupling — pair every map with runtime verification.

## Visuals — quad {svg, term, rails, diff}

1. **Fig. 11 — the budget funnel (signature SVG).** 400-file repo →
   ranked → budget choke → visible map + KNOW/MISS split.
   Answers: "what does the agent actually see at this budget?"
2. **Neighborhood-map terminal.** Step-2 paste + expected map
   output, per-line roles. Doubles as step-2 expectation.
3. **Blast-radius rails.** Read-only → planned → surgical lanes,
   untouched files walled off shape+label.
4. **Pin + surgical diff.** Characterization pin beside the 1-file
   rate change.

## Session (4–5 steps)

1. Branch before you brief: baseline commit + `agent-fix` branch,
   clean status verified.
2. Map read-only: map names entry/hubs/tests/suspect duplicate;
   `git status` still clean; MAP-NOTES names the pinning test.
3. Pin behavior: test-run report only, no source edits; duplicate
   path reported unpinned.
4. Surgical edit in a written blast-radius: plan (touch/NOT-touch/
   pinning test) approved → go; `git diff --stat` = 1 file, every
   line explained, tests green.
5. (optional) Break it on purpose: same change via the duplicate —
   feel what the map saved you.

## Evidence

Ledger ch11 rows (Fowler catalog, Ronacher legibility, Willison
conventions, aider repomap rationale + mechanics, Claude arc,
Spec Kit existing-projects, spec-1436 lead-labeled, EPAM w/ full-URL
repair + single-sample caveat). New rows: aider default map budget
(if stated as fact); characterization-test discipline (Feathers or
practitioner essay); working-context arithmetic (or downgrade to
illustrative, no number); opencode explore mechanics if claimed.
Re-verify Claude wording + Spec Kit track URL live.

## Teach test

Every edit step shows all three: reversible baseline, map naming
the pinning test, written blast-radius. Adversary fails any session
whose diff lands without a named pinning test or on an
unprotected checkout.
