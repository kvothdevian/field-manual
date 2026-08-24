import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SKIP_DIRS = new Set(["assets", "scripts", "docs", ".git", "node_modules"]);
const MAX_CHARS = 6000;

function walk(dir) {
  let out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out = out.concat(walk(full));
    } else if (entry.name.endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const docs = walk(ROOT).map((file) => {
  const html = readFileSync(file, "utf8");
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch
    ? strip(titleMatch[1])
    : file.split(sep).pop();
  const bodyStart = html.search(/<main[\s>]/i);
  const bodyEnd = html.search(/<\/main>/i);
  const text = strip(bodyStart > -1 ? html.slice(bodyStart, bodyEnd > -1 ? bodyEnd : undefined) : html);
  return {
    path: relative(ROOT, file).split(sep).join("/"),
    title,
    text: text.slice(0, MAX_CHARS),
  };
}).sort((a, b) => a.path.localeCompare(b.path));

const outFile = join(ROOT, "assets", "search-index.js");
writeFileSync(outFile, "window.SEARCH_INDEX=" + JSON.stringify(docs) + ";\n", "utf8");
console.log(`indexed ${docs.length} page(s) -> assets/search-index.js`);
