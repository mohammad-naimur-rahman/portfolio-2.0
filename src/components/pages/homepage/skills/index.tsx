import animationData from '@/assets/lottiefiles/skills.json'
import Heading from '@/components/ui/heading'
import SkillGroup from './SkillGroup'

export default function Skills() {
  return (
    <section>
      <Heading animationData={animationData}>Skills</Heading>
      <SkillGroup category="frontend" />
      <SkillGroup category="backend" />
      <SkillGroup category="others" />
    </section>
  )
}
