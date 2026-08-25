import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const trackId = searchParams.get('id')

  if (!trackId) {
    return NextResponse.json({ error: 'Track ID is required' }, { status: 400 })
  }

  // Validate trackId to prevent malformed or unexpected values from being used in the request URL
  const trackIdPattern = /^[A-Za-z0-9]{10,40}$/
  if (!trackIdPattern.test(trackId)) {
    return NextResponse.json({ error: 'Invalid Track ID format' }, { status: 400 })
  }

  try {
    const tokenBaseUrl =
      process.env.NODE_ENV === 'development'
        ? process.env.LOCAL_SITE_URL
        : process.env.NEXT_PUBLIC_SITE_URL
    const tokenRes = await fetch(`${tokenBaseUrl}/api/auth/token`)
    const { access_token } = await tokenRes.json()

    // Fetch track details
    const spotifyRes = await fetch(`https://api.spotify.com/v1/tracks/${encodeURIComponent(trackId)}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    const data = await spotifyRes.json()
    if (!spotifyRes.ok) throw new Error(data.error)

    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch track' }, { status: 500 })
  }
}
