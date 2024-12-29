'use client'
import {useRef} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const key = process.env.NEXT_PUBLIC_CALENDAR_API_KEY
const id = process.env.NEXT_PUBLIC_CALENDAR_ID

export function FullCalendarGrid() {
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

export function FullCalendarList() {
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
