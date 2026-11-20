'use client'

import { useEffect, useState } from 'react'
import headerNavLinks from '../data/headerNavLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'

// Tracks which homepage section is currently in view.
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState(headerNavLinks[0].id)

  useEffect(() => {
    if (!enabled) return

    const update = () => {
      // At the bottom of the page, the last section is active even if it's short.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setActive(headerNavLinks[headerNavLinks.length - 1].id)
        return
      }
      // Otherwise, the last section whose top has passed the upper third of the screen.
      let current = headerNavLinks[0].id
      for (const { id } of headerNavLinks) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 3) current = id
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [enabled])

  return enabled ? active : null
}

const Header = () => {
  const pathname = usePathname()
  const active = useActiveSection(pathname === '/')

  return (
    <>
      {/* Mobile: top bar with hamburger */}
      <div className="flex items-center justify-end py-6 sm:hidden">
        <MobileNav />
      </div>

      {/* Desktop: sticky sidebar nav */}
      <aside className="hidden sm:block sm:w-36 sm:shrink-0 sm:pr-8 sm:pt-16">
        <nav className="sticky top-16 flex flex-col items-end space-y-3 text-right">
          {headerNavLinks.map((link) => {
            const isActive = link.id === active
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`text-sm hover:text-indigo-500 dark:hover:text-indigo-400 ${
                  isActive
                    ? 'font-semibold text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Header
