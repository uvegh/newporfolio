import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cente Portfolio',
  description: 'Full stack software developer for hire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <body className={`${inter.className}`}>{children}</body>
      
      
    </html>
  )
}
