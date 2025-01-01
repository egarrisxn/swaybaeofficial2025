import {socialInfo} from '@/lib/data'
import {SocialCard} from '@/components/social-card'

export default function SocialRow() {
  return (
    <section className='bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950'>
      <div className='space-y-4 py-12 md:space-y-6 md:p-14 lg:pb-16 xl:pb-20 xl:pt-[4.5rem] 2xl:space-y-6'>
        <h5 className='text-center text-xs font-semibold uppercase text-white md:text-sm lg:text-base'>
          Lets get social
        </h5>
        <div className='flex flex-row flex-wrap items-center justify-center gap-4 px-4 sm:gap-6 md:gap-8 md:px-8 2xl:px-0'>
          {socialInfo.map(({title, subtitle, href, Icon}) => (
            <SocialCard key={title} title={title} subtitle={subtitle} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
