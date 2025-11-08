import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">
          Shubham Gupta
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          B.Tech CSE Student & Python Developer
        </p>
        <Button
          onClick={scrollToProjects}
          size="lg"
          className="group"
        >
          View My Projects
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
