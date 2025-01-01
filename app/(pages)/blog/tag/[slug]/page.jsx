import {notFound} from 'next/navigation'
import {generateStaticSlugs} from '@/lib/sanity/generateStaticSlugs'
import {loadTag} from '@/lib/sanity/loadQuery'
import PageHeader from '@/components/blog/page-header'
import TagCard from '@/components/blog/tag-card'

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
    <section className='min-h-screen w-full py-12'>
      <div className='container mx-auto my-12 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='mx-auto grid grid-cols-1 items-center leading-relaxed'>
          <PageHeader
            id='tags'
            showSearch={true}
            showLink={true}
            linkHref='/blog'
            linkText='Back'
          />
          <h2 className='my-5 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[2.0rem] xl:leading-none dark:text-white'>
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
    </section>
  )
}
