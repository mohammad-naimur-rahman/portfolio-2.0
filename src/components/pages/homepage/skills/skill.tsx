import DomainIcon from '@/components/ui/domain-icon'

interface Props {
  label: string
  href: string
}

export default function Skill({ label, href }: Props) {
  return (
    <li key={label}>
      <a href={href} className="flex items-center">
        <DomainIcon domain={href} />
        <p className="text-sky-700 dark:text-sky-400 underline font-normal">
          {label}
        </p>
      </a>
    </li>
  )
}
