import { navLinks } from '@/constants/ui/navLinks'
import { cn } from '@/utils/cn'
import { Link } from 'react-scroll'

interface Props {
  className?: string
}

export default function NavLinks({ className }: Props) {
  return (
    <ul className={cn('gap-5', className)}>
      {navLinks.map(({ href, label }) => (
        <li
          key={label}
          className="text-base font-semibold hover:underline underline-offset-4"
        >
          <Link
            activeClass="underline"
            className="cursor-pointer"
            to={href}
            spy
            smooth
            duration={300}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
