import Image from "next/image";

export default function WhoIsItFor() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <span className="mb-12 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          Who is it for?
        </span>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Text — left on desktop */}
          <div className="order-2 flex flex-col justify-center md:order-1">
            <p className="text-3xl font-semibold leading-tight tracking-tight text-charcoal md:text-4xl">
              Whether you're just starting out
              <br />
              or far along, this is a place
              <br />
              for you to{" "}
              <em className="not-italic text-accent">make things.</em>
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              Writing your first program, shipping side projects, looking for
              internships, or exploring software engineering as a career.
              CUSEC is built to help you learn, meet people, and get inspired.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              We know it can be intimidating to start. You'll be surrounded by
              others doing the same.
            </p>
            <a
              href="#"
              className="mt-8 w-fit rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-accent/90"
            >
              Attend CUSEC 2027 →
            </a>
          </div>

          {/* Image — right on desktop */}
          <div
            className="relative order-1 w-full overflow-hidden md:order-2"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src="/bliss-trees.png"
              alt="Trees representing growth and community at CUSEC"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
