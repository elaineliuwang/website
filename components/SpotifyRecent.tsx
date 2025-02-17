'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Track } from '@/data/tracks.interface'

export default function SpotifyRecent() {
  const [track, setTrack] = useState<Track | null>(null)
  const [timeAgo, setTimeAgo] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecentTrack() {
      const res = await fetch('/api/spotify/recent')
      const data = await res.json()

      setTrack(data.track)
      setTimeAgo(data.time_ago) // "Now" if currently playing, else "X hours ago"
    }

    fetchRecentTrack()
  }, [])

  if (!track) return <p>Loading...</p>

  const isPlaying = timeAgo === 'Now'

  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col items-center space-y-2">
        {/* Pill */}
        <span
          className={`mb-3 rounded-full px-2 py-1 text-xs font-semibold ${isPlaying ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-gray-500 dark:text-gray-200'}`}
        >
          {isPlaying ? 'Now Playing' : timeAgo}
        </span>

        {/* Album Cover */}
        <a
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="h-24 w-24 transform transition-transform hover:scale-105"
        >
          <div className="h-full w-full">
            {track.album?.images?.[0]?.url ? (
              <Image
                src={track.album.images[0].url}
                alt={track.name}
                width={100}
                height={100}
                className="rounded-md shadow-sm dark:shadow-md"
              />
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">No album art available</p>
            )}
          </div>
        </a>
      </div>

      {/* Track Info to the Right */}
      <div className="text-left">
        <h2 className="text-lg font-medium">{track.name || 'Unknown Song'}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {track.artists?.length
            ? track.artists.map((artist) => artist.name).join(', ')
            : 'Unknown Artist'}
        </p>
      </div>
    </div>
  )
}
