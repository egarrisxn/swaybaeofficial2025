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
    <>
      <PageHeader id='blog' showSearch={true} showLink={false}>
        Blog
      </PageHeader>

      <div className='mx-auto mb-4 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10'>
        <AllPosts posts={initial.data} />
      </div>
    </>
  )
}
