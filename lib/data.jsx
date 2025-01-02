import {TwitchIcon} from '@/components/icons/twitch-icon'
import {YoutubeIcon} from '@/components/icons/youtube-icon'
import {TiktokIcon} from '@/components/icons/tiktok-icon'
import {TwitterIcon} from '@/components/icons/twitter-icon'
import {BlueskyIcon} from '@/components/icons/bluesky-icon'
import {InstagramIcon} from '@/components/icons/instagram-icon'
import {DiscordIcon} from '@/components/icons/discord-icon'
import {SpotifyIcon} from '@/components/icons/spotify-icon'

//! NAVIGATION LINKS
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

//! MERCH CARDS
export const merchCards = [
  {id: 0, name: 'Water Bottle', designation: 'Stay Wet!', src: '/merch/bottle.webp'},
  {id: 1, name: 'Dad Cap', designation: 'Stay Shaded!', src: '/merch/cap.webp'},
  {id: 2, name: 'Long Sleeve', designation: 'Stay Covered!', src: '/merch/ls.webp'},
  {id: 3, name: 'Crewneck', designation: 'Warm Up!', src: '/merch/crew.webp'},
  {id: 4, name: 'Hoodie', designation: 'Most Comfortable!', src: '/merch/hood.webp'},
  {id: 5, name: 'T-Shirt', designation: 'Ultra Fashion!', src: '/merch/ss.webp'},
]

//! BRAND ICONS
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

//! BRAND SVGS
export const brandSvgs = [
  {src: '/brands/svgs/youtube-svg.svg', id: 1, name: 'YouTube'},
  {src: '/brands/svgs/gcx-svg.svg', id: 2, name: 'GCX'},
  {src: '/brands/svgs/hellofresh-svg.svg', id: 3, name: 'Hello Fresh'},
  {src: '/brands/svgs/twitch-svg.svg', id: 4, name: 'Twitch'},
  {src: '/brands/svgs/1000dreams-svg.svg', id: 5, name: '1000 Dreams Fund'},
  {src: '/brands/svgs/supergirl-svg.svg', id: 6, name: 'Super Girl Gamer Pro'},
  {src: '/brands/svgs/blizzard-svg.svg', id: 7, name: 'Blizzard'},
  {src: '/brands/svgs/dreamhack-svg.svg', id: 8, name: 'Dreamhack'},
]

//! SOCIAL INFO
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

