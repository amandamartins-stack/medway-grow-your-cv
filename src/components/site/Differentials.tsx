import { Brain, Layers, ShieldCheck, Zap } from "lucide-react";

export function Differentials() {
  return (
    <section id="diferencial" className="container-page py-24 md:py-32">
      <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Por que Medway</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
            Não é mais um gerador de currículo.
          </h2>
          <p className="mt-5 max-w-md text-pretty text-ink-soft md:text-lg">
            É uma ferramenta construída sobre uma década de inteligência da Medway em residência
            médica e carreira.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-brand-navy">+10</span>
              <span className="text-sm text-ink-soft">anos preparando médicos</span>
            </div>
            <div className="mt-3 h-px bg-border" />
            <p className="mt-3 text-sm text-ink-soft">
              A mesma metodologia que aprovou milhares de candidatos nas residências mais
              concorridas do país.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card
            icon={Brain}
            title="Inteligência de banca"
            desc="Critérios que refletem o que realmente é avaliado em USP, UNIFESP, UNICAMP, ENARE e mais."
            tone="navy"
          />
          <Card
            icon={Layers}
            title="Versionamento"
            desc="Tenha um currículo para cada objetivo: residência, liga, estágio, R+. Sem refazer do zero."
          />
          <Card
            icon={ShieldCheck}
            title="Padrão profissional"
            desc="Formatação cuidada, sem ruído visual. Seu conteúdo é o que aparece — não a tabela do Word."
          />
          <Card
            icon={Zap}
            title="Atualização contínua"
            desc="Quando as regras mudam, sua ferramenta também. Você não precisa caçar editais."
            tone="mint"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
  tone = "default",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  tone?: "default" | "navy" | "mint";
}) {
  const styles =
    tone === "navy"
      ? "bg-brand-navy text-white border-brand-navy"
      : tone === "mint"
        ? "bg-brand-mint text-brand-navy border-brand-mint"
        : "bg-card text-ink border-border";
  const sub = tone === "default" ? "text-ink-soft" : tone === "navy" ? "text-white/75" : "text-brand-navy/75";
  const iconWrap =
    tone === "navy"
      ? "bg-white/10 text-brand-mint"
      : tone === "mint"
        ? "bg-brand-navy text-brand-mint"
        : "bg-brand-mint-soft text-brand-navy";
  return (
    <div className={`group rounded-2xl border p-7 transition hover:-translate-y-0.5 ${styles}`}>
      <div className={`grid h-11 w-11 place-items-center rounded-xl ${iconWrap}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${sub}`}>{desc}</p>
    </div>
  );
}
