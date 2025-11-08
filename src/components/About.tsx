import { Button } from "@/components/ui/button";
import { FileDown, Award, Target, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const highlights = [
    { icon: Target, text: "Problem Solver" },
    { icon: Zap, text: "Quick Learner" },
    { icon: Award, text: "Quality Focused" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </div>

        <div className={`text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            I am a first-year student at LPU with a passion for building practical tools. 
            I'm currently focused on Python development and cybersecurity, constantly learning 
            and exploring new technologies to solve real-world problems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {highlights.map((item, index) => (
              <div
                key={item.text}
                className={`flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden"
            >
              <a href="#" download>
                <span className="relative z-10 flex items-center">
                  <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download My Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
