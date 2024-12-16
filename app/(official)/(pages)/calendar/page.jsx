import {buttonVariants} from '@/components/ui/button'
import FullGoogleCalendar from '@/components/full-calendar'

export const metadata = {
  title: 'Calendar',
}

export default function CalendarPage() {
  return (
    <div className='my-24 grid place-items-center gap-8'>
      <h1 className='text-2xl font-medium'>Calendar Page</h1>
      <section className='max-w-4xl'>
        <div className='rounded-lg border-2 p-2 shadow-lg xl:p-4'>
          <FullGoogleCalendar />
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
      </section>
    </div>
  )
}
