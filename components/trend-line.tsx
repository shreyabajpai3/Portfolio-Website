'use client'

import { useId } from 'react'

type TrendLineProps = {
  data: number[]
  width?: number
  height?: number
  className?: string
  strokeWidth?: number
  showArea?: boolean
  showDots?: boolean
  animate?: boolean
  ariaLabel?: string
}

/**
 * A lightweight SVG trend line / sparkline. The signature motif of the site —
 * rendered in the single pastel periwinkle tone with an optional soft area fill.
 */
export function TrendLine({
  data,
  width = 320,
  height = 80,
  className,
  strokeWidth = 2,
  showArea = true,
  showDots = false,
  animate = true,
  ariaLabel,
}: TrendLineProps) {
  const id = useId()
  const safeData = Array.isArray(data) && data.length > 0 ? data : [0, 0]
  const max = Math.max(...safeData)
  const min = Math.min(...safeData)
  const range = max - min || 1
  const padY = strokeWidth + 2

  const points = safeData.map((value, i) => {
    const x = (i / Math.max(safeData.length - 1, 1)) * width
    const y =
      height - padY - ((value - min) / range) * (height - padY * 2)
    return [x, y] as const
  })

  const linePath = points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(' ')

  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`

  // approximate path length for the draw animation
  let length = 0
  for (let i = 1; i < points.length; i++) {
    const dx = points[i][0] - points[i - 1][0]
    const dy = points[i][1] - points[i - 1][1]
    length += Math.sqrt(dx * dx + dy * dy)
  }

  const last = points[points.length - 1]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      role="img"
      aria-label={ariaLabel ?? 'Data trend line'}
    >
      <defs>
        <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--line)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--line)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {showArea && (
        <path d={areaPath} fill={`url(#area-${id})`} stroke="none" />
      )}

      <path
        d={linePath}
        fill="none"
        stroke="var(--line)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animate ? 'draw-line' : undefined}
        style={animate ? ({ '--len': length } as React.CSSProperties) : undefined}
        vectorEffect="non-scaling-stroke"
      />

      {showDots &&
        points.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={strokeWidth}
            fill="var(--background)"
            stroke="var(--line)"
            strokeWidth={strokeWidth * 0.75}
            vectorEffect="non-scaling-stroke"
          />
        ))}

      {last && (
        <circle
          cx={last[0]}
          cy={last[1]}
          r={strokeWidth + 1.5}
          fill="var(--line)"
          className="pulse-dot"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  )
}
