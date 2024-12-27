'use client'
import {useRef} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const key = process.env.NEXT_PUBLIC_CALENDAR_API_KEY
const id = process.env.NEXT_PUBLIC_CALENDAR_ID

function FullGoogleCalendar() {
  const calendarRef = useRef(null)

  const handleViewChange = (view) => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.changeView(view)
    }
  }

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={key}
      events={{
        googleCalendarId: id,
      }}
      eventClick={(arg) => {
        window.open(arg.event.url, '_blank', 'width=700,height=600')
        arg.jsEvent.preventDefault()
      }}
      initialView={'dayGridMonth'}
      height={'auto'}
      customButtons={{
        dayGridMonth: {
          text: 'Calendar',
          click: () => handleViewChange('dayGridMonth'),
        },
        listMonth: {
          text: 'List',
          click: () => handleViewChange('listMonth'),
        },
      }}
      buttonIcons={{
        prev: 'chevron-left',
        next: 'chevron-right',
      }}
      headerToolbar={{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,listMonth',
      }}
      views={{
        listMonth: {
          titleFormat: {month: 'long', year: 'numeric'},
        },
        dayGridMonth: {
          titleFormat: {month: 'long', year: 'numeric'},
        },
      }}
    />
  )
}

export function CalendarGrid() {
  return (
    <div className='rounded-lg border-2 bg-white p-2 text-[#111827] shadow-lg xl:p-4'>
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
  )
}
