export default function FinalCTA() {
  return (
    <section className="border-b border-line" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-32">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          CUSEC 2027
        </p>
        <h2 className="text-4xl font-black leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
          Building the next chapter
          <br />
          of CUSEC.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-cream transition-colors hover:bg-charcoal/80"
          >
            Visit CUSEC 2027 →
          </a>
          <a
            href="mailto:hello@cusec.net"
            className="rounded-full border border-charcoal px-8 py-4 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal/5"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
