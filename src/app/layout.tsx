import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zachary Eggert',
  description: 'Created by Zachary Eggert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
