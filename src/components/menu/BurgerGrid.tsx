'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { burgers } from '@/lib/data'

const spiceColor: Record<string, string> = {
  Hot: 'bg-red text-beige',
  Medium: 'bg-mustard-dark text-white',
  Mild: 'bg-green text-white',
}

export default function BurgerGrid() {
  return (
    <section className="relative bg-beige px-[3vw] pb-[6vw] pt-[3vw]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-3 gap-[2vw] max-md:grid-cols-1">
        {burgers.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-[1.4vw] border-[.4vw] border-white bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] max-md:rounded-[4vw]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={b.image}
                alt={b.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <span
                className={`absolute right-[1vw] top-[1vw] rounded-full px-[1.2vw] py-[.3vw] font-mouse-memoirs text-[1vw] uppercase tracking-[.1em] ${spiceColor[b.spice]} max-md:text-[3vw]`}
              >
                {b.spice}
              </span>
            </div>

            <div className="bg-beige p-[1.6vw] max-md:p-[5vw]">
              <div className="flex items-baseline justify-between">
                <h3 className="font-modak text-[2.2vw] uppercase leading-none text-red max-md:text-[7vw]">
                  {b.name}
                </h3>
                <span className="font-modak text-[2vw] text-black max-md:text-[6vw]">${b.price}</span>
              </div>
              <p className="mt-[.6vw] font-mouse-memoirs text-[1.05vw] leading-[1.15] text-black/70 max-md:text-[3.5vw]">
                {b.description}
              </p>
              <div className="mt-[1vw] flex gap-[1.2vw] font-mouse-memoirs text-[.95vw] uppercase text-black/60 max-md:text-[3vw]">
                <span><strong className="text-black">{b.calories}</strong> cal</span>
                <span><strong className="text-black">{b.protein}g</strong> protein</span>
                <span><strong className="text-black">{b.prepTime}</strong></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
