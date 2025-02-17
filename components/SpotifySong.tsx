'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Track } from '@/data/tracks.interface'

interface SpotifySongProps {
  trackId: string
}

export default function SpotifySong({ trackId }: SpotifySongProps) {
  const [track, setTrack] = useState<Track | null>(null)

  useEffect(() => {
    async function fetchTrack() {
      const res = await fetch(`/api/spotify/track?id=${trackId}`)
      const data = await res.json()
      if (data.error) {
        console.error('Error fetching track:', data.error)
        return
      }
      setTrack(data)
    }

    fetchTrack()
  }, [trackId])

  if (!track) return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center space-y-2">
      <a
        href={track.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="h-24 w-24 transform transition-transform hover:scale-105"
      >
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
      </a>

      {/* Song Info Below Album Cover */}
      <div className="text-center">
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
