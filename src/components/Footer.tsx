"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Burgers" },
  { href: "/spices", label: "Spices" },
  { href: "/contact", label: "Contact" },
];

const VEGGIES = ["🌶️", "🧅", "🍅", "🥬"];

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<{ el: HTMLSpanElement; x: number; y: number }[]>([]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .ft-veggie-node {
        position: fixed; top: 0; left: 0;
        pointer-events: none; z-index: 999998;
        font-size: 28px; line-height: 1;
        user-select: none; will-change: transform;
        display: flex; align-items: center; justify-content: center;
        width: 52px; height: 52px;
        border-radius: 50%; background: white;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      }
    `;
    document.head.appendChild(style);

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999997;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener("resize", resize);

    const nodes = VEGGIES.map((icon) => {
      const el = document.createElement("span");
      el.className = "ft-veggie-node";
      el.textContent = icon;
      document.body.appendChild(el);
      return { el, x: -300, y: -300 };
    });
    nodesRef.current = nodes;

    let mx = -300, my = -300;
    const LERP = [0.15, 0.14, 0.13, 0.12];

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove, { passive: true });

    function tick() {
      nodes[0].x += (mx - nodes[0].x) * LERP[0];
      nodes[0].y += (my - nodes[0].y) * LERP[0];
      for (let i = 1; i < nodes.length; i++) {
        nodes[i].x += (nodes[i - 1].x - nodes[i].x) * LERP[i];
        nodes[i].y += (nodes[i - 1].y - nodes[i].y) * LERP[i];
      }
      nodes.forEach((n) => {
        n.el.style.transform = `translate(${n.x}px, ${n.y}px) translate(-50%, -50%)`;
      });
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(mx, my);
      for (let i = 0; i < nodes.length; i++) {
        const mx2 = i === 0 ? (mx + nodes[0].x) / 2 : (nodes[i - 1].x + nodes[i].x) / 2;
        const my2 = i === 0 ? (my + nodes[0].y) / 2 : (nodes[i - 1].y + nodes[i].y) / 2;
        ctx.quadraticCurveTo(i === 0 ? mx : nodes[i - 1].x, i === 0 ? my : nodes[i - 1].y, mx2, my2);
      }
      ctx.lineTo(nodes[nodes.length - 1].x, nodes[nodes.length - 1].y);
      ctx.strokeStyle = "rgba(249, 24, 20, 0.4)";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
      requestAnimationFrame(tick);
    }
    const raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      nodes.forEach((n) => n.el.remove());
      canvas.remove();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <footer className="relative overflow-hidden bg-beige pt-[6vw]">
      {/* Floating ingredients — akpr0ject measured positions */}
      <Image
        src="/img-webp/lettuce.webp" alt="" width={200} height={160}
        className="pointer-events-none absolute -left-[3vw] bottom-[26vw] z-20 w-[11.5vw] -rotate-[4deg] select-none max-md:hidden"
      />
      <Image
        src="/img-webp/tomato.webp" alt="" width={200} height={200}
        className="pointer-events-none absolute left-[31%] bottom-[24vw] z-20 w-[12vw] rotate-[41deg] select-none max-md:w-[16vw]"
      />
      <Image
        src="/img-webp/meat.webp" alt="" width={200} height={270}
        className="pointer-events-none absolute left-[60%] bottom-[26vw] z-20 w-[11vw] rotate-[106deg] select-none max-md:w-[15vw]"
      />
      <Image
        src="/img-webp/cheese-logo.webp" alt="" width={200} height={200}
        className="pointer-events-none absolute left-[47%] bottom-[14vw] z-20 w-[11vw] select-none max-md:w-[16vw]"
      />

      {/* Top row: nav links + copyright */}
      <div className="relative z-10 flex items-center justify-between px-[3vw] max-md:flex-col max-md:gap-[4vw] max-md:px-[5vw]">
        <nav className="flex gap-[2vw] max-md:gap-[5vw]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-[1.1vw] uppercase tracking-[.1em] text-black transition-colors hover:text-red max-md:text-[3.5vw]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="font-body text-[1.1vw] uppercase tracking-[.05em] text-black/70 max-md:text-[3vw]">
          © 2026 ORAZEN — All rights reserved
        </p>
      </div>

      <div className="relative z-10 mx-[3vw] mt-[1.2vw] border-t border-black/20" />

      {/* Tagline */}
      <p className="relative z-10 mt-[1.2vw] px-[3vw] font-body text-[1.1vw] uppercase tracking-[.05em] text-black/70 max-md:px-[5vw] max-md:text-[3vw]">
        Smashed patties · toasted buns · built by orazen.online
      </p>

      {/* Giant ORAZEN — matching original CRAV footer */}
      <h2 className="relative z-10 mt-[1vw] text-center font-modak text-[35vw] uppercase leading-[.72] text-red [-webkit-text-stroke:1vw_var(--color-white)] max-md:text-[30vw]"
        style={{ paintOrder: "stroke fill" }}>
        ORAZEN
      </h2>
    </footer>
  );
}
