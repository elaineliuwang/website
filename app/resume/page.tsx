import Link from 'next/link'
import { experiences, courseGroups, certifications } from '../../data/experiences'
import { genPageMetadata } from '../seo'
import { FaAmazon, FaCarSide } from 'react-icons/fa6'
import { FiActivity, FiDollarSign, FiGlobe, FiMap } from 'react-icons/fi'
import { IconType } from 'react-icons'

export const metadata = genPageMetadata({ title: 'Resume' })

const iconMap: Record<string, IconType> = {
  startup: FiActivity,
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
              <li
                key={`${exp.company}-${exp.role}`}
                className={`flex items-start gap-3 ${
                  exp.current
                    ? '-mx-3 rounded-lg bg-indigo-50 px-3 py-2.5 dark:bg-indigo-950/40'
                    : ''
                }`}
              >
                {Icon && (
                  <Icon
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      exp.current ? 'text-indigo-500' : 'text-gray-400 dark:text-gray-500'
                    }`}
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    {exp.url ? (
                      <Link
                        href={exp.url}
                        target="_blank"
                        className={`hover:underline ${
                          exp.current
                            ? 'font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-400'
                            : 'text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400'
                        }`}
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">{exp.company}</span>
                    )}
                    <span
                      className={`shrink-0 text-xs tabular-nums ${
                        exp.current
                          ? 'font-medium text-indigo-500 dark:text-indigo-400'
                          : 'text-gray-400 dark:text-gray-500'
                      }`}
                    >
                      {exp.years}
                    </span>
                  </div>
                  <span className="block text-sm text-gray-400 dark:text-gray-500">{exp.role}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-gray-400 dark:text-gray-500">Coursework @ MIT</h2>
        <ul className="space-y-3">
          {courseGroups.map((group) => (
            <li key={group.label}>
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500">{group.label}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{group.courses.join(', ')}</p>
            </li>
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
