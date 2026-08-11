"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="scroll-top-btn fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-red text-lg font-bold text-white shadow-lg hover:bg-ink"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
