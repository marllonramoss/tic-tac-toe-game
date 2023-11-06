import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { GameProvider } from '@/contexts/GameContext'

 '@/contexts/GameContext'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className='flex justify-center items-center h-screen'>
          <GameProvider>{children}</GameProvider>
        </div>
        </body>
    </html>
  )
}
