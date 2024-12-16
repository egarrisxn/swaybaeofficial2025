import Image from 'next/image'
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

export const merch = [
  {
    id: 0,
    name: 'Watter Bottle',
    designation: 'Stay Wet!',
    content: (
      <Image
        src='/merch/bottle.webp'
        alt='test0'
        width='384'
        height='550'
        className='flex h-auto w-fit min-w-60 max-w-96 rounded-2xl object-cover'
      />
    ),
  },
  {
    id: 1,
    name: 'Dad Cap',
    designation: 'Stay Shaded!',
    content: (
      <Image
        src='/merch/cap.webp'
        alt='test1'
        width='384'
        height='550'
        className='flex h-auto w-fit min-w-60 max-w-96 rounded-2xl object-cover'
      />
    ),
  },
  {
    id: 2,
    name: 'Long Sleeve',
    designation: 'Stay Covered!',
    content: (
      <Image
        src='/merch/ls.webp'
        alt='test2'
        width='384'
        height='550'
        className='flex h-auto w-fit min-w-60 max-w-96 rounded-2xl object-cover'
      />
    ),
  },
  {
    id: 3,
    name: 'Crewneck',
    designation: 'Warm Up!',
    content: (
      <Image
        src='/merch/crew.webp'
        alt='test2'
        width='384'
        height='550'
        className='flex h-auto w-fit min-w-60 max-w-96 rounded-2xl object-cover'
      />
    ),
  },
  {
    id: 4,
    name: 'Hoodie',
    designation: 'Most Comfortable!',
    content: (
      <Image
        src='/merch/hood.webp'
        alt='test2'
        width='384'
        height='550'
        className='flex h-auto w-fit min-w-60 max-w-96 rounded-2xl object-cover'
      />
    ),
  },
  {
    id: 5,
    name: 'T-Shirt',
    designation: 'Ultra Fashion!',
    content: (
      <Image
        src='/merch/ss.webp'
        alt='test2'
        width='384'
        height='550'
        className='flex h-auto w-fit min-w-60 max-w-96 rounded-2xl object-cover'
      />
    ),
  },
]

export const brands = [
  {img: '/brands/supergirl.png', href: 'https://supergirlgamerpro.com'},
  {img: '/brands/blizzard.png', href: 'https://blizzard.com'},
  {img: '/brands/hellofresh.png', href: 'https://hellofresh.com'},
  {img: '/brands/twitch.png', href: 'https://twitch.tv'},
  {img: '/brands/1000dreams.png', href: 'https://1000dreamsfund.org'},
  {img: '/brands/youtube.png', href: 'https://youtube.com'},
  {img: '/brands/gcx.png', href: 'https://gcxevent.com'},
  {img: '/brands/dreamhack.png', href: 'https://dreamhack.com'},
]

export const images = [
  '/grid/1.jpg',
  '/grid/2.jpg',
  '/grid/3.jpg',
  '/grid/4.jpg',
  '/grid/5.jpg',
  '/grid/6.jpg',
  '/grid/7.jpg',
  '/grid/8.jpg',
  '/grid/9.jpg',
]

export const tweets = [
  '1864408798363877686',
  '1860055259458208144',
  '1857090484671217807',
  '1854166093637587390',
  '1849671142249746535',
  '1849656071335313490',
  '1849484412745880015',
  '1847413898145632618',
  '1845964584902861302',
  '1843079756717474218',
  '1842599642627989733',
]
