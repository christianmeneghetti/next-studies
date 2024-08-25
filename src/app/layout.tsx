import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '../styles/globalicon.css'
import { UseQueryClientProvider } from '@/providers/useQueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Os memes',
  description: 'Teste de uso de ssr, csr e ppr'
}

export const experimental_ppr = true

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/icon" sizes="icon" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <UseQueryClientProvider>{children}</UseQueryClientProvider>
      </body>
    </html>
  )
}
