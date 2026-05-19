import LOGO from "@/assets/logo-medway-curriculos-branco.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-navy text-white">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
        <div>
          <img src={LOGO} alt="Medway Currículos" className="h-10 w-auto" />
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
          <a href="#produto" className="hover:text-white">Como funciona</a>
          <a href="#diferencial" className="hover:text-white">Diferenciais</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page text-center text-xs text-white/60">
          © {new Date().getFullYear()} Medway. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
