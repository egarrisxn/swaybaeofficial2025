import {Button} from '@/components/ui/button'
import {StackedCards} from '@/components/stacked-cards'
import {SwaysButton} from '@/components/sways-button'

export default function MerchSection() {
  return (
    <section className='border-4'>
      <div className='xl-gap-12 container mx-auto my-24 grid max-w-2xl grid-cols-1 justify-center gap-4 p-4 lg:max-w-7xl lg:grid-cols-2'>
        <article className='flex flex-col items-start justify-center gap-4 px-4 lg:px-8 xl:px-4'>
          <span className='uppercase leading-loose tracking-wider xl:text-lg'>
            The Official Merch Store.
          </span>
          <h2 className='font-sansita mt-1 text-3xl italic lg:mt-2 lg:text-5xl xl:text-6xl'>
            Stay fly in your Bae Squad gear!
          </h2>
          <p className='my-4 max-w-xl font-light leading-loose tracking-wider md:text-lg xl:text-xl'>
            From t-shirts and hats, to water bottle and coffee mugs, Sway has you covered! Winter is
            around the corner, so you better grab your Its Not A Phase Sweater now!
          </p>
          <Button asChild variant='bubble' size='lg' className='mb-4'>
            <a href='https://shop.swaybae.net' rel='noopener noreferrer' target='_blank'>
              Shop Now!
            </a>
          </Button>
          <SwaysButton text={'Shop Now!'} />
        </article>
        <aside className='flex px-4 lg:px-8 xl:px-4'>
          <StackedCards />
        </aside>
      </div>
    </section>
  )
}
