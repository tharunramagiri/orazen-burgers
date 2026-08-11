'use client'
import { motion } from 'framer-motion'
import RevealWords from '@/components/RevealWords'

export default function PhilosophySection() {
  return (
    <section className="relative bg-beige px-[3vw] py-[6vw] text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-[1.5vw] inline-block -rotate-2 font-modak text-[2.2vw] uppercase leading-none text-red max-md:text-[5.5vw]"
      >
        Simple Things Done Right
      </motion.p>

      <RevealWords
        as="h2"
        text="We don't have a long list of ingredients"
        className="mx-auto w-[80%] font-mouse-memoirs text-[6vw] uppercase leading-[.85] text-black max-md:w-full max-md:text-[10vw]"
        stagger={0.05}
      />

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-[2vw] w-[50%] font-mouse-memoirs text-black/70 text40 max-md:w-[90%]"
      >
        We have a short one — and we&apos;re obsessive about every single item on it.
      </motion.p>
    </section>
  )
}
