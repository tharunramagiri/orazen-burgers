"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <>
      {/* Dark hero image */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        <Image
          src="/img-webp/cheesyBurger.webp"
          alt="ORAZEN signature burger"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        {/* Spinning sticker */}
        <motion.div
          initial={{ scale: 0, rotate: -40 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="absolute left-[16vw] top-[14vh] z-10 flex h-[5vw] w-[5vw] items-center justify-center rounded-full bg-mustard text-[2.4vw] max-md:hidden"
        >
          🍔
        </motion.div>
      </section>
    </>
  );
}
