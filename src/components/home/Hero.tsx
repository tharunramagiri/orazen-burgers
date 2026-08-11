"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import StickerPeel from "@/components/StickerPeel";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const burgerY = useTransform(scrollYProgress, [0, 1], ["0vw", "-10vw"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden pt-[8vw] max-md:h-[170vw] max-md:pt-[36vw]"
    >
      {/* Faint eyebrow — top-right */}
      <p className="absolute right-[3vw] top-[8vw] z-30 font-body text-[.9vw] uppercase tracking-[.2em] text-black/40 max-md:text-[3.5vw]">
        Built & redesigned by orazen.online
      </p>

      {/* THE BURGER */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-0 text-center font-display text-[30vw] leading-[.8] text-red [-webkit-text-stroke:2vw_var(--white)] max-md:text-[26vw] max-md:leading-[.85]"
        style={{ paintOrder: "stroke fill" }}
      >
        THE BURGER
      </motion.h1>

      {/* SMASHED FRESH + BOLD FLAVOR badges */}
      <div className="absolute top-[12%] left-[10%] z-10 max-md:top-[5%] max-md:left-[4%]">
        <span className="inline-block -rotate-[14deg] rounded-full border-2 border-ink bg-mustard px-4 py-2 font-body text-xs leading-none font-bold tracking-wide text-ink uppercase shadow-[0_6px_0_0_var(--ink)] sm:px-5 sm:py-3">
          Smashed<br />Fresh
        </span>
      </div>
      <div className="absolute top-[12%] right-[10%] z-10 max-md:top-[5%] max-md:right-[4%]">
        <span className="inline-block rotate-[14deg] rounded-full border-2 border-ink bg-mustard px-4 py-2 font-body text-xs leading-none font-bold tracking-wide text-ink uppercase shadow-[0_6px_0_0_var(--ink)] sm:px-5 sm:py-3">
          Bold<br />Flavor
        </span>
      </div>

      {/* Central burger image with parallax */}
      <motion.div
        style={{ y: burgerY }}
        className="absolute left-1/2 top-[52%] z-20 w-[42vw] -translate-x-1/2 -translate-y-1/2 max-md:top-[48%] max-md:w-[72vw]"
      >
        <Image
          src="/img-webp/burgerH.webp"
          alt="ORAZEN Artisan Smashed Burger with fresh ingredients"
          width={800}
          height={640}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_35px_45px_rgba(27,27,27,0.4)]"
        />
      </motion.div>

      {/* Background ORAZEN text */}
      <p className="absolute bottom-[15%] left-1/2 z-10 -translate-x-1/2 text-center font-modak text-[16vw] leading-none text-mustard opacity-50 select-none pointer-events-none [-webkit-text-stroke:2px_var(--ink)] max-md:bottom-[40%] max-md:text-[22vw]">
        ORAZEN
      </p>

      {/* Bottom description row */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-between px-[3vw] pb-[3vw] max-md:flex-col max-md:gap-[4vw] max-md:px-[5vw]">
        <p className="w-[23vw] font-body text-sm leading-relaxed text-ink/80 max-md:w-full">
          Smashed hot on the flat top, our prime patties lock in ultimate
          juiciness under a caramelized crust.
        </p>
        <span className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-ink/20 bg-red font-display text-sm tracking-wide text-white sm:h-20 sm:w-20 sm:text-base">
          ORAZEN
        </span>
        <p className="w-[23vw] text-right font-body text-sm leading-relaxed text-ink/80 max-md:w-full max-md:text-left">
          Topped with melted cheddar and our signature chili honey glaze —
          crafted to satisfy your cravings by orazen.online.
        </p>
      </div>

      {/* Sticker decorations */}
      <div className="absolute top-[25%] left-[2%] z-40 hidden lg:block">
        <StickerPeel
          src="/img-webp/fries_sticker.png"
          alt="Crispy fries sticker"
          width="110px"
          rotate="-15deg"
        />
      </div>
      <div className="absolute top-[50%] right-[3%] z-40 hidden lg:block">
        <StickerPeel
          src="/img/burgerselfie.png"
          alt="Burger selfie sticker"
          width="130px"
          rotate="20deg"
        />
      </div>
    </section>
  );
}
