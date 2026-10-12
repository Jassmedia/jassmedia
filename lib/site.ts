export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/#about" },
  { name: "Careers", href: "/#careers" },
  { name: "Clients", href: "/#clients" },
  { name: "Contact Us", href: "/#contact" },
];

export const services = [
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    description:
      "Paid campaigns on Meta and Google, managed against cost per lead and return on ad spend.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    description:
      "Content planning, production and community management across your social channels.",
  },
  {
    slug: "seo",
    name: "SEO",
    description:
      "Technical, on-page and local search optimisation that builds lasting organic visibility.",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    description:
      "Integrated strategy across search, social, email and content, tied to revenue goals.",
  },
  {
    slug: "branding-animations-cgi-ads",
    name: "Branding, Animations & CGI Ads",
    description:
      "Brand identity systems, motion graphics and CGI ad films built to stand out.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    description:
      "Fast, conversion-focused websites and landing pages built for search and scale.",
  },
  {
    slug: "app-development",
    name: "App Development",
    description:
      "Mobile and web apps designed and built around your customers and operations.",
  },
  {
    slug: "graphic-designing",
    name: "Graphic Designing",
    description:
      "Social creatives, print collateral and campaign visuals in a consistent brand style.",
  },
];

// Logos without a name are shown without a caption until the client name is confirmed.
export const clientLogos: { name?: string; src: string; width: number; height: number }[] = [
  { name: "Junior Junction", src: "/logos/junior-junction.png", width: 150, height: 150 },
  { name: "Engineers Built", src: "/logos/engineers-built.png", width: 615, height: 240 },
  { name: "Maker Global", src: "/logos/maker-global.png", width: 150, height: 150 },
  { name: "Swapna's ENT Clinic", src: "/logos/swapnas-ent-clinic.png", width: 150, height: 150 },
  { name: "ASTS", src: "/logos/asts.png", width: 150, height: 150 },
  { name: "Nexus Restro Consulting", src: "/logos/nexus-restro-consulting.png", width: 484, height: 240 },
  { name: "NR Interiors", src: "/logos/nr-interiors.png", width: 150, height: 150 },
  {
    name: "Summit Dental and Orthopedic Clinic",
    src: "/logos/summit-dental-orthopedic-clinic.png",
    width: 150,
    height: 150,
  },
  { name: "Brownie Point", src: "/logos/brownie-point.png", width: 460, height: 240 },
  { name: "Sarva Ruchi Kitchen", src: "/logos/sarva-ruchi-kitchen.png", width: 150, height: 150 },
  { name: "Reel Matters", src: "/logos/reel-matters.png", width: 240, height: 240 },
  { name: "Healthy Mantra", src: "/logos/healthy-mantra.png", width: 150, height: 150 },
  { src: "/logos/client-bs.png", width: 150, height: 150 },
  { src: "/logos/client-child-care.png", width: 150, height: 150 },
];

export const contactInfo = {
  phone: "+91 9492204070",
  whatsapp: "https://wa.me/919492204070",
  email: "Jassmediadotin@gmail.com",
  location: "Hitech City, Hyderabad",
};

export const cta = {
  headline: "Ready for an Agency That Actually Understands Business?",
  body: "We don't do cookie-cutter calendars or hide behind vanity metrics. If you want a strategic partner who understands margins, operations, and revenue, let's talk. No pressure, no generic pitches. Just business owners talking business.",
  button: "Let's Talk Real ROI",
};
