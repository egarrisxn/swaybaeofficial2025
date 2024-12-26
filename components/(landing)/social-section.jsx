import {SocialCard} from '@/components/social-card'
import {socials} from '@/lib/data'

export default function SocialSection() {
  return (
    <section className='bg-gradient-to-t from-slate-200 via-slate-300 to-slate-100 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950'>
      <div className='space-y-4 pb-10 pt-8 sm:pb-12 md:space-y-5 md:pb-14 md:pt-12 lg:pb-16 lg:pt-14 xl:pb-20 xl:pt-[4.5rem] 2xl:space-y-6'>
        <h5 className='text-center text-xs font-semibold uppercase text-slate-800 md:text-sm lg:text-base dark:text-white'>
          Lets get social
        </h5>
        <div className='flex flex-row flex-wrap items-center justify-center gap-4 px-4 sm:gap-6 md:gap-8 md:px-8 lg:px-12 xl:gap-10 xl:px-16 2xl:px-8'>
          {socials.map(({title, subtitle, href, Icon}) => (
            <SocialCard key={title} title={title} subtitle={subtitle} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
