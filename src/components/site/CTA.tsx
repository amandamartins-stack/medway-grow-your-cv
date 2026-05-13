import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="container-page py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-brand-navy px-8 py-16 text-white md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-mint)" }}
          aria-hidden
        />
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />

        <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow-light">Comece agora</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Seu próximo currículo
              <br />
              <span className="text-brand-mint">não precisa ser improvisado.</span>
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-white/75 md:text-lg">
              Acesse o Medway Currículo e construa, em uma tarde, o documento que você passaria
              meses ajustando sozinho.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <label className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Receba o acesso assim que liberarmos
            </label>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-mint"
            />
            <a
              href="#"
              aria-disabled
              title="Em breve"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-mint text-sm font-semibold text-brand-navy shadow-mint transition hover:brightness-105"
            >
              Quero acesso ao Medway Currículo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <p className="text-[11px] text-white/50">
              Sem spam. Você pode sair quando quiser.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
