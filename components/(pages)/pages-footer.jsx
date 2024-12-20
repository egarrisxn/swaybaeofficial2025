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

export default function PagesFooter() {
  return (
    <footer className='w-full border-t dark:border-foreground'>
      <div className='grid grid-cols-1 place-items-center gap-4 p-8 md:grid-cols-2 md:gap-0'>
        <section className='order-2 w-full text-center md:text-start lg:order-1'>
          <p className='bg-gradient-to-bl from-primary to-secondary bg-clip-text font-semibold tracking-tight text-transparent'>
            © 2024 Sway Bae. All rights reserved.
          </p>
        </section>
        <section className='order-1 flex w-full flex-row items-center justify-center gap-2 md:order-2 md:justify-end'>
          <>
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
          </>
        </section>
      </div>
    </footer>
  )
}
