import TechStackItem from "../../components/TechStackItem"

export const dynamic = "force-dynamic";

export default function Colophon() {
  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-semibold">Colophon</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">how I made this website.</p>
      {/* Horizontal Divider */}
      <hr className="border-t border-gray-200 dark:border-gray-700" />
      <div className="mt-6 space-y-2">
        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">Tech Stack</h2>
        <ul className="text-md text-gray-500 dark:text-gray-400">
          <li>
            Built with <TechStackItem name="React" url="https://reactjs.org/" /> &{' '}
            <TechStackItem name="Next.js" url="https://nextjs.org/" />
          </li>
          <li>
            Styled with <TechStackItem name="Tailwind CSS" url="https://tailwindcss.com/" />
          </li>
          <li>
            Dabbled with{' '}
            <TechStackItem
              name="Spotify API"
              url="https://developer.spotify.com/documentation/web-api"
            />
          </li>
          <li>
            Adapted from{' '}
            <TechStackItem
              name="Tailwind Starter Blog"
              url="https://github.com/timlrx/tailwind-nextjs-starter-blog?tab=readme-ov-file"
            />
          </li>
          <li>
            Hosted on <TechStackItem name="Vercel" url="https://vercel.com/" />
          </li>
        </ul>
      </div>
    </div>
  )
}
