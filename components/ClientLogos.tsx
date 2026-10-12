import { clientLogos } from "@/lib/site";

// Each half of a track repeats its logos enough times to out-span very wide screens.
const REPEATS = 3;

type Logo = (typeof clientLogos)[number];

const half = Math.ceil(clientLogos.length / 2);
const rows = [clientLogos.slice(0, half), clientLogos.slice(half)];

function LogoGroup({ logos, hidden = false }: { logos: Logo[]; hidden?: boolean }) {
  return (
    <ul className="marquee-group" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEATS }).flatMap((_, repeat) =>
        logos.map((logo) => {
          const decorative = hidden || repeat > 0;
          return (
            <li
              key={`${repeat}-${logo.src}`}
              aria-hidden={(!hidden && repeat > 0) || undefined}
              className="flex h-20 w-32 flex-shrink-0 items-center justify-center sm:h-24 sm:w-44"
            >
              <img
                src={logo.src}
                alt={decorative ? "" : logo.name ? `${logo.name} logo` : "Client logo"}
                width={logo.width}
                height={logo.height}
                decoding="async"
                className="h-16 w-auto max-w-full object-contain sm:h-20"
              />
            </li>
          );
        }),
      )}
    </ul>
  );
}

// A single, heading-less row of every client logo, used directly under the hero.
export function LogoStrip() {
  return (
    <section
      aria-label="Our clients"
      className="py-6 border-y border-ink/10 [--marquee-gap:1.25rem] sm:[--marquee-gap:2.5rem] [--marquee-duration:80s]"
    >
      <div className="marquee marquee-fade marquee-pausable">
        <div className="marquee-track">
          <LogoGroup logos={clientLogos} />
          <LogoGroup logos={clientLogos} hidden />
        </div>
      </div>
    </section>
  );
}

export function ClientLogos() {
  return (
    <section aria-labelledby="clients-heading" className="py-14 md:py-16 bg-paper border-b border-ink/10">
      <div className="container-custom text-center mb-8 md:mb-10">
        <span className="text-ember text-xs md:text-sm tracking-widest uppercase mb-3 block">Our Clients</span>
        <h2 id="clients-heading" className="headline tracking-wide text-2xl md:text-4xl text-ink mb-4">
          Brands That <span className="text-blaze">Trust Us</span>
        </h2>
        <p className="text-ink-muted text-sm md:text-base max-w-xl mx-auto">
          The businesses we partner with to build their brands and grow their revenue.
        </p>
      </div>
      {/* Two rows moving in opposite directions */}
      <div className="space-y-3 sm:space-y-5 [--marquee-gap:1.25rem] sm:[--marquee-gap:2.5rem] [--marquee-duration:60s]">
        {rows.map((logos, i) => (
          <div
            key={i}
            className={`marquee marquee-fade marquee-pausable ${i % 2 ? "marquee-reverse" : ""}`}
          >
            <div className="marquee-track">
              <LogoGroup logos={logos} />
              <LogoGroup logos={logos} hidden />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
