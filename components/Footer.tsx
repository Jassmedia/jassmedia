import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo, cta, navLinks, services } from "@/lib/site";
import { SocialIcon, socials } from "@/components/SocialIcons";

const footerLink = "text-ink-muted text-sm hover:text-ember transition-colors duration-200";
const contactLink = `flex items-center gap-3 ${footerLink}`;

export function Footer() {
  return (
    <footer className="relative bg-mist border-t border-ink/10">
      <div className="border-b border-ink/10">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="headline text-2xl md:text-3xl text-ink text-center lg:text-left">
              {cta.headline}
            </h2>
            <a
              href="/#contact"
              className="btn-blaze px-8 py-4 rounded-lg text-base font-semibold tracking-wide whitespace-nowrap"
            >
              {cta.button}
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <span className="headline text-xl tracking-widest text-ink">JASS MEDIA</span>
            </a>
            <p className="text-ink-muted text-sm leading-relaxed mb-6">
              A strategic marketing consultancy bridging the gap between algorithmic efficiency and human
              connection.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={name}
                  className="text-ink-muted hover:text-ember transition-colors duration-200"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="headline text-sm tracking-widest text-ink mb-6">EXPLORE</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="headline text-sm tracking-widest text-ink mb-6">SERVICES</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a href={`/#${service.slug}`} className={footerLink}>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="headline text-sm tracking-widest text-ink mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className={contactLink}>
                  <Phone size={16} className="text-ember" aria-hidden="true" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className={contactLink}>
                  <MessageCircle size={16} className="text-ember" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className={`${contactLink} break-all`}>
                  <Mail size={16} className="text-ember flex-shrink-0" aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink-muted text-sm">
                <MapPin size={16} className="text-ember mt-0.5" aria-hidden="true" />
                {contactInfo.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-ink-dim text-xs">
            <p>© {new Date().getFullYear()} JASS MEDIA. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-ink transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-ink transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
