import Main from './Main'
import WorkSection from '../components/sections/WorkSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import VideosSection from '../components/sections/VideosSection'

export const dynamic = 'force-dynamic'

const headingClass = 'mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100'

export default async function Page() {
  return (
    <div className="space-y-16 pb-8">
      <section id="about" className="scroll-mt-16">
        <Main />
      </section>
      <section id="resume" className="scroll-mt-16">
        <h2 className={headingClass}>Resume</h2>
        <WorkSection />
      </section>
      <section id="projects" className="scroll-mt-16">
        <h2 className={headingClass}>Projects</h2>
        <ProjectsSection />
      </section>
      <section id="videos" className="scroll-mt-16">
        <h2 className={headingClass}>Videos</h2>
        <VideosSection />
      </section>
    </div>
  )
}
