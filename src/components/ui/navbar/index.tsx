'use client'

import logo from '@/assets/images/ui/logo.png'
import Link from 'next/link'
import { useState } from 'react'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { Img } from '../img'
import NavDrawer from './NavDrawer'
import NavLinks from './NavLinks'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <nav className="py-3 backdrop-blur-lg fixed top-0 left-0 right-0 w-full z-50 bg-white dark:bg-transparent bg-opacity-40">
      <div className="container flex justify-between items-center">
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
        <NavLinks className="hidden sm:flex" />
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <button type="button" onClick={() => setMobileNavOpen(prev => !prev)}>
            <HiMiniBars3BottomRight className="text-2xl cursor-pointer sm:hidden" />
          </button>
        </div>
        <NavDrawer
          className="sm:hidden"
          isOpen={mobileNavOpen}
          setIsOpen={setMobileNavOpen}
        />
      </div>
    </nav>
  )
}
