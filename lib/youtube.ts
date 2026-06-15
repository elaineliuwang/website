const CHANNEL_ID = 'UCMr0n9E_yYBNN-QVKWA75PQ'

export interface Video {
  id: string
  location: string
  url: string
}

export async function getTravelVideos(): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    )
    if (!res.ok) return []
    const xml = await res.text()

    const videos: Video[] = []
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g
    const titleRegex = /<title>(.*?)<\/title>/
    const idRegex = /<yt:videoId>(.*?)<\/yt:videoId>/
    const travelFormat = /^(.+?)\s*\((\d[\d/\s-]+)\)$/

    let match
    while ((match = entryRegex.exec(xml)) !== null) {
      const entry = match[1]
      const titleMatch = titleRegex.exec(entry)
      const idMatch = idRegex.exec(entry)
      if (!titleMatch || !idMatch) continue

      const title = titleMatch[1]
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
      const videoId = idMatch[1]
      const parsed = travelFormat.exec(title)
      if (!parsed) continue

      videos.push({
        id: videoId,
        location: parsed[1].trim(),
        url: `https://www.youtube.com/watch?v=${videoId}`,
      })
    }

    return videos
  } catch {
    return []
  }
}
