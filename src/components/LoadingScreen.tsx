import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Calculate ball properties based on progress
  const getBallStyle = () => {
    // Ball starts small and at the top, drops and enlarges as progress increases
    const startSize = 20; // Starting size in pixels
    const endSize = 800; // Final size when reaching 100
    
    // Calculate size - exponential growth as it approaches 100
    const size = progress < 90 
      ? startSize + (progress * 2) 
      : startSize + ((progress - 90) * (endSize - startSize - 180) / 10) + 180;
    
    // Calculate position - drops from top to center
    const startY = -10; // Start above viewport
    const centerY = 50; // Center position
    const topPosition = progress < 80 
      ? startY + (progress * (centerY - startY) / 80)
      : centerY;

    return {
      width: `${size}px`,
      height: `${size}px`,
      top: `${topPosition}%`,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: progress < 5 ? progress / 5 : 1,
    };
  };

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Animated ball that drops and enlarges */}
      <div
        className="absolute rounded-full bg-white transition-all duration-300 ease-out"
        style={{
          ...getBallStyle(),
          boxShadow: progress > 90 
            ? `0 0 ${100 + (progress - 90) * 20}px rgba(255, 255, 255, 0.8), 0 0 ${200 + (progress - 90) * 40}px rgba(255, 255, 255, 0.4)`
            : '0 0 40px rgba(255, 255, 255, 0.6)',
          filter: progress > 95 ? 'blur(2px)' : 'none',
        }}
      />

      {/* Small decorative dots */}
      {progress < 95 && (
        <>
          <div 
            className="absolute w-2 h-2 rounded-full bg-white/60"
            style={{
              top: '45%',
              left: '35%',
              animation: 'float 3s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute w-2 h-2 rounded-full bg-white/60"
            style={{
              top: '55%',
              left: '65%',
              animation: 'float 3s ease-in-out infinite 1s',
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
            style={{
              top: '40%',
              left: '60%',
              animation: 'float 3s ease-in-out infinite 0.5s',
            }}
          />
        </>
      )}

      {/* Counter text */}
      <div 
        className="absolute text-white font-bold transition-all duration-300 z-10"
        style={{
          fontSize: progress < 90 ? '120px' : `${120 + (progress - 90) * 5}px`,
          top: progress < 90 ? '50%' : '40%',
          left: progress < 90 ? '20%' : '15%',
          transform: 'translate(-50%, -50%)',
          opacity: progress < 95 ? 1 : 1 - ((progress - 95) / 5),
          textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
          fontFamily: 'monospace',
        }}
      >
        {progress}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
