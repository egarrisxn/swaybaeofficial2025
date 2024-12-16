import {TooltipButton} from '@/components/tooltip-button'
import {socials} from '@/lib/data'

export default function PagesFooter() {
  return (
    <footer className='w-full border-t dark:border-foreground'>
      <div className='grid grid-cols-1 place-items-center gap-4 p-8 md:grid-cols-2 md:gap-0'>
        <section className='order-2 w-full text-center md:text-start lg:order-1'>
          <p className='bg-gradient-to-bl from-primary to-secondary bg-clip-text font-semibold tracking-tight text-transparent'>
            © 2024 Sway Bae. All rights reserved.
          </p>
        </section>
        <section className='order-1 flex w-full flex-row items-center justify-center gap-2 md:order-2 md:justify-end'>
          <>
            {socials.map((social) => (
              <TooltipButton
                href={social.href}
                key={social.title}
                Icon={social.Icon}
                size='icon'
                title={social.title}
                variant='icon'
              />
            ))}
          </>
        </section>
      </div>
    </footer>
  )
}
