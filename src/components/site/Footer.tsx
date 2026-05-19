import LOGO from "@/assets/logo-medway.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2/40">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
        <div>
          <img src={LOGO} alt="Medway" className="h-9 w-auto" />
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
          <a href="#produto" className="hover:text-brand-navy">Como funciona</a>
          <a href="#diferencial" className="hover:text-brand-navy">Diferenciais</a>
          <a href="#faq" className="hover:text-brand-navy">FAQ</a>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <div className="container-page text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} Medway. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
