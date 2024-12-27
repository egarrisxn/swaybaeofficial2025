import {Marquee} from '@/components/ui/marquee'
import {BrandCard} from '@/components/brand-card'

const brands = [
  {img: '/brands/youtube.png', href: 'https://youtube.com'},
  {img: '/brands/gcx.png', href: 'https://gcxevent.com'},
  {img: '/brands/hellofresh.png', href: 'https://hellofresh.com'},
  {img: '/brands/twitch.png', href: 'https://twitch.tv'},
  {img: '/brands/1000dreams.png', href: 'https://1000dreamsfund.org'},
  {img: '/brands/supergirl.png', href: 'https://supergirlgamerpro.com'},
  {img: '/brands/blizzard.png', href: 'https://blizzard.com'},
  {img: '/brands/dreamhack.png', href: 'https://dreamhack.com'},
]

export default function BrandRow() {
  return (
    <section className='bg-gradient-to-t from-slate-200 via-slate-300 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>
      <div className='space-y-1 pb-6 pt-12 md:pb-8 md:pt-14 lg:pt-16 xl:pt-[4.5rem]'>
        <h5 className='text-center text-xs font-semibold uppercase text-slate-800 lg:text-base dark:text-white'>
          Past Partnerships
        </h5>
        <div className='mx-auto flex max-w-[calc(100vw-1.2rem)] overflow-hidden'>
          <Marquee pauseOnHover>
            {brands.map((brand) => (
              <BrandCard key={brand.img} {...brand} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
