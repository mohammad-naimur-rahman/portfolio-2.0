import { BiLinkExternal } from 'react-icons/bi'

interface Props {
  href: string
  label: string
}

export default function ExternalLink({ href, label }: Props) {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      className="inline-flex gap-1 text-sky-600 items-center"
    >
      {label} <BiLinkExternal className="text-base" />
    </a>
  )
}
