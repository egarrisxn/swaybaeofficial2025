import {TwitchIcon} from '@/components/icons/twitch-icon'
import {YoutubeIcon} from '@/components/icons/youtube-icon'
import {TiktokIcon} from '@/components/icons/tiktok-icon'
import {TwitterIcon} from '@/components/icons/twitter-icon'
import {BlueskyIcon} from '@/components/icons/bluesky-icon'
import {InstagramIcon} from '@/components/icons/instagram-icon'
import {DiscordIcon} from '@/components/icons/discord-icon'
import {SpotifyIcon} from '@/components/icons/spotify-icon'

//! NAVIGATION
export const navLinks = [
  // {href: '/', label: 'Home'},
  {href: '/about', label: 'About'},
  {href: '/calendar', label: 'Calendar'},
  {href: '/community', label: 'Community'},
  {href: '/blog', label: 'Blog'},
  {href: '/contact', label: 'Contact'},
  {href: '/social', label: 'Social'},
  {href: '/media-kit', label: 'Media Kit'},
  {href: '/faq', label: 'FAQ'},
  {href: 'https://shop.swaybae.net/', label: 'Store', external: true},
]

//! BRANDS
export const brandIcons = [
  {img: '/brands/youtube.png', href: 'https://youtube.com'},
  {img: '/brands/gcx.png', href: 'https://gcxevent.com'},
  {img: '/brands/hellofresh.png', href: 'https://hellofresh.com'},
  {img: '/brands/twitch.png', href: 'https://twitch.tv'},
  {img: '/brands/1000dreams.png', href: 'https://1000dreamsfund.org'},
  {img: '/brands/supergirl.png', href: 'https://supergirlgamerpro.com'},
  {img: '/brands/blizzard.png', href: 'https://blizzard.com'},
  {img: '/brands/dreamhack.png', href: 'https://dreamhack.com'},
]

//! SOCIALS
export const socialInfo = [
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

//! MERCH
export const merchCards = [
  {id: 0, name: 'Water Bottle', designation: 'Stay Wet!', src: '/merch/bottle.webp'},
  {id: 1, name: 'Dad Cap', designation: 'Stay Shaded!', src: '/merch/cap.webp'},
  {id: 2, name: 'Long Sleeve', designation: 'Stay Covered!', src: '/merch/ls.webp'},
  {id: 3, name: 'Crewneck', designation: 'Warm Up!', src: '/merch/crew.webp'},
  {id: 4, name: 'Hoodie', designation: 'Most Comfortable!', src: '/merch/hood.webp'},
  {id: 5, name: 'T-Shirt', designation: 'Ultra Fashion!', src: '/merch/ss.webp'},
]
