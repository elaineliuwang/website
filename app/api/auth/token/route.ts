import { NextResponse } from 'next/server'
import { getSpotifyAccessToken } from '../../../../lib/spotify'

export async function GET() {
  try {
    const access_token = await getSpotifyAccessToken()
    return NextResponse.json({ access_token })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to refresh access token' }, { status: 500 })
  }
}
