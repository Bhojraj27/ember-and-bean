import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'outline' | 'light' | 'ghost'

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-caramel text-warmwhite hover:bg-caramel-dark shadow-lg shadow-caramel/25 hover:shadow-xl hover:shadow-caramel/30 active:scale-[0.98]',
  outline:
    'border border-ink/25 text-ink hover:border-caramel hover:text-caramel-dark active:scale-[0.98]',
  light:
    'border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-espresso active:scale-[0.98]',
  ghost: 'text-ink hover:text-caramel-dark',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: keyof typeof sizes
  to?: string
  href?: string
  arrow?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  arrow = false,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {arrow && (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 8h13M9 3l5 5-5 5" />
        </svg>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
