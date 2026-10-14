import type { MetadataRoute } from "next";

// Lets phones show the J mark when the site is saved to the home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JASS MEDIA",
    short_name: "JASS MEDIA",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
