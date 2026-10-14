import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";

// The preview card shown when a post is shared on WhatsApp, LinkedIn, X or Facebook.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "JASS MEDIA blog article";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          borderLeft: "28px solid #eb6f18",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 4, color: "#0b0b1c" }}>
          JASS MEDIA · BLOG
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: "#0b0b1c" }}>
          {post?.title ?? "JASS MEDIA Blog"}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c44f04" }}>{post?.tags.slice(0, 3).join("  ·  ")}</div>
      </div>
    ),
    size,
  );
}
