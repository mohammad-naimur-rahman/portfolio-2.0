/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Img } from '@/components/ui/img'
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
    <div className="flex items-center relative">
      <div className="w-3/5">
        <Img
          src={project.image}
          alt={project.title}
          className="aspect-video object-cover"
        />
      </div>
      <div className="w-2/5 space-y-1 p-3 text-right">
        <p className="font-jost text-teal-500">Featured Project</p>
        <Typography variant="h4" className="pb-2">
          {project.title}
        </Typography>
        <div className="bg-white shadow-xl dark:bg-secondary p-6 -ml-32 text-slate-800 dark:text-slate-200">
          <p>{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-3 justify-end py-3 font-jost text-teal-800 dark:text-teal-300">
          {project.stack.map(stack => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-3 justify-end">
          <ProjectLinks project={project} />
        </ul>
      </div>
    </div>
  )
}

function RightProject({ project }: { project: IProject }) {
  return (
    <div className="flex items-center relative">
      <div className="w-2/5 space-y-1 p-3 text-left z-20">
        <p className="font-jost text-teal-500">Featured Project</p>
        <Typography variant="h4" className="pb-2">
          {project.title}
        </Typography>
        <div className="bg-white shadow-xl dark:bg-secondary p-6 -mr-32 z-20 text-slate-800 dark:text-slate-200">
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

      <div className="w-3/5 z-10">
        <Img
          src={project.image}
          alt={project.title}
          className="aspect-video object-cover"
        />
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
