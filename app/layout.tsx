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
  metadataBase: new URL("https://www.jassmedia.in"),
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
    // the J mark from the logo (favicon.ico in /app is picked up automatically as well)
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased bg-paper text-ink min-h-screen overflow-x-hidden">
        {/* Google Tag Manager (noscript): only used by visitors with JavaScript turned off */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WN7X94CL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="relative min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WN7X94CL');`}
        </Script>
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
