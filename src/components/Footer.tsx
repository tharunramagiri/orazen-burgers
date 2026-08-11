'use client';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Burgers' },
  { href: '/spices', label: 'Spices' },
  { href: '/contact', label: 'Contact' },
];

// Individual letters for the pop-up animation (like original CRAV)
const letters = ['O', 'R', 'A', 'Z', 'E', 'N'];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-beige">
      {/* Top row: nav links + copyright */}
      <div className="relative z-30 flex items-center justify-between gap-[2vw] pb-[1vw] max-md:flex-col max-md:items-center max-md:gap-[4vw] max-md:pb-[6vw] px-[2.5vw] pt-[6vw]">
        <nav className="flex flex-wrap items-center gap-x-[2vw] gap-y-[.6vw] max-md:gap-x-[5vw] max-md:gap-y-[2vw]" aria-label="Footer navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[1.8vw] leading-[1.1] max-md:text-[4.2vw] uppercase font-body hover:text-red transition-colors text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-[1.8vw] leading-[1.1] max-md:hidden max-md:text-[4.2vw] uppercase opacity-80 font-body text-ink">
          © 2026 ORAZEN — All rights reserved
        </p>
      </div>

      {/* Divider */}
      <div className="relative z-30 max-md:hidden px-[2.5vw]">
        <div className="h-[2px] w-full bg-black/20" />
      </div>

      {/* Tagline */}
      <div className="relative z-30 max-md:hidden pt-[1vw] opacity-80 max-md:pt-[4vw] px-[2.5vw]">
        <p className="text-[1.8vw] leading-[1.1] max-md:text-[4.2vw] uppercase font-body text-ink">
          Smashed patties · toasted buns · built by orazen.online
        </p>
      </div>

      {/* Giant ORAZEN section with floating ingredients behind */}
      <div className="mt-[10vw] relative min-h-[18vw] max-md:mt-[5vw]">
        {/* Floating ingredients BEHIND the text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0 z-20" aria-hidden="true">
          <img
            src="/img-webp/lettuce.webp"
            alt=""
            draggable={false}
            className="absolute bottom-0 w-[11vw] h-auto object-contain select-none"
            style={{ left: '12%' }}
          />
          <img
            src="/img-webp/tomato.webp"
            alt=""
            draggable={false}
            className="absolute bottom-0 w-[9vw] h-auto object-contain select-none"
            style={{ left: '34%' }}
          />
          <img
            src="/img-webp/cheese-logo.webp"
            alt=""
            draggable={false}
            className="absolute bottom-0 w-[12vw] h-auto object-contain select-none"
            style={{ left: '56%' }}
          />
          <img
            src="/img-webp/meat.webp"
            alt=""
            draggable={false}
            className="absolute bottom-0 w-[13vw] h-auto object-contain select-none"
            style={{ left: '80%' }}
          />
        </div>

        {/* ORAZEN text in Modak — spans full width, massive */}
        <h2 className="text-center text-red z-10 relative font-modak text-[15vw] uppercase leading-[.5] translate-y-[5vw] max-md:translate-y-0"
          style={{
            WebkitTextStroke: 'clamp(1px, 1vw, 16px) var(--color-white)',
            paintOrder: 'stroke fill',
          }}
        >
          <span className="sr-only">ORAZEN</span>
          <span aria-hidden="true">
            {letters.map((letter, i) => (
              <span
                key={i}
                className="inline-block will-change-transform"
              >
                {letter}
              </span>
            ))}
          </span>
        </h2>

        {/* Mobile divider + copyright */}
        <div className="relative hidden max-md:block z-30 mt-[10vw] px-[2.5vw]">
          <div className="h-[2px] w-full bg-black/20" />
        </div>

        <div className="relative z-30 pt-[1vw] max-md:pt-[4vw] px-[2.5vw]">
          <p className="text-[1.8vw] leading-[1.1] max-md:text-[4.2vw] uppercase font-body opacity-80 text-center text-ink">
            <span className="hidden max-md:block mb-2">
              Smashed patties · toasted buns · built by orazen.online
            </span>
            <span className="md:hidden block">
              © 2026 ORAZEN — All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
