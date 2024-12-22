import TwitterGrid from '@/components/twitter-grid'

export const metadata = {
  title: 'Social Page',
}

export default function SocialPage() {
  return (
    <section className='w-full py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='prose mx-auto grid grid-cols-1 xl:prose-xl dark:prose-invert'>
          <h2 className='font-serif font-black'>Social Media</h2>
          <TwitterGrid />
        </div>
      </div>
    </section>
  )
}
