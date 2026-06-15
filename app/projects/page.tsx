import Link from 'next/link'
import Image from 'next/image'
import projectsData from '../../data/projectsData'
import { genPageMetadata } from '../seo'

export const dynamic = "force-dynamic";
export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="py-8">
      <ul className="space-y-8">
        {projectsData.map((d) => (
          <li key={d.title} className="flex items-start gap-4">
            {d.imgSrc && (
              <div className="shrink-0 flex flex-col items-center">
                <Link href={d.href || '#'} target="_blank">
                  <Image
                    src={d.imgSrc}
                    alt={d.title}
                    width={126}
                    height={70}
                    className="h-[70px] w-[126px] rounded-md object-cover"
                  />
                </Link>
                <span className="mt-1.5 text-[10px] text-gray-400 dark:text-gray-500">{d.date}</span>
              </div>
            )}
            <div>
              <Link
                href={d.href || '#'}
                target="_blank"
                className="text-gray-700 hover:text-indigo-500 hover:underline dark:text-gray-300 dark:hover:text-indigo-400"
              >
                {d.title}
              </Link>
              <p
                className="mt-0.5 text-sm text-gray-400 dark:text-gray-500"
                dangerouslySetInnerHTML={{ __html: d.description }}
              />
              {d.techStack.length > 0 && (
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {d.techStack.map((t) => (
                    <span
                      key={t.tech}
                      className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {t.tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
