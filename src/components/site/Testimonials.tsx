const quotes = [
  {
    quote:
      "Eu passei 3 finais de semana mexendo no meu currículo no Word. Em uma tarde, refiz tudo aqui — e finalmente parecia profissional.",
    name: "Marina A.",
    role: "Aprovada R1 · Cirurgia Geral",
  },
  {
    quote:
      "O que mudou pra mim foi entender o que valia ponto e o que era ruído. A ferramenta deixa isso óbvio.",
    name: "Lucas P.",
    role: "Candidato R+ · Cardiologia",
  },
  {
    quote:
      "Como coordenador de liga, recomendei pra todo mundo. Currículo limpo, padrão, sem perder a identidade do estudante.",
    name: "Dr. Felipe M.",
    role: "Preceptor · USP",
  },
];

export function Testimonials() {
  return (
    <section className="bg-brand-navy py-24 text-white md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light">Quem usa</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Construído com — e para — quem vive a medicina.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <blockquote className="text-base leading-relaxed text-white/90">
                <span className="text-brand-mint">“</span>
                {q.quote}
                <span className="text-brand-mint">”</span>
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <div className="text-sm font-semibold text-white">{q.name}</div>
                <div className="text-xs text-white/60">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
