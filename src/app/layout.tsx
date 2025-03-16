import Navbar from '@/components/ui/navbar'
import ScrollToTop from '@/components/ui/scroll-to-top'
import { Providers } from '@/lib/Providers'
import '@/styles/globals.scss'
import { cn } from '@/utils/cn'
import 'animate.css/animate.compat.css'
import { Jost, PT_Sans as PTSans } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

const ptSans = PTSans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--jost',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          ptSans.className,
          jost.variable,
          'dark:bg-bg-primary dark:text-zinc-100 text-zinc-700 overflow-x-hidden'
        )}
      >
        <Providers>
          <Navbar />
          <div className="mt-20 container">{children}</div>
        </Providers>
        <Toaster position="top-center" />
        <ScrollToTop />
      </body>
    </html>
  )
}
