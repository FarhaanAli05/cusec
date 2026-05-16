const archiveItems = [
  { year: "CUSEC 2025", location: "Montréal, QC", href: "#" },
  { year: "CUSEC 2024", location: "Ottawa, ON", href: "#" },
  { year: "CUSEC 2020", location: "Montréal, QC", href: "#" },
  { year: "CUSEC 2015", location: "Montréal, QC", href: "#" },
  { year: "CUSEC 2010", location: "Montréal, QC", href: "#" },
  { year: "Early Archive", location: "2002-2009", href: "#" },
];

export default function ArchiveCards() {
  return (
    <section className="border-t border-line" id="archive">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-widest text-muted">
          Archive
        </h2>

        <div>
          {archiveItems.map((item) => (
            <a
              key={item.year}
              href={item.href}
              className="-mx-2 flex items-center justify-between border-t border-line px-2 py-4 transition-colors hover:bg-charcoal/[0.02]"
            >
              <span className="font-medium text-charcoal">{item.year}</span>
              <span className="text-sm text-muted">{item.location}</span>
            </a>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
