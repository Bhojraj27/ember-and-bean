import { Link } from 'react-router-dom'
import { Clock, Flame, MapPin, Phone, Mail } from 'lucide-react'
import { navLinks, site } from '../data/site'
import Button from './Button'
import { SocialIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-[#120a07] text-warmwhite/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
              <span className="flex size-10 items-center justify-center rounded-xl bg-caramel text-espresso">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-base font-semibold uppercase tracking-[0.22em] text-warmwhite">
                {site.name}
              </span>
            </Link>
            <p className="mt-6 max-w-xs font-serif text-xl italic leading-relaxed text-warmwhite/70">
              Slow mornings. Good coffee. Better moments.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-caramel">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block cursor-pointer text-sm transition-colors hover:text-caramel"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-caramel">Visit Us</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-caramel" aria-hidden="true" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-caramel" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="cursor-pointer transition-colors hover:text-caramel">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-caramel" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="cursor-pointer transition-colors hover:text-caramel">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-caramel">Hours</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-caramel" aria-hidden="true" />
                Mon to Fri · {site.hours.weekdays}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-caramel" aria-hidden="true" />
                Sat to Sun · {site.hours.weekend}
              </li>
            </ul>
            <div className="mt-6">
              <Button to="/reservations" size="sm" arrow>
                Reserve a Table
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-16 font-serif text-4xl font-semibold uppercase tracking-[0.12em] text-warmwhite/10 sm:text-6xl lg:text-8xl">
          Ember & Bean
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs uppercase tracking-[0.16em] text-warmwhite/45">
            © 2026 Ember & Bean. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-warmwhite/70 transition-all hover:border-caramel hover:text-caramel"
              >
                <SocialIcon label={social.label} className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
