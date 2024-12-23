import {SocialCard} from '@/components/social-card'
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

export default function SocialSection() {
  return (
    <section className='bg-gradient-to-tr from-slate-300 via-slate-200 to-slate-100 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950'>
      <div className='space-y-4 pb-10 pt-8 sm:pb-12 md:space-y-5 md:pb-14 md:pt-12 lg:pb-16 lg:pt-14 xl:pb-20 xl:pt-[4.5rem] 2xl:space-y-6'>
        <h5 className='text-center text-sm font-semibold uppercase lg:text-base'>
          Lets get social
        </h5>
        <div className='flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16'>
          {socials.map(({title, subtitle, href, Icon}) => (
            <SocialCard key={title} title={title} subtitle={subtitle} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
