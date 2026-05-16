/* eslint-disable @next/next/no-img-element */
export default function WhoIsItFor() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-widest text-muted">
          Is CUSEC for me?
        </h2>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          {/* Image — natural composition, portrait shown at its own ratio */}
          <div>
            <img
              src="/bliss-trees.png"
              alt="Trees representing growth and community at CUSEC"
              className="block h-auto w-full"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-2xl font-semibold leading-snug tracking-tight text-charcoal md:text-3xl">
              Whether you're just starting out or far along, this is a
              place for you to{" "}
              <em className="not-italic text-accent">make things.</em>
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>
                CUSEC is designed primarily for software engineering and
                computer science students across Canada. Whether you're
                writing your first program, shipping side projects, or looking
                for internships, CUSEC is built to help you learn, meet people,
                and get inspired.
              </p>
              <p>
                Anyone with an interest in software, technology, research, and
                industry is welcome. Speakers, researchers, industry
                professionals, and curious minds of all kinds find value at
                CUSEC.
              </p>
              <p>
                We know it can be intimidating to start. You'll be
                surrounded by others doing the same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
