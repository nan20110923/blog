import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "NaN's Blog",
    template: "%s | NaN's Blog",
  },
  description: "NaN's Blog",
  openGraph: {
    title: "NaN's Blog",
    description: "NaN's Blog",
    url: baseUrl,
    siteName: "NaN's Blog",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-12 flex flex-col px-2 md:px-10 md:py-8 shadow-main">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
