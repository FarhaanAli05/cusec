const stats = [
  { value: "25+", label: "Years running" },
  { value: "10K+", label: "Attendees" },
  { value: "270+", label: "Sponsors" },
  { value: "380+", label: "Speakers" },
];

export default function Stats() {
  return (
    <section className="border-b border-charcoal/20 bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-cream/40">
          In Numbers
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-cream/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
