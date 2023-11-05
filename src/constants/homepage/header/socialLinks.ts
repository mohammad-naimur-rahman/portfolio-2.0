import {
  BiLogoCodepen,
  BiLogoDiscord,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoMedium,
  BiLogoStackOverflow,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi'

interface Props {
  href: string
  icon: unknown
  label: string
}

export const socialLinks: Props[] = [
  {
    label: 'Github',
    href: 'https://github.com/mohammad-naimur-rahman',
    icon: BiLogoGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammad-naimur-rahman/',
    icon: BiLogoLinkedin,
  },
  {
    label: 'Medium',
    href: 'https://naimur-rahman-dev.medium.com/',
    icon: BiLogoMedium,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/naimurrrrrrr',
    icon: BiLogoTwitter,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/naimurrrrrrr',
    icon: BiLogoFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/naimurrrrrrr',
    icon: BiLogoInstagram,
  },
  {
    label: 'Codepen',
    href: 'https://codepen.io/naimur-rahman-dev',
    icon: BiLogoCodepen,
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/829283275846975488',
    icon: BiLogoDiscord,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/codewithnaimur',
    icon: BiLogoYoutube,
  },
  {
    label: 'Stackoverflow',
    href: 'https://stackoverflow.com/users/8364864/naimur',
    icon: BiLogoStackOverflow,
  },
]
