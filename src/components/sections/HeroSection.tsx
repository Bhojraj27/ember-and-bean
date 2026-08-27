import { useEffect, type CSSProperties } from 'react'
import { ArrowDown } from 'lucide-react'
import { site } from '../../data/site'
import { productLatte, productStudio } from '../../lib/assets'
import { usePointerTracking } from '../../hooks/usePointerTracking'
import Button from '../Button'
import Magnetic from '../Magnetic'

const headline = ['Coffee', 'worth', 'slowing', 'down', 'for.']

const productNotes = [
  { label: 'Origin', value: 'Sidama' },
  { label: 'Roast', value: 'Medium' },
  { label: 'Notes', value: 'Cinnamon' },
  { label: 'Pour', value: '₹180' },
]

export default function HeroSection() {
  const heroRef = usePointerTracking<HTMLElement>({ lerp: 0.08 })

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('hero-offscreen', !entry.isIntersecting)
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [heroRef])

  return (
    <section
      ref={heroRef}
      className="hero-track relative flex min-h-[100svh] items-center overflow-hidden bg-[#120a07]"
    >
      <div
        className="hero-parallax absolute inset-[-10%] will-change-transform"
        style={{ '--d': 0.16 } as CSSProperties}
      >
        <img
          src={productStudio}
          alt=""
          className="size-full scale-[1.08] object-cover object-[72%_center]"
          loading="eager"
          fetchPriority="high"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#120a07] via-[#120a07]/78 to-[#120a07]/10 lg:via-[#120a07]/55 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120a07]/85 via-transparent to-[#120a07]/45" />
      <div className="hero-spotlight absolute inset-0" aria-hidden="true" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-4 lg:pt-20">
        <div className="hero-parallax max-w-xl" style={{ '--d': 0.06 } as CSSProperties}>
          <p className="animate-fade-up text-[0.68rem] font-medium uppercase tracking-[0.34em] text-caramel">
            {site.established} · Artisan Coffee House
          </p>

          <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-warmwhite text-balance sm:text-6xl lg:text-[4.75rem]">
            {headline.map((word, index) => (
              <span
                key={word}
                className="animate-fade-up mr-[0.28em] inline-block last:mr-0"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-md animate-fade-up text-base leading-relaxed text-warmwhite/88 sm:text-lg"
            style={{ animationDelay: '480ms' }}
          >
            A studio-roasted signature pour. Small-batch beans, handcrafted drinks, and a cup built to be looked at — then lingered over.
          </p>

          <dl
            className="mt-8 grid max-w-lg animate-fade-up grid-cols-2 gap-x-8 gap-y-4 border-y border-white/10 py-5 sm:grid-cols-4"
            style={{ animationDelay: '520ms' }}
          >
            {productNotes.map((note) => (
              <div key={note.label}>
                <dt className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-caramel">{note.label}</dt>
                <dd className="mt-1 font-serif text-sm text-warmwhite sm:text-base">{note.value}</dd>
              </div>
            ))}
          </dl>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '600ms' }}
          >
            <Magnetic strength={0.28}>
              <Button to="/menu" size="lg" arrow>
                Explore Menu
              </Button>
            </Magnetic>
            <Button to="/reservations" size="lg" variant="light" arrow>
              Reserve a Table
            </Button>
          </div>
        </div>

        <div
          className="hero-parallax relative mx-auto flex w-full max-w-xl items-center justify-center pointer-coarse:animate-hero-float lg:max-w-none"
          style={{ '--d': 0.42 } as CSSProperties}
        >
          <div className="hero-tilt relative w-full" style={{ transformStyle: 'preserve-3d' }}>
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caramel/25 blur-3xl"
              aria-hidden="true"
            />
            <img
              src={productLatte}
              alt="Studio 3D render of Ember & Bean caramel cinnamon latte"
              className="hero-product relative z-10 mx-auto w-full max-w-[36rem] select-none"
              loading="eager"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div
        className="hero-cursor pointer-events-none absolute z-20 hidden size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-caramel/80 pointer-fine:block"
        aria-hidden="true"
      />

      <a
        href="#trust-strip"
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-warmwhite/60 transition-colors hover:text-warmwhite lg:flex"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em]">Scroll</span>
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
