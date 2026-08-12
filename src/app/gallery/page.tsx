'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLang } from '@/components/LanguageProvider';

const galleryImages = [
  { src: '/img-webp/about-1.webp', caption: 'Fresh smashed patty' },
  { src: '/img-webp/about-2.webp', caption: 'Melted cheese perfection' },
  { src: '/img-webp/about-3.webp', caption: 'Our cozy restaurant' },
  { src: '/img-webp/burgerwithhands.webp', caption: 'Double smash burger' },
  { src: '/img-webp/cheesyBurger.webp', caption: 'The Crazy Special' },
  { src: '/img-webp/cta.webp', caption: 'Date night at Crazy Smash' },
  { src: '/img-webp/burgerH.webp', caption: 'Smashed hot & fresh' },
  { src: '/img-webp/fries.webp', caption: 'Crispy fries' },
  { src: '/img-webp/lettuce.webp', caption: 'Fresh ingredients daily' },
  { src: '/img-webp/tomato.webp', caption: 'Sun-ripened tomatoes' },
  { src: '/img-webp/meat.webp', caption: 'Prime artisan beef' },
  { src: '/img-webp/cheese.webp', caption: 'Premium cheddar' },
];

export default function GalleryPage() {
  const { t } = useLang();

  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="relative overflow-hidden bg-red px-[3vw] pb-[3vw] pt-[12vw] max-md:pt-[24vw]">
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.7 }}
          className="absolute left-[3vw] top-[8vw] w-[10vw] max-md:w-[24vw]"
        >
          <Image src="/img/burger-boy.png" alt="" width={400} height={500} className="h-auto w-full" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-[70%] text-center font-body text-[8vw] uppercase leading-[.8] text-beige max-md:w-full max-md:text-[12vw]"
          style={{ WebkitTextStroke: '0.5vw var(--color-white)', paintOrder: 'stroke fill' }}
        >
          {t('gallery')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center font-body text-[1.5vw] text-beige/80 max-md:text-[4vw]"
        >
          {t('ourCreations')}
        </motion.p>
      </section>

      {/* Gallery Grid */}
      <section className="px-[3vw] py-[6vw] max-w-[1400px] mx-auto">
        <div className="columns-3 gap-[1.5vw] max-md:columns-2 max-sm:columns-1">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="mb-[1.5vw] break-inside-avoid overflow-hidden rounded-[1vw] border-2 border-ink/10 bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="font-body text-sm text-white">{img.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
