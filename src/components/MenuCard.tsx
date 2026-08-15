import { useState } from 'react'
import { Flame, Leaf } from 'lucide-react'
import type { MenuItem } from '../data/menu'
import { FALLBACK_IMAGE } from '../lib/images'
import { cn } from '../lib/cn'
import AddButton from './AddButton'

interface MenuCardProps {
  item: MenuItem
  className?: string
}

export default function MenuCard({ item, className }: MenuCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-espresso/10',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={imgError ? FALLBACK_IMAGE : item.image}
          alt={item.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-warmwhite/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-espresso backdrop-blur-sm">
            {item.category}
          </span>
          {item.popular && (
            <span className="inline-flex items-center gap-1 rounded-full bg-caramel px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-warmwhite shadow-sm">
              <Flame className="size-3" aria-hidden="true" />
              Popular
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold leading-snug text-espresso">
            {item.name}
          </h3>
          <span
            title={item.vegetarian ? 'Vegetarian' : 'Contains eggs / non-vegetarian'}
            className={cn(
              'mt-1 inline-flex size-4 shrink-0 items-center justify-center rounded-sm border-2 p-0.5',
              item.vegetarian ? 'border-emerald-600 text-emerald-600' : 'border-red-600 text-red-600',
            )}
            aria-label={item.vegetarian ? 'Vegetarian' : 'Non-vegetarian'}
          >
            {item.vegetarian && <Leaf className="size-2.5" aria-hidden="true" />}
          </span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="font-serif text-lg font-semibold text-espresso">
            <span className="text-sm align-super text-caramel-dark">₹</span>
            {item.price}
          </p>
          <AddButton />
        </div>
      </div>
    </article>
  )
}
