import {TwitterCard} from '@/components/twitter-card'

export default function TwitterSection() {
  return (
    <section className='py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 place-items-center gap-6 lg:place-items-start lg:gap-8'>
          {/* Text Section */}
          <article className='flex w-full flex-col gap-1 p-2 sm:px-12 sm:py-4 lg:gap-3 lg:px-4'>
            <h6 className='pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Keeping It Social
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 font-serif text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200'>
              Follow me on my adventures!
            </h2>
            <p className='max-w-3xl text-pretty pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300'>
              I create family-friendly entertainment centered around the concepts of positive mental
              attitude in gaming with the mantra of leaving someone&apos;s day better than I found
              it.
            </p>
          </article>
          {/* Tweets Section */}
          <div className='flex w-full flex-col items-center justify-center gap-4 py-2 lg:flex-row lg:items-start lg:gap-3 lg:px-2 xl:gap-4'>
            <TwitterCard id='1845907938369511535' />
            <TwitterCard id='1843019037678440841' />
            <TwitterCard id='1837740206122061936' />
          </div>
        </div>
      </div>
    </section>
  )
}
