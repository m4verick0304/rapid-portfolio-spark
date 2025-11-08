import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-section-bg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I'm always open to discussing new opportunities and projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-5 w-5" />
            <a href="mailto:shubham@example.com" className="hover:text-primary transition-colors">
              shubham@example.com
            </a>
          </div>
          
          <div className="hidden sm:block text-muted-foreground">|</div>
          
          <Button asChild variant="ghost" size="sm">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button asChild variant="ghost" size="sm">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
