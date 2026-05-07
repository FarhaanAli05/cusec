import Image from "next/image";

const schools = [
  "Concordia University",
  "McGill University",
  "University of Waterloo",
  "University of Toronto",
  "McMaster University",
  "University of Ottawa",
  "Simon Fraser University",
  "Carleton University",
];

export default function LogoCloud() {
  const doubled = [...schools, ...schools];

  return (
    <section className="border-b border-line" id="sponsors">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          Schools & Partners
        </span>

        <h2 className="mb-14 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-charcoal md:text-4xl">
          Backed by schools, companies, and builders across Canada.
        </h2>

        {/* Scrolling logo marquee */}
        <div className="overflow-hidden border-t border-b border-line py-6">
          <div className="animate-marquee flex w-max items-center gap-6">
            {doubled.map((school, i) => (
              <div
                key={`${school}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center border border-line bg-cream px-4"
              >
                {school === "Carleton University" ? (
                  <Image
                    src="/carleton.png"
                    alt="Carleton University"
                    width={110}
                    height={36}
                    className="object-contain opacity-50 grayscale"
                  />
                ) : (
                  <span className="text-center text-xs font-medium leading-tight text-muted">
                    {school}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-muted">
          CUSEC has partnered with 270+ sponsors since 2002.{" "}
          <a
            href="#contact"
            className="text-charcoal underline underline-offset-2 transition-colors hover:text-accent"
          >
            Become a sponsor →
          </a>
        </p>
      </div>
    </section>
  );
}
