import { FaGithub, FaLinkedin, FaYoutube, FaFacebookF, FaXTwitter, FaMastodon, FaThreads, FaInstagram, FaMedium, FaBluesky } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import { IconType } from 'react-icons'

const components: Record<string, IconType> = {
  mail: HiMail,
  github: FaGithub,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  facebook: FaFacebookF,
  x: FaXTwitter,
  mastodon: FaMastodon,
  threads: FaThreads,
  instagram: FaInstagram,
  medium: FaMedium,
  bluesky: FaBluesky,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 6 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const Icon = components[kind]
  if (!Icon) return null

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Icon
        className={`text-gray-400 hover:text-indigo-500 dark:text-gray-500 dark:hover:text-indigo-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
