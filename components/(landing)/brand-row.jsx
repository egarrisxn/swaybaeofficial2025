import {brandIcons} from '@/lib/data'
import {Marquee} from '@/components/ui/marquee'
import {BrandCard} from '@/components/brand-card'

export default function BrandRow() {
  return (
    <section className='bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>
      <div className='space-y-1 pb-6 pt-12 md:pb-8 md:pt-14 lg:pt-16 xl:pt-[4.5rem]'>
        <h5 className='text-center text-xs font-semibold uppercase text-white md:text-sm lg:text-base'>
          Past Partnerships
        </h5>
        <div className='mx-auto flex max-w-[calc(100vw-1.2rem)] overflow-hidden'>
          <Marquee pauseOnHover>
            {brandIcons.map((brand) => (
              <BrandCard key={brand.img} {...brand} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
