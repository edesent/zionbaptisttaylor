import fs from "node:fs";
import path from "node:path";

/**
 * Articles live as Markdown files in /content/articles.
 *
 *   content/articles/what-is-a-reformed-baptist.md
 *     -> https://www.ziontaylor.org/articles/what-is-a-reformed-baptist
 *
 * Each file starts with a short header ("frontmatter"):
 *
 *   ---
 *   title: What Is a Reformed Baptist Church?
 *   date: 2026-10-12
 *   summary: One or two sentences shown on the Articles page and in Google.
 *   author: Pastor Michael R. Jones
 *   draft: true
 *   ---
 *
 * Files whose names start with "_" are ignored. Articles marked
 * "draft: true" show on preview sites only, never on the live site.
 */

export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  draft: boolean;
  html: string;
  readingMinutes: number;
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");
const DEFAULT_AUTHOR = "Pastor Michael R. Jones";
const SHOW_DRAFTS = process.env.VERCEL_ENV !== "production";

/* ---------------- Frontmatter ---------------- */

function parseFile(raw: string): { data: Record<string, string>; body: string } {
  const text = raw.replace(/\r\n/g, "\n").replace(/^\uFEFF/, "");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const data: Record<string, string> = {};
  if (!match) return { data, body: text };

  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim().toLowerCase();
    let value = line.slice(idx + 1).trim();
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: match[2] };
}

/* ---------------- Markdown ---------------- */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(s: string): string {
  let out = escapeHtml(s);
  // [link text](https://example.com) or [link text](/visit)
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, url: string) => {
    const safe = /^(https?:\/\/|\/|#|mailto:)/i.test(url) ? url : "#";
    const external = /^https?:\/\//i.test(safe)
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return `<a href="${safe}"${external}>${label}</a>`;
  });
  // **bold**
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // *italic*
  out = out.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
  return out;
}

type ListBlock = { type: "ul" | "ol"; items: string[] };

export function markdownToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let para: string[] = [];
  let quote: string[] = [];
  let list: ListBlock | null = null;

  const flushPara = () => {
    if (para.length) {
      html.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      const items = list.items.map((i) => `<li>${inline(i)}</li>`).join("");
      html.push(`<${list.type}>${items}</${list.type}>`);
      list = null;
    }
  };
  const flushQuote = () => {
    if (quote.length) {
      let cite = "";
      const last = quote[quote.length - 1];
      const citeMatch = last.match(/^(?:--|~)\s*(.+)$/);
      if (citeMatch && quote.length > 1) {
        cite = citeMatch[1];
        quote = quote.slice(0, -1);
      }
      html.push(
        `<blockquote><p>${inline(quote.join(" "))}</p>${
          cite ? `<cite>${inline(cite)}</cite>` : ""
        }</blockquote>`
      );
      quote = [];
    }
  };
  const flushAll = () => {
    flushPara();
    flushList();
    flushQuote();
  };

  for (const rawLine of lines) {
    const t = rawLine.trim();
    let m: RegExpMatchArray | null;

    if (!t) {
      flushAll();
      continue;
    }

    // Headings: "## Heading" (a single "#" is treated the same as "##")
    m = t.match(/^(#{1,4})\s+(.+)$/);
    if (m) {
      flushAll();
      const level = m[1].length <= 2 ? 2 : 3;
      html.push(`<h${level}>${inline(m[2])}</h${level}>`);
      continue;
    }

    // Divider: "---"
    if (/^(-{3,}|\*{3,})$/.test(t)) {
      flushAll();
      html.push("<hr />");
      continue;
    }

    // Quotation: "> text"
    m = t.match(/^>\s?(.*)$/);
    if (m) {
      flushPara();
      flushList();
      if (m[1]) quote.push(m[1]);
      continue;
    }

    // Bulleted list: "- item"
    m = t.match(/^[-*]\s+(.+)$/);
    if (m) {
      flushPara();
      flushQuote();
      if (!list || list.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list.items.push(m[1]);
      continue;
    }

    // Numbered list: "1. item"
    m = t.match(/^\d+[.)]\s+(.+)$/);
    if (m) {
      flushPara();
      flushQuote();
      if (!list || list.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list.items.push(m[1]);
      continue;
    }

    flushList();
    flushQuote();
    para.push(t);
  }
  flushAll();
  return html.join("\n");
}

/* ---------------- Loading ---------------- */

function loadArticle(fileName: string): Article | null {
  const slug = fileName.replace(/\.md$/i, "").toLowerCase();
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, fileName), "utf8");
  const { data, body } = parseFile(raw);
  const draft = (data.draft || "").toLowerCase() === "true";
  if (draft && !SHOW_DRAFTS) return null;

  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    date: data.date || "",
    summary: data.summary || "",
    author: data.author || DEFAULT_AUTHOR,
    draft,
    html: markdownToHtml(body),
    readingMinutes: Math.max(1, Math.round(words / 225)),
  };
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.toLowerCase().endsWith(".md") && !f.startsWith("_"))
    .map(loadArticle)
    .filter((a): a is Article => a !== null)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getArticle(slug: string): Article | null {
  return getAllArticles().find((a) => a.slug === slug) ?? null;
}

export function formatDate(date: string): string {
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
