import Image from "next/image";

const highlights = [
  { label: "3 days", detail: "talks, workshops & networking" },
  { label: "Career fair", detail: "connect with top tech employers" },
  { label: "Open demos", detail: "share what you're building" },
  { label: "Student-run", detail: "organized entirely by students" },
];

export default function AboutSection() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <span className="mb-12 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          What is CUSEC?
        </span>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src="/bliss-field.png"
              alt="Open field representing CUSEC's open, welcoming community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-3xl font-semibold leading-tight tracking-tight text-charcoal md:text-4xl">
              An open collective of makers, engineers, designers, and{" "}
              <em className="not-italic text-accent">everything in-between.</em>
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              CUSEC is a 3-day software engineering conference organized by
              students, for students. Each year it brings together engineers,
              researchers, and industry leaders from across Canada for talks,
              workshops, a career fair, and unforgettable networking.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="border border-line p-4"
                >
                  <p className="font-bold text-charcoal">{h.label}</p>
                  <p className="mt-1 text-sm text-muted">{h.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
