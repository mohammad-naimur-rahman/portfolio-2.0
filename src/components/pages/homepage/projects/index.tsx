import animationData from '@/assets/lottiefiles/projects.json'
import Heading from '@/components/ui/heading'
import { projects } from '@/constants/homepage/projects'
import Project from './Project'

export default function Projects() {
  return (
    <section className="py-10 md:py-16 lg:py-20 projects">
      <Heading animationData={animationData}>
        Some Things I&apos;ve Built
      </Heading>
      <div className="space-y-10 pt-10">
        {projects.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
