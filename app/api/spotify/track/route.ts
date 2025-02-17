import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const trackId = searchParams.get('id')

  if (!trackId) {
    return NextResponse.json({ error: 'Track ID is required' }, { status: 400 })
  }

  try {
    // Fetch new access token
    const tokenRes = await fetch('http://localhost:3000/api/auth/token')
    const { access_token } = await tokenRes.json()

    // Fetch track details
    const spotifyRes = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    const data = await spotifyRes.json()
    if (!spotifyRes.ok) throw new Error(data.error)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch track' }, { status: 500 })
  }
}
