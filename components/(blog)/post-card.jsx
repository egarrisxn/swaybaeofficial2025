'use client'
import Link from 'next/link'
import Image from 'next/image'
import {MoveRight} from 'lucide-react'
import {urlFor} from '@/lib/sanity/client'
import {Button} from '@/components/ui/button'
import TagBadge from './tag-badge'

export function PostCard({post, noTagColor = false, isFeatured = false}) {
  const {_id, coverImage, title, excerpt, tags, postSlug} = post

  return (
    <>
      <article key={_id} className='grid grid-cols-1 gap-2 pb-4'>
        <section
          className={`rounded transition hover:-translate-y-1 hover:opacity-85 ${isFeatured ? 'mb-2' : 'mb-1'}`}
        >
          <Link href={`/blog/post/${postSlug}`}>
            <Image
              className='rounded object-cover object-center'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt}
              width={1000}
              height={400}
            />
          </Link>
        </section>
        <hr className={`mb-0 h-0.5 bg-foreground ${isFeatured ? 'mt-3' : 'mt-2'}`} />
        <section className={`flex flex-row flex-wrap gap-1 ${isFeatured ? 'text-sm' : 'text-xs'}`}>
          {tags?.length > 0 &&
            tags.map((tag) => (
              <div key={tag._id} className='hover:font-medium hover:shadow'>
                <TagBadge tag={tag} noColor={noTagColor} />
              </div>
            ))}
        </section>
        <section>
          <h3
            className={`my-3 tracking-normal text-gray-900 hover:underline hover:underline-offset-4 dark:text-gray-200 ${isFeatured ? 'text-3xl leading-snug lg:text-4xl' : 'truncate text-lg leading-normal lg:text-xl'}`}
          >
            <Link href={`/blog/post/${postSlug}`}>{title}</Link>
          </h3>
          <p
            className={`mb-3 font-light tracking-normal text-gray-700 dark:text-gray-300 ${isFeatured ? 'max-w-5xl text-lg leading-snug' : 'line-clamp-3 text-sm leading-normal'}`}
          >
            {excerpt}
          </p>
        </section>
        <section className='group'>
          <Button
            asChild
            variant='link'
            size='link'
            className={`font-semibold group-hover:font-bold group-hover:no-underline ${isFeatured ? 'text-lg' : 'text-sm'}`}
          >
            <Link href={`/blog/post/${postSlug}`}>
              Continue Reading{' '}
              <MoveRight
                size={16}
                className='-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
              />
            </Link>
          </Button>
        </section>
      </article>
    </>
  )
}
