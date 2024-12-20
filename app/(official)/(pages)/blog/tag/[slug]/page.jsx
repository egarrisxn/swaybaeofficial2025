import {notFound} from 'next/navigation'
import {generateStaticSlugs} from '@/lib/sanity/generateStaticSlugs'
import {loadTag} from '@/lib/sanity/loadQuery'
import TagPage from '@/components/tag-page'

export function generateStaticParams() {
  return generateStaticSlugs('tag')
}

export default async function TagSlugPage({params}) {
  const initial = await loadTag(params.slug)

  if (!initial.data) {
    notFound()
  }

  return <TagPage tag={initial.data} />
}
