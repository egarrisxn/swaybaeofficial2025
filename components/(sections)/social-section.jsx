import {SocialCard} from '@/components/social-card'
import {socials} from '@/lib/data'

export default function SocialSection() {
  return (
    <section className='border-4'>
      <div className='space-y-4 py-12'>
        <h5 className='text-center text-sm font-semibold uppercase sm:text-base'>
          Other Ways to Find Me
        </h5>
        <div className='flex min-h-40 flex-row flex-wrap items-center justify-center gap-8 md:gap-16'>
          {socials.map(({title, subtitle, href, Icon}) => (
            <SocialCard key={title} title={title} subtitle={subtitle} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
