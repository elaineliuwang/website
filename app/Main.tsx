'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Authors, allAuthors } from '../.contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '../layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { experiences } from '../data/experiences'
import projectsData from '../data/projectsData'
import { songTrackIDs } from '../data/songURLs'
import SpotifySong from '../components/SpotifySong'
import SpotifyRecent from '../components/SpotifyRecent'
import { stripHtml } from './utils'
import SkillsCoursesCerts from '../components/SkillsCoursesCerts'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                          {stripHtml(project.description).split(".")[0] + "."}
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/projects"
                    className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    See All {projectsData.length} Projects &rarr;
                  </Link>
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
        {/* Skills, Courses & Certifications Section */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12">
            <article>
              <SkillsCoursesCerts />
            </article>
          </li>
        </ul>
        {/* Music */}
        <section className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-lg">
          <h2 className="text-center text-lg font-medium text-gray-500 dark:text-gray-400 mb-8">
            What I've Been Listening To...
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Recently Played */}
            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r dark:border-gray-600 pb-6 md:pb-0 pr-0 md:pr-12">
              <SpotifyRecent />
            </div>

            {/* Song Grid */}
            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 italic">
                Some Favorites — as of Sep 7, 2025
              </p>
              <div className="grid grid-cols-2 gap-4">
                {songTrackIDs.slice(0, 4).map((url) => (
                  <div key={url} className="w-full">
                    <SpotifySong url={url} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-12"></li>
        </ul>
      </div>
    </>
  )
}
