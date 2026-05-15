import { BarChart3, FileSearch, Target, Users, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Pontuação por instituição",
    desc: "Veja como seu currículo se comporta de acordo com os critérios disponíveis.",
  },
  {
    icon: FileSearch,
    title: "Baseado em editais",
    desc: "A análise considera regras usadas nos processos seletivos de residência.",
  },
  {
    icon: Target,
    title: "Diagnóstico de lacunas",
    desc: "Entenda onde você pode ganhar mais pontos com o tempo que ainda tem.",
  },
  {
    icon: Users,
    title: "Comparação com aprovados Medway",
    desc: "Tenha uma referência mais concreta para entender seu momento atual.",
  },
];

export function Differentials() {
  return (
    <section id="diferencial" className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Diferenciais</span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
          O que torna o Medway Currículo diferente.
        </h2>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-mint-soft text-brand-navy">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-brand-navy">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://curriculo.medway.com.br/signup"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-7 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-brand-navy-soft"
        >
          Acessar gratuitamente
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
