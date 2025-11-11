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
      {/* Subtle outer glow */}
      <div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: "120px",
          height: "120px",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          transition: "left 0.1s ease-out, top 0.1s ease-out",
          filter: "blur(8px)",
        }}
      />
      
      {/* Main cursor ring */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          transition: "left 0.05s ease-out, top 0.05s ease-out",
        }}
      >
        {/* Center dot with glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "4px",
            height: "4px",
            background: "hsl(var(--primary))",
            borderRadius: "50%",
            boxShadow: "0 0 8px 2px hsl(var(--primary) / 0.8)",
          }}
        />
        
        {/* Rotating ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "24px",
            height: "24px",
            border: "1.5px solid hsl(var(--primary) / 0.6)",
            borderRadius: "50%",
            borderTopColor: "hsl(var(--primary))",
            animation: "spin 3s linear infinite",
          }}
        />
        
        {/* Pulse ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid hsl(var(--primary) / 0.4)",
            borderRadius: "50%",
          }}
        />
      </div>
    </>
  );
};

export default MouseTracker;
