'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  value: string
  className?: string
  durationMs?: number
}

/**
 * Animates the leading numeric part of a value string (e.g. "100K+", "97%", "3")
 * from 0 up to its target when it scrolls into view. Non-numeric values render
 * as-is.
 */
export function CountUp({ value, className, durationMs = 1400 }: CountUpProps) {
  const match = value.match(/^(\d[\d,.]*)(.*)$/)
  const target = match ? Number(match[1].replace(/,/g, '')) : null
  const suffix = match ? match[2] : ''
  const decimals = match && match[1].includes('.') ? 1 : 0

  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(target === null ? value : '0')

  useEffect(() => {
    if (target === null) return
    const node = ref.current
    if (!node) return

    let raf = 0
    let started = false

    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        const current = target * eased
        setDisplay(
          current.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix,
        )
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, suffix, decimals, durationMs])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
