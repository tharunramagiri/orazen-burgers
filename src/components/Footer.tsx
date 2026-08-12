'use client';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Burgers' },
  { href: '/spices', label: 'Spices' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-beige max-w-[100vw]">
      {/* Floating emoji layer - CSS animated */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <span className="absolute text-3xl animate-float-emoji" style={{ left: '10%', bottom: '20%', animationDelay: '0s' }}>🌶️</span>
        <span className="absolute text-3xl animate-float-emoji" style={{ left: '30%', bottom: '40%', animationDelay: '1.5s' }}>🧅</span>
        <span className="absolute text-3xl animate-float-emoji" style={{ left: '55%', bottom: '25%', animationDelay: '3s' }}>🍅</span>
        <span className="absolute text-3xl animate-float-emoji" style={{ left: '75%', bottom: '45%', animationDelay: '4.5s' }}>🥬</span>
        <span className="absolute text-2xl animate-float-emoji" style={{ left: '20%', bottom: '60%', animationDelay: '2s' }}>🍔</span>
        <span className="absolute text-2xl animate-float-emoji" style={{ left: '65%', bottom: '65%', animationDelay: '5s' }}>🧀</span>
        <span className="absolute text-2xl animate-float-emoji" style={{ left: '85%', bottom: '30%', animationDelay: '3.5s' }}>🍟</span>
      </div>

      {/* Floating ingredient images BEHIND text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0 z-20" aria-hidden="true">
        <img
          src="/img-webp/lettuce.webp" alt=""
          className="absolute bottom-0 object-contain select-none"
          style={{ left: '12%', width: 'clamp(70px, 11vw, 150px)' }}
        />
        <img
          src="/img-webp/tomato.webp" alt=""
          className="absolute bottom-0 object-contain select-none"
          style={{ left: '34%', width: 'clamp(60px, 9vw, 120px)' }}
        />
        <img
          src="/img-webp/cheese-logo.webp" alt=""
          className="absolute bottom-0 object-contain select-none"
          style={{ left: '56%', width: 'clamp(80px, 12vw, 160px)' }}
        />
        <img
          src="/img-webp/meat.webp" alt=""
          className="absolute bottom-0 object-contain select-none"
          style={{ left: '80%', width: 'clamp(90px, 13vw, 170px)' }}
        />
      </div>

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
          © 2026 Crazy Smash — All rights reserved
        </p>
      </div>

      {/* Divider */}
      <div className="relative z-30 max-md:hidden px-[2.5vw]">
        <div className="h-[2px] w-full bg-black/20" />
      </div>

      {/* Tagline */}
      <div className="relative z-30 max-md:hidden pt-[1vw] opacity-80 max-md:pt-[4vw] px-[2.5vw]">
        <p className="text-[1.8vw] leading-[1.1] max-md:text-[4.2vw] uppercase font-body text-ink">
          Smashed patties · toasted buns · built by crazysmash.it
        </p>
      </div>

      {/* Giant Crazy Smash Logo */}
      <div className="mt-[10vw] relative min-h-[18vw] max-md:mt-[5vw] flex justify-center">
        <img
          src="/img/logo.png"
          alt="Crazy Smash"
          className="w-[50vw] max-w-[600px] h-auto object-contain translate-y-[5vw] max-md:translate-y-0 max-md:w-[70vw]"
        />

        {/* Mobile */}
        <div className="relative hidden max-md:block z-30 mt-[10vw] px-[2.5vw]">
          <div className="h-[2px] w-full bg-black/20" />
        </div>
        <div className="relative z-30 pt-[1vw] max-md:pt-[4vw] px-[2.5vw]">
          <p className="text-[1.8vw] leading-[1.1] max-md:text-[4.2vw] uppercase font-body opacity-80 text-center text-ink">
            <span className="hidden max-md:block mb-2">
              Smashed patties · toasted buns · built by crazysmash.it
            </span>
            <span className="md:hidden block">
              © 2026 Crazy Smash — All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
