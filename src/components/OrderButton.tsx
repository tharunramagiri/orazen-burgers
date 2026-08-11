'use client'
import Link from 'next/link'

/**
 * "ORDER NOW" blob button — white bold uppercase Mouse Memoirs text on an
 * organic red blob. Hover scales up slightly (matching hover:scale-105).
 */
export default function OrderButton({
  href = '/menu',
  label = 'Order Now',
  className = '',
}: {
  href?: string
  label?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-block w-fit transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <span
        className="relative z-10 block bg-red px-[4vw] py-[1.4vw] font-mouse-memoirs text-[1.8vw] font-bold uppercase leading-none text-white max-md:px-[10vw] max-md:py-[3.5vw] max-md:text-[4.5vw]"
        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
      >
        {label}
      </span>
    </Link>
  )
}
