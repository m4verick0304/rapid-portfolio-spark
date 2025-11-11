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
      {/* Outer glow */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-screen"
        style={{
          left: position.x,
          top: position.y,
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
          transform: "translate(-50%, -50%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
      
      {/* Crosshair container */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          transition: "left 0.05s ease-out, top 0.05s ease-out",
        }}
      >
        {/* Center dot */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "6px",
            height: "6px",
            background: "hsl(var(--primary))",
            borderRadius: "50%",
            boxShadow: "0 0 10px hsl(var(--primary) / 0.8)",
          }}
        />
        
        {/* Horizontal line */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "40px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
          }}
        />
        
        {/* Vertical line */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, transparent, hsl(var(--primary)), transparent)",
          }}
        />
        
        {/* Corner brackets */}
        <div
          className="absolute"
          style={{
            left: "-20px",
            top: "-20px",
            width: "40px",
            height: "40px",
            border: "2px solid hsl(var(--primary) / 0.6)",
            borderRadius: "4px",
            clipPath: "polygon(0 0, 12px 0, 12px 2px, 2px 2px, 2px 12px, 0 12px, 0 0, 0 100%, 12px 100%, 12px calc(100% - 2px), 2px calc(100% - 2px), 2px calc(100% - 12px), 0 calc(100% - 12px), 100% 0, 100% 12px, calc(100% - 2px) 12px, calc(100% - 2px) 2px, calc(100% - 12px) 2px, calc(100% - 12px) 0, 100% 100%, calc(100% - 12px) 100%, calc(100% - 12px) calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) calc(100% - 12px), 100% calc(100% - 12px))",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        
        {/* Scanning line effect */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "60px",
            height: "60px",
            border: "1px solid hsl(var(--primary) / 0.3)",
            borderRadius: "50%",
            animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
        />
      </div>
    </>
  );
};

export default MouseTracker;
