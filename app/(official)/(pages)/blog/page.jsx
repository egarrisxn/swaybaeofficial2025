import {notFound} from 'next/navigation'
import {loadBlog} from '@/lib/sanity/loadQuery'
import BlogPage from '@/components/blog-page'

export default async function BlogHomePage({params}) {
  const initial = await loadBlog(params)

  if (!initial.data) {
    notFound()
  }

  return <BlogPage blog={initial.data} />
}
