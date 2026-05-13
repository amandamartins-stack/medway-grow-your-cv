import { Trophy, Award, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "+20.000",
    label: "aprovações em todo o País",
  },
  {
    icon: Award,
    value: "+2.700",
    label: "aprovações em primeiros lugares",
  },
  {
    icon: Trophy,
    value: "679",
    label: "convocados na USP-SP em 2026 são Medway",
  },
];

export function LogoBar() {
  return (
    <section className="border-y border-border/60 bg-surface-2/60">
      <div className="container-page py-14 md:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          A escola por trás de quem passa
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative flex items-center gap-5 rounded-2xl border border-border bg-card px-6 py-6 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-mint-soft text-brand-navy transition group-hover:bg-brand-mint">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
