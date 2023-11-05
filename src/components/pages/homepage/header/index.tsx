import Typography from '@/components/ui/typography'
import HeaderAnimation from './HeaderAnimation'

export default function Header() {
  return (
    <header className="flex items-center gap-5 py-32">
      <section className="w-3/5">
        <Typography variant="h1" className="font-bold">
          Full Stack Web Developer, Technical Writer <br /> & Content Creator
        </Typography>
        <Typography
          variant="body"
          className="mt-7 text-xl font-light text-balance"
        >
          I&apos;m Naimur Rahman, an experienced frontend developer passionate
          about learning and building open-source software that is beneficial to
          developers and the world at large.
        </Typography>
      </section>

      <section className="w-2/5">
        <HeaderAnimation />
      </section>
    </header>
  )
}
