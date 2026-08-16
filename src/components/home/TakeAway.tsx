"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import WaveDivider from "@/components/WaveDivider";
import OrderButton from "@/components/OrderButton";

const shots = [
  { name: "Ogni sera in piastra", src: "/img/real/combo-tray-branded-wall.jpg", rot: -6 },
  { name: "Pronto da asporto", src: "/img/real/double-burger-held-fries.jpg", rot: 4 },
  { name: "A due passi dalla Reggia", src: "/img/real/fried-chicken-bites-drink.jpg", rot: -3 },
];

export default function TakeawaySection() {
  return (
    <>
      <WaveDivider from="#f5e3cd" to="#ffd750" height="8vw" className="-mb-[1px]" />

      <section id="takeaway" className="relative overflow-hidden bg-mustard px-[3vw] pb-[8vw] pt-[4vw] max-md:pb-[12vw]">
        {/* "Take Away" badge */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-white px-[1.4vw] py-[.4vw] font-modak text-[2vw] uppercase leading-none text-mustard-dark max-md:text-[5vw]"
        >
          Take Away
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-[1vw] font-body text-[13vw] uppercase leading-[.85] text-white max-md:text-[15vw] max-md:leading-[.9]"
          style={{
            WebkitTextStroke: "1vw rgba(244,168,4,0.3)",
            paintOrder: "stroke fill",
          }}
        >
          Fresh in Caserta, Every Night
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-[1.5vw] max-w-[560px] font-body text-[1.8vw] leading-[1.15] text-ink/80 max-md:mt-[3vw] max-md:max-w-full max-md:text-[4vw]"
        >
          A due passi dalla Reggia di Caserta — burger schiacciati sulla piastra ogni sera, pronti da gustare al tavolo o da portare via.
        </motion.p>

        <div className="mt-[2.5vw] flex justify-center max-md:mt-[5vw]">
          <OrderButton />
        </div>

        {/* Photo trio */}
        <div className="mt-[5vw] flex items-start justify-center gap-[3vw] max-md:mt-[8vw] max-md:flex-col max-md:items-center max-md:gap-[6vw]">
          {shots.map((s, i) => (
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: s.rot }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
              className="relative w-[24vw] max-md:w-[78vw]"
            >
              <p
                className="absolute -top-[2vw] left-[1vw] z-20 font-modak text-[1.5vw] uppercase leading-none text-red max-md:-top-[5vw] max-md:text-[4.5vw]"
                style={{ WebkitTextStroke: "0.3vw var(--color-white)", paintOrder: "stroke fill" }}
              >
                {s.name}
              </p>
              <div className="relative h-[26vw] w-full overflow-hidden rounded-[1vw] border-[.5vw] border-white bg-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] max-md:h-[70vw]">
                <Image src={s.src} alt={s.name} fill className="object-cover" sizes="(min-width: 768px) 24vw, 78vw" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider from="#ffd750" to="#f5e3cd" height="8vw" className="-mt-[1px]" />
    </>
  );
}
