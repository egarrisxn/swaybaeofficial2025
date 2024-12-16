import FlowerMenu from './ui/flower-menu'

export default function FlowerNav() {
  return (
    <div className='fixed bottom-0 right-0 z-50'>
      <FlowerMenu
        menuItems={[
          {href: '/contact', text: 'Contact-'},
          {href: '/about', text: 'About-'},
          {href: '/calendar', text: 'Calendar-'},
          {href: '/blog', text: 'Blog-'},
          {href: '/community', text: 'Community-'},
          {href: 'https://shop.swaybae.net', text: 'Merch-'},
        ]}
      />
    </div>
  )
}
