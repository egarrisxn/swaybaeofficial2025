import TwitterGrid from '@/components/twitter-grid'

export const metadata = {
  title: 'Social Page',
}

export default function SocialPage() {
  return (
    <div className='mx-auto flex min-h-screen flex-col items-center py-12'>
      <div className='my-12'>
        <TwitterGrid />
      </div>
    </div>
  )
}
