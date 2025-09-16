import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import ProjectModal from "./project-modal";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  imageUrl: string;
  category: string;
  badge: string;
  badgeColor: string;
  actionIcon?: string;
  actionText?: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: "kpop",
      title: "K-pop Hate Project",
      description: "2D-retro style interactive storytelling experience addressing K-pop fan discrimination with engaging visuals and narrative.",
      fullDescription: "A compelling 2D-retro style storytelling experience that addresses discrimination against K-pop fans. This school project combines engaging visuals with powerful narrative elements to create awareness and promote understanding through interactive storytelling techniques.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      liveUrl: "https://bananacream44.github.io/kpophate/",
      imageUrl: `${import.meta.env.BASE_URL}images/kpop-project-screenshot.png`,
      category: "School Project",
      badge: "School Project",
      badgeColor: "bg-red-500/20 text-red-400",
      actionIcon: "info",
      actionText: "Case Study"
    },
    {
      id: "nail",
      title: "Dendnail Salon",
      description: "Professional website for local nail shop featuring appointment booking system, admin dashboard, and gallery showcase.",
      fullDescription: "Professional e-commerce website for a local nail salon featuring appointment booking system, admin dashboard for tracking appointments, comprehensive service galleries, and customer management tools. Built with modern web technologies for optimal user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://dendnail.com",
      imageUrl: `${import.meta.env.BASE_URL}images/dendnail-screenshot.png`,
      category: "Professional",
      badge: "Professional",
      badgeColor: "bg-green-500/20 text-green-400",
      actionIcon: "info",
      actionText: "Case Study"
    },
    {
      id: "restaurant",
      title: "Torikichi Restaurant", 
      description: "Vibrant website for Japanese chicken chain with location details, menus, and brand-matching aesthetic design.",
      fullDescription: "Vibrant website for a local Japanese chicken chain restaurant featuring dynamic color schemes that match the brand aesthetic, location information, operating hours, menu displays, and integrated social media features for enhanced customer engagement.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      liveUrl: "https://torikichi-nh.com",
      imageUrl: `${import.meta.env.BASE_URL}images/torikichi-logo.jpeg`,
      category: "Professional",
      badge: "Professional", 
      badgeColor: "bg-green-500/20 text-green-400",
      actionIcon: "palette",
      actionText: "Design Process"
    },
    {
      id: "ngo",
      title: "A-Imaginations NGO",
      description: "Professional website for Seoul-based NGO offering free development services to local businesses and community projects.",
      fullDescription: "Professional website for a Seoul-based NGO dedicated to providing free development services to local businesses and community projects. Features project portfolios, volunteer registration, impact metrics, and community outreach tools designed to maximize social impact.",
      technologies: ["React", "WordPress", "MySQL", "PHP"],
      liveUrl: "https://a-imaginations.com",
      imageUrl: `${import.meta.env.BASE_URL}images/a-imaginations-logo.png`,
      category: "Professional",
      badge: "Professional",
      badgeColor: "bg-green-500/20 text-green-400",
      actionIcon: "heart",
      actionText: "Impact Story"
    },
    {
      id: "finance",
      title: "Prodigies Group",
      description: "Custom-built website for finance firm with client-specific requirements, professional design, and advanced functionality.",
      fullDescription: "Custom-built professional website for a finance firm with client-specific requirements including portfolio management tools, market analysis dashboards, secure client portals, and advanced financial calculators. Designed with enterprise-level security and performance optimization.",
      technologies: ["React", "Node.js", "TypeScript", "Redis"],
      liveUrl: "https://prodigies-group.com",
      imageUrl: `${import.meta.env.BASE_URL}images/prodigies-group-screenshot.png`,
      category: "Professional",
      badge: "Professional",
      badgeColor: "bg-green-500/20 text-green-400",
      actionIcon: "shield",
      actionText: "Security Features"
    },
    {
      id: "lim-advisors",
      title: "LIM Advisors Internship",
      description: "AI-powered shareholder activism research platform with automated 13-F filing webscraper and ML prediction models.",
      fullDescription: "Summer internship at LIM Advisors, a shareholder activist finance firm based in Hong Kong. Developed a comprehensive AI-powered research platform including a 600-line automated EDINET 13-F filing webscraper using Selenium and pdfplumber, integrated with Claude API for document processing and Perplexity API for news analysis. Built Neural Network and Random Forest Classifier systems, and began development on a 300,000 data point AI model to predict future shareholder activism targets based on 12 key variables (9 statistical, 3 qualitative).",
      technologies: ["Python", "Selenium", "Claude API", "Perplexity API", "Neural Networks", "Machine Learning"],
      liveUrl: "https://www.limadvisors.com",
      imageUrl: `${import.meta.env.BASE_URL}images/lim-advisors-logo.png`,
      category: "Internship",
      badge: "Internship",
      badgeColor: "bg-purple-500/20 text-purple-400",
      actionIcon: "info",
      actionText: "Technical Details"
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: string } = {
      "HTML5": "fab fa-html5 text-orange-500",
      "CSS3": "fab fa-css3-alt text-blue-500",
      "JavaScript": "fab fa-js-square text-yellow-500",
      "React": "fab fa-react text-blue-400",
      "Node.js": "fab fa-node-js text-green-600",
      "MongoDB": "fas fa-database text-green-500",
      "Express.js": "fas fa-server text-gray-500",
      "Canvas API": "fas fa-paint-brush text-green-500",
      "WordPress": "fab fa-wordpress text-blue-600",
      "MySQL": "fas fa-database text-blue-500",
      "PHP": "fab fa-php text-purple-500",
      "TypeScript": "fas fa-code text-blue-600",
      "Redis": "fas fa-memory text-red-600",
      "Python": "fab fa-python text-blue-500",
      "Selenium": "fas fa-robot text-green-500",
      "Claude API": "fas fa-brain text-purple-500",
      "Perplexity API": "fas fa-search text-orange-500",
      "Neural Networks": "fas fa-network-wired text-pink-500",
      "Machine Learning": "fas fa-chart-line text-teal-500",
    };
    return iconMap[tech] || "fas fa-code";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20" data-testid="projects-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold gradient-text mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground" data-testid="projects-subtitle">A showcase of my recent work and creative solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-lg overflow-hidden cursor-pointer fade-in-up transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(139,92,246,0.3)]"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              onClick={() => openModal(project)}
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 object-contain bg-white/5 rounded-t-lg"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`${project.badgeColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.badge}
                  </span>
                  {project.category !== "School Project" && project.category !== "Internship" && (
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium ml-2">
                      {project.category === "Professional" ? "E-commerce" : project.category}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2" data-testid={`project-tech-icons-${project.id}`}>
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <i key={techIndex} className={getTechIcon(tech)}></i>
                    ))}
                  </div>
                  <ExternalLink className="text-primary" size={16} data-testid={`project-external-link-${project.id}`} />
                </div>
              </div>
            </div>
          ))}

          {/* Additional Projects Card */}
          <div className="glass-card rounded-lg overflow-hidden p-6 flex items-center justify-center fade-in-up transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(139,92,246,0.3)] animate-pulse-slow"
               style={{ animationDelay: "0.6s" }}
               data-testid="more-projects-card">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="text-2xl text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text" data-testid="more-projects-title">More Projects</h3>
              <p className="text-muted-foreground" data-testid="more-projects-description">
                Additional projects and experiments coming soon
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
