import { allAuthors } from '../.contentlayer/generated'
import ThemeSwitch from './ThemeSwitch'
import { IoLocationSharp } from 'react-icons/io5'

export default function Footer() {
  const author = allAuthors.find((a) => a.slug === 'default')

  return (
    <footer className="py-8">
      <div className="flex items-center justify-between text-sm text-gray-400 dark:text-gray-500">
        <span className="flex items-center gap-1">
          <IoLocationSharp className="h-3.5 w-3.5" />
          {author?.location || 'Location'}
        </span>
        <div className="flex items-center gap-3">
          <a href="/colophon" className="hover:text-gray-600 dark:hover:text-gray-300">
            Colophon
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
