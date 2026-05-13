import { AlertCircle, Clock, FileQuestion, Target } from "lucide-react";

const items = [
  {
    icon: FileQuestion,
    title: "Você não sabe o que entra (e o que fica de fora).",
    desc: "Cada banca valoriza algo diferente. Sem critério claro, fica fácil esquecer o que pesa de verdade.",
  },
  {
    icon: Clock,
    title: "Horas perdidas formatando no Word.",
    desc: "Tempo que deveria ser de estudo virou ajuste de margem, fonte e espaçamento. Sempre.",
  },
  {
    icon: Target,
    title: "Falta direção estratégica.",
    desc: "Mais do que listar atividades, é preciso narrar uma trajetória que faça sentido para o avaliador.",
  },
  {
    icon: AlertCircle,
    title: "O risco é alto demais para improvisar.",
    desc: "Um currículo fraco pode custar pontos decisivos — em provas onde décimos definem aprovação.",
  },
];

export function Problem() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">O problema</span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
          Currículo médico não é só um documento.
          <br />
          <span className="text-ink-soft">É um filtro.</span>
        </h2>
        <p className="mt-5 text-pretty text-base text-ink-soft md:text-lg">
          E a maioria dos candidatos chega na hora da inscrição com um arquivo improvisado, montado
          às pressas, sem critério estratégico.
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
