import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative pt-20 pb-10 md:pb-12">
      <div className="container-custom">
        <Reveal className="max-w-4xl mx-auto text-center">
          <span className="text-ember text-sm tracking-widest uppercase mb-4 block">{eyebrow}</span>
          <h2 className="headline text-3xl md:text-4xl lg:text-5xl text-ink mb-4">{title}</h2>
          {intro && <p className="text-base md:text-lg text-ink-muted leading-relaxed">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({ title, intro }: { title: string; intro: string }) {
  return (
    <Reveal className="mb-8 text-center">
      <h3 className="headline text-2xl md:text-3xl text-ink mb-2">{title}</h3>
      <p className="text-ink-muted text-base max-w-3xl mx-auto leading-relaxed">{intro}</p>
    </Reveal>
  );
}

export function ButtonLink({
  href,
  children,
  size = "lg",
}: {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  const sizing =
    size === "lg" ? "px-8 py-4 text-base gap-3 tracking-wide" : "px-6 py-3 text-sm gap-2";
  const className = `btn-blaze rounded-lg font-semibold inline-flex items-center ${sizing}`;
  const arrow = <ArrowRight size={size === "lg" ? 18 : 16} aria-hidden="true" />;
  // Same-page anchors use a plain link so the browser does the scrolling itself.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
      {arrow}
    </Link>
  );
}
