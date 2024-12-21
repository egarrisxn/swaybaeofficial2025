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
    <div className='mx-auto flex min-h-screen flex-col items-center border-2 py-12'>
      <div className='mx-auto my-12 max-w-[100rem]'>
        <PageHeader id='tags' showSearch={true} showLink={true} linkHref='/blog' linkText='Back' />
        <h2 className='my-12 max-w-3xl px-4 text-5xl font-medium leading-none tracking-tighter'>
          {title}
        </h2>
        <hr className='mb-12' />
        <div className='mx-auto mb-4 mt-8 grid grid-cols-1 gap-8 px-4'>
          <div className='grid grid-cols-1 gap-8'>
            {posts.map((post) => (
              <TagCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
