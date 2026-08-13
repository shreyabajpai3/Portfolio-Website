'use client'

import { useEffect, useState } from 'react'
import { navItems } from '@/lib/site-data'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-border bg-background/80 backdrop-blur-md'
          : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-sm"
          aria-label="Shreya Bajpai — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 text-primary">
            SB
          </span>
          <span className="hidden text-muted-foreground sm:inline">
            {'/* data.analyst */'}
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group flex items-baseline gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-primary/60">
                  {`//0${i + 1}`}
                </span>
                <span>{`<${item.label}/>`}</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-sm text-muted-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? '</close>' : '<menu/>'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-5 py-3 md:hidden">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2 py-2 font-mono text-sm text-muted-foreground"
              >
                <span className="text-primary/60">{`//0${i + 1}`}</span>
                <span>{`<${item.label}/>`}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
