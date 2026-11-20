import Link from 'next/link'
import { videos } from '../../data/videos'

export default function VideosSection() {
  return (
    <div>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        I like filming and editing travel videos
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
                loading="lazy"
                className="h-full w-full scale-110 object-cover transition-transform group-hover:scale-[1.15]"
              />
            </div>
            <p className="mt-1 text-xs font-medium text-gray-700 group-hover:text-indigo-500 dark:text-gray-300 dark:group-hover:text-indigo-400">
              {video.location}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
