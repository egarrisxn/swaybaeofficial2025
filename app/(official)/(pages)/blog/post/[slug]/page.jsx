import {notFound} from 'next/navigation'
import {generateStaticSlugs} from '@/lib/sanity/generateStaticSlugs'
import {loadPost} from '@/lib/sanity/loadQuery'
import PostPage from '@/components/post-page'

export function generateStaticParams() {
  return generateStaticSlugs('post')
}

export default async function PostSlugPage({params}) {
  const initial = await loadPost(params.slug)

  if (!initial.data) {
    notFound()
  }

  return <PostPage post={initial.data} />
}
