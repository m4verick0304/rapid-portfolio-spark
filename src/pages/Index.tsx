import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import MatrixBackground from "@/components/MatrixBackground";
import CyberGrid from "@/components/CyberGrid";
import MouseTracker from "@/components/MouseTracker";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <MatrixBackground />
      <CyberGrid />
      <MouseTracker />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
