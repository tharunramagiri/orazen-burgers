'use client'
import { useRef, useEffect, ElementType } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  text: string
  as?: ElementType
  className?: string
  /** split per word (default) or per character */
  by?: 'word' | 'char'
  stagger?: number
  duration?: number
  y?: number
  start?: string
}

/**
 * Scroll-triggered reveal. Each word/char is wrapped in
 * `inline-block will-change-transform` spans (matching the live site)
 * and animated up from below with a stagger.
 */
export default function RevealWords({
  text,
  as: Tag = 'h2',
  className = '',
  by = 'word',
  stagger = 0.08,
  duration = 0.9,
  y = 120,
  start = 'top 85%',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll<HTMLElement>('[data-reveal]')
    gsap.set(targets, { yPercent: 110, opacity: 0 })
    const ctx = gsap.context(() => {
      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration,
        stagger,
        ease: 'power4.out',
        scrollTrigger: { trigger: el, start },
      })
    }, el)
    return () => ctx.revert()
  }, [duration, stagger, start])

  const units = by === 'word' ? text.split(' ') : text.split('')

  return (
    <Tag ref={ref as never} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {units.map((u, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <span data-reveal className="inline-block will-change-transform">
              {u}
              {by === 'word' && i < units.length - 1 ? ' ' : ''}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  )
}
