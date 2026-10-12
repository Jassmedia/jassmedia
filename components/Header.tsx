"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navLinks, services } from "@/lib/site";

const linkClass = "text-sm tracking-wide transition-colors duration-200 hover:text-ember";
// The page you are on: orange with an underline bar.
const activeClass = "text-ember underline decoration-blaze decoration-2 underline-offset-8";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything after navigating (pathname or hash).
  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };
  useEffect(closeAll, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  // Hover only opens for a real mouse, so a tap doesn't open then immediately toggle shut.
  const onPointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelClose();
    setServicesOpen(true);
  };
  const onPointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelClose();
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // The menu follows the section being read (sections are marked with data-nav="<menu href>").
  const [section, setSection] = useState("/");
  useEffect(() => {
    const targets = [...document.querySelectorAll<HTMLElement>("[data-nav]")];
    // the section crossing the middle of the screen wins; above the first one it is Home
    const onScroll = () => {
      const middle = window.innerHeight / 2;
      const current = targets.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= middle && rect.bottom >= middle;
      });
      setSection(current?.dataset.nav ?? "/");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => section === href;

  // "Home" on the home page just returns to the top instead of reloading.
  const goHome = (e: React.MouseEvent) => {
    closeAll();
    if (pathname !== "/") return;
    e.preventDefault();
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", "/");
  };
  const onNav = (href: string) => (href === "/" ? goHome : closeAll);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "py-3 bg-paper/95 backdrop-blur-md shadow-sm border-b border-ink/10" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between" aria-label="Main">
          <a href="/" onClick={goHome} className="relative z-10 flex items-center gap-3">
            {/* Shows only the J mark from the square logo file; the wordmark beside it is live text. */}
            <span
              aria-hidden="true"
              className="block h-[46px] w-9 flex-shrink-0 bg-no-repeat"
              style={{
                backgroundImage: "url(/logos/jass-media.png)",
                backgroundSize: "150px 150px",
                backgroundPosition: "-56px -30px",
              }}
            />
            <span className="headline text-xl tracking-widest text-ink">JASS MEDIA</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <li key={link.name}>
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && servicesOpen) {
                        setServicesOpen(false);
                        triggerRef.current?.focus();
                      }
                    }}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
                    }}
                  >
                    {/* The word goes to the Services page; the arrow opens the list without leaving. */}
                    <span className="inline-flex items-center gap-1">
                      <a
                        href={link.href}
                        onClick={closeAll}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`${linkClass} ${
                          isActive(link.href) ? activeClass : servicesOpen ? "text-ember" : "text-ink-muted"
                        }`}
                      >
                        Services
                      </a>
                      <button
                        ref={triggerRef}
                        type="button"
                        aria-label="Show services list"
                        aria-expanded={servicesOpen}
                        aria-controls="services-menu"
                        onClick={() => setServicesOpen((open) => !open)}
                        className={`p-1 -m-1 cursor-pointer transition-colors duration-200 hover:text-ember ${
                          isActive(link.href) || servicesOpen ? "text-ember" : "text-ink-muted"
                        }`}
                      >
                        <ChevronDown
                          size={14}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </span>
                    <div
                      id="services-menu"
                      className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 transition-all duration-200 ${
                        servicesOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"
                      }`}
                    >
                      <div className="rounded-2xl bg-ink p-2 shadow-2xl shadow-black/40">
                        <ul>
                          {services.map((service) => (
                            <li key={service.slug}>
                              <a
                                href={`/#${service.slug}`}
                                onClick={closeAll}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-white/10 hover:text-blaze focus-visible:bg-white/10 focus-visible:text-blaze focus-visible:outline-none"
                              >
                                {service.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="/#services"
                          onClick={closeAll}
                          className="mt-1 flex items-center justify-between rounded-lg border-t border-white/20 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-150 hover:bg-white/10 hover:text-blaze focus-visible:bg-white/10 focus-visible:text-blaze focus-visible:outline-none"
                        >
                          View all services
                          <ArrowRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={onNav(link.href)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`${linkClass} ${isActive(link.href) ? activeClass : "text-ink-muted"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ),
            )}
          </ul>

          <div className="hidden lg:block">
            <a
              href="/#contact"
              className="btn-blaze inline-block px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide"
            >
              Stop Posting, Start Profiting
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden relative z-10 p-2 text-ink"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-0 h-dvh overflow-y-auto bg-paper pt-20 pb-10"
        >
          <ul className="container-custom flex flex-col">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <li key={link.name} className="border-b border-ink/10">
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={closeAll}
                      className={`flex-1 py-4 text-lg tracking-wide ${
                        isActive(link.href) ? "text-ember font-semibold" : "text-ink"
                      }`}
                    >
                      Services
                    </a>
                    <button
                      type="button"
                      aria-label="Show services list"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className="p-3 -mr-3 text-ink"
                    >
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div id="mobile-services-menu" className="mb-4 rounded-2xl bg-ink p-2">
                      <ul>
                        {services.map((service) => (
                          <li key={service.slug}>
                            <a
                              href={`/#${service.slug}`}
                              onClick={closeAll}
                              className="block rounded-lg px-4 py-3 text-sm font-medium text-white active:bg-white/15"
                            >
                              {service.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/#services"
                        onClick={closeAll}
                        className="mt-1 flex items-center justify-between rounded-lg border-t border-white/20 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white active:bg-white/15"
                      >
                        View all services
                        <ArrowRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.name} className="border-b border-ink/10">
                  <a
                    href={link.href}
                    onClick={onNav(link.href)}
                    className={`block py-4 text-lg tracking-wide ${
                      isActive(link.href) ? "text-ember font-semibold" : "text-ink"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ),
            )}
            <li className="pt-8">
              <a
                href="/#contact"
                onClick={closeAll}
                className="btn-blaze block w-full px-6 py-4 rounded-lg text-center text-base font-semibold tracking-wide"
              >
                Stop Posting, Start Profiting
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
