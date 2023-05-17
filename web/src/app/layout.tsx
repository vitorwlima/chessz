import { GameStateContextProvider } from '@/hooks/useGameState'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chess',
  description: 'Awesome chess app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GameStateContextProvider>
        <body className={inter.className}>{children}</body>
      </GameStateContextProvider>
    </html>
  )
}