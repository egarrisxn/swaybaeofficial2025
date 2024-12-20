import {Marquee} from '@/components/ui/marquee'
import {BrandCard} from '@/components/brand-card'

const brands = [
  {img: '/brands/supergirl.png', href: 'https://supergirlgamerpro.com'},
  {img: '/brands/blizzard.png', href: 'https://blizzard.com'},
  {img: '/brands/hellofresh.png', href: 'https://hellofresh.com'},
  {img: '/brands/twitch.png', href: 'https://twitch.tv'},
  {img: '/brands/1000dreams.png', href: 'https://1000dreamsfund.org'},
  {img: '/brands/youtube.png', href: 'https://youtube.com'},
  {img: '/brands/gcx.png', href: 'https://gcxevent.com'},
  {img: '/brands/dreamhack.png', href: 'https://dreamhack.com'},
]

export function BrandsMarquee() {
  return (
    <section className='bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700'>
      <div className='space-y-1 pb-8 pt-12 sm:pb-16 sm:pt-16 lg:space-y-2 lg:pb-[3.5rem] lg:pt-[4.5rem]'>
        <h5 className='text-center text-sm font-semibold uppercase text-white lg:text-base'>
          Past & Present Partnerships
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
