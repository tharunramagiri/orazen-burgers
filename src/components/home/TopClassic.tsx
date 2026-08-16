'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RevealWords from '@/components/RevealWords'
import OrderButton from '@/components/OrderButton'

const polaroids = [
  { src: '/img/real/customer-eating-burger.jpg', rot: '-4deg', top: '3vw', h: '27vw' },
  { src: '/img/real/fried-chicken-bites-drink.jpg', rot: '2deg', top: '-1vw', h: '30vw' },
  { src: '/img/real/burger-cola-tray.jpg', rot: '6deg', top: '4vw', h: '27vw' },
]

export default function TopClassicSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative bg-beige px-[3vw] pb-[6vw] pt-[4vw] text-center">
      {/* Crazy Smash — section header (moved out of the hero) */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto text-center font-modak text-[15vw] uppercase leading-[.8] text-mustard-dark max-md:text-[24vw]"
      >
        Crazy Smash
      </motion.p>

      {/* label */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto -mt-[1.5vw] mb-[1vw] inline-block -rotate-3 font-modak text-[2.8vw] uppercase leading-none text-red max-md:text-[6vw]"
      >
        Top Classic
      </motion.p>

      {/* Heading */}
      <RevealWords
        as="h2"
        text="juicy cheesy fully Loaded"
        className="mx-auto w-[70%] font-mouse-memoirs text-[15vw] uppercase leading-[.85] text-red text-stroke-180 max-md:w-full max-md:text-[18vw] max-md:leading-[.85]"
        stagger={0.09}
      />

      {/* Body */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-[2vw] w-[45%] font-mouse-memoirs text-black text40 max-md:w-[90%]"
      >
        Crazy Smash is back and bolder than ever. Honoring our rich roots, we bring the ultimate
        smashed experience — fully loaded, hot, and crafted fresh.
      </motion.p>

      {/* CTA */}
      <div className="mt-[2.5vw] flex justify-center">
        <OrderButton />
      </div>

      {/* Polaroids */}
      <div ref={ref} className="relative mt-[5vw] flex items-start justify-center gap-[2vw] max-md:flex-col max-md:items-center">
        {/* burger-selfie mascot sticker, top-left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: -6 } : {}}
          transition={{ duration: 0.6, type: 'spring' }}
          className="pointer-events-none absolute -top-[4vw] left-[2vw] z-20 w-[13vw] max-md:hidden"
        >
          <Image src="/img/burgerselfie.png" alt="" width={360} height={460} className="h-auto w-full" />
        </motion.div>

        {polaroids.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 80, rotate: 0 }}
            animate={inView ? { opacity: 1, y: 0, rotate: parseFloat(p.rot) } : {}}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
            style={{ marginTop: p.top, height: p.h }}
            className="relative w-[22vw] overflow-hidden rounded-[1vw] border-[.6vw] border-white bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] max-md:!h-[70vw] max-md:w-[80vw]"
          >
            <Image src={p.src} alt="Crazy Smash burger" fill className="object-cover" sizes="22vw" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