//! IMAGE GRID
export const imageGrid = [
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

//! TWEET GRID
export const tweetGrid = [
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

//! ABOUT CARDS
export const aboutCards = [
  {
    title: 'Why I do this?',
    content:
      'Vivamus id velit fringilla enim egestas congue efficitur eget augue. Nullam vitae interdum massa.',
  },
  {
    title: 'Who I do this for?',
    content:
      'Vivamus id velit fringilla enim egestas congue efficitur eget augue. Nullam vitae interdum massa.',
  },
  {
    title: 'What can I do for you?',
    content:
      'Vivamus id velit fringilla enim egestas congue efficitur eget augue. Nullam vitae interdum massa.',
  },
]

//! PROFFESIONAL INFO
export const proffesionalInfo = [
  'Maecenas ex augue, consequat eget tortor sagittis, laoreet tristique nulla. Cras accumsan venenatis dui, pharetra vulputate orci cursus quis. Ut quis magna eget nisl malesuada finibus.',
  'Proin venenatis rutrum lorem, id aliquam justo vestibulum ac. Vivamus ac purus vehicula, pulvinar urna ac, tristique elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ex erat, scelerisque vitae elementum in, dignissim quis ex. Curabitur gravida efficitur luctus. Duis eleifend enim vel orci molestie placerat.',
  'Mauris efficitur quam eu lacus molestie, dignissim cursus augue scelerisque. Cras eget magna at mi facilisis ullamcorper. Fusce eget turpis commodo, sodales orci quis, commodo neque. Morbi ac mauris pretium, egestas libero nec, congue leo. Cras id ex viverra ex aliquam dapibus ut eu metus. Aliquam mollis gravida orci vel malesuada. Vivamus augue lorem, volutpat vel aliquam ut, gravida quis justo. Mauris vitae ultricies nisi. Nulla facilisi.',
  'Donec rhoncus risus semper placerat viverra. Quisque feugiat pretium tellus in porta. Morbi libero nibh, ultricies sed facilisis in, auctor at lectus. Quisque elementum nisl vel ante commodo, sed bibendum tellus aliquam.',
  'Ut ornare, leo vel blandit pellentesque, ipsum nisl commodo quam, laoreet elementum orci odio iaculis arcu. Maecenas vitae porttitor dolor, ac rutrum justo. Cras sit amet maximus quam.',
  'Mauris efficitur quam eu lacus molestie, dignissim cursus augue scelerisque. Cras eget magna at mi facilisis ullamcorper. Fusce eget turpis commodo, sodales orci quis, commodo neque. Morbi ac mauris pretium, egestas libero nec, congue leo. Cras id ex viverra ex aliquam dapibus ut eu metus. Aliquam mollis gravida orci vel malesuada. Vivamus augue lorem, volutpat vel aliquam ut, gravida quis justo. Mauris vitae ultricies nisi. Nulla facilisi.',
  'Nam non feugiat mauris, vel iaculis felis.',
]

//! PERSONAL INFO
export const personalInfo = [
  'Maecenas ex augue, consequat eget tortor sagittis, laoreet tristique nulla. Cras accumsan venenatis dui, pharetra vulputate orci cursus quis. Ut quis magna eget nisl malesuada finibus.',
  'Proin venenatis rutrum lorem, id aliquam justo vestibulum ac. Vivamus ac purus vehicula, pulvinar urna ac, tristique elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ex erat, scelerisque vitae elementum in, dignissim quis ex. Curabitur gravida efficitur luctus. Duis eleifend enim vel orci molestie placerat.',
  'Mauris efficitur quam eu lacus molestie, dignissim cursus augue scelerisque. Cras eget magna at mi facilisis ullamcorper. Fusce eget turpis commodo, sodales orci quis, commodo neque. Morbi ac mauris pretium, egestas libero nec, congue leo. Cras id ex viverra ex aliquam dapibus ut eu metus. Aliquam mollis gravida orci vel malesuada. Vivamus augue lorem, volutpat vel aliquam ut, gravida quis justo. Mauris vitae ultricies nisi. Nulla facilisi.',
  'Donec rhoncus risus semper placerat viverra. Quisque feugiat pretium tellus in porta. Morbi libero nibh, ultricies sed facilisis in, auctor at lectus. Quisque elementum nisl vel ante commodo, sed bibendum tellus aliquam.',
  'Ut ornare, leo vel blandit pellentesque, ipsum nisl commodo quam, laoreet elementum orci odio iaculis arcu. Maecenas vitae porttitor dolor, ac rutrum justo. Cras sit amet maximus quam.',
  'Mauris efficitur quam eu lacus molestie, dignissim cursus augue scelerisque. Cras eget magna at mi facilisis ullamcorper. Fusce eget turpis commodo, sodales orci quis, commodo neque. Morbi ac mauris pretium, egestas libero nec, congue leo. Cras id ex viverra ex aliquam dapibus ut eu metus. Aliquam mollis gravida orci vel malesuada. Vivamus augue lorem, volutpat vel aliquam ut, gravida quis justo. Mauris vitae ultricies nisi. Nulla facilisi.',
  'Nam non feugiat mauris, vel iaculis felis.',
]

//! WORK ACCOMPLISHMENTS
export const workAccomplishments = [
  'Nullam dui nisl, ultricies ac suscipit nec, aliquet ut tortor. In sapien leo, blandit at est iaculis, tempor imperdiet tellus. Consectetur adipiscing elit.',
  'Morbi convallis elit ut risus rhoncus, quis ullamcorper massa accumsan. Consectetur adipiscing elit. Consectetur adipiscing elit.',
  'Nulla vulputate, nibh non aliquam egestas, lacus nulla bibendum nunc, in interdum turpis diam et nisi. Consectetur adipiscing elit. Lorem ipsum.',
  'Phasellus vestibulum, urna a vestibulum sollicitudin, sapien turpis pulvinar eros, at posuere lacus sapien sed erat. Consectetur adipiscing elit.',
  'Quisque egestas sagittis lectus, sit amet rutrum orci interdum vitae. Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Consectetur adipiscing elit.',
  'Morbi maximus egestas erat, eget auctor turpis dignissim at. Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Consectetur adipiscing elit.',
  'Cras porttitor mattis laoreet. Sed congue, sem a ullamcorper sodales. Cras porttitor mattis laoreet. Sed congue, sem a ullamcorper sodales.',
  'Vivamus vulputate commodo quam in pulvinar. Cras porttitor mattis laoreet. Sed congue, sem a ullamcorper sodales. Sed congue, sem a ullamcorper sodales.',
  'Nam rhoncus euismod turpis a iaculis. Pellentesque nulla lorem, faucibus a luctus eget, sollicitudin sit amet massa, faucibus a luctus eget, sollicitudin sit amet massa.',
]
