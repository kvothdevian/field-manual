import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const CH = join(ROOT, "chapters");
const css = readFileSync(ROOT + "assets/css/book.css", "utf8");
const boot = `<script>(function(){var t;try{t=localStorage.getItem("fm-theme")}catch(e){}if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t})();</script>`;

// discover chapter pages (each chapter is now one independent page: chapters/chNN/index.html)
// for singular edition we split each chapter back into its h2-anchored sections
const sections = [];
for (const dir of readdirSync(CH).filter(d => /^ch\d{2}$/.test(d)).sort()) {
  const nn = dir.slice(2);
  const chapterPath = join(CH, dir, "index.html");
  let chTitle = `Chapter ${nn}`;
  let mainHtml = "";
  try {
    const home = readFileSync(chapterPath, "utf8");
    const t = home.match(/<title>(.*?) — The Agentic/i);
    if (t) chTitle = t[1].trim();
    const m = home.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    mainHtml = m ? m[1] : "";
  } catch {}
  // split mainHtml into sections by <h2 id="chNN-sN">
  const h2Re = new RegExp(`<h2 id="ch${nn}-s\\d+"[^>]*>[\\s\\S]*?</h2>`, "g");
  const h2s = [...mainHtml.matchAll(h2Re)];
  if (h2s.length === 0) {
    sections.push({ file: chapterPath, nn, chTitle, inner: mainHtml });
  } else {
    for (let i = 0; i < h2s.length; i++) {
      const start = h2s[i].index;
      const end = i + 1 < h2s.length ? h2s[i + 1].index : mainHtml.length;
      const chunk = mainHtml.slice(start, end);
      sections.push({ file: chapterPath, nn, chTitle, inner: chunk });
    }
  }
}

function inner(entry) {
  if (entry.inner !== undefined) {
    return entry.inner
      .replace(/<nav class="chapnav"[\s\S]*?<\/nav>\s*/gi, "")
      .replace(/<div class="inside-grid"[\s\S]*?<\/div>\s*/gi, "")
      .replace(/<nav class="pager"[\s\S]*?<\/nav>\s*/gi, "");
  }
  const html = readFileSync(entry.file, "utf8");
  const m = html.match(/<main[\s>]*>([\s\S]*)<\/main>/i);
  return m[1]
    .replace(/^\s*<p class="as-of">[\s\S]*?<\/p>/i, "")
    .replace(/<nav class="pager"[\s\S]*?<\/nav>\s*/gi, "");
}

let toc = "";
let body = "";
sections.forEach((s, i) => {
  const id = `b${String(i + 1).padStart(2, "0")}`;
  const raw = inner(s);
  const secTitle = (raw.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] ?? "").replace(/<[^>]+>/g, "").trim();
  toc += `<a class="toc-title" href="#${id}">${s.nn} · ${secTitle}</a>`;
  body += `<section class="book-part" id="${id}" data-chapter="${s.chTitle}">${raw}</section>`;
});

const out = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Agentic Coding Field Manual — singular edition</title>
${boot}
<style>
${css}
.book-cover{max-width:1080px;margin:0 auto;padding:4rem clamp(1rem,4vw,3rem) 2rem;}
.book-toc{max-width:1080px;margin:0 auto;padding:0 clamp(1rem,4vw,3rem) 1rem;display:flex;flex-direction:column;gap:.35rem;}
.book-toc .toc-title{text-decoration:none;font-size:.9rem;border-left:3px solid var(--line-strong);padding-left:.7rem;}
.book-toc .toc-title:hover{border-color:var(--l0);}
main.book-body{max-width:900px;}
.book-part{padding-top:3rem;border-top:6px solid var(--line-strong);margin-top:3rem;}
.book-part::before{content:attr(data-chapter);display:block;font-family:var(--font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:1rem;}
</style>
</head>
<body>
<header class="site-head">
  <span class="brand"><span class="roundel">अ</span> <span>field manual · singular edition</span></span>
  <nav class="site-nav"><a href="#cover">top</a> <a href="#contents">contents</a></nav>
  <div class="head-tools"><button class="theme-btn" type="button"></button></div>
</header>
<main class="book-cover" id="cover">
  <p class="as-of">अ Man Learns Things · compiled ${new Date().toISOString().slice(0, 10)} · ${sections.length} sections</p>
  <h1>The Agentic Coding<br>Field Manual</h1>
  <p class="lede">One file. Everything offline. Master the modern agentic workflow —
  prompting patterns that survive production, UI craft, testing discipline,
  daily habits — with receipts behind every claim.</p>
</main>
<nav class="book-toc" id="contents" aria-label="Contents">${toc}</nav>
<main class="book-body">${body}</main>
<footer class="site-foot"><span>the agentic coding field manual</span><span>singular edition · works offline</span></footer>
<script src="assets/js/theme.js"></script>
</body>
</html>
`;
writeFileSync(ROOT + "book.html", out, "utf8");
console.log(`book.html compiled: ${sections.length} sections from ${new Set(sections.map(s => s.nn)).size} chapters, ${(out.length / 1024).toFixed(0)} KB`);
