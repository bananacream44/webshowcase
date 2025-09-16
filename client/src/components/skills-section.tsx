import { useState, useEffect, useRef } from "react";
import { Code, Server, Wrench } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setVisibleBars(prev => new Set(prev).add(skillName));
              }, 200);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const progressBars = document.querySelectorAll('[data-skill]');
    progressBars.forEach(bar => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      iconColor: "text-primary",
      skills: [
        { name: "React/Next.js", percentage: 85 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript/TypeScript", percentage: 80 }
      ]
    },
    {
      title: "Backend", 
      icon: <Server size={24} />,
      iconColor: "text-green-500",
      skills: [
        { name: "Node.js", percentage: 80 },
        { name: "Python", percentage: 75 },
        { name: "Database Design", percentage: 80 }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      iconColor: "text-yellow-500", 
      skills: [
        { name: "Git/GitHub", percentage: 85 },
        { name: "Figma/Design", percentage: 80 },
        { name: "Docker/AWS", percentage: 60 }
      ]
    }
  ];

  const skillBadges = [
    { name: "HTML5", color: "bg-orange-500/20 text-orange-400" },
    { name: "CSS3", color: "bg-blue-500/20 text-blue-400" },
    { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-400" },
    { name: "React", color: "bg-blue-400/20 text-blue-300" },
    { name: "Next.js", color: "bg-black/20 text-gray-300" },
    { name: "Node.js", color: "bg-green-600/20 text-green-400" },
    { name: "TypeScript", color: "bg-blue-600/20 text-blue-300" },
    { name: "Tailwind", color: "bg-teal-500/20 text-teal-400" },
    { name: "Figma", color: "bg-purple-500/20 text-purple-400" },
    { name: "Git", color: "bg-gray-600/20 text-gray-400" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/20 to-background" data-testid="skills-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold gradient-text mb-4" data-testid="skills-title">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">Tools and technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-lg fade-in-up"
              style={{ animationDelay: `${(categoryIndex + 1) * 0.1}s` }}
              data-testid={`skill-category-${category.title.toLowerCase()}`}
            >
              <div className="flex items-center mb-4">
                <span className={`mr-4 ${category.iconColor}`}>
                  {category.icon}
                </span>
                <h3 className="text-2xl font-bold" data-testid={`skill-category-title-${category.title.toLowerCase()}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <span className="text-sm">{skill.name}</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="progress-bar h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: visibleBars.has(skill.name) ? `${skill.percentage}%` : '0%'
                        }}
                        data-skill={skill.name}
                        data-testid={`progress-bar-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap justify-center gap-4 fade-in-up" style={{ animationDelay: "0.4s" }} data-testid="skill-badges">
          {skillBadges.map((badge) => (
            <span 
              key={badge.name}
              className={`skill-badge ${badge.color} px-4 py-2 rounded-full font-medium cursor-pointer`}
              data-testid={`skill-badge-${badge.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {badge.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
