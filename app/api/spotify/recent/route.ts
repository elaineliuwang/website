import { NextResponse } from 'next/server'

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`

function timeAgo(timestamp) {
  const now = new Date()
  const playedAt = new Date(timestamp)
  const secondsAgo = Math.floor((now.getTime() - playedAt.getTime()) / 1000)

  if (secondsAgo < 60) return `${secondsAgo} second${secondsAgo == 1 ? '': 's'} ago`
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} minute${Math.floor(secondsAgo / 60) == 1 ? '': 's'} ago`
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} hour${Math.floor(secondsAgo / 3600) == 1 ? '': 's'} ago`
  return `${Math.floor(secondsAgo / 86400)} day${Math.floor(secondsAgo / 86400) == 1 ? '': 's'} ago`
}

export async function GET() {
  try {
    // Fetch new access token (public site and local)
    const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/token`)
    // const tokenRes = await fetch(`${process.env.LOCAL_SITE_URL}/api/auth/token`)
    const { access_token } = await tokenRes.json()

    // Check if currently playing
    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` }
    })

    if (nowPlayingRes.ok) {
      const nowPlayingData = await nowPlayingRes.json()
      if (nowPlayingData.is_playing) {
        return NextResponse.json({
          track: nowPlayingData.item,
          time_ago: 'Now',
        })
      }
    }

    // If not playing, fetch recently played track
    const recentlyPlayedRes = await fetch(`${RECENTLY_PLAYED_ENDPOINT}?limit=1`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    const data = await recentlyPlayedRes.json()
    if (!recentlyPlayedRes.ok) throw new Error(data.error)

    const lastTrack = data.items[0]
    if (!lastTrack) throw new Error('No recently played track found')

    return NextResponse.json({
      track: lastTrack.track,
      played_at: lastTrack.played_at,
      time_ago: timeAgo(lastTrack.played_at),
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch Spotify status' }, { status: 500 })
  }
}
