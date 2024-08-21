import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { UseQueryClientProvider } from '@/providers/useQueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Os memes',
  description: 'Teste de uso de ssr, csr e ppr'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/icon" sizes="icon" />
      </head>
      <body className={inter.className}>
        <UseQueryClientProvider>{children}</UseQueryClientProvider>
      </body>
    </html>
  )
}
