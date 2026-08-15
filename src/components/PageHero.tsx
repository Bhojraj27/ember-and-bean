import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  image: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, image, children }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62svh] items-center justify-center overflow-hidden pt-16">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/55 to-espresso/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 pb-14 pt-14 text-center sm:px-8">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-caramel">
          {eyebrow}
        </p>
        <h1
          className="mt-4 animate-fade-up font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-warmwhite text-balance sm:text-5xl md:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mx-auto mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-warmwhite/80 sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
