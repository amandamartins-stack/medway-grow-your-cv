import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div
        className="absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-mint)" }}
        aria-hidden
      />

      <div className="container-page relative pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="text-white animate-fade-up">
            <span className="eyebrow-light">
              <Sparkles className="h-3.5 w-3.5" /> Novo · Medway Currículo
            </span>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[68px]">
              O currículo médico que{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-mint">abre portas</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full opacity-30"
                  style={{ background: "var(--brand-mint)" }}
                />
              </span>{" "}
              de verdade.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
              Monte, organize e valide seu currículo com a metodologia Medway. Estruturado para
              residência, ligas, estágios e processos seletivos — sem achismo e sem tempo perdido.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-mint px-7 text-sm font-semibold text-brand-navy shadow-mint transition hover:translate-y-[-1px] hover:brightness-105"
              >
                Criar meu currículo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#produto"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Ver como funciona
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-mint" />
                Validado por especialistas Medway
              </div>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <div>+ de 50.000 médicos confiam na Medway</div>
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
    <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:120ms]">
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-2xl"
        style={{ background: "var(--gradient-mint)" }}
        aria-hidden
      />
      <div className="rounded-[1.75rem] border border-white/10 bg-white/95 p-5 shadow-elevated backdrop-blur-xl animate-float-soft">
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-brand-navy text-white grid place-items-center text-xs font-bold">
              MC
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold text-ink">Dra. Ana Ribeiro</div>
              <div className="text-[10px] text-ink-soft">CRM 123.456 · Medicina · 6º ano</div>
            </div>
          </div>
          <div className="rounded-full bg-brand-mint-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            Pronto para enviar
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {[
            { label: "Formação acadêmica", value: 100 },
            { label: "Ligas e extensões", value: 92 },
            { label: "Pesquisa & publicações", value: 78 },
            { label: "Estágios eletivos", value: 64 },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between text-[11px] font-medium text-ink-soft">
                <span>{row.label}</span>
                <span className="text-ink">{row.value}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${row.value}%`,
                    background: "var(--gradient-mint)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border/60 pt-4 text-center">
          <Stat k="12" v="experiências" />
          <Stat k="4" v="publicações" />
          <Stat k="A+" v="score Medway" />
        </div>
      </div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-surface-2 px-2 py-2.5">
      <div className="text-base font-bold text-brand-navy">{k}</div>
      <div className="text-[10px] uppercase tracking-wider text-ink-soft">{v}</div>
    </div>
  );
}
