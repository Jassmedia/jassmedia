import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

// Blog posts are Markdown files in /content/blog. The file name (without .md) is the URL slug,
// and the frontmatter at the top of each file holds the title, description, date and tags.

export type Post = {
  slug: string;
  title: string;
  /** shorter title for search results; the full title is still the on-page heading */
  seoTitle?: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  readingMinutes: number;
  html: string;
};

export const siteUrl = "https://jassmedia.in";

const dir = path.join(process.cwd(), "content", "blog");

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Headings get ids so they can be linked to directly; external links open in a new tab.
const markdown = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      return `<h${depth} id="${slugify(text)}">${text}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:\/\//.test(href) && !href.startsWith(siteUrl);
      const rel = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${href}"${title ? ` title="${title}"` : ""}${rel}>${text}</a>`;
    },
  },
});

function readPost(file: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    seoTitle: data.seoTitle,
    description: data.description,
    date: data.date,
    updated: data.updated,
    author: data.author ?? "JASS MEDIA Team",
    tags: data.tags ?? [],
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: markdown.parse(content) as string,
  };
}

/** All posts, newest first. */
export function getAllPosts(): Post[] {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
