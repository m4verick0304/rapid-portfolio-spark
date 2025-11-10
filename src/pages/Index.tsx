import { useState } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";
import CyberGrid from "@/components/CyberGrid";
import MouseTracker from "@/components/MouseTracker";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <MatrixBackground />
        <CyberGrid />
        <MouseTracker />
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
