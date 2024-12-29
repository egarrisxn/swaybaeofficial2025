import './globals.css'
import {Fugaz_One, Poppins, Roboto_Serif} from 'next/font/google'
import {ThemeProvider} from './theme-provider'
// import {Analytics} from '@vercel/analytics/react'
// import {SpeedInsights} from '@vercel/speed-insights/next'

const fugazOne = Fugaz_One({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal'],
  weight: ['400'],
})

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const robotoSerif = Roboto_Serif({
  variable: '--font-serif',
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
      <body
        className={`${fugazOne.variable} ${poppins.variable} ${robotoSerif.variable} scroll-smooth antialiased`}
      >
        <ThemeProvider>
          <main className='font-sans'>{children}</main>
        </ThemeProvider>
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  )
}
