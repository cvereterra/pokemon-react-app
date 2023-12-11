import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>Lista de Pokémon</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
