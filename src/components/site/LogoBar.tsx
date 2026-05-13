export function LogoBar() {
  const items = [
    "USP", "UNIFESP", "UNICAMP", "UFRJ", "UFMG", "Santa Casa", "Albert Einstein", "Sírio-Libanês",
  ];
  return (
    <section className="border-y border-border/60 bg-surface-2/60">
      <div className="container-page flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Aprovados das principais instituições do país
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((i) => (
            <span
              key={i}
              className="text-sm font-semibold text-ink-soft/70 transition hover:text-brand-navy"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
