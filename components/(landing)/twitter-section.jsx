import {TwitterCard} from '@/components/twitter-card'

export default function TwitterSection() {
  return (
    <section className='border-4 border-white py-12 dark:border-black'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 place-items-center gap-6 lg:place-items-start lg:gap-8'>
          {/* Text Section */}
          <article className='flex w-full flex-col gap-1 p-2 sm:px-12 lg:gap-3 lg:p-2'>
            <h6 className='font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Keeping It Social
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl xl:mt-2 dark:from-stone-200 dark:to-neutral-200'>
              Follow me on my adventures!
            </h2>
            <p className='I found it. max-w-xl pb-3 font-light leading-relaxed md:text-lg lg:max-w-3xl lg:text-xl'>
              I create family-friendly entertainment centered around the concepts of positive mental
              attitude in gaming with the mantra of leaving someone&apos;s day better than I found
              it.
            </p>
          </article>

          {/* Tweets Section */}
          <div className='flex w-full flex-col items-center justify-center gap-4 p-2 sm:px-0 lg:flex-row lg:items-start lg:gap-3 lg:p-2 xl:gap-4'>
            <TwitterCard id='1845907938369511535' />
            <TwitterCard id='1843019037678440841' />
            <TwitterCard id='1837740206122061936' />
          </div>
        </div>
      </div>
    </section>
  )
}
