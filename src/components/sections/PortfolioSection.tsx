import AnimatedContent from "@/components/AnimatedContent";
import SectionLabel from "@/components/shared/SectionLabel";
import CTAButton from "@/components/shared/CTAButton";
import Container from "@/components/layout/Container";

const projects = [
  {
    title: "Rebrand Completo — Nova Identidade Visual",
    category: "Branding",
    tags: ["Identidade Visual", "Design"],
    wide: false,
  },
  {
    title: "Campanha Verao 2025 — Lancamento Nacional",
    category: "Publicidade",
    tags: ["Campanha", "Midia"],
    wide: false,
  },
  {
    title: "E-commerce Premium — Experiencia Digital Completa",
    category: "Digital",
    tags: ["Web", "E-commerce", "UX"],
    wide: true,
  },
  {
    title: "Linha de Embalagens — Design Sustentavel",
    category: "Embalagens",
    tags: ["Packaging", "Sustentabilidade"],
    wide: false,
  },
  {
    title: "Identidade Corporativa — Grupo Empresarial",
    category: "Branding",
    tags: ["Identidade Visual", "Corporativo"],
    wide: false,
  },
];

function PortfolioCard({
  title,
  tags,
  wide,
  index,
}: {
  title: string;
  tags: string[];
  wide: boolean;
  index: number;
}) {
  return (
    <AnimatedContent
      direction="vertical"
      distance={50}
      delay={index * 0.1}
      className={wide ? "col-span-1 lg:col-span-2" : ""}
    >
      <div className="group cursor-pointer">
        <div
          className={`relative w-full ${
            wide ? "aspect-[16/7]" : "aspect-[4/3]"
          } rounded-lg bg-[#E5E2D6] overflow-hidden`}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#F5F3E8] to-[#E5E2D6] flex items-center justify-center">
            <span className="text-[#4A473A]/20 font-heading text-base">
              Projeto
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-white font-heading font-semibold text-lg md:text-xl">
                {title}
              </p>
              <span className="inline-block mt-3 text-white/60 text-2xl">
                &rarr;
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-[#4A473A] font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
}

export default function PortfolioSection() {
  return (
    <section className="bg-[#FBF9EF] py-[70px] md:py-[130px]">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel text="Portfolio" />
            <h2
              className="font-heading font-bold text-[#0A0A0A] mt-6 leading-[1.15]"
              style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
            >
              Trabalhos selecionados
            </h2>
          </div>
          <CTAButton href="/portfolio" variant="outline">
            Ver Todos
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              tags={project.tags}
              wide={project.wide}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
