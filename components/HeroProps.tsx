// Everything arranged around the hero lettering: studio photos of filming and editing gear
// (cut-outs in /public/hero) plus a few drawn accents.
// Nothing here moves; each piece casts the shared studio shadow (.hero-prop), and a few hang
// from the top of the hero on thin cords.

const INK = "#0b0b1c";
const BLAZE = "#fa6b05";

const PlayButton = () => (
  <svg viewBox="0 0 132 102">
    <rect x="12" y="12" width="120" height="90" rx="22" fill={BLAZE} />
    <rect width="120" height="90" rx="22" fill={INK} />
    <path d="M48 26l36 19-36 19z" fill="#fff" />
  </svg>
);

const ChatBubble = () => (
  <svg viewBox="0 0 120 96">
    <path d="M18 0h84a18 18 0 0118 18v36a18 18 0 01-18 18H46L22 94V72h-4A18 18 0 010 54V18A18 18 0 0118 0z" fill={BLAZE} />
    <circle cx="36" cy="36" r="8" fill="#fff" />
    <circle cx="60" cy="36" r="8" fill="#fff" />
    <circle cx="84" cy="36" r="8" fill="#fff" />
  </svg>
);

const Cross = () => (
  <svg viewBox="0 0 60 60">
    <path d="M12 0l18 18L48 0l12 12-18 18 18 18-12 12-18-18-18 18L0 48l18-18L0 12z" fill={INK} />
  </svg>
);

const photo = (name: string, width: number, height: number) => (
  <img src={`/hero/${name}.webp`} alt="" width={width} height={height} className="h-auto w-full" />
);

// piece, then position / size / visibility classes and tilt in degrees.
// Phones show only the four corner photos so the lettering stays clear.
// `wire` hangs the piece from the top of the hero on a thin cord: x is where the cord meets the
// piece (across its width), reach is how far down into the piece it runs.
const pieces: {
  node: React.ReactNode;
  className: string;
  tilt: number;
  wire?: { x: string; reach: string };
}[] = [
  // photos
  { node: photo("camera", 659, 657), className: "left-[3%] top-[11%] w-[22vw] md:w-[15vw] max-w-56", tilt: -8, wire: { x: "36%", reach: "12%" } },
  { node: photo("headphones", 530, 656), className: "left-[45%] top-[7%] w-[7vw] max-w-24 hidden md:block", tilt: 8, wire: { x: "56%", reach: "6%" } },
  { node: photo("clapperboard", 613, 649), className: "right-[5%] top-[12%] w-[19vw] md:w-[12vw] max-w-48", tilt: 10, wire: { x: "58%", reach: "10%" } },
  { node: photo("microphone", 720, 351), className: "right-[24%] top-[63%] w-[13vw] max-w-52 hidden md:block", tilt: -16 },
  { node: photo("lens", 443, 666), className: "left-[9%] bottom-[5%] w-[11vw] md:w-[7.5vw] max-w-32", tilt: 10 },
  { node: photo("film-reel", 720, 401), className: "left-[27%] bottom-[3%] w-[16vw] max-w-60 hidden md:block", tilt: -4 },
  { node: photo("laptop", 720, 549), className: "right-[4%] bottom-[5%] w-[26vw] md:w-[18vw] max-w-72", tilt: -3 },
  // small drawn accents in the gaps
  { node: <PlayButton />, className: "left-[2%] top-[50%] w-[6vw] max-w-20 hidden lg:block", tilt: -10 },
  { node: <ChatBubble />, className: "right-[2%] top-[46%] w-[5.5vw] max-w-20 hidden lg:block", tilt: 8 },
  { node: <Cross />, className: "left-[34%] top-[9%] w-[2.6vw] max-w-9 hidden md:block", tilt: 0, wire: { x: "50%", reach: "30%" } },
  { node: <Cross />, className: "right-[36%] bottom-[9%] w-[1.8vw] max-w-6 hidden md:block", tilt: 12 },
];

export function HeroProps() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
      {pieces.map((piece, i) => (
        <div key={i} className={`absolute ${piece.className}`}>
          {piece.wire && (
            // runs up past the top of the hero, where the overflow hides the rest
            <span
              className="absolute h-[100vh] w-[2px] -translate-x-1/2 bg-ink/70"
              style={{ left: piece.wire.x, bottom: `calc(100% - ${piece.wire.reach})` }}
            />
          )}
          <div className="hero-prop relative" style={{ transform: `rotate(${piece.tilt}deg)` }}>
            {piece.node}
          </div>
        </div>
      ))}
    </div>
  );
}
