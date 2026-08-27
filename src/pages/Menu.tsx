import { useEffect, useMemo, useState } from 'react'
import { Search, SearchX } from 'lucide-react'
import { menuCategories, menuItems, type MenuItem } from '../data/menu'
import MenuCard from '../components/MenuCard'
import MenuTabs, { type TabValue } from '../components/MenuTabs'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Menu() {
  usePageMeta('Our Menu | Ember & Bean', 'Explore the full Ember & Bean menu: coffee, cold drinks, tea, breakfast, bakery and desserts.')
  const [activeTab, setActiveTab] = useState<TabValue>('All')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 500)
    return () => window.clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return menuItems.filter((item: MenuItem) => {
      const matchesTab = activeTab === 'All' || item.category === activeTab
      const matchesQuery =
        term === '' ||
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      return matchesTab && matchesQuery
    })
  }, [activeTab, query])

  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Crafted to be savored."
        subtitle="From first sip to last bite."
      />

      <section className="bg-warmwhite pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-xl">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search menu…"
                aria-label="Search menu"
                className="w-full rounded-full border border-ink/10 bg-white py-3.5 pl-11 pr-4 text-sm text-ink shadow-sm placeholder:text-muted/60 transition-colors focus:border-caramel focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-8">
            <MenuTabs tabs={menuCategories} active={activeTab} onChange={setActiveTab} />
          </div>

          <div className="mt-12">
            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse overflow-hidden rounded-2xl border border-ink/5 bg-white"
                  >
                    <div className="aspect-[4/3] bg-cream" />
                    <div className="space-y-3 p-5">
                      <div className="h-4 w-2/3 rounded-full bg-cream" />
                      <div className="h-3 w-full rounded-full bg-cream" />
                      <div className="h-3 w-1/2 rounded-full bg-cream" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item, index) => (
                  <Reveal key={item.id} delay={(index % 3) * 80}>
                    <MenuCard item={item} className="h-full" />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-dashed border-ink/15 px-6 py-16 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-cream text-caramel-dark">
                  <SearchX className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-espresso">No coffee found.</h3>
                <p className="mt-2 text-sm text-muted">
                  Try another search, or clear the filters to see the full menu.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setActiveTab('All')
                  }}
                  className="mt-6 text-sm font-medium text-caramel-dark underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
