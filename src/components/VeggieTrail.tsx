"use client";

import { useEffect, useRef } from "react";

const VEGGIES = ["🌶️", "🧅", "🍅", "🥬"];

export default function VeggieTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: -200, y: -200 });
  const positionsRef = useRef<{ x: number; y: number }[]>(
    Array.from({ length: VEGGIES.length }, () => ({ x: -200, y: -200 }))
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Inject CSS for veggie nodes
    const style = document.createElement("style");
    style.textContent = `
      .vt-node {
        position: fixed; top: 0; left: 0;
        pointer-events: none; z-index: 999998;
        font-size: 22px; line-height: 1;
        user-select: none;
        will-change: transform;
        display: flex;
        align-items: center; justify-content: center;
        width: 46px; height: 46px;
        border-radius: 50%;
        background: white;
        box-shadow: 0 3px 12px rgba(0,0,0,0.2);
      }
    `;
    document.head.appendChild(style);

    // Create veggie nodes
    const nodes: HTMLDivElement[] = [];
    VEGGIES.forEach((emoji) => {
      const div = document.createElement("div");
      div.className = "vt-node";
      div.textContent = emoji;
      document.body.appendChild(div);
      nodes.push(div);
    });
    nodesRef.current = nodes;

    // Canvas for string
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMouse(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", onMouse, { passive: true });

    function animate() {
      const mouse = mouseRef.current;
      const positions = positionsRef.current;

      // Update positions with trailing
      for (let i = 0; i < positions.length; i++) {
        const target = i === 0 ? mouse : positions[i - 1];
        positions[i].x += (target.x - positions[i].x) * (0.18 + i * 0.04);
        positions[i].y += (target.y - positions[i].y) * (0.18 + i * 0.04);
      }

      // Position nodes
      nodes.forEach((node, i) => {
        const p = positions[i];
        node.style.transform = `translate(${p.x - 23}px, ${p.y - 23}px)`;
      });

      // Draw string
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
      for (let i = 0; i < positions.length; i++) {
        ctx.lineTo(positions[i].x, positions[i].y);
      }
      ctx.strokeStyle = "rgba(249, 24, 20, 0.3)";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      requestAnimationFrame(animate);
    }
    const raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
      nodes.forEach((n) => n.remove());
      document.head.removeChild(style);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 999997 }}
    />
  );
}
