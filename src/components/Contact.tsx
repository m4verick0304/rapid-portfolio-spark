import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
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

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new opportunities and projects.
          </p>
        </div>
        
        <div className={`bg-card border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: "0.2s" }}>
          <div className="flex flex-col items-center gap-6">
            <div className="group flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <a href="mailto:shubham@example.com" className="hover:underline underline-offset-4">
                shubham@example.com
              </a>
            </div>
            
            <div className="w-full h-px bg-border/50" />
            
            <div className="flex gap-4">
              <Button 
                asChild 
                size="lg"
                className="group relative overflow-hidden"
              >
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              
              <Button 
                asChild 
                size="lg"
                className="group relative overflow-hidden"
              >
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    LinkedIn
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Send className="h-4 w-4" />
              <span>Ready to collaborate on exciting projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
