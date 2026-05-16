export default function CommunityNetwork() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
          CUSEC Network
        </h2>

        <div className="flex items-start gap-6">
          <div className="mt-0.5 flex items-center gap-2 text-muted">
            <span className="text-sm">←</span>
            <span aria-label="Canada">🍁</span>
            <span className="text-sm">→</span>
          </div>
          <div>
            <p className="font-medium text-charcoal">
              A connected network of Canadian builders.
            </p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
              A future home for students, alumni, speakers, and builders
              connected through CUSEC, from every province, every cohort, every
              year.{" "}
              <em>Coming soon.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
