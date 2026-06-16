// Manual list of travel videos, most recent first.
// To add a new one: grab the YouTube video ID (the part after `watch?v=`)
// and add a new entry at the TOP of the list.
export interface Video {
  id: string
  location: string
}

export const videos: Video[] = [
  { id: 'HKhMDWrmV1I', location: 'everglades & fl keys' },
  { id: '1ZSlba3uvHw', location: 'silver springs state park' },
  { id: 'QNjx4Jdiz9w', location: 'fall foliage in nh & vt' },
  { id: 'Fo5XfW5JNpY', location: 'acadia national park' },
  { id: 'ACgDlaNd_w8', location: 'olympic national park' },
  { id: 'hm3blhIaNwE', location: 'new york city' },
]
