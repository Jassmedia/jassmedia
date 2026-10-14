import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, type Post } from "@/lib/blog";

export function BlogCard({ post, headingLevel = "h2" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="glass-card h-full p-6 flex flex-col">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="rounded-full bg-blaze/10 px-3 py-1 text-xs font-medium text-ember">
            {tag}
          </span>
        ))}
      </div>
      <Heading className="text-lg font-bold text-ink leading-snug mb-3">
        <Link href={`/blog/${post.slug}`} className="hover:text-ember transition-colors">
          {post.title}
        </Link>
      </Heading>
      <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">{post.description}</p>
      <div className="flex items-center justify-between text-xs text-ink-dim">
        <span>
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
        </span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-ember hover:gap-2 transition-all"
          aria-label={`Read: ${post.title}`}
        >
          Read <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
