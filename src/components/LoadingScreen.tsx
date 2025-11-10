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
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Frying pan and egg animation */}
      <div className="relative mb-12">
        <div className="frying-pan-container">
          {/* Pan */}
          <div className="frying-pan">
            <div className="pan-handle"></div>
            <div className="pan-body"></div>
          </div>
          
          {/* Egg */}
          <div className="egg">
            <div className="egg-white"></div>
            <div className="egg-yolk"></div>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2 font-mono">
          Cooking Something Special...
        </h2>
        <p className="text-muted-foreground font-mono text-sm">
          {progress < 30 && "Heating up the pan..."}
          {progress >= 30 && progress < 60 && "Adding ingredients..."}
          {progress >= 60 && progress < 90 && "Almost ready..."}
          {progress >= 90 && "Serving fresh!"}
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-sm font-mono text-muted-foreground">
        {progress}%
      </div>

      <style>{`
        .frying-pan-container {
          position: relative;
          width: 200px;
          height: 200px;
          animation: toss 1.5s ease-in-out infinite;
        }

        .frying-pan {
          position: relative;
          z-index: 2;
        }

        .pan-handle {
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 8px;
          background: linear-gradient(to right, hsl(var(--muted-foreground)), hsl(var(--foreground)));
          border-radius: 4px;
        }

        .pan-body {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%);
          border-radius: 50%;
          border: 4px solid hsl(var(--foreground));
          box-shadow: inset 0 -10px 20px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .egg {
          position: absolute;
          top: 30px;
          left: 30px;
          animation: flip 1.5s ease-in-out infinite;
          z-index: 1;
        }

        .egg-white {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50% 50% 45% 55%;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .egg-yolk {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          background: radial-gradient(circle, #FFD700 0%, #FFA500 100%);
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        @keyframes toss {
          0%, 100% {
            transform: translateY(0) rotate(-15deg);
          }
          25% {
            transform: translateY(-20px) rotate(-10deg);
          }
          50% {
            transform: translateY(-40px) rotate(-5deg);
          }
          75% {
            transform: translateY(-20px) rotate(-10deg);
          }
        }

        @keyframes flip {
          0%, 100% {
            transform: translateY(0) rotateX(0deg);
          }
          25% {
            transform: translateY(-60px) rotateX(180deg);
          }
          50% {
            transform: translateY(-100px) rotateX(360deg);
          }
          75% {
            transform: translateY(-60px) rotateX(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
