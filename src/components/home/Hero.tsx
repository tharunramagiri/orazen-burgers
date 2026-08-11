'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const burgerY = useTransform(scrollYProgress, [0, 1], ['0vw', '-10vw'])

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden pt-[8vw] max-md:h-[170vw] max-md:pt-[36vw]"
    >
      {/* faint eyebrow — top-right */}
      <p className="absolute right-[3vw] top-[8vw] z-30 font-mouse-memoirs text-[.9vw] uppercase tracking-[.2em] text-black/40 max-md:text-[3.5vw]">
        Built & redesigned by orazen.online
      </p>

      {/* THE BURGER — single full-width line, top */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-0 text-center font-mouse-memoirs text-[30vw] leading-[.8] text-red text-stroke-180 max-md:text-[26vw] max-md:leading-[.85]"
      >
        THE BURGER
      </motion.h1>

      {/* stickers */}
      <motion.p
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
        className="absolute left-[10%] top-[16%] z-20 text-center font-modak text-[2.8vw] leading-[.9] text-mustard-dark text-stroke-180 max-md:left-[2%] max-md:top-[24%] max-md:rotate-0 max-md:text-[6vw]"
      >
        SMASHED<br />FRESH
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -15 }}
        transition={{ duration: 0.5, delay: 0.75, type: 'spring' }}
        className="absolute right-[8%] top-[50%] z-20 text-center font-modak text-[2.8vw] leading-[.9] text-mustard-dark text-stroke-180 max-md:right-[2%] max-md:top-[40%] max-md:rotate-0 max-md:text-[6vw]"
      >
        BOLD<br />FLAVOR
      </motion.p>

      {/* hero burger photo — centered, overlapping the headline.
          Nested: outer = scroll parallax, middle = entrance, inner = slow float loop. */}
      <motion.div
        style={{ y: burgerY }}
        className="absolute left-1/2 top-[5vw] z-10 h-[60vh] w-fit -translate-x-1/2 max-md:top-[50vw] max-md:h-auto max-md:w-[80vw]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full max-md:h-auto"
        >
          <motion.div
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full will-change-transform max-md:h-auto"
          >
            <Image src="/img-webp/burgerH.webp" alt="ORAZEN burger" width={700} height={700} className="h-full w-auto select-none rounded-[1.5vw] max-md:h-auto max-md:w-full" priority />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* bottom paragraphs */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="absolute bottom-[3vw] left-[3vw] z-20 w-[23vw] font-mouse-memoirs leading-none text40 max-md:static max-md:mt-[4vw] max-md:w-full max-md:px-[5vw] max-md:text-center"
      >
        Smashed hot on the flat top, our prime patties lock in ultimate juiciness and flavor — a caramelized crust.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute bottom-[3vw] right-[3vw] z-20 w-[23vw] text-right font-mouse-memoirs leading-none text40 max-md:static max-md:mt-[2vw] max-md:w-full max-md:px-[5vw] max-md:text-center"
      >
        Topped with melted cheddar and our signature chili honey glaze, crafted fresh to satisfy your craving by orazen.online.
      </motion.p>
    </section>
  )
}
