import { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import SectionLabel from "@/components/shared/SectionLabel";
import Container from "@/components/layout/Container";

const services = [
  {
    number: "01",
    title: "Design de Embalagens",
    description:
      "Criamos embalagens que se destacam nas prateleiras e comunicam o valor da sua marca. Do conceito a producao, cuidamos de cada detalhe para garantir impacto visual e funcionalidade.",
  },
  {
    number: "02",
    title: "Campanhas Publicitarias",
    description:
      "Desenvolvemos campanhas integradas que conectam sua marca ao publico certo, no momento certo. Estrategia, criacao e execucao para resultados mensuraveis.",
  },
  {
    number: "03",
    title: "Sites e E-commerce",
    description:
      "Projetamos e desenvolvemos experiencias digitais que convertem. Sites institucionais, lojas virtuais e plataformas digitais com foco em performance e usabilidade.",
  },
  {
    number: "04",
    title: "Identidade Visual",
    description:
      "Construimos identidades visuais completas que traduzem a essencia da sua marca. Logotipos, sistemas visuais e guidelines que garantem consistencia em todos os pontos de contato.",
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FBF9EF] py-[70px] md:py-[130px]">
      <Container>
        <SectionLabel text="Servicos" />
        <h2
          className="font-heading font-bold text-[#0A0A0A] mt-6 mb-12 leading-[1.15]"
          style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
        >
          O que fazemos
        </h2>

        <div className="divide-y divide-[#E5E2D6]">
          {services.map((service, i) => (
            <AnimatedContent
              key={service.number}
              direction="vertical"
              distance={40}
              delay={i * 0.1}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full py-8 md:py-10 flex items-start gap-6 md:gap-10 text-left cursor-pointer group"
              >
                <span className="font-heading text-sm font-semibold text-[#C3002F] mt-1 shrink-0">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-3xl font-semibold text-[#0A0A0A] group-hover:text-[#C3002F] transition-colors">
                    {service.title}
                  </h3>
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: expandedIndex === i ? "200px" : "0px",
                      opacity: expandedIndex === i ? 1 : 0,
                    }}
                  >
                    <p className="text-[#4A473A] mt-4 leading-relaxed max-w-[600px]">
                      {service.description}
                    </p>
                  </div>
                </div>
                <span
                  className="text-2xl text-[#0A0A0A] transition-transform duration-300 mt-1 shrink-0"
                  style={{
                    transform:
                      expandedIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
            </AnimatedContent>
          ))}
        </div>
      </Container>
    </section>
  );
}
