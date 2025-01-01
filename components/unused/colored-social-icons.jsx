import Bluesky from '@/components/svgs/bluesky'
import Discord from '@/components/svgs/discord'
import Instagram from '@/components/svgs/instagram'
import Spotify from '@/components/svgs/spotify'
import TikTok from '@/components/svgs/tiktok'
import Twitch from '@/components/svgs/twitch'
import XformerlyTwitter from '@/components/svgs/x'
import YouTube from '@/components/svgs/youtube'
import {TooltipButton} from '@/components/tooltip-button'

const newSocials = [
  {
    href: 'https://www.twitch.tv/sway_bae',
    title: 'Twitch',
    Icon: Twitch,
  },
  {
    href: 'https://m.youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA',
    title: 'YouTube',
    Icon: YouTube,
  },
  {
    href: 'https://twitter.com/sway_baetv',
    title: 'Twitter/X',
    Icon: XformerlyTwitter,
  },
  {
    href: 'https://twitter.com/sway_baetv',
    title: 'Bluesky',
    Icon: Bluesky,
  },
  {
    href: 'https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq',
    title: 'Spotify',
    Icon: Spotify,
  },
  {
    href: 'https://www.instagram.com/sway_baetv',
    title: 'Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://discord.com/invite/K73uN9k',
    title: 'Discord',
    Icon: Discord,
  },
  {
    href: 'https://www.tiktok.com/@sway_baetv',
    title: 'TikTok',
    Icon: TikTok,
  },
]

export function ColoredSocialIcons() {
  return (
    <div className='flex flex-row gap-4'>
      {newSocials.map((social) => (
        <TooltipButton
          href={social.href}
          key={social.title}
          Icon={social.Icon}
          title={social.title}
          variant='ghost'
          className='d size-16 rounded-3xl shadow-lg'
        />
      ))}
    </div>
  )
}
