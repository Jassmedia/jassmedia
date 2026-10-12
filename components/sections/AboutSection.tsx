import { Handshake, Target, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";

const values = [
  { icon: Target, title: "Owner Mentality", text: "We treat your business as if it were our own." },
  { icon: TrendingUp, title: "Revenue Focus", text: "Everything we do is measured by your bottom line." },
  { icon: Handshake, title: "Transparent Partnership", text: "No jargon. Clear communication and honest results." },
];

export function AboutSection() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built by Founders. For Founders."
        intro="We started where you are now: business owners let down by cookie-cutter agencies. So we built the growth partner we wanted, one that turns your digital presence into measurable revenue."
      />

      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="glass-card h-full text-center p-8">
                  <div className="w-12 h-12 rounded-lg bg-blaze/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-ember" aria-hidden="true" />
                  </div>
                  <h3 className="headline text-lg text-ink mb-3">{value.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
