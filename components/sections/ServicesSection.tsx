import {
  Clapperboard,
  Code,
  Megaphone,
  PenTool,
  Search,
  Share2,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

const serviceIcons = [TrendingUp, Share2, Search, Megaphone, Clapperboard, Code, Smartphone, PenTool];

const process = [
  { title: "Discovery", text: "Deep-dive into your business model, customers, and goals." },
  { title: "Strategy", text: "Craft a custom roadmap aligned with your revenue targets." },
  { title: "Execution", text: "Deploy high-fidelity assets and campaigns with precision." },
  { title: "Optimize", text: "Continuously refine based on data and performance." },
];

export function ServicesSection() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Services"
        intro="We build digital assets that drive measurable revenue."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading title="WHAT WE DO" intro="Eight disciplines, one team, one revenue goal." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <Reveal key={service.slug} delay={(i % 4) * 0.06}>
                  <div id={service.slug} className="glass-card p-6 h-full scroll-mt-28">
                    <div className="w-12 h-12 rounded-lg bg-blaze/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-ember" aria-hidden="true" />
                    </div>
                    <h3 className="headline text-base text-ink mb-3">{service.name}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mist">
        <div className="container-custom">
          <SectionHeading
            title="OUR PROCESS"
            intro="A systematic approach to transforming your digital presence."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="glass-card h-full text-center p-6">
                  <span className="text-ember text-3xl font-bold headline">0{i + 1}</span>
                  <h3 className="headline text-lg text-ink mt-4 mb-2">{step.title}</h3>
                  <p className="text-ink-muted text-sm">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
