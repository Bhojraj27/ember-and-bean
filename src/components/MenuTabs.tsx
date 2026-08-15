import type { MenuCategory } from '../data/menu'
import { cn } from '../lib/cn'

export type TabValue = MenuCategory | 'All'

interface MenuTabsProps {
  tabs: Array<TabValue>
  active: TabValue
  onChange: (tab: TabValue) => void
}

export default function MenuTabs({ tabs, active, onChange }: MenuTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
    >
      {tabs.map((tab) => {
        const isActive = tab === active
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
              isActive
                ? 'border-espresso bg-espresso text-warmwhite shadow-md shadow-espresso/20'
                : 'border-ink/10 bg-white text-muted hover:border-caramel hover:text-caramel-dark',
            )}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
