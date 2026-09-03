// build-book-v2.mjs — append-style assembly: recompiles v2/book.html from
// v2/chapters/chNN/index.html in TOC order after every approved chapter.
// Stdlib only. Usage: node v2/scripts/build-book-v2.mjs
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const V2 = join(ROOT, "v2");
const dirs = readdirSync(join(V2, "chapters"))
  .filter(d => /^ch\d{2}$/.test(d) && existsSync(join(V2, "chapters", d, "index.html")))
  .sort();

const css = readFileSync(join(V2, "assets", "css", "style-b.css"), "utf8");
let toc = "", body = "", n = 0;
for (const d of dirs) {
  const html = readFileSync(join(V2, "chapters", d, "index.html"), "utf8");
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, d])[1];
  const main = (html.match(/<main>([\s\S]*)<\/main>/) || [, ""])[1];
  const id = "v2-" + d;
  toc += `<li><a href="#${id}">${title}</a></li>\n`;
  body += `<section id="${id}" class="book-chapter">\n${main}\n</section>\n`;
  n++;
}
const out = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Agentic Coding Field Manual — v2 book (${n} sessions)</title>
<style>\n${css}\n.book-chapter{border-top:3px solid var(--ink);margin-top:3rem;padding-top:1rem;}\n</style>
</head>
<body>
<main>
<p class="kicker">v2 book · compiled ${new Date().toISOString().slice(0, 10)} · ${n} sessions</p>
<h1>The Agentic Coding Field Manual — v2</h1>
<ol>\n${toc}</ol>
${body}
</main>
</body>
</html>`;
writeFileSync(join(V2, "book.html"), out, "utf8");
console.log(`v2/book.html: ${n} chapters, ${out.length} bytes`);
