import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import Header from './components/header'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "楠 / NaN",
    template: "%s | 楠 / NaN",
  },
  description: "楠的个人主页",
  openGraph: {
    title: "楠 / NaN",
    description: "楠的个人主页",
    url: baseUrl,
    siteName: "楠 / NaN",
    locale: 'zh_CN',
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
          <Header />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
