import AnimatedContent from "@/components/AnimatedContent";
import SpotlightCard from "@/components/SpotlightCard";
import SectionLabel from "@/components/shared/SectionLabel";
import Container from "@/components/layout/Container";

const capabilities = [
  {
    title: "Design",
    description:
      "Identidades visuais, logotipos e sistemas de marca que comunicam com clareza e impacto.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: true,
  },
  {
    title: "Publicidade",
    description: "Campanhas criativas que conectam marcas ao publico certo.",
    span: "lg:col-span-1",
    accent: false,
  },
  {
    title: "Digital",
    description:
      "Sites, e-commerce e experiencias digitais de alta performance.",
    span: "lg:col-span-1",
    accent: false,
  },
  {
    title: "Embalagens",
    description:
      "Packaging que se destaca na prateleira e conta a historia da marca.",
    span: "lg:col-span-1",
    accent: false,
  },
  {
    title: "Multilingue",
    description:
      "Adaptacao criativa para mercados internacionais com sensibilidade cultural.",
    span: "lg:col-span-1",
    accent: false,
  },
];

export default function BentoGridSection() {
  return (
    <section className="bg-[#FBF9EF] py-[70px] md:py-[130px]">
      <Container>
        <div className="text-center mb-12">
          <SectionLabel text="Capacidades" />
          <h2
            className="font-heading font-bold text-[#0A0A0A] mt-6 leading-[1.15]"
            style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
          >
            Nossas especialidades
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <AnimatedContent
              key={cap.title}
              direction="vertical"
              distance={40}
              delay={i * 0.1}
              className={cap.span}
            >
              <SpotlightCard
                className={`h-full rounded-xl p-8 md:p-10 ${
                  cap.accent
                    ? "bg-[#C3002F] text-white min-h-[300px]"
                    : "bg-white border border-[#E5E2D6] text-[#0A0A0A] min-h-[180px]"
                } flex flex-col justify-end`}
                spotlightColor={
                  cap.accent
                    ? `rgba(${255}, ${255}, ${255}, ${0.15})`
                    : `rgba(${195}, ${0}, ${47}, ${0.08})`
                }
              >
                <h3
                  className={`font-heading text-xl md:text-2xl font-semibold mb-3 ${
                    cap.accent ? "text-white" : "text-[#0A0A0A]"
                  }`}
                >
                  {cap.title}
                </h3>
                <p
                  className={`leading-relaxed text-sm md:text-base ${
                    cap.accent ? "text-white/80" : "text-[#4A473A]"
                  }`}
                >
                  {cap.description}
                </p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </Container>
    </section>
  );
}
