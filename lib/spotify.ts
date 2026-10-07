function formatSpotifyError(data: unknown): string {
  if (!data || typeof data !== 'object') return String(data)

  const payload = data as { error?: unknown; error_description?: string }
  if (typeof payload.error === 'string') {
    return payload.error_description ? `${payload.error}: ${payload.error_description}` : payload.error
  }

  if (payload.error && typeof payload.error === 'object') {
    const nested = payload.error as { message?: string; status?: number }
    if (nested.message) {
      return nested.status ? `${nested.status} ${nested.message}` : nested.message
    }
  }

  try {
    return JSON.stringify(data)
  } catch {
    return 'Unknown Spotify error'
  }
}

export async function getSpotifyAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
  })

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })

  const data = await response.json()
  if (!response.ok || !data.access_token) {
    throw new Error(formatSpotifyError(data))
  }

  return data.access_token as string
}

export function assertSpotifyOk(ok: boolean, data: unknown) {
  if (!ok) throw new Error(formatSpotifyError(data))
}
