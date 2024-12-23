'use client'
import React, {useEffect, useState} from 'react'

export function DigitalClock() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    ampm: 'AM',
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      let h = now.getHours()
      let m = now.getMinutes()
      let s = now.getSeconds()
      const ap = h >= 12 ? 'PM' : 'AM'

      if (h > 12) h -= 12

      setTime({
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`,
        ampm: ap,
      })
    }

    const interval = setInterval(updateTime, 1000)
    updateTime()

    return () => clearInterval(interval)
  }, [])

  return (
    <div id='time' className='flex gap-10 text-white'>
      <TimeCircle label='Hours' value={time.hours} color='text-pink-500' />
      <TimeCircle label='Minutes' value={time.minutes} color='text-yellow-400' />
      <TimeCircle label='Seconds' value={time.seconds} color='text-green-500' />
      <div className='flex items-center justify-center text-lg font-medium'>{time.ampm}</div>
    </div>
  )
}

function TimeCircle({label, value, color}) {
  return (
    <div className='relative flex flex-col items-center'>
      <div className={`absolute h-36 w-36 rounded-full border-4 border-gray-600`}>
        <svg className='absolute h-36 w-36 rotate-[-90deg] transform'>
          <circle cx='72' cy='72' r='70' className='stroke-gray-700' strokeWidth='4' fill='none' />
          <circle
            cx='72'
            cy='72'
            r='70'
            className={`stroke-current ${color}`}
            strokeWidth='4'
            strokeDasharray='440'
            strokeDashoffset={440 - (value / (label === 'Hours' ? 12 : 60)) * 440}
            fill='none'
          />
        </svg>
      </div>
      <div className='z-10 text-3xl font-bold'>{value}</div>
      <span className='text-sm uppercase text-gray-400'>{label}</span>
    </div>
  )
}
