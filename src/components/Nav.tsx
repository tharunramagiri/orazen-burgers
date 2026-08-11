"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function RollText({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={`group relative inline-block overflow-hidden ${className}`}>
      <span className="block translate-y-0 transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}

const overlayLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Burgers" },
  { href: "/spices", label: "Our Spices" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[3vw] py-[1.6vw] max-md:px-[5vw] max-md:py-[4vw]">
        <Link
          href="/"
          className="font-modak text-[4vw] leading-none text-red transition-transform duration-300 hover:scale-105 [-webkit-text-stroke:2px_var(--color-white)] max-md:text-[10vw]"
          style={{ paintOrder: "stroke fill" }}
        >
          ORAZEN
        </Link>

        <div className="flex items-center gap-[1vw] max-md:gap-[3vw]">
          <Link
            href="/menu"
            className="rounded-full bg-red px-[1.6vw] py-[.5vw] font-body text-[1.3vw] uppercase tracking-[.05em] text-beige transition-transform duration-300 hover:scale-105 max-md:px-[4vw] max-md:py-[1.5vw] max-md:text-[3.5vw]"
          >
            <RollText>Burgers</RollText>
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-[.6vw] rounded-full border-2 border-black/20 px-[1.4vw] py-[.5vw] font-body text-[1.3vw] uppercase text-black transition-transform duration-300 hover:scale-105 max-md:gap-[2vw] max-md:px-[3.5vw] max-md:py-[1.5vw] max-md:text-[3.5vw]"
            aria-label="Toggle menu"
          >
            <RollText>Menu</RollText>
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-[18px] bg-black max-md:w-[5vw]" />
              <span className="block h-[2px] w-[18px] bg-black max-md:w-[5vw]" />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center gap-[1vw] bg-[#4c0016] max-md:gap-[3vw]"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-[3vw] top-[2vw] font-body text-[1.4vw] uppercase tracking-widest text-beige/70 max-md:text-[4vw]"
            >
              Close ✕
            </button>
            {overlayLinks.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-modak text-[6vw] uppercase leading-[1.1] text-beige transition-transform duration-300 hover:scale-105 max-md:text-[12vw]"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <p className="mt-4 font-body text-sm tracking-[.2em] text-beige/50 uppercase">
              Built & redesigned by orazen.online
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
