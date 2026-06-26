import Link from 'next/link'
import { videos } from '../../data/videos'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Videos' })

export default function Videos() {
  return (
    <div className="py-8">
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        I like filming and editing travel videos. Mostly shot on a Sony ZV-1, sometimes GoPro sometimes iPhone, all edited in Final Cut Pro.
      </p>
      <p className="mb-3 flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
        most recent
        <span className="text-[10px]">&#9660;</span>
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            className="group"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.location}
                className="h-full w-full scale-110 object-cover transition-transform group-hover:scale-[1.15]"
              />
            </div>
            <p className="mt-1.5 text-sm font-semibold text-gray-700 group-hover:text-indigo-500 dark:text-gray-300 dark:group-hover:text-indigo-400">
              {video.location}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
