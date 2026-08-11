"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StickerImage from "@/components/StickerImage";

const polaroids = [
  { src: "/img-webp/about-1.webp", rot: "-4deg", top: "3vw", h: "27vw" },
  { src: "/img-webp/about-2.webp", rot: "2deg", top: "-1vw", h: "30vw" },
  { src: "/img-webp/about-3.webp", rot: "6deg", top: "4vw", h: "27vw" },
];

const galleryTilt = ["rotate-[-3deg]", "mt-6 rotate-[2deg]", "rotate-[-2deg]"];

export default function TopClassic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-beige px-[3vw] pb-[6vw] pt-[4vw] text-center">
      {/* ORAZEN section header */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto text-center font-modak text-[15vw] uppercase leading-[.8] text-mustard-dark max-md:text-[24vw] [-webkit-text-stroke:2px_var(--ink)]"
        style={{ paintOrder: "stroke fill" }}
      >
        ORAZEN
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-[2vw] inline-block -rotate-3 font-modak text-[2.6vw] uppercase leading-none text-red max-md:text-[6vw]"
      >
        Top Classic
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto w-[70%] font-display text-[9vw] leading-[.92] text-red [-webkit-text-stroke:4px_var(--ink)] max-md:w-[95%] max-md:text-[13vw]"
        style={{ paintOrder: "stroke fill" }}
      >
        Juicy Cheesy<br />Fully Loaded
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-[1.5vw] w-[45%] font-body text-base leading-relaxed text-ink/80 max-md:w-[90%] sm:text-lg"
      >
        ORAZEN is back and bolder than ever. Honoring our rich roots, we
        bring you the ultimate smashed experience — fully loaded, hot,
        and crafted fresh.
      </motion.p>

      <Link
        href="/menu"
        className="mt-8 inline-flex rounded-full bg-red px-9 py-4 font-body text-sm font-bold tracking-[0.08em] text-white uppercase transition-transform hover:-translate-y-0.5 hover:bg-ink"
      >
        Order Now
      </Link>

      {/* Polaroid gallery */}
      <div ref={ref} className="relative mx-auto mt-[6vw] flex max-w-[70vw] justify-center gap-[2vw] max-md:flex-row max-md:gap-[3vw] max-md:max-w-full">
        {polaroids.map((p, i) => (
          <motion.div
            key={p.src}
            initial={false}
            animate={
              inView
                ? { opacity: 1, y: 0, rotate: parseFloat(p.rot) }
                : { opacity: 0, y: 60, rotate: 0 }
            }
            transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-md border-2 border-ink shadow-lg"
            style={{ width: "20vw", height: p.h, maxWidth: "35vw" }}
          >
            <Image
              src={p.src}
              alt={i === 2 ? "ORAZEN restaurant atmosphere" : `Burger photo ${i + 1}`}
              fill
              sizes="20vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Burger selfie overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: 25 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: -8 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          className="absolute -bottom-[6vw] left-[5%] z-30 w-[16vw] max-md:w-[28vw] max-md:-bottom-[8vw]"
        >
          <Image src="/img/burgerselfie.png" alt="" width={300} height={360} className="h-auto w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]" />
        </motion.div>
      </div>
    </section>
  );
}
