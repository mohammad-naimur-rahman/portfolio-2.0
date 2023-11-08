/* eslint-disable jsx-a11y/anchor-is-valid */

import { navLinks } from '@/constants/ui/navLinks'
import { cn } from '@/utils/cn'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-scroll'

interface Props {
  className?: string
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function NavDrawer({ className, isOpen, setIsOpen }: Props) {
  return (
    <div
      className={cn(
        'fixed top-20 w-full bg-secondary text-slate-200 transition-all duration-500 ease-in-out',
        className,
        {
          'right-0': isOpen,
          '-right-full': !isOpen,
        }
      )}
    >
      <ul className="text-center py-10">
        {navLinks.map(({ href, label }) => (
          <li key={label} className="text-base font-semibold my-10">
            <Link
              activeClass="underline"
              className="cursor-pointer"
              to={href}
              spy
              smooth
              duration={300}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
