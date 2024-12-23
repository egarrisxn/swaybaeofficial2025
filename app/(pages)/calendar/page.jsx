import {FullGoogleCalendar} from '@/components/full-calendar'
import {GoogleCalendarList} from '@/components/calendar-list'

export const metadata = {
  title: 'Calendar',
}

export default function CalendarPage() {
  return (
    <section className='min-h-screen w-full py-12'>
      <div className='container mx-auto my-24 max-w-7xl px-4 xl:px-0'>
        <div className='mx-auto grid grid-cols-1'>
          <h2 className='mb-4 mt-6 font-serif text-[1.5rem] font-black leading-snug text-[#111827] xl:mt-8 xl:text-[2rem] xl:leading-none dark:text-white'>
            Calendar
          </h2>
          <p className='mb-6 mt-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className='hidden rounded-lg border-2 bg-white p-2 text-[#111827] shadow-lg md:block xl:p-4'>
            <FullGoogleCalendar />

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
          <div className='block rounded-lg border-2 bg-white p-2 text-[#111827] shadow-lg md:hidden xl:p-4'>
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
        </div>
      </div>
    </section>
  )
}
