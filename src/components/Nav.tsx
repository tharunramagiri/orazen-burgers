"use client";
import { useState } from "react";
import Link from "next/link";

const overlayLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/menu", label: "Burgers" },
  { href: "/spices", label: "Our Spices" },
  { href: "/#takeaway", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999] flex items-center justify-between px-[2.5vw] max-md:px-[4vw] py-[1vw] max-md:py-[4vw]">
        {/* Logo */}
        <Link
          href="/"
          className="font-modak hover:scale-105 transition-all duration-300 text-red [-webkit-text-stroke:clamp(1px,0.34vw,4px)_var(--color-white)] text-[4vw] max-md:text-[10vw] leading-none"
        >
          Crazy Smash
        </Link>

        <div className="flex items-center gap-[1vw] max-md:gap-[3vw]">
          {/* Burgers pill */}
          <Link
            href="/menu"
            className="font-body hover:scale-105 transition-all duration-300 flex items-center justify-center text-[1.3vw] max-md:text-[4vw] uppercase tracking-wide text-beige bg-red px-[1.6vw] py-[.5vw] max-md:px-[5vw] max-md:py-[1.8vw] group rounded-full hover:bg-black"
          >
            Burgers
          </Link>

          {/* Menu button - red when open with X */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className={`hover:scale-105 flex items-center gap-[.6vw] max-md:gap-[2vw] px-[1.4vw] py-[.5vw] max-md:px-[4vw] group max-md:py-[1.8vw] rounded-full cursor-pointer transition-all duration-300 border-[.15vw] max-md:border-[.4vw] ${
                open ? "bg-red border-red" : "bg-transparent border-black/20 hover:border-black"
              }`}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={`font-body flex items-center justify-center uppercase text-[1.3vw] max-md:text-[4vw] tracking-wide transition-colors duration-300 ${
                open ? "text-beige" : "text-black"
              }`}>
                {open ? "Close" : "Menu"}
              </span>

              {/* Hamburger / X icon */}
              <div className="relative shrink-0 w-[1.2vw] h-[1.2vw] max-md:w-[3.5vw] max-md:h-[3.5vw]" aria-hidden="true">
                <span
                  className={`absolute left-0 block w-full h-[.15vw] max-md:h-[.5vw] rounded-full transition-all duration-300 ${
                    open ? "bg-beige top-1/2 -translate-y-1/2 rotate-45" : "bg-black top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block w-[70%] h-[.15vw] max-md:h-[.5vw] rounded-full -translate-y-1/2 transition-all duration-300 ${
                    open ? "bg-beige scale-x-0 opacity-0" : "bg-black"
                  }`}
                />
                <span
                  className={`absolute left-0 block w-full h-[.15vw] max-md:h-[.5vw] rounded-full transition-all duration-300 ${
                    open ? "bg-beige top-1/2 -translate-y-1/2 -rotate-45" : "bg-black bottom-0"
                  }`}
                />
              </div>
            </button>

            {/* Dropdown menu */}
            <div
              className={`absolute top-[calc(100%+1vw)] right-0 w-[18vw] max-md:w-[91vw] bg-red rounded-[1.2vw] max-md:rounded-[4vw] p-[2vw] max-md:mt-[5vw] max-md:p-[6vw] shadow-[0_1vw_3vw_rgba(27,27,27,.25)] transition-all duration-300 origin-top-right ${
                open
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-[0.3] pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-[.6vw] max-md:gap-[2vw]">
                {overlayLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-modak text-[2.4vw] max-md:text-[8vw] text-beige leading-[1.1] uppercase hover:text-mustard hover:scale-105 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-[1.5vw] max-md:mt-[4vw] pt-[1vw] max-md:pt-[3vw] border-t border-beige/20">
                <p className="font-body text-[.9vw] max-md:text-[3.5vw] text-beige/85 uppercase tracking-[.2em]">
                  📍 Caserta, Italia crazysmash.it
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
