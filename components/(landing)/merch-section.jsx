import {Button} from '@/components/ui/button'
import {CardStack} from '@/components/card-stack'

export default function MerchSection() {
  return (
    <section className='py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16'>
          {/* Text Section */}
          <article className='xs:mt-10 order-2 flex w-full flex-col gap-3 p-4 sm:px-12 lg:order-1 lg:mt-0 lg:gap-5 lg:px-4'>
            <h6 className='pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Official Merch Store
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 font-serif text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200'>
              Stay fly in your Bae Squad gear!
            </h2>
            <p className='max-w-xl text-pretty pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300'>
              From t-shirts and hats, to water bottle and coffee mugs, Sway has you covered! Winter
              is around the corner, so you better grab your Its Not A Phase Sweater now! Winter is
              around the corner, so you better grab your Its Not A Phase Sweater now! Grab yours
              before they are gone!
            </p>
            <Button asChild variant='main' size='lg'>
              <a href='https://shop.swaybae.net' rel='noopener noreferrer' target='_blank'>
                Shop Now!
              </a>
            </Button>
          </article>

          {/* Merch Section */}
          <aside className='order-1 flex size-full items-center justify-center py-4 lg:order-2 xl:pr-16'>
            <CardStack />
          </aside>
        </div>
      </div>
    </section>
  )
}
