import SplitText from "@/components/SplitText";
import Container from "@/components/layout/Container";

const teamMembers = [
  { initials: "GS", rotation: -6, offset: "top-[20%] left-[10%]" },
  { initials: "SB", rotation: 4, offset: "top-[15%] right-[15%]" },
  { initials: "AL", rotation: -3, offset: "top-[45%] left-[25%]" },
  { initials: "MR", rotation: 7, offset: "top-[40%] right-[20%]" },
  { initials: "JP", rotation: -5, offset: "top-[65%] left-[15%]" },
  { initials: "CF", rotation: 2, offset: "top-[60%] right-[10%]" },
];

export default function TeamSection() {
  return (
    <section className="bg-[#FBF9EF] py-[70px] md:py-[130px] overflow-hidden">
      <Container>
        <div className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          {/* Team photos overlapping text */}
          <div className="absolute inset-0 hidden md:block">
            {teamMembers.map((member) => (
              <div
                key={member.initials}
                className={`absolute ${member.offset} z-10`}
                style={{ transform: `rotate(${member.rotation}deg)` }}
              >
                <div className="w-20 h-24 md:w-28 md:h-32 rounded-lg bg-[#E5E2D6] shadow-lg flex items-center justify-center border-4 border-white">
                  <span className="font-heading font-bold text-[#4A473A]/50 text-lg">
                    {member.initials}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Big text */}
          <div className="relative z-20 text-center">
            <SplitText
              text="Somos GSB2"
              className="font-heading font-bold text-[#0A0A0A] text-[clamp(48px,10vw,140px)]"
              delay={40}
              duration={1}
              splitType="chars"
            />
            <p className="text-[#4A473A] text-lg md:text-xl mt-6 max-w-[500px] mx-auto">
              Uma equipe apaixonada por transformar marcas e criar experiencias
              memoraveis.
            </p>
          </div>
        </div>
      </Container>

      {/* Transition to black */}
      <div className="h-32 md:h-48 bg-gradient-to-b from-[#FBF9EF] to-black mt-20" />
    </section>
  );
}
