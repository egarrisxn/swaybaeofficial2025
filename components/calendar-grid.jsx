import {FullCalendarGrid} from '@/components/ui/full-calendar'

export function CalendarGrid() {
  return (
    <div className='rounded-lg border-2 bg-white p-2 text-[#111827] shadow-lg xl:p-4'>
      <FullCalendarGrid />
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
  )
}
