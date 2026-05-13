import { CheckCircle2, FileText, Wand2, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: FileText,
    title: "Preencha guiado por categoria",
    desc: "Nada de página em branco. Você é guiado por seções pensadas pelo time Medway: formação, ligas, pesquisa, estágios, idiomas.",
  },
  {
    n: "02",
    icon: Wand2,
    title: "Estruturação inteligente",
    desc: "A ferramenta organiza, prioriza e formata automaticamente — seguindo o padrão que bancas e processos seletivos esperam ver.",
  },
  {
    n: "03",
    icon: CheckCircle2,
    title: "Validação Medway",
    desc: "Receba sinalizações sobre o que pode estar fraco, faltando ou mal posicionado. Você corrige antes de competir.",
  },
  {
    n: "04",
    icon: Download,
    title: "Exporte em PDF profissional",
    desc: "Layout limpo, tipografia clara, hierarquia correta. Pronto para anexar em qualquer processo.",
  },
];

export function Product() {
  return (
    <section id="produto" className="relative overflow-hidden bg-surface-2/60 py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="eyebrow">A solução</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
              Um currículo estratégico em <span className="text-brand-mint">4 passos</span>.
            </h2>
            <p className="mt-5 text-pretty text-ink-soft md:text-lg">
              Pensado para a realidade do estudante de medicina e do médico em transição.
              Sem fricção, sem suposição.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-brand-mint">{s.n}</span>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-navy text-white transition group-hover:bg-brand-mint group-hover:text-brand-navy">
                  <s.icon className="h-4.5 w-4.5" />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://curriculo.medway.com.br/signup"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-7 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-brand-navy-soft"
          >
            Criar minha conta
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
