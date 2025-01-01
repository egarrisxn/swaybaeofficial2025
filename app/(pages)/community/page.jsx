import {CommunityHeader} from '@/components/community/community-header'
import TierList from '@/components/community/tier-list'

export const metadata = {
  title: 'Community Page',
}

export default function CommunityPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12 dark:from-purple-950 dark:to-pink-950'>
      <div className='container mx-auto my-24 max-w-7xl space-y-12 px-4 py-8'>
        <CommunityHeader />
        <TierList />
      </div>
    </div>
  )
}
