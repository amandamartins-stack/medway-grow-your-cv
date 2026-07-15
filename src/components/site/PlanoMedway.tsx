import { ArrowRight, Sparkles } from "lucide-react";
import planoImg1 from "@/assets/plano-medway-1.png.asset.json";
import planoImg2 from "@/assets/plano-medway-2.png.asset.json";
import planoImg3 from "@/assets/plano-medway-3.png.asset.json";

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
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
          <div>
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

            <div className="mt-10 flex">
              <a
                href="https://curriculo.medway.com.br/signup"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-mint px-7 text-sm font-semibold text-brand-navy shadow-mint transition hover:translate-y-[-1px] hover:brightness-105"
              >
                Gerar meu Plano Medway
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <PlanoPreview />
        </div>
      </div>
    </section>
  );
}

function PlanoPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:120ms]">
      <div
        className="absolute -inset-10 -z-10 rounded-[2.5rem] opacity-30 blur-3xl"
        style={{ background: "var(--gradient-mint)" }}
        aria-hidden
      />

      {/* Main screenshot — Ações priorizadas */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/20 bg-white animate-float-soft ring-1 ring-black/5"
        style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55), 0 12px 30px -12px rgba(0,0,0,0.4)" }}
      >
        <img
          src={planoImg1.url}
          alt="Ações priorizadas do Plano Medway com pontuação por instituição"
          className="block w-full"
          loading="lazy"
        />
      </div>

      {/* Floating top — Análise inicial */}
      <div
        className="absolute -top-10 -left-10 hidden w-[60%] overflow-hidden rounded-xl border border-white/20 bg-white ring-1 ring-black/5 sm:block"
        style={{ boxShadow: "0 25px 50px -18px rgba(0,0,0,0.6), 0 8px 20px -8px rgba(0,0,0,0.35)" }}
      >
        <img
          src={planoImg2.url}
          alt="Análise de pontos fortes e a desenvolver gerada pelo Plano Medway"
          className="block w-full"
          loading="lazy"
        />
      </div>

      {/* Floating bottom — Mais ações */}
      <div
        className="absolute -bottom-10 -right-8 hidden w-[55%] overflow-hidden rounded-xl border border-white/20 bg-white ring-1 ring-black/5 sm:block"
        style={{ boxShadow: "0 25px 50px -18px rgba(0,0,0,0.6), 0 8px 20px -8px rgba(0,0,0,0.35)" }}
      >
        <img
          src={planoImg3.url}
          alt="Mais ações recomendadas pelo Plano Medway com esforço e prazo"
          className="block w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
