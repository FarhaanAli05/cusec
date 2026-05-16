/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 md:pt-20 md:pb-14">
        <h1 className="text-6xl font-bold tracking-tight text-charcoal md:text-7xl lg:text-8xl">
          CUSEC
        </h1>
        <p className="mt-2 text-lg font-medium text-muted md:text-xl">
          Canadian University Software Engineering Conference
        </p>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal/80">
          CUSEC is a non-profit organization hosting technology conferences
          organized by students, for students. Founded in 2002, we host a
          conference annually in early January, this year we are gearing up for
          CUSEC 2026.
        </p>
        <a
          href="#"
          className="mt-8 inline-block border border-charcoal px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
        >
          Visit CUSEC 2026's site →
        </a>
      </section>

      {/* Group photo at natural aspect ratio — no aggressive crop */}
      <div className="w-full border-t border-b border-line">
        <img
          src="/group-photo.png"
          alt="CUSEC 2025 attendees gathered at the annual conference"
          className="block h-auto w-full grayscale"
        />
      </div>

      {/* Inline stats sentence */}
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-sm text-muted md:text-base">
          Over <strong className="font-semibold text-charcoal">25+ years</strong>{" "}
          we've welcomed{" "}
          <strong className="font-semibold text-charcoal">10,000+</strong>{" "}
          attendees,{" "}
          <strong className="font-semibold text-charcoal">270+</strong> sponsors
          and <strong className="font-semibold text-charcoal">380+</strong>{" "}
          speakers.
        </p>
      </div>
    </>
  );
}
