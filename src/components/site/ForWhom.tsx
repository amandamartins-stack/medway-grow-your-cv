import { GraduationCap, Stethoscope, Compass } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    tag: "4º ano",
    title: "Para quem quer começar com direção",
    desc: "Entenda o que já conta para o seu currículo e use o tempo da faculdade a seu favor.",
    apoio: "Ideal para construir com antecedência.",
  },
  {
    icon: Compass,
    tag: "5º ano",
    title: "Para quem quer ajustar a rota",
    desc: "Veja se você está no caminho certo e identifique o que ainda pode melhorar antes da inscrição.",
    apoio: "Ideal para priorizar melhor.",
  },
  {
    icon: Stethoscope,
    tag: "6º ano e recém-formados",
    title: "Para quem precisa decidir com mais segurança",
    desc: "Descubra onde seu currículo é mais competitivo e use essa informação na escolha das instituições.",
    apoio: "Ideal para decidir onde apostar.",
  },
];

export function ForWhom() {
  return (
    <section id="para-quem" className="bg-surface-2/60 py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Para quem é</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
            Para quem quer construir ou avaliar o currículo com mais estratégia.
          </h2>
          <p className="mt-5 text-pretty text-ink-soft md:text-lg">
            O Medway Currículo ajuda em diferentes momentos da jornada até a residência.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {personas.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-mint-soft text-brand-navy">
                  <p.icon className="h-5.5 w-5.5" />
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-semibold text-brand-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>

              <div className="mt-6 border-t border-border pt-5">
                <p className="flex items-start gap-2.5 text-sm font-medium text-brand-navy">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mint" />
                  {p.apoio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
