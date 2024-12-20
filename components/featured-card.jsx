import Link from 'next/link'
import CoverImage from './cover-image'
import TagBadge from './tag-badge'
import DateBadge from './date-badge'

export default function FeaturedCard({post}) {
  const {coverImage, title, excerpt, tags, publishedAt} = post

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
      <div className='hover:shadow-hard transition-all duration-300 ease-in-out'>
        <Link href={`/blog/post/${post.postSlug}`}>
          <CoverImage image={post.coverImage} priority />
        </Link>
      </div>
      <section className='flex flex-col gap-4 lg:p-1'>
        <div className='hidden justify-between lg:flex'>
          <DateBadge publishedAt={publishedAt} />
          <div className='flex gap-1'>
            {tags.map((tag) => (
              <div key={tag._id}>
                <TagBadge tag={tag} />
              </div>
            ))}
          </div>
        </div>
        <div className='mt-2 space-y-2 lg:ml-1 lg:mt-2'>
          <Link href={`/blog/post/${post.postSlug}`}>
            <h3 className='3xl:text-4xl scroll-m-20 text-2xl font-semibold leading-tight tracking-tighter first:mt-0 hover:underline md:text-3xl'>
              {title}
            </h3>
          </Link>
          <p className='text-gray-fade 3xl:text-2xl line-clamp-3 scroll-m-20 text-lg font-medium tracking-tight md:text-xl'>
            {excerpt}
          </p>
          <Link
            href={`/blog/post/${post.postSlug}`}
            className='font-bold text-primary hover:font-extrabold'
          >
            <p className='pt-2'>Read Post&#8594;</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
