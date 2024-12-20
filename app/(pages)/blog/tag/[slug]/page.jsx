import {notFound} from 'next/navigation'
import {generateStaticSlugs} from '@/lib/sanity/generateStaticSlugs'
import {loadTag} from '@/lib/sanity/loadQuery'
import PageHeader from '@/components/(blog)/page-header'
import TagCard from '@/components/(blog)/tag-card'

export function generateStaticParams() {
  return generateStaticSlugs('tag')
}

export default async function TagSlugPage(props) {
  const params = await props.params
  const initial = await loadTag(params.slug)

  if (!initial.data) {
    notFound()
  }

  return <TagSlug tag={initial.data} />
}

const TagSlug = ({tag}) => {
  const {title, posts} = tag

  if (!tag) return null

  return (
    <>
      <PageHeader id='tags' showSearch={true} showLink={true} linkHref='/blog' linkText='Back' />
      <div className='mx-auto mb-4 mt-12 max-w-7xl sm:px-4 lg:my-20 lg:px-6 xl:px-10'>
        <h3 className='mb-2 ml-1 text-2xl font-bold sm:text-3xl'>
          <span className='mr-1 text-xl'>&#9684;</span>
          {title}
        </h3>
        <div className='mt-8 grid grid-cols-1 gap-8 pb-16'>
          {posts.map((post) => (
            <TagCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
