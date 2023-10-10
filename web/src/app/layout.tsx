import '../styles/globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

const saira = Saira(
   {
      weight: [ '300', '400', '500', '600'],
      subsets: ['latin']
   }
)

export const metadata: Metadata = {
  title: 'Crochet Animals Store',
  description: 'Your crochet shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
         {children}
      </body>
    </html>
  )
}
