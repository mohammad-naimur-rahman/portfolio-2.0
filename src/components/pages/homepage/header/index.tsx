import Typography from '@/components/ui/typography'
// import HeaderAnimation from './HeaderAnimation'
import Button from '@/components/ui/button'
import ExternalLink from '@/components/ui/external-link'
import { configs } from '@/configs'
import { lazy, Suspense } from 'react'
import { BsDownload } from 'react-icons/bs'
import { GrContact } from 'react-icons/gr'
import WorkTag from '../about/WorkTag'
import SocialLinks from './SocialLinks'

const HeaderAnimation = lazy(() => import('./HeaderAnimation'))

export default function Header() {
  return (
    <header className="py-10 lg:py-20 xl:py-32 min-h-screen">
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <section className="w-full lg:w-3/5 order-2 lg:order-1">
          <h1 className="text-5xl font-bold text-balance mb-4">
            Hi, I&apos;m <span className="text-teal-500">Naimur Rahman</span>
          </h1>
          <h2 className="text-4xl font-bold text-balance">
            Full Stack Web Developer, Technical Writer & Content Creator
          </h2>

          <Typography
            variant="body"
            className="mt-7 text-lg font-light text-balance"
          >
            👋 I&apos;m a full-stack web developer with almost four years of
            experience in building optimized, user-friendly web applications. I
            see my career as a continuous learning journey—building, breaking,
            and improving my skills daily. Beyond coding, I actively explore
            senior developers&apos; codebases, stay updated on new technologies,
            and prioritize best practices like clean code, accessibility, and
            performance optimization. My approach is to sharpen my skills
            constantly, ensuring high-quality development and a great user
            experience.
          </Typography>

          <SocialLinks />
        </section>
        <section className="w-full lg:w-2/5 order-1 lg:order-2">
          <Suspense
            fallback={
              <div className="w-1/3 h-[30vh] bg-slate-500 dark:bg-slate-600 animate-pulse bg-opacity-40 dark:bg-opacity-40" />
            }
          >
            <HeaderAnimation />
          </Suspense>
        </section>
      </section>

      <section>
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
            <Button value="Contact Me" icon={<GrContact />} variant="primary" />
          </a>
        </div>

        <div className="space-y-5 pt-7">
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
    </header>
  )
}
