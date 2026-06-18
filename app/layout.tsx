import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boucherie-gharbi-biganos.fr'),
  title: 'Boucherie Halal & Primeur à Biganos | Boucherie Primeur Gharbi',
  description:
    'Boucherie halal et primeur à Biganos (33280). Viande halal (bœuf, agneau, veau, volaille), fruits et légumes frais et produits du quotidien. Ouvert 7j/7 de 8h à 21h. ☎ 07 46 24 47 44',
  keywords: [
    'boucherie halal Biganos',
    'viande halal Biganos',
    'primeur Biganos',
    'fruits légumes Biganos',
    'boucherie Biganos',
    'halal Bassin Arcachon',
  ],
  authors: [{ name: 'Boucherie Primeur Gharbi' }],
  openGraph: {
    title: 'Boucherie Halal & Primeur à Biganos | Boucherie Primeur Gharbi',
    description:
      'Viande halal, fruits et légumes frais et produits du quotidien à Biganos. Ouvert 7j/7 de 8h à 21h.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Boucherie Primeur Gharbi',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#C1121F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
