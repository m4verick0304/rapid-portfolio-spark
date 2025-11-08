import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
}

const ProjectCard = ({ title, description, image, techStack, liveUrl, githubUrl }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer border-border/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className="transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button 
              asChild 
              variant="default" 
              className="flex-1 group/btn overflow-hidden relative"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center justify-center">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                  Live Demo
                </span>
              </a>
            </Button>
          )}
          <Button 
            asChild 
            variant="outline" 
            className="flex-1 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
