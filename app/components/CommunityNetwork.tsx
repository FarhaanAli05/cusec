export default function CommunityNetwork() {
  const dotRows = 8;
  const dotCols = 16;

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <span className="mb-12 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          CUSEC Network
        </span>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-charcoal md:text-4xl">
              A connected network of Canadian builders.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              A future home for students, alumni, speakers, and builders
              connected through CUSEC — from every province, every cohort, every
              year.
            </p>
            <span className="mt-6 inline-block rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
              Coming soon
            </span>
          </div>

          {/* Visual: dot grid + webring-inspired maple leaf */}
          <div className="relative flex items-center justify-center overflow-hidden py-12">
            {/* Dot grid background */}
            <div
              className="absolute inset-0 grid opacity-20"
              style={{
                gridTemplateColumns: `repeat(${dotCols}, 1fr)`,
                gridTemplateRows: `repeat(${dotRows}, 1fr)`,
                gap: "0",
                padding: "1rem",
              }}
            >
              {Array.from({ length: dotRows * dotCols }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center"
                >
                  <div className="h-1 w-1 rounded-full bg-charcoal" />
                </div>
              ))}
            </div>

            {/* Webring element: ← 🍁 → */}
            <div className="relative z-10 flex items-center gap-5">
              <div className="flex h-10 w-10 items-center justify-center border border-line bg-cream text-lg text-muted">
                ←
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-charcoal bg-cream shadow-sm">
                <span className="text-3xl" role="img" aria-label="Canada">
                  🍁
                </span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center border border-line bg-cream text-lg text-muted">
                →
              </div>
            </div>

            {/* Connecting lines (decorative) */}
            <div className="absolute left-0 right-1/2 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-line" />
            <div className="absolute left-1/2 right-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
