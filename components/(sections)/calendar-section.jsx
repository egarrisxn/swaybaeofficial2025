import Link from 'next/link'
import {Button, buttonVariants} from '@/components/ui/button'
import {GoogleCalendarList} from '@/components/calendar-list'
import {SwaysButton} from '@/components/sways-button'

export default function CalendarSection() {
  return (
    <section className='border-4'>
      <div className='container mx-auto my-24 grid max-w-2xl grid-cols-1 justify-center gap-8 p-4 lg:max-w-7xl lg:grid-cols-2 xl:gap-12'>
        <aside className='order-2 flex flex-col px-4 lg:order-1 lg:px-8'>
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
        <article className='order-1 flex flex-col items-start justify-center gap-4 px-4 lg:order-2 lg:px-8 xl:px-4'>
          <span className='uppercase leading-loose tracking-wider xl:text-lg'>
            Stay up to date.
          </span>
          <h2 className='mt-1 text-3xl italic lg:mt-2 lg:text-5xl xl:text-6xl'>
            Check what is next on the calendar!
          </h2>
          <p className='my-4 max-w-xl font-light leading-loose tracking-wider md:text-lg xl:text-xl'>
            I create family-friendly entertainment centered around the concepts of positive mental
            attitude in gaming with the mantra of leaving someone&apos;s day better than I found it.
          </p>
          <Button asChild variant='bubble' size='lg' className='mb-4'>
            <Link href='/calendar'>Calendar Page</Link>
          </Button>
          <SwaysButton text={'Calendar Page'} />
        </article>
      </div>
    </section>
  )
}
