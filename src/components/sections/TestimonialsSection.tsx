import { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import SectionLabel from "@/components/shared/SectionLabel";
import Container from "@/components/layout/Container";

const testimonials = [
  {
    quote:
      "A GSB2 transformou completamente a percepcao da nossa marca no mercado. O trabalho de identidade visual superou todas as expectativas.",
    author: "Maria Silva",
    role: "Diretora de Marketing",
    company: "TechBrasil",
  },
  {
    quote:
      "Trabalhamos juntos ha mais de 10 anos. A dedicacao e criatividade da equipe sao incomparaveis. Cada projeto e tratado como unico.",
    author: "Carlos Santos",
    role: "CEO",
    company: "Grupo Innovare",
  },
  {
    quote:
      "O redesign das nossas embalagens resultou em um aumento de 40% nas vendas no primeiro trimestre. Resultado extraordinario.",
    author: "Ana Oliveira",
    role: "Gerente de Produto",
    company: "NaturaBem",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#FBF9EF] py-[70px] md:py-[130px]">
      <Container>
        <SectionLabel text="Depoimentos" />
        <h2
          className="font-heading font-bold text-[#0A0A0A] mt-6 mb-16 leading-[1.15]"
          style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
        >
          O que dizem nossos clientes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <AnimatedContent direction="horizontal" distance={40} reverse>
            <div className="aspect-square max-w-[400px] rounded-xl bg-[#E5E2D6] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#F5F3E8] to-[#E5E2D6] flex items-center justify-center">
                <span className="text-[#4A473A]/20 font-heading text-base">
                  Foto
                </span>
              </div>
            </div>
          </AnimatedContent>

          {/* Quote */}
          <AnimatedContent direction="horizontal" distance={40}>
            <div>
              <span className="font-heading text-6xl md:text-8xl text-[#C3002F] leading-none select-none">
                &ldquo;
              </span>
              <blockquote className="font-heading text-xl md:text-2xl text-[#0A0A0A] leading-relaxed -mt-8 md:-mt-12">
                {testimonials[active].quote}
              </blockquote>
              <div className="mt-8">
                <p className="font-heading font-semibold text-[#0A0A0A]">
                  {testimonials[active].author}
                </p>
                <p className="text-[#4A473A] text-sm">
                  {testimonials[active].role}, {testimonials[active].company}
                </p>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                      i === active ? "bg-[#C3002F]" : "bg-[#E5E2D6]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </Container>
    </section>
  );
}
