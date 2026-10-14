import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts, siteUrl } from "@/lib/blog";

const description =
  "Practical guides on SEO, performance marketing, social media, branding and websites for growing businesses, from the JASS MEDIA team in Hyderabad.";

export const metadata: Metadata = {
  title: "Blog: Marketing Guides for Growing Businesses",
  description,
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
  openGraph: {
    title: "JASS MEDIA Blog: Marketing Guides for Growing Businesses",
    description,
    url: "/blog",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", title: "JASS MEDIA Blog", description },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "JASS MEDIA Blog",
          url: `${siteUrl}/blog`,
          description,
          publisher: { "@type": "Organization", name: "JASS MEDIA", url: siteUrl },
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: `${siteUrl}/blog/${post.slug}`,
            datePublished: post.date,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          ],
        }}
      />

      <section className="container-custom pt-16 pb-24">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-ember text-sm tracking-widest uppercase mb-4 block">Blog</span>
          <h1 className="headline text-3xl md:text-4xl lg:text-5xl text-ink mb-4">Marketing Guides</h1>
          <p className="text-base md:text-lg text-ink-muted leading-relaxed">{description}</p>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
