import {notFound} from 'next/navigation'
import {loadBlog} from '@/lib/sanity/loadQuery'
import PageHeader from '@/components/blog/page-header'
import AllPosts from '@/components/blog/all-posts'

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
          <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 pt-12 font-serif text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200'>
            Welcome to my blog!
          </h2>
          <p className='max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
            Where I write about things and stuff.
          </p>
          <hr className='my-12' />
          <div className='mx-auto mb-4 px-4'>
            <AllPosts posts={initial.data} />
          </div>
        </div>
      </div>
    </section>
  )
}
