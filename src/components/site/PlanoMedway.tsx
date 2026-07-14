import { ArrowRight, Sparkles } from "lucide-react";

export function PlanoMedway() {
  return (
    <section id="plano-medway" className="relative overflow-hidden bg-brand-navy py-24 md:py-32 text-white">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-mint)" }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-light">
            <Sparkles className="h-3.5 w-3.5 text-brand-mint" /> Plano Medway
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            O diagnóstico mostra onde você está.{" "}
            <span className="text-brand-mint">O plano mostra o que fazer.</span>
          </h2>
          <p className="mt-6 text-pretty text-white/80 md:text-lg">
            Escolha suas provas-alvo e o ano. O Plano Medway usa nossa IA exclusiva para montar,
            em segundos, a ordem certa de prioridades para cada instituição que você mira.
          </p>
          <p className="mt-4 text-pretty text-white/70 md:text-base">
            Gere quantos planos quiser, pra quantas provas quiser. Sempre gratuito.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://curriculo.medway.com.br/signup"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-mint px-7 text-sm font-semibold text-brand-navy shadow-mint transition hover:translate-y-[-1px] hover:brightness-105"
            >
              Gerar meu Plano Medway
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
