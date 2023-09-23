import '@/app/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montsrerat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'getlinked - Register',
  description: 'Igniting a revolution in HR vision',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montsrerat.className}>{children}</body>
    </html>
  )
}
