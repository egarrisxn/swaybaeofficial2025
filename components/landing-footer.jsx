import {ScrollToTop} from '@/components/scroll-to-top'
import {TooltipButton} from '@/components/tooltip-button'
import {socials} from '@/lib/data'

export default function LandingFooter() {
  return (
    <footer className='w-full border-t dark:border-foreground'>
      <div className='grid grid-cols-1 place-items-center gap-4 p-8 md:gap-6'>
        <section className='flex w-full flex-row items-center justify-center md:justify-end'>
          <ScrollToTop />
        </section>
        <section className='flex w-full flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:gap-0'>
          <p className='order-2 bg-gradient-to-bl from-primary to-secondary bg-clip-text font-semibold tracking-tight text-transparent md:order-1 lg:text-lg'>
            © 2024 Sway Bae. All rights reserved.
          </p>
          <div className='order-1 flex flex-row gap-2 md:order-2'>
            {socials.map((social) => (
              <TooltipButton
                className='lg:p-3.5'
                href={social.href}
                key={social.title}
                Icon={social.Icon}
                size='icon'
                title={social.title}
                variant='icon'
              />
            ))}
          </div>
        </section>
      </div>
    </footer>
  )
}
