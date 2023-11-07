import Typography from '@/components/ui/typography'
import HeaderAnimation from './HeaderAnimation'
import SocialLinks from './SocialLinks'

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row items-center gap-10 py-10 lg:py-20 xl:py-32">
      <section className="w-full lg:w-3/5 order-2 lg:order-1">
        <Typography variant="h1" className="font-bold text-balance">
          Web Developer, Technical Writer & Content Creator
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

      <section className="w-full lg:w-2/5 order-1 lg:order-2">
        <HeaderAnimation />
      </section>
    </header>
  )
}
