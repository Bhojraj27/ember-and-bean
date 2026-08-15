import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '../data/gallery'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

interface LightboxProps {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index]
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useLockBodyScroll(true)

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, goPrev, goNext])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-md sm:p-8"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
        touchStartY.current = event.touches[0]?.clientY ?? null
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null || touchStartY.current === null) return
        const dx = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current
        const dy = (event.changedTouches[0]?.clientY ?? 0) - touchStartY.current
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) goNext()
          else goPrev()
        }
        touchStartX.current = null
        touchStartY.current = null
      }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-warmwhite backdrop-blur-md transition-colors hover:bg-caramel sm:right-6 sm:top-6"
      >
        <X className="size-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          goPrev()
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-warmwhite backdrop-blur-md transition-colors hover:bg-caramel sm:left-6"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          goNext()
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-warmwhite backdrop-blur-md transition-colors hover:bg-caramel sm:right-6"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <figure
        className="max-h-full max-w-4xl animate-fade-up"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[74vh] w-full rounded-xl object-contain shadow-2xl"
        />
        <figcaption className="mt-4 flex items-center justify-between text-sm text-warmwhite/80">
          <span className="font-medium">{item.caption}</span>
          <span className="tabular-nums text-warmwhite/50">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
