import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

interface GlassCardProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export default function GlassCard({ children, className, dark = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        dark ? 'glass-dark' : 'glass',
        'rounded-2xl shadow-xl shadow-black/10',
        className,
      )}
    >
      {children}
    </div>
  )
}
