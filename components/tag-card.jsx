import Link from 'next/link'
import CoverImage from './cover-image'
import DateBadge from './date-badge'

export default function TagCard({post}) {
  const {coverImage, title, excerpt, publishedAt, postSlug} = post

  return (
    <div className='bg-w2b shadow-soft hover:shadow-hard grid grid-cols-1 gap-2 rounded-lg border-2 p-4 md:p-8 lg:grid-cols-6 lg:p-2 2xl:gap-6'>
      <div className='hidden lg:col-start-1 lg:col-end-3 lg:grid lg:p-4'>
        <Link href={`/blog/post/${postSlug}`}>
          <CoverImage image={coverImage} priority />
        </Link>
      </div>
      <div className='lg:col-start-3 lg:col-end-6 lg:grid'>
        <div className='flex flex-col gap-2 p-1 lg:gap-3 lg:px-0 lg:py-4 2xl:gap-4'>
          <div className='flex flex-row lg:hidden'>
            <DateBadge publishedAt={publishedAt} />
          </div>
          <Link href={`/blog/post/${postSlug}`}>
            <h2 className='line-clamp-1 scroll-m-20 font-semibold tracking-tight first:mt-0 hover:underline md:text-lg lg:line-clamp-2 xl:text-2xl 2xl:text-3xl'>
              {title}
            </h2>
          </Link>
          <p className='text-gray-fade line-clamp-3 leading-snug sm:text-base sm:leading-7 lg:text-lg xl:text-xl xl:leading-normal 2xl:text-2xl'>
            {excerpt}
          </p>
        </div>
      </div>
      <div className='lg:col-span-1 lg:col-end-7 lg:grid'>
        <div className='flex flex-col lg:mt-2 lg:justify-between lg:p-4'>
          <div className='hidden justify-end lg:flex lg:flex-row'>
            <DateBadge publishedAt={publishedAt} />
          </div>
          <div className='flex justify-end'>
            <Link href={`/blog/post/${postSlug}`}>
              <h5 className='mt-4 font-bold text-primary 2xl:text-xl'>Read Post &#8594;</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
