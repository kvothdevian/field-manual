// validate-v2.mjs — deterministic gate for the v2 rebuild (monograph-writing rule:
// a batch closes only at zero errors). Stdlib only. Usage:
//   node v2/scripts/validate-v2.mjs v2/chapters/ch01/index.html   (one chapter)
//   node v2/scripts/validate-v2.mjs --book                          (whole book)
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, resolve, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const V2 = join(ROOT, "v2");
const LEDGER = join(ROOT, "docs", "source-ledger.md");
const BANNED = ["delve", "tapestry", "game-changer", "cutting-edge", "seamless", "it's important to note"];
const PROSE_MIN = 2200, PROSE_MAX = 3200, BRIEF_MAX = 500;

let errors = [], warns = [];
const err = (f, m) => errors.push(`${f}: ERROR ${m}`);
const warn = (f, m) => warns.push(`${f}: WARN ${m}`);

function ledgerUrls() {
  const txt = readFileSync(LEDGER, "utf8");
  return new Set([...txt.matchAll(/https?:\/\/[^\s|)]+/g)].map(m => m[0].replace(/[.,;]+$/, "")));
}

function words(html) {
  let t = html.replace(/<pre[\s\S]*?<\/pre>/g, " ").replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
  t = t.replace(/&(nbsp|amp|lt|gt|quot);/g, " ");
  return t.split(/\s+/).filter(Boolean).length;
}

function checkChapter(file, urls) {
  const html = readFileSync(file, "utf8");
  const has = (re) => re.test(html);
  // required blocks (VOICE.md structure)
  if (!has(/<h1[\s>]/)) err(file, "missing <h1>");
  if (!has(/class="lede"/)) err(file, "missing .lede outcome promise");
  // briefing budget (VOICE.md): section[aria-label] or class briefing, prose only
  const bStart = html.search(/aria-label="Briefing"|class="briefing"/);
  if (bStart < 0) err(file, "missing briefing section");
  else {
    const bHtml = html.slice(bStart, html.indexOf("</section>", bStart));
    const bWords = bHtml.replace(/<pre[\s\S]*?<\/pre>/g, " ").replace(/<[^>]+>/g, " ")
      .split(/\s+/).filter(Boolean).length;
    if (bWords > BRIEF_MAX) err(file, `briefing ${bWords} words (max ${BRIEF_MAX})`);
  }
  const steps = html.match(/class="step"/g) || [];
  if (steps.length < 3) err(file, `only ${steps.length} session steps (min 3)`);
  if (steps.length > 6) warn(file, `${steps.length} session steps (max 6)`);
  for (const cls of ["paste", "term", "verify", "stuck", "checkpoint", "receipts", "pager"]) {
    if (!has(new RegExp(`class="${cls}"`))) err(file, `missing .${cls} block`);
  }
  // visuals: HTML-first budget — >=3 visual blocks in >=3 forms, max 1 SVG.
  // visual block = <figure> | .diff | .term | .stat-strip | .timeline | <table>
  const figures = [...html.matchAll(/<figure[\s>]/g)].length;
  const tables = [...html.matchAll(/<table[\s>]/g)].length;
  const svgs = [...html.matchAll(/<svg[\s>]/g)];
  const htmlVisuals = (html.match(/class="(diff|term|stat-strip|timeline)"/g) || []).length;
  const visualTotal = figures + tables + htmlVisuals;
  if (visualTotal < 3) err(file, `only ${visualTotal} visual blocks (min 3: 1 signature + 2 HTML infographics)`);
  if (svgs.length > 1) err(file, `${svgs.length} SVGs (max 1 signature SVG; build the rest in HTML)`);
  for (const [i, m] of [...html.matchAll(/<svg[\s\S]*?>([\s\S]*?)<\/svg>/g)].entries()) {
    if (!/aria-label=|role="img"/.test(m[0])) err(file, `figure ${i + 1} has no accessible name`);
  }
  if (!has(/<figcaption>(<[^>]+>)*Fig\. \d+ —/)) err(file, "figcaption must start 'Fig. N —'");
  const forms = new Set([...html.matchAll(/class="(diff|term|stat-strip|timeline)"/g)].map(m => m[1]));
  if (svgs.length) forms.add("svg");
  if (tables) forms.add("table");
  if (figures > forms.size) forms.add("figure");
  if (forms.size < 3) err(file, `only ${forms.size} visual forms (min 3 different forms)`);
  // receipts: every URL must be a ledger row (closed world)
  const pageUrls = [...html.matchAll(/https?:\/\/[^\s"'<|)]+/g)].map(m => m[0].replace(/[.,;]+$/, ""));
  const seen = new Set();
  for (const u of pageUrls) {
    if (u.includes("cdn.jsdelivr.net") || u.includes("w3.org")) continue; // infra, not claims
    if (!urls.has(u) && !seen.has(u)) err(file, `URL not in source ledger: ${u}`);
    seen.add(u);
  }
  // internal links resolve
  const dir = dirname(file);
  for (const m of html.matchAll(/href="(?!https?:|#|mailto:)([^"]+)"/g)) {
    const target = resolve(dir, m[1].split("#")[0]);
    if (!existsSync(target)) err(file, `broken internal link: ${m[1]}`);
  }
  // banned phrases + budgets
  const lower = html.toLowerCase();
  for (const b of BANNED) if (lower.includes(b)) err(file, `banned phrase: "${b}"`);
  const n = words(html);
  if (n < PROSE_MIN) warn(file, `thin prose: ~${n} words (min ${PROSE_MIN})`);
  if (n > PROSE_MAX) warn(file, `bloated prose: ~${n} words (max ${PROSE_MAX})`);
  return { steps: steps.length, visuals: visualTotal, words: n };
}

function main() {
  const args = process.argv.slice(2);
  const urls = ledgerUrls();
  let files = [];
  if (args.includes("--book")) {
    // whole-book checks run against the ASSEMBLED book (ids namespaced
    // at build). Build first: node v2/scripts/build-book-v2.mjs
    const book = join(V2, "book.html");
    if (!existsSync(book)) { console.log("no v2/book.html — run build-book-v2.mjs first"); return; }
    const html = readFileSync(book, "utf8");
    const ids = new Map();
    for (const m of html.matchAll(/id="([^"]+)"/g)) {
      if (ids.has(m[1])) err("book.html", `duplicate id "${m[1]}"`);
      else ids.set(m[1], 1);
    }
    const dir = join(V2, "chapters");
    for (const d of readdirSync(dir)) {
      const f = join(dir, d, "index.html");
      if (existsSync(f)) files.push(f);
    }
  } else {
    files = args.filter(a => !a.startsWith("--"));
    if (!files.length) { console.log("usage: validate-v2.mjs <chapter.html> | --book"); process.exit(2); }
  }
  for (const f of files) {
    if (!existsSync(f)) { err(f, "file not found"); continue; }
    const s = checkChapter(f, urls);
    console.log(`ok ${f} (steps ${s.steps}, visuals ${s.visuals}, ~${s.words}w)`);
  }
  console.log(`\n${errors.length} errors, ${warns.length} warns`);
  for (const e of errors) console.log("  " + e);
  for (const w of warns) console.log("  " + w);
  process.exit(errors.length ? 1 : 0);
}
main();
