import Genius from '@/assets/images/homepage/projects/genius.png'
import picturesque from '@/assets/images/homepage/projects/picturesque.jpg'
import wedPortraits from '@/assets/images/homepage/projects/wed-portraits.jpg'
import { StaticImageData } from 'next/image'
import {
  BiLinkExternal,
  BiLogoGithub,
  BiLogoYoutube,
  BiServer,
} from 'react-icons/bi'

export interface IProject {
  category: 'featured' | 'general'
  title: string
  description: string
  href: string
  stack: string[]
  image: StaticImageData
  links: {
    href: string
    icon: unknown
  }[]
}

export const projects: IProject[] = [
  {
    category: 'featured',
    title: 'Genius+',
    description:
      'Genius+ is a full-stack web application with the touch of AI to help students learn better',
    href: 'https://genius-plus-frontend.vercel.app/',
    image: Genius,
    stack: [
      'Next js',
      'TypeScript',
      'Redux',
      'RTK Query',
      'Shadcn UI',
      'Express js',
      'OpenAI API',
      'PostgreSQL',
    ],
    links: [
      {
        href: 'https://github.com/mohammad-naimur-rahman/genius-plus-frontend',
        icon: BiLogoGithub,
      },
      {
        href: 'https://github.com/mohammad-naimur-rahman/genius-plus-server',
        icon: BiServer,
      },
      {
        href: 'https://genius-plus-frontend.vercel.app/',
        icon: BiLinkExternal,
      },
    ],
  },
  {
    category: 'featured',
    title: 'Wed Portraits Photography',
    description:
      'Wed Portraits is a dynamic, full-stack web application meticulously crafted using the powerful MERN Stack',
    href: 'https://wed-portraits.vercel.app/',
    image: wedPortraits,
    stack: [
      'Next js',
      'TypeScript',
      'Shadcn UI',
      'Node js',
      'MongoDB',
      'Stripe',
    ],
    links: [
      {
        href: 'https://github.com/mohammad-naimur-rahman/wed-portraits-frontend',
        icon: BiLogoGithub,
      },
      {
        href: 'https://github.com/mohammad-naimur-rahman/wed-portraits-server',
        icon: BiServer,
      },
      {
        href: 'https://www.youtube.com/watch?v=yaHh74SrBdM',
        icon: BiLogoYoutube,
      },
      {
        href: 'https://wed-portraits.vercel.app/',
        icon: BiLinkExternal,
      },
    ],
  },
  {
    category: 'featured',
    title: 'Picturesque',
    description:
      'Picturesque stands as a remarkable full-stack application, artfully crafted using the JAM Stack architecture, offering a harmonious blend of modern technologies and elegant design',
    href: 'https://picturesque-next.vercel.app/',
    image: picturesque,
    stack: ['Next js', 'Tailwind CSS', 'Strapi CMS', 'PostgreSQL'],
    links: [
      {
        href: 'https://github.com/mohammad-naimur-rahman/Picturesque',
        icon: BiLogoGithub,
      },
      {
        href: 'https://www.youtube.com/watch?v=yZ8u_p5wu7o',
        icon: BiLogoYoutube,
      },
      {
        href: 'https://picturesque-next.vercel.app/',
        icon: BiLinkExternal,
      },
    ],
  },
]
