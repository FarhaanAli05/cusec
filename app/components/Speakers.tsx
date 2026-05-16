const speakers = [
  { name: "Richard Stallman", role: "Founder of the GNU Project" },
  { name: "Jeff Atwood", role: "Co-founder of Stack Overflow" },
  { name: "Tim Bray", role: "Co-founder of OpenText" },
  { name: "Kent Beck", role: "Creator of Extreme Programming" },
  { name: "Joel Spolsky", role: "Co-founder of Stack Overflow" },
  { name: "Kathy Sierra", role: "Author and speaker" },
  { name: "David Parnas", role: "Software engineering researcher" },
];

export default function Speakers() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-widest text-muted">
          Past speakers include
        </h2>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <div key={s.name} className="border-t border-line py-4 pr-6">
              <p className="font-semibold text-charcoal">{s.name}</p>
              <p className="mt-0.5 text-sm text-muted">{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
