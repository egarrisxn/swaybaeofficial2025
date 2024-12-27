import {CalendarGrid} from '@/components/calendar-grid'
import {CalendarList} from '@/components/calendar-list'

export const metadata = {
  title: 'Calendar',
}

function TextBlurb({h2, p}) {
  return (
    <>
      <h2 className='mb-4 mt-6 font-serif text-[1.5rem] font-black leading-snug text-[#111827] xl:mt-8 xl:text-[2rem] xl:leading-none dark:text-white'>
        {h2}
      </h2>
      <p className='mb-6 mt-5 max-w-5xl leading-relaxed text-[#374151] xl:text-[1.25rem] dark:text-[#d1d5db]'>
        {p}
      </p>
    </>
  )
}

export default function CalendarPage() {
  return (
    <section className='min-h-screen w-full py-12'>
      <div className='container mx-auto my-24 max-w-7xl px-4 xl:px-0'>
        <div className='mx-auto grid grid-cols-1'>
          <TextBlurb
            h2='Calendar'
            p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
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
