import Link from 'next/link'
import { experiences, courses, certifications } from '../../data/experiences'
import { genPageMetadata } from '../seo'
import { FaAmazon, FaCarSide } from 'react-icons/fa6'
import { FiDollarSign, FiGlobe, FiMap } from 'react-icons/fi'
import { IconType } from 'react-icons'

export const metadata = genPageMetadata({ title: 'Resume' })

const iconMap: Record<string, IconType> = {
  amazon: FaAmazon,
  principal: FiDollarSign,
  cave: FiMap,
  capetown: FiGlobe,
  medialab: FaCarSide,
}

export default function Resume() {
  return (
    <div className="space-y-12 py-8">
      <section>
        <h2 className="mb-4 text-sm font-medium text-gray-400 dark:text-gray-500">Work</h2>
        <ul className="space-y-3">
          {experiences.map((exp) => {
            const Icon = iconMap[exp.icon]
            return (
              <li key={exp.company} className="flex items-center gap-3">
                {Icon && <Icon className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500" />}
                <div>
                  <Link
                    href={exp.url}
                    target="_blank"
                    className="text-gray-700 hover:text-indigo-500 hover:underline dark:text-gray-300 dark:hover:text-indigo-400"
                  >
                    {exp.company}
                  </Link>
                  <span className="block text-sm text-gray-400 sm:ml-2 sm:inline dark:text-gray-500">{exp.role}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-gray-400 dark:text-gray-500">Coursework Taken @ MIT</h2>
        <ul className="list-disc ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </section>

      {certifications.length > 0 && (
        <section>
          <h2 className="mb-4 text-sm font-medium text-gray-400 dark:text-gray-500">Certifications</h2>
          <ul className="list-disc ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
