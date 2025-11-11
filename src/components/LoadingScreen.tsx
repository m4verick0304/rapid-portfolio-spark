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
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Scanning lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line" />
        <div className="scan-line" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main loading animation */}
      <div className="relative mb-12">
        <div className="cyber-loader">
          {/* Central hexagon */}
          <div className="hexagon">
            <div className="hexagon-inner">
              <div className="text-4xl font-bold text-primary animate-pulse">
                {progress}%
              </div>
            </div>
          </div>
          
          {/* Orbiting circles */}
          <div className="orbit orbit-1">
            <div className="orbit-dot" />
          </div>
          <div className="orbit orbit-2">
            <div className="orbit-dot" />
          </div>
          <div className="orbit orbit-3">
            <div className="orbit-dot" />
          </div>
        </div>
      </div>

      {/* Loading text with glitch effect */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-mono relative">
          <span className="text-gradient glitch-text" data-text="INITIALIZING SYSTEM">
            INITIALIZING SYSTEM
          </span>
        </h2>
        <p className="text-primary/80 font-mono text-sm tracking-wider">
          {progress < 25 && "[ LOADING MODULES... ]"}
          {progress >= 25 && progress < 50 && "[ ESTABLISHING CONNECTION... ]"}
          {progress >= 50 && progress < 75 && "[ COMPILING ASSETS... ]"}
          {progress >= 75 && progress < 95 && "[ FINAL CHECKS... ]"}
          {progress >= 95 && "[ SYSTEM READY ]"}
        </p>
      </div>

      {/* Enhanced progress bar */}
      <div className="w-80 h-1 bg-muted/30 rounded-full overflow-hidden relative backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 relative"
          style={{ 
            width: `${progress}%`,
            boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Binary code rain effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="binary-rain"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            hsl(var(--primary) / 0.5), 
            transparent
          );
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .cyber-loader {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .hexagon {
          position: absolute;
          width: 120px;
          height: 120px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, 
            hsl(var(--primary) / 0.2), 
            hsl(var(--accent) / 0.2)
          );
          border: 2px solid hsl(var(--primary));
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .hexagon-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
          }
          50% {
            box-shadow: 0 0 40px hsl(var(--primary) / 0.8);
          }
        }

        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid hsl(var(--primary) / 0.3);
          border-radius: 50%;
        }

        .orbit-1 {
          width: 140px;
          height: 140px;
          animation: rotate 3s linear infinite;
        }

        .orbit-2 {
          width: 170px;
          height: 170px;
          animation: rotate 4s linear infinite reverse;
        }

        .orbit-3 {
          width: 200px;
          height: 200px;
          animation: rotate 5s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: hsl(var(--primary));
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 10px hsl(var(--primary));
        }

        .glitch-text {
          position: relative;
          animation: glitch-skew 1s infinite;
        }

        @keyframes glitch-skew {
          0% {
            transform: skew(0deg);
          }
          10% {
            transform: skew(-2deg);
          }
          20% {
            transform: skew(2deg);
          }
          30% {
            transform: skew(0deg);
          }
          100% {
            transform: skew(0deg);
          }
        }

        .binary-rain {
          position: absolute;
          top: -20px;
          font-family: monospace;
          font-size: 14px;
          color: hsl(var(--primary));
          animation: fall linear infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
