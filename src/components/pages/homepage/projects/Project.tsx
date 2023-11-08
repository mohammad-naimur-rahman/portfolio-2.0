/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Img } from '@/components/ui/img'
import Reveal from '@/components/ui/reveal'
import Typography from '@/components/ui/typography'
import { IProject } from '@/constants/homepage/projects'

interface Props {
  project: IProject
  index: number
}

function ProjectLinks({ project }: { project: IProject }) {
  return (
    <>
      {project.links.map(link => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {/* @ts-ignore */}
            <link.icon className="w-6 h-6" />
          </a>
        </li>
      ))}
    </>
  )
}

function LeftProject({ project }: { project: IProject }) {
  return (
    <div className="flex flex-col md:flex-row items-center relative">
      <div className="w-full md:w-3/5 -z-10">
        <Reveal animateIn="fadeInRight" duration={2}>
          <Img
            src={project.image}
            alt={project.title}
            className="aspect-video object-cover"
          />
        </Reveal>
      </div>
      <div className="w-full md:w-2/5 space-y-1 p-3 text-left md:text-right">
        <p className="font-jost text-teal-500">Featured Project</p>
        <Typography variant="h4" className="pb-2">
          {project.title}
        </Typography>
        <div className="bg-transparent md:bg-white shadow-none md:shadow-xl md:dark:bg-secondary p-0 md:p-6 ml-auto md:-ml-32 text-slate-800 dark:text-slate-200">
          <p>{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-3 justify-start md:justify-end py-3 font-jost text-teal-800 dark:text-teal-300">
          {project.stack.map(stack => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-3 justify-start md:justify-end">
          <ProjectLinks project={project} />
        </ul>
      </div>
    </div>
  )
}

function RightProject({ project }: { project: IProject }) {
  return (
    <div className="flex flex-col md:flex-row items-center relative">
      <div className="w-full order-2 md:order-1 md:w-2/5 space-y-1 p-3 text-left z-20">
        <p className="font-jost text-teal-500">Featured Project</p>
        <Typography variant="h4" className="pb-2">
          {project.title}
        </Typography>
        <div className="bg-transparent md:bg-white shadow-none md:shadow-xl md:dark:bg-secondary p-0 md:p-6 ml-auto md:-mr-32 z-20 text-slate-800 dark:text-slate-200">
          <p>{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-3 justify-start py-3 font-jost text-teal-800 dark:text-teal-300">
          {project.stack.map(stack => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-3 justify-start">
          <ProjectLinks project={project} />
        </ul>
      </div>

      <div className="w-full order-1 md:order-2 md:w-3/5 z-10">
        <Reveal animateIn="fadeInLeft" duration={2}>
          <Img
            src={project.image}
            alt={project.title}
            className="aspect-video object-cover"
          />
        </Reveal>
      </div>
    </div>
  )
}

export default function Project({ project, index }: Props) {
  if (index % 2 === 0) {
    return <LeftProject project={project} />
  }
  return <RightProject project={project} />
}
