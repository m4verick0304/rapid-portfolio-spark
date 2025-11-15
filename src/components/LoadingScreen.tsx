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
    const startSize = 30;
    const endSize = 2000;
    
    // Drop phase (0-60): Ball drops with bounce
    // Bounce phase (60-70): Bounce effect at center
    // Enlarge phase (70-100): Grows into semi-circle and fades
    
    let size = startSize;
    let topPosition = 50;
    let opacity = 1;
    let borderRadius = '50%';
    
    if (progress < 60) {
      // Dropping phase
      const dropProgress = progress / 60;
      topPosition = -20 + (dropProgress * 70);
      size = startSize;
    } else if (progress < 70) {
      // Bounce effect
      const bounceProgress = (progress - 60) / 10;
      const bounceHeight = Math.sin(bounceProgress * Math.PI) * 10;
      topPosition = 50 - bounceHeight;
      size = startSize + bounceProgress * 20;
    } else {
      // Enlarging phase - semi-circle growing upward
      const enlargeProgress = (progress - 70) / 30;
      size = startSize + 20 + (enlargeProgress * (endSize - startSize - 20));
      topPosition = 50 + (size / 4); // Move down as it grows to keep bottom at center
      borderRadius = `${50 * (1 - enlargeProgress * 0.3)}% ${50 * (1 - enlargeProgress * 0.3)}% 0 0`;
      opacity = progress < 95 ? 1 : 1 - ((progress - 95) / 5);
    }

    return {
      width: `${size}px`,
      height: progress >= 70 ? `${size / 2}px` : `${size}px`, // Semi-circle height
      top: `${topPosition}%`,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity,
      borderRadius,
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
        className="absolute bg-white transition-all duration-200 ease-out"
        style={{
          ...getBallStyle(),
          boxShadow: progress > 70 
            ? `0 0 ${100 + (progress - 70) * 30}px rgba(255, 255, 255, 0.8), 0 0 ${200 + (progress - 70) * 60}px rgba(255, 255, 255, 0.4)`
            : '0 0 40px rgba(255, 255, 255, 0.6)',
          filter: progress > 95 ? 'blur(4px)' : 'none',
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

      {/* Counter text - bottom left corner */}
      <div 
        className="absolute text-white font-bold transition-all duration-500 ease-out z-10"
        style={{
          fontSize: '80px',
          bottom: '40px',
          left: '40px',
          opacity: progress < 95 ? 1 : 1 - ((progress - 95) / 5),
          textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
          fontFamily: 'monospace',
          filter: 'blur(0.5px)',
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
