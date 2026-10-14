import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const description =
  "A strategic marketing consultancy bridging the gap between algorithmic AI efficiency, human psychological positioning, and high-fidelity creative execution.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jassmedia.in"),
  title: { default: "JASS MEDIA | Growth & Marketing Consultancy", template: "%s | JASS MEDIA" },
  description,
  authors: [{ name: "JASS MEDIA" }],
  keywords: [
    "marketing consultancy",
    "growth marketing",
    "digital marketing",
    "brand strategy",
    "SEO",
    "social media marketing",
  ],
  openGraph: {
    title: "JASS MEDIA | We Engineer Market Dominance",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JASS MEDIA | We Engineer Market Dominance",
    description,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased bg-paper text-ink min-h-screen overflow-x-hidden">
        <Header />
        <main className="relative min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GR031NK5BF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GR031NK5BF');`}
        </Script>
      </body>
    </html>
  );
}
