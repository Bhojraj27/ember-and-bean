import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '../lib/cn'

interface MagneticProps {
  children: ReactNode
  strength?: number
  className?: string
}

export default function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerQuery = window.matchMedia('(pointer: fine)')

    const reset = () => {
      el.style.transform = 'translate3d(0, 0, 0)'
    }

    const onMove = (event: PointerEvent) => {
      if (motionQuery.matches || !pointerQuery.matches) return
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - rect.left - rect.width / 2) * strength
      const y = (event.clientY - rect.top - rect.height / 2) * strength
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)
    motionQuery.addEventListener('change', reset)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', reset)
      motionQuery.removeEventListener('change', reset)
    }
  }, [strength])

  return (
    <div
      ref={ref}
      className={cn('inline-flex will-change-transform', className)}
      style={{ transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {children}
    </div>
  )
}
