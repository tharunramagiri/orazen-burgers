'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WaveDivider from '@/components/WaveDivider'
import RevealWords from '@/components/RevealWords'

export default function SpicesHero() {
  return (
    <>
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        <Image
          src="/img-webp/spices.webp"
          alt="Fresh Crazy Smash ingredients"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <WaveDivider from="transparent" to="#f5e3cd" height="9vw" className="relative z-10 -mt-[8vw]" />

      <section className="relative bg-beige px-[3vw] pb-[1vw] pt-[2vw] text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block -rotate-3 font-modak text-[2.6vw] uppercase leading-none text-red max-md:text-[6vw]"
        >
          From farm to bite
        </motion.p>
        <RevealWords
          as="h1"
          text="What's Inside"
          className="mx-auto mt-[.5vw] font-mouse-memoirs text-[15vw] uppercase leading-[.78] text-red text-stroke-180 max-md:text-[18vw]"
          stagger={0.08}
        />
      </section>
    </>
  )
}
