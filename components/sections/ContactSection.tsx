import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SocialIcon, socials } from "@/components/SocialIcons";
import { contactInfo, cta } from "@/lib/site";

const rowClass = "flex items-center gap-4 text-ink-muted hover:text-ember transition-colors group";
const iconBox =
  "w-12 h-12 rounded-lg bg-blaze/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blaze/20 transition-colors";
const rowLabel = "text-xs tracking-widest uppercase text-ink-dim block mb-1";

export function ContactSection() {
  return (
    <section className="pt-20 pb-24">
      <div className="container-custom">
        <Reveal className="text-center mb-10">
          <span className="text-ember text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
          <h2 className="headline text-3xl md:text-4xl lg:text-5xl text-ink">Let&apos;s Talk Real ROI.</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Reveal>
            <div className="glass-card h-full p-8 md:p-10">
              <h2 className="headline text-2xl text-ink mb-4">
                Ready to stop wasting money on mediocre marketing?
              </h2>
              <p className="text-ink-muted leading-relaxed mb-10">{cta.body}</p>

              <div className="space-y-6 mb-10">
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className={rowClass}>
                  <div className={iconBox}>
                    <Phone size={20} className="text-ember" aria-hidden="true" />
                  </div>
                  <div>
                    <span className={rowLabel}>Phone</span>
                    <span className="text-ink">{contactInfo.phone}</span>
                  </div>
                </a>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className={rowClass}>
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={20} className="text-green-500" aria-hidden="true" />
                  </div>
                  <div>
                    <span className={rowLabel}>WhatsApp</span>
                    <span className="text-ink">Chat with us directly</span>
                  </div>
                </a>
                <a href={`mailto:${contactInfo.email}`} className={rowClass}>
                  <div className={iconBox}>
                    <Mail size={20} className="text-ember" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className={rowLabel}>Email</span>
                    <span className="text-ink break-all">{contactInfo.email}</span>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blaze/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-ember" aria-hidden="true" />
                  </div>
                  <div>
                    <span className={rowLabel}>Location</span>
                    <span className="text-ink">{contactInfo.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs tracking-widest uppercase text-ink-dim block mb-4">Follow Us</span>
                <div className="flex items-center gap-4">
                  {socials.map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={name}
                      className="w-10 h-10 rounded-lg bg-ink/5 flex items-center justify-center text-ink-muted hover:text-ember hover:bg-blaze/10 transition-colors"
                    >
                      <SocialIcon name={name} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card h-full p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
