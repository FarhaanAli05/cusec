export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-black tracking-tight text-charcoal">
          CUSEC
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {[
            ["About", "#about"],
            ["History", "#history"],
            ["Sponsors", "#sponsors"],
            ["Archive", "#archive"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-muted transition-colors hover:text-charcoal"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-charcoal/80"
        >
          Visit CUSEC 2027
        </a>
      </div>
    </header>
  );
}
