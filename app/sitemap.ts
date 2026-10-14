import type { MetadataRoute } from "next";
import { getAllPosts, siteUrl } from "@/lib/blog";

// sitemap.xml: tells search engines every page that exists and when it last changed.
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: posts[0]?.date, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updated ?? post.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
