/** @type {import("next").NextConfig} */
const nextConfig = {
  // Lets a verification build run in its own folder without disturbing a running dev server.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // The site is one long page; addresses of the old separate pages lead to their sections.
  async redirects() {
    const to = (source, destination) => ({ source, destination, permanent: false });
    return [
      to("/services", "/#services"),
      to("/about", "/#about"),
      to("/careers", "/#careers"),
      to("/clients", "/#clients"),
      to("/contact", "/#contact"),
      to("/sectors", "/#services"),
      to("/philosophy", "/#about"),
    ];
  },
};

export default nextConfig;
