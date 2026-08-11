"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IngredientsShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yA = useTransform(scrollYProgress, [0, 1], ["-6vw", "6vw"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["8vw", "-8vw"]);
  const yC = useTransform(scrollYProgress, [0, 1], ["-4vw", "10vw"]);
  const yD = useTransform(scrollYProgress, [0, 1], ["10vw", "-6vw"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-beige px-[3vw] pb-[10vw] pt-[12vw] text-center">
      {/* "Pure Quality" eyebrow */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-[1vw] inline-block -rotate-3 font-modak text-[2.6vw] uppercase leading-none text-red max-md:text-[6vw]"
      >
        Pure Quality
      </motion.p>

      <div className="relative mx-auto w-[60vw] max-md:w-full">
        {/* Floating parallax ingredients */}
        <motion.div style={{ y: yA }} className="pointer-events-none absolute -left-[2.5vw] -top-[8vw] z-20 w-[24vw] max-md:w-[30vw]">
          <Image src="/img-webp/lettuce.webp" alt="" width={400} height={300} className="h-auto w-full" />
        </motion.div>
        <motion.div style={{ y: yB }} className="pointer-events-none absolute -right-[2.5vw] top-[4vw] z-20 w-[18vw] max-md:w-[24vw]">
          <Image src="/img-webp/tomato.webp" alt="" width={300} height={260} className="h-auto w-full" />
        </motion.div>
        <motion.div style={{ y: yC }} className="pointer-events-none absolute -left-[3.5vw] top-[25vw] z-20 w-[23vw] max-md:hidden">
          <Image src="/img-webp/cheese.webp" alt="" width={380} height={185} className="h-auto w-full" />
        </motion.div>
        <motion.div style={{ y: yD }} className="pointer-events-none absolute right-[1vw] top-[29vw] z-20 w-[20vw] max-md:hidden">
          <Image src="/img-webp/meat.webp" alt="" width={330} height={190} className="h-auto w-full" />
        </motion.div>

        {/* Reveal text lines */}
        <div className="relative z-10">
          {["Every Layer", "Packed With", "Signature", "Flavor"].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="font-body text-[15vw] uppercase leading-[.75] text-red max-md:text-[16vw]"
            >
              <span className="sr-only">{line}</span>
              <span aria-hidden="true">
                {line.split(" ").map((word, j) => (
                  <span key={j} className="inline-block overflow-hidden align-bottom">
                    <span className="inline-block will-change-transform">
                      {word}
                      {j < line.split(" ").length - 1 ? " " : ""}
                    </span>
                  </span>
                ))}
              </span>
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
