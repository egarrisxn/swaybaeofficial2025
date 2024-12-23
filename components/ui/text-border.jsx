'use client'
import {useEffect, useState} from 'react'
import {cn} from '@/lib/utils'

export default function TextBorder({text = 'Programming', className}) {
  const [isHoveredIn, setIsHoveredIn] = useState(false)
  const [isHoveredOut, setIsHoveredOut] = useState(false)

  const handleHover = () => {
    setIsHoveredIn(true)
  }

  const handleHoverExit = () => {
    setIsHoveredIn(false)
    setIsHoveredOut(true)
  }

  useEffect(() => {
    if (isHoveredOut) {
      const timer = setTimeout(() => {
        setIsHoveredOut(false)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isHoveredOut])

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHoverExit} className='overflow-hidden'>
      <div className='relative mt-1 h-1 w-full'>
        <div
          className={cn(
            'absolute right-0 top-0 size-full bg-pink-500 transition-transform duration-300',
            isHoveredIn
              ? 'translate-x-0 transform opacity-100'
              : '-translate-x-full transform opacity-0',
          )}
        ></div>
        <div
          className={cn(
            'absolute bottom-0 right-0 size-full translate-x-0 transform bg-pink-500 opacity-0 transition-transform duration-300',
            isHoveredOut && 'translate-x-full opacity-100',
          )}
        ></div>
      </div>
      <span
        className={cn(
          'bg-gradient-to-t from-neutral-200 to-neutral-300 bg-clip-text pb-3 text-4xl font-black leading-none tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[6rem]',
          className,
        )}
      >
        {text}
      </span>
      <div className='relative mt-1 h-1 w-full'>
        <div
          className={cn(
            'absolute left-0 top-0 size-full bg-pink-500 transition-transform duration-300',
            isHoveredIn
              ? '-translate-x-0 transform opacity-100'
              : 'translate-x-full transform opacity-0',
          )}
        ></div>
        <div
          className={cn(
            'absolute left-0 top-0 size-full translate-x-0 transform bg-pink-500 opacity-0 transition-transform duration-300',
            isHoveredOut && '-translate-x-full opacity-100',
          )}
        ></div>
      </div>
    </div>
  )
}
