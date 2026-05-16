export default function Header() {
  return (
    <header className="border-b border-line bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="/" className="font-bold tracking-tight text-charcoal">
          CUSEC
        </a>
        <a
          href="#"
          className="text-sm text-charcoal transition-colors hover:text-accent"
        >
          Visit CUSEC 2026's site →
        </a>
      </div>
    </header>
  );
}
