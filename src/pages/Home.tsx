import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MethodSection from "@/components/sections/MethodSection";
import VisionSection from "@/components/sections/VisionSection";
import BentoGridSection from "@/components/sections/BentoGridSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <MethodSection />
      <VisionSection />
      <BentoGridSection />
      <TestimonialsSection />
      <TeamSection />
    </>
  );
}
