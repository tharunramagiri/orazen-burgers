'use client'

/**
 * Shallow single-wave section transition with a gentle, continuous flow.
 * Background is the `from` colour; a `to`-coloured shape fills the bottom and
 * its top edge is a shallow wave (sides at `edge`, dipping toward the centre).
 *
 * When `animated`, the dip slowly sways left↔right (SMIL path morph) for a
 * living "wave" effect. viewBox 0 0 100 100 + preserveAspectRatio="none" so the
 * curve stretches to the band width.
 */
export default function WaveDivider({
  from = '#f5e3cd',
  to = '#f91814',
  height = '10vw',
  edge = 40,
  center = 72,
  animated = true,
  duration = 8,
  className = '',
}: {
  from?: string
  to?: string
  height?: string
  edge?: number
  center?: number
  animated?: boolean
  duration?: number
  className?: string
}) {
  // path with the dip control point at horizontal position `cx`
  const path = (cx: number) => `M 0 100 L 100 100 L 100 ${edge} Q ${cx} ${center} 0 ${edge} Z`
  const base = path(50)

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ height, background: from, lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d={base} fill={to}>
          {animated && (
            <animate
              attributeName="d"
              dur={`${duration}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
              values={`${path(28)};${path(50)};${path(72)};${path(50)};${path(28)}`}
            />
          )}
        </path>
      </svg>
    </div>
  )
}
