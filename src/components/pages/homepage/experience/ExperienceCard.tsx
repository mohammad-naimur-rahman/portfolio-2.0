import Typography from '@/components/ui/typography'
import { IExperience } from '@/constants/homepage/experience'

interface Props {
  experience: IExperience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div>
      <Typography variant="h5" className="font-bold">
        {experience.title}{' '}
        <a
          className="text-teal-500"
          href={experience.company.href}
          target="_blank"
          rel="noreferrer"
        >
          @ {experience.company.title}
        </a>
      </Typography>
      <Typography
        variant="body"
        className="tracking-wider uppercase py-3 font-jost"
      >
        {experience.start} - {experience.end}
      </Typography>
      <ul>
        {experience.description.map(description => (
          <Typography variant="body" className="py-1">
            <span className="text-teal-500 text-2xl">▹</span>
            {description}
          </Typography>
        ))}
      </ul>
    </div>
  )
}
