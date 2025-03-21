import projectsData from '../../data/projectsData'
import Card from '../../components/Card'
import { genPageMetadata } from '../seo'

export const dynamic = "force-dynamic";
export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-4 md:space-y-5">
          <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                techStack={d.techStack}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
