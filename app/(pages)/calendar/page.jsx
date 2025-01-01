import {CalendarGrid} from '@/components/calendar-grid'
import {CalendarList} from '@/components/calendar-list'

export const metadata = {
  title: 'Calendar',
}

export default function CalendarPage() {
  return (
    <section className='min-h-screen w-full py-12'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <div className='mx-auto grid grid-cols-1 items-center leading-relaxed'>
          <h2 className='mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[2.0rem] xl:leading-none dark:text-white'>
            Calendar
          </h2>
          <h5>Official Bio</h5>
          <p className='my-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className='hidden md:block'>
            <CalendarGrid />
          </div>
          <div className='block md:hidden'>
            <CalendarList />
          </div>
        </div>
      </div>
    </section>
  )
}
