import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {ArrowLeft, MoveLeft} from 'lucide-react'
import {generateStaticSlugs} from '@/lib/sanity/generateStaticSlugs'
import {loadPost} from '@/lib/sanity/loadQuery'
import {urlFor} from '@/lib/sanity/client'
import TableOfContent from '@/components/(blog)/table-of-content'
import TagBadge from '@/components/(blog)/tag-badge'
import DateBadge from '@/components/(blog)/date-badge'
import CustomPortableText from '@/components/(blog)/portable-text'

export function generateStaticParams() {
  return generateStaticSlugs('post')
}

export default async function PostSlugPage(props) {
  const params = await props.params
  const initial = await loadPost(params.slug)

  if (!initial.data) {
    notFound()
  }

  return <PostSlug post={initial.data} />
}

const PostSlug = ({post}) => {
  const {title, coverImage, content, headings, tags, publishedAt} = post

  if (!post) return null

  return (
    <div className='mx-auto flex min-h-screen flex-col items-center border-2 py-12'>
      <div className='my-12'>
        <aside>
          <div className='fixed left-auto right-[2rem] top-[10rem] mt-0 hidden h-full w-48 justify-start space-y-4 transition lg:left-[1.5rem] lg:top-[8rem] xl:right-auto xl:top-[10rem] xl:block 2xl:left-[8rem]'>
            <div className='flex flex-row'>
              <Link
                href={'/blog'}
                className='group flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary'
              >
                <ArrowLeft className='ml-1 size-4 transition group-hover:-translate-x-1' />{' '}
                <span className='uppercase tracking-widest'>Blog</span>
              </Link>
            </div>
          </div>
        </aside>
        <article className='mb-4 mt-12 grid max-w-4xl grid-cols-1 px-2 sm:px-4 lg:mt-20 lg:px-8 2xl:max-w-6xl'>
          <section className='space-y-2 py-4'>
            <Link
              href={'/blog'}
              className='group mb-4 flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary xl:hidden'
            >
              <MoveLeft className='ml-1 size-4 transition group-hover:-translate-x-1' />{' '}
              <span className='text-sm uppercase tracking-widest'>Blog</span>
            </Link>
            <h1 className='mb-2.5 text-lg font-medium lg:leading-[1.1] xl:text-xl'>{title}</h1>
            <div className='flex flex-wrap items-center space-x-1.5 text-sm text-muted-foreground'>
              <DateBadge publishedAt={publishedAt} />
              <div className='text-[0.6rem]'>•</div>
              <div>4 minute read</div>
            </div>
          </section>
          <section className='mt-2 flex max-[300px]:max-w-60'>
            <Image
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt || 'Cover Image'}
              width={820}
              height={310}
              className='w-full rounded border-2 bg-white object-cover object-center p-2'
            />
          </section>
          <section className='mb-6 mt-8 flex max-[300px]:max-w-60 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
            {/* <div className='prose-a:text-blue hover:prose-a:text-blue-tint prose-code:text-pink prose-th:bg-blue-tint prose-img:shadow-soft hover:prose-img:shadow-hard prose prose-slate mx-auto transition-all ease-in-out md:prose-base lg:prose-lg xl:prose-2xl dark:prose-invert prose-h1:text-primary prose-h2:text-secondary prose-h3:text-primary prose-h4:text-secondary prose-blockquote:border-primary prose-blockquote:text-secondary prose-ol:list-outside prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-li:marker:text-primary prose-th:text-xl prose-img:w-full'> */}
            <div className='prose prose-slate w-full transition-all ease-in-out md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-blockquote:border-primary prose-ol:list-outside prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-img:w-full prose-img:shadow hover:prose-img:shadow-sm'>
              <CustomPortableText value={content} />
            </div>
          </section>
        </article>
        <div className='flex max-w-4xl flex-row items-center justify-start px-2 max-[300px]:max-w-60 sm:px-4 lg:px-8 2xl:max-w-6xl'>
          <p className='pb-2 font-semibold md:pb-0 md:pr-2'>Tags:</p>
          <div className='flex flex-row gap-2'>
            {tags.map((tag) => (
              <div key={tag._id}>
                <TagBadge tag={tag} />
              </div>
            ))}
          </div>

          <aside>
            <TableOfContent headings={headings} />
          </aside>
        </div>
      </div>
    </div>
  )
}
