import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-muted-foreground mb-4">
          I am a first-year student at LPU with a passion for building practical tools. 
          I'm currently focused on Python development and cybersecurity, constantly learning 
          and exploring new technologies to solve real-world problems.
        </p>
        <Button asChild size="lg" variant="outline">
          <a href="#" download>
            <FileDown className="mr-2 h-5 w-5" />
            Download My Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default About;
