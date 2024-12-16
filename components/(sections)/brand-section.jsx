import {Marquee} from '@/components/ui/marquee'
import {BrandCard} from '@/components/brand-card'
import {brands} from '@/lib/data'

export default function BrandsSection() {
  return (
    <section className='border-4'>
      <div className='space-y-4 py-12'>
        <h5 className='text-center text-sm font-semibold uppercase sm:text-base'>
          Brands I have worked with
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
