import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUp({
  end,
  suffix = '',
  duration = 1600,
  className,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return
    }

    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
