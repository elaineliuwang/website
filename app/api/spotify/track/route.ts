import { NextResponse } from 'next/server'
import { assertSpotifyOk, getSpotifyAccessToken } from '../../../../lib/spotify'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const trackId = searchParams.get('id')

  if (!trackId) {
    return NextResponse.json({ error: 'Track ID is required' }, { status: 400 })
  }

  const trackIdPattern = /^[A-Za-z0-9]{10,40}$/
  if (!trackIdPattern.test(trackId)) {
    return NextResponse.json({ error: 'Invalid Track ID format' }, { status: 400 })
  }

  try {
    const access_token = await getSpotifyAccessToken()

    const spotifyRes = await fetch(`https://api.spotify.com/v1/tracks/${encodeURIComponent(trackId)}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    const data = await spotifyRes.json()
    assertSpotifyOk(spotifyRes.ok, data)

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch track' }, { status: 500 })
  }
}
