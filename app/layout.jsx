import './globals.css'
import {Poppins, Geist_Mono} from 'next/font/google'
import {ThemeProvider} from './theme-provider'
// import {Analytics} from '@vercel/analytics/react'
// import {SpeedInsights} from '@vercel/speed-insights/next'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://swaybae.net'),
  title: 'Sway Bae Official',
  description: 'The *NEW* site for Sway Bae & The Bae Squad!',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'swaybae, sway_bae, swaybaetv, sway, bae, swaybaenet, swaybaecom, thebaesquad, the-bae-squad, baesquad, bae_squad, swaybae-twitch, swaybae-twitter, swaybae-youtube, swaybae-discord, swaybae-instagram, swaybae-tiktok, swaybae-merch, swaybae-store, swaybae-shop, swaybae-gaming, hearthstone, blizzard, streamer, stream, twitch, twitch-streamer, twitchtv, blog, swaybae-blog',
  ],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sway Bae | Creator of Chaos',
    url: 'https://swaybae.net',
    siteName: 'Swaybae.net',
    images: [
      {
        url: `https://swaybae.net/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'The official page for Sway Bae & The Bae Squad!',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    creator: '@sway_baeTV',
    site: '@sway_baeTV',
    title: 'Sway Bae | Creator of Chaos',
    images: [
      {
        url: `https://swaybae.net/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: 'The official page for Sway Bae & The Bae Squad!',
      },
    ],
  },
  icons: {
    shortcut: 'https://swaybae.net/favicon.ico',
  },
}

export const viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#f8f8f8'},
    {media: '(prefers-color-scheme: dark)', color: '#121313'},
  ],
}

export default async function RootLayout({children}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.variable} ${geistMono.variable} scroll-smooth antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='font-sans'>{children}</main>
        </ThemeProvider>
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  )
}
