import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Flame, Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { useScroll } from '../hooks/useScroll'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { cn } from '../lib/cn'
import Button from './Button'

export default function Navbar() {
  const scrolled = useScroll(32)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useLockBodyScroll(open)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open || !isHome
          ? 'border-b border-white/10 bg-warmwhite/85 backdrop-blur-xl supports-[backdrop-filter]:bg-warmwhite/75'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span
            className={cn(
              'flex size-9 items-center justify-center rounded-xl transition-colors duration-500',
              scrolled || open || !isHome ? 'bg-espresso text-caramel' : 'bg-white/15 text-warmwhite backdrop-blur-md',
            )}
          >
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <span
            className={cn(
              'font-serif text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-500',
              scrolled || open || !isHome ? 'text-espresso' : 'text-warmwhite',
            )}
          >
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                  scrolled || !isHome ? 'text-ink hover:text-caramel-dark' : 'text-warmwhite/85 hover:text-warmwhite',
                  isActive && (scrolled || !isHome ? 'text-caramel-dark' : 'text-warmwhite'),
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.label}
                  {isActive && (
                    <span
                      className={cn(
                        'absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-caramel transition-colors',
                        scrolled || !isHome ? 'bg-caramel' : 'bg-warmwhite',
                      )}
                      style={{ width: '60%' }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to="/reservations" size="sm" arrow>
            Reserve a Table
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex size-10 items-center justify-center rounded-xl transition-colors lg:hidden',
            scrolled || open || !isHome ? 'text-espresso hover:bg-ink/5' : 'text-warmwhite hover:bg-white/10',
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'grid overflow-hidden bg-warmwhite/95 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-500 ease-out lg:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-ink/5 px-5 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    isActive ? 'bg-cream text-caramel-dark' : 'text-ink hover:bg-cream/60',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <Button to="/reservations" className="w-full" arrow>
                Reserve a Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
