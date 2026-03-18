import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import SectionLabel from "@/components/shared/SectionLabel";
import StatCounter from "@/components/shared/StatCounter";
import Container from "@/components/layout/Container";

export default function AboutSection() {
  return (
    <section className="bg-[#FBF9EF] py-[70px] md:py-[130px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <AnimatedContent direction="horizontal" distance={60} reverse>
            <div>
              <SectionLabel text="Quem Somos" />
              <h2
                className="font-heading font-bold text-[#0A0A0A] mt-6 leading-[1.15]"
                style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
              >
                Uma agencia que respira criatividade ha tres decadas
              </h2>

              <div className="flex -space-x-3 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#E5E2D6] border-2 border-[#FBF9EF] flex items-center justify-center text-xs font-medium text-[#4A473A]"
                  >
                    {i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#C3002F] border-2 border-[#FBF9EF] flex items-center justify-center text-xs font-bold text-white">
                  +
                </div>
              </div>

              <p className="text-[#4A473A] mt-6 leading-relaxed text-base md:text-lg">
                Desde 1995, a GSB2 Publicidade combina estrategia e design para
                construir marcas que se destacam. Somos especialistas em
                transformar ideias em identidades visuais poderosas, campanhas
                memoraveis e experiencias digitais que geram resultados.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Branding", "Publicidade", "Digital", "Embalagens"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[#F5F3E8] text-[#4A473A] rounded-full"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                <StatCounter to={1000} suffix="+" label="Projetos entregues" />
                <StatCounter to={5000} suffix="+" label="Pecas criadas" />
                <StatCounter to={500} suffix="+" label="Clientes atendidos" />
                <StatCounter to={30} label="Anos de mercado" />
              </div>
            </div>
          </AnimatedContent>

          {/* Right column - images */}
          <FadeContent blur duration={1200}>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-xl bg-[#E5E2D6] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#C3002F]/10 to-[#E5E2D6] flex items-center justify-center">
                  <span className="text-[#4A473A]/30 font-heading text-lg">
                    Imagem Principal
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-4 md:-left-8 w-[55%] aspect-[4/3] rounded-xl bg-[#0A0A0A] overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/30 font-heading text-sm">
                    Imagem Secundaria
                  </span>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </Container>
    </section>
  );
}
