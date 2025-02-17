import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-center py-10 mt-auto'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className="m-1 font-medium text-gray-900 hover:text-indigo-500 dark:text-gray-100 dark:hover:text-indigo-400"
          >
            {siteMetadata.headerTitle}
          </Link>
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="m-1 font-medium text-gray-900 hover:text-indigo-500 dark:text-gray-100 dark:hover:text-indigo-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
