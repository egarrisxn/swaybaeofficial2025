import FlowerMenu from '@/components/ui/flower-menu'

export function FlowerNav() {
  return (
    // <div className='fixed bottom-0 right-0 z-50'>
    <div className='z-50'>
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
