import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Briefcase, Calendar } from "lucide-react";

const Experience = () => {
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

  const timeline = [
    {
      icon: GraduationCap,
      type: "Education",
      title: "B.Tech in Computer Science",
      organization: "Lovely Professional University",
      period: "2024 - Present",
      description: "Currently pursuing Bachelor's degree with focus on Cybersecurity and Software Development",
      color: "primary",
    },
    {
      icon: Award,
      type: "Certification",
      title: "Ethical Hacking Certification",
      organization: "Online Learning Platform",
      period: "2024",
      description: "Completed comprehensive training in penetration testing and security assessment",
      color: "accent",
    },
    {
      icon: Briefcase,
      type: "Project",
      title: "Security Tools Development",
      organization: "Personal Portfolio",
      period: "2023 - Present",
      description: "Built multiple cybersecurity tools including network scanners and vulnerability assessment applications",
      color: "primary",
    },
    {
      icon: Award,
      type: "Achievement",
      title: "Python Programming Contest",
      organization: "University Competition",
      period: "2024",
      description: "Secured top position in university-level coding competition",
      color: "accent",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 relative bg-gradient-to-b from-background to-muted/20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in technology and cybersecurity
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10" />

                <div className="ml-20 group">
                  <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-${item.color}/10 border border-${item.color}/20 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`h-6 w-6 text-${item.color}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                            {item.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span className="font-mono">{item.period}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium mb-2">
                          {item.organization}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
