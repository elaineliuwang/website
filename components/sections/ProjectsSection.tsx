import Link from 'next/link'
import projectsData from '../../data/projectsData'

// Split a description into its first sentence and the rest.
function splitFirstSentence(html: string): [string, string] {
  const match = html.match(/^([\s\S]*?[.!?])\s+(?=[A-Z<])/)
  if (!match) return [html, '']
  return [match[1], html.slice(match[0].length)]
}

// Split off the last word (if it's plain text) so it can be kept on one line with the chevron.
function splitLastWord(html: string): [string, string] {
  const i = html.lastIndexOf(' ')
  if (i === -1 || i < html.lastIndexOf('>')) return ['', html]
  return [html.slice(0, i + 1), html.slice(i + 1)]
}

// Renders text whose last word stays on the same line as the chevron.
const TextWithChevron = ({ html, className }: { html: string; className?: string }) => {
  const [head, last] = splitLastWord(html)
  return (
    <span className={className}>
      <span dangerouslySetInnerHTML={{ __html: head }} />
      <span className="whitespace-nowrap">
        <span dangerouslySetInnerHTML={{ __html: last }} />
        <Chevron />
      </span>
    </span>
  )
}

const Chevron = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="ml-1 inline-block h-3.5 w-3.5 align-[-2px] text-gray-500 transition-transform group-open:rotate-90 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200"
  >
    <path d="M7.5 4.5L13 10l-5.5 5.5" />
  </svg>
)

export default function ProjectsSection() {
  return (
    <div>
      <ul className="ml-4 list-disc space-y-4 marker:text-gray-400 dark:marker:text-gray-500">
        {projectsData.map((d) => (
          <li key={d.title}>
            <div>
              <span className="tabular-nums text-gray-700 dark:text-gray-300">{d.date}: </span>
              <Link
                href={d.href || '#'}
                target="_blank"
                className="text-gray-700 hover:text-indigo-500 hover:underline dark:text-gray-300 dark:hover:text-indigo-400"
              >
                {d.title}
              </Link>
            </div>
            {(() => {
              const [first, rest] = splitFirstSentence(d.description)
              const textClass = 'mt-0.5 text-sm text-gray-400 dark:text-gray-500'
              if (!rest) {
                return <p className={textClass} dangerouslySetInnerHTML={{ __html: first }} />
              }
              return (
                <details className="group">
                  <summary
                    className={`${textClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
                  >
                    {/* Collapsed: chevron after the first sentence */}
                    <span className="group-open:hidden">
                      <TextWithChevron html={first} />
                    </span>
                    {/* Expanded: full text with the chevron at the end */}
                    <span className="hidden group-open:inline">
                      <span dangerouslySetInnerHTML={{ __html: first + ' ' }} />
                      <TextWithChevron html={rest} />
                    </span>
                  </summary>
                </details>
              )
            })()}
          </li>
        ))}
      </ul>
    </div>
  )
}
