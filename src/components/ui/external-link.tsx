import { cn } from '@/utils/cn'
import { BiLinkExternal } from 'react-icons/bi'

interface Props {
  href: string
  label: string
  className?: string
}

export default function ExternalLink({ href, label, className }: Props) {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      className={cn('inline-flex gap-1 text-sky-600 items-center', className)}
    >
      {label} <BiLinkExternal className="text-base" />
    </a>
  )
}
