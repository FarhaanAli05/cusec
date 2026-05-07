const timelineItems = [
  { year: "2002", event: "CUSEC is founded in Montréal, QC." },
  {
    year: "2008",
    event:
      "Conference grows to a national scale, drawing universities from coast to coast.",
  },
  {
    year: "2015",
    event: "380+ speakers and 10,000+ cumulative attendees reached.",
  },
  { year: "2020", event: "Conference paused due to COVID-19." },
  {
    year: "2024",
    event:
      "CUSEC returns with renewed momentum and a new generation of student organizers.",
  },
  { year: "2027", event: "Building the next chapter." },
];

export default function Timeline() {
  return (
    <section className="border-b border-line" id="history">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <span className="mb-12 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
          History
        </span>

        <div className="mt-12">
          {timelineItems.map((item, idx) => (
            <div
              key={item.year}
              className="flex items-start gap-6 border-t border-line py-6 md:gap-10 md:py-8"
            >
              <span className="w-14 shrink-0 font-mono text-sm tabular-nums text-muted md:w-20">
                {item.year}
              </span>
              <div className="flex items-center gap-4">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p
                  className={`text-base leading-relaxed md:text-lg ${
                    idx === timelineItems.length - 1
                      ? "font-semibold text-charcoal"
                      : "text-charcoal/80"
                  }`}
                >
                  {item.event}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
