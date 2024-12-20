import {ScrollToTop} from '@/components/scroll-to-top'
import {TooltipButton} from '@/components/tooltip-button'
import {FaTwitch, FaXTwitter} from 'react-icons/fa6'
import {BsTiktok, BsInstagram} from 'react-icons/bs'
import {FiYoutube} from 'react-icons/fi'
import {RxDiscordLogo} from 'react-icons/rx'
import {SlSocialSpotify} from 'react-icons/sl'

export const socials = [
  {title: 'Twitch', subtitle: '@sway_bae', href: 'https://www.twitch.tv/sway_bae', Icon: FaTwitch},
  {
    title: 'YouTube',
    subtitle: '@swaybaetv',
    href: 'https://youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA',
    Icon: FiYoutube,
  },
  {
    title: 'TikTok',
    subtitle: '@sway_baetv',
    href: 'https://tiktok.com/@sway_baetv',
    Icon: BsTiktok,
  },
  {
    title: 'Twitter/X',
    subtitle: '@sway_baetv',
    href: 'https://twitter.com/sway_baetv',
    Icon: FaXTwitter,
  },
  {
    title: 'Discord',
    subtitle: '@sway_bae',
    href: 'https://discord.com/invite/K73uN9k',
    Icon: RxDiscordLogo,
  },
  {
    title: 'Instagram',
    subtitle: '@sway_baetv',
    href: 'https://instagram.com/sway_baetv',
    Icon: BsInstagram,
  },
  {
    title: 'Spotify',
    subtitle: '@Swaybae',
    href: 'https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq',
    Icon: SlSocialSpotify,
  },
]

export default function LandingFooter() {
  return (
    <footer className='w-full border-t dark:border-foreground'>
      <div className='grid grid-cols-1 place-items-center gap-4 p-8 md:gap-6'>
        <section className='flex w-full flex-row items-center justify-center md:justify-end'>
          <ScrollToTop />
        </section>
        <section className='flex w-full flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:gap-0'>
          <p className='order-2 bg-gradient-to-bl from-primary to-secondary bg-clip-text font-semibold tracking-tight text-transparent md:order-1 lg:text-lg'>
            © 2024 Sway Bae. All rights reserved.
          </p>
          <div className='order-1 flex flex-row gap-2 md:order-2'>
            {socials.map((social) => (
              <TooltipButton
                className='lg:p-3.5'
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
