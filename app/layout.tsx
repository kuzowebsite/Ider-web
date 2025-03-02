import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: 'ider',
  description: 'ider',
  generator: 'ider',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
