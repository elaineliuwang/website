import { ReactNode } from 'react'
import { Authors } from '../.contentlayer/generated'
import SocialIcon from '../components/social-icons'
import Image from 'next/image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const {
    name,
    avatar,
    occupation,
    // company,
    // email,
    twitter,
    instagram,
    linkedin,
    github,
    youtube,
  } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div> */}
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-50 w-50 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-1 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 italic dark:text-gray-400">{occupation}</div>
            {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="flex space-x-3 pt-3">
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="youtube" href={youtube} />
              <SocialIcon kind="instagram" href={instagram} />
              <SocialIcon kind="x" href={twitter} />
              {/* <SocialIcon kind="mail" href={`mailto:${email}`} /> */}
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-10 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
