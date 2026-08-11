'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealWords from '@/components/RevealWords'
import OrderButton from '@/components/OrderButton'

export default function FeelTheChange() {
  return (
    <section className="relative overflow-hidden bg-beige px-[3vw] pt-[5vw] pb-[3vw] max-md:pb-[8vw]">
      <div className="relative h-[60vw] max-md:h-auto">
        {/* Left: heading + body + button */}
        <div className="absolute left-0 top-[2vw] z-30 w-[40vw] max-md:static max-md:w-full">
          <RevealWords
            as="h2"
            text="feel the change"
            className="w-[40vw] font-mouse-memoirs text-[15vw] uppercase leading-[.8] text-red text-stroke-small max-md:w-full max-md:text-[18vw]"
            stagger={0.08}
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-[1.5vw] w-[30vw] font-mouse-memoirs leading-[1.1] text-black text40 max-md:w-[90%]"
          >
            Smashed for the bold, built for the hungry. Dive into a legendary craft experience
            where every crispy edge and juicy layer rules.
          </motion.p>
          <div className="mt-[2.5vw]">
            <OrderButton />
          </div>
        </div>

        {/* Right photo (cta.webp, ~43vw x 60vw) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-[2vw] z-0 h-[58vw] w-[43vw] overflow-hidden rounded-[1vw] max-md:relative max-md:mt-[6vw] max-md:h-[90vw] max-md:w-full"
        >
          <Image src="/img-webp/cta.webp" alt="Eating an ORAZEN burger" fill className="object-cover" sizes="43vw" />
        </motion.div>

        {/* Center illustration (burger-boy) — large, full height, head near top */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 3, scale: 1.03 }}
          className="absolute bottom-0 left-[26%] z-20 w-[47vw] max-md:left-1/2 max-md:w-[68vw] max-md:-translate-x-1/2"
        >
          <Image src="/img/burger-boy.png" alt="ORAZEN burger boy" width={1024} height={1056} className="h-auto w-full drop-shadow-xl" />
        </motion.div>
      </div>
    </section>
  )
}
