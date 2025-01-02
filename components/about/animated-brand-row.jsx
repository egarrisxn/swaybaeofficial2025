import {LogoCarousel} from '@/components/unused/logo-carousel'

export default function AnimatedBrandRow() {
  return (
    <section className='w-full'>
      <div className='bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>
        <div className='mx-auto flex flex-col items-center justify-center space-y-3 pb-6 pt-12 md:pb-8 md:pt-14 lg:pb-10 lg:pt-16 xl:pb-12 xl:pt-20 2xl:pb-16'>
          <h5 className='text-center text-xs font-semibold uppercase text-white md:text-sm lg:text-base'>
            It&apos;s been my pleasure working with these brands
          </h5>
          <LogoCarousel columnCount={4} />
        </div>
      </div>
    </section>
  )
}
