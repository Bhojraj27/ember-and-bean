import { Coffee, Croissant, Leaf, Star, ArrowDown } from 'lucide-react'
import { imageUrl } from '../lib/images'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { featuredMenuItems } from '../data/menu'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import MenuCard from '../components/MenuCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FooterCta from '../components/sections/FooterCta'

const trustItems = [
  {
    icon: Coffee,
    title: '100% Arabica',
    subtitle: 'Freshly roasted beans',
  },
  {
    icon: Croissant,
    title: 'Fresh Daily',
    subtitle: 'Baked every morning',
  },
  {
    icon: Leaf,
    title: 'Local Ingredients',
    subtitle: 'Carefully sourced',
  },
  {
    icon: Star,
    title: `${site.rating} Rating`,
    subtitle: 'Loved by our guests',
  },
]

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={imageUrl('photo-1495474472287-4d71bcdd2085', 1920)}
        alt="A cup of coffee with cinnamon resting on a warm café table"
        className="absolute inset-0 size-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/75 via-espresso/45 to-espresso/85" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-8">
        <div className="max-w-2xl">
          <p
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-warmwhite/90 backdrop-blur-md"
            style={{ animationDelay: '0ms' }}
          >
            <span className="size-1.5 rounded-full bg-caramel" aria-hidden="true" />
            {site.established} · Artisan Coffee House
          </p>

          <h1
            className="mt-6 animate-fade-up font-serif text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-warmwhite text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            Coffee worth
            <br />
            slowing down for.
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-warmwhite/85 sm:text-lg"
            style={{ animationDelay: '200ms' }}
          >
            Small-batch roasted beans, handcrafted drinks, and warm moments served daily.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '300ms' }}
          >
            <Button to="/menu" size="lg" arrow>
              Explore Menu
            </Button>
            <Button to="/reservations" size="lg" variant="light" arrow>
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>

      <GlassCard className="absolute bottom-10 right-6 z-10 hidden animate-hero-float rounded-2xl p-5 md:block lg:right-14">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-caramel">
          Today’s Special
        </p>
        <p className="mt-1.5 font-serif text-lg font-semibold text-warmwhite">Caramel Cinnamon Latte</p>
        <p className="mt-1 font-serif text-sm text-warmwhite/70">₹180</p>
      </GlassCard>

      <a
        href="#trust-strip"
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-warmwhite/60 transition-colors hover:text-warmwhite lg:flex"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.24em]">Scroll</span>
        <span className="animate-bounce">
          <ArrowDown className="size-4" aria-hidden="true" />
        </span>
      </a>
    </section>
  )
}

function TrustStrip() {
  return (
    <section
      id="trust-strip"
      className="relative z-10 -mt-2 border-b border-ink/5 bg-warmwhite"
      aria-label="Why guests choose us"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink/5 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 90} className="px-5 py-8 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cream text-caramel-dark">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-espresso">{item.title}</p>
                <p className="mt-0.5 text-xs text-muted">{item.subtitle}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FeaturedMenu() {
  return (
    <section className="bg-warmwhite py-20 lg:py-28" aria-labelledby="featured-menu-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured"
          title="A little taste of Ember"
          subtitle="Crafted with care. Served with warmth."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredMenuItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 100}>
              <MenuCard item={item} className="h-full" />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/menu" variant="outline" size="lg" arrow>
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta(
    'Ember & Bean | Artisan Coffee House, Pune',
    'Ember & Bean is an artisan coffee house in Pune. Small-batch roasted beans, handcrafted drinks and warm moments served daily.',
  )
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedMenu />
      <AboutSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FooterCta />
    </>
  )
}
