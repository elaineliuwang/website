import { certifications, courses, skills } from "../data/skillsData"

const SkillsCoursesCerts = () => {
  return (
    <section className="my-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column: Skills + Certification */}
        <div>
          <h3 className="text-lg font-semibold mb-1 text-gray-500 dark:text-gray-400">Skills:</h3>
          <div className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-300">
            {skills.map(skill => (
              <span
                key={skill}
                className="px-2 py-1 rounded text-sm bg-indigo-100 dark:bg-indigo-800/60"
              >
                {skill}
              </span>
            ))}
          </div>

          {certifications.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-1 text-gray-500 dark:text-gray-400">Certifications:</h3>
              <div className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-300">
              {certifications.map(certification => (
                <span
                  key={certification}
                  className="px-2 py-1 rounded text-sm bg-indigo-100 dark:bg-indigo-800/60"
                >
                  {certification}
                </span>
              ))}
            </div>
            </div>
          )}
        </div>

        {/* Right column: Courses */}
        <div>
          <h3 className="text-lg font-semibold mb-1 text-gray-500 dark:text-gray-400">Relevant Courses:</h3>
          <div className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-300">
            {courses.map(course => (
              <span
                key={course}
                className="px-2 py-1 rounded text-sm bg-indigo-100 dark:bg-indigo-800/60"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsCoursesCerts
