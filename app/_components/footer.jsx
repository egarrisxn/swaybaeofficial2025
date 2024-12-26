import {socials} from '@/lib/data'
import {TooltipButton} from '@/components/tooltip-button'
// import {SpotifyPlayer} from '@/components/spotify-player'
import {ScrollToTop} from './scroll-to-top'
import {BackHome} from './back-home'

export function Footer({hasScroll = false}) {
  return (
    <footer className='w-full border-t-2'>
      <div className='grid grid-cols-1 place-items-center gap-4 p-6 md:gap-5 md:p-8'>
        {/* Scroll to Top Section */}

        <section className='flex w-full flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:gap-0'>
          <div className='order-2 md:order-1'>{/* <SpotifyPlayer /> */} Spotify Goes Here</div>
          <div className='order-1 md:order-2'>
            {hasScroll && <ScrollToTop />}
            {!hasScroll && <BackHome />}
          </div>
        </section>

        {/* Content Section */}
        <section className='flex w-full flex-col items-center gap-7 text-center md:flex-row md:justify-between md:gap-0'>
          <p className='order-2 bg-gradient-to-bl from-primary to-secondary bg-clip-text font-semibold tracking-tight text-transparent md:order-1 md:justify-start lg:text-lg'>
            © 2024 Sway Bae. All rights reserved.
          </p>
          <div className='order-1 flex flex-row justify-center gap-2 md:order-2 md:justify-end'>
            {socials.map((social) => (
              <TooltipButton
                href={social.href}
                key={social.title}
                Icon={social.Icon}
                size='icon'
                title={social.title}
                variant='icon'
              />
            ))}
          </div>
        </section>
      </div>
    </footer>
  )
}
