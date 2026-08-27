import type { ReactNode } from 'react'
import { productStudio } from '../lib/assets'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  image?: string
  children?: ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image = productStudio,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[58svh] items-center justify-center overflow-hidden pt-16">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-[70%_center]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120a07]/88 via-[#120a07]/62 to-[#120a07]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120a07]/80 via-transparent to-[#120a07]/35" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 pb-16 pt-16 text-center sm:px-8">
        <p className="animate-fade-up text-[0.68rem] font-medium uppercase tracking-[0.32em] text-caramel">
          {eyebrow}
        </p>
        <h1
          className="mt-4 animate-fade-up font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-warmwhite text-balance sm:text-5xl md:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mx-auto mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-warmwhite/82 sm:text-lg"
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
