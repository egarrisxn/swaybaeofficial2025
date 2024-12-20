import Image from 'next/image'
import PageHeader from '@/components/page-header'
import TableOfContent from '@/components/table-of-content'
import TagBadge from '@/components/tag-badge'
import DateBadge from '@/components/date-badge'
import CustomPortableText from '@/components/portable-text'
import {urlFor} from '@/lib/sanity/utils'

export default function PostPage({post}) {
  if (!post) return null

  const {title, coverImage, content, headings, tags, publishedAt} = post

  return (
    <>
      <PageHeader id='post' showSearch={true} showLink={true} linkHref='/blog' linkText='Back' />
      {/* ----------Post Body---------- */}
      <article className='3xl:pr-16 4xl:max-w-screen-3xl mx-auto mb-4 mt-12 grid max-w-7xl grid-cols-1 sm:px-4 lg:mt-20 lg:grid-cols-12 lg:pr-6 xl:pr-10'>
        <aside className='col-start-1 col-end-2 hidden lg:sticky lg:top-[2rem] lg:block lg:h-screen lg:pt-12'>
          <TableOfContent headings={headings} />
        </aside>
        <div className='col-start-2 col-end-13 mx-auto grid sm:gap-2'>
          <DateBadge publishedAt={publishedAt} />
          <section className='3xl:flex-col mb-2 mt-8 flex items-center justify-between text-center'>
            <h1 className='3xl:px-4 3xl:text-6xl scroll-m-20 pb-2 text-xl font-extrabold leading-tight tracking-tight first:mt-0 sm:text-3xl md:text-4xl lg:text-5xl'>
              {title}
            </h1>
            <div className='3xl:py-2 hidden gap-1 lg:flex lg:justify-end'>
              {tags.map((tag) => (
                <div key={tag._id}>
                  <TagBadge tag={tag} />
                </div>
              ))}
            </div>
          </section>
          <section className='mt-1 flex max-[300px]:max-w-60 min-[300px]:mx-auto'>
            <Image
              className='shadow-soft hover:shadow-hard w-full rounded border-2 bg-white object-cover object-center p-2'
              src={urlFor(coverImage.image).fit('max').auto('format').url()}
              alt={coverImage.alt || 'Cover Image'}
              width={1000}
              height={300}
            />
          </section>
          <section className='mb-6 mt-8 flex max-[300px]:max-w-60 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
            <div className='prose-a:text-blue hover:prose-a:text-blue-tint prose-code:text-pink prose-th:bg-blue-tint prose-img:shadow-soft hover:prose-img:shadow-hard prose prose-slate mx-auto transition-all ease-in-out md:prose-base lg:prose-lg xl:prose-2xl dark:prose-invert prose-h1:text-primary prose-h2:text-secondary prose-h3:text-primary prose-h4:text-secondary prose-blockquote:border-primary prose-blockquote:text-secondary prose-ol:list-outside prose-ul:list-outside prose-li:leading-normal prose-li:tracking-tight prose-li:marker:text-primary prose-th:text-xl prose-img:w-full'>
              <CustomPortableText value={content} />
            </div>
          </section>
        </div>
      </article>
      <div className='3xl:mb-24 4xl:mb-10 4xl:max-w-6xl 4xl:pr-0 mb-16 flex max-w-5xl flex-col items-center justify-center max-[300px]:max-w-60 min-[300px]:mx-auto md:flex-row lg:mb-20'>
        <hr className='border-gray-fade mb-4 w-full rounded-lg border md:mb-0' />
        <p className='pb-2 font-semibold md:pb-0 md:pr-2'>Tags:</p>
        <div className='flex items-center justify-center gap-2'>
          {tags.map((tag) => (
            <div key={tag._id}>
              <TagBadge tag={tag} />
            </div>
          ))}
        </div>
        <hr className='border-gray-fade mt-4 w-full rounded-lg border md:mt-0' />
      </div>
    </>
  )
}
