import { X, ExternalLink, Github, Info, Palette, Heart, Shield } from "lucide-react";
import { useEffect } from "react";

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
  actionIcon?: string;
  actionText?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const getActionIcon = () => {
    switch (project.actionIcon) {
      case "info": return <Info size={16} />;
      case "palette": return <Palette size={16} />;
      case "heart": return <Heart size={16} />;
      case "shield": return <Shield size={16} />;
      default: return <Info size={16} />;
    }
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "HTML5": "bg-orange-500/20 text-orange-400",
      "CSS3": "bg-blue-500/20 text-blue-400", 
      "JavaScript": "bg-yellow-500/20 text-yellow-400",
      "React": "bg-blue-400/20 text-blue-300",
      "Node.js": "bg-green-600/20 text-green-400",
      "MongoDB": "bg-blue-600/20 text-blue-400",
      "Express.js": "bg-teal-500/20 text-teal-400",
      "TypeScript": "bg-blue-600/20 text-blue-400",
      "Canvas API": "bg-green-500/20 text-green-400",
      "WordPress": "bg-blue-600/20 text-blue-400",
      "MySQL": "bg-green-500/20 text-green-400",
      "PHP": "bg-purple-500/20 text-purple-400",
      "Redis": "bg-red-600/20 text-red-400",
    };
    return colors[tech] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="project-modal-overlay"
    >
      <div 
        className="bg-gradient-to-b from-secondary to-secondary/80 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-slide-in border border-primary/20"
        onClick={(e) => e.stopPropagation()}
        data-testid="project-modal-content"
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-primary transition-colors duration-300"
          data-testid="close-modal-button"
        >
          <X size={28} />
        </button>
        
        <div className="p-8">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
            data-testid="project-modal-image"
          />
          
          <h2 className="text-3xl font-bold gradient-text mb-4" data-testid="project-modal-title">
            {project.title}
          </h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="project-modal-description">
            {project.fullDescription}
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3" data-testid="technologies-heading">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2" data-testid="technologies-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech)}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-pink-500 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              data-testid="view-live-site-button"
            >
              <ExternalLink size={16} className="mr-2" />
              View Live Site
            </a>
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                data-testid="view-code-button"
              >
                <Github size={16} className="mr-2" />
                View Code
              </a>
            )}
            
            {project.actionText && (
              <button className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                data-testid="project-action-button"
              >
                {getActionIcon()}
                <span className="ml-2">{project.actionText}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
