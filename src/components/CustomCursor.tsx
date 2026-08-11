'use client'
import { useEffect, useRef } from 'react'

/**
 * Custom cursor: a small red dot + a lagging outlined ring that grows on
 * hover over interactive elements. Body has cursor:none.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    let raf = 0
    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x - 18}px, ${ring.y - 18}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    const grow = () => ringRef.current?.classList.add('cursor-ring--big')
    const shrink = () => ringRef.current?.classList.remove('cursor-ring--big')

    document.addEventListener('mousemove', onMove)
    const bind = () => {
      document.querySelectorAll('a,button,[data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    }
    bind()
    const mo = new MutationObserver(bind)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <style>{`
        .cursor-dot {
          position: fixed; top: 0; left: 0; width: 8px; height: 8px;
          background: #f91814; border-radius: 50%; pointer-events: none;
          z-index: 99999;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; width: 36px; height: 36px;
          border: 2px solid rgba(249,24,20,0.6); border-radius: 50%;
          pointer-events: none; z-index: 99998;
          transition: width .25s ease, height .25s ease, border-color .25s ease, background .25s ease;
        }
        .cursor-ring--big {
          width: 64px; height: 64px;
          margin-left: -14px; margin-top: -14px;
          background: rgba(249,24,20,0.12);
          border-color: rgba(249,24,20,0.9);
        }
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
    </>
  )
}
