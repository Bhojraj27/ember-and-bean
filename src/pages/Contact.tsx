import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { imageUrl } from '../lib/images'
import { site } from '../data/site'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { SocialIcon } from '../components/SocialIcons'
import FooterCta from '../components/sections/FooterCta'
import { usePageMeta } from '../hooks/usePageMeta'

const infoCards = [
  {
    icon: MapPin,
    title: 'Visit',
    lines: [site.address.line1, site.address.line2],
  },
  {
    icon: Phone,
    title: 'Call',
    lines: [site.phone],
    href: `tel:${site.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: [`Mon to Fri · ${site.hours.weekdays}`, `Sat to Sun · ${site.hours.weekend}`],
  },
]

export default function Contact() {
  usePageMeta('Contact | Ember & Bean', 'Come say hello at Ember & Bean, 24 Riverside Avenue, Pune. Questions, events and wholesale enquiries welcome.')
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come say hello."
        subtitle="Questions, events, wholesale beans or just directions. We read every message."
      />

      <section className="bg-warmwhite py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-ink/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-espresso/10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-cream text-caramel-dark">
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-espresso">{card.title}</h3>
                  <div className="mt-1.5 space-y-0.5">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-muted">
                        {line}
                      </p>
                    ))}
                  </div>
                  {card.href && (
                    <a
                      href={card.href}
                      className="mt-3 inline-block text-sm font-medium text-caramel-dark underline-offset-4 hover:underline"
                    >
                      Get in touch
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-sm sm:p-9">
                <h2 className="font-serif text-2xl font-semibold text-espresso">Send a message</h2>
                <p className="mt-2 text-sm text-muted">
                  We usually reply within one working day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col gap-6">
                <div className="relative flex min-h-72 flex-1 items-center justify-center overflow-hidden rounded-3xl">
                  <img
                    src={imageUrl('photo-1554118811-1e0d58224f24', 900)}
                    alt="Map showing Ember & Bean café on Riverside Avenue"
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-espresso/40" />
                  <div className="relative z-10 mx-6 rounded-2xl bg-warmwhite/95 px-8 py-6 text-center shadow-xl backdrop-blur-md">
                    <MapPin className="mx-auto size-8 text-caramel" aria-hidden="true" />
                    <p className="mt-2 font-serif text-lg font-semibold text-espresso">
                      {site.address.line1}
                    </p>
                    <p className="text-sm text-muted">{site.address.line2}</p>
                    <a
                      href="https://maps.google.com/?q=Pune%20Maharashtra"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-caramel-dark underline-offset-4 hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-caramel-dark">
                    Follow Along
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Fresh bakes, latte art and the occasional very good morning.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {site.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink transition-all hover:border-caramel hover:text-caramel-dark"
                      >
                        <SocialIcon label={social.label} className="size-4" />
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  )
}
