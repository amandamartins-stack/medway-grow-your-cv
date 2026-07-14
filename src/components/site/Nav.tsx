import { Link } from "@tanstack/react-router";
import LOGO from "@/assets/logo-medway-curriculo.png";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Medway Currículo" className="h-8 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <a href="#produto" className="transition hover:text-brand-navy">Como funciona</a>
          <a href="#plano-medway" className="transition hover:text-brand-navy">Plano Medway</a>
          <a href="#diferencial" className="transition hover:text-brand-navy">Diferenciais</a>
          <a href="#para-quem" className="transition hover:text-brand-navy">Para quem é</a>
          <a href="#faq" className="transition hover:text-brand-navy">FAQ</a>
        </nav>

        <a
          href="#cta"
          className="inline-flex h-10 items-center justify-center rounded-full bg-brand-navy px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-navy-soft"
        >
          Acessar Currículo
        </a>
      </div>
    </header>
  );
}
