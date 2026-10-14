import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { JsonLd } from "@/components/JsonLd";
import { formatDate, getAllPosts, getPost, siteUrl } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

// Every post is built into a static page ahead of time.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.seoTitle ?? post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = `${siteUrl}/blog/${post.slug}`;
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url,
          mainEntityOfPage: url,
          image: `${url}/opengraph-image`,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          keywords: post.tags.join(", "),
          author: { "@type": "Organization", name: post.author, url: siteUrl },
          publisher: {
            "@type": "Organization",
            name: "JASS MEDIA",
            url: siteUrl,
            logo: { "@type": "ImageObject", url: `${siteUrl}/logos/jass-mark.png` },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }}
      />

      <article className="container-custom pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-dim">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ember">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-ember">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-muted line-clamp-1" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blaze/10 px-3 py-1 text-xs font-medium text-ember">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-5">{post.title}</h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-5">{post.description}</p>
            <p className="text-sm text-ink-dim">
              By {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min
              read
            </p>
          </header>

          <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="mt-12 rounded-2xl bg-ink p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Want this done for your business?</h2>
            <p className="text-white/75 mb-6">Tell us where you are today and where you want to be.</p>
            <Link href="/#contact" className="btn-blaze inline-block rounded-lg px-8 py-3 font-semibold">
              Talk to JASS MEDIA
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="bg-mist py-16">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 id="related-heading" className="headline text-2xl text-ink">Keep reading</h2>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-ember">
                <ArrowLeft size={16} aria-hidden="true" /> All articles
              </Link>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <li key={p.slug}>
                  <BlogCard post={p} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
