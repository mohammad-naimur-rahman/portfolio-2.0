/* eslint-disable @typescript-eslint/ban-ts-comment */
import Reveal from '@/components/ui/reveal'
import { socialLinks } from '@/constants/homepage/header/socialLinks'

export default function SocialLinks() {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
      {socialLinks?.map((value, index) => (
        <Reveal
          animateIn="fadeInUp"
          offset={0}
          delay={index * 100}
          animatePreScroll
          key={value.label}
        >
          <li key={value.label}>
            <a
              href={value.href}
              rel="noreferer noopener noreferrer"
              target="_blank"
              className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
            >
              {/** @ts-ignore */}
              <value.icon
                className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />{' '}
              &nbsp;
              {value.label}
            </a>
          </li>
        </Reveal>
      ))}
    </ul>
  )
}
