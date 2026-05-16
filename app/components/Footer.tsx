const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-bold text-charcoal">CUSEC</p>
            <p className="mt-1 text-sm text-muted">
              Canadian University Software Engineering Conference. Est. 2002.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted">
            <a href="#about" className="transition-colors hover:text-charcoal">
              About
            </a>
            <a href="#archive" className="transition-colors hover:text-charcoal">
              Archive
            </a>
            <a
              href="mailto:hello@cusec.net"
              className="transition-colors hover:text-charcoal"
            >
              Contact
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-xs text-muted">
          &copy; {currentYear} CUSEC. All rights reserved. cusec.net
        </p>
      </div>
    </footer>
  );
}
