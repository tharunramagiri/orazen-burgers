"use client";
import Image from "next/image";
import { useState } from "react";

const burgers = [
  {
    id: 1,
    name: "Smoky Bacon Burger",
    price: 16,
    prepTime: "12-18 min",
    bun: "BRIOCHE",
    cheese: "CHEDDAR",
    topping: "BACON",
    calories: 760,
    protein: 36,
    image: "/img-webp/burger.webp",
  },
  {
    id: 2,
    name: "Spicy Jalapeño Burger",
    price: 18,
    prepTime: "10-15 min",
    bun: "SESAME",
    spice: "JALAPEÑO",
    sauce: "CHIPOTLE",
    calories: 710,
    protein: 34,
    image: "/img-webp/burgerwithhands.webp",
  },
  {
    id: 3,
    name: "Classic Cheese Burger",
    price: 21,
    prepTime: "15-20 min",
    bun: "POTATO",
    cheese: "AMERICAN",
    sauce: "CRAVE SPECIAL",
    calories: 690,
    protein: 32,
    image: "/img-webp/cheesyBurger.webp",
  },
];

export default function BurgerGrid() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <section className="relative bg-red overflow-hidden pb-16">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="w-full h-[80px] sm:h-[120px]">
          <path
            fill="#f5e3cd"
            d="M0,80 C200,20 400,120 650,60 C900,0 1150,120 1440,50 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Sticker decorations */}
      <img
        src="/img-webp/fries_sticker.png"
        alt=""
        className="absolute left-[5%] top-[8%] w-[10vw] opacity-80 max-md:w-[20vw] hidden sm:block"
      />
      <img
        src="/img/burger-boy.png"
        alt=""
        className="absolute right-[5%] top-[12%] w-[12vw] opacity-80 max-md:w-[22vw] hidden sm:block"
      />

      {/* Heading */}
      <div className="text-center px-4 pt-2">
        <p className="font-body text-[clamp(1.2rem,3vw,2rem)] uppercase tracking-[.15em] text-white/80">
          OUR MENU
        </p>
        <h2 className="font-body text-[clamp(2.5rem,10vw,6rem)] uppercase leading-[.9] text-white mt-2">
          SIGNATURE <br /> BURGERS
        </h2>
        <p className="font-body text-[clamp(1rem,2.5vw,1.5rem)] text-white/70 mt-3">
          Every patty hand-crafted. Every bite unforgettable.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-start gap-10 px-8 mt-8 max-md:flex-col max-md:px-4 max-md:gap-6">
        {burgers.map((burger) => (
          <div
            key={burger.id}
            className="relative w-full max-w-[380px] bg-white rounded-[40px] overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Add button */}
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="absolute right-4 top-4 z-10 w-12 h-12 rounded-full bg-mustard text-ink font-bold text-2xl flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-mustard-dark"
            >
              +
            </button>

            {/* Product image */}
            <div className="w-full h-[280px] pt-4 flex items-center justify-center">
              <Image
                src={burger.image}
                alt={burger.name}
                width={260}
                height={200}
                className="object-contain h-full w-auto"
              />
            </div>

            {/* Product details */}
            <div className="flex justify-between items-center px-6 py-3">
              <h3 className="font-body text-red text-2xl font-bold tracking-wide">{burger.name}</h3>
              <span className="font-body text-2xl font-bold text-ink">${burger.price}</span>
            </div>

            {/* Description - visible on hover */}
            <div className="border-t-2 border-black/20 mx-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 px-2 py-3">
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-xs uppercase tracking-wider text-ink/50">Quick detail</span>
                <span className="font-body text-sm font-bold text-ink">{burger.prepTime}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <span className="font-body text-[10px] uppercase tracking-wider text-ink/40">BUN</span>
                  <p className="font-body text-sm font-bold text-ink">{burger.bun}</p>
                </div>
                {"cheese" in burger ? (
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-wider text-ink/40">CHEESE</span>
                    <p className="font-body text-sm font-bold text-ink">{burger.cheese}</p>
                  </div>
                ) : (
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-wider text-ink/40">SPICE</span>
                    <p className="font-body text-sm font-bold text-ink">{burger.spice}</p>
                  </div>
                )}
                {"topping" in burger ? (
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-wider text-ink/40">TOPPING</span>
                    <p className="font-body text-sm font-bold text-ink">{burger.topping}</p>
                  </div>
                ) : (
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-wider text-ink/40">SAUCE</span>
                    <p className="font-body text-sm font-bold text-ink">{burger.sauce}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-6 text-sm">
                <span className="font-body text-ink/60">calories <strong className="text-ink">{burger.calories}</strong></span>
                <span className="font-body text-ink/60">protein <strong className="text-ink">{burger.protein}g</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart count badge */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50 bg-red text-white font-body font-bold text-lg px-5 py-3 rounded-full shadow-lg animate-bounce">
          🛒 {cartCount} added
        </div>
      )}

      {/* View full menu link */}
      <div className="text-center mt-8 px-8">
        <p className="font-body text-[clamp(1rem,2.5vw,1.5rem)] text-white/80 hover:text-mustard transition-colors cursor-pointer inline-flex items-center gap-2">
          View Full Menu <span className="text-xl">→</span>
        </p>
        <hr className="w-32 mx-auto mt-2 border-white/30" />
      </div>
    </section>
  );
}
