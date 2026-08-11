'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import WaveDivider from '@/components/WaveDivider'
import RevealWords from '@/components/RevealWords'

export default function ContactForm() {
  const [form, setForm] = useState({ email: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-red px-[3vw] pb-[3vw] pt-[10vw] max-md:pt-[24vw]">
        {/* mascots */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.7 }}
          className="absolute left-[3vw] top-[6vw] w-[12vw] max-md:w-[28vw]"
        >
          <Image src="/img/burger-boy.png" alt="" width={400} height={500} className="h-auto w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute right-[3vw] top-[6vw] w-[11vw] max-md:w-[26vw]"
        >
          <Image src="/img/burgerselfie.png" alt="" width={400} height={600} className="h-auto w-full" />
        </motion.div>

        <RevealWords
          as="h1"
          text="Got a craving? Let's talk"
          className="mx-auto w-[70%] text-center font-mouse-memoirs text-[8vw] uppercase leading-[.8] text-beige max-md:w-full max-md:text-[12vw]"
          stagger={0.06}
        />

        {/* form */}
        <div className="mx-auto mt-[3vw] w-[44vw] max-md:w-[88vw]">
          {sent ? (
            <p className="text-center font-modak text-[4vw] uppercase text-beige max-md:text-[10vw]">Feel It — see you soon!</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              className="flex flex-col gap-[2vw] max-md:gap-[5vw]"
            >
              <input
                type="email" required placeholder="Your best email…"
                value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full border-b-2 border-beige/50 bg-transparent pb-[.6vw] font-mouse-memoirs text-[1.4vw] uppercase tracking-[.05em] text-beige placeholder:text-beige/60 outline-none transition-colors focus:border-beige max-md:text-[4vw]"
              />
              <textarea
                required rows={4} placeholder="Tell us your craving…"
                value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="w-full resize-none border-b-2 border-beige/50 bg-transparent pb-[.6vw] font-mouse-memoirs text-[1.4vw] uppercase tracking-[.05em] text-beige placeholder:text-beige/60 outline-none transition-colors focus:border-beige max-md:text-[4vw]"
              />
              <button
                type="submit"
                className="mx-auto mt-[1vw] rounded-full bg-mustard px-[4vw] py-[1vw] font-mouse-memoirs text-[1.4vw] font-bold uppercase tracking-[.1em] text-black transition-transform duration-300 hover:scale-105 max-md:px-[10vw] max-md:py-[3vw] max-md:text-[4vw]"
              >
                Send Craving
              </button>
            </form>
          )}
        </div>
      </section>

      <WaveDivider from="#f91814" to="#f5e3cd" height="8vw" className="-mt-[1px]" />
    </>
  )
}
