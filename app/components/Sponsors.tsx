const sponsors = [
  "Shopify",
  "Ubisoft",
  "Microsoft",
  "Autodesk",
  "Google",
  "GitHub",
  "Jane Street",
  "Bloomberg",
  "IBM",
  "RBC",
];

export default function Sponsors() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-widest text-muted">
          Past sponsors and partners include
        </h2>

        <div className="flex flex-wrap gap-2">
          {sponsors.map((name) => (
            <span
              key={name}
              className="border border-line px-4 py-2 text-sm font-medium text-charcoal/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
