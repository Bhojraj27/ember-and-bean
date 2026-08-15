import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { cn } from '../lib/cn'

interface AddButtonProps {
  label?: string
  addedLabel?: string
  className?: string
}

export default function AddButton({ label = 'Add', addedLabel = 'Added', className }: AddButtonProps) {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    if (added) return
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-live="polite"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-300',
        added
          ? 'border-emerald-600/40 bg-emerald-50 text-emerald-700'
          : 'border-caramel/50 bg-warmwhite text-caramel-dark hover:bg-caramel hover:text-warmwhite active:scale-95',
        className,
      )}
    >
      {added ? <Check className="size-3.5" aria-hidden="true" /> : <Plus className="size-3.5" aria-hidden="true" />}
      {added ? addedLabel : label}
    </button>
  )
}
