import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard-v2.png.asset.json";
import heroAnalise from "@/assets/hero-analise.png.asset.json";


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 85% 0%, color-mix(in oklab, var(--brand-mint) 22%, transparent) 0%, transparent 55%), linear-gradient(180deg, var(--surface-2) 0%, var(--background) 70%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.27 0.10 264 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.27 0.10 264 / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 35%, transparent 75%)",
        }}
        aria-hidden
      />
      <div
        className="absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--gradient-mint)" }}
        aria-hidden
      />

      <div className="container-page relative pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-brand-mint" /> Novo · Medway Currículo
            </span>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-brand-navy md:text-6xl lg:text-[64px]">
              Descubra quanto seu currículo{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-navy">vale</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full opacity-70"
                  style={{ background: "var(--brand-mint)" }}
                />
              </span>{" "}
              e o que fazer pra melhorar.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
              Veja sua pontuação estimada em cada instituição, com base nos editais oficiais.
              Receba o <span className="font-semibold text-brand-navy">Meu Plano Medway</span>:
              um plano personalizado com o que você precisa priorizar para subir sua nota.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://curriculo.medway.com.br/signup"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-7 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-brand-navy-soft"
              >
                Acessar grátis
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>

            <p className="mt-4 text-sm text-ink-soft">
              Já tem conta?{" "}
              <a
                href="https://curriculo.medway.com.br/login"
                className="font-semibold text-brand-navy underline-offset-4 hover:underline"
              >
                Fazer login
              </a>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-ink-soft">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-mint" />
                Validado por especialistas Medway
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div>+ 20.000 aprovações em todo o Brasil</div>
            </div>
          </div>

          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl animate-fade-up [animation-delay:120ms]">
      <div
        className="absolute -inset-10 -z-10 rounded-[2.5rem] opacity-25 blur-3xl"
        style={{ background: "var(--gradient-mint)" }}
        aria-hidden
      />

      {/* Main screenshot — Dashboard */}
      <div
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-white shadow-elevated animate-float-soft"
      >
        <img
          src={heroDashboard.url}
          alt="Dashboard do Medway Currículo com pódio das instituições e nota do candidato"
          className="block w-full"
          loading="eager"
        />
      </div>

      {/* Floating — Análise (canto superior esquerdo, sobrepondo a dashboard) */}
      <div className="absolute -top-10 -left-10 hidden w-[62%] overflow-hidden rounded-xl border border-border/60 bg-white shadow-elevated sm:block md:-top-14 md:-left-14 md:w-[58%]">
        <img
          src={heroAnalise.url}
          alt="Análise de pontos fortes e a desenvolver gerada pelo Medway Currículo"
          className="block w-full"
          loading="eager"
        />
      </div>

    </div>
  );
}

