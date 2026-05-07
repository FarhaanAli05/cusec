import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-line overflow-hidden">
      {/* Top meta bar */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Est. 2002
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-muted md:block">
            Canada-Wide · Annual · January
          </span>
        </div>
      </div>

      {/* CUSEC hero display text */}
      <div className="px-4 pb-2">
        <h1
          className="font-black text-charcoal select-none"
          style={{
            fontSize: "clamp(72px, 18.5vw, 290px)",
            letterSpacing: "-0.035em",
            lineHeight: "0.88",
          }}
        >
          CUSEC
        </h1>
      </div>

      {/* Rule */}
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div className="border-t border-line" />
      </div>

      {/* Description + CTAs */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-3xl font-semibold leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              Canada's student-run
              <br />
              software engineering
              <br />
              conference.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Founded in 2002, CUSEC brings students, engineers, researchers,
              and industry leaders together every January.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-charcoal px-7 py-3.5 text-center text-sm font-medium text-cream transition-colors hover:bg-charcoal/80"
            >
              Visit CUSEC 2027 →
            </a>
            <a
              href="#archive"
              className="rounded-full border border-charcoal px-7 py-3.5 text-center text-sm font-medium text-charcoal transition-colors hover:bg-charcoal/5"
            >
              View archive
            </a>
          </div>
        </div>
      </div>

      {/* Group photo — full width, grayscale */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
        <Image
          src="/group-photo.png"
          alt="CUSEC attendees gathered at the annual conference"
          fill
          className="object-cover grayscale"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
      </div>
    </section>
  );
}
