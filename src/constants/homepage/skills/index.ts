import { AiOutlineForm } from 'react-icons/ai'
import {
  BiLibrary,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoGithub,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoStripe,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import {
  SiAdguard,
  SiAuth0,
  SiCommitlint,
  SiEslint,
  SiExpress,
  SiMaterialdesign,
  SiMongoose,
  SiNextdotjs,
  SiNotion,
  SiPrettier,
  SiPrisma,
  SiStrapi,
  SiWebauthn,
  SiZod,
} from 'react-icons/si'

import { BsCalendarCheck } from 'react-icons/bs'

interface Props {
  label: string
  icon: unknown
  href: string
  category: 'frontend' | 'backend' | 'others'
}

export const skills: Props[] = [
  {
    label: 'React js',
    icon: BiLogoReact,
    href: 'https://react.dev/',
    category: 'frontend',
  },
  {
    label: 'Next js',
    icon: SiNextdotjs,
    href: 'https://nextjs.org/',
    category: 'frontend',
  },
  {
    label: 'JavaScript',
    icon: BiLogoJavascript,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'frontend',
  },
  {
    label: 'TypeScript',
    icon: BiLogoTypescript,
    href: 'https://www.typescriptlang.org/',
    category: 'frontend',
  },
  {
    label: 'Raw CSS',
    icon: BiLogoCss3,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    category: 'frontend',
  },
  {
    label: 'Tailwind CSS',
    icon: BiLogoTailwindCss,
    href: 'https://tailwindcss.com/',
    category: 'frontend',
  },
  {
    label: 'Shadcn UI',
    icon: BiLibrary,
    href: 'https://ui.shadcn.com/',
    category: 'frontend',
  },
  {
    label: 'Material UI',
    icon: SiMaterialdesign,
    href: 'https://mui.com/',
    category: 'frontend',
  },
  {
    label: 'Redux Toolkit',
    icon: BiLogoRedux,
    href: 'https://redux-toolkit.js.org/',
    category: 'frontend',
  },
  {
    label: 'React Hook Form',
    icon: AiOutlineForm,
    href: 'https://react-hook-form.com/',
    category: 'frontend',
  },
  {
    label: 'Zod',
    icon: SiZod,
    href: 'https://zod.dev/',
    category: 'frontend',
  },
  {
    label: 'Next Auth',
    icon: SiAuth0,
    href: 'https://next-auth.js.org/',
    category: 'frontend',
  },
  {
    label: 'Node js',
    icon: BiLogoNodejs,
    href: 'https://nodejs.org/en',
    category: 'backend',
  },
  {
    label: 'Express js',
    icon: SiExpress,
    href: 'https://expressjs.com/',
    category: 'backend',
  },
  {
    label: 'MongoDB',
    icon: BiLogoMongodb,
    href: 'https://www.mongodb.com/',
    category: 'backend',
  },
  {
    label: 'Mongoose',
    icon: SiMongoose,
    href: 'https://mongoosejs.com/',
    category: 'backend',
  },
  {
    label: 'PostgreSQL',
    icon: BiLogoPostgresql,
    href: 'https://www.postgresql.org/',
    category: 'backend',
  },
  {
    label: 'Prisma',
    icon: SiPrisma,
    href: 'https://www.prisma.io/',
    category: 'backend',
  },
  {
    label: 'JWT Auth',
    icon: SiWebauthn,
    href: 'https://jwt.io/introduction',
    category: 'backend',
  },
  {
    label: 'Firebase',
    icon: BiLogoFirebase,
    href: 'https://firebase.google.com/',
    category: 'backend',
  },
  {
    label: 'Strapi',
    icon: SiStrapi,
    href: 'https://strapi.io/',
    category: 'backend',
  },
  {
    label: 'Stripe',
    icon: BiLogoStripe,
    href: 'https://stripe.com/en-gb-us',
    category: 'backend',
  },
  {
    label: 'Git',
    icon: BiLogoGit,
    href: 'https://git-scm.com/',
    category: 'others',
  },
  {
    label: 'Github',
    icon: BiLogoGithub,
    href: 'https://github.com/',
    category: 'others',
  },
  {
    label: 'ESLint',
    icon: SiEslint,
    href: 'https://eslint.org/',
    category: 'others',
  },
  {
    label: 'Prettier',
    icon: SiPrettier,
    href: 'https://prettier.io/',
    category: 'others',
  },
  {
    label: 'Husky',
    icon: SiAdguard,
    href: 'https://typicode.github.io/husky/',
    category: 'others',
  },
  {
    label: 'Lint Staged',
    icon: SiCommitlint,
    href: 'https://github.com/lint-staged/lint-staged',
    category: 'others',
  },
  {
    label: 'winston',
    icon: BsCalendarCheck,
    href: 'https://github.com/winstonjs/winston',
    category: 'others',
  },
  {
    label: 'Notion',
    icon: SiNotion,
    href: 'https://www.notion.so/',
    category: 'others',
  },
]
