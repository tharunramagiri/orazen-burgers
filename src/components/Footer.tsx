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

// Tanish's cursor emoji trail (🌶️🧅🍅🥬)
const VEGGIES = ["🌶️", "🧅", "🍅", "🥬"];

export default function Footer() {
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
    <footer className="relative flex flex-col overflow-hidden bg-beige">
      {/* ===== TANISH-STYLE FLOATING VEGGIE ANIMATIONS (2 layers) ===== */}
      {/* Layer 1: vegi-animation */}
      <div className="absolute inset-0 flex justify-evenly items-end pointer-events-none overflow-hidden z-0">
        <img src="/img-webp/patty.png" alt="" className="vegi-float" />
        <img src="/img-webp/tomato-sticker.png" alt="" className="vegi-float" />
        <img src="/img-webp/cheese-sticker.png" alt="" className="vegi-float" />
        <img src="/img-webp/lettuce-sticker.png" alt="" className="vegi-float" />
      </div>
      {/* Layer 2: vegi-animation-1 (reversed order, different --x/--r) */}
      <div className="absolute inset-0 flex justify-evenly items-end pointer-events-none overflow-hidden z-0">
        <img src="/img-webp/lettuce-sticker.png" alt="" className="vegi-float-rev" />
        <img src="/img-webp/patty.png" alt="" className="vegi-float-rev" />
        <img src="/img-webp/tomato-sticker.png" alt="" className="vegi-float-rev" />
        <img src="/img-webp/cheese-sticker.png" alt="" className="vegi-float-rev" />
      </div>

      {/* ===== FOOTER CONTENT (above floating veggies) ===== */}
      {/* Footer info row */}
      <section className="relative z-10 flex gap-[100px] px-8 pt-12 pb-4 font-body text-sm uppercase tracking-[1px] max-md:flex-col max-md:gap-4 max-md:px-6">
        <div className="flex gap-6 font-body text-lg font-semibold text-black max-md:text-base">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="absolute right-8 top-12 font-body text-lg font-semibold text-black uppercase tracking-[1px] max-md:static max-md:text-sm">
          © 2026 ORAZEN — ALL RIGHTS RESERVED
        </p>

        <hr className="absolute left-8 right-8 bottom-2 border-0 h-px bg-black/20" />

        <p className="absolute bottom-2 left-8 font-body text-sm font-semibold text-[#777] uppercase tracking-[1px] max-md:static max-md:mt-2">
          SMASHED PATTIES • TOASTED BUNS • BUILT BY ORAZEN.ONLINE
        </p>
      </section>

      {/* Giant ORAZEN heading — Tanish style */}
      <section className="relative z-10 flex justify-center items-center">
        <div className="flex justify-center items-center w-fit p-4 my-12 md:my-20">
          <h1
            className="font-modak text-[clamp(60px,22vw,380px)] text-red leading-[0.72] uppercase select-none"
            style={{
              WebkitTextStroke: "clamp(1.5px, 0.8vw, 16px) var(--color-white)",
              paintOrder: "stroke fill",
              textShadow: "0 12px 36px rgba(76, 0, 22, 0.08)",
            }}
          >
            ORAZEN
          </h1>
        </div>
      </section>
    </footer>
  );
}
