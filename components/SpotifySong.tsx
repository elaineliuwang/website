'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Track } from '../data/tracks.interface'

interface SpotifySongProps {
  url: string
}

function getSpotifyTrackID(url: string | undefined): string | null {
  if (typeof url !== 'string') return null
  const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/)
  return match ? match[1] : null
}

export default function SpotifySong({ url }: SpotifySongProps) {
  const [track, setTrack] = useState<Track | null>(null)
  const trackID = getSpotifyTrackID(url)

  useEffect(() => {
    async function fetchTrack() {
      if (!trackID) return
      const res = await fetch(`/api/spotify/track?id=${trackID}`)
      const data = await res.json()
      if (data.error) {
        console.error('Error fetching track:', data.error)
        return
      }
      setTrack(data)
    }

    fetchTrack()
  }, [trackID])

  if (!track) return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center space-y-2 max-w-[10rem]">
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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No album art available
            </p>
          )}
        </div>
      </a>

      {/* Track Info BELOW Album Cover */}
      <div className="text-center w-full">
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
