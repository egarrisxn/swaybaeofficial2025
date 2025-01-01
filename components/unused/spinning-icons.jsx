import {TwitchIcon} from '@/components/icons/twitch-icon'
import {YoutubeIcon} from '@/components/icons/youtube-icon'
import {TiktokIcon} from '@/components/icons/tiktok-icon'
import {TwitterIcon} from '@/components/icons/twitter-icon'
import {BlueskyIcon} from '@/components/icons/bluesky-icon'
import {InstagramIcon} from '@/components/icons/instagram-icon'
import {DiscordIcon} from '@/components/icons/discord-icon'
import {SpotifyIcon} from '@/components/icons/spotify-icon'

const socialInfo = [
  {
    title: 'Twitch',
    subtitle: '@sway_bae',
    href: 'https://www.twitch.tv/sway_bae',
    Icon: TwitchIcon,
  },
  {
    title: 'YouTube',
    subtitle: '@swaybaetv',
    href: 'https://youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA',
    Icon: YoutubeIcon,
  },
  {
    title: 'TikTok',
    subtitle: '@sway_baetv',
    href: 'https://tiktok.com/@sway_baetv',
    Icon: TiktokIcon,
  },
  {
    title: 'Twitter/X',
    subtitle: '@sway_baetv',
    href: 'https://twitter.com/sway_baetv',
    Icon: TwitterIcon,
  },
  {
    title: 'Bluesky',
    subtitle: '@Swaybae',
    href: 'https://swaybae.bsky.social',
    Icon: BlueskyIcon,
  },
  {
    title: 'Instagram',
    subtitle: '@sway_baetv',
    href: 'https://instagram.com/sway_baetv',
    Icon: InstagramIcon,
  },
  {
    title: 'Discord',
    subtitle: '@sway_bae',
    href: 'https://discord.com/invite/K73uN9k',
    Icon: DiscordIcon,
  },
  {
    title: 'Spotify',
    subtitle: '@Swaybae',
    href: 'https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq',
    Icon: SpotifyIcon,
  },
]

function getSocialColor(index) {
  const colors = [
    '#9146FF', // Twitch
    '#FF0000', // YouTube
    '#69C9D0', // TikTok
    '#1DA1F2', // Twitter/X
    '#4A90E2', // Bluesky
    '#E1306C', // Instagram
    '#7289DA', // Discord
    '#1DB954', // Spotify
  ]
  return colors[index] || '#000'
}

export function SpinningIcons() {
  return (
    <div className='relative flex min-h-screen items-center justify-center'>
      <ul className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform'>
        {socialInfo.map((social, index) => (
          <li key={index} className='list-none'>
            <a
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative m-2 block h-20 w-20 overflow-hidden rounded-full border-4 border-black bg-white dark:border-white dark:bg-black'
            >
              <span
                className='absolute inset-0 top-full transition-transform duration-500 group-hover:top-0'
                style={{background: getSocialColor(index)}}
              ></span>
              <div className='relative flex h-full w-full items-center justify-center'>
                <social.Icon
                  className='relative z-10 text-black transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-white dark:text-white'
                  width='24'
                  height='24'
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
