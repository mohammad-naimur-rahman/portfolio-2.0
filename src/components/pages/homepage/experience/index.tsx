import animationdData from '@/assets/lottiefiles/experience.json'
import Heading from '@/components/ui/heading'
import { experiences } from '@/constants/homepage/experience'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Heading animationData={animationdData}>Where I&apos;ve Worked</Heading>
      <div className="flex flex-col gap-5">
        {experiences.map(experience => (
          <ExperienceCard
            key={experience.company.title}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
