'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WaveDivider from '@/components/WaveDivider'
import RevealWords from '@/components/RevealWords'

export default function MenuHero() {
  return (
    <>
      {/* dark photo hero */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        <Image
          src="/img-webp/cheesyBurger.webp"
          alt="ORAZEN signature burger"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        {/* spinning smiley sticker */}
        <motion.div
          initial={{ scale: 0, rotate: -40 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
          className="absolute left-[16vw] top-[14vh] z-10 flex h-[5vw] w-[5vw] items-center justify-center rounded-full bg-mustard text-[2.4vw] max-md:hidden"
        >
          🍔
        </motion.div>
      </section>

      <WaveDivider from="transparent" to="#f5e3cd" height="9vw" className="relative z-10 -mt-[8vw]" />

      {/* heading */}
      <section className="relative bg-beige px-[3vw] pb-[2vw] pt-[2vw] text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block -rotate-3 rounded-full bg-mustard px-[1.4vw] py-[.4vw] font-modak text-[2vw] uppercase leading-none text-red max-md:text-[5vw]"
        >
          The Best
        </motion.p>
        <RevealWords
          as="h1"
          text="Our Finest Burger Picks"
          className="mx-auto mt-[1vw] w-[80%] font-mouse-memoirs text-[12vw] uppercase leading-[.78] text-red text-stroke-180 max-md:w-full max-md:text-[15vw]"
          stagger={0.07}
        />
      </section>
    </>
  )
}
