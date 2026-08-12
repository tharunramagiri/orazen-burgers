"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let val = 0;
    const interval = setInterval(() => {
      val += 4;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
        setTimeout(() => setShowText(true), 100);
        setTimeout(() => setVisible(false), 600);
      }
      setProgress(val);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Page loading"
    >
      {/* Layered SVG color slides — matching original exactly */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path fill="#4C0016" d="M -1 -1 L 101 -1 L 101 101 Q 50 101 -1 101 Z" />
        </svg>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{
            clipPath: progress > 30
              ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
              : `polygon(0 ${100 - progress * 3}%, 100% ${100 - progress * 3}%, 100% 100%, 0% 100%)`,
            transition: "clip-path 0.3s ease-out",
          }}
        >
          <path fill="#EF6F2E" d="M -1 -1 L 101 -1 L 101 101 Q 50 101 -1 101 Z" />
        </svg>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{
            clipPath: progress > 65
              ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
              : `polygon(0 ${100 - progress * 1.5}%, 100% ${100 - progress * 1.5}%, 100% 100%, 0% 100%)`,
            transition: "clip-path 0.3s ease-out",
          }}
        >
          <path fill="#f91814" d="M -1 -1 L 101 -1 L 101 101 Q 50 101 -1 101 Z" />
        </svg>
      </div>

      {/* Spinning burger boy + text */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] flex items-center justify-center">
          <div className="animate-spin-slow">
            <img
              src="/img/logo.png"
              alt="Spinning Crazy Smash logo"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* "Craving..." text */}
        <div
          className={`mt-6 font-modak text-[#4C0016] text-4xl sm:text-5xl uppercase transition-opacity duration-500 ${showText ? "opacity-100" : "opacity-0"}`}
        >
          Craving...
        </div>

        {/* Status text */}
        <div className="mt-4 font-body text-sm sm:text-base tracking-[.3em] text-beige/90 uppercase text-center px-4" aria-live="polite">
          PREPARING ARTISAN KITCHEN...
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full absolute bottom-0 left-0 h-[2vw] sm:h-[1vw] bg-white/15 overflow-hidden" role="progressbar" aria-label="Loading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <div className="h-full bg-mustard transition-all duration-75" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
