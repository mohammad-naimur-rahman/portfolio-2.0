export interface IExperience {
  title: string
  company: {
    title: string
    href: string
  }
  start: string
  end: string
  description: Array<string>
}

export const experiences: IExperience[] = [
  {
    title: 'Fullstack Web Developer',
    company: {
      title: 'Rebel Force Tech Solutions',
      href: 'https://www.rebelforce.tech/',
    },
    start: 'January 2024',
    end: 'Present',
    description: [
      'Created and maintained web applications using Next.js, React, and Tailwind CSS.',
      'Collaborated with cross-functional teams to ensure seamless project delivery.',
      'Implemented responsive design and user-friendly interfaces.',
    ],
  },
  {
    title: 'Fullstack Web Developer',
    company: {
      title: 'LyzTech',
      href: 'https://lyztech.com/',
    },
    start: 'October 2022',
    end: 'January 2024',
    description: [
      'Developed new features for Mozilla Hubs VR and Hubs Spoke applications.',
      'Collaborated with cross-functional teams to ensure seamless project delivery.',
      'Enhanced application performance by optimizing VR rendering processes.',
    ],
  },
  {
    title: 'JavaScript/TypeScript Developer',
    company: {
      title: 'Tecooli Service OÜ',
      href: 'https://www.tecooli.com/',
    },
    start: 'June 2021',
    end: 'Sepember 2022',
    description: [
      'Spearheaded full-stack development initiatives, contributing to the successful completion of diverse projects, including dashboards, JAM stack applications, and comprehensive full-stack solutions.',
      'Proactively identified and resolved complex challenges, such as debugging and introducing new features into a large and intricate codebase.',
      'Orchestrated the management of quiz assessments and seamlessly integrated secure payment gateways to enhance the user experience and drive business growth',
    ],
  },
]
