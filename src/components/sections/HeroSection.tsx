import SplitText from "@/components/SplitText";
import RotatingText from "@/components/RotatingText";
import CTAButton from "@/components/shared/CTAButton";
import Container from "@/components/layout/Container";
import CircularGallery from "@/components/CircularGallery";

const galleryItems = [
  {
    image: "https://picsum.photos/seed/gsb1/800/600",
    text: "Experience-led design",
  },
  {
    image: "https://picsum.photos/seed/gsb2/800/600",
    text: "Visual identity systems",
  },
  {
    image: "https://picsum.photos/seed/gsb3/800/600",
    text: "Strategic campaigns",
  },
  {
    image: "https://picsum.photos/seed/gsb4/800/600",
    text: "Digital experiences",
  },
  {
    image: "https://picsum.photos/seed/gsb5/800/600",
    text: "Packaging & print",
  },
  { image: "https://picsum.photos/seed/gsb6/800/600", text: "Brand strategy" },
  { image: "https://picsum.photos/seed/gsb7/800/600", text: "Motion & video" },
  { image: "https://picsum.photos/seed/gsb8/800/600", text: "Social media" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#FBF9EF] flex flex-col overflow-x-hidden pt-20">
      {/* Hero text — compact top portion */}
      <Container className="text-center pt-4 md:pt-8 pb-2 md:pb-4 shrink-0">
        <div className="max-w-[700px] mx-auto">
          <SplitText
            text="30 anos transformando marcas em"
            className="font-heading font-bold text-[#0A0A0A] leading-[1.1] text-[clamp(28px,4.5vw,56px)]"
            delay={30}
            duration={0.8}
            splitType="chars"
          />
          <div className="mt-1 md:mt-2 flex justify-center">
            <RotatingText
              texts={["experiencias", "historias", "conexoes"]}
              mainClassName="font-heading font-bold text-[#C3002F] overflow-hidden inline-flex justify-center"
              staggerFrom="last"
              staggerDuration={0.025}
              splitBy="characters"
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              style={{
                fontSize: "clamp(28px, 4.5vw, 56px)" as string,
                lineHeight: 1.1,
              }}
            />
          </div>
        </div>

        <div className="mt-4 md:mt-5">
          <CTAButton href="#contato">Comece Seu Projeto</CTAButton>
        </div>
      </Container>

      {/* Circular gallery — desktop */}
      <div className="hidden md:block w-screen relative left-1/2 -translate-x-1/2 h-[55vh] mt-2">
        <CircularGallery
          items={galleryItems}
          bend={22}
          textColor="#C3002F"
          borderRadius={0.05}
          font="bold 30px Figtree"
          autoScroll={0.03}
        />
      </div>

      {/* Mobile grid */}
      <div className="grid grid-cols-2 gap-4 px-4 py-8 md:hidden">
        {galleryItems.slice(0, 4).map((item) => (
          <div
            key={item.text}
            className="bg-white p-1.5 pb-8 shadow-[0_2px_12px_rgba(0,0,0,0.1)] relative"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full aspect-[4/3] object-cover"
            />
            <p className="absolute bottom-2 left-0 right-0 text-center text-[11px] italic text-[#4A473A]">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Transition text block */}
      <Container className="text-center py-12 md:py-16">
        <svg
          className="mx-auto mb-4 w-8 h-8 text-[#C3002F]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
        </svg>
        <p className="max-w-xl mx-auto text-[#4A473A] text-base md:text-lg leading-relaxed">
          Transformamos ideias ousadas em experiências de marca que inspiram,
          emocionam e entregam resultados através de criatividade e design
          estratégico.
        </p>
      </Container>
    </section>
  );
}
