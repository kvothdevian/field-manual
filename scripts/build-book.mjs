import { readFileSync, writeFileSync } from "node:fs";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const ORDER = [
  ["01", "What agentic coding actually is", "chapters/ch01-what-agentic-coding-is.html"],
  ["02", "The harness landscape", "chapters/ch02-the-harness-landscape.html"],
  ["03", "Models without money", "chapters/ch03-models-without-money.html"],
  ["04", "Configuring your agent properly", "chapters/ch04-configuring-your-agent.html"],
  ["05", "Context engineering", "chapters/ch05-context-engineering.html"],
  ["06", "Patterns that ship", "chapters/ch06-patterns-that-ship.html"],
  ["07", "Source literacy for agent builders", "chapters/ch07-source-literacy.html"],
  ["08", "Good UI with agents", "chapters/ch08-good-ui-with-agents.html"],
  ["09", "Testing what agents build", "chapters/ch09-testing-what-agents-build.html"],
  ["10", "Debugging when it breaks", "chapters/ch10-debugging-when-it-breaks.html"],
  ["11", "Brownfield reality", "chapters/ch11-brownfield-reality.html"],
  ["12", "Pipelines that prevent bloat", "chapters/ch12-pipelines-that-prevent-bloat.html"],
  ["13", "Shipping for $0", "chapters/ch13-shipping-for-$0.html"],
  ["14", "Security & secrets", "chapters/ch14-security-secrets.html"],
  ["15", "Costs, limits & grey zones", "chapters/ch15-costs-limits-grey-zones.html"],
  ["16", "Your daily agentic workflow", "chapters/ch16-your-daily-agentic-workflow.html"],
];

const css = readFileSync(ROOT + "assets/css/book.css", "utf8");
const boot = `<script>(function(){var t;try{t=localStorage.getItem("fm-theme")}catch(e){}if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t})();</script>`;

function inner(file) {
  const html = readFileSync(ROOT + file, "utf8");
  const m = html.match(/<main[\s>]*>([\s\S]*)<\/main>/i);
  if (!m) throw new Error("no <main> in " + file);
  return m[1]
    .replace(/<nav class="pager"[\s\S]*?<\/nav>\s*/gi, "")
    .replace(/<script[^>]*src=["'][^"']*["']><\/script>\s*/gi, "");
}

let built = 0;
let toc = "";
let body = "";
for (const [num, title, file] of ORDER) {
  let html;
  try { html = inner(file); } catch { continue; }
  const id = "ch" + num;
  toc += `<a class="toc-title" href="#${id}">${num} · ${title}</a>`;
  body += `<section class="book-part" id="${id}" data-chapter="${num}">${html}</section>`;
  built++;
}

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
.book-toc .toc-title{text-decoration:none;font-size:.95rem;border-left:3px solid var(--line-strong);padding-left:.7rem;}
.book-toc .toc-title:hover{border-color:var(--l0);}
main.book-body{max-width:900px;}
.book-part{padding-top:3rem;border-top:6px solid var(--line-strong);margin-top:3rem;}
.book-part::before{content:attr(data-chapter);display:inline-block;font-family:var(--font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:1rem;}
</style>
</head>
<body>
<header class="site-head">
  <span class="brand"><span class="roundel">अ</span> <span>field manual · singular edition</span></span>
  <nav class="site-nav"><a href="#cover">top</a> <a href="#contents">contents</a></nav>
  <div class="head-tools"><button class="theme-btn" type="button"></button></div>
</header>
<main class="book-cover" id="cover">
  <p class="as-of">अ Man Learns Things · compiled ${new Date().toISOString().slice(0, 10)} · ${built} chapters</p>
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
console.log(`book.html compiled: ${built}/${ORDER.length} chapters, ${(out.length / 1024).toFixed(0)} KB`);
