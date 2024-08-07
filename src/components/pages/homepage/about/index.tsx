import me from '@/assets/images/homepage/me.png'
import Button from '@/components/ui/button'
import ExternalLink from '@/components/ui/external-link'
import { Img } from '@/components/ui/img'
import Typography from '@/components/ui/typography'
import { configs } from '@/configs'
import { BsDownload } from 'react-icons/bs'
import { GrContact } from 'react-icons/gr'
import WorkTag from './WorkTag'

export default function About() {
  return (
    <section>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="order-2 md:order-1">
            <Typography variant="h2" className="font-bold text-balance">
              I&apos;m <span className="text-teal-500">Naimur Rahman</span>, an
              experienced full stack web developer.
            </Typography>
            <div className="flex flex-wrap gap-3 mt-5">
              <a
                href={`https://drive.google.com/uc?export=download&id=${configs.resumeId}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  value="Get My CV"
                  icon={<BsDownload />}
                  variant="secondary"
                />
              </a>
              <a href="#contact">
                <Button
                  value="Contact Me"
                  icon={<GrContact />}
                  variant="primary"
                />
              </a>
            </div>
          </div>
          <Img
            src={me}
            alt="Naimur Rahman"
            className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full order-1 md:order-2"
          />
        </div>

        <div className="space-y-5 pt-7">
          <Typography variant="body" className="text-xl text-balance">
            <span className="text-2xl">👋</span> Hey there! I&apos;m a full
            stack web developer with over 3 years of hands-on experience in
            creating optimized web applications with good user experience.
          </Typography>

          <Typography variant="body" className="text-lg">
            I consider my web development career path as an endless dynamic
            journey where I work every day, make mistakes, and learn every day.
            I build things, I break things and thus I strengthen my knowledge
            base. I spend a lot of time outside of coding reviewing senior
            developers&apos; codebases, reading blogs, searching for new
            technologies, and making myself aware of the current web development
            world because I follow the sharpening of the axe before cutting the
            wood method quite seriously. Every day, I learn and try to apply
            best practices, code optimization, good code readability,
            well-structured codebase, accessibility, and most importantly, good
            user experience.
          </Typography>

          <Typography variant="body" className="text-lg">
            I can help you build
            <WorkTag>Fullstack Web Application,</WorkTag>
            <WorkTag>Frontend Application,</WorkTag>
            <WorkTag>Professional Dashboard,</WorkTag>
            <WorkTag>Figma to code, etc</WorkTag>. I can build and maintain your
            application. View my personal project and works on{' '}
            <ExternalLink
              href="https://github.com/mohammad-naimur-rahman"
              label="Github"
            />
            . Send me an{' '}
            <ExternalLink href="mailto:naeemhasan28@gmail.com" label="Email" />{' '}
            for further communication.
          </Typography>
        </div>
      </section>
    </section>
  )
}
