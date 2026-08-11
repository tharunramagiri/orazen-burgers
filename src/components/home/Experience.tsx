"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import WaveDivider from "@/components/WaveDivider";
import GooglyEyes from "@/components/GooglyEyes";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yA = useTransform(scrollYProgress, [0, 1], ["-6vw", "6vw"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["8vw", "-8vw"]);
  const yC = useTransform(scrollYProgress, [0, 1], ["-4vw", "10vw"]);
  const yD = useTransform(scrollYProgress, [0, 1], ["10vw", "-6vw"]);

  return (
    <>
      {/* Beige → Red wave transition */}
      <WaveDivider from="#f5e3cd" to="#f91814" height="8vw" className="-mb-[1px]" />

      <section ref={ref} className="relative overflow-hidden bg-red px-[3vw] pb-[10vw] pt-[6vw]">
        {/* Watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06]">
          <span className="font-display text-[20vw] leading-none text-white whitespace-nowrap">
            ORAZEN
          </span>
        </div>

        {/* Burger with googly eyes */}
        <div className="relative mx-auto w-[60vw] max-md:w-[90vw]">
          <Image
            src="/img-webp/burgerwithhands.webp"
            alt="Burger with hands"
            width={1000}
            height={700}
            className="relative z-10 h-auto w-full object-contain"
          />
          <GooglyEyes />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-[3vw] text-center font-modak text-[2.4vw] leading-none text-white/80 max-md:text-[5vw]"
        >
          Food That Feels Good
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-[1vw] text-center font-display text-[11vw] leading-[.9] text-white max-md:text-[14vw]"
        >
          Bold Flavour
        </motion.h2>
      </section>

      {/* Red → Beige wave transition */}
      <WaveDivider from="#f91814" to="#f5e3cd" height="6vw" className="-mb-[1px]" />

      <section className="relative overflow-hidden bg-beige px-[3vw] pb-[8vw] pt-[3vw]">
        {/* Every Layer heading */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-[1vw] text-center font-modak text-[2.6vw] uppercase leading-none text-red max-md:text-[6vw]"
        >
          Every Layer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-[8vw] leading-[.92] text-ink max-md:text-[12vw]"
        >
          Packed With<br />Signature Flavor
        </motion.h2>

        {/* Floating parallax ingredients */}
        <div className="relative mt-[6vw] flex justify-center gap-[4vw] max-md:gap-[6vw]">
          <motion.div style={{ y: yA }} className="w-[12vw] max-md:w-[22vw]">
            <Image src="/img-webp/tomato.webp" alt="Tomato" width={200} height={200} className="h-auto w-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.3)]" />
          </motion.div>
          <motion.div style={{ y: yB }} className="w-[14vw] max-md:w-[25vw]">
            <Image src="/img-webp/cheese.webp" alt="Cheese" width={200} height={200} className="h-auto w-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.3)]" />
          </motion.div>
          <motion.div style={{ y: yC }} className="w-[16vw] max-md:w-[28vw]">
            <Image src="/img-webp/meat.webp" alt="Meat" width={250} height={300} className="h-auto w-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.3)]" />
          </motion.div>
          <motion.div style={{ y: yD }} className="w-[12vw] max-md:w-[22vw]">
            <Image src="/img-webp/lettuce.webp" alt="Lettuce" width={200} height={160} className="h-auto w-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.3)]" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
