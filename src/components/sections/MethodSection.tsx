import AnimatedContent from "@/components/AnimatedContent";
import CountUp from "@/components/CountUp";
import SectionLabel from "@/components/shared/SectionLabel";
import Container from "@/components/layout/Container";

export default function MethodSection() {
  return (
    <section className="bg-black text-white py-[70px] md:py-[130px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <AnimatedContent direction="horizontal" distance={60} reverse>
            <div>
              <SectionLabel text="Nosso Metodo" variant="dark" />
              <h2
                className="font-heading font-bold mt-6 leading-[1.15]"
                style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
              >
                Processo criativo com resultado comprovado
              </h2>
              <p className="text-white/60 mt-6 leading-relaxed text-base md:text-lg max-w-[500px]">
                Nosso metodo combina pesquisa aprofundada, estrategia clara e
                execucao impecavel. Cada projeto passa por etapas rigorosas para
                garantir que o resultado final supere expectativas.
              </p>

              <div className="flex -space-x-3 mt-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-xs font-medium text-white/60"
                  >
                    {i}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="font-heading text-5xl md:text-7xl font-bold text-[#C3002F]">
                  <CountUp to={30} duration={2.5} />
                </div>
                <p className="text-white/50 text-sm mt-1">
                  anos de experiencia
                </p>
              </div>
            </div>
          </AnimatedContent>

          {/* Right */}
          <AnimatedContent direction="horizontal" distance={60}>
            <div className="w-full aspect-[4/5] rounded-xl bg-white/5 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#C3002F]/20 to-transparent flex items-center justify-center">
                <span className="text-white/20 font-heading text-lg">
                  Imagem do Processo
                </span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </Container>
    </section>
  );
}
