import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Crafting beautiful digital experiences";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative" data-testid="hero-section">
      <div className="container mx-auto px-6 text-center">
        <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6" data-testid="hero-title">
            <span className="gradient-text">Sw1tzerland</span>
          </h1>
        </div>
        <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 typing-animation" data-testid="hero-subtitle">
            {displayText}
          </p>
        </div>
        <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-primary to-pink-500 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 animate-glow"
            data-testid="view-work-button"
          >
            View My Work
            <ArrowDown className="ml-2 inline-block" size={20} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
        <ArrowDown className="text-2xl text-primary" />
      </div>
    </section>
  );
}
