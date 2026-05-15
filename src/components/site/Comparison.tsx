import { Check, X } from "lucide-react";

const rows = [
  ["Ler critérios de diferentes editais", true, true],
  ["Comparar pesos por instituição", false, true],
  ["Estimar sua pontuação", false, true],
  ["Identificar gaps do currículo", false, true],
  ["Entender onde priorizar esforços", false, true],
  ["Ter uma visão mais clara para decidir", false, true],
];

export function Comparison() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Comparativo</span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
          O Word resolve. Até parar de resolver.
        </h2>
      </div>

      <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border bg-surface-2/60 text-xs font-semibold uppercase tracking-widest text-ink-soft">
          <div className="p-5">Recurso</div>
          <div className="border-l border-border p-5 text-center">Currículo manual</div>
          <div className="border-l border-border bg-brand-navy p-5 text-center text-brand-mint">
            Medway Currículo
          </div>
        </div>
        {rows.map(([label, manual, medway], i) => (
          <div
            key={String(label)}
            className={`grid grid-cols-[1.4fr_1fr_1fr] text-sm ${
              i % 2 === 0 ? "bg-card" : "bg-surface-2/40"
            }`}
          >
            <div className="p-5 font-medium text-ink">{label as string}</div>
            <div className="flex items-center justify-center border-l border-border p-5">
              {manual ? (
                <Check className="h-5 w-5 text-brand-mint" />
              ) : (
                <X className="h-5 w-5 text-ink-soft/50" />
              )}
            </div>
            <div className="flex items-center justify-center border-l border-border p-5">
              {medway ? (
                <Check className="h-5 w-5 text-brand-mint" />
              ) : (
                <X className="h-5 w-5 text-ink-soft/50" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
