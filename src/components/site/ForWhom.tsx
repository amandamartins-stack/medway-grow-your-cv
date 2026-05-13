import { GraduationCap, Stethoscope, Microscope } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    tag: "Graduação",
    title: "Estudantes de medicina",
    desc: "Comece a construir um currículo competitivo desde o início. Não deixe para o sexto ano descobrir o que faltou.",
    bullets: ["Roteiro por ano de curso", "Sinalização do que pesa em cada banca", "Modelo para liga, IC e monitoria"],
  },
  {
    icon: Stethoscope,
    tag: "Residência",
    title: "Candidatos a R1",
    desc: "Apresente uma trajetória clara, defensável e alinhada ao que cada processo seletivo espera ler.",
    bullets: ["Estrutura por instituição", "Validação Medway antes da inscrição", "Versão otimizada para prova de títulos"],
  },
  {
    icon: Microscope,
    tag: "R+ e carreira",
    title: "Médicos em transição",
    desc: "Para quem busca R+, fellow, mestrado ou nova posição clínica — com o mesmo padrão de exigência.",
    bullets: ["Foco em produção científica", "Versão internacional (EN)", "Layout para envio executivo"],
  },
];

export function ForWhom() {
  return (
    <section id="para-quem" className="bg-surface-2/60 py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Para quem é</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
            Em qualquer etapa da carreira médica.
          </h2>
          <p className="mt-5 text-pretty text-ink-soft md:text-lg">
            O Medway Currículo se adapta ao seu momento — e antecipa o próximo.
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

              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mint" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
