import { useEffect, useRef, useState } from "react";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

const Certifications = () => {
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

  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      status: "Planned",
      description: "Advanced ethical hacking and penetration testing certification",
      badge: "🔒",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "Planned",
      description: "Foundation-level cybersecurity certification covering core security concepts",
      badge: "🛡️",
    },
    {
      name: "AWS Certified Security",
      issuer: "Amazon Web Services",
      status: "Planned",
      description: "Cloud security specialization for AWS environments",
      badge: "☁️",
    },
    {
      name: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      status: "Planned",
      description: "Hands-on penetration testing certification",
      badge: "⚔️",
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      status: "Planned",
      description: "Gold standard for information security professionals",
      badge: "🏆",
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      status: "Planned",
      description: "Comprehensive cybersecurity foundations and best practices",
      badge: "🎓",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Certified":
        return "text-primary border-primary/50 bg-primary/10";
      case "In Progress":
        return "text-accent border-accent/50 bg-accent/10";
      case "Planned":
        return "text-muted-foreground border-border bg-muted/10";
      default:
        return "text-muted-foreground border-border";
    }
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-10 w-10 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Certifications</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials in cybersecurity and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className={`group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Badge with animation */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {cert.badge}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                </div>
              </div>

              <div className="mt-8">
                {/* Status badge */}
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono border mb-4 ${getStatusColor(cert.status)}`}>
                  {cert.status === "Certified" && <CheckCircle2 className="h-3 w-3" />}
                  <span>{cert.status}</span>
                </div>

                {/* Cert name */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Award className="h-4 w-4" />
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* View link (for certified ones) */}
                {cert.status === "Certified" && (
                  <button className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-300 group/link">
                    <span className="font-medium">View Certificate</span>
                    <ExternalLink className="h-3 w-3 group-hover/link:rotate-45 transition-transform" />
                  </button>
                )}
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div
          className={`mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">
              {certifications.filter(c => c.status === "Certified").length}
            </div>
            <div className="text-sm text-muted-foreground font-mono">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">
              {certifications.filter(c => c.status === "In Progress").length}
            </div>
            <div className="text-sm text-muted-foreground font-mono">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">
              {certifications.filter(c => c.status === "Planned").length}
            </div>
            <div className="text-sm text-muted-foreground font-mono">Planned</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
