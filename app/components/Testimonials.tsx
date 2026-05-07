const testimonials = [
  {
    quote:
      "You will learn more at CUSEC in 3 days than your entire 1st year of university.",
    author: "Michel Parisien",
    role: "Student",
    org: "Concordia University",
  },
  {
    quote:
      "What a blast. If you're a student up here doing anything software-related, attend. If you're a veteran and they ask you to speak, accept.",
    author: "Tim Bray",
    role: "Founder",
    org: "OpenText",
  },
  {
    quote:
      "CUSEC has grown into the premier conference by computer science students, for computer science students — across the whole of Canada.",
    author: "Jeff Atwood",
    role: "Co-founder",
    org: "Stack Overflow",
  },
  {
    quote:
      "Just letting you know I got interviews with both AutoDesk and Microsoft setup thanks to CUSEC.",
    author: "Loren",
    role: "Student",
    org: "Concordia University",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-line" id="about">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
            Voices from CUSEC
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-cream p-8 md:p-10">
              <blockquote>
                <p className="text-lg font-medium leading-relaxed text-charcoal md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal text-xs font-bold text-cream">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted">
                      {t.role} · {t.org}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
