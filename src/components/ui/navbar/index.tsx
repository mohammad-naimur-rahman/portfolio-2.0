import logo from '@/assets/images/ui/logo.png'
import Link from 'next/link'
import { Img } from '../img'
import NavLinks from './NavLinks'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  return (
    <nav className="container py-3 flex justify-between items-center backdrop-blur-lg fixed top-0 left-0 right-0 w-full z-20">
      <Link href="/">
        <Img
          src={logo}
          alt="Naimur Rahman"
          sizes="56px"
          width={56}
          height={56}
          className="w-14 h-14"
        />
      </Link>
      <NavLinks />
      <ThemeSwitcher />
    </nav>
  )
}
