"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import reelsData from "@/data/instagram-reels.json";

export default function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-beige px-[3vw] py-[6vw]">
      <div className="mb-[3vw] flex items-center justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block -rotate-3 font-modak text-[2.2vw] uppercase leading-none text-red max-md:text-[5vw]"
          >
            Follow Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-[.5vw] font-body text-[6vw] uppercase leading-[.85] text-ink max-md:text-[10vw]"
          >
            @ORAZEN
          </motion.h2>
        </div>

        <a
          href="https://instagram.com/orazenburgers"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-red px-[2vw] py-[.8vw] font-body text-[1.1vw] font-bold uppercase tracking-[.08em] text-white transition-transform hover:scale-105 sm:inline-block max-md:text-[3vw] max-md:px-[5vw] max-md:py-[2vw]"
        >
          Follow on Instagram ↗
        </a>
      </div>

      {/* Reels carousel */}
      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-[1vw] top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-[1vw] shadow-lg transition-transform hover:scale-110 sm:block"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute -right-[1vw] top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-[1vw] shadow-lg transition-transform hover:scale-110 sm:block"
        >
          →
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-[1.5vw] overflow-x-auto scrollbar-hide scroll-smooth px-[1vw]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reelsData.reels.map((reel, i) => (
            <motion.a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative shrink-0 w-[280px] sm:w-[320px] cursor-pointer overflow-hidden rounded-[1.5vw] border-2 border-ink/10 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={reel.image}
                  alt={reel.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="320px"
                />
                {/* Instagram icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <span className="text-4xl">📸</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-[1vw]">
                <p className="font-body text-[.9vw] leading-[1.2] text-ink/70 max-md:text-[3vw]">
                  {reel.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile follow button */}
      <div className="mt-[4vw] text-center sm:hidden">
        <a
          href="https://instagram.com/orazenburgers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-red px-[6vw] py-[3vw] font-body text-[4vw] font-bold uppercase tracking-[.08em] text-white"
        >
          Follow on Instagram ↗
        </a>
      </div>
    </section>
  );
}
