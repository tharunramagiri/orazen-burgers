'use client'
import { useEffect, useRef } from 'react'

/** A single eye whose pupil follows the cursor. */
function Eye({ className }: { className?: string }) {
  const eyeRef = useRef<HTMLDivElement>(null)
  const pupilRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const eye = eyeRef.current
      const pupil = pupilRef.current
      if (!eye || !pupil) return
      const r = eye.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const ang = Math.atan2(e.clientY - cy, e.clientX - cx)
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
      const max = r.width * 0.24
      const travel = Math.min(max, dist * 0.25)
      const dx = Math.cos(ang) * travel
      const dy = Math.sin(ang) * travel
      pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className={`absolute ${className}`}>
      {/* eyebrow */}
      <div className="absolute -top-[34%] left-1/2 h-[42%] w-[78%] -translate-x-1/2 rounded-t-full border-t-[0.35vw] border-black/80" />
      {/* eyeball */}
      <div
        ref={eyeRef}
        className="relative h-full w-full rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.25)]"
      >
        <div
          ref={pupilRef}
          className="absolute left-1/2 top-1/2 h-[40%] w-[40%] rounded-full bg-black"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>
    </div>
  )
}

/** Two cursor-tracking eyes positioned over the burger bun. */
export default function GooglyEyes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 max-md:hidden">
      <Eye className="left-[37%] top-[13%] h-[6vw] w-[6vw]" />
      <Eye className="left-[54%] top-[11%] h-[6vw] w-[6vw]" />
    </div>
  )
}
