"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion";

export default function StickerPeel({
  src,
  alt,
  width = "140px",
  rotate = "-6deg",
  className = "",
}: {
  src: string;
  alt: string;
  width?: string;
  rotate?: string;
  className?: string;
}) {
  const [peel, setPeel] = useState(0);
  const springPeel = useSpring(peel, { stiffness: 90, damping: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setPeel((p) => (p >= 1 ? 1 : p + 0.02));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleHover = (amount: number) => {
    setPeel(amount);
  };

  const clipRemaining = useTransform(
    springPeel,
    [0, 1],
    [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 85% 0%, 85% 100%, 0% 100%)",
    ]
  );

  const clipFlap = useTransform(
    springPeel,
    [0, 1],
    [
      "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      "polygon(85% 0%, 100% 0%, 100% 100%, 85% 100%)",
    ]
  );

  const flapRotate = useTransform(springPeel, [0, 1], [0, -25]);

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width, transform: `rotate(${rotate})` }}
      onMouseEnter={() => handleHover(0.85)}
      onMouseLeave={() => handleHover(0)}
    >
      {/* Base layer - remaining stuck portion */}
      <motion.div
        className="relative drop-shadow-[0_12px_20px_rgba(0,0,0,0.3)]"
        style={{ clipPath: clipRemaining }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
          draggable={false}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
      </motion.div>

      {/* Peeling flap */}
      <motion.div
        className="absolute top-0 left-0 w-full"
        style={{
          clipPath: clipFlap,
          transformOrigin: "left center",
          rotateY: flapRotate,
          filter: "brightness(0.92) drop-shadow(4px 4px 12px rgba(0,0,0,0.4))",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain scale-x-[-1]"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
