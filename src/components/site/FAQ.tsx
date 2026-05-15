import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "O Medway Currículo é gratuito?",
    a: "Sim. Você pode acessar gratuitamente a ferramenta e fazer seu diagnóstico curricular.",
  },
  {
    q: "Como a pontuação é calculada?",
    a: "A estimativa considera critérios dos editais das instituições disponíveis na plataforma.",
  },
  {
    q: "O resultado é minha nota oficial na prova de títulos?",
    a: "Não. O Medway Currículo oferece uma estimativa para orientar sua preparação. A nota oficial depende da avaliação da banca de cada processo seletivo.",
  },
  {
    q: "Quais instituições estão disponíveis?",
    a: "A estrutura cobre os principais formatos exigidos em provas de títulos pelo Brasil incluindo USP, UNIFESP, UNICAMP, ENARE e instituições privadas de referência.",
  },
  {
    q: "Serve para quem ainda está no 4º ou 5º ano?",
    a: "Sim. Quanto antes você entende seus gaps, mais tempo tem para construir um currículo competitivo.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Suas informações são usadas para gerar o diagnóstico dentro da plataforma e apoiar sua experiência com a ferramenta.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="container-page py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-brand-navy md:text-5xl">
            Tudo que você precisa saber antes de começar.
          </h2>
          <p className="mt-5 text-ink-soft">
            Não encontrou o que procurava?{" "}
            <a className="font-semibold text-brand-navy underline-offset-4 hover:underline" href="#cta">
              Fale com o time.
            </a>
          </p>
        </div>

        <ul className="divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-surface-2/60"
                >
                  <span className="text-base font-semibold text-brand-navy md:text-lg">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card transition group-hover:border-brand-mint">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{f.a}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
