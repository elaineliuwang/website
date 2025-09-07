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
        className={`mb-1 rounded-full px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-500 
        dark:bg-gray-700 dark:text-gray-300 flex items-center gap-1`}
      >
        {isPlaying && (
          <span className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse"></span>
        )}
        {isPlaying ? 'Now Playing' : timeAgo}
      </span>

      <a
        href={track.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="h-32 w-32 transform transition-transform hover:scale-105"
      >
        <div className="h-full w-full">
          {track.album?.images?.[0]?.url ? (
            <Image
              src={track.album.images[0].url}
              alt={track.name}
              width={250}
              height={250}
              className="rounded-md shadow-sm dark:shadow-md"
            />
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No album art available
            </p>
          )}
        </div>
      </a>

      {/* Track Info BELOW Album Cover */}
      <div className="text-center w-full">
        <h2 className="text-md font-medium">{track.name || 'Unknown Song'}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {track.artists?.length
            ? track.artists.map((artist) => artist.name).join(', ')
            : 'Unknown Artist'}
        </p>
      </div>
    </div>
  )
}
