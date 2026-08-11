'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ingredients } from '@/lib/data'
import RevealWords from '@/components/RevealWords'

export default function IngredientsSection() {
  return (
    <section className="relative overflow-hidden bg-beige px-[3vw] pb-[6vw] pt-[2vw]">
      <div className="mx-auto max-w-[1500px]">
        {ingredients.map((item, i) => {
          const flip = i % 2 === 1
          return (
            <div
              key={item.id}
              className={`flex items-center gap-[3vw] border-b border-black/15 py-[3vw] ${flip ? 'flex-row-reverse' : ''} max-md:flex-col max-md:gap-[4vw]`}
            >
              {/* image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: flip ? 12 : -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: flip ? 8 : -8 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, scale: 1.06 }}
                className="w-[18vw] shrink-0 max-md:w-[40vw]"
              >
                <Image src={item.image} alt={item.name} width={400} height={400} className="h-auto w-full" />
              </motion.div>

              {/* text */}
              <div className={`flex-1 ${flip ? 'text-right' : 'text-left'} max-md:text-center`}>
                <span className="font-modak text-[2vw] text-mustard-dark max-md:text-[6vw]">{item.number}</span>
                <RevealWords
                  as="h3"
                  text={item.name}
                  className="font-mouse-memoirs text-[7vw] uppercase leading-[.85] text-red max-md:text-[12vw]"
                  stagger={0.05}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`mt-[1vw] font-mouse-memoirs text-black/70 text40 max-md:mx-auto ${flip ? 'ml-auto' : ''} w-[36vw] max-md:w-[90%]`}
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
