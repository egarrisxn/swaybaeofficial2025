'use client'
import Link from 'next/link'
import Image from 'next/image'
import {urlFor} from '@/lib/sanity/client'
import TagBadge from './tag-badge'
import DateBadge from './date-badge'

export default function PostCard({post, isFeatured = false}) {
  const {_id, coverImage, title, excerpt, tags, publishedAt, postSlug} = post

  return (
    <article
      key={_id}
      className={`grid ${isFeatured ? 'grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8' : 'grid-cols-1 gap-2 md:gap-3'}`}
    >
      <div
        className={`transition-all duration-300 ease-in-out ${!isFeatured && 'shadow-soft rounded'}`}
      >
        <Link href={`/blog/post/${postSlug}`}>
          <Image
            className='rounded border-2 object-cover object-center p-1'
            src={urlFor(coverImage.image).fit('max').auto('format').url()}
            alt={coverImage.alt}
            width={1000}
            height={400}
          />
        </Link>
      </div>
      <section
        className={`flex flex-col gap-4 ${isFeatured ? 'lg:p-1' : 'mt-2 space-y-2 md:ml-1'}`}
      >
        <div className={`flex ${isFeatured ? 'justify-between lg:flex' : 'justify-end'} gap-1`}>
          <DateBadge publishedAt={publishedAt} />
          {tags?.length > 0 &&
            tags.map((tag) => (
              <div key={tag._id}>
                <TagBadge tag={tag} />
              </div>
            ))}
        </div>
        <div>
          <Link href={`/blog/post/${postSlug}`}>
            <h3
              className={`${
                isFeatured ? 'text-2xl font-semibold md:text-3xl' : 'text-xl font-bold'
              } leading-tight tracking-tighter hover:underline`}
            >
              {title}
            </h3>
          </Link>
          <p
            className={`text-slate-3-- ${
              isFeatured ? 'text-lg font-medium md:text-xl' : 'text-lg'
            } tracking-tight`}
          >
            {excerpt}
          </p>
          <Link
            href={`/blog/post/${postSlug}`}
            className='font-bold text-primary hover:font-extrabold'
          >
            <p className='pt-2'>Read Post&#8594;</p>
          </Link>
        </div>
      </section>
    </article>
  )
}
