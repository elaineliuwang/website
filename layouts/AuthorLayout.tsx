import { ReactNode } from 'react'
import { Authors } from '../.contentlayer/generated'
import SocialIcon from '../components/social-icons'
import Image from 'next/image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, linkedin, github } = content

  return (
    <>
      <div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={150}
                height={150}
                className="h-30 w-30 rounded-full"
              />
            )}
            <h3 className="pt-2 pb-1 text-xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="flex space-x-3 pt-1">
              <SocialIcon kind="linkedin" href={linkedin} size={6} />
              <SocialIcon kind="github" href={github} size={6} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-10 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
