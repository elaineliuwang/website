import '../css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Nunito_Sans } from 'next/font/google'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '../components/Header'
import SectionContainer from '../components/SectionContainer'
import Footer from '../components/Footer'
import siteMetadata from '../data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
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
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${nunito_sans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        href={`${basePath}/static/favicons/favicon-smiley.ico`}
        rel="icon"
        type="image/x-icon"
      ></link>
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/favicon-smiley.ico`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white" suppressHydrationWarning>
        <ThemeProviders>
          <Analytics/>
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <div className="flex flex-col sm:flex-row">
                <Header />
                <div className="flex flex-1 flex-col sm:pt-16">
                  <main className="flex-1 sm:border-l sm:border-gray-200 sm:pl-8 dark:sm:border-gray-800">{children}</main>
                  <Footer />
                </div>
              </div>
            </SearchProvider>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
