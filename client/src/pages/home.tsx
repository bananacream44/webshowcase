import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import FloatingShapes from "@/components/floating-shapes";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden" data-testid="home-page">
      <FloatingShapes />
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
