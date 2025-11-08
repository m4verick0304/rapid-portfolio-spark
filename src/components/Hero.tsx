import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-scale-in">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Available for opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient">Shubham Gupta</span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Code2 className="h-6 w-6 text-primary" />
          <p className="text-xl md:text-2xl text-muted-foreground">
            B.Tech CSE Student & Python Developer
          </p>
        </div>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Building practical solutions with clean code. Passionate about cybersecurity and creating tools that make a difference.
        </p>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="group relative overflow-hidden px-8 py-6 text-lg"
          >
            <span className="relative z-10 flex items-center">
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
