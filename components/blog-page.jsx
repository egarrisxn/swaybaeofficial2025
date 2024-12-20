import PageHeader from '@/components/page-header'
import AllPosts from '@/components/all-posts'

export default function BlogPage({blog}) {
  return (
    <>
      <PageHeader id='blog' showSearch={true} showLink={false}>
        Blog
      </PageHeader>
      {/* ----------List of Posts---------- */}
      <div className='3xl:px-16 4xl:max-w-screen-3xl mx-auto mb-4 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10'>
        <AllPosts posts={blog} />
      </div>
    </>
  )
}
