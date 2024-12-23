'use client'
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const key = process.env.NEXT_PUBLIC_CALENDAR_API_KEY
const id = process.env.NEXT_PUBLIC_CALENDAR_ID

export function GoogleCalendarList() {
  return (
    <FullCalendar
      plugins={[listPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={key}
      events={{
        googleCalendarId: id,
      }}
      eventClick={(arg) => {
        window.open(arg.event.url, '_blank', 'width=700,height=600')
        arg.jsEvent.preventDefault()
      }}
      initialView={'listMonth'}
      contentHeight='450px'
      buttonIcons={{
        prev: 'chevron-left',
        next: 'chevron-right',
      }}
      headerToolbar={{
        left: 'title',
        center: '',
        right: 'prev,next',
      }}
      views={{
        listMonth: {
          titleFormat: {month: 'long', year: 'numeric'},
        },
      }}
    />
  )
}
