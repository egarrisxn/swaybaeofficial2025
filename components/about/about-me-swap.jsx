'use client'
import {useState} from 'react'
import Image from 'next/image'
import {ArrowLeft} from '@/components/icons/arrow-left'
import {ArrowRight} from '@/components/icons/arrow-right'

export default function AboutMeSwap() {
  const [isSwapped, setIsSwapped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleContent = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsSwapped((prev) => !prev)
      setIsAnimating(false)
    }, 200) // Match the animation duration
  }

  const content = {
    first: {
      title: 'So, Who Am I?',
      subtitle: 'Praesent euismod sed magna auctor feugiat.',
      text: 'Nullam tristique odio eget vestibulum vulputate. Vivamus condimentum lorem et nunc volutpat, non tincidunt lacus egestas. Curabitur aliquam tincidunt dui vel condimentum.',
      image: '/grid/1.jpg',
      alt: 'A cutout photo of Sway',
    },
    second: {
      title: 'What Is My Purpose?',
      subtitle: 'Fusce aliquet ligula sit amet urna commodo.',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec congue nisl vel lorem laoreet, a laoreet magna vulputate.',
      image: '/grid/2.jpg',
      alt: 'Another photo of Sway',
    },
  }

  const currentContent = isSwapped ? content.second : content.first

  return (
    <section className='py-12'>
      <div className='container mx-auto my-24 max-w-4xl px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl'>
        <div className='p-1'>
          <div
            className={`grid grid-cols-1 items-center gap-4 p-1 transition-opacity duration-200 md:grid-cols-2 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {isSwapped ? (
              <>
                <aside className='order-2 md:order-1'>
                  <Image
                    src={currentContent.image}
                    alt={currentContent.alt}
                    width={750}
                    height={1000}
                    className='rounded border-[40px] border-slate-200'
                  />
                </aside>
                <article className='order-1 flex h-full flex-col justify-between px-2 py-8 md:order-2'>
                  <div className='text-start md:text-end'>
                    <h2 className='mb-4 font-serif text-2xl leading-snug tracking-tight text-[#111827] md:mb-3 md:text-3xl lg:mb-6 lg:text-4xl xl:text-5xl 2xl:text-6xl dark:text-white'>
                      {currentContent.title}
                    </h2>
                    <h3 className='font-medium leading-snug tracking-tight text-black lg:text-lg xl:text-xl 3xl:text-2xl dark:text-white'>
                      {currentContent.subtitle}
                    </h3>
                    <p className='my-5 leading-relaxed text-[#374151] md:pr-8 lg:pr-0 lg:text-lg lg:tracking-wide xl:text-xl 3xl:text-2xl dark:text-[#d1d5db]'>
                      {currentContent.text}
                    </p>
                  </div>
                  <div className='mt-8 flex justify-start md:justify-end'>
                    <button
                      onClick={toggleContent}
                      className='group flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary'
                    >
                      <ArrowLeft className='ml-1 size-4 transition group-hover:-translate-x-1' />{' '}
                      <span className='tracking-wide'>2 of 2</span>
                    </button>
                  </div>
                </article>
              </>
            ) : (
              <>
                <article className='flex h-full flex-col justify-between px-2 py-8'>
                  <div className='text-start'>
                    <h2 className='mb-4 font-serif text-2xl leading-snug tracking-tight text-[#111827] md:mb-3 md:text-3xl lg:mb-6 lg:text-4xl xl:text-5xl 2xl:text-6xl dark:text-white'>
                      {currentContent.title}
                    </h2>
                    <h3 className='font-medium leading-snug tracking-tight text-black lg:text-lg xl:text-xl 3xl:text-2xl dark:text-white'>
                      {currentContent.subtitle}
                    </h3>
                    <p className='my-5 leading-relaxed text-[#374151] md:pr-8 lg:pr-0 lg:text-lg lg:tracking-wide xl:text-xl 3xl:text-2xl dark:text-[#d1d5db]'>
                      {currentContent.text}
                    </p>
                  </div>
                  <div className='mt-8 flex justify-start'>
                    <button
                      onClick={toggleContent}
                      className='group flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary'
                    >
                      <span className='tracking-wide'>1 of 2</span>{' '}
                      <ArrowRight className='mr-1 size-4 transition group-hover:translate-x-1' />
                    </button>
                  </div>
                </article>
                <aside>
                  <Image
                    src={currentContent.image}
                    alt={currentContent.alt}
                    width={750}
                    height={1000}
                    className='rounded border-[40px] border-slate-200'
                  />
                </aside>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
