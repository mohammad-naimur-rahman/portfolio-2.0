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
    title: 'JavaScript/TypeScript Developer',
    company: {
      title: 'Tecooli Service OÜ',
      href: 'https://www.tecooli.com/',
    },
    start: 'June 2021',
    end: 'Present',
    description: [
      'Spearheaded full-stack development initiatives, contributing to the successful completion of diverse projects, including dashboards, JAM stack applications, and comprehensive full-stack solutions.',
      'Proactively identified and resolved complex challenges, such as debugging and introducing new features into a large and intricate codebase.',
      'Orchestrated the management of quiz assessments and seamlessly integrated secure payment gateways to enhance the user experience and drive business growth',
    ],
  },
]
