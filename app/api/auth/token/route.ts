import { NextResponse } from 'next/server'

export async function GET() {
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
  })

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error)

    return NextResponse.json({ access_token: data.access_token })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to refresh access token' }, { status: 500 })
  }
}
