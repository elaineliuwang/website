import { author } from '../data/author'
import ThemeSwitch from './ThemeSwitch'
import { IoLocationSharp } from 'react-icons/io5'

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="flex items-center justify-between text-sm text-gray-400 dark:text-gray-500">
        <span className="flex items-center gap-1">
          <IoLocationSharp className="h-3.5 w-3.5" />
          {author.location}
        </span>
        <div className="flex items-center gap-3">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
