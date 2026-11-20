const items = [
  "React",
  "Next.js",
  "Node.js",
  "JavaScript",
  "HTML/CSS",
  "Databases",
  "REST APIs",
  "E-Commerce",
];

export default function Marquee() {
  return (
    <div className="marquee border-y border-border bg-surface/40 py-4 sm:py-5">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1 ? "true" : undefined}
          >
            {items.map((item) => (
              <span key={`${group}-${item}`} className="flex items-center">
                <span className="display px-6 text-[clamp(1.35rem,3.2vw,2.6rem)] whitespace-nowrap text-foreground/90 uppercase sm:px-8">
                  {item}
                </span>
                <span className="text-[clamp(0.8rem,1.4vw,1.1rem)] text-accent">
                  ✳
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
