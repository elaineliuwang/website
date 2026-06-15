'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Track } from '../data/tracks.interface'

export default function SpotifyRecent() {
  const [track, setTrack] = useState<Track | null>(null)
  const [timeAgo, setTimeAgo] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecentTrack() {
      const res = await fetch('/api/spotify/recent')
      const data = await res.json()

      setTrack(data.track)
      setTimeAgo(data.time_ago)
    }

    fetchRecentTrack()
  }, [])

  if (!track) return <p>Loading...</p>

  const isPlaying = timeAgo === 'Now'

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Pill */}
      <span
        className="mb-2 rounded-full px-2 py-0.5 text-[10px] font-normal text-gray-500 bg-gray-200/70 dark:bg-gray-700/70 dark:text-gray-400"
      >

        {isPlaying ? 'Now Playing' : timeAgo}
      </span>

      <a
        href={track.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-28 shrink-0 transform transition-transform hover:scale-105"
      >
        {track.album?.images?.[0]?.url ? (
          <>
            {isPlaying && (
              <Image
                src={track.album.images[0].url}
                alt=""
                width={112}
                height={112}
                aria-hidden
                className="absolute inset-0 h-auto w-28 scale-[1.03] rounded-md blur-sm brightness-75 dark:brightness-125 animate-album-pulse"
              />
            )}
            <Image
              src={track.album.images[0].url}
              alt={track.name}
              width={112}
              height={112}
              className="relative block h-auto w-28 rounded-md shadow-sm dark:shadow-md"
            />
          </>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No album art available
          </p>
        )}
      </a>

      <div className="text-center w-36">
        <h2 className="text-sm font-medium truncate">{track.name || 'Unknown Song'}</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
          {track.artists?.length
            ? track.artists.map((artist) => artist.name).join(', ')
            : 'Unknown Artist'}
        </p>
      </div>
    </div>
  )
}
