'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealWords from '@/components/RevealWords'
import WaveDivider from '@/components/WaveDivider'
import GooglyEyes from '@/components/GooglyEyes'

export default function ExperienceSection() {
  return (
    <>
      {/* beige -> red layered wave */}
      <WaveDivider from="#f5e3cd" to="#f91814" height="8vw" className="-mb-[1px]" />

      <section className="relative overflow-hidden bg-red px-[3vw] pb-0 pt-[4vw]">
        {/* flanking mascot stickers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="absolute left-[3vw] top-[3vw] z-20 w-[9vw] max-md:w-[18vw]"
        >
          <Image src="/img/burger-boy.png" alt="" width={300} height={360} className="h-auto w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
          className="absolute right-[3vw] top-[3vw] z-20 w-[8vw] max-md:w-[16vw]"
        >
          <Image src="/img/burgerselfie.png" alt="" width={300} height={400} className="h-auto w-full" />
        </motion.div>

        {/* label */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-[1vw] block w-full -rotate-2 text-center font-modak text-[2.6vw] uppercase leading-none text-red text-stroke-180 max-md:text-[6vw]"
        >
          Experience
        </motion.p>

        {/* Heading — two lines, centered */}
        <RevealWords
          as="h2"
          text="food that"
          className="text-center font-mouse-memoirs text-[15vw] uppercase leading-[.75] text-beige max-md:text-[16vw]"
          stagger={0.08}
        />
        <RevealWords
          as="h2"
          text="feels good"
          className="-mt-[2vw] text-center font-mouse-memoirs text-[15vw] uppercase leading-[.75] text-beige max-md:text-[16vw]"
          stagger={0.08}
        />

        {/* Burger with hands + stat labels */}
        <div className="relative mt-[2vw] flex items-end justify-center">
          {/* left stat */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-[8vw] left-[4vw] z-10 w-[14vw] font-mouse-memoirs uppercase leading-[1.1] text-beige text40 max-md:static max-md:w-1/2"
          >
            450 kcal High Protein Fresh Ingredients
          </motion.p>

          {/* right stat */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-[8vw] right-[4vw] z-10 w-[14vw] text-right font-mouse-memoirs uppercase leading-[1.1] text-beige text40 max-md:static max-md:w-1/2"
          >
            100% Organic Zero Guilt True Taste
          </motion.p>

          {/* BOLD FLAVOUR sticker — bottom-right of the burger */}
          <p className="absolute bottom-[10vw] right-[12vw] z-30 w-[10vw] rotate-[12deg] text-center font-modak text-[2.4vw] uppercase leading-none text-mustard-dark text-stroke-180-mustard max-md:hidden">
            Bold Flavour
          </p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[78vw] max-md:w-[95vw]"
          >
            <Image
              src="/img-webp/burgerwithhands.webp"
              alt="ORAZEN burger with hands"
              width={1200}
              height={900}
              className="h-auto w-full select-none"
              priority
            />
            {/* cursor-tracking eyes on the bun */}
            <GooglyEyes />
          </motion.div>
        </div>
      </section>

      {/* full-bleed burger band — measured: photo occupies ~1090px (≈76vw), cover-center crop */}
      <section className="relative h-[76vw] w-full overflow-hidden max-md:h-[100vw]">
        <Image
          src="/img-webp/cheesyBurger.webp"
          alt="ORAZEN cheesy burger"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>
    </>
  )
}
