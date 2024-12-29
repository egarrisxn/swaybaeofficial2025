import Link from 'next/link'
import Image from 'next/image'
import {urlFor} from '@/lib/sanity/client'
import {ArrowRight} from '@/components/(icons)/arrow-right'
import {Button} from '@/components/ui/button'
import DateBadge from './date-badge'

export default function TagCard({post}) {
  const {coverImage, title, excerpt, publishedAt, postSlug} = post

  return (
    <div className='grid grid-cols-1 gap-2 rounded-lg border-2 p-4 md:p-8 lg:grid-cols-2 lg:gap-1 lg:p-2 xl:gap-2'>
      <section className='rounded transition hover:-translate-y-1 hover:opacity-85 lg:mx-auto lg:flex lg:items-center lg:justify-center 2xl:p-4'>
        <Link href={`/blog/post/${postSlug}`}>
          <Image
            className='rounded object-cover object-center'
            src={urlFor(coverImage.image).fit('max').auto('format').url()}
            alt={coverImage.alt}
            width={800}
            height={300}
          />
        </Link>
      </section>
      <section className='flex flex-col gap-2 p-4 2xl:gap-3'>
        <div className='flex justify-start lg:justify-end'>
          <DateBadge publishedAt={publishedAt} />
        </div>
        <hr className='my-3 2xl:my-5' />
        <div className='flex'>
          <h2 className='line-clamp-2 max-w-2xl text-2xl leading-normal tracking-normal text-gray-900 hover:underline hover:underline-offset-4 sm:text-3xl lg:line-clamp-1 xl:line-clamp-2 2xl:text-4xl 2xl:leading-relaxed 2xl:tracking-wide dark:text-gray-200'>
            <Link href={`/blog/post/${postSlug}`}>{title}</Link>
          </h2>
        </div>
        <div className='mt-1 flex h-full flex-col justify-between'>
          <div className='flex items-start justify-start'>
            <p className='mb-4 line-clamp-5 max-w-2xl font-light leading-normal tracking-normal text-gray-700 lg:line-clamp-3 xl:line-clamp-4 xl:text-lg 2xl:mb-3 2xl:line-clamp-6 dark:text-gray-300'>
              {excerpt}
            </p>
          </div>
          <div className='group flex items-end justify-end'>
            <Button
              asChild
              variant='link'
              size='link'
              className='text-lg font-semibold group-hover:font-bold group-hover:no-underline'
            >
              <Link href={`/blog/post/${postSlug}`}>
                Read Post{' '}
                <ArrowRight
                  width={16}
                  height={16}
                  className='-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
