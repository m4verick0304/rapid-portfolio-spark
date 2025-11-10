import { useEffect, useState } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none -z-10 rounded-full mix-blend-screen"
        style={{
          left: position.x,
          top: position.y,
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          transition: "left 0.1s, top 0.1s",
        }}
      />
      <div
        className="fixed pointer-events-none -z-10 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: "20px",
          height: "20px",
          border: "2px solid hsl(var(--primary) / 0.5)",
          transform: "translate(-50%, -50%)",
          transition: "left 0.05s, top 0.05s",
        }}
      />
    </>
  );
};

export default MouseTracker;
