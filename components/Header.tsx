'use client'

import headerNavLinks from '../data/headerNavLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'

const Header = () => {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile: top bar with hamburger */}
      <div className="flex items-center justify-end py-6 sm:hidden">
        <MobileNav />
      </div>

      {/* Desktop: sticky sidebar nav */}
      <aside className="hidden sm:block sm:w-36 sm:shrink-0 sm:pt-16 sm:pr-8">
        <nav className="sticky top-16 flex flex-col items-end space-y-3 text-right">
          {headerNavLinks
            .filter((link) => link.title)
            .map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
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
