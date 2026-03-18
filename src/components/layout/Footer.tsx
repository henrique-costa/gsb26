import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo + contato */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="font-heading text-2xl font-bold">GSB2</span>
              <span className="text-sm text-white/60 font-medium">
                Publicidade
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              30 anos transformando marcas em experiencias memoraveis.
            </p>
            <p className="text-white/40 text-sm">contato@gsb2.com.br</p>
            <p className="text-white/40 text-sm">(11) 9999-0000</p>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-2">
              <span className="text-white/50 text-sm hover:text-[#C3002F] transition-colors cursor-pointer">
                Instagram
              </span>
              <span className="text-white/50 text-sm hover:text-[#C3002F] transition-colors cursor-pointer">
                LinkedIn
              </span>
              <span className="text-white/50 text-sm hover:text-[#C3002F] transition-colors cursor-pointer">
                Behance
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Navegacao
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-white/50 text-sm hover:text-[#C3002F] transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/portfolio"
                className="text-white/50 text-sm hover:text-[#C3002F] transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/sobre"
                className="text-white/50 text-sm hover:text-[#C3002F] transition-colors"
              >
                Sobre
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/30 text-xs">
            &copy; 2025 GSB2 Publicidade. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
