import { Stethoscope, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const blocks = [
  {
    icon: Stethoscope,
    eyebrow: "Bloco 1",
    title: "Diagnóstico",
    items: [
      {
        title: "Pontuação em 13 instituições",
        desc: "Das mais concorridas do país (Einstein, USP-SP, USP-RP, Unicamp e mais), cada uma com os critérios do próprio edital.",
      },
      {
        title: "Baseado nos editais oficiais",
        desc: "Não é estimativa genérica. O cálculo segue as regras reais de cada processo seletivo, para 56 especialidades.",
      },
      {
        title: "Compare com quem passou",
        desc: "Seu currículo lado a lado com o perfil de aprovados de verdade, categoria por categoria. Números reais, não média inventada.",
      },
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "Bloco 2",
    title: "Meu Plano Medway",
    items: [
      {
        title: "Plano Medway, gerado pela IA exclusiva",
        desc: "Com base no seu diagnóstico e na instituição que você mira.",
      },
      {
        title: "O único que te diz o que fazer depois do diagnóstico",
        desc: "Prioridades na ordem certa, para cada prova, sempre que você quiser gerar de novo.",
      },
    ],
  },
];

export function Differentials() {
  return (
    <section id="diferencial" className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Diferenciais</span>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-navy md:text-5xl">
          O que torna o Medway Currículo diferente.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-mint-soft text-brand-navy">
                <b.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-mint">{b.eyebrow}</span>
                <h3 className="text-xl font-semibold text-brand-navy">{b.title}</h3>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {b.items.map((it) => (
                <li key={it.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-mint" />
                  <div>
                    <p className="font-semibold text-brand-navy">{it.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{it.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
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
