import { Coffee, Croissant, Leaf, Star } from 'lucide-react'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { featuredMenuItems } from '../data/menu'
import Button from '../components/Button'
import MenuCard from '../components/MenuCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FooterCta from '../components/sections/FooterCta'
import HeroSection from '../components/sections/HeroSection'

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

function TrustStrip() {
  return (
    <section
      id="trust-strip"
      className="relative z-10 border-b border-ink/5 bg-warmwhite"
      aria-label="Why guests choose us"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink/5 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 90} className="px-5 py-10 sm:px-8 lg:py-12">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cream text-caramel-dark">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-espresso">{item.title}</p>
                <p className="mt-0.5 text-xs tracking-wide text-muted">{item.subtitle}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const craftLine = [
  'Small-batch roast',
  'Sidama origin',
  'Hand-poured',
  'Riverside Pune',
  'Caramel cinnamon',
  '100% Arabica',
]

function CraftMarquee() {
  const loop = [...craftLine, ...craftLine]
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#120a07]" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 py-4 pr-10">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-caramel"
          >
            {item}
            <span className="ml-10 text-warmwhite/25">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function FeaturedMenu() {
  return (
    <section className="bg-warmwhite py-24 lg:py-36" aria-labelledby="featured-menu-heading">
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
      <HeroSection />
      <CraftMarquee />
      <TrustStrip />
      <FeaturedMenu />
      <AboutSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FooterCta />
    </>
  )
}
