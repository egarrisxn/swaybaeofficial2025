import TwitterGrid from '@/components/twitter-grid'

export const metadata = {
  title: 'Social Page',
}

export default function SocialPage() {
  return (
    <div className='my-24 grid place-items-center gap-8'>
      <h1 className='text-2xl font-medium'>Social Page</h1>
      <TwitterGrid />
    </div>
  )
}
