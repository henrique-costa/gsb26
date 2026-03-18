import AnimatedContent from "@/components/AnimatedContent";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/shared/SectionLabel";

const cards = [
  {
    title: "Inovacao com proposito",
    description:
      "Acreditamos que a criatividade deve servir a um objetivo claro. Cada ideia, cada pixel, cada palavra e pensada para gerar impacto real nos resultados dos nossos clientes.",
  },
  {
    title: "Parceria de verdade",
    description:
      "Nao somos apenas fornecedores — somos parceiros estrategicos. Nos envolvemos profundamente no negocio de cada cliente para entregar solucoes que realmente fazem diferenca.",
  },
  {
    title: "Excelencia em cada detalhe",
    description:
      "Do briefing a entrega final, mantemos um padrao de qualidade inabalavel. Nosso compromisso com a excelencia e o que nos diferencia ha 30 anos no mercado.",
  },
  {
    title: "Visao de futuro",
    description:
      "Estamos sempre a frente das tendencias, adotando novas tecnologias e metodologias para garantir que as marcas dos nossos clientes estejam preparadas para o amanha.",
  },
];

export default function VisionSection() {
  return (
    <section className="bg-black text-white py-[70px] md:py-[130px]">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel text="Nossa Visao" variant="dark" />
          <h2
            className="font-heading font-bold mt-6 leading-[1.15]"
            style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
          >
            No que acreditamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <AnimatedContent
              key={card.title}
              direction="vertical"
              distance={50}
              delay={i * 0.15}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 hover:bg-white/[0.08] transition-colors">
                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4">
                  {card.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </Container>
    </section>
  );
}
