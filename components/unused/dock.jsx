import {AnimatedDock} from '@/components/ui/animated-dock'
import {Home, Search, Bell, User} from 'lucide-react'

export function Dock() {
  return (
    <div className='relative flex h-20 flex-row items-center justify-center'>
      <AnimatedDock
        items={[
          {
            href: '/',
            icon: <Home />,
            title: 'Home',
          },
          {
            href: '/search',
            icon: <Search />,
            title: 'Search',
          },
          {
            href: '/notifications',
            icon: <Bell />,
            title: 'Notifications',
          },
          {
            href: '/profile',
            icon: <User />,
            title: 'Profile',
          },
        ]}
        largeClassName='max-w-lg'
      />
    </div>
  )
}
