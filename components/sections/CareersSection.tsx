import { Lightbulb, Target, Users } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";
import { contactInfo } from "@/lib/site";

const traits = [
  {
    icon: Target,
    title: "Owner Mentality",
    text: "You treat a client's budget like your own and care about revenue, not vanity metrics.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    text: "You want to know why a campaign worked, and you keep testing until you find out.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    text: "No jargon, no hiding. You say what is happening and what you will do next.",
  },
];

export function CareersSection() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Brands With Us"
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionHeading title="WHO WE LOOK FOR" intro="Skills can be taught. These are harder to teach." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {traits.map((trait, i) => (
              <Reveal key={trait.title} delay={i * 0.08}>
                <div className="glass-card h-full p-8">
                  <div className="w-14 h-14 rounded-xl bg-blaze/10 flex items-center justify-center mb-6">
                    <trait.icon size={28} className="text-ember" aria-hidden="true" />
                  </div>
                  <h3 className="headline text-lg text-ink mb-3">{trait.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{trait.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <Reveal className="container-custom text-center">
          <h2 className="headline text-3xl md:text-4xl text-ink mb-6">SEND US YOUR WORK</h2>
          <p className="text-ink-muted text-lg mb-8 max-w-2xl mx-auto">
            Email your resume and portfolio, and tell us which team you would like to join. Based in{" "}
            {contactInfo.location}.
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Careers at JASS MEDIA")}`}
            className="btn-blaze rounded-lg font-semibold inline-flex items-center px-8 py-4 text-base tracking-wide"
          >
            Email Your Resume
          </a>
        </Reveal>
      </section>
    </>
  );
}
