import {ScrollToTop} from './scroll-to-top'
import {BackHome} from './back-home'
import {SocialIcons} from './social-icons'
// import {SpotifyNowPlaying} from './spotify-now-playing'

export function Footer({hasScroll = false}) {
  return (
    <footer className='w-full border-t-2'>
      <div className='grid grid-cols-1 place-items-center gap-4 p-6 md:gap-5 md:p-8'>
        <section className='flex w-full flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:gap-0'>
          <div className='order-2 md:order-1'>Spotify Goes Here</div>
          {/* <div className='order-2 md:order-1'><SpotifyNowPlaying /></div> */}
          <div className='order-1 md:order-2'>
            {hasScroll && <ScrollToTop />}
            {!hasScroll && <BackHome />}
          </div>
        </section>
        <section className='flex w-full flex-col items-center gap-7 text-center md:flex-row md:justify-between md:gap-0'>
          <p className='order-2 bg-gradient-to-bl from-primary/90 via-primary/70 to-primary/50 bg-clip-text font-semibold tracking-tight text-transparent md:order-1 md:justify-start lg:text-lg'>
            © 2024 Sway Bae. All rights reserved.
          </p>
          <div className='order-1 flex flex-row justify-center gap-2 md:order-2 md:justify-end'>
            <SocialIcons />
          </div>
        </section>
      </div>
    </footer>
  )
}
