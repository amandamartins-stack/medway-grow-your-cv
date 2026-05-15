import { AlertCircle, Clock, FileQuestion, Target } from "lucide-react";

const items = [
  {
    icon: FileQuestion,
    title: "Cada edital avalia de um jeito",
    desc: "O mesmo currículo pode ter pesos diferentes dependendo da instituição.",
  },
  {
    icon: Clock,
    title: "Nem sempre dá para fazer tudo",
    desc: "Quando o tempo é limitado, saber o que priorizar faz diferença.",
  },
  {
    icon: AlertCircle,
    title: "A comparação gera ansiedade",
    desc: "Sem uma referência clara, fica fácil achar que está fazendo pouco ou investir energia no lugar errado.",
  },
  {
    icon: Target,
    title: "A decisão fica menos estratégica",
    desc: "Entender onde seu currículo performa melhor pode ajudar na escolha das instituições.",
  },
];

export function Problem() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">O problema</span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
          Você sabe se o seu currículo está te aproximando da aprovação?
        </h2>
        <p className="mt-5 text-pretty text-base text-ink-soft md:text-lg">
          Na residência médica, o currículo pode fazer diferença. Mas cada instituição tem
          critérios próprios, pesos diferentes e regras que nem sempre são fáceis de comparar.
        </p>
        <p className="mt-3 text-pretty text-base text-ink-soft md:text-lg">
          No fim, muita gente segue construindo currículo sem saber o que realmente vale ponto
          ou onde ainda dá tempo de melhorar.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mint-soft text-brand-navy">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-navy md:text-lg">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
