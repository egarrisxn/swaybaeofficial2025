import './globals.css'
import {Poppins, Geist_Mono} from 'next/font/google'
import {ThemeProvider} from './theme-provider'

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
  title: 'Sway Bae Offical 2025',
  description: 'The *NEW* site for full-time streamer & content creator, Sway Bae!',
}

export default function RootLayout({children}) {
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
      </body>
    </html>
  )
}
