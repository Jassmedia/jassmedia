import type { Metadata } from "next";
import { ClientLogos, LogoStrip } from "@/components/ClientLogos";
import { JsonLd } from "@/components/JsonLd";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { contactInfo } from "@/lib/site";
import { HeroProps } from "@/components/HeroProps";
import { ButtonLink } from "@/components/PageSections";
import { AboutSection } from "@/components/sections/AboutSection";
import { CareersSection } from "@/components/sections/CareersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "JASS MEDIA",
          url: "https://www.jassmedia.in",
          logo: "https://www.jassmedia.in/logos/jass-mark.png",
          description:
            "Growth and marketing consultancy: performance marketing, social media, SEO, branding, CGI ads, website and app development.",
          telephone: contactInfo.phone.replace(/s/g, ""),
          email: contactInfo.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
            streetAddress: contactInfo.location,
          },
          areaServed: "IN",
        }}
      />
      <section className="relative overflow-hidden">
        {/* Giant 3D wordmark with studio photos around it */}
        <div className="relative h-[36svh] min-h-[260px] overflow-hidden md:h-[52svh] lg:h-[calc(100svh-5rem)] lg:min-h-[600px]">
          {/* backdrop: a warm glow */}
          <div
            aria-hidden="true"
            className="hero-glow absolute left-1/2 top-[18%] h-[70%] w-[min(70vw,56rem)] -translate-x-1/2 rounded-full bg-blaze/15 blur-3xl"
          />
          {/* 3D block lettering (a rendered image), sliced by the cuts defined in .hero-word */}
          {/* the wrapper casts the wall shadow; the cuts are a mask on the image itself */}
          <div className="hero-word-cast absolute left-1/2 top-[33%] lg:top-[28%] w-[68vw] lg:w-[min(52vw,48rem)] -translate-x-1/2">
            <img
              src="/hero/jass-3d-duo.webp"
              alt="JASS"
              width={1082}
              height={386}
              fetchPriority="high"
              className="hero-word h-auto w-full select-none"
            />
          </div>
          <HeroProps />
          {/* props fade out at the bottom edge instead of being cut off */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-[7] h-16 bg-gradient-to-t from-paper to-transparent"
          />
        </div>

        <div className="container-custom py-10 md:py-14 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-ember text-xs md:text-sm tracking-widest uppercase mb-3 block">
              Growth &amp; Marketing Consultancy
            </span>
            <h1 className="headline text-3xl md:text-4xl lg:text-5xl text-ink mb-4 leading-tight">
              We Engineer Market Dominance.
            </h1>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed mb-8">
              A strategic marketing consultancy bridging the gap between algorithmic AI efficiency, human
              psychological positioning, and high-fidelity creative execution.
            </p>
            <ButtonLink href="#services">Explore Our Services</ButtonLink>
          </div>
        </div>
      </section>

      <LogoStrip />

      {/* One section per menu item, in menu order. data-nav ties each to its menu link. */}
      <div id="services" data-nav="/#services" className="scroll-mt-16">
        <ServicesSection />
      </div>
      <div id="about" data-nav="/#about" className="scroll-mt-16">
        <AboutSection />
      </div>
      <div id="careers" data-nav="/#careers" className="scroll-mt-16">
        <CareersSection />
      </div>
      <div id="clients" data-nav="/#clients" className="scroll-mt-16">
        <ClientLogos />
      </div>
      <BlogTeaser />
      <div id="contact" data-nav="/#contact" className="scroll-mt-16">
        <ContactSection />
      </div>
    </>
  );
}
