import siteMetadata from '@/data/siteMetadata'
import ThemeSwitch from './ThemeSwitch'

export default function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="text-md absolute bottom-0 left-0 mb-4 ml-4 text-gray-500 dark:text-gray-400">
        <div>{siteMetadata.author}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
      </div>

      <div className="text-md absolute right-0 bottom-0 mr-4 mb-4 flex items-center space-x-2 text-gray-500 dark:text-gray-400">
        <a href="/colophon" className="mx-4 underline hover:text-gray-700 dark:hover:text-gray-300">
          Colophon
        </a>
        <ThemeSwitch />
      </div>
    </footer>
  )
}
