import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {GoogleCalendarList} from '@/components/calendar-list'

export default function CalendarSection() {
  return (
    // <section className='min-h-screen border-4 border-white py-12 dark:border-black'>
    <section className='py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-12 2xl:gap-16'>
          {/* Calendar Section */}
          <aside className='order-2 flex flex-col p-4 sm:px-12 lg:order-1 lg:px-2 xl:px-4'>
            <div className='rounded-lg border-2 bg-white p-2 text-[#111827] shadow-lg lg:p-3 xl:p-4'>
              <GoogleCalendarList />
              <div className='flex justify-end md:mt-3'>
                <a
                  href='https://calendar.google.com/calendar/u/0/r?cid=63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex h-9 items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium text-[#111827] transition-colors hover:underline hover:underline-offset-4'
                >
                  Add to Your Calendar
                </a>
              </div>
            </div>
          </aside>

          {/* Text Section */}
          <article className='order-1 flex w-full flex-col gap-3 p-4 sm:px-12 lg:order-2 lg:px-2 lg:pt-8 xl:gap-5 xl:px-4'>
            <h6 className='pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100'>
              Stay up to date
            </h6>
            <h2 className='bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 font-serif text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200'>
              Check what is next on the calendar!
            </h2>
            <p className='max-w-xl text-pretty pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300'>
              I create family-friendly entertainment centered around the concepts of positive mental
              attitude in gaming with the mantra of leaving someone&apos;s day better than. I create
              family-friendly entertainment centered around the concepts of positive mental attitude
              in gaming with the mantra of leaving someone&apos;s day better than.
            </p>
            <Button asChild variant='main' size='lg'>
              <Link href='/calendar'>Calendar Page</Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  )
}
