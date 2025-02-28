import Image from 'next/image'
import Link from 'next/link'

const Card = ({ title, description, techStack, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div className="overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60">
      {imgSrc && (
        <Link href={href || '#'} aria-label={`Link to ${title}`} target="_blank">
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </Link>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">{title}</h2>
        <p
          className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>

        {/* Tech Stack Section */}
        {techStack.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {techStack.map((item, index) => (
              <div key={index} className="group relative">
                <span className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  {item.tech}
                </span>

                {/* Tooltip */}
                <div className="bg-opacity-60 dark:bg-opacity-60 absolute top-full left-1/2 z-10 mt-2 hidden w-max -translate-x-1/2 transform rounded-lg bg-gray-700 p-2 text-sm text-gray-200 group-hover:block dark:bg-gray-300 dark:text-gray-900">
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        )}

        {href && (
          <Link
            href={href}
            target="_blank"
            className="text-base leading-6 font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
            aria-label={`Link to ${title}`}
          >
            See More &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
