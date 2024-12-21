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
    <div className='mx-auto flex min-h-screen flex-col items-center border-2 py-12'>
      <div className='mx-auto my-12 max-w-[100rem]'>
        <PageHeader id='tags' showSearch={true} showLink={true} linkHref='/' linkText='Home' />
        <h2 className='my-12 max-w-3xl px-4 text-5xl font-medium leading-none tracking-tighter'>
          Welcome to my blog, where I write about things and stuff!
        </h2>
        <hr className='mb-12' />
        <div className='mx-auto mb-4 px-4'>
          <AllPosts posts={initial.data} />
        </div>
      </div>
    </div>
  )
}
