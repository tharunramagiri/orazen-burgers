"use client";

import { useState } from "react";

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
  const [peeled, setPeeled] = useState(false);

  return (
    <div
      className={`relative inline-block cursor-pointer select-none ${className}`}
      style={{ width, transform: `rotate(${rotate})` }}
      onMouseEnter={() => setPeeled(true)}
      onMouseLeave={() => setPeeled(false)}
    >
      {/* Main sticker image with peel effect */}
      <div className="relative drop-shadow-[0_12px_20px_rgba(0,0,0,0.3)] group">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          draggable={false}
        />

        {/* Peel corner overlay */}
        <div
          className="absolute -top-1 -right-1 w-1/3 h-1/3 transition-all duration-300 ease-out origin-bottom-left"
          style={{
            transform: peeled
              ? "rotate(-25deg) translate(8px, -8px)"
              : "rotate(0deg) translate(0, 0)",
            filter: peeled
              ? "brightness(0.85) drop-shadow(3px 3px 8px rgba(0,0,0,0.4))"
              : "brightness(1)",
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-auto object-contain scale-x-[-1]"
            draggable={false}
          />
        </div>

        {/* Shine overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
