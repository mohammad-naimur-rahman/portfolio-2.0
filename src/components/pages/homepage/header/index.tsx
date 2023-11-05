import Typography from '@/components/ui/typography'
import HeaderAnimation from './HeaderAnimation'
import SocialLinks from './SocialLinks'

export default function Header() {
  return (
    <header className="flex items-center gap-10 py-32">
      <section className="w-3/5">
        <Typography variant="h1" className="font-bold text-balance">
          Full Stack Web Developer, Technical Writer & Content Creator
        </Typography>
        <Typography
          variant="body"
          className="mt-7 text-lg font-light text-balance"
        >
          I&apos;m Naimur Rahman, an experienced full stack web developer
          passionate about building optimized and well-sturctured web
          application.
        </Typography>

        <SocialLinks />
      </section>

      <section className="w-2/5">
        <HeaderAnimation />
      </section>
    </header>
  )
}
