/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-widest text-muted">
          What is CUSEC?
        </h2>

        {/* Bliss field image — wide composition, shown at natural ratio */}
        <div className="mb-12 overflow-hidden">
          <img
            src="/bliss-field.png"
            alt="Open field representing CUSEC's open, welcoming community"
            className="block h-auto w-full"
          />
        </div>

        <div className="max-w-2xl">
          <p className="text-2xl font-semibold leading-snug tracking-tight text-charcoal md:text-3xl">
            An open collective of makers, artists, engineers, designers,
            writers, poets, and{" "}
            <em className="not-italic text-accent">everything in-between.</em>
          </p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-charcoal/80">
            <p>
              CUSEC is a 3-day software engineering conference organized by
              students, for students. Each year it brings together engineers,
              researchers, and industry leaders from across Canada for talks,
              workshops, a career fair, and unforgettable networking.
            </p>
            <p>
              The conference features introductions, two 50-minute work blocks,
              and ends with casual open demos where attendees share what
              they're building and get feedback from the community.
            </p>
            <p>
              Focused on software engineering, technology, and community, CUSEC
              has become a defining experience for Canadian students in
              computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
