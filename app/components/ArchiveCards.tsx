const archiveItems = [
  {
    year: "CUSEC 2025",
    location: "Montréal, QC",
    description: "The most recent edition of CUSEC.",
    href: "#",
  },
  {
    year: "CUSEC 2024",
    location: "Ottawa, ON",
    description: "The return of CUSEC after a hiatus.",
    href: "#",
  },
  {
    year: "CUSEC 2020",
    location: "Montréal, QC",
    description: "The last pre-COVID edition.",
    href: "#",
  },
  {
    year: "CUSEC 2015",
    location: "Montréal, QC",
    description: "Milestone year with 380+ speakers.",
    href: "#",
  },
  {
    year: "CUSEC 2010",
    location: "Montréal, QC",
    description: "A decade of growth, nationally.",
    href: "#",
  },
  {
    year: "Early Archive",
    location: "2002-2009",
    description: "The founding years of CUSEC.",
    href: "#",
  },
];

export default function ArchiveCards() {
  return (
    <section className="border-b border-line" id="archive">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          Archive
        </span>

        <h2 className="mb-12 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-charcoal md:text-4xl">
          25 years of CUSEC, preserved.
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archiveItems.map((item) => (
            <a
              key={item.year}
              href={item.href}
              className="group border border-line p-6 transition-colors hover:border-charcoal/30 hover:bg-charcoal/[0.02]"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                {item.location}
              </p>
              <h3 className="mt-2 text-xl font-bold text-charcoal">
                {item.year}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <p className="mt-5 text-xs font-medium text-charcoal transition-colors group-hover:text-accent">
                View archive →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
