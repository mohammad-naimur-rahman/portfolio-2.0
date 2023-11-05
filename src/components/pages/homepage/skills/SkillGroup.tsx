import Typography from '@/components/ui/typography'
import { skills as allSkills } from '@/constants/homepage/skills'
import { formatWord } from '@/utils/formatWord'
import Skill from './skill'

interface Props {
  category: 'frontend' | 'backend' | 'others'
}

export default function SkillGroup({ category }: Props) {
  const skills = allSkills.filter(skill => skill.category === category)
  return (
    <div className="py-5">
      <Typography variant="h3" className="font-bold pb-4">
        {formatWord(category)}
      </Typography>
      <ul className="flex flex-wrap gap-x-5 gap-y-3">
        {skills.map(({ href, label }) => (
          <Skill key={label} label={label} href={href} />
        ))}
      </ul>
    </div>
  )
}
