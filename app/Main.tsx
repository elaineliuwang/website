'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Authors, allAuthors } from '../.contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '../layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { experiences } from '../data/experiences'
import projectsData from '../data/projectsData'
import { songTrackIDs } from '../data/songTrackIDs'
import SpotifySong from '../components/SpotifySong'
import SpotifyRecent from '../components/SpotifyRecent'

export default function Home() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5"></div>
        {/* Projects */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:space-y-0">
                <dl>
                  <dd className="text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                    Recent Projects
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  {projectsData.slice(0, 2).map((project, index) => (
                    <div key={index} className="flex items-center">
                      <Image
                        src={project.imgSrc || ''}
                        alt={project.title}
                        width={120}
                        height={120}
                        className="mr-4 rounded-lg object-cover"
                      />
                      <div>
                        <Link
                          href={project.href || '/'}
                          target="_blank"
                          className="text-xl font-medium text-gray-900 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-300"
                        >
                          {project.title}
                        </Link>
                        <div className="text-gray-500 dark:text-gray-400">
                          {project.description.split('.')[0] + '.'}
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/projects"
                    className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    See All Projects &rarr;
                  </Link>
                  <div className="mt-8 text-gray-500 dark:text-gray-400">
                    ... plus <em>this</em> website!
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
        {/* Experiences */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:space-y-0">
                <dl>
                  <dd className="text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                    Experiences
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="grid grid-cols-5 gap-4">
                        <div className="col-span-3">
                          <div className="font-medium">{exp.company}</div>
                          <div className="text-gray-500 dark:text-gray-400">{exp.role}</div>
                        </div>
                        <div className="col-span-2 text-right text-gray-500 dark:text-gray-400">
                          {exp.timeframe}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
        {/* Music */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12">
            <article>
              <div className="grid grid-cols-4 gap-6 space-y-2">
                <div className="col-span-1">
                  <dl>
                    <dd className="text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                      Music
                    </dd>
                  </dl>
                </div>
                <div className="col-span-3 space-y-5">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-md font-semibold italic">Listening To</h1>
                      {/* Recently Played */}
                      <div className="flex items-center space-x-4">
                        <SpotifyRecent />
                      </div>
                    </div>
                    {/* Song List */}
                    <h1 className="text-md mt-12 font-semibold italic">Recent Favs</h1>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      {songTrackIDs.map((trackId) => (
                        <div key={trackId} className="w-full">
                          <SpotifySong trackId={trackId} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12"></li>
        </ul>
      </div>
    </>
  )
}
