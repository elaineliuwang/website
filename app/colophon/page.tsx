import TechStackItem from "../../components/TechStackItem"

export const dynamic = "force-dynamic";

export default function Colophon() {
  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-semibold">Colophon</h1>
      <p className="text-sm font-bold italic text-gray-500 dark:text-gray-400">how I made this website.</p>
      <div className="mt-6 space-y-2">
        <ul className="text-sm text-gray-500 dark:text-gray-400">
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
            Videos pulled from{' '}
            <TechStackItem
              name="YouTube RSS"
              url="https://developers.google.com/youtube/v3/docs/channels"
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
