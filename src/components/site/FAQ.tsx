import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "O Medway Currículo é gratuito?",
    a: "Sim, o acesso inicial é gratuito para a comunidade Medway. Recursos avançados poderão estar disponíveis em planos específicos no futuro.",
  },
  {
    q: "Funciona para qualquer processo seletivo de residência?",
    a: "Sim. A estrutura cobre os principais formatos exigidos em provas de títulos pelo Brasil — incluindo USP, UNIFESP, UNICAMP, ENARE e instituições privadas de referência.",
  },
  {
    q: "Posso ter mais de uma versão do mesmo currículo?",
    a: "Pode. Você cria versões diferentes para residência, ligas, estágios eletivos, R+ ou processos internacionais, sem precisar reescrever do zero.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Tratamos seus dados em conformidade com a LGPD. Apenas você acessa seu currículo — nada é compartilhado sem sua autorização.",
  },
  {
    q: "Já posso usar agora?",
    a: "A ferramenta está em fase final de lançamento. Cadastre-se acima para receber o acesso assim que liberarmos.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="container-page py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
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
