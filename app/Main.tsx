'use client'

import { Authors, allAuthors } from '../.contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '../layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { songTrackIDs, favoritesDate } from '../data/songURLs'
import SpotifySong from '../components/SpotifySong'
import SpotifyRecent from '../components/SpotifyRecent'
import { FaSpotify } from 'react-icons/fa6'

export default function Home() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <div className="flex justify-center">
        <section className="relative my-12 inline-block rounded-xl bg-gray-50 p-5 shadow-sm dark:bg-gray-800 dark:shadow-md">
          <a
            href="https://open.spotify.com/user/z1p864mj2i4qemukpw3oemjdr?si=719dc9f11bf94aa7"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 text-gray-300 hover:text-indigo-500 dark:text-gray-600 dark:hover:text-indigo-400"
          >
            <FaSpotify className="h-4 w-4" />
          </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r dark:border-gray-600 pb-4 md:pb-0 pr-0 md:pr-6">
              <SpotifyRecent />
            </div>

            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 italic">
                Some Favorites — as of {favoritesDate}
              </p>
              <div className="grid grid-cols-2 gap-3 md:flex">
                {songTrackIDs.slice(0, 4).map((url) => (
                  <SpotifySong key={url} url={url} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
