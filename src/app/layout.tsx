import Navbar from '@/components/ui/navbar'
import { Providers } from '@/lib/Providers'
import '@/styles/globals.scss'
import { cn } from '@/utils/cn'
import type { Metadata } from 'next'
import { Jost, Nunito } from 'next/font/google'
import { ReactNode } from 'react'

const nunito = Nunito({ subsets: ['latin'] })

const jost = Jost({
  subsets: ['latin'],
  variable: '--jost',
})

export const metadata: Metadata = {
  title: 'Naimur Rahman',
  description: 'Full Stack Web Developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(nunito.className, jost.variable)}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
