const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-xl font-black tracking-tight text-charcoal">
              CUSEC
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Canadian University Software Engineering Conference. Est. 2002.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                Conference
              </p>
              <div className="flex flex-col gap-2.5">
                <a href="#about" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">About</a>
                <a href="#history" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">History</a>
                <a href="#" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">CUSEC 2027</a>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                Get Involved
              </p>
              <div className="flex flex-col gap-2.5">
                <a href="#sponsors" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">Sponsor</a>
                <a href="#archive" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">Archive</a>
                <a href="mailto:hello@cusec.net" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">Contact</a>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                Follow
              </p>
              <div className="flex flex-col gap-2.5">
                <a href="#" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">Twitter / X</a>
                <a href="#" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">LinkedIn</a>
                <a href="#" className="text-sm text-charcoal/70 transition-colors hover:text-charcoal">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted">
            © {currentYear} CUSEC. All rights reserved.
          </p>
          <p className="text-xs text-muted">cusec.net</p>
        </div>
      </div>
    </footer>
  );
}
