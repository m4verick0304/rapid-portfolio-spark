import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management application that uses Gemini API to automatically categorize and prioritize tasks.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      techStack: ["Python", "PyQt", "Gemini API", "SQLite"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Network Security Scanner",
      description: "A comprehensive security tool for scanning network vulnerabilities and generating detailed reports.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      techStack: ["Python", "Scapy", "Flask", "React"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Code Snippet Manager",
      description: "A desktop application for organizing and searching code snippets with syntax highlighting support.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      techStack: ["Python", "Tkinter", "MongoDB", "Pygments"],
      githubUrl: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in Python development and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
