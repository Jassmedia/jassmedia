import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

// The three newest articles on the home page, which also links search engines to the blog.
export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section aria-labelledby="blog-heading" className="section-padding bg-mist">
      <div className="container-custom">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-center md:text-left">
          <div>
            <span className="text-ember text-sm tracking-widest uppercase mb-3 block">From the Blog</span>
            <h2 id="blog-heading" className="headline text-3xl md:text-4xl text-ink">
              Marketing Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ember hover:gap-3 transition-all"
          >
            View all articles <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} headingLevel="h3" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
