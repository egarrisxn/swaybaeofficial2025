import {CardStack} from '@/components/ui/card-stack'
import {Button} from '@/components/ui/button'

export default function MerchSection() {
  return (
    <section className='border-4 border-white py-12 dark:border-black'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12'>
          {/* Text Section */}
          <article className='flex w-full flex-col gap-3 p-4 sm:px-12 lg:gap-6 lg:px-4'>
            <h6 className='font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Official Merch Store
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl xl:mt-2 dark:from-stone-200 dark:to-neutral-200'>
              Stay fly in your Bae Squad gear!
            </h2>
            <p className='max-w-xl pb-3 font-light leading-relaxed text-gray-600 md:text-lg lg:text-xl dark:text-gray-400'>
              From t-shirts and hats, to water bottle and coffee mugs, Sway has you covered! Winter
              is around the corner, so you better grab your Its Not A Phase Sweater now!
            </p>
            <Button asChild variant='bubble' size='lg'>
              <a href='https://shop.swaybae.net' rel='noopener noreferrer' target='_blank'>
                Shop Now!
              </a>
            </Button>
          </article>

          {/* Merch Section */}
          <aside className='flex size-full items-center justify-center py-2 lg:items-start lg:py-4'>
            <CardStack />
          </aside>
        </div>
      </div>
    </section>
  )
}
