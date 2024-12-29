import {notFound} from 'next/navigation'
import {loadBlog} from '@/lib/sanity/loadQuery'
import PageHeader from '@/components/(blog)/page-header'
import AllPosts from '@/components/(blog)/all-posts'

export default async function BlogPage(props) {
  const params = await props.params
  const initial = await loadBlog(params)

  if (!initial.data) {
    notFound()
  }

  return (
    <section className='min-h-screen w-full py-12'>
      <div className='container mx-auto my-12 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='mx-auto grid grid-cols-1 items-center leading-relaxed'>
          <PageHeader id='tags' showSearch={true} showLink={true} linkHref='/' linkText='Home' />
          <h2 className='mb-[1.25em] mt-[1.25em] font-serif text-[1.5em] font-bold leading-snug text-[#111827] xl:text-[1.9em] xl:leading-none dark:text-white'>
            Welcome to my blog, where I write about things and stuff!
          </h2>
          <hr className='mb-12' />
          <div className='mx-auto mb-4 px-4'>
            <AllPosts posts={initial.data} />
          </div>
        </div>
      </div>
    </section>
  )
}
