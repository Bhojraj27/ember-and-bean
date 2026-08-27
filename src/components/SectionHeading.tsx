import { cn } from '../lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-[0.68rem] font-medium uppercase tracking-[0.28em]',
            tone === 'dark' ? 'text-caramel-dark' : 'text-caramel',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl md:text-[2.75rem]',
          tone === 'dark' ? 'text-espresso' : 'text-warmwhite',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            tone === 'dark' ? 'text-muted' : 'text-warmwhite/70',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
