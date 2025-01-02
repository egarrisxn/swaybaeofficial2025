'use client'
import {Fragment} from 'react'

export const eventData = [
  {
    heading: '2019',
    subHeading: 'Started Journey.',
    body: 'Lorem Ipsum et folio de mart esno vite.',
    direction: 'right',
  },
  {
    heading: '2021',
    subHeading: 'First Milestone.',
    body: 'Lorem Ipsum et folio de mart esno.',
    direction: 'left',
  },
  {
    heading: '2023',
    subHeading: 'Second Milestone.',
    body: 'Lorem Ipsum et folio de mart.',
    direction: 'right',
  },
  {
    heading: '2024',
    subHeading: 'Third Milestone.',
    body: 'Lorem Ipsum er folio.',
    direction: 'left',
  },
  {
    heading: '2025',
    subHeading: 'Current Day.',
    body: 'Lorem Ipsum et folio de.',
    direction: 'right',
  },
]

const Circle = () => {
  return (
    <div className='mx-auto size-6 rounded bg-gradient-to-tr from-foreground to-background'></div>
  )
}

const Pillar = () => {
  return (
    <div className='mx-auto h-full w-1 rounded-t rounded-bl bg-gradient-to-t from-foreground to-background'></div>
  )
}

const EventCard = ({heading, subHeading, body}) => {
  return (
    <div className='flex h-auto w-60 transform flex-col gap-y-2 rounded-xl border p-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl'>
      <div className='border-b text-lg font-bold'>{heading}</div>
      <div className='italic'>{subHeading}</div>
      <div className='flex text-wrap text-sm'>{body}</div>
    </div>
  )
}

export function Timeline({eventData}) {
  return (
    <div className='my-8 flex w-full flex-col gap-y-4'>
      <Circle />

      {eventData.map((event, key) => {
        return (
          <Fragment key={key}>
            <div className='mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-x-2'>
              {event.direction === 'left' ? (
                <EventCard
                  heading={event.heading}
                  subHeading={event.subHeading}
                  body={event.body}
                />
              ) : (
                <div></div>
              )}
              <Pillar />
              {event.direction === 'right' ? (
                <EventCard
                  heading={event.heading}
                  subHeading={event.subHeading}
                  body={event.body}
                />
              ) : (
                <div></div>
              )}
            </div>
            {key < eventData.length - 1 && <Circle />}
          </Fragment>
        )
      })}
      <Circle />
    </div>
  )
}
