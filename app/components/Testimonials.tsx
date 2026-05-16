const testimonials = [
  {
    quote:
      "You will learn more at CUSEC in 3 days than your entire 1st year of university.",
    author: "Michel Parisien",
    attribution: "Student, Concordia University",
  },
  {
    quote:
      "What a blast. If you're a student up here doing anything software-related, attend. If you're a veteran and they ask you to speak, accept.",
    author: "Tim Bray",
    attribution: "Founder of OpenText",
  },
  {
    quote:
      "CUSEC has grown into the premier conference by computer science students, for computer science students, spanning the whole of Canada.",
    author: "Jeff Atwood",
    attribution: "Co-founder of Stack Overflow",
  },
  {
    quote:
      "Just letting you know I got interviews with both AutoDesk and Microsoft setup thanks to CUSEC.",
    author: "Loren",
    attribution: "Student, Concordia University",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-12 text-xs font-semibold uppercase tracking-widest text-muted">
          Voices from CUSEC
        </h2>

        <div>
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-[180px_1fr] md:gap-12"
            >
              <div className="text-sm text-muted">
                <p className="font-semibold text-charcoal">{t.author}</p>
                <p>{t.attribution}</p>
              </div>
              <blockquote>
                <p className="text-lg italic leading-relaxed text-charcoal">
                  "{t.quote}"
                </p>
              </blockquote>
            </div>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
