import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Magnet from "@/components/Magnet";
import Container from "./Container";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#E5E2D6]",
        scrolled
          ? "bg-[#FBF9EF]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-1.5">
          <span className="font-heading text-2xl font-bold text-[#0A0A0A]">
            GSB2
          </span>
          <span className="text-sm text-[#4A473A] font-medium">
            Publicidade
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#C3002F]",
                location.pathname === link.href
                  ? "text-[#C3002F]"
                  : "text-[#0A0A0A]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Magnet padding={60} magnetStrength={1.5}>
          <a
            href="#contato"
            className="btn-text-slide hidden md:inline-flex items-center justify-center rounded-[4px] px-6 py-2.5 text-sm font-semibold bg-[#C3002F] text-white hover:bg-[#A00025] transition-colors"
          >
            <span className="btn-text">Fale Conosco</span>
            <span className="btn-text-hover">Fale Conosco</span>
          </a>
        </Magnet>
      </Container>
    </nav>
  );
}
