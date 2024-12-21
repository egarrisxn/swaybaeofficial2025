import Link from 'next/link'
import {Button, buttonVariants} from '@/components/ui/button'
import {GoogleCalendarList} from '@/components/calendar-list'

export default function CalendarSection() {
  return (
    <section className='border-4 border-white py-12 dark:border-black'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 2xl:gap-16'>
          {/* Calendar Section */}
          <aside className='order-2 flex flex-col p-2 sm:px-12 lg:order-1 lg:p-2'>
            <div className='rounded-lg border-2 p-2 shadow-lg xl:px-4 xl:pt-4'>
              <GoogleCalendarList />
              <div className='flex justify-end md:mt-2'>
                <button className='hover:text-primary'>
                  <a
                    href='https://calendar.google.com/calendar/u/0/r?cid=63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={buttonVariants({variant: 'link'})}
                  >
                    Add to Your Calendar
                  </a>
                </button>
              </div>
            </div>
          </aside>

          {/* Text Section */}
          <article className='order-1 flex w-full flex-col gap-3 p-4 sm:px-12 lg:order-2 lg:gap-6 lg:px-4'>
            <h6 className='font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Stay up to date
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl xl:mt-2 dark:from-stone-200 dark:to-neutral-200'>
              Check what is next on the calendar!
            </h2>
            <p className='I found it. max-w-xl pb-3 font-light leading-relaxed md:text-lg lg:text-xl'>
              I create family-friendly entertainment centered around the concepts of positive mental
              attitude in gaming with the mantra of leaving someone&apos;s day better than..
            </p>
            <Button asChild variant='bubble' size='lg'>
              <Link href='/calendar'>Calendar Page</Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  )
}
