import { navLinks } from '@/constants/ui/navLinks'
import Link from 'next/link'

export default function NavLinks() {
  return (
    <ul className="flex gap-5">
      {navLinks.map(({ href, label }) => (
        <li key={label} className="text-base font-semibold">
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}
