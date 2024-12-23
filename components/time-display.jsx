'use client'
import {useEffect, useState} from 'react'

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div suppressHydrationWarning>
      {time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'America/New_York',
      })}
    </div>
  )
}

export function TimeOfDay() {
  return (
    <div
      className='flex flex-row items-end gap-2 text-inherit lg:flex-col lg:gap-0 lg:text-lg 2xl:text-2xl'
      aria-label='Time of day'
    >
      <TimeDisplay />
    </div>
  )
}
