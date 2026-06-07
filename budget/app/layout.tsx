import type { Metadata } from 'next'
import '../styles.css'
import '../App.css'

export const metadata: Metadata = {
  title: 'Budget App',
  description: 'Track and manage your budget',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
