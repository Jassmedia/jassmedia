import { ImageResponse } from "next/og";

// Default share preview for the home page and the blog index (articles have their own).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "JASS MEDIA, growth and marketing consultancy";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#ffffff",
          borderLeft: "28px solid #eb6f18",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 110, fontWeight: 800, letterSpacing: 6, color: "#0b0b1c" }}>
          <span style={{ color: "#eb6f18" }}>JASS</span>&nbsp;MEDIA
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#4a4f63", marginTop: 24 }}>
          Growth &amp; Marketing Consultancy · Hyderabad
        </div>
      </div>
    ),
    size,
  );
}
