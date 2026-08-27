import { useEffect, useRef } from 'react'

interface Options {
  lerp?: number
}

/**
 * Smooth pointer tracking via CSS variables on the root element.
 * Sets --mx/--my (-1 to 1) and --cx/--cy (percentage) for parallax layers.
 * Disabled for reduced motion, coarse pointers, and hidden documents.
 */
export function usePointerTracking<T extends HTMLElement>(options: Options = {}) {
  const { lerp = 0.08 } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerQuery = window.matchMedia('(pointer: fine)')

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let raf = 0
    let running = false

    const canTrack = () =>
      !motionQuery.matches && pointerQuery.matches && !document.hidden

    const setVars = (x: number, y: number) => {
      root.style.setProperty('--mx', x.toFixed(4))
      root.style.setProperty('--my', y.toFixed(4))
      root.style.setProperty('--cx', `${((x + 1) / 2) * 100}%`)
      root.style.setProperty('--cy', `${((y + 1) / 2) * 100}%`)
    }

    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      running = false
    }

    const tick = () => {
      currentX += (targetX - currentX) * lerp
      currentY += (targetY - currentY) * lerp

      if (Math.abs(targetX - currentX) < 0.001 && Math.abs(targetY - currentY) < 0.001) {
        currentX = targetX
        currentY = targetY
        setVars(currentX, currentY)
        stop()
        return
      }

      setVars(currentX, currentY)
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    const onMove = (event: PointerEvent) => {
      if (!canTrack()) return
      const rect = root.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
      targetX = Math.max(-1, Math.min(1, x))
      targetY = Math.max(-1, Math.min(1, y))
      start()
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
      start()
    }

    const onVisibility = () => {
      if (!canTrack()) {
        targetX = 0
        targetY = 0
        start()
      }
    }

    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    motionQuery.addEventListener('change', onVisibility)
    pointerQuery.addEventListener('change', onVisibility)

    return () => {
      stop()
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      motionQuery.removeEventListener('change', onVisibility)
      pointerQuery.removeEventListener('change', onVisibility)
    }
  }, [lerp])

  return ref
}
