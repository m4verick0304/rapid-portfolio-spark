import ProjectCard from "./ProjectCard";

const Projects = () => {
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
    <section id="projects" className="py-20 px-4 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that demonstrate my skills in Python development and problem-solving.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
